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
 * @interface DeclineCaseCounterRequest
 */
export interface DeclineCaseCounterRequest {
    /**
     * 
     * @type {string}
     * @memberof DeclineCaseCounterRequest
     */
    noteToClient?: string;
    /**
     * 
     * @type {string}
     * @memberof DeclineCaseCounterRequest
     */
    noteToOtr?: string;
}

export function DeclineCaseCounterRequestFromJSON(json: any): DeclineCaseCounterRequest {
    return DeclineCaseCounterRequestFromJSONTyped(json, false);
}

export function DeclineCaseCounterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeclineCaseCounterRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'noteToClient': !exists(json, 'noteToClient') ? undefined : json['noteToClient'],
        'noteToOtr': !exists(json, 'noteToOtr') ? undefined : json['noteToOtr'],
    };
}

export function DeclineCaseCounterRequestToJSON(value?: DeclineCaseCounterRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'noteToClient': value.noteToClient,
        'noteToOtr': value.noteToOtr,
    };
}


