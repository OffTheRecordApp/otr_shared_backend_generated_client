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
export function GetCitationPhoneLeadsRequestFromJSON(json) {
    return GetCitationPhoneLeadsRequestFromJSONTyped(json, false);
}
export function GetCitationPhoneLeadsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'trailingDays': !exists(json, 'trailingDays') ? undefined : json['trailingDays'],
    };
}
export function GetCitationPhoneLeadsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'trailingDays': value.trailingDays,
    };
}
