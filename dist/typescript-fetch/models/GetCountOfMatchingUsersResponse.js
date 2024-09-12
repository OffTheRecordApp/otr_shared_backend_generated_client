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
export function GetCountOfMatchingUsersResponseFromJSON(json) {
    return GetCountOfMatchingUsersResponseFromJSONTyped(json, false);
}
export function GetCountOfMatchingUsersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'numMatchingUsers': !exists(json, 'numMatchingUsers') ? undefined : json['numMatchingUsers'],
    };
}
export function GetCountOfMatchingUsersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'numMatchingUsers': value.numMatchingUsers,
    };
}