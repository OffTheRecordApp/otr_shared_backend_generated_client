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
 * @interface LineItem
 */
export interface LineItem {
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    additionalDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    feeAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    lineItem?: LineItemLineItemEnum;
}

export function LineItemFromJSON(json: any): LineItem {
    return LineItemFromJSONTyped(json, false);
}

export function LineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalDescription': !exists(json, 'additionalDescription') ? undefined : json['additionalDescription'],
        'feeAmount': !exists(json, 'feeAmount') ? undefined : json['feeAmount'],
        'lineItem': !exists(json, 'lineItem') ? undefined : json['lineItem'],
    };
}

export function LineItemToJSON(value?: LineItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalDescription': value.additionalDescription,
        'feeAmount': value.feeAmount,
        'lineItem': value.lineItem,
    };
}

/**
* @export
* @enum {string}
*/
export enum LineItemLineItemEnum {
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


