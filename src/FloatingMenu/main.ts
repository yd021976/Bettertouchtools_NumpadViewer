/**
 * This is the main BTT floating menu items update logic
 */
import { __Mapping__ } from "../app_mappings";
import { __FloatingMenuItems } from "./Configs/ItemsConfig";
import { ItemUpdateManager } from "./ItemUpdateManager";

/**
 * This function is exposed in esbuild global var "btt". This must be used to get floating menu items configuration for BTT
 * @returns Array of BTT items to dynamically create
 */
export var items = async () => {
    const itemUpdateManager = new ItemUpdateManager(__FloatingMenuItems, __Mapping__);
    let items = await itemUpdateManager.retrieveJson();
    console.log(items);
    return items;
}