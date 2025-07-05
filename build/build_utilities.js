import { replace } from 'esbuild-plugin-replace';
import path, { basename } from 'path'; // used in config dynamic string to replace
import conditionalBuild from 'esbuild-plugin-conditional-build-fixed';
import { footerPlugin } from './plugins/footer/esbuild.jsfunc.footer.plugin.js';
import { floatingmenuConfig } from './configs/esbuild.conf.floatingmenu.js';
import { build_logs } from './plugins/logs/logs.plugin.js';
import util from "util";
import esbuild from "esbuild";
import { watch } from 'fs';
/**
 * 
 * @param {Object} conditionalVariables Key pairs value of type <Condtionnal var>:1 or 0 (1 for active, 0 for inactive) 
 * @returns 
 */
export function initConditionnalBuildVars(conditionalVariables) {
    let condtionalConstants = [];
    for (const conditionName in conditionalVariables) {
        const conditionnalValue = conditionalVariables[conditionName];

        if (conditionnalValue == "1") {
            condtionalConstants.push(conditionName);
        }
    }
    return condtionalConstants;
}

/**
 * 
 * @param {Object} config  Key pairs value of type <StringToreplace>:<Value to replace> 
 */
export function initStringReplace(config) {
    const regex = /^js::/;
    let stringsToReplace = {};
    // Build conditionnal constants list : All constants set to "1" will be included
    for (const stringName in config) {
        const stringValue = config[stringName];
        var replacementString = "";
        if (regex.test(stringValue)) {
            let js = stringValue.replace(regex, '');
            replacementString = eval(js);
        } else {
            replacementString = stringValue;
        }
        stringsToReplace[stringName] = `"${replacementString}"`;
    }
    return stringsToReplace;
}

/**
 * 
 */
export function readProcessParams() {
    // Process param
    const args = ['--watch', '--name'];
    const options = {
        watch: {
            type: 'boolean',
            short: 'w',
        },
        name: {
            type: 'string',
            short: 'n',
            default: 'default',
        }
    };
    const {
        values,
        positionals,
    } = util.parseArgs({ options })
    return values;
}
/**
 * 
 * @param {Object} buildConfig 
 */
export function initBuildConf(buildConfig, processParams, conditionalConstants, strings2replace) {
    // Set bundle global variable name
    buildConfig.GlobalExportVar = buildConfig.GlobalExportVar + '_' + processParams['name'];

    /**
     * configure esbuild configuration
     */
    let esbuilConfiguration = {
        esbuildconf: floatingmenuConfig,
        entryPoint: buildConfig.entryPoint,
    };

    // set esbuild global variable name
    esbuilConfiguration.esbuildconf.globalName = buildConfig.GlobalExportVar;

    // Init esbuild configuration object
    return {
        ...esbuilConfiguration.esbuildconf, // esbuild conf default for project
        entryPoints: [esbuilConfiguration.entryPoint],
        plugins: [
            conditionalBuild(conditionalConstants),
            replace(strings2replace), // Replace string in source code
            footerPlugin({
                srcDir: './src', replacements: {
                    __BTT_GLOBAL_VAR__: buildConfig.GlobalExportVar // Replace by the global esbuild var to access bundle objects and functions
                }
            }),
            build_logs
        ],
        outfile: path.resolve(buildConfig.Output.path, buildConfig.Output.fileName),
        minify: false,
        write: false, // Do not output file because we need to add footer files in plugin "footer"
    };
}

/**
 * 
 * @param {*} isWatchMode esbuild mode. If undifined, will run "build", if set to anything else will run as "watch" mode 
 * @param {*} buildConf esbuild configuration
 */
export async function runBuild(isWatchMode, buildConf) {

    let ctx = await esbuild.context(buildConf);
    if (isWatchMode == undefined) {
        await ctx.rebuild();
        console.log("Build done");
    } else {
        await ctx.rebuild(); // first build
        // Watch for src file changes
        watchFooterFiles('./src', async () => {
            try {
                await ctx.rebuild();
            } catch (err) {
                console.error('Rebuild failed:', err);
            }
        });
        console.log("Watchin for file changes...");

        await new Promise(() => {
            process.on("SIGINT", async () => {
                await ctx.dispose();
                console.log("\nStop watching (SIGINT)");
                process.exit(0);
            });
            process.on("SIGTERM", async () => {
                await ctx.dispose();
                console.log("\nStop watching (SIGTERM)");
                process.exit(0);
            });
        });
    }
}

/**
 * Specific file watcher for "footer" files that are not part of esbuild source tree
 * @param {*} srcDir source folder
 * @param {*} rebuild callback to call when a file is changed
 */
async function watchFooterFiles(srcDir, rebuild) {
    console.log(`Watching for changes in ${srcDir}...`);
    try {
        // Watch the srcDir and its subdirectories
        const watcher = watch(srcDir, { recursive: true }, (eventType, filename) => {
            console.log(`[${new Date().toLocaleTimeString()}] Detected change in ${filename}, triggering rebuild...`);
            rebuild();
        });
        watcher.on('error', (err) => {
            console.error(`Watcher error in ${srcDir}:`, err);
        });
    } catch (err) {
        console.error(`Error setting up watcher for ${srcDir}:`, err);
    }
}