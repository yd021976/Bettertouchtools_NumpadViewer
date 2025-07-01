export interface IItemPosition {
    BTTMenuItemMinWidth: number,
    BTTMenuItemMaxWidth: number,
    BTTMenuItemMinHeight: number,
    BTTMenuItemMaxHeight: number,
    BTTMenuItemY: number,
    BTTMenuItemX: number
}

export interface IItemProperties {
    icon?: string,
    BTTMenuItemImageWidth?: number,
    BTTMenuItemImageHeight?: number,
    BTTMenuItemImageOffsetY?: number,
    action?: string
}

export interface IBTTProps extends IItemPosition, IItemProperties {
    templateItemUUID: string,
    BTTMenuItemText: string
}

/**
 * Check if an object is empty
 * @param obj 
 * @returns 
 */
export function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}