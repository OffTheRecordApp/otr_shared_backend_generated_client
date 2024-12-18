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
 * @interface EnableViolationResponseModel
 */
export interface EnableViolationResponseModel {
    /**
     * 
     * @type {number}
     * @memberof EnableViolationResponseModel
     */
    courtId?: number;
}

export function EnableViolationResponseModelFromJSON(json: any): EnableViolationResponseModel {
    return EnableViolationResponseModelFromJSONTyped(json, false);
}

export function EnableViolationResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnableViolationResponseModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
    };
}

export function EnableViolationResponseModelToJSON(value?: EnableViolationResponseModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'courtId': value.courtId,
    };
}


