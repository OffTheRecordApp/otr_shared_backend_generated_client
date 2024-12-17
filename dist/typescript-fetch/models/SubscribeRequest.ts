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
    SubscriberDomain,
    SubscriberDomainFromJSON,
    SubscriberDomainFromJSONTyped,
    SubscriberDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface SubscribeRequest
 */
export interface SubscribeRequest {
    /**
     * 
     * @type {SubscriberDomain}
     * @memberof SubscribeRequest
     */
    subscriber?: SubscriberDomain;
}

export function SubscribeRequestFromJSON(json: any): SubscribeRequest {
    return SubscribeRequestFromJSONTyped(json, false);
}

export function SubscribeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscribeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriber': !exists(json, 'subscriber') ? undefined : SubscriberDomainFromJSON(json['subscriber']),
    };
}

export function SubscribeRequestToJSON(value?: SubscribeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriber': SubscriberDomainToJSON(value.subscriber),
    };
}

