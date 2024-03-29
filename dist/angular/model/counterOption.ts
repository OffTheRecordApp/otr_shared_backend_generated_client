/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CounterOption { 
    counterOptionType?: CounterOption.CounterOptionTypeEnum;
    value?: string;
}
export namespace CounterOption {
    export type CounterOptionTypeEnum = 'CHANGE_FEE' | 'CHANGE_MBG';
    export const CounterOptionTypeEnum = {
        Fee: 'CHANGE_FEE' as CounterOptionTypeEnum,
        Mbg: 'CHANGE_MBG' as CounterOptionTypeEnum
    };
}


