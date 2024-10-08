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
import { LastLoginDateModelFromJSON, LastLoginDateModelToJSON, } from './';
export function GetLastLoginResponseFromJSON(json) {
    return GetLastLoginResponseFromJSONTyped(json, false);
}
export function GetLastLoginResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lastLoginDateModels': !exists(json, 'lastLoginDateModels') ? undefined : (json['lastLoginDateModels'].map(LastLoginDateModelFromJSON)),
    };
}
export function GetLastLoginResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lastLoginDateModels': value.lastLoginDateModels === undefined ? undefined : (value.lastLoginDateModels.map(LastLoginDateModelToJSON)),
    };
}
