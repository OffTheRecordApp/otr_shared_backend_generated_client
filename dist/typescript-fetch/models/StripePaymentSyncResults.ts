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
    StripePaymentRefundSyncResults,
    StripePaymentRefundSyncResultsFromJSON,
    StripePaymentRefundSyncResultsFromJSONTyped,
    StripePaymentRefundSyncResultsToJSON,
} from './';

/**
 * 
 * @export
 * @interface StripePaymentSyncResults
 */
export interface StripePaymentSyncResults {
    /**
     * 
     * @type {Array<StripeFieldVerification>}
     * @memberof StripePaymentSyncResults
     */
    fields?: Array<StripeFieldVerification>;
    /**
     * 
     * @type {string}
     * @memberof StripePaymentSyncResults
     */
    id?: string;
    /**
     * 
     * @type {Array<StripePaymentRefundSyncResults>}
     * @memberof StripePaymentSyncResults
     */
    paymentRefunds?: Array<StripePaymentRefundSyncResults>;
    /**
     * 
     * @type {string}
     * @memberof StripePaymentSyncResults
     */
    verificationMessage?: string;
}

export function StripePaymentSyncResultsFromJSON(json: any): StripePaymentSyncResults {
    return StripePaymentSyncResultsFromJSONTyped(json, false);
}

export function StripePaymentSyncResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripePaymentSyncResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(StripeFieldVerificationFromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'paymentRefunds': !exists(json, 'paymentRefunds') ? undefined : ((json['paymentRefunds'] as Array<any>).map(StripePaymentRefundSyncResultsFromJSON)),
        'verificationMessage': !exists(json, 'verificationMessage') ? undefined : json['verificationMessage'],
    };
}

export function StripePaymentSyncResultsToJSON(value?: StripePaymentSyncResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(StripeFieldVerificationToJSON)),
        'id': value.id,
        'paymentRefunds': value.paymentRefunds === undefined ? undefined : ((value.paymentRefunds as Array<any>).map(StripePaymentRefundSyncResultsToJSON)),
        'verificationMessage': value.verificationMessage,
    };
}

