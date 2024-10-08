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
import { CountryRegionFromJSON, CountryRegionToJSON, } from './';
export function AddInnerCourtAddressFromJSON(json) {
    return AddInnerCourtAddressFromJSONTyped(json, false);
}
export function AddInnerCourtAddressFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'addressLine2': !exists(json, 'addressLine2') ? undefined : json['addressLine2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'region': !exists(json, 'region') ? undefined : CountryRegionFromJSON(json['region']),
    };
}
export function AddInnerCourtAddressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressLine1': value.addressLine1,
        'addressLine2': value.addressLine2,
        'city': value.city,
        'countryCode': value.countryCode,
        'phoneNumber': value.phoneNumber,
        'postalCode': value.postalCode,
        'region': CountryRegionToJSON(value.region),
    };
}
