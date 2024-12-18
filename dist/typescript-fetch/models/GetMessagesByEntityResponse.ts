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
    ActionByEntityModel,
    ActionByEntityModelFromJSON,
    ActionByEntityModelFromJSONTyped,
    ActionByEntityModelToJSON,
    MessageByEntityModel,
    MessageByEntityModelFromJSON,
    MessageByEntityModelFromJSONTyped,
    MessageByEntityModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetMessagesByEntityResponse
 */
export interface GetMessagesByEntityResponse {
    /**
     * 
     * @type {Array<ActionByEntityModel>}
     * @memberof GetMessagesByEntityResponse
     */
    actions?: Array<ActionByEntityModel>;
    /**
     * 
     * @type {Array<MessageByEntityModel>}
     * @memberof GetMessagesByEntityResponse
     */
    messages?: Array<MessageByEntityModel>;
    /**
     * 
     * @type {number}
     * @memberof GetMessagesByEntityResponse
     */
    numActions?: number;
    /**
     * 
     * @type {number}
     * @memberof GetMessagesByEntityResponse
     */
    numMessages?: number;
}

export function GetMessagesByEntityResponseFromJSON(json: any): GetMessagesByEntityResponse {
    return GetMessagesByEntityResponseFromJSONTyped(json, false);
}

export function GetMessagesByEntityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMessagesByEntityResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': !exists(json, 'actions') ? undefined : ((json['actions'] as Array<any>).map(ActionByEntityModelFromJSON)),
        'messages': !exists(json, 'messages') ? undefined : ((json['messages'] as Array<any>).map(MessageByEntityModelFromJSON)),
        'numActions': !exists(json, 'numActions') ? undefined : json['numActions'],
        'numMessages': !exists(json, 'numMessages') ? undefined : json['numMessages'],
    };
}

export function GetMessagesByEntityResponseToJSON(value?: GetMessagesByEntityResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions === undefined ? undefined : ((value.actions as Array<any>).map(ActionByEntityModelToJSON)),
        'messages': value.messages === undefined ? undefined : ((value.messages as Array<any>).map(MessageByEntityModelToJSON)),
        'numActions': value.numActions,
        'numMessages': value.numMessages,
    };
}


