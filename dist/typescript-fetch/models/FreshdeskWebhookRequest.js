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
export function FreshdeskWebhookRequestFromJSON(json) {
    return FreshdeskWebhookRequestFromJSONTyped(json, false);
}
export function FreshdeskWebhookRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'agentEmail': !exists(json, 'agentEmail') ? undefined : json['agentEmail'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'requesterEmail': !exists(json, 'requesterEmail') ? undefined : json['requesterEmail'],
        'requesterFirstName': !exists(json, 'requesterFirstName') ? undefined : json['requesterFirstName'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'ticketId': !exists(json, 'ticketId') ? undefined : json['ticketId'],
        'ticketType': !exists(json, 'ticketType') ? undefined : json['ticketType'],
    };
}
export function FreshdeskWebhookRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'agentEmail': value.agentEmail,
        'mobile': value.mobile,
        'phone': value.phone,
        'requesterEmail': value.requesterEmail,
        'requesterFirstName': value.requesterFirstName,
        'status': value.status,
        'subject': value.subject,
        'ticketId': value.ticketId,
        'ticketType': value.ticketType,
    };
}