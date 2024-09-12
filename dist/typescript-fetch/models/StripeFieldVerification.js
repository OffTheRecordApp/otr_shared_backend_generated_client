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
export function StripeFieldVerificationFromJSON(json) {
    return StripeFieldVerificationFromJSONTyped(json, false);
}
export function StripeFieldVerificationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dbValue': !exists(json, 'dbValue') ? undefined : json['dbValue'],
        'fieldName': !exists(json, 'fieldName') ? undefined : json['fieldName'],
        'stripeValue': !exists(json, 'stripeValue') ? undefined : json['stripeValue'],
    };
}
export function StripeFieldVerificationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dbValue': value.dbValue,
        'fieldName': value.fieldName,
        'stripeValue': value.stripeValue,
    };
}