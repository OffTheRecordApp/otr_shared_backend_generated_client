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
export interface LawfirmCaseModelReq {
    "caseArchivedByLawfirm"?: boolean;
    "caseDecisionStatus"?: LawfirmCaseModelReq.CaseDecisionStatusEnum;
    "clientDeclineTicket"?: models.FreshDeskTicketReq;
    "declineReason"?: string;
    "isMatchInternal"?: boolean;
    "isSelected"?: boolean;
    "lawfirmCaseId"?: number;
    "lawfirmDecisionDateUtc"?: string;
    "lawfirmDeclineTicket"?: models.FreshDeskTicketReq;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPrimaryEmail"?: string;
    "lawfirmReceiptDateUtc"?: models.TimestampReq;
    "lawyerCounterOfferTicketId"?: number;
    "matchExpirationDateUtc"?: string;
    "obfuscatedPictureUrl"?: string;
    "profilePictureUrl"?: string;
    "refundOwner"?: LawfirmCaseModelReq.RefundOwnerEnum;
}
export declare namespace LawfirmCaseModelReq {
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
