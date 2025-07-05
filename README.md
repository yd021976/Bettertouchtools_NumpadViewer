# What is it ?
A simple typescript bundler that puts the ./src (except those in /BttFunctions folder) code into one global javascript variable and put all code defined in BttFunction folder as global javascript code (like function etc.)

All is bundled in one .js file in /output folder

The original objective was to provide a bundler for developping complex javascript code to use in BetterTouchTool


# Main features
### 1. Run in "watch" or "build" mode
You can either run a one shot "build" (CMD+SHIFT+B) or run in watch mode by running task "Watch". Watch will rebuild the bundle as soon as a file as been changed
### 2. Include conditional build

You can in your code add conditionnal build like
```javascript
//#if __Conditional_Variable__
...some code...
//#else
...some code...
//#endif
```
The first objective of this implementation was to be able to "deactivate" some betterTouchTool specific function call to be able to debug in a browser. But it can be used for any other purpose.

For exemple in `BTTFunctionBridge.ts`, I "mock" some BetterTouchTool function calls that are not available if I want to debug in Safari. So I code this
```typescript
/**
 * Get BTT variable
 * @param variable 
 * @param type 
 * @returns 
 */
export async function GetBttVariable<T extends BTTParamType>(variable: string, type: T): Promise<T> {
    //#if DEBUG_IN_SAFARI
    return "com.microsoft.VSCode" as T;
    //#else
    switch (type) {
        case BTTTypeName.Number:
            return (await get_number_variable({ variable_name: variable })) as T;
        case BTTTypeName.String:
            return (await get_string_variable({ variable_name: variable })) as T;
        default:
            throw new Error(`Unsupported type ${type}`);
    }
    //#endif
}
```
This allows, when `DEBUG_IN_SAFARI` conditional variable is set, to return a hard coded value instead of calling BTT function call. In this case, I can run the script in Safari (or any browser) to debug the code.


### 3. String replacement

You can use string replacement in code. For exemple in source code you can define
```typescript
// @ts-expect-error
private readonly _RootIconPath: string = __FullPath__; // __FullPath__ will be replace at build time
```
**Note** It is important to add the comment `// @ts-expect-error` to tell typescript compiler to ignore the error. In this exemple variable `__FullPath__` does not exist. Without telling typescript compiler we "expect" this error, the code will not compile.

And in config.js file define how to replace `__FullPath__` like
```jsonc
 // string to replace in source code
    stringReplace: [
        {
            "__TEST__": "Value", // exemple of static value
            "__FullPath__": "js::path.resolve('./src/icons/shortcuts')" // dynamic value with javascript expression
        }
    ]
``` 
**Note** that string replacement config allow either a "hard coded" value OR you can use a javascript expression by prefixing the replacement value by `js::`. If you want to use javascript expression, don't forget to `import` any dependency in `build.js` (in this exemple above, you must add `import path from 'path'`)
# Usage
1. In terminal run `npm install` to install all depedencies
2. Code :-)
3. Build
  * Either run one of the npm scripts in package.json in VSCode (Cmd+shift+P, then choose run task, then choose "Build" or "Watch")
  * Either run "build" in VSCode (CMD+SHIFT+B), default build will run "Build" (not watch mode)
  
  The bundle file will be available in the /output folder (if output folder doesn't exist, create it before build)

# Configuration
The build configuration can be tuned in `/build/configs/config.js`. Configuration options are :
* ### entryPoint [string]

This should not be changed. But should point to the main Typescript entry point file, mainly `./src/main.ts`
* ### GlobalExportVar [string]

Name of the javascript global variable that will contain compiled (transpiled) code. For exemple,you define a class in main.ts file named "MyClass" and define the global variable to "MyGlobalVariable". So you can then access your class in javascript with code like :
```javascript
let myObject = new MyGlobalVariable.MyClass()
```
* ### Output [Object]
  * path [string]
    * Path to the output folder
  * fileName [string]
    * name of the bundled file
* ### stringReplace [object]
  * key/value pair as `"string to replace":"Value to replace"` for exemple :
  ```jsonc
    {
        "__TEST__": "Value", // exemple of static value
        "__FullPath__": "js::path.resolve('./src/icons/shortcuts')" // Dynamic js expression
    }

  ```
  In this exemple, all `__TEST__` strings will be replaced by "Value", and all `__FullPath__` strings will be replaced by the javascript expression `path.resolve('./src/icons/shortcuts')` 
* ### ConditionnalBuild [object]
* key/value pair as `"Conditional variable name":"value"` for exemple :
  ```jsonc
    {
        "DEBUG_IN_SAFARI": "1"
    }

  ```
  **NOTE** that a value of "1" indicates that the conditional variable is "set". Any other value (empty, "0" etc.) indicates that the conditional variable is "unset".


  In this exemple, the conditional variable `DEBUG_IN_SAFARI` is set. So code like this one below will return hard coded string "com.microsoft.VSCode" : 
```typescript
  /**
 * Get BTT variable
 * @param variable 
 * @param type 
 * @returns 
 */
export async function GetBttVariable<T extends BTTParamType>(variable: string, type: T): Promise<T> {
    //#if DEBUG_IN_SAFARI
    return "com.microsoft.VSCode" as T;
    //#else
    switch (type) {
        case BTTTypeName.Number:
            return (await get_number_variable({ variable_name: variable })) as T;
        case BTTTypeName.String:
            return (await get_string_variable({ variable_name: variable })) as T;
        default:
            throw new Error(`Unsupported type ${type}`);
    }
    //#endif
}
```
