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
import { PotentialCustomerDomainFromJSON, PotentialCustomerDomainToJSON, } from './';
export function GetPotentialCustomersResponseFromJSON(json) {
    return GetPotentialCustomersResponseFromJSONTyped(json, false);
}
export function GetPotentialCustomersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'numRecords': !exists(json, 'numRecords') ? undefined : json['numRecords'],
        'potentialCustomers': !exists(json, 'potentialCustomers') ? undefined : (json['potentialCustomers'].map(PotentialCustomerDomainFromJSON)),
    };
}
export function GetPotentialCustomersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'numRecords': value.numRecords,
        'potentialCustomers': value.potentialCustomers === undefined ? undefined : (value.potentialCustomers.map(PotentialCustomerDomainToJSON)),
    };
}
