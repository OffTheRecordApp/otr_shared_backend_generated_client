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

export interface CasePaymentDomain {
    "baseFeeInCents"?: number;
    "casePaymentId"?: string;
    "chargeAttempts"?: number;
    "clientTotalCost"?: number;
    "creationDateUTC"?: models.Timestamp;
    "dueDate"?: string;
    "hasPredictedOrAdjustedFee"?: boolean;
    "isLocked"?: boolean;
    "isPaymentActive"?: boolean;
    "lastAttemptDate"?: string;
    "lastUpdatedDateUTC"?: models.Timestamp;
    "lawfirmAssumedCost"?: number;
    "lawfirmCaseId"?: number;
    "lawfirmEarnings"?: number;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmReferralCodeAdjustmentInCents"?: number;
    "mostRecentChargeError"?: string;
    "otrCustomerCharges"?: number;
    "otrEarnings"?: number;
    "otrMarketingFeeInCents"?: number;
    "otrReferralCodeAdjustmentInCents"?: number;
    "paymentProcessingFeeActual"?: number;
    "paymentProcessingFeeChargedToLawfirm"?: number;
    "recipient"?: CasePaymentDomain.RecipientEnum;
    "stripeCharge"?: models.StripeChargeDomain;
    "supportTickets"?: Array<models.FreshdeskTicketReferenceDomain>;
    "transactionMethod"?: CasePaymentDomain.TransactionMethodEnum;
    "updatedDueDate"?: string;
}

export namespace CasePaymentDomain {
    export enum RecipientEnum {
        COURT = <any> 'COURT',
        LAWFIRM = <any> 'LAWFIRM',
        OTR = <any> 'OTR'
    }
    export enum TransactionMethodEnum {
        CASH = <any> 'CASH',
        CHECK = <any> 'CHECK',
        DESTINATIONCHARGETRANSFER = <any> 'DESTINATION_CHARGE_TRANSFER',
        LOBCHECK = <any> 'LOB_CHECK',
        PAYPAL = <any> 'PAYPAL',
        STRIPEAPPLICATIONFEE = <any> 'STRIPE_APPLICATION_FEE',
        STRIPECHARGE = <any> 'STRIPE_CHARGE',
        STRIPECONNECTDEBIT = <any> 'STRIPE_CONNECT_DEBIT',
        STRIPETRANSFER = <any> 'STRIPE_TRANSFER',
        UNKNOWN = <any> 'UNKNOWN',
        VENMO = <any> 'VENMO',
        WIRETRANSFER = <any> 'WIRE_TRANSFER',
        ZELLE = <any> 'ZELLE'
    }
}
