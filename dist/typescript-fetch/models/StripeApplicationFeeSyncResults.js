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
import { StripeApplicationFeeRefundSyncResultsFromJSON, StripeApplicationFeeRefundSyncResultsToJSON, StripeFieldVerificationFromJSON, StripeFieldVerificationToJSON, } from './';
export function StripeApplicationFeeSyncResultsFromJSON(json) {
    return StripeApplicationFeeSyncResultsFromJSONTyped(json, false);
}
export function StripeApplicationFeeSyncResultsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'feeRefunds': !exists(json, 'feeRefunds') ? undefined : (json['feeRefunds'].map(StripeApplicationFeeRefundSyncResultsFromJSON)),
        'fields': !exists(json, 'fields') ? undefined : (json['fields'].map(StripeFieldVerificationFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'verificationMessage': !exists(json, 'verificationMessage') ? undefined : json['verificationMessage'],
    };
}
export function StripeApplicationFeeSyncResultsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'feeRefunds': value.feeRefunds === undefined ? undefined : (value.feeRefunds.map(StripeApplicationFeeRefundSyncResultsToJSON)),
        'fields': value.fields === undefined ? undefined : (value.fields.map(StripeFieldVerificationToJSON)),
        'id': value.id,
        'verificationMessage': value.verificationMessage,
    };
}