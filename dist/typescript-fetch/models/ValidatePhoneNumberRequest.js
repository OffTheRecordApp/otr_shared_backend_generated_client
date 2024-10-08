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
export function ValidatePhoneNumberRequestFromJSON(json) {
    return ValidatePhoneNumberRequestFromJSONTyped(json, false);
}
export function ValidatePhoneNumberRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    };
}
export function ValidatePhoneNumberRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'phoneNumber': value.phoneNumber,
    };
}
