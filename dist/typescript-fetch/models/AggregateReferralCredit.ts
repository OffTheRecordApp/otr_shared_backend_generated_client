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
 * @interface AggregateReferralCredit
 */
export interface AggregateReferralCredit {
    /**
     * 
     * @type {number}
     * @memberof AggregateReferralCredit
     */
    availableCreditValue?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateReferralCredit
     */
    earnedCreditValue?: number;
    /**
     * 
     * @type {number}
     * @memberof AggregateReferralCredit
     */
    redeemedCreditValue?: number;
}

export function AggregateReferralCreditFromJSON(json: any): AggregateReferralCredit {
    return AggregateReferralCreditFromJSONTyped(json, false);
}

export function AggregateReferralCreditFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateReferralCredit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableCreditValue': !exists(json, 'availableCreditValue') ? undefined : json['availableCreditValue'],
        'earnedCreditValue': !exists(json, 'earnedCreditValue') ? undefined : json['earnedCreditValue'],
        'redeemedCreditValue': !exists(json, 'redeemedCreditValue') ? undefined : json['redeemedCreditValue'],
    };
}

export function AggregateReferralCreditToJSON(value?: AggregateReferralCredit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableCreditValue': value.availableCreditValue,
        'earnedCreditValue': value.earnedCreditValue,
        'redeemedCreditValue': value.redeemedCreditValue,
    };
}

