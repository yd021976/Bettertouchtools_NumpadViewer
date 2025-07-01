import { IItemsConfig } from "../Types/ItemsConfig";
/**
 * Define here the floating menu items layout
 * It's an array of row objects @see IItemsConfig, each containg a numpad key description
 * --> the sepcial menu item "blank_key" is used to "skip" a key (i.e. Displays nothing). This object should be empty
 */
export const __FloatingMenuItems: IItemsConfig.ItemsRowLayout = [
    {
        "ROW 1":
            [
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
        "ROW 2":
            [
                { "ins": { key: "ins", text: "ins" } },
                { "home": { key: "home", text: "home" } },
                { "page_up": { key: "page_up", text: "pg_up" } },
                { "00": { key: "00", text: "00" } },
                { "divide": { key: "divide", text: "/" } },
                { "multiply": { key: "multiply", text: "*" } },
                { "minus": { key: "minus", text: "-" } },
            ]
    },
    {
        "ROW 3":
            [
                { "delete": { key: "delete", text: "del" } },
                { "end": { key: "end", text: "end" } },
                { "page_down": { key: "page_down", text: "pg_down" } },
                { "7": { key: "7", text: "7" } },
                { "8": { key: "8", text: "8" } },
                { "9": { key: "9", text: "9" } },
                { "plus": { key: "plus", text: "+", type: "doubleHeight" } },
            ]
    },
    {
        "ROW 4":
            [
                { "blank_key": { } },
                { "blank_key": { } },
                { "blank_key": { } },
                { "4": { key: "4", text: "4" } },
                { "5": { key: "5", text: "5" } },
                { "6": { key: "6", text: "6" } },
                { "blank_key": {} }, // we need this because there should be always 7 key entries by row. But as "+" key fill 2 rows height, we put here a blank key
            ]
    },
    {
        "ROW 5":
            [
                { "blank_key": {  } },
                { "up": { key: "up", text: "up" } },
                { "blank_key": {  } },
                { "1": { key: "1", text: "1" } },
                { "2": { key: "2", text: "2" } },
                { "3": { key: "3", text: "3" } },
                { "enter": { key: "enter", text: "Ent.", type: "doubleHeight" } },
            ]
    },
    {
        "ROW 6":
            [
                { "left": { key: "left", text: "left" } },
                { "down": { key: "down", text: "down" } },
                { "right": { key: "right", text: "right" } },
                { "0": { key: "0", text: "0", type: "doubleWidth" } },
                { "point": { key: "point", text: "." } },
            ]
    }
];