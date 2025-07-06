export namespace MenuConfig {
    export interface IMenuConfig {
        TemplateUUID: string,
        Size: number;
        IconSize: number;
        ItemSpacing: number;
        Separator: number;
        Padding: number;
        SeparatorColumns: Array<number> // Columns after wich we add a "separator" of keys. Will be spaced by <Separator> width in pixels
    }

    export interface IItemBackgroundColors {
        BTTMenuItemBackgroundColor: string,
        BTTMenuItemBackgroundColorHover: string,
        BTTMenuItemBorderColorHover: string,
        BTTMenuItemBorderColor: string
    }
    export interface IItemBackground {
        enabled: IItemBackgroundColors,
        disabled: IItemBackgroundColors
    }
}
