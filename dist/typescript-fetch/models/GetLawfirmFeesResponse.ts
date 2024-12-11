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
    LawfirmFeeDomain,
    LawfirmFeeDomainFromJSON,
    LawfirmFeeDomainFromJSONTyped,
    LawfirmFeeDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetLawfirmFeesResponse
 */
export interface GetLawfirmFeesResponse {
    /**
     * 
     * @type {Array<LawfirmFeeDomain>}
     * @memberof GetLawfirmFeesResponse
     */
    fees?: Array<LawfirmFeeDomain>;
}

export function GetLawfirmFeesResponseFromJSON(json: any): GetLawfirmFeesResponse {
    return GetLawfirmFeesResponseFromJSONTyped(json, false);
}

export function GetLawfirmFeesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmFeesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fees': !exists(json, 'fees') ? undefined : ((json['fees'] as Array<any>).map(LawfirmFeeDomainFromJSON)),
    };
}

export function GetLawfirmFeesResponseToJSON(value?: GetLawfirmFeesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fees': value.fees === undefined ? undefined : ((value.fees as Array<any>).map(LawfirmFeeDomainToJSON)),
    };
}


