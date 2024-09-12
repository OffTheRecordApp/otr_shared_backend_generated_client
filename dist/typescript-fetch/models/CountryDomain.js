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
export function CountryDomainFromJSON(json) {
    return CountryDomainFromJSONTyped(json, false);
}
export function CountryDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryName': !exists(json, 'countryName') ? undefined : json['countryName'],
    };
}
export function CountryDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'countryCode': value.countryCode,
        'countryName': value.countryName,
    };
}