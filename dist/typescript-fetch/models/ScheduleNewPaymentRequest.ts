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
 * @interface ScheduleNewPaymentRequest
 */
export interface ScheduleNewPaymentRequest {
    /**
     * 
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    baseFeeInCents?: number;
    /**
     * 
     * @type {Date}
     * @memberof ScheduleNewPaymentRequest
     */
    chargeRunAtDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ScheduleNewPaymentRequest
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    lawfirmReferralCodeAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    otrCustomerChargeInCents?: number;
    /**
     * 
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    otrMarketingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    otrReferralCodeAdjustment?: number;
    /**
     * 
     * @type {string}
     * @memberof ScheduleNewPaymentRequest
     */
    recipient?: ScheduleNewPaymentRequestRecipientEnum;
    /**
     * 
     * @type {string}
     * @memberof ScheduleNewPaymentRequest
     */
    transactionMethod?: ScheduleNewPaymentRequestTransactionMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof ScheduleNewPaymentRequest
     */
    transactionReference?: string;
}

export function ScheduleNewPaymentRequestFromJSON(json: any): ScheduleNewPaymentRequest {
    return ScheduleNewPaymentRequestFromJSONTyped(json, false);
}

export function ScheduleNewPaymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleNewPaymentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseFeeInCents': !exists(json, 'baseFeeInCents') ? undefined : json['baseFeeInCents'],
        'chargeRunAtDate': !exists(json, 'chargeRunAtDate') ? undefined : (new Date(json['chargeRunAtDate'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'lawfirmReferralCodeAdjustment': !exists(json, 'lawfirmReferralCodeAdjustment') ? undefined : json['lawfirmReferralCodeAdjustment'],
        'otrCustomerChargeInCents': !exists(json, 'otrCustomerChargeInCents') ? undefined : json['otrCustomerChargeInCents'],
        'otrMarketingFee': !exists(json, 'otrMarketingFee') ? undefined : json['otrMarketingFee'],
        'otrReferralCodeAdjustment': !exists(json, 'otrReferralCodeAdjustment') ? undefined : json['otrReferralCodeAdjustment'],
        'recipient': !exists(json, 'recipient') ? undefined : json['recipient'],
        'transactionMethod': !exists(json, 'transactionMethod') ? undefined : json['transactionMethod'],
        'transactionReference': !exists(json, 'transactionReference') ? undefined : json['transactionReference'],
    };
}

export function ScheduleNewPaymentRequestToJSON(value?: ScheduleNewPaymentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baseFeeInCents': value.baseFeeInCents,
        'chargeRunAtDate': value.chargeRunAtDate === undefined ? undefined : (value.chargeRunAtDate.toISOString()),
        'description': value.description,
        'lawfirmReferralCodeAdjustment': value.lawfirmReferralCodeAdjustment,
        'otrCustomerChargeInCents': value.otrCustomerChargeInCents,
        'otrMarketingFee': value.otrMarketingFee,
        'otrReferralCodeAdjustment': value.otrReferralCodeAdjustment,
        'recipient': value.recipient,
        'transactionMethod': value.transactionMethod,
        'transactionReference': value.transactionReference,
    };
}

/**
* @export
* @enum {string}
*/
export enum ScheduleNewPaymentRequestRecipientEnum {
    COURT = 'COURT',
    LAWFIRM = 'LAWFIRM',
    OTR = 'OTR'
}
/**
* @export
* @enum {string}
*/
export enum ScheduleNewPaymentRequestTransactionMethodEnum {
    CASH = 'CASH',
    CHECK = 'CHECK',
    DESTINATIONCHARGETRANSFER = 'DESTINATION_CHARGE_TRANSFER',
    LOBCHECK = 'LOB_CHECK',
    PAYPAL = 'PAYPAL',
    STRIPEAPPLICATIONFEE = 'STRIPE_APPLICATION_FEE',
    STRIPECHARGE = 'STRIPE_CHARGE',
    STRIPECONNECTDEBIT = 'STRIPE_CONNECT_DEBIT',
    STRIPETRANSFER = 'STRIPE_TRANSFER',
    UNKNOWN = 'UNKNOWN',
    VENMO = 'VENMO',
    WIRETRANSFER = 'WIRE_TRANSFER',
    ZELLE = 'ZELLE'
}


