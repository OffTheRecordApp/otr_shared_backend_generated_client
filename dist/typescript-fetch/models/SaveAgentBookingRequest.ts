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
 * @interface SaveAgentBookingRequest
 */
export interface SaveAgentBookingRequest {
    /**
     * 
     * @type {number}
     * @memberof SaveAgentBookingRequest
     */
    agentBookingId?: number;
    /**
     * 
     * @type {string}
     * @memberof SaveAgentBookingRequest
     */
    bookingReference?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveAgentBookingRequest
     */
    caseId?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveAgentBookingRequest
     */
    channel?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveAgentBookingRequest
     */
    direction?: string;
    /**
     * 
     * @type {number}
     * @memberof SaveAgentBookingRequest
     */
    userId?: number;
}

export function SaveAgentBookingRequestFromJSON(json: any): SaveAgentBookingRequest {
    return SaveAgentBookingRequestFromJSONTyped(json, false);
}

export function SaveAgentBookingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveAgentBookingRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agentBookingId': !exists(json, 'agentBookingId') ? undefined : json['agentBookingId'],
        'bookingReference': !exists(json, 'bookingReference') ? undefined : json['bookingReference'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function SaveAgentBookingRequestToJSON(value?: SaveAgentBookingRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agentBookingId': value.agentBookingId,
        'bookingReference': value.bookingReference,
        'caseId': value.caseId,
        'channel': value.channel,
        'direction': value.direction,
        'userId': value.userId,
    };
}

