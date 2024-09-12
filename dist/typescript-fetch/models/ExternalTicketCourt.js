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
export function ExternalTicketCourtFromJSON(json) {
    return ExternalTicketCourtFromJSONTyped(json, false);
}
export function ExternalTicketCourtFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !exists(json, 'address') ? undefined : json['address'],
        'formattedPhoneNumber': !exists(json, 'formattedPhoneNumber') ? undefined : json['formattedPhoneNumber'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'unformattedPhoneNumber': !exists(json, 'unformattedPhoneNumber') ? undefined : json['unformattedPhoneNumber'],
    };
}
export function ExternalTicketCourtToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'formattedPhoneNumber': value.formattedPhoneNumber,
        'name': value.name,
        'unformattedPhoneNumber': value.unformattedPhoneNumber,
    };
}