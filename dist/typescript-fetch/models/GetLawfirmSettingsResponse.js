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
import { LawfirmSettingsDomainResFromJSON, LawfirmSettingsDomainResToJSON, } from './';
export function GetLawfirmSettingsResponseFromJSON(json) {
    return GetLawfirmSettingsResponseFromJSONTyped(json, false);
}
export function GetLawfirmSettingsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'settings': !exists(json, 'settings') ? undefined : LawfirmSettingsDomainResFromJSON(json['settings']),
    };
}
export function GetLawfirmSettingsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'settings': LawfirmSettingsDomainResToJSON(value.settings),
    };
}
