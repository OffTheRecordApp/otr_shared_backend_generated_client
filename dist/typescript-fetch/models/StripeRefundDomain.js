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
import { exists } from '../runtime';
import { TimestampFromJSON, TimestampToJSON, } from './';
export function StripeRefundDomainFromJSON(json) {
    return StripeRefundDomainFromJSONTyped(json, false);
}
export function StripeRefundDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'lastVerifiedDateUtc': !exists(json, 'lastVerifiedDateUtc') ? undefined : TimestampFromJSON(json['lastVerifiedDateUtc']),
        'processingFee': !exists(json, 'processingFee') ? undefined : json['processingFee'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'refundStatus': !exists(json, 'refundStatus') ? undefined : json['refundStatus'],
        'stripeChargeId': !exists(json, 'stripeChargeId') ? undefined : json['stripeChargeId'],
        'stripePlatformAccountId': !exists(json, 'stripePlatformAccountId') ? undefined : json['stripePlatformAccountId'],
        'stripeRefundId': !exists(json, 'stripeRefundId') ? undefined : json['stripeRefundId'],
        'transactionDateUtc': !exists(json, 'transactionDateUtc') ? undefined : TimestampFromJSON(json['transactionDateUtc']),
    };
}
export function StripeRefundDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currencyCode': value.currencyCode,
        'lastVerifiedDateUtc': TimestampToJSON(value.lastVerifiedDateUtc),
        'processingFee': value.processingFee,
        'reason': value.reason,
        'refundStatus': value.refundStatus,
        'stripeChargeId': value.stripeChargeId,
        'stripePlatformAccountId': value.stripePlatformAccountId,
        'stripeRefundId': value.stripeRefundId,
        'transactionDateUtc': TimestampToJSON(value.transactionDateUtc),
    };
}