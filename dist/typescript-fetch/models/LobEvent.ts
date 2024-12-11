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
 * @interface LobEvent
 */
export interface LobEvent {
    /**
     * 
     * @type {boolean}
     * @memberof LobEvent
     */
    enabledForTest?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LobEvent
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LobEvent
     */
    resource?: string;
}

export function LobEventFromJSON(json: any): LobEvent {
    return LobEventFromJSONTyped(json, false);
}

export function LobEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): LobEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabledForTest': !exists(json, 'enabled_for_test') ? undefined : json['enabled_for_test'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'resource': !exists(json, 'resource') ? undefined : json['resource'],
    };
}

export function LobEventToJSON(value?: LobEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled_for_test': value.enabledForTest,
        'id': value.id,
        'resource': value.resource,
    };
}


