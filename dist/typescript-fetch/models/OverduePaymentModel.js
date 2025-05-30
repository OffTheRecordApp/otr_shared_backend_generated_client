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
export function OverduePaymentModelFromJSON(json) {
    return OverduePaymentModelFromJSONTyped(json, false);
}
export function OverduePaymentModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'overduePaymentAmountInCents': !exists(json, 'overduePaymentAmountInCents') ? undefined : json['overduePaymentAmountInCents'],
    };
}
export function OverduePaymentModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'overduePaymentAmountInCents': value.overduePaymentAmountInCents,
    };
}
