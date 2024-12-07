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
 * @interface AvailableRegion
 */
export interface AvailableRegion {
    /**
     * 
     * @type {string}
     * @memberof AvailableRegion
     */
    regionCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AvailableRegion
     */
    regionName?: string;
}

export function AvailableRegionFromJSON(json: any): AvailableRegion {
    return AvailableRegionFromJSONTyped(json, false);
}

export function AvailableRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailableRegion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'regionName': !exists(json, 'regionName') ? undefined : json['regionName'],
    };
}

export function AvailableRegionToJSON(value?: AvailableRegion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'regionCode': value.regionCode,
        'regionName': value.regionName,
    };
}


