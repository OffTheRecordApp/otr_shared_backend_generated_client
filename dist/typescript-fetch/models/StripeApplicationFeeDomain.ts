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
    StripeApplicationFeeRefundDomain,
    StripeApplicationFeeRefundDomainFromJSON,
    StripeApplicationFeeRefundDomainFromJSONTyped,
    StripeApplicationFeeRefundDomainToJSON,
    TimestampRes,
    TimestampResFromJSON,
    TimestampResFromJSONTyped,
    TimestampResToJSON,
} from './';

/**
 * 
 * @export
 * @interface StripeApplicationFeeDomain
 */
export interface StripeApplicationFeeDomain {
    /**
     * 
     * @type {number}
     * @memberof StripeApplicationFeeDomain
     */
    amountRefunded?: number;
    /**
     * 
     * @type {TimestampRes}
     * @memberof StripeApplicationFeeDomain
     */
    applicationFeeDateUtc?: TimestampRes;
    /**
     * 
     * @type {Array<StripeApplicationFeeRefundDomain>}
     * @memberof StripeApplicationFeeDomain
     */
    applicationFeeRefunds?: Array<StripeApplicationFeeRefundDomain>;
    /**
     * 
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    currencyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof StripeApplicationFeeDomain
     */
    feeAmount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof StripeApplicationFeeDomain
     */
    isFullyRefunded?: boolean;
    /**
     * 
     * @type {TimestampRes}
     * @memberof StripeApplicationFeeDomain
     */
    lastVerifiedDateUtc?: TimestampRes;
    /**
     * 
     * @type {number}
     * @memberof StripeApplicationFeeDomain
     */
    refundCount?: number;
    /**
     * 
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripeApplicationFeeId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripeChargeId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripeDestinationAccountId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripePaymentId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripePlatformAccountId?: string;
}

export function StripeApplicationFeeDomainFromJSON(json: any): StripeApplicationFeeDomain {
    return StripeApplicationFeeDomainFromJSONTyped(json, false);
}

export function StripeApplicationFeeDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeApplicationFeeDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountRefunded': !exists(json, 'amountRefunded') ? undefined : json['amountRefunded'],
        'applicationFeeDateUtc': !exists(json, 'applicationFeeDateUtc') ? undefined : TimestampResFromJSON(json['applicationFeeDateUtc']),
        'applicationFeeRefunds': !exists(json, 'applicationFeeRefunds') ? undefined : ((json['applicationFeeRefunds'] as Array<any>).map(StripeApplicationFeeRefundDomainFromJSON)),
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'feeAmount': !exists(json, 'feeAmount') ? undefined : json['feeAmount'],
        'isFullyRefunded': !exists(json, 'isFullyRefunded') ? undefined : json['isFullyRefunded'],
        'lastVerifiedDateUtc': !exists(json, 'lastVerifiedDateUtc') ? undefined : TimestampResFromJSON(json['lastVerifiedDateUtc']),
        'refundCount': !exists(json, 'refundCount') ? undefined : json['refundCount'],
        'stripeApplicationFeeId': !exists(json, 'stripeApplicationFeeId') ? undefined : json['stripeApplicationFeeId'],
        'stripeChargeId': !exists(json, 'stripeChargeId') ? undefined : json['stripeChargeId'],
        'stripeDestinationAccountId': !exists(json, 'stripeDestinationAccountId') ? undefined : json['stripeDestinationAccountId'],
        'stripePaymentId': !exists(json, 'stripePaymentId') ? undefined : json['stripePaymentId'],
        'stripePlatformAccountId': !exists(json, 'stripePlatformAccountId') ? undefined : json['stripePlatformAccountId'],
    };
}

export function StripeApplicationFeeDomainToJSON(value?: StripeApplicationFeeDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountRefunded': value.amountRefunded,
        'applicationFeeDateUtc': TimestampResToJSON(value.applicationFeeDateUtc),
        'applicationFeeRefunds': value.applicationFeeRefunds === undefined ? undefined : ((value.applicationFeeRefunds as Array<any>).map(StripeApplicationFeeRefundDomainToJSON)),
        'currencyCode': value.currencyCode,
        'feeAmount': value.feeAmount,
        'isFullyRefunded': value.isFullyRefunded,
        'lastVerifiedDateUtc': TimestampResToJSON(value.lastVerifiedDateUtc),
        'refundCount': value.refundCount,
        'stripeApplicationFeeId': value.stripeApplicationFeeId,
        'stripeChargeId': value.stripeChargeId,
        'stripeDestinationAccountId': value.stripeDestinationAccountId,
        'stripePaymentId': value.stripePaymentId,
        'stripePlatformAccountId': value.stripePlatformAccountId,
    };
}

