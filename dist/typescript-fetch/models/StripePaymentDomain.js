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
import { StripePaymentRefundDomainFromJSON, StripePaymentRefundDomainToJSON, TimestampResFromJSON, TimestampResToJSON, } from './';
export function StripePaymentDomainFromJSON(json) {
    return StripePaymentDomainFromJSONTyped(json, false);
}
export function StripePaymentDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountRefunded': !exists(json, 'amountRefunded') ? undefined : json['amountRefunded'],
        'createdByUserId': !exists(json, 'createdByUserId') ? undefined : json['createdByUserId'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'isFullyRefunded': !exists(json, 'isFullyRefunded') ? undefined : json['isFullyRefunded'],
        'paymentAmount': !exists(json, 'paymentAmount') ? undefined : json['paymentAmount'],
        'paymentDateUtc': !exists(json, 'paymentDateUtc') ? undefined : TimestampResFromJSON(json['paymentDateUtc']),
        'processingFee': !exists(json, 'processingFee') ? undefined : json['processingFee'],
        'refundCount': !exists(json, 'refundCount') ? undefined : json['refundCount'],
        'refunds': !exists(json, 'refunds') ? undefined : (json['refunds'].map(StripePaymentRefundDomainFromJSON)),
        'sourceAccountId': !exists(json, 'sourceAccountId') ? undefined : json['sourceAccountId'],
        'sourceTransfer': !exists(json, 'sourceTransfer') ? undefined : json['sourceTransfer'],
        'stripeApplicationId': !exists(json, 'stripeApplicationId') ? undefined : json['stripeApplicationId'],
        'stripePaymentId': !exists(json, 'stripePaymentId') ? undefined : json['stripePaymentId'],
        'stripePlatformAccountId': !exists(json, 'stripePlatformAccountId') ? undefined : json['stripePlatformAccountId'],
    };
}
export function StripePaymentDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountRefunded': value.amountRefunded,
        'createdByUserId': value.createdByUserId,
        'currencyCode': value.currencyCode,
        'isFullyRefunded': value.isFullyRefunded,
        'paymentAmount': value.paymentAmount,
        'paymentDateUtc': TimestampResToJSON(value.paymentDateUtc),
        'processingFee': value.processingFee,
        'refundCount': value.refundCount,
        'refunds': value.refunds === undefined ? undefined : (value.refunds.map(StripePaymentRefundDomainToJSON)),
        'sourceAccountId': value.sourceAccountId,
        'sourceTransfer': value.sourceTransfer,
        'stripeApplicationId': value.stripeApplicationId,
        'stripePaymentId': value.stripePaymentId,
        'stripePlatformAccountId': value.stripePlatformAccountId,
    };
}
