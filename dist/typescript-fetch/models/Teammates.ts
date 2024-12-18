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
    Admin,
    AdminFromJSON,
    AdminFromJSONTyped,
    AdminToJSON,
} from './';

/**
 * 
 * @export
 * @interface Teammates
 */
export interface Teammates {
    /**
     * 
     * @type {Array<Admin>}
     * @memberof Teammates
     */
    admins?: Array<Admin>;
    /**
     * 
     * @type {string}
     * @memberof Teammates
     */
    type?: string;
}

export function TeammatesFromJSON(json: any): Teammates {
    return TeammatesFromJSONTyped(json, false);
}

export function TeammatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Teammates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'admins': !exists(json, 'admins') ? undefined : ((json['admins'] as Array<any>).map(AdminFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function TeammatesToJSON(value?: Teammates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'admins': value.admins === undefined ? undefined : ((value.admins as Array<any>).map(AdminToJSON)),
        'type': value.type,
    };
}


