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

import * as models from './models';

export interface LineItem {
    "additionalDescription"?: string;
    "feeAmount"?: number;
    "lineItem"?: LineItem.LineItemEnum;
}

export namespace LineItem {
    export enum LineItemEnum {
        ACCIDENTFEE = <any> 'ACCIDENT_FEE',
        BASELEGALFEE = <any> 'BASE_LEGAL_FEE',
        BONDFEE = <any> 'BOND_FEE',
        BOOKINGFEE = <any> 'BOOKING_FEE',
        CDLFEE = <any> 'CDL_FEE',
        COURTFEE = <any> 'COURT_FEE',
        DISPUTEFEE = <any> 'DISPUTE_FEE',
        FINEPAYMENT = <any> 'FINE_PAYMENT',
        FTAFEE = <any> 'FTA_FEE',
        INITIALSUBSCRIPTIONFEE = <any> 'INITIAL_SUBSCRIPTION_FEE',
        LATEFEE = <any> 'LATE_FEE',
        MBGREFUND = <any> 'MBG_REFUND',
        MVSFEE = <any> 'MVS_FEE',
        OTHER = <any> 'OTHER',
        OTRCREDIT = <any> 'OTR_CREDIT',
        OTRSUBSCRIPTIONCREDIT = <any> 'OTR_SUBSCRIPTION_CREDIT',
        PAYMENTPLANSERVICEFEE = <any> 'PAYMENT_PLAN_SERVICE_FEE',
        WARRANTFEE = <any> 'WARRANT_FEE'
    }
}