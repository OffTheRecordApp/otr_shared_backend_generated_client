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

export interface LawfirmCaseDomainReq {
    "caseDecisionStatus"?: LawfirmCaseDomainReq.CaseDecisionStatusEnum;
    "clientDeclineTicket"?: models.FreshDeskTicketReq;
    "declineReason"?: string;
    "lawfirmCaseId"?: number;
    "lawfirmDecisionDateUtc"?: models.TimestampReq;
    "lawfirmDeclineTicket"?: models.FreshDeskTicketReq;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPrimaryEmail"?: string;
    "lawfirmReceiptDateUtc"?: models.TimestampReq;
    "obfuscatedPictureUrl"?: string;
    "profilePictureUrl"?: string;
    "refundOwner"?: LawfirmCaseDomainReq.RefundOwnerEnum;
}

export namespace LawfirmCaseDomainReq {
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
