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
    ExistingAccountDetails,
    ExistingAccountDetailsFromJSON,
    ExistingAccountDetailsFromJSONTyped,
    ExistingAccountDetailsToJSON,
} from './';

/**
 * 
 * @export
 * @interface VerifyUserAccountResponse
 */
export interface VerifyUserAccountResponse {
    /**
     * 
     * @type {boolean}
     * @memberof VerifyUserAccountResponse
     */
    emailAlreadyConfirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VerifyUserAccountResponse
     */
    emailConfirmed?: boolean;
    /**
     * 
     * @type {Array<ExistingAccountDetails>}
     * @memberof VerifyUserAccountResponse
     */
    existingAccounts?: Array<ExistingAccountDetails>;
    /**
     * 
     * @type {boolean}
     * @memberof VerifyUserAccountResponse
     */
    mobilePhoneConfirmed?: boolean;
}

export function VerifyUserAccountResponseFromJSON(json: any): VerifyUserAccountResponse {
    return VerifyUserAccountResponseFromJSONTyped(json, false);
}

export function VerifyUserAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyUserAccountResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAlreadyConfirmed': !exists(json, 'emailAlreadyConfirmed') ? undefined : json['emailAlreadyConfirmed'],
        'emailConfirmed': !exists(json, 'emailConfirmed') ? undefined : json['emailConfirmed'],
        'existingAccounts': !exists(json, 'existingAccounts') ? undefined : ((json['existingAccounts'] as Array<any>).map(ExistingAccountDetailsFromJSON)),
        'mobilePhoneConfirmed': !exists(json, 'mobilePhoneConfirmed') ? undefined : json['mobilePhoneConfirmed'],
    };
}

export function VerifyUserAccountResponseToJSON(value?: VerifyUserAccountResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAlreadyConfirmed': value.emailAlreadyConfirmed,
        'emailConfirmed': value.emailConfirmed,
        'existingAccounts': value.existingAccounts === undefined ? undefined : ((value.existingAccounts as Array<any>).map(ExistingAccountDetailsToJSON)),
        'mobilePhoneConfirmed': value.mobilePhoneConfirmed,
    };
}


