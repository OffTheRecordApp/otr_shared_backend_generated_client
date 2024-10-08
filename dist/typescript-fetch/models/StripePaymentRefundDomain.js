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
import { TimestampResFromJSON, TimestampResToJSON, } from './';
export function StripePaymentRefundDomainFromJSON(json) {
    return StripePaymentRefundDomainFromJSONTyped(json, false);
}
export function StripePaymentRefundDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'stripePaymentId': !exists(json, 'stripePaymentId') ? undefined : json['stripePaymentId'],
        'stripePaymentRefundId': !exists(json, 'stripePaymentRefundId') ? undefined : json['stripePaymentRefundId'],
        'stripePlatformAccountId': !exists(json, 'stripePlatformAccountId') ? undefined : json['stripePlatformAccountId'],
        'stripeSourceTransferReversalId': !exists(json, 'stripeSourceTransferReversalId') ? undefined : json['stripeSourceTransferReversalId'],
        'stripeTransferReversalId': !exists(json, 'stripeTransferReversalId') ? undefined : json['stripeTransferReversalId'],
        'transactionDateUtc': !exists(json, 'transactionDateUtc') ? undefined : TimestampResFromJSON(json['transactionDateUtc']),
    };
}
export function StripePaymentRefundDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currencyCode': value.currencyCode,
        'reason': value.reason,
        'stripePaymentId': value.stripePaymentId,
        'stripePaymentRefundId': value.stripePaymentRefundId,
        'stripePlatformAccountId': value.stripePlatformAccountId,
        'stripeSourceTransferReversalId': value.stripeSourceTransferReversalId,
        'stripeTransferReversalId': value.stripeTransferReversalId,
        'transactionDateUtc': TimestampResToJSON(value.transactionDateUtc),
    };
}
