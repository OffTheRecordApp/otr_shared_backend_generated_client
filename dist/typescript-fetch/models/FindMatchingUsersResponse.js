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
import { FindMatchingUserFromJSON, FindMatchingUserToJSON, } from './';
export function FindMatchingUsersResponseFromJSON(json) {
    return FindMatchingUsersResponseFromJSONTyped(json, false);
}
export function FindMatchingUsersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'users': !exists(json, 'users') ? undefined : (json['users'].map(FindMatchingUserFromJSON)),
    };
}
export function FindMatchingUsersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'users': value.users === undefined ? undefined : (value.users.map(FindMatchingUserToJSON)),
    };
}
