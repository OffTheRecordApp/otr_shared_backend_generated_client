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
import { TimestampRes } from './timestampRes';
export interface CaseLineItemDomainRes {
    additionalDescription?: string;
    chargeDescription?: string;
    clientTotalCost?: number;
    creationDate?: TimestampRes;
    feeInCents?: number;
    lawfirmAssumedCost?: number;
    lawfirmCaseFees?: number;
    lawfirmCaseId?: number;
    lawfirmEarningsForCase?: number;
    lawfirmReferralCodeAdjustmentInCents?: number;
    lineItemId?: string;
    lineItemOwner?: CaseLineItemDomainRes.LineItemOwnerEnum;
    lineItemType?: CaseLineItemDomainRes.LineItemTypeEnum;
    otrEarnings?: number;
    otrMarketingFeeActual?: number;
    otrMarketingFeeChargedToLawfirm?: number;
    otrReferralCodeAdjustmentInCents?: number;
    paymentProcessingFeeActual?: number;
    paymentProcessingFeeChargedToLawfirm?: number;
    platformFee?: number;
}
export declare namespace CaseLineItemDomainRes {
    type LineItemOwnerEnum = 'LAWFIRM' | 'OTR';
    const LineItemOwnerEnum: {
        Lawfirm: LineItemOwnerEnum;
        Otr: LineItemOwnerEnum;
    };
    type LineItemTypeEnum = 'ACCIDENT_FEE' | 'BASE_LEGAL_FEE' | 'BOND_FEE' | 'BOOKING_FEE' | 'CDL_FEE' | 'DISPUTE_FEE' | 'FINE_PAYMENT' | 'FTA_FEE' | 'INITIAL_SUBSCRIPTION_FEE' | 'LATE_FEE' | 'MBG_REFUND' | 'MVS_FEE' | 'OTHER' | 'OTR_CREDIT' | 'PAYMENT_PLAN_SERVICE_FEE' | 'WARRANT_FEE';
    const LineItemTypeEnum: {
        AccidentFee: LineItemTypeEnum;
        BaseLegalFee: LineItemTypeEnum;
        BondFee: LineItemTypeEnum;
        BookingFee: LineItemTypeEnum;
        CdlFee: LineItemTypeEnum;
        DisputeFee: LineItemTypeEnum;
        FinePayment: LineItemTypeEnum;
        FtaFee: LineItemTypeEnum;
        InitialSubscriptionFee: LineItemTypeEnum;
        LateFee: LineItemTypeEnum;
        MbgRefund: LineItemTypeEnum;
        MvsFee: LineItemTypeEnum;
        Other: LineItemTypeEnum;
        OtrCredit: LineItemTypeEnum;
        PaymentPlanServiceFee: LineItemTypeEnum;
        WarrantFee: LineItemTypeEnum;
    };
}