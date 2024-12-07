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
    CaseTransferHistory,
    CaseTransferHistoryFromJSON,
    CaseTransferHistoryFromJSONTyped,
    CaseTransferHistoryToJSON,
} from './';

/**
 * 
 * @export
 * @interface CaseTransferResponse
 */
export interface CaseTransferResponse {
    /**
     * 
     * @type {Array<CaseTransferHistory>}
     * @memberof CaseTransferResponse
     */
    transfers?: Array<CaseTransferHistory>;
}

export function CaseTransferResponseFromJSON(json: any): CaseTransferResponse {
    return CaseTransferResponseFromJSONTyped(json, false);
}

export function CaseTransferResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseTransferResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transfers': !exists(json, 'transfers') ? undefined : ((json['transfers'] as Array<any>).map(CaseTransferHistoryFromJSON)),
    };
}

export function CaseTransferResponseToJSON(value?: CaseTransferResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transfers': value.transfers === undefined ? undefined : ((value.transfers as Array<any>).map(CaseTransferHistoryToJSON)),
    };
}


