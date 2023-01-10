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
export interface LawfirmCaseDomain {
    "caseDecisionStatus"?: LawfirmCaseDomain.CaseDecisionStatusEnum;
    "clientDeclineTicket"?: models.FreshDeskTicket;
    "declineReason"?: string;
    "lawfirmCaseId"?: number;
    "lawfirmDecisionDateUtc"?: models.Timestamp;
    "lawfirmDeclineTicket"?: models.FreshDeskTicket;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPrimaryEmail"?: string;
    "lawfirmReceiptDateUtc"?: models.Timestamp;
    "obfuscatedPictureUrl"?: string;
    "profilePictureUrl"?: string;
    "refundOwner"?: LawfirmCaseDomain.RefundOwnerEnum;
}
export declare namespace LawfirmCaseDomain {
    enum CaseDecisionStatusEnum {
        ACCEPTED,
        CREATED,
        DECLINED,
        EXPIRED,
        PENDING,
        REMATCHED,
        REMATCHEDREFERRAL
    }
    enum RefundOwnerEnum {
        LAWFIRM,
        NONE,
        OTR
    }
}
