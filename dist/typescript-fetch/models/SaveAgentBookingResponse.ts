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
    CustomerServiceAgentBookingDomain,
    CustomerServiceAgentBookingDomainFromJSON,
    CustomerServiceAgentBookingDomainFromJSONTyped,
    CustomerServiceAgentBookingDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface SaveAgentBookingResponse
 */
export interface SaveAgentBookingResponse {
    /**
     * 
     * @type {CustomerServiceAgentBookingDomain}
     * @memberof SaveAgentBookingResponse
     */
    booking?: CustomerServiceAgentBookingDomain;
}

export function SaveAgentBookingResponseFromJSON(json: any): SaveAgentBookingResponse {
    return SaveAgentBookingResponseFromJSONTyped(json, false);
}

export function SaveAgentBookingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveAgentBookingResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'booking': !exists(json, 'booking') ? undefined : CustomerServiceAgentBookingDomainFromJSON(json['booking']),
    };
}

export function SaveAgentBookingResponseToJSON(value?: SaveAgentBookingResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'booking': CustomerServiceAgentBookingDomainToJSON(value.booking),
    };
}


