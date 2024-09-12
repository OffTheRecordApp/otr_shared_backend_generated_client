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
import { GetCaseUserModelFromJSON, GetCaseUserModelToJSON, } from './';
export function GetCaseUsersResponseFromJSON(json) {
    return GetCaseUsersResponseFromJSONTyped(json, false);
}
export function GetCaseUsersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'users': !exists(json, 'users') ? undefined : (json['users'].map(GetCaseUserModelFromJSON)),
    };
}
export function GetCaseUsersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'users': value.users === undefined ? undefined : (value.users.map(GetCaseUserModelToJSON)),
    };
}