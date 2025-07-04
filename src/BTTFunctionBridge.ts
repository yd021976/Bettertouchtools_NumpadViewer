//#conditional
/**
 * Update BTT variable
 * @param variable 
 * @param value 
 */
export async function UpdateBttVariable(variable: string, value: BTTParamType) {
    //#if !DEBUG_IN_SAFARI
    let type = typeof value;
    switch (type) {
        case BTTTypeName.Number:
            await set_number_variable({ variable_name: variable, to: value as number });
            break;
        case BTTTypeName.String:
            await set_string_variable({ variable_name: variable, to: value as string });
            break;
        default:
            break;
    }
    //#endif
}

/**
 * Get BTT variable
 * @param variable 
 * @param type 
 * @returns 
 */
export async function GetBttVariable<T extends BTTParamType>(variable: string, type: T): Promise<T> {
    //#if DEBUG_IN_SAFARI
    return "com.microsoft.VSCode" as T;
    //#else
    switch (type) {
        case BTTTypeName.Number:
            return (await get_number_variable({ variable_name: variable })) as T;
        case BTTTypeName.String:
            return (await get_string_variable({ variable_name: variable })) as T;
        default:
            throw new Error(`Unsupported type ${type}`);
    }
    //#endif
}


export enum BTTTypeName {
    String = "string",
    Number = "number"
}
export type BTTParamType = number | string;

/**
 * Declare BTT functions and Promise just to avoid TS compile errors
 */
export declare function set_string_variable(o: any): any;
export declare function set_number_variable(o: any): any;
export declare function get_string_variable(o: any): BTTParamType;
export declare function get_string_variable(o: string): BTTParamType;
export declare function get_number_variable(o: any): BTTParamType;