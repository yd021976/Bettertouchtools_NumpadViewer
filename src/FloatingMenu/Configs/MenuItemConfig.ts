import { MenuConfig } from "../Types/MenuIConfig";

/**
 * Configure the BTT floating menu and menu item configs
 */
export const __MenuConfig: MenuConfig.IMenuConfig = {
    TemplateUUID: "3EB60CB2-3E6B-4363-9B27-325615AA05F8", // The template menu item to use
    Size: 44, // Sie of menu item (used for width and height, we want quared keys)
    IconSize: 20, // Size of the app shortcut icon (we want squared icons, so it is used for height and width)
    ItemSpacing: 5, // Item spacing
    Separator: 20, // Vertical separator for "group of keys"
    Padding: 10, // top/bottom/left/right padding
    SeparatorColumns: [4] // Columns we want a vertical separator for group of keys
};

/**
 * Define menu item background/hover background when "enabled" (i.e. when item has action and icon sets in app shortcut config)
 */
const __itemEnabled: MenuConfig.IItemBackgroundColors = {
    BTTMenuItemBackgroundColor: "255.000, 255.000, 255.000, 211.000",
    BTTMenuItemBackgroundColorHover: "255.000, 255.000, 255.000, 255.000",
}

/**
 * Define menu item background/hover background when "disabled" (i.e. when item has action and icon sets in app shortcut config)
 */
const __itemDisabled: MenuConfig.IItemBackgroundColors = {
    BTTMenuItemBackgroundColor: "255.000, 255.000, 255.000, 150.000",
    BTTMenuItemBackgroundColorHover: "255.000, 255.000, 255.000, 150.000",
}
export const __ItemBackgroundStates: MenuConfig.IItemBackground = {
    enabled: __itemEnabled,
    disabled: __itemDisabled
}