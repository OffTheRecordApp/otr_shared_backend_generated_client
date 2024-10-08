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
import { DripWebhookDataFromJSON, DripWebhookDataToJSON, } from './';
export function DripWebhookEventFromJSON(json) {
    return DripWebhookEventFromJSONTyped(json, false);
}
export function DripWebhookEventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !exists(json, 'data') ? undefined : DripWebhookDataFromJSON(json['data']),
        'event': !exists(json, 'event') ? undefined : json['event'],
        'occurredAt': !exists(json, 'occurred_at') ? undefined : (new Date(json['occurred_at'])),
    };
}
export function DripWebhookEventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': DripWebhookDataToJSON(value.data),
        'event': value.event,
        'occurred_at': value.occurredAt === undefined ? undefined : (value.occurredAt.toISOString()),
    };
}
