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
 * @interface CasePaymentBreakdownItemModel
 */
export interface CasePaymentBreakdownItemModel {
    /**
     * 
     * @type {number}
     * @memberof CasePaymentBreakdownItemModel
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof CasePaymentBreakdownItemModel
     */
    friendlyTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof CasePaymentBreakdownItemModel
     */
    type?: CasePaymentBreakdownItemModelTypeEnum;
}

export function CasePaymentBreakdownItemModelFromJSON(json: any): CasePaymentBreakdownItemModel {
    return CasePaymentBreakdownItemModelFromJSONTyped(json, false);
}

export function CasePaymentBreakdownItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CasePaymentBreakdownItemModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'friendlyTitle': !exists(json, 'friendlyTitle') ? undefined : json['friendlyTitle'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CasePaymentBreakdownItemModelToJSON(value?: CasePaymentBreakdownItemModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'friendlyTitle': value.friendlyTitle,
        'type': value.type,
    };
}

/**
* @export
* @enum {string}
*/
export enum CasePaymentBreakdownItemModelTypeEnum {
    ACCIDENTFEE = 'ACCIDENT_FEE',
    BASELEGALFEE = 'BASE_LEGAL_FEE',
    BONDFEE = 'BOND_FEE',
    BOOKINGFEE = 'BOOKING_FEE',
    CDLFEE = 'CDL_FEE',
    COURTFEE = 'COURT_FEE',
    DISPUTEFEE = 'DISPUTE_FEE',
    FINEPAYMENT = 'FINE_PAYMENT',
    FTAFEE = 'FTA_FEE',
    INITIALSUBSCRIPTIONFEE = 'INITIAL_SUBSCRIPTION_FEE',
    LATEFEE = 'LATE_FEE',
    MBGREFUND = 'MBG_REFUND',
    MVSFEE = 'MVS_FEE',
    OTHER = 'OTHER',
    OTRCREDIT = 'OTR_CREDIT',
    OTRSUBSCRIPTIONCREDIT = 'OTR_SUBSCRIPTION_CREDIT',
    PAYMENTPLANSERVICEFEE = 'PAYMENT_PLAN_SERVICE_FEE',
    WARRANTFEE = 'WARRANT_FEE'
}


