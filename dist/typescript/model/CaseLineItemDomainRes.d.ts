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
export interface CaseLineItemDomainRes {
    "additionalDescription"?: string;
    "chargeDescription"?: string;
    "clientTotalCost"?: number;
    "creationDate"?: models.TimestampRes;
    "feeInCents"?: number;
    "lawfirmAssumedCost"?: number;
    "lawfirmCaseFees"?: number;
    "lawfirmCaseId"?: number;
    "lawfirmEarningsForCase"?: number;
    "lawfirmReferralCodeAdjustmentInCents"?: number;
    "lineItemId"?: string;
    "lineItemOwner"?: CaseLineItemDomainRes.LineItemOwnerEnum;
    "lineItemType"?: CaseLineItemDomainRes.LineItemTypeEnum;
    "otrEarnings"?: number;
    "otrMarketingFeeActual"?: number;
    "otrMarketingFeeChargedToLawfirm"?: number;
    "otrReferralCodeAdjustmentInCents"?: number;
    "paymentProcessingFeeActual"?: number;
    "paymentProcessingFeeChargedToLawfirm"?: number;
    "platformFee"?: number;
}
export declare namespace CaseLineItemDomainRes {
    enum LineItemOwnerEnum {
        COURT,
        LAWFIRM,
        OTR
    }
    enum LineItemTypeEnum {
        ACCIDENTFEE,
        BASELEGALFEE,
        BONDFEE,
        BOOKINGFEE,
        CDLFEE,
        COURTFEE,
        DISPUTEFEE,
        FINEPAYMENT,
        FTAFEE,
        INITIALSUBSCRIPTIONFEE,
        LATEFEE,
        MBGREFUND,
        MVSFEE,
        OTHER,
        OTRCREDIT,
        OTRSUBSCRIPTIONCREDIT,
        PAYMENTPLANSERVICEFEE,
        WARRANTFEE
    }
}
