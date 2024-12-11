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
    NotificationEvent,
    NotificationEventFromJSON,
    NotificationEventFromJSONTyped,
    NotificationEventToJSON,
} from './';

/**
 * 
 * @export
 * @interface NotificationEvents
 */
export interface NotificationEvents {
    /**
     * 
     * @type {{ [key: string]: Array<NotificationEvent>; }}
     * @memberof NotificationEvents
     */
    events?: { [key: string]: Array<NotificationEvent>; };
    /**
     * 
     * @type {number}
     * @memberof NotificationEvents
     */
    totalUnreadCount?: number;
}

export function NotificationEventsFromJSON(json: any): NotificationEvents {
    return NotificationEventsFromJSONTyped(json, false);
}

export function NotificationEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationEvents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'events': !exists(json, 'events') ? undefined : json['events'],
        'totalUnreadCount': !exists(json, 'totalUnreadCount') ? undefined : json['totalUnreadCount'],
    };
}

export function NotificationEventsToJSON(value?: NotificationEvents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'events': value.events,
        'totalUnreadCount': value.totalUnreadCount,
    };
}


