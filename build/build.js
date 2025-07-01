/**
 * Main build program to bundle TS project with esbuild
 */
import esbuild from 'esbuild';
import conditionalBuild from 'esbuild-plugin-conditional-build';
import { replace } from 'esbuild-plugin-replace';
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import util from "util";

// Known esbuild configs
import { floatingmenuConfig } from './esbuild.conf.floatingmenu.js';


async function build() {
    // Root path for output
    const outputRootPath = './output/';
    const outputFileName = 'btt_floatingmenu.js';

    /**
     * Configure strings to replace in sources files
     */
    // Load conditionnal build constants
    let stringsToReplace = {};
    let configPath = path.resolve("./build", ".buildconf.strings2replace");
    let stringsFileContents = fs.readFileSync(configPath, "utf8");
    let parsedStrings = dotenv.parse(stringsFileContents);
    const regex = /^js::/;
    // Build conditionnal constants list : All constants set to "1" will be included
    for (const stringName in parsedStrings) {
        var replacementString = "";
        if (regex.test(parsedStrings[stringName])) {
            let js = parsedStrings[stringName].replace(regex, '');
            replacementString = eval(js);
        } else {
            replacementString = parsedStrings[stringName];
        }
        stringsToReplace[stringName] = `"${replacementString}"`;
    }

    /**
     * Base esbuild configuration
     */
    let esbuilConfiguration = {
        esbuildconf: floatingmenuConfig,
        entryPoint: './src/FloatingMenu/main.ts',
    };

    // Process param
    const args = ['--watch'];
    const options = {
        watch: {
            type: 'boolean',
            short: 'w',
        }
    };
    const {
        values,
        positionals,
    } = util.parseArgs({ options })


    /**
     * do we need to watch for rebuild on file changes
     */
    let esbuildMode = esbuild.build; // this is the esbuild fonction to use for build or watching
    if (values["watch"] != undefined) {
        esbuildMode = esbuild.context;
    }

    // Load conditionnal build constants
    let condtionalConstants = [];
    let contantPath = path.resolve("./build", ".buildconf.constants");
    let constantFileContents = fs.readFileSync(contantPath, "utf8");
    let parsedConstants = dotenv.parse(constantFileContents);

    // Build conditionnal constants list : All constants set to "1" will be included
    for (var constantName in parsedConstants) {
        if (parsedConstants[constantName] == "1") {
            condtionalConstants.push(constantName);
        }
    }

    // Some information logs
    console.log(`arguments:${process.argv}`);
    console.log('Current working directory:', process.cwd());
    console.log(`Conditionnal plugin used constants = ${condtionalConstants}`);
    console.log(`Strings to replace in source files = ${JSON.stringify(stringsToReplace)}`);

    /**
     * Build esbuild configuration
     */
    const BUILD_PLUGIN = {
        name: "build-plugin",
        setup(build) {
            build.onStart(() => {
                console.log("Building...");
            });
            build.onEnd((result) => {
                if (result.errors && Array.isArray(result.errors) && result.errors.length >= 1) {
                    console.error(`[${new Date().toLocaleTimeString()}] ❌ Buid failed with errors.`, result.errors);
                    return;
                }

                if (result.warnings && Array.isArray(result.warnings) && result.warnings.length >= 1) {
                    console.warn(`[${new Date().toLocaleTimeString()}] ⚠️ Build completed with warnings.`, result.warnings);
                } else {
                    console.log(`[${new Date().toLocaleTimeString()}] ✅ Build completed.`);
                }

                // Do something with your completed build, e.g. write an assets JSON
            });
        },
    };
    let esbuildConf = {
        ...esbuilConfiguration.esbuildconf, // esbuild conf default for project
        entryPoints: [esbuilConfiguration.entryPoint],
        plugins: [
            conditionalBuild(condtionalConstants),
            replace(stringsToReplace),
            BUILD_PLUGIN
        ],
        outfile: path.resolve(outputRootPath, outputFileName),
        minify: false,
    };


    /**
     * Start either building or build+watching mode
     */
    let ctx = await esbuildMode(esbuildConf);
    if (values["watch"] != undefined) {
        // watch mode
        await ctx.watch();
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
    } else {
        // build mode: do nothing, the node js process will exit
        console.log("Esbuild done");
    }
}


/**
 * main bundling call
 */
build().catch((error) => {
    console.log(error);
    process.exit(1);
});