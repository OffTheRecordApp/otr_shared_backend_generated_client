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
    StripeCustomerAccountDomain,
    StripeCustomerAccountDomainFromJSON,
    StripeCustomerAccountDomainFromJSONTyped,
    StripeCustomerAccountDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetUserStripeAccountResponse
 */
export interface GetUserStripeAccountResponse {
    /**
     * 
     * @type {StripeCustomerAccountDomain}
     * @memberof GetUserStripeAccountResponse
     */
    stripeAccount?: StripeCustomerAccountDomain;
}

export function GetUserStripeAccountResponseFromJSON(json: any): GetUserStripeAccountResponse {
    return GetUserStripeAccountResponseFromJSONTyped(json, false);
}

export function GetUserStripeAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserStripeAccountResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stripeAccount': !exists(json, 'stripeAccount') ? undefined : StripeCustomerAccountDomainFromJSON(json['stripeAccount']),
    };
}

export function GetUserStripeAccountResponseToJSON(value?: GetUserStripeAccountResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stripeAccount': StripeCustomerAccountDomainToJSON(value.stripeAccount),
    };
}


