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
export function TicketTypeAttributeFromJSON(json) {
    return TicketTypeAttributeFromJSONTyped(json, false);
}
export function TicketTypeAttributeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dataType': !exists(json, 'data_type') ? undefined : json['data_type'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'requiredToCreate': !exists(json, 'required_to_create') ? undefined : json['required_to_create'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'visibleOnCreate': !exists(json, 'visible_on_create') ? undefined : json['visible_on_create'],
    };
}
export function TicketTypeAttributeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data_type': value.dataType,
        'description': value.description,
        'id': value.id,
        'name': value.name,
        'required_to_create': value.requiredToCreate,
        'type': value.type,
        'visible_on_create': value.visibleOnCreate,
    };
}
