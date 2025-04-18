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
import { TicketTypeAttributeFromJSON, TicketTypeAttributeToJSON, } from './';
export function TicketTypeAttributesWrapperFromJSON(json) {
    return TicketTypeAttributesWrapperFromJSONTyped(json, false);
}
export function TicketTypeAttributesWrapperFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !exists(json, 'data') ? undefined : (json['data'].map(TicketTypeAttributeFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}
export function TicketTypeAttributesWrapperToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(TicketTypeAttributeToJSON)),
        'type': value.type,
    };
}
