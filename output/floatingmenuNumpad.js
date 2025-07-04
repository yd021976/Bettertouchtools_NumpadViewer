"use strict";
var bundle_numpadviewer = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/FloatingMenu/main.ts
  var main_exports = {};
  __export(main_exports, {
    getItems: () => getItems
  });

  // src/app_mappings.ts
  var __Mapping__ = {
    "com.microsoft.VSCode": {
      "4": {
        bttTriggerUUID: "BBE9207D-ACFE-475D-949B-5DF4DBDA9098",
        imgSrc: "/vscode/fold_level_3.new.svg",
        needHideMenu: "0"
      },
      "5": {
        bttTriggerUUID: "3AFDACD6-EB4D-4141-AE2C-EFF47DD97564",
        imgSrc: "/vscode/fold.svg"
      },
      "7": {
        bttTriggerUUID: "279AE551-19F4-43CE-BF13-8759B9E3D683",
        imgSrc: "/vscode/debug-step-over.svg"
      },
      "8": {
        bttTriggerUUID: "433FAE11-5213-4895-BE75-638C32D25D4F",
        imgSrc: "/vscode/debug-step-into.svg"
      },
      "9": {
        bttTriggerUUID: "DFE05890-DBD1-4390-B5E5-83D59887884B",
        imgSrc: "/vscode/debug-step-out.svg"
      },
      "enter": {
        bttTriggerUUID: "677E017E-7F41-4E76-9E89-B8DC4457C777",
        needHideMenu: "1",
        imgSrc: "/vscode/debug-start.svg"
      },
      "plus": {
        bttTriggerUUID: "EC699E3D-9404-4F0D-A02A-593EBBCC07AE",
        imgSrc: "/vscode/debug-restart.svg"
      },
      "minus": {
        bttTriggerUUID: "5E756ACB-09F8-4DAE-BB14-6BCB105715AA",
        imgSrc: "/vscode/debug-stop.svg"
      }
    },
    "com.apple.mail": {
      "4": {
        bttTriggerUUID: "3D88945E-C712-4EBA-B1A9-98CD88EE8DCF",
        needHideMenu: "1",
        imgSrc: "/Mail/xmark.bin.svg"
      },
      "5": {
        bttTriggerUUID: "F5A56919-5998-42C8-A35A-4E9DF2C0470D",
        needHideMenu: "0",
        imgSrc: "/Mail/trash.slash.svg"
      }
    },
    "com.mcneel.rhinoceros.8": {
      "4": {
        bttTriggerUUID: "BFD30A1A-23D9-418C-88A9-0E98DEA99722",
        imgSrc: "/rhino/RotateView.png",
        canInvokeWithClick: false
      },
      "5": {
        bttTriggerUUID: "101D1EF2-FFED-4118-998B-35C4846FE443",
        imgSrc: "/rhino/ZoomDynamic.png",
        canInvokeWithClick: false
      },
      "6": {
        bttTriggerUUID: "F84FA462-1042-4B3E-B138-5FD4A76D69EA",
        imgSrc: "/rhino/Pan.png",
        canInvokeWithClick: false
      }
    },
    "com.apple.iWork.Numbers": {
      "4": {
        bttTriggerUUID: "86895154-EE1F-4D9A-9178-33552CA30114",
        imgSrc: "/Numbers/copy_style.svg"
      },
      "5": {
        bttTriggerUUID: "BE2BA5BB-D392-4C25-8066-8DCCA2DFDE63",
        imgSrc: "/Numbers/paste_style.svg"
      },
      "6": {
        bttTriggerUUID: "1DA9364F-2343-49E8-821B-4B8EE69F82F8",
        imgSrc: "/Numbers/paintbrush.svg"
      },
      "7": {
        bttTriggerUUID: "75E777E9-C44E-415B-84B9-3799AC7CBF5E",
        imgSrc: "/Numbers/arrowshape.backward.circle.svg"
      },
      "8": {
        bttTriggerUUID: "731B04BD-211D-449C-885E-A58ED2536293",
        imgSrc: "/Numbers/arrowshape.forward.circle.svg"
      }
    },
    "com.apple.Safari": {
      "4": {
        bttTriggerUUID: "8AD17F0F-FBBE-4546-9C61-09D3EBD220D3",
        imgSrc: "/Safari/sidebar.leading.svg"
      },
      "5": {
        bttTriggerUUID: "5C1F9367-8A4A-4F82-88DA-C693D2E5E1C1",
        imgSrc: "/Safari/plus.app.fill.svg"
      },
      "6": {
        bttTriggerUUID: "FA0B8BB7-0F21-4B33-9931-704BC05B1800",
        imgSrc: "/Safari/xmark.square.fill.svg"
      },
      "7": {
        bttTriggerUUID: "05A35BC6-AFB2-45F8-988C-8540298EE81A",
        imgSrc: "/Numbers/arrowshape.backward.circle.svg"
      },
      "8": {
        bttTriggerUUID: "42203987-FD16-4B26-8FED-494D9D63A734",
        imgSrc: "/Numbers/arrowshape.forward.circle.svg"
      },
      "9": {
        bttTriggerUUID: "105AA00F-CD05-428B-B58F-AC0D42246DC7",
        imgSrc: "/Safari/square.on.square.svg"
      }
    }
  };

  // src/FloatingMenu/Configs/ItemsConfig.ts
  var __FloatingMenuItems = [
    {
      "ROW 1": [
        { "print": { key: "print", text: "print" } },
        { "search": { key: "search", text: "search" } },
        { "calc": { key: "calc", text: "calc" } },
        { "esc": { key: "esc", text: "esc" } },
        { "tab": { key: "tab", text: "tab" } },
        { "equal": { key: "equal", text: "=" } },
        { "clear": { key: "clear", text: "clear" } }
      ]
    },
    {
      "ROW 2": [
        { "ins": { key: "ins", text: "ins" } },
        { "home": { key: "home", text: "home" } },
        { "page_up": { key: "page_up", text: "pg_up" } },
        { "00": { key: "00", text: "00" } },
        { "divide": { key: "divide", text: "/" } },
        { "multiply": { key: "multiply", text: "*" } },
        { "minus": { key: "minus", text: "-" } }
      ]
    },
    {
      "ROW 3": [
        { "delete": { key: "delete", text: "del" } },
        { "end": { key: "end", text: "end" } },
        { "page_down": { key: "page_down", text: "pg_down" } },
        { "7": { key: "7", text: "7" } },
        { "8": { key: "8", text: "8" } },
        { "9": { key: "9", text: "9" } },
        { "plus": { key: "plus", text: "+", type: "doubleHeight" } }
      ]
    },
    {
      "ROW 4": [
        { "blank_key": {} },
        { "blank_key": {} },
        { "blank_key": {} },
        { "4": { key: "4", text: "4" } },
        { "5": { key: "5", text: "5" } },
        { "6": { key: "6", text: "6" } },
        { "blank_key": {} }
        // we need this because there should be always 7 key entries by row. But as "+" key fill 2 rows height, we put here a blank key
      ]
    },
    {
      "ROW 5": [
        { "blank_key": {} },
        { "up": { key: "up", text: "up" } },
        { "blank_key": {} },
        { "1": { key: "1", text: "1" } },
        { "2": { key: "2", text: "2" } },
        { "3": { key: "3", text: "3" } },
        { "enter": { key: "enter", text: "Ent.", type: "doubleHeight" } }
      ]
    },
    {
      "ROW 6": [
        { "left": { key: "left", text: "left" } },
        { "down": { key: "down", text: "down" } },
        { "right": { key: "right", text: "right" } },
        { "0": { key: "0", text: "0", type: "doubleWidth" } },
        { "point": { key: "point", text: "." } }
      ]
    }
  ];

  // src/BTTFunctionBridge.ts
  async function UpdateBttVariable(variable, value) {
    let type = typeof value;
    switch (type) {
      case "number" /* Number */:
        await set_number_variable({ variable_name: variable, to: value });
        break;
      case "string" /* String */:
        await set_string_variable({ variable_name: variable, to: value });
        break;
      default:
        break;
    }
  }
  async function GetBttVariable(variable, type) {
    switch (type) {
      case "number" /* Number */:
        return await get_number_variable({ variable_name: variable });
      case "string" /* String */:
        return await get_string_variable({ variable_name: variable });
      default:
        throw new Error(`Unsupported type ${type}`);
    }
  }

  // src/constants.ts
  var __BTT_VAR_BTTActiveAppBundleIdentifier__ = "BTTActiveAppBundleIdentifier";

  // src/FloatingMenu/Configs/MenuItemConfig.ts
  var __MenuConfig = {
    TemplateUUID: "3EB60CB2-3E6B-4363-9B27-325615AA05F8",
    // The template menu item to use
    Size: 44,
    // Sie of menu item (used for width and height, we want quared keys)
    IconSize: 20,
    // Size of the app shortcut icon (we want squared icons, so it is used for height and width)
    ItemSpacing: 5,
    // Item spacing
    Separator: 20,
    // Vertical separator for "group of keys"
    Padding: 10,
    // top/bottom/left/right padding
    SeparatorColumns: [4]
    // Columns we want a vertical separator for group of keys
  };
  var __itemEnabled = {
    BTTMenuItemBackgroundColor: "255.000, 255.000, 255.000, 211.000",
    BTTMenuItemBackgroundColorHover: "255.000, 255.000, 255.000, 255.000"
  };
  var __itemDisabled = {
    BTTMenuItemBackgroundColor: "255.000, 255.000, 255.000, 150.000",
    BTTMenuItemBackgroundColorHover: "255.000, 255.000, 255.000, 150.000"
  };
  var __ItemBackgroundStates = {
    enabled: __itemEnabled,
    disabled: __itemDisabled
  };

  // src/FloatingMenu/Types/BTTItemType.ts
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  // src/FloatingMenu/Types/ItemsConfig.ts
  var IItemsConfig;
  ((IItemsConfig2) => {
    function isBlankKeyItem(item) {
      return "blank_key" in item && Object.keys(item.blank_key).length === 0;
    }
    IItemsConfig2.isBlankKeyItem = isBlankKeyItem;
  })(IItemsConfig || (IItemsConfig = {}));

  // src/FloatingMenu/ItemUpdateManager.ts
  var ItemUpdateManager = class {
    /**
     * 
     * @param itemNames 
     * @param appMappings 
     */
    constructor(itemNames, appMappings) {
      // @ts-expect-error
      this._RootIconPath = __FullPath__;
      // __FullPath__ will be replace at build time
      this.FloatingMenuItems = __FloatingMenuItems;
      this.MenuConfig = __MenuConfig;
      this.ItemStates = __ItemBackgroundStates;
      this.AppMappings = appMappings;
      this.FloatingMenuItems = itemNames;
    }
    /**
     * Main logic to configure floating menu items 
     */
    async retrieveJson() {
      let appBundleID = await this.GetCurrentActiveApp();
      this.currentAppMapping = this.AppMappings[appBundleID];
      console.log(`Retrieve floating menu items, current App=${appBundleID}`);
      return await this.parseRows();
    }
    /**
     * Get current active app
     * @returns app bundle ID
     */
    async GetCurrentActiveApp() {
      let currentApp = await GetBttVariable(__BTT_VAR_BTTActiveAppBundleIdentifier__, "string" /* String */);
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
    async createItemProperties(item) {
      if (this.currentAppMapping == void 0) return {};
      let itemProps = {};
      let appKeyMapping = this.currentAppMapping[item.key];
      if (appKeyMapping == void 0) {
        console.log(`No key map for key=${item}`);
        return {};
      }
      ;
      if (appKeyMapping.imgSrc != "" && appKeyMapping.imgSrc != void 0) {
        const textSize = 8;
        const itemHeight = item.type != void 0 && item.type == "doubleHeight" ? this.MenuConfig.Size * 2 : this.MenuConfig.Size;
        let gap = itemHeight - this.MenuConfig.IconSize;
        gap = gap / 2 - textSize;
        itemProps.BTTMenuItemImageOffsetY = gap;
        itemProps.icon = "path::" + this._RootIconPath + appKeyMapping.imgSrc;
        itemProps.BTTMenuItemImageWidth = this.MenuConfig.IconSize;
        itemProps.BTTMenuItemImageHeight = this.MenuConfig.IconSize;
      }
      if (appKeyMapping.bttTriggerUUID != void 0 && appKeyMapping.bttTriggerUUID != "") {
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
    async parseRows() {
      let items = [];
      var rowIndex = 1, columnIndex = 1, width = 0, height = 0;
      for (const numpadRow of this.FloatingMenuItems) {
        columnIndex = 1;
        const rowKey = Object.keys(numpadRow)[0];
        const rowItems = numpadRow[rowKey];
        for (const item of rowItems) {
          if (!IItemsConfig.isBlankKeyItem(item)) {
            const itemKey = Object.keys(item)[0];
            const itemObj = item[itemKey];
            let data = await this.createBTTItemJSON(itemObj, rowIndex, columnIndex);
            items.push(data);
            if (itemObj.type != void 0 && itemObj.type == "doubleWidth") columnIndex++;
            let currentHeight = Math.abs(data.BTTMenuItemY) + data.BTTMenuItemMaxHeight + this.MenuConfig.Padding;
            height = height < currentHeight ? currentHeight : height;
            let currentWidth = Math.abs(data.BTTMenuItemX) + data.BTTMenuItemMaxWidth + this.MenuConfig.Padding;
            width = width < currentWidth ? currentWidth : width;
          }
          columnIndex++;
        }
        rowIndex++;
      }
      await UpdateBttVariable("numpad_width", width);
      await UpdateBttVariable("numpad_height", height);
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
    async createBTTItemJSON(item, rowIndex, columnIndex) {
      let itemProps = await this.createItemProperties(item);
      if (isEmpty(itemProps)) {
        itemProps = { ...itemProps, ...this.ItemStates.disabled };
      } else {
        itemProps = { ...itemProps, ...this.ItemStates.enabled };
      }
      let itemPosition = await this.createItemPositions(item, rowIndex, columnIndex);
      return { templateItemUUID: this.MenuConfig.TemplateUUID, BTTMenuItemText: item.text, ...itemProps, ...itemPosition };
    }
    /**
     * Compute floating menu item position
     * @param item 
     * @param rowIndex 
     * @param columnIndex 
     * @returns Item positions properties in BTT format
     */
    async createItemPositions(item, rowIndex, columnIndex) {
      let x = (columnIndex - 1) * this.MenuConfig.Size + (columnIndex - 1) * this.MenuConfig.ItemSpacing + this.MenuConfig.Padding;
      let y = (rowIndex - 1) * this.MenuConfig.Size + (rowIndex - 1) * this.MenuConfig.ItemSpacing + this.MenuConfig.Padding;
      let height = this.MenuConfig.Size;
      let width = this.MenuConfig.Size;
      for (const col of this.MenuConfig.SeparatorColumns) {
        if (columnIndex >= col) {
          x += this.MenuConfig.Separator;
        }
      }
      if (item.type != void 0 && item.type == "doubleHeight") {
        height += this.MenuConfig.Size + this.MenuConfig.ItemSpacing;
      }
      if (item.type != void 0 && item.type == "doubleWidth") {
        width += this.MenuConfig.Size + this.MenuConfig.ItemSpacing;
      }
      return {
        "BTTMenuItemMinWidth": width,
        "BTTMenuItemMaxWidth": width,
        "BTTMenuItemMinHeight": height,
        "BTTMenuItemMaxHeight": height,
        "BTTMenuItemY": -y,
        "BTTMenuItemX": x
      };
    }
  };

  // src/FloatingMenu/main.ts
  var getItems = async () => {
    const itemUpdateManager = new ItemUpdateManager(__FloatingMenuItems, __Mapping__);
    let items = await itemUpdateManager.retrieveJson();
    console.log(items);
    return items;
  };
  return __toCommonJS(main_exports);
})();

/**
 *  the "bundle_numpadviewer" will be replaced at build time by the configured "GlobalVar" in esbuild configuration file config.js
 * @returns 
 */
async function retrieveBTTItems() {
    let items = await bundle_numpadviewer.getItems();
    console.log(items);
    return items;
}