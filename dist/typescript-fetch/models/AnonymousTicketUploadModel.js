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
export function AnonymousTicketUploadModelFromJSON(json) {
    return AnonymousTicketUploadModelFromJSONTyped(json, false);
}
export function AnonymousTicketUploadModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'clientEmailAddress': !exists(json, 'clientEmailAddress') ? undefined : json['clientEmailAddress'],
        'creationDateUTC': !exists(json, 'creationDateUTC') ? undefined : (new Date(json['creationDateUTC'])),
        'isDismissedFromContactList': !exists(json, 'isDismissedFromContactList') ? undefined : json['isDismissedFromContactList'],
        'signedTicketImageUrl': !exists(json, 'signedTicketImageUrl') ? undefined : json['signedTicketImageUrl'],
        'ticketImageUrl': !exists(json, 'ticketImageUrl') ? undefined : json['ticketImageUrl'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function AnonymousTicketUploadModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'citationId': value.citationId,
        'clientEmailAddress': value.clientEmailAddress,
        'creationDateUTC': value.creationDateUTC === undefined ? undefined : (value.creationDateUTC.toISOString()),
        'isDismissedFromContactList': value.isDismissedFromContactList,
        'signedTicketImageUrl': value.signedTicketImageUrl,
        'ticketImageUrl': value.ticketImageUrl,
        'userId': value.userId,
    };
}
