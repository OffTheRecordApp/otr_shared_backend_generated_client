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
 * @interface EditConversationMessageRequest
 */
export interface EditConversationMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof EditConversationMessageRequest
     */
    messageBody?: string;
}

export function EditConversationMessageRequestFromJSON(json: any): EditConversationMessageRequest {
    return EditConversationMessageRequestFromJSONTyped(json, false);
}

export function EditConversationMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditConversationMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messageBody': !exists(json, 'messageBody') ? undefined : json['messageBody'],
    };
}

export function EditConversationMessageRequestToJSON(value?: EditConversationMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messageBody': value.messageBody,
    };
}

