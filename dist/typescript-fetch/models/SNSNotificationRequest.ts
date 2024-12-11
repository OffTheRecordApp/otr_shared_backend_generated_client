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
 * @interface SNSNotificationRequest
 */
export interface SNSNotificationRequest {
    /**
     * 
     * @type {string}
     * @memberof SNSNotificationRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof SNSNotificationRequest
     */
    subscribeURL?: string;
    /**
     * 
     * @type {string}
     * @memberof SNSNotificationRequest
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof SNSNotificationRequest
     */
    unsubscribeURL?: string;
}

export function SNSNotificationRequestFromJSON(json: any): SNSNotificationRequest {
    return SNSNotificationRequestFromJSONTyped(json, false);
}

export function SNSNotificationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SNSNotificationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'Message') ? undefined : json['Message'],
        'subscribeURL': !exists(json, 'SubscribeURL') ? undefined : json['SubscribeURL'],
        'type': !exists(json, 'Type') ? undefined : json['Type'],
        'unsubscribeURL': !exists(json, 'UnsubscribeURL') ? undefined : json['UnsubscribeURL'],
    };
}

export function SNSNotificationRequestToJSON(value?: SNSNotificationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Message': value.message,
        'SubscribeURL': value.subscribeURL,
        'Type': value.type,
        'UnsubscribeURL': value.unsubscribeURL,
    };
}


