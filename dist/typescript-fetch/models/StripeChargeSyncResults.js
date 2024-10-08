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
import { StripeApplicationFeeSyncResultsFromJSON, StripeApplicationFeeSyncResultsToJSON, StripeFieldVerificationFromJSON, StripeFieldVerificationToJSON, StripeRefundSyncResultsFromJSON, StripeRefundSyncResultsToJSON, StripeTransferSyncResultsFromJSON, StripeTransferSyncResultsToJSON, } from './';
export function StripeChargeSyncResultsFromJSON(json) {
    return StripeChargeSyncResultsFromJSONTyped(json, false);
}
export function StripeChargeSyncResultsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'applicationFees': !exists(json, 'applicationFees') ? undefined : (json['applicationFees'].map(StripeApplicationFeeSyncResultsFromJSON)),
        'fields': !exists(json, 'fields') ? undefined : (json['fields'].map(StripeFieldVerificationFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'refunds': !exists(json, 'refunds') ? undefined : (json['refunds'].map(StripeRefundSyncResultsFromJSON)),
        'transfers': !exists(json, 'transfers') ? undefined : (json['transfers'].map(StripeTransferSyncResultsFromJSON)),
        'verificationMessage': !exists(json, 'verificationMessage') ? undefined : json['verificationMessage'],
    };
}
export function StripeChargeSyncResultsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'applicationFees': value.applicationFees === undefined ? undefined : (value.applicationFees.map(StripeApplicationFeeSyncResultsToJSON)),
        'fields': value.fields === undefined ? undefined : (value.fields.map(StripeFieldVerificationToJSON)),
        'id': value.id,
        'refunds': value.refunds === undefined ? undefined : (value.refunds.map(StripeRefundSyncResultsToJSON)),
        'transfers': value.transfers === undefined ? undefined : (value.transfers.map(StripeTransferSyncResultsToJSON)),
        'verificationMessage': value.verificationMessage,
    };
}
