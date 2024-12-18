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
 * @interface RefundLawfirmFeeRequest
 */
export interface RefundLawfirmFeeRequest {
    /**
     * 
     * @type {number}
     * @memberof RefundLawfirmFeeRequest
     */
    otrRefundAmount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RefundLawfirmFeeRequest
     */
    overrideRefundOwner?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RefundLawfirmFeeRequest
     */
    refundAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof RefundLawfirmFeeRequest
     */
    refundNote?: string;
    /**
     * 
     * @type {string}
     * @memberof RefundLawfirmFeeRequest
     */
    refundReason?: RefundLawfirmFeeRequestRefundReasonEnum;
    /**
     * 
     * @type {number}
     * @memberof RefundLawfirmFeeRequest
     */
    stripeRefundAmount?: number;
}

export function RefundLawfirmFeeRequestFromJSON(json: any): RefundLawfirmFeeRequest {
    return RefundLawfirmFeeRequestFromJSONTyped(json, false);
}

export function RefundLawfirmFeeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundLawfirmFeeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'otrRefundAmount': !exists(json, 'otrRefundAmount') ? undefined : json['otrRefundAmount'],
        'overrideRefundOwner': !exists(json, 'overrideRefundOwner') ? undefined : json['overrideRefundOwner'],
        'refundAmount': !exists(json, 'refundAmount') ? undefined : json['refundAmount'],
        'refundNote': !exists(json, 'refundNote') ? undefined : json['refundNote'],
        'refundReason': !exists(json, 'refundReason') ? undefined : json['refundReason'],
        'stripeRefundAmount': !exists(json, 'stripeRefundAmount') ? undefined : json['stripeRefundAmount'],
    };
}

export function RefundLawfirmFeeRequestToJSON(value?: RefundLawfirmFeeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'otrRefundAmount': value.otrRefundAmount,
        'overrideRefundOwner': value.overrideRefundOwner,
        'refundAmount': value.refundAmount,
        'refundNote': value.refundNote,
        'refundReason': value.refundReason,
        'stripeRefundAmount': value.stripeRefundAmount,
    };
}

/**
* @export
* @enum {string}
*/
export enum RefundLawfirmFeeRequestRefundReasonEnum {
    CANCELATION = 'CANCELATION',
    CLIENTDISPUTEDCHARGE = 'CLIENT_DISPUTED_CHARGE',
    DUPLICATECASE = 'DUPLICATE_CASE',
    LOSTCASE = 'LOST_CASE',
    OTHER = 'OTHER'
}


