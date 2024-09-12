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
export function HandleOrphanedStripeChargeRequestFromJSON(json) {
    return HandleOrphanedStripeChargeRequestFromJSONTyped(json, false);
}
export function HandleOrphanedStripeChargeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stripeChargeIds': !exists(json, 'stripeChargeIds') ? undefined : json['stripeChargeIds'],
        'throwExceptionOnFailure': !exists(json, 'throwExceptionOnFailure') ? undefined : json['throwExceptionOnFailure'],
    };
}
export function HandleOrphanedStripeChargeRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stripeChargeIds': value.stripeChargeIds,
        'throwExceptionOnFailure': value.throwExceptionOnFailure,
    };
}