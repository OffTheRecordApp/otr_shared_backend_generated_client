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
export function NotificationEventsFromJSON(json) {
    return NotificationEventsFromJSONTyped(json, false);
}
export function NotificationEventsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'events': !exists(json, 'events') ? undefined : json['events'],
        'totalUnreadCount': !exists(json, 'totalUnreadCount') ? undefined : json['totalUnreadCount'],
    };
}
export function NotificationEventsToJSON(value) {
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