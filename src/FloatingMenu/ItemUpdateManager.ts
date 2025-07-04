import { AppMappings } from "../app_mappings";
import { BTTTypeName, GetBttVariable, UpdateBttVariable } from "../BTTFunctionBridge";
import { __BTT_VAR_BTTActiveAppBundleIdentifier__ } from "../constants";
import { __FloatingMenuItems } from "./Configs/ItemsConfig";
import { __ItemBackgroundStates, __MenuConfig } from "./Configs/MenuItemConfig";
import { IBTTProps, isEmpty, IItemPosition, IItemProperties } from "./Types/BTTItemType";
import { IItemsConfig } from "./Types/ItemsConfig";
import { MenuConfig } from "./Types/MenuIConfig";

/**
 * ss
 */
export class ItemUpdateManager {
    // @ts-expect-error
    private readonly _RootIconPath: string = __FullPath__; // __FullPath__ will be replace at build time
    private readonly FloatingMenuItems: IItemsConfig.ItemsRowLayout = __FloatingMenuItems;
    private readonly MenuConfig: MenuConfig.IMenuConfig = __MenuConfig;
    private readonly ItemStates: MenuConfig.IItemBackground = __ItemBackgroundStates;
    private readonly AppMappings: AppMappings;
    private currentAppMapping: any;

    /**
     * 
     * @param itemNames 
     * @param appMappings 
     */
    constructor(itemNames: IItemsConfig.ItemsRowLayout, appMappings: AppMappings) {
        this.AppMappings = appMappings;
        this.FloatingMenuItems = itemNames;
    }

    /**
     * Main logic to configure floating menu items 
     */
    public async retrieveJson() {
        let appBundleID = await this.GetCurrentActiveApp();
        this.currentAppMapping = this.AppMappings[appBundleID];
        //#if DEBUG
        console.log(`Retrieve floating menu items, current App=${appBundleID}`);
        //#endif
        return await this.parseRows();
    }

    /**
     * Get current active app
     * @returns app bundle ID
     */
    private async GetCurrentActiveApp(): Promise<string> {
        let currentApp = await GetBttVariable(__BTT_VAR_BTTActiveAppBundleIdentifier__, BTTTypeName.String);
        return currentApp;
    }

    /**
     * Configure item properties to update if item is linked to an app shortcut.
     * Also sets the icon position to center it verticaly in item
     * 
     * @param appConfig 
     * @param item 
     * @returns Item properties object in BTT format containing action and icon OR empty object if no app shortcut exist for this menu item
     */
    private async createItemProperties(item: IItemsConfig.NonBlankMenuItemKey): Promise<IItemProperties> {
        if (this.currentAppMapping == undefined) return {};

        let itemProps: IItemProperties = {};
        let appKeyMapping = this.currentAppMapping[item.key];
        if (appKeyMapping == undefined) {
            console.log(`No key map for key=${item}`);
            return {};
        };

        if (appKeyMapping.imgSrc != "" && appKeyMapping.imgSrc != undefined) {
            // Center icon vertically, assuming item template icon position is "bottom" and text size is 8px
            const textSize = 8;
            const itemHeight = (item.type != undefined && item.type == "doubleHeight") ? this.MenuConfig.Size * 2 : this.MenuConfig.Size;
            let gap = itemHeight - this.MenuConfig.IconSize; gap = (gap / 2) - textSize;
            itemProps.BTTMenuItemImageOffsetY = gap;
            itemProps.icon = "path::" + this._RootIconPath + appKeyMapping.imgSrc;
            itemProps.BTTMenuItemImageWidth = this.MenuConfig.IconSize;
            itemProps.BTTMenuItemImageHeight = this.MenuConfig.IconSize;
        }

        if (appKeyMapping.bttTriggerUUID != undefined && appKeyMapping.bttTriggerUUID != "") {
            itemProps.action = `js::(async () => { execute_assigned_actions_for_trigger({ uuid: '${appKeyMapping.bttTriggerUUID}' });})()`;
        }

        console.log(`Get key mapping returned=${itemProps}`);
        return itemProps;
    }

    /**
     * Parse menu items, create each item configuration for BTT, update BTT variables to update floating menu height and width
     *  
     * @returns Array of floating menu items to create by BTT in the format expected by BTT floating menu scripting
     */
    private async parseRows(): Promise<Array<IBTTProps>> {
        let items: Array<any> = [];

        var rowIndex = 1, columnIndex = 1, width = 0, height = 0;
        for (const numpadRow of this.FloatingMenuItems) {
            columnIndex = 1;
            const rowKey = Object.keys(numpadRow)[0]; // Since there's only one key
            const rowItems = numpadRow[rowKey]; // Access the tuple of 7 MenuItem objects

            for (const item of rowItems) {
                // Ignore blank_keys items
                if (!IItemsConfig.isBlankKeyItem(item)) {
                    const itemKey = Object.keys(item)[0]; // Since there's only one key
                    const itemObj = item[itemKey]; // Access the tuple of 7 MenuItem objects

                    let data = await this.createBTTItemJSON(itemObj, rowIndex, columnIndex);
                    items.push(data);
                    if (itemObj.type != undefined && itemObj.type == "doubleWidth") columnIndex++; // Skip next key "space" if double width key

                    // Compute max menu width and height
                    let currentHeight = Math.abs(data.BTTMenuItemY) + data.BTTMenuItemMaxHeight + this.MenuConfig.Padding;
                    height = height < currentHeight ? currentHeight : height;

                    let currentWidth = Math.abs(data.BTTMenuItemX) + data.BTTMenuItemMaxWidth + this.MenuConfig.Padding;
                    width = width < currentWidth ? currentWidth : width;
                }
                columnIndex++;
            }
            // next row
            rowIndex++;
        }
        // Update BTT variables to update menu size
        await UpdateBttVariable("numpad_width", width);
        await UpdateBttVariable("numpad_height", height);

        // return item to create
        return items;
    }

    /**
     * Configure floating menu JSON object in expected BTT format for dynamic item creation
     * 
     * @param item 
     * @param rowIndex 
     * @param columnIndex 
     * @returns Item properties object in BTT format
     */
    private async createBTTItemJSON(item: IItemsConfig.NonBlankMenuItemKey, rowIndex: number, columnIndex: number): Promise<IBTTProps> {
        // Item icon and action
        let itemProps = await this.createItemProperties(item); // icon and action
        if (isEmpty(itemProps)) {
            // set item design look like "disabled"
            itemProps = { ...itemProps, ...this.ItemStates.disabled }
        } else {
            // set item design look like "enabled"
            itemProps = { ...itemProps, ...this.ItemStates.enabled }
        }

        // Compute item position in menu
        let itemPosition = await this.createItemPositions(item, rowIndex, columnIndex); // item position in menu
        return { templateItemUUID: this.MenuConfig.TemplateUUID, BTTMenuItemText: item.text, ...itemProps, ...itemPosition };
    }

    /**
     * Compute floating menu item position
     * @param item 
     * @param rowIndex 
     * @param columnIndex 
     * @returns Item positions properties in BTT format
     */
    private async createItemPositions(item: IItemsConfig.NonBlankMenuItemKey, rowIndex: number, columnIndex: number): Promise<IItemPosition> {
        let x = ((columnIndex - 1) * this.MenuConfig.Size) + ((columnIndex - 1) * this.MenuConfig.ItemSpacing) + this.MenuConfig.Padding;
        let y = ((rowIndex - 1) * this.MenuConfig.Size) + ((rowIndex - 1) * this.MenuConfig.ItemSpacing) + this.MenuConfig.Padding;
        let height = this.MenuConfig.Size;
        let width = this.MenuConfig.Size;

        // Add column layout separators spaces
        for (const col of this.MenuConfig.SeparatorColumns) {
            if (columnIndex >= col) {
                x += this.MenuConfig.Separator;
            }
        }

        if (item.type != undefined && item.type == "doubleHeight") {
            height += this.MenuConfig.Size + this.MenuConfig.ItemSpacing; // Double height size
        }
        if (item.type != undefined && item.type == "doubleWidth") {
            width += this.MenuConfig.Size + this.MenuConfig.ItemSpacing; // Double width size
        }
        return {
            "BTTMenuItemMinWidth": width,
            "BTTMenuItemMaxWidth": width,
            "BTTMenuItemMinHeight": height,
            "BTTMenuItemMaxHeight": height,
            "BTTMenuItemY": -y,
            "BTTMenuItemX": x,
        }
    }
}