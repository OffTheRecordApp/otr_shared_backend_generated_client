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
    IncomingEmailModels,
    IncomingEmailModelsFromJSON,
    IncomingEmailModelsFromJSONTyped,
    IncomingEmailModelsToJSON,
} from './';

/**
 * 
 * @export
 * @interface IncomingEmailRequest
 */
export interface IncomingEmailRequest {
    /**
     * 
     * @type {string}
     * @memberof IncomingEmailRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof IncomingEmailRequest
     */
    subscribeURL?: string;
    /**
     * 
     * @type {string}
     * @memberof IncomingEmailRequest
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof IncomingEmailRequest
     */
    unsubscribeURL?: string;
    /**
     * 
     * @type {IncomingEmailModels}
     * @memberof IncomingEmailRequest
     */
    models?: IncomingEmailModels;
}

export function IncomingEmailRequestFromJSON(json: any): IncomingEmailRequest {
    return IncomingEmailRequestFromJSONTyped(json, false);
}

export function IncomingEmailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomingEmailRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'Message') ? undefined : json['Message'],
        'subscribeURL': !exists(json, 'SubscribeURL') ? undefined : json['SubscribeURL'],
        'type': !exists(json, 'Type') ? undefined : json['Type'],
        'unsubscribeURL': !exists(json, 'UnsubscribeURL') ? undefined : json['UnsubscribeURL'],
        'models': !exists(json, 'models') ? undefined : IncomingEmailModelsFromJSON(json['models']),
    };
}

export function IncomingEmailRequestToJSON(value?: IncomingEmailRequest | null): any {
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
        'models': IncomingEmailModelsToJSON(value.models),
    };
}


