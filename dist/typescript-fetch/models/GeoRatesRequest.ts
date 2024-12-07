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
    ViolationInputRequest,
    ViolationInputRequestFromJSON,
    ViolationInputRequestFromJSONTyped,
    ViolationInputRequestToJSON,
} from './';

/**
 * 
 * @export
 * @interface GeoRatesRequest
 */
export interface GeoRatesRequest {
    /**
     * 
     * @type {Date}
     * @memberof GeoRatesRequest
     */
    courtDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GeoRatesRequest
     */
    courtId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GeoRatesRequest
     */
    isCDL?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeoRatesRequest
     */
    isFTA?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GeoRatesRequest
     */
    legalServiceId?: number;
    /**
     * 
     * @type {number}
     * @memberof GeoRatesRequest
     */
    violationCount?: number;
    /**
     * 
     * @type {Array<ViolationInputRequest>}
     * @memberof GeoRatesRequest
     */
    violations?: Array<ViolationInputRequest>;
}

export function GeoRatesRequestFromJSON(json: any): GeoRatesRequest {
    return GeoRatesRequestFromJSONTyped(json, false);
}

export function GeoRatesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoRatesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'courtDate': !exists(json, 'courtDate') ? undefined : (new Date(json['courtDate'])),
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'isCDL': !exists(json, 'isCDL') ? undefined : json['isCDL'],
        'isFTA': !exists(json, 'isFTA') ? undefined : json['isFTA'],
        'legalServiceId': !exists(json, 'legalServiceId') ? undefined : json['legalServiceId'],
        'violationCount': !exists(json, 'violationCount') ? undefined : json['violationCount'],
        'violations': !exists(json, 'violations') ? undefined : ((json['violations'] as Array<any>).map(ViolationInputRequestFromJSON)),
    };
}

export function GeoRatesRequestToJSON(value?: GeoRatesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'courtDate': value.courtDate === undefined ? undefined : (value.courtDate.toISOString()),
        'courtId': value.courtId,
        'isCDL': value.isCDL,
        'isFTA': value.isFTA,
        'legalServiceId': value.legalServiceId,
        'violationCount': value.violationCount,
        'violations': value.violations === undefined ? undefined : ((value.violations as Array<any>).map(ViolationInputRequestToJSON)),
    };
}


