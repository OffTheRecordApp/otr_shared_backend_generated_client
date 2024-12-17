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
    StripeDisputeDomain,
    StripeDisputeDomainFromJSON,
    StripeDisputeDomainFromJSONTyped,
    StripeDisputeDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface SyncStripeDisputeResponse
 */
export interface SyncStripeDisputeResponse {
    /**
     * 
     * @type {StripeDisputeDomain}
     * @memberof SyncStripeDisputeResponse
     */
    dispute?: StripeDisputeDomain;
}

export function SyncStripeDisputeResponseFromJSON(json: any): SyncStripeDisputeResponse {
    return SyncStripeDisputeResponseFromJSONTyped(json, false);
}

export function SyncStripeDisputeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncStripeDisputeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dispute': !exists(json, 'dispute') ? undefined : StripeDisputeDomainFromJSON(json['dispute']),
    };
}

export function SyncStripeDisputeResponseToJSON(value?: SyncStripeDisputeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dispute': StripeDisputeDomainToJSON(value.dispute),
    };
}

