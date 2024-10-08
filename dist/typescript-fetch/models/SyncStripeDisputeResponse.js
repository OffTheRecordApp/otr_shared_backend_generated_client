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
import { StripeDisputeDomainFromJSON, StripeDisputeDomainToJSON, } from './';
export function SyncStripeDisputeResponseFromJSON(json) {
    return SyncStripeDisputeResponseFromJSONTyped(json, false);
}
export function SyncStripeDisputeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dispute': !exists(json, 'dispute') ? undefined : StripeDisputeDomainFromJSON(json['dispute']),
    };
}
export function SyncStripeDisputeResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dispute': StripeDisputeDomainToJSON(value.dispute),
    };
}
