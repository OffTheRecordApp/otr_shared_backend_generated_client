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
import { FreshDeskTicketRes } from './freshDeskTicketRes';


export interface LawfirmCaseDomainRes { 
    caseDecisionStatus?: LawfirmCaseDomainRes.CaseDecisionStatusEnum;
    clientDeclineTicket?: FreshDeskTicketRes;
    declineReason?: string;
    lawfirmCaseId?: number;
    lawfirmDecisionDateUtc?: TimestampRes;
    lawfirmDeclineTicket?: FreshDeskTicketRes;
    lawfirmId?: number;
    lawfirmName?: string;
    lawfirmPrimaryEmail?: string;
    lawfirmReceiptDateUtc?: TimestampRes;
    matchExpirationDateUtc?: string;
    obfuscatedPictureUrl?: string;
    profilePictureUrl?: string;
    refundOwner?: LawfirmCaseDomainRes.RefundOwnerEnum;
}
export namespace LawfirmCaseDomainRes {
    export type CaseDecisionStatusEnum = 'ACCEPTED' | 'CREATED' | 'DECLINED' | 'EXPIRED' | 'PENDING' | 'REMATCHED' | 'REMATCHED_REFERRAL';
    export const CaseDecisionStatusEnum = {
        Accepted: 'ACCEPTED' as CaseDecisionStatusEnum,
        Created: 'CREATED' as CaseDecisionStatusEnum,
        Declined: 'DECLINED' as CaseDecisionStatusEnum,
        Expired: 'EXPIRED' as CaseDecisionStatusEnum,
        Pending: 'PENDING' as CaseDecisionStatusEnum,
        Rematched: 'REMATCHED' as CaseDecisionStatusEnum,
        RematchedReferral: 'REMATCHED_REFERRAL' as CaseDecisionStatusEnum
    };
    export type RefundOwnerEnum = 'LAWFIRM' | 'NONE' | 'OTR';
    export const RefundOwnerEnum = {
        Lawfirm: 'LAWFIRM' as RefundOwnerEnum,
        None: 'NONE' as RefundOwnerEnum,
        Otr: 'OTR' as RefundOwnerEnum
    };
}


