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
import { FreshDeskTicketFromJSON, FreshDeskTicketToJSON, } from './';
export function GetSupportTicketsResponseFromJSON(json) {
    return GetSupportTicketsResponseFromJSONTyped(json, false);
}
export function GetSupportTicketsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'supportTickets': !exists(json, 'supportTickets') ? undefined : (json['supportTickets'].map(FreshDeskTicketFromJSON)),
    };
}
export function GetSupportTicketsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'supportTickets': value.supportTickets === undefined ? undefined : (value.supportTickets.map(FreshDeskTicketToJSON)),
    };
}
