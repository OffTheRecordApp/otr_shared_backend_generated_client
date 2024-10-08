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
import { StripeFieldVerificationFromJSON, StripeFieldVerificationToJSON, StripePaymentRefundSyncResultsFromJSON, StripePaymentRefundSyncResultsToJSON, } from './';
export function StripePaymentSyncResultsFromJSON(json) {
    return StripePaymentSyncResultsFromJSONTyped(json, false);
}
export function StripePaymentSyncResultsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fields': !exists(json, 'fields') ? undefined : (json['fields'].map(StripeFieldVerificationFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'paymentRefunds': !exists(json, 'paymentRefunds') ? undefined : (json['paymentRefunds'].map(StripePaymentRefundSyncResultsFromJSON)),
        'verificationMessage': !exists(json, 'verificationMessage') ? undefined : json['verificationMessage'],
    };
}
export function StripePaymentSyncResultsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fields': value.fields === undefined ? undefined : (value.fields.map(StripeFieldVerificationToJSON)),
        'id': value.id,
        'paymentRefunds': value.paymentRefunds === undefined ? undefined : (value.paymentRefunds.map(StripePaymentRefundSyncResultsToJSON)),
        'verificationMessage': value.verificationMessage,
    };
}
