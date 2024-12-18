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

import { exists, mapValues } from '../runtime';
import {
    TicketTypeAttributesWrapper,
    TicketTypeAttributesWrapperFromJSON,
    TicketTypeAttributesWrapperFromJSONTyped,
    TicketTypeAttributesWrapperToJSON,
} from './';

/**
 * 
 * @export
 * @interface TicketType
 */
export interface TicketType {
    /**
     * 
     * @type {boolean}
     * @memberof TicketType
     */
    archived?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TicketType
     */
    createdAt?: number;
    /**
     * 
     * @type {string}
     * @memberof TicketType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TicketType
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TicketType
     */
    isInternal?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TicketType
     */
    name?: string;
    /**
     * 
     * @type {TicketTypeAttributesWrapper}
     * @memberof TicketType
     */
    ticketTypeAttributes?: TicketTypeAttributesWrapper;
    /**
     * 
     * @type {string}
     * @memberof TicketType
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof TicketType
     */
    updatedAt?: number;
}

export function TicketTypeFromJSON(json: any): TicketType {
    return TicketTypeFromJSONTyped(json, false);
}

export function TicketTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'archived': !exists(json, 'archived') ? undefined : json['archived'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isInternal': !exists(json, 'is_internal') ? undefined : json['is_internal'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ticketTypeAttributes': !exists(json, 'ticket_type_attributes') ? undefined : TicketTypeAttributesWrapperFromJSON(json['ticket_type_attributes']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function TicketTypeToJSON(value?: TicketType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'archived': value.archived,
        'created_at': value.createdAt,
        'description': value.description,
        'id': value.id,
        'is_internal': value.isInternal,
        'name': value.name,
        'ticket_type_attributes': TicketTypeAttributesWrapperToJSON(value.ticketTypeAttributes),
        'type': value.type,
        'updated_at': value.updatedAt,
    };
}


