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
    StripeConnectedAccountDomain,
    StripeConnectedAccountDomainFromJSON,
    StripeConnectedAccountDomainFromJSONTyped,
    StripeConnectedAccountDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetStripeConnectedAccountsResponse
 */
export interface GetStripeConnectedAccountsResponse {
    /**
     * 
     * @type {Array<StripeConnectedAccountDomain>}
     * @memberof GetStripeConnectedAccountsResponse
     */
    stripeConnectedAccounts?: Array<StripeConnectedAccountDomain>;
}

export function GetStripeConnectedAccountsResponseFromJSON(json: any): GetStripeConnectedAccountsResponse {
    return GetStripeConnectedAccountsResponseFromJSONTyped(json, false);
}

export function GetStripeConnectedAccountsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStripeConnectedAccountsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stripeConnectedAccounts': !exists(json, 'stripeConnectedAccounts') ? undefined : ((json['stripeConnectedAccounts'] as Array<any>).map(StripeConnectedAccountDomainFromJSON)),
    };
}

export function GetStripeConnectedAccountsResponseToJSON(value?: GetStripeConnectedAccountsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stripeConnectedAccounts': value.stripeConnectedAccounts === undefined ? undefined : ((value.stripeConnectedAccounts as Array<any>).map(StripeConnectedAccountDomainToJSON)),
    };
}


