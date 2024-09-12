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
import { AddressDomainReqFromJSON, AddressDomainReqToJSON, } from './';
export function UpdateCitationAddressRequestFromJSON(json) {
    return UpdateCitationAddressRequestFromJSONTyped(json, false);
}
export function UpdateCitationAddressRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !exists(json, 'address') ? undefined : AddressDomainReqFromJSON(json['address']),
    };
}
export function UpdateCitationAddressRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': AddressDomainReqToJSON(value.address),
    };
}