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
 * @interface AnonymousTicketUploadModel
 */
export interface AnonymousTicketUploadModel {
    /**
     * 
     * @type {number}
     * @memberof AnonymousTicketUploadModel
     */
    citationId?: number;
    /**
     * 
     * @type {string}
     * @memberof AnonymousTicketUploadModel
     */
    clientEmailAddress?: string;
    /**
     * 
     * @type {Date}
     * @memberof AnonymousTicketUploadModel
     */
    creationDateUTC?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof AnonymousTicketUploadModel
     */
    isDismissedFromContactList?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AnonymousTicketUploadModel
     */
    signedTicketImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AnonymousTicketUploadModel
     */
    ticketImageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof AnonymousTicketUploadModel
     */
    userId?: number;
}

export function AnonymousTicketUploadModelFromJSON(json: any): AnonymousTicketUploadModel {
    return AnonymousTicketUploadModelFromJSONTyped(json, false);
}

export function AnonymousTicketUploadModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnonymousTicketUploadModel {
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

export function AnonymousTicketUploadModelToJSON(value?: AnonymousTicketUploadModel | null): any {
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


