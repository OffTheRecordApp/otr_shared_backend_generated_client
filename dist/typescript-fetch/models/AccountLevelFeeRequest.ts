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
    AccountLevelFeeToSave,
    AccountLevelFeeToSaveFromJSON,
    AccountLevelFeeToSaveFromJSONTyped,
    AccountLevelFeeToSaveToJSON,
} from './';

/**
 * 
 * @export
 * @interface AccountLevelFeeRequest
 */
export interface AccountLevelFeeRequest {
    /**
     * 
     * @type {Array<AccountLevelFeeToSave>}
     * @memberof AccountLevelFeeRequest
     */
    fees?: Array<AccountLevelFeeToSave>;
}

export function AccountLevelFeeRequestFromJSON(json: any): AccountLevelFeeRequest {
    return AccountLevelFeeRequestFromJSONTyped(json, false);
}

export function AccountLevelFeeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLevelFeeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fees': !exists(json, 'fees') ? undefined : ((json['fees'] as Array<any>).map(AccountLevelFeeToSaveFromJSON)),
    };
}

export function AccountLevelFeeRequestToJSON(value?: AccountLevelFeeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fees': value.fees === undefined ? undefined : ((value.fees as Array<any>).map(AccountLevelFeeToSaveToJSON)),
    };
}

