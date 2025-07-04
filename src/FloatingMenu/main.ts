/**
 * This is the main BTT floating menu items update logic
 */
import { __Mapping__ } from "../app_mappings";
import { __FloatingMenuItems } from "./Configs/ItemsConfig";
import { ItemUpdateManager } from "./ItemUpdateManager";
/**
 * Main function to retrieve BTT dynamic items for floating menu
 * @returns Array of BTT items to dynamically create
 */
export var getItems = async () => {
    const itemUpdateManager = new ItemUpdateManager(__FloatingMenuItems, __Mapping__);
    let items = await itemUpdateManager.retrieveJson();
    console.log(items);
    return items;
}