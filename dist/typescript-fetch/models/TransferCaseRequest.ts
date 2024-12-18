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
 * @interface TransferCaseRequest
 */
export interface TransferCaseRequest {
    /**
     * 
     * @type {boolean}
     * @memberof TransferCaseRequest
     */
    forceTransfer?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransferCaseRequest
     */
    ignoreCapturedCharges?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TransferCaseRequest
     */
    receivingLawfirmId?: number;
}

export function TransferCaseRequestFromJSON(json: any): TransferCaseRequest {
    return TransferCaseRequestFromJSONTyped(json, false);
}

export function TransferCaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferCaseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forceTransfer': !exists(json, 'forceTransfer') ? undefined : json['forceTransfer'],
        'ignoreCapturedCharges': !exists(json, 'ignoreCapturedCharges') ? undefined : json['ignoreCapturedCharges'],
        'receivingLawfirmId': !exists(json, 'receivingLawfirmId') ? undefined : json['receivingLawfirmId'],
    };
}

export function TransferCaseRequestToJSON(value?: TransferCaseRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forceTransfer': value.forceTransfer,
        'ignoreCapturedCharges': value.ignoreCapturedCharges,
        'receivingLawfirmId': value.receivingLawfirmId,
    };
}


