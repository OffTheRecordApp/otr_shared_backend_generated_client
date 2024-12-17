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
    TemporalUnit,
    TemporalUnitFromJSON,
    TemporalUnitFromJSONTyped,
    TemporalUnitToJSON,
} from './';

/**
 * 
 * @export
 * @interface Duration
 */
export interface Duration {
    /**
     * 
     * @type {number}
     * @memberof Duration
     */
    nano?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Duration
     */
    negative?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Duration
     */
    seconds?: number;
    /**
     * 
     * @type {Array<TemporalUnit>}
     * @memberof Duration
     */
    units?: Array<TemporalUnit>;
    /**
     * 
     * @type {boolean}
     * @memberof Duration
     */
    zero?: boolean;
}

export function DurationFromJSON(json: any): Duration {
    return DurationFromJSONTyped(json, false);
}

export function DurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Duration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nano': !exists(json, 'nano') ? undefined : json['nano'],
        'negative': !exists(json, 'negative') ? undefined : json['negative'],
        'seconds': !exists(json, 'seconds') ? undefined : json['seconds'],
        'units': !exists(json, 'units') ? undefined : ((json['units'] as Array<any>).map(TemporalUnitFromJSON)),
        'zero': !exists(json, 'zero') ? undefined : json['zero'],
    };
}

export function DurationToJSON(value?: Duration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nano': value.nano,
        'negative': value.negative,
        'seconds': value.seconds,
        'units': value.units === undefined ? undefined : ((value.units as Array<any>).map(TemporalUnitToJSON)),
        'zero': value.zero,
    };
}

