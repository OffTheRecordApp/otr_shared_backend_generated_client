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
    SetStarOnMessageModel,
    SetStarOnMessageModelFromJSON,
    SetStarOnMessageModelFromJSONTyped,
    SetStarOnMessageModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface SetStarOnMessagesRequest
 */
export interface SetStarOnMessagesRequest {
    /**
     * 
     * @type {Array<SetStarOnMessageModel>}
     * @memberof SetStarOnMessagesRequest
     */
    messages?: Array<SetStarOnMessageModel>;
    /**
     * 
     * @type {boolean}
     * @memberof SetStarOnMessagesRequest
     */
    starred?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SetStarOnMessagesRequest
     */
    userId?: number;
}

export function SetStarOnMessagesRequestFromJSON(json: any): SetStarOnMessagesRequest {
    return SetStarOnMessagesRequestFromJSONTyped(json, false);
}

export function SetStarOnMessagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetStarOnMessagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messages': !exists(json, 'messages') ? undefined : ((json['messages'] as Array<any>).map(SetStarOnMessageModelFromJSON)),
        'starred': !exists(json, 'starred') ? undefined : json['starred'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function SetStarOnMessagesRequestToJSON(value?: SetStarOnMessagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messages': value.messages === undefined ? undefined : ((value.messages as Array<any>).map(SetStarOnMessageModelToJSON)),
        'starred': value.starred,
        'userId': value.userId,
    };
}


