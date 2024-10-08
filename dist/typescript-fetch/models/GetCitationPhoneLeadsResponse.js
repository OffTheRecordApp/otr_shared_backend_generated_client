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
import { ClientLeadDomainFromJSON, ClientLeadDomainToJSON, } from './';
export function GetCitationPhoneLeadsResponseFromJSON(json) {
    return GetCitationPhoneLeadsResponseFromJSONTyped(json, false);
}
export function GetCitationPhoneLeadsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'callList': !exists(json, 'callList') ? undefined : (json['callList'].map(ClientLeadDomainFromJSON)),
    };
}
export function GetCitationPhoneLeadsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'callList': value.callList === undefined ? undefined : (value.callList.map(ClientLeadDomainToJSON)),
    };
}
