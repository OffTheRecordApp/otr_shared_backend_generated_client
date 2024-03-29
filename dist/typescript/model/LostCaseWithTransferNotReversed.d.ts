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
export interface LostCaseWithTransferNotReversed {
    "actualCustomerCost"?: number;
    "amountRefunded"?: number;
    "applicationFeeRefundAmount"?: number;
    "caseId"?: string;
    "caseResolutionDateUtc"?: models.TimestampRes;
    "firstName"?: string;
    "lastName"?: string;
    "lawfirmGrossRevenue"?: number;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "originalApplicationFee"?: number;
    "originalCustomerCost"?: number;
    "originalTransferAmount"?: number;
    "otrIncome"?: number;
    "platformFee"?: number;
    "refundOwner"?: LostCaseWithTransferNotReversed.RefundOwnerEnum;
    "stripeFee"?: number;
    "transferAmountRefunded"?: number;
    "userId"?: number;
}
export declare namespace LostCaseWithTransferNotReversed {
    enum RefundOwnerEnum {
        LAWFIRM,
        NONE,
        OTR
    }
}
