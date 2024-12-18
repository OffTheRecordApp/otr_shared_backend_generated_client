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
/**
 * 
 * @export
 * @interface TicketPart
 */
export interface TicketPart {
    /**
     * 
     * @type {string}
     * @memberof TicketPart
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof TicketPart
     */
    createdAt?: number;
    /**
     * 
     * @type {string}
     * @memberof TicketPart
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TicketPart
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof TicketPart
     */
    updatedAt?: number;
}

export function TicketPartFromJSON(json: any): TicketPart {
    return TicketPartFromJSONTyped(json, false);
}

export function TicketPartFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketPart {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : json['content'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function TicketPartToJSON(value?: TicketPart | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'created_at': value.createdAt,
        'id': value.id,
        'type': value.type,
        'updated_at': value.updatedAt,
    };
}


