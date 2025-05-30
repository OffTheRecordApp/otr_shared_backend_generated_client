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
export function ViolationModel0FromJSON(json) {
    return ViolationModel0FromJSONTyped(json, false);
}
export function ViolationModel0FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'userFriendlyName': !exists(json, 'userFriendlyName') ? undefined : json['userFriendlyName'],
    };
}
export function ViolationModel0ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'userFriendlyName': value.userFriendlyName,
    };
}
