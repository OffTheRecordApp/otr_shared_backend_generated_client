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
export function GetDeclinedCasesRequestFromJSON(json) {
    return GetDeclinedCasesRequestFromJSONTyped(json, false);
}
export function GetDeclinedCasesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'loadFreshdeskTicketDetails': !exists(json, 'loadFreshdeskTicketDetails') ? undefined : json['loadFreshdeskTicketDetails'],
    };
}
export function GetDeclinedCasesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'loadFreshdeskTicketDetails': value.loadFreshdeskTicketDetails,
    };
}