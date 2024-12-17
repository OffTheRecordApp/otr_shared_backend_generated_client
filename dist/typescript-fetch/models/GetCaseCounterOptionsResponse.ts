/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    CaseCounterOption,
    CaseCounterOptionFromJSON,
    CaseCounterOptionFromJSONTyped,
    CaseCounterOptionToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetCaseCounterOptionsResponse
 */
export interface GetCaseCounterOptionsResponse {
    /**
     * 
     * @type {Array<CaseCounterOption>}
     * @memberof GetCaseCounterOptionsResponse
     */
    counterOptions?: Array<CaseCounterOption>;
}

export function GetCaseCounterOptionsResponseFromJSON(json: any): GetCaseCounterOptionsResponse {
    return GetCaseCounterOptionsResponseFromJSONTyped(json, false);
}

export function GetCaseCounterOptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCaseCounterOptionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'counterOptions': !exists(json, 'counterOptions') ? undefined : ((json['counterOptions'] as Array<any>).map(CaseCounterOptionFromJSON)),
    };
}

export function GetCaseCounterOptionsResponseToJSON(value?: GetCaseCounterOptionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'counterOptions': value.counterOptions === undefined ? undefined : ((value.counterOptions as Array<any>).map(CaseCounterOptionToJSON)),
    };
}

