import { MenuConfig } from "../Types/MenuIConfig";

/**
 * Configure the BTT floating menu and menu item configs
 */
export const __MenuConfig: MenuConfig.IMenuConfig = {
    TemplateUUID: "3EB60CB2-3E6B-4363-9B27-325615AA05F8", // The template menu item to use
    Size: 40, // Size of menu item (used for width and height, we want quared keys)
    IconSize: 16, // Size of the app shortcut icon (we want squared icons, so it is used for height and width)
    ItemSpacing: 3, // Item spacing
    Separator:16, // Vertical separator for "group of keys"
    Padding: 10, // top/bottom/left/right padding
    SeparatorColumns: [4] // Columns we want a vertical separator for group of keys
};

/**
 * Define menu item background/hover background when "enabled" (i.e. when item has action and icon sets in app shortcut config)
 */
const __itemEnabled: MenuConfig.IItemBackgroundColors = {
    BTTMenuItemBackgroundColor: "255.000, 255.000, 255.000, 211.000",
    BTTMenuItemBackgroundColorHover: "255.000, 255.000, 255.000, 255.000",
    BTTMenuItemBorderColorHover : "0.000, 0.000, 0.000, 255.000",
    BTTMenuItemBorderColor : "85.000, 85.000, 85.000, 255.000",
}

/**
 * Define menu item background/hover background when "disabled" (i.e. when item has action and icon sets in app shortcut config)
 */
const __itemDisabled: MenuConfig.IItemBackgroundColors = {
    BTTMenuItemBackgroundColor: "255.000, 255.000, 255.000, 120.000",
    BTTMenuItemBackgroundColorHover: "255.000, 255.000, 255.000, 120.000",
    BTTMenuItemBorderColorHover : "85.000, 85.000, 85.000, 255.000",
    BTTMenuItemBorderColor : "85.000, 85.000, 85.000, 255.000",
}
export const __ItemBackgroundStates: MenuConfig.IItemBackground = {
    enabled: __itemEnabled,
    disabled: __itemDisabled
}