export default {
    // Main entry point of source code
    entryPoint: './src/FloatingMenu/main.ts',

    // Global javascript variable to access bundle functions, classes etc.
    GlobalExportVar: "bundle",

    // Specify output path and filename
    Output: {
        path: "./output",
        fileName: "floatingmenuNumpad.js"
    },

    // strings to replace in source code
    stringReplace:
    {
        "__TEST__": "Value", // exemple of static value
        "__FullPath__": "js::path.resolve('./src/icons/shortcuts')" // dynamic value with javascript expression
    },

    // Conditionnal build variables
    ConditionnalBuild:
    {
        "DEBUG_IN_SAFARI": "0"
    }
}