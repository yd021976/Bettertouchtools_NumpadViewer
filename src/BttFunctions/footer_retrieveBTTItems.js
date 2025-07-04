/**
 *  the "__BTT_GLOBAL_VAR__" will be replaced at build time by the configured "GlobalVar" in esbuild configuration file config.js
 * @returns 
 */
export async function retrieveBTTItems() {
    let items = await __BTT_GLOBAL_VAR__.getItems();
    console.log(items);
    return items;
}