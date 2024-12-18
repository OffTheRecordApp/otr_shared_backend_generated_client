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
    LookupParamValue,
    LookupParamValueFromJSON,
    LookupParamValueFromJSONTyped,
    LookupParamValueToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetExternalTicketInputParamsResponse
 */
export interface GetExternalTicketInputParamsResponse {
    /**
     * 
     * @type {{ [key: string]: Array<Array<LookupParamValue>>; }}
     * @memberof GetExternalTicketInputParamsResponse
     */
    items?: { [key: string]: Array<Array<LookupParamValue>>; };
}

export function GetExternalTicketInputParamsResponseFromJSON(json: any): GetExternalTicketInputParamsResponse {
    return GetExternalTicketInputParamsResponseFromJSONTyped(json, false);
}

export function GetExternalTicketInputParamsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetExternalTicketInputParamsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : json['items'],
    };
}

export function GetExternalTicketInputParamsResponseToJSON(value?: GetExternalTicketInputParamsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items,
    };
}


