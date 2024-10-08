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
export function AuthorizeChargeForCasePaymentRequestFromJSON(json) {
    return AuthorizeChargeForCasePaymentRequestFromJSONTyped(json, false);
}
export function AuthorizeChargeForCasePaymentRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ignoreCaseStatus': !exists(json, 'ignoreCaseStatus') ? undefined : json['ignoreCaseStatus'],
        'paymentMethodId': !exists(json, 'paymentMethodId') ? undefined : json['paymentMethodId'],
    };
}
export function AuthorizeChargeForCasePaymentRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ignoreCaseStatus': value.ignoreCaseStatus,
        'paymentMethodId': value.paymentMethodId,
    };
}
