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
 * @interface LineItemModel
 */
export interface LineItemModel {
    /**
     * 
     * @type {string}
     * @memberof LineItemModel
     */
    additionalDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof LineItemModel
     */
    feeAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof LineItemModel
     */
    feeDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof LineItemModel
     */
    lineItemOwner?: LineItemModelLineItemOwnerEnum;
    /**
     * 
     * @type {string}
     * @memberof LineItemModel
     */
    lineItemType?: LineItemModelLineItemTypeEnum;
}

export function LineItemModelFromJSON(json: any): LineItemModel {
    return LineItemModelFromJSONTyped(json, false);
}

export function LineItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalDescription': !exists(json, 'additionalDescription') ? undefined : json['additionalDescription'],
        'feeAmount': !exists(json, 'feeAmount') ? undefined : json['feeAmount'],
        'feeDescription': !exists(json, 'feeDescription') ? undefined : json['feeDescription'],
        'lineItemOwner': !exists(json, 'lineItemOwner') ? undefined : json['lineItemOwner'],
        'lineItemType': !exists(json, 'lineItemType') ? undefined : json['lineItemType'],
    };
}

export function LineItemModelToJSON(value?: LineItemModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalDescription': value.additionalDescription,
        'feeAmount': value.feeAmount,
        'feeDescription': value.feeDescription,
        'lineItemOwner': value.lineItemOwner,
        'lineItemType': value.lineItemType,
    };
}

/**
* @export
* @enum {string}
*/
export enum LineItemModelLineItemOwnerEnum {
    COURT = 'COURT',
    LAWFIRM = 'LAWFIRM',
    OTR = 'OTR'
}
/**
* @export
* @enum {string}
*/
export enum LineItemModelLineItemTypeEnum {
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


