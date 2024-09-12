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
export function FindDisputesRequestFromJSON(json) {
    return FindDisputesRequestFromJSONTyped(json, false);
}
export function FindDisputesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'disputeStatus': !exists(json, 'disputeStatus') ? undefined : json['disputeStatus'],
        'maxResults': !exists(json, 'maxResults') ? undefined : json['maxResults'],
    };
}
export function FindDisputesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'disputeStatus': value.disputeStatus,
        'maxResults': value.maxResults,
    };
}