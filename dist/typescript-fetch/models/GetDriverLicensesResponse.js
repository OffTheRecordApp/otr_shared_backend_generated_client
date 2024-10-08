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
import { DriverLicenseModelFromJSON, DriverLicenseModelToJSON, } from './';
export function GetDriverLicensesResponseFromJSON(json) {
    return GetDriverLicensesResponseFromJSONTyped(json, false);
}
export function GetDriverLicensesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'driverLicenses': !exists(json, 'driverLicenses') ? undefined : (json['driverLicenses'].map(DriverLicenseModelFromJSON)),
    };
}
export function GetDriverLicensesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'driverLicenses': value.driverLicenses === undefined ? undefined : (value.driverLicenses.map(DriverLicenseModelToJSON)),
    };
}
