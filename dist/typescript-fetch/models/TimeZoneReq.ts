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
 * @interface TimeZoneReq
 */
export interface TimeZoneReq {
    /**
     * 
     * @type {string}
     * @memberof TimeZoneReq
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof TimeZoneReq
     */
    rawOffset?: number;
}

export function TimeZoneReqFromJSON(json: any): TimeZoneReq {
    return TimeZoneReqFromJSONTyped(json, false);
}

export function TimeZoneReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeZoneReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'rawOffset': !exists(json, 'rawOffset') ? undefined : json['rawOffset'],
    };
}

export function TimeZoneReqToJSON(value?: TimeZoneReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'rawOffset': value.rawOffset,
    };
}


