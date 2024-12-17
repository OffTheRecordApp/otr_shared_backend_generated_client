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
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    type?: string;
}

export function ContactFromJSON(json: any): Contact {
    return ContactFromJSONTyped(json, false);
}

export function ContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ContactToJSON(value?: Contact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'external_id': value.externalId,
        'id': value.id,
        'type': value.type,
    };
}

