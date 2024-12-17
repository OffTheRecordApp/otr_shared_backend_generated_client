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
} from './';

/**
 * 
 * @export
 * @interface StripeReversalSyncResults
 */
export interface StripeReversalSyncResults {
    /**
     * 
     * @type {Array<StripeFieldVerification>}
     * @memberof StripeReversalSyncResults
     */
    fields?: Array<StripeFieldVerification>;
    /**
     * 
     * @type {string}
     * @memberof StripeReversalSyncResults
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeReversalSyncResults
     */
    verificationMessage?: string;
}

export function StripeReversalSyncResultsFromJSON(json: any): StripeReversalSyncResults {
    return StripeReversalSyncResultsFromJSONTyped(json, false);
}

export function StripeReversalSyncResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeReversalSyncResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(StripeFieldVerificationFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'verificationMessage': !exists(json, 'verificationMessage') ? undefined : json['verificationMessage'],
    };
}

export function StripeReversalSyncResultsToJSON(value?: StripeReversalSyncResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(StripeFieldVerificationToJSON)),
        'id': value.id,
        'verificationMessage': value.verificationMessage,
    };
}

