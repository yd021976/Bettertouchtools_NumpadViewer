/**
 * This is the main function to call within BTT floating menu configuration "content script"
 */
const floatingMenuRetrieveItems = `
async function retrieveItems() {
    let items= await btt.items();
    console.log(items);
    return items;
}`;

export var floatingmenuConfig = {
    bundle: true,
    format: "iife",
    globalName: "btt",
    footer: { js: floatingMenuRetrieveItems }, // Add here the function BTT can call in "content script"
}