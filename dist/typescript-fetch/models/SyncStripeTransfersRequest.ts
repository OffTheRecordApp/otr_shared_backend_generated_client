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
 * @interface SyncStripeTransfersRequest
 */
export interface SyncStripeTransfersRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SyncStripeTransfersRequest
     */
    isDryRun?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SyncStripeTransfersRequest
     */
    numTransfersToVerify?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SyncStripeTransfersRequest
     */
    stripeTransferIds?: Array<string>;
}

export function SyncStripeTransfersRequestFromJSON(json: any): SyncStripeTransfersRequest {
    return SyncStripeTransfersRequestFromJSONTyped(json, false);
}

export function SyncStripeTransfersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncStripeTransfersRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isDryRun': !exists(json, 'isDryRun') ? undefined : json['isDryRun'],
        'numTransfersToVerify': !exists(json, 'numTransfersToVerify') ? undefined : json['numTransfersToVerify'],
        'stripeTransferIds': !exists(json, 'stripeTransferIds') ? undefined : json['stripeTransferIds'],
    };
}

export function SyncStripeTransfersRequestToJSON(value?: SyncStripeTransfersRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isDryRun': value.isDryRun,
        'numTransfersToVerify': value.numTransfersToVerify,
        'stripeTransferIds': value.stripeTransferIds,
    };
}

