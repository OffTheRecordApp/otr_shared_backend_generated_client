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
    StripeApplicationFeeDomain,
    StripeApplicationFeeDomainFromJSON,
    StripeApplicationFeeDomainFromJSONTyped,
    StripeApplicationFeeDomainToJSON,
    StripeDisputeDomain,
    StripeDisputeDomainFromJSON,
    StripeDisputeDomainFromJSONTyped,
    StripeDisputeDomainToJSON,
    StripeRefundDomain,
    StripeRefundDomainFromJSON,
    StripeRefundDomainFromJSONTyped,
    StripeRefundDomainToJSON,
    StripeTransferDomain,
    StripeTransferDomainFromJSON,
    StripeTransferDomainFromJSONTyped,
    StripeTransferDomainToJSON,
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
} from './';

/**
 * 
 * @export
 * @interface StripeChargeDomain
 */
export interface StripeChargeDomain {
    /**
     * 
     * @type {number}
     * @memberof StripeChargeDomain
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeDomain
     */
    amountRefunded?: number;
    /**
     * 
     * @type {StripeApplicationFeeDomain}
     * @memberof StripeChargeDomain
     */
    applicationFee?: StripeApplicationFeeDomain;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeDomain
     */
    applicationFeeAmount?: number;
    /**
     * 
     * @type {Timestamp}
     * @memberof StripeChargeDomain
     */
    captureDateUtc?: Timestamp;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeDomain
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeDomain
     */
    destinationAccountId?: string;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeDomain
     */
    destinationLawfirmId?: number;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeDomain
     */
    destinationLawfirmName?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeDomain
     */
    disputeId?: string;
    /**
     * 
     * @type {Array<StripeDisputeDomain>}
     * @memberof StripeChargeDomain
     */
    disputes?: Array<StripeDisputeDomain>;
    /**
     * 
     * @type {boolean}
     * @memberof StripeChargeDomain
     */
    isExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StripeChargeDomain
     */
    isFullyRefunded?: boolean;
    /**
     * 
     * @type {Timestamp}
     * @memberof StripeChargeDomain
     */
    lastVerifiedDateUtc?: Timestamp;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeDomain
     */
    paymentSourceId?: string;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeDomain
     */
    processingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeDomain
     */
    refundCount?: number;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeDomain
     */
    refundedProcessingFee?: number;
    /**
     * 
     * @type {Array<StripeRefundDomain>}
     * @memberof StripeChargeDomain
     */
    refunds?: Array<StripeRefundDomain>;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeDomain
     */
    stripeChargeId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeDomain
     */
    stripeCustomerId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeDomain
     */
    stripePlatformAccountId?: string;
    /**
     * 
     * @type {Timestamp}
     * @memberof StripeChargeDomain
     */
    transactionDateUtc?: Timestamp;
    /**
     * 
     * @type {Array<StripeTransferDomain>}
     * @memberof StripeChargeDomain
     */
    transfers?: Array<StripeTransferDomain>;
}

export function StripeChargeDomainFromJSON(json: any): StripeChargeDomain {
    return StripeChargeDomainFromJSONTyped(json, false);
}

export function StripeChargeDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeChargeDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'amountRefunded': !exists(json, 'amountRefunded') ? undefined : json['amountRefunded'],
        'applicationFee': !exists(json, 'applicationFee') ? undefined : StripeApplicationFeeDomainFromJSON(json['applicationFee']),
        'applicationFeeAmount': !exists(json, 'applicationFeeAmount') ? undefined : json['applicationFeeAmount'],
        'captureDateUtc': !exists(json, 'captureDateUtc') ? undefined : TimestampFromJSON(json['captureDateUtc']),
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'destinationAccountId': !exists(json, 'destinationAccountId') ? undefined : json['destinationAccountId'],
        'destinationLawfirmId': !exists(json, 'destinationLawfirmId') ? undefined : json['destinationLawfirmId'],
        'destinationLawfirmName': !exists(json, 'destinationLawfirmName') ? undefined : json['destinationLawfirmName'],
        'disputeId': !exists(json, 'disputeId') ? undefined : json['disputeId'],
        'disputes': !exists(json, 'disputes') ? undefined : ((json['disputes'] as Array<any>).map(StripeDisputeDomainFromJSON)),
        'isExpired': !exists(json, 'isExpired') ? undefined : json['isExpired'],
        'isFullyRefunded': !exists(json, 'isFullyRefunded') ? undefined : json['isFullyRefunded'],
        'lastVerifiedDateUtc': !exists(json, 'lastVerifiedDateUtc') ? undefined : TimestampFromJSON(json['lastVerifiedDateUtc']),
        'paymentSourceId': !exists(json, 'paymentSourceId') ? undefined : json['paymentSourceId'],
        'processingFee': !exists(json, 'processingFee') ? undefined : json['processingFee'],
        'refundCount': !exists(json, 'refundCount') ? undefined : json['refundCount'],
        'refundedProcessingFee': !exists(json, 'refundedProcessingFee') ? undefined : json['refundedProcessingFee'],
        'refunds': !exists(json, 'refunds') ? undefined : ((json['refunds'] as Array<any>).map(StripeRefundDomainFromJSON)),
        'stripeChargeId': !exists(json, 'stripeChargeId') ? undefined : json['stripeChargeId'],
        'stripeCustomerId': !exists(json, 'stripeCustomerId') ? undefined : json['stripeCustomerId'],
        'stripePlatformAccountId': !exists(json, 'stripePlatformAccountId') ? undefined : json['stripePlatformAccountId'],
        'transactionDateUtc': !exists(json, 'transactionDateUtc') ? undefined : TimestampFromJSON(json['transactionDateUtc']),
        'transfers': !exists(json, 'transfers') ? undefined : ((json['transfers'] as Array<any>).map(StripeTransferDomainFromJSON)),
    };
}

export function StripeChargeDomainToJSON(value?: StripeChargeDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'amountRefunded': value.amountRefunded,
        'applicationFee': StripeApplicationFeeDomainToJSON(value.applicationFee),
        'applicationFeeAmount': value.applicationFeeAmount,
        'captureDateUtc': TimestampToJSON(value.captureDateUtc),
        'currencyCode': value.currencyCode,
        'destinationAccountId': value.destinationAccountId,
        'destinationLawfirmId': value.destinationLawfirmId,
        'destinationLawfirmName': value.destinationLawfirmName,
        'disputeId': value.disputeId,
        'disputes': value.disputes === undefined ? undefined : ((value.disputes as Array<any>).map(StripeDisputeDomainToJSON)),
        'isExpired': value.isExpired,
        'isFullyRefunded': value.isFullyRefunded,
        'lastVerifiedDateUtc': TimestampToJSON(value.lastVerifiedDateUtc),
        'paymentSourceId': value.paymentSourceId,
        'processingFee': value.processingFee,
        'refundCount': value.refundCount,
        'refundedProcessingFee': value.refundedProcessingFee,
        'refunds': value.refunds === undefined ? undefined : ((value.refunds as Array<any>).map(StripeRefundDomainToJSON)),
        'stripeChargeId': value.stripeChargeId,
        'stripeCustomerId': value.stripeCustomerId,
        'stripePlatformAccountId': value.stripePlatformAccountId,
        'transactionDateUtc': TimestampToJSON(value.transactionDateUtc),
        'transfers': value.transfers === undefined ? undefined : ((value.transfers as Array<any>).map(StripeTransferDomainToJSON)),
    };
}


