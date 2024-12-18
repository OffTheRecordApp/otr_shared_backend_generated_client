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
 * @interface GetLocationResponse
 */
export interface GetLocationResponse {
    /**
     * 
     * @type {string}
     * @memberof GetLocationResponse
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof GetLocationResponse
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof GetLocationResponse
     */
    regionCode?: string;
    /**
     * 
     * @type {string}
     * @memberof GetLocationResponse
     */
    subRegion?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetLocationResponse
     */
    subscriptionBillingEnabled?: boolean;
}

export function GetLocationResponseFromJSON(json: any): GetLocationResponse {
    return GetLocationResponseFromJSONTyped(json, false);
}

export function GetLocationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLocationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': !exists(json, 'city') ? undefined : json['city'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'subRegion': !exists(json, 'subRegion') ? undefined : json['subRegion'],
        'subscriptionBillingEnabled': !exists(json, 'subscriptionBillingEnabled') ? undefined : json['subscriptionBillingEnabled'],
    };
}

export function GetLocationResponseToJSON(value?: GetLocationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'countryCode': value.countryCode,
        'regionCode': value.regionCode,
        'subRegion': value.subRegion,
        'subscriptionBillingEnabled': value.subscriptionBillingEnabled,
    };
}


