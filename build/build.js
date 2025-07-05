/**
 * Main build program to bundle TS project with esbuild.
 * Options
 * --watch : boolean to trigger build on file changes
 * --name : name of the build. Will be appended to the bundle global variable name
 */
import { initBuildConf, initConditionnalBuildVars, initStringReplace, readProcessParams, runBuild } from './build_utilities.js';
import buildConfig from './configs/config.js';

/**
 * Build function
 */
(async () => {
    // Configure strings to replace in sources files
    let stringsToReplace = initStringReplace(buildConfig.stringReplace);

    // Init conditionnal build constants
    let condtionalConstants = initConditionnalBuildVars(buildConfig.ConditionnalBuild);
    let params = readProcessParams(process.argv);

    // Some information logs
    console.log(`arguments:${process.argv}`);
    console.log('Current working directory:', process.cwd());
    console.log(`Conditionnal plugin used constants = ${condtionalConstants}`);
    console.log(`Strings to replace in source files = ${JSON.stringify(stringsToReplace)}`);

    // Init esbuild configuration
    let esbuildConf = initBuildConf(buildConfig, params,condtionalConstants,stringsToReplace);
    await runBuild(params["watch"], esbuildConf)
        .catch((error) => {
            console.log(error);
            process.exit(1);
        });
})();

