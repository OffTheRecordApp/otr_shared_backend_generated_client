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
/**
 * 
 * @export
 * @interface GetCasesWithMissingLawfirmPayoutsRequest
 */
export interface GetCasesWithMissingLawfirmPayoutsRequest {
    /**
     * 
     * @type {number}
     * @memberof GetCasesWithMissingLawfirmPayoutsRequest
     */
    trailingMonths?: number;
}

export function GetCasesWithMissingLawfirmPayoutsRequestFromJSON(json: any): GetCasesWithMissingLawfirmPayoutsRequest {
    return GetCasesWithMissingLawfirmPayoutsRequestFromJSONTyped(json, false);
}

export function GetCasesWithMissingLawfirmPayoutsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCasesWithMissingLawfirmPayoutsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'trailingMonths': !exists(json, 'trailingMonths') ? undefined : json['trailingMonths'],
    };
}

export function GetCasesWithMissingLawfirmPayoutsRequestToJSON(value?: GetCasesWithMissingLawfirmPayoutsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'trailingMonths': value.trailingMonths,
    };
}


