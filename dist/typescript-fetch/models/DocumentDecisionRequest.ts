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
 * @interface DocumentDecisionRequest
 */
export interface DocumentDecisionRequest {
    /**
     * 
     * @type {boolean}
     * @memberof DocumentDecisionRequest
     */
    acknowledged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentDecisionRequest
     */
    caseId?: string;
}

export function DocumentDecisionRequestFromJSON(json: any): DocumentDecisionRequest {
    return DocumentDecisionRequestFromJSONTyped(json, false);
}

export function DocumentDecisionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentDecisionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acknowledged': !exists(json, 'acknowledged') ? undefined : json['acknowledged'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
    };
}

export function DocumentDecisionRequestToJSON(value?: DocumentDecisionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acknowledged': value.acknowledged,
        'caseId': value.caseId,
    };
}

