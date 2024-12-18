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
    StripeFieldVerification,
    StripeFieldVerificationFromJSON,
    StripeFieldVerificationFromJSONTyped,
    StripeFieldVerificationToJSON,
    StripeReversalSyncResults,
    StripeReversalSyncResultsFromJSON,
    StripeReversalSyncResultsFromJSONTyped,
    StripeReversalSyncResultsToJSON,
} from './';

/**
 * 
 * @export
 * @interface StripeTransferSyncResults
 */
export interface StripeTransferSyncResults {
    /**
     * 
     * @type {Array<StripeFieldVerification>}
     * @memberof StripeTransferSyncResults
     */
    fields?: Array<StripeFieldVerification>;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferSyncResults
     */
    id?: string;
    /**
     * 
     * @type {Array<StripeReversalSyncResults>}
     * @memberof StripeTransferSyncResults
     */
    reversals?: Array<StripeReversalSyncResults>;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferSyncResults
     */
    verificationMessage?: string;
}

export function StripeTransferSyncResultsFromJSON(json: any): StripeTransferSyncResults {
    return StripeTransferSyncResultsFromJSONTyped(json, false);
}

export function StripeTransferSyncResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeTransferSyncResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(StripeFieldVerificationFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'reversals': !exists(json, 'reversals') ? undefined : ((json['reversals'] as Array<any>).map(StripeReversalSyncResultsFromJSON)),
        'verificationMessage': !exists(json, 'verificationMessage') ? undefined : json['verificationMessage'],
    };
}

export function StripeTransferSyncResultsToJSON(value?: StripeTransferSyncResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(StripeFieldVerificationToJSON)),
        'id': value.id,
        'reversals': value.reversals === undefined ? undefined : ((value.reversals as Array<any>).map(StripeReversalSyncResultsToJSON)),
        'verificationMessage': value.verificationMessage,
    };
}


