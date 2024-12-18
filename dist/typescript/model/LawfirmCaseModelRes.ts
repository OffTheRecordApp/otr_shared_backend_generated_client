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

export interface LawfirmCaseModelRes {
    "caseArchivedByLawfirm"?: boolean;
    "caseDecisionStatus"?: LawfirmCaseModelRes.CaseDecisionStatusEnum;
    "clientDeclineTicket"?: models.FreshDeskTicketRes;
    "declineReason"?: string;
    "isMatchInternal"?: boolean;
    "isSelected"?: boolean;
    "lawfirmCaseId"?: number;
    "lawfirmDecisionDateUtc"?: string;
    "lawfirmDeclineTicket"?: models.FreshDeskTicketRes;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPrimaryEmail"?: string;
    "lawfirmReceiptDateUtc"?: models.TimestampRes;
    "matchExpirationDateUtc"?: string;
    "obfuscatedPictureUrl"?: string;
    "profilePictureUrl"?: string;
    "refundOwner"?: LawfirmCaseModelRes.RefundOwnerEnum;
}

export namespace LawfirmCaseModelRes {
    export enum CaseDecisionStatusEnum {
        ACCEPTED = <any> 'ACCEPTED',
        CREATED = <any> 'CREATED',
        DECLINED = <any> 'DECLINED',
        EXPIRED = <any> 'EXPIRED',
        PENDING = <any> 'PENDING',
        REMATCHED = <any> 'REMATCHED',
        REMATCHEDREFERRAL = <any> 'REMATCHED_REFERRAL'
    }
    export enum RefundOwnerEnum {
        LAWFIRM = <any> 'LAWFIRM',
        NONE = <any> 'NONE',
        OTR = <any> 'OTR'
    }
}
