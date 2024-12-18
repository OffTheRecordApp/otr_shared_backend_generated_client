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
    GetLawfirmModel,
    GetLawfirmModelFromJSON,
    GetLawfirmModelFromJSONTyped,
    GetLawfirmModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetLawfirmResponse
 */
export interface GetLawfirmResponse {
    /**
     * 
     * @type {GetLawfirmModel}
     * @memberof GetLawfirmResponse
     */
    lawfirm?: GetLawfirmModel;
}

export function GetLawfirmResponseFromJSON(json: any): GetLawfirmResponse {
    return GetLawfirmResponseFromJSONTyped(json, false);
}

export function GetLawfirmResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lawfirm': !exists(json, 'lawfirm') ? undefined : GetLawfirmModelFromJSON(json['lawfirm']),
    };
}

export function GetLawfirmResponseToJSON(value?: GetLawfirmResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lawfirm': GetLawfirmModelToJSON(value.lawfirm),
    };
}


