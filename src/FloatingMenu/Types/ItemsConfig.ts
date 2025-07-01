export namespace IItemsConfig {
    // Define the type for non-blank key items
    export interface NonBlankMenuItemKey {
      key: string; // Required
      text: string; // Required
      type?: "doubleHeight" | "doubleWidth"; // Optional, restricted to two values
      [key: string]: any; // Allow other arbitrary properties
    }
    
    // Define MenuItem as a union of two shapes
    export type MenuItem = { blank_key: {} } | { [key: string]: NonBlankMenuItemKey };
    
    // Define the type for a row, which contains a string key (e.g., "ROW 1") and an array of MenuItems
    export interface IMenuRow {
        [rowName: string]: MenuItem[];
    }
    
    // The top-level type for the entire structure (array of MenuRow)
    export type ItemsRowLayout = IMenuRow[];
    
    // Type guard to check if a MenuItem is a blank_key item
    export function isBlankKeyItem(item: MenuItem): item is { blank_key: {} } {
      return 'blank_key' in item && Object.keys(item.blank_key).length === 0;
    }
}
