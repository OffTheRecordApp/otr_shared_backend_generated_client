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
export function NoLawyerAvailableRequestFromJSON(json) {
    return NoLawyerAvailableRequestFromJSONTyped(json, false);
}
export function NoLawyerAvailableRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'offerPrice': !exists(json, 'offerPrice') ? undefined : json['offerPrice'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    };
}
export function NoLawyerAvailableRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'offerPrice': value.offerPrice,
        'phoneNumber': value.phoneNumber,
    };
}