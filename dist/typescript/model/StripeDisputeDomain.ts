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

export interface StripeDisputeDomain {
    "amountDisputed"?: number;
    "cardBrand"?: string;
    "cardFunding"?: string;
    "caseId"?: string;
    "caseStatus"?: StripeDisputeDomain.CaseStatusEnum;
    "clientTicket"?: models.FreshDeskTicket;
    "clientTicketId"?: number;
    "currencyCode"?: string;
    "disputeDateUtc"?: models.Timestamp;
    "disputeFee"?: number;
    "evidenceSubmittedDateUtc"?: models.Timestamp;
    "isAccountEnabled"?: boolean;
    "isTransferReversed"?: boolean;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmTicket"?: models.FreshDeskTicket;
    "lawfirmTicketId"?: number;
    "paymentRecipient"?: StripeDisputeDomain.PaymentRecipientEnum;
    "reason"?: string;
    "responseDueByDateUtc"?: models.Timestamp;
    "status"?: string;
    "stripeChargeId"?: string;
    "stripeCustomerId"?: string;
    "stripeDisputeId"?: string;
    "userFullName"?: string;
    "userId"?: number;
}

export namespace StripeDisputeDomain {
    export enum CaseStatusEnum {
        AMENDEDDOWNWITHINCLASS = <any> 'AMENDED_DOWN_WITHIN_CLASS',
        AMENDEDFULLFINE = <any> 'AMENDED_FULL_FINE',
        AMENDEDINCREASEDFINE = <any> 'AMENDED_INCREASED_FINE',
        AMENDEDNOFINE = <any> 'AMENDED_NO_FINE',
        AMENDEDREDUCEDFINE = <any> 'AMENDED_REDUCED_FINE',
        AMENDEDTOINFRACTION = <any> 'AMENDED_TO_INFRACTION',
        AMENDEDTONMV = <any> 'AMENDED_TO_NMV',
        CANCELLEDATTORNEYATFAULT = <any> 'CANCELLED_ATTORNEY_AT_FAULT',
        CANCELLEDBYLAWFIRM = <any> 'CANCELLED_BY_LAWFIRM',
        CANCELLEDBYUSER = <any> 'CANCELLED_BY_USER',
        CANCELLEDDUPLICATE = <any> 'CANCELLED_DUPLICATE',
        CANCELLEDNMV = <any> 'CANCELLED_NMV',
        CANCELLEDNONPAYMENT = <any> 'CANCELLED_NON_PAYMENT',
        CANCELLEDNOLAWFIRM = <any> 'CANCELLED_NO_LAWFIRM',
        CANCELLEDOVERDUE = <any> 'CANCELLED_OVERDUE',
        CANCELLEDTOOSHORTNOTICE = <any> 'CANCELLED_TOO_SHORT_NOTICE',
        CASEINPROGRESS = <any> 'CASE_IN_PROGRESS',
        CLIENTCONFIRMED = <any> 'CLIENT_CONFIRMED',
        CLIENTCONFIRMEDUNPAID = <any> 'CLIENT_CONFIRMED_UNPAID',
        CLIENTFIREDLAWFIRM = <any> 'CLIENT_FIRED_LAWFIRM',
        CLIENTFORCEDLOSS = <any> 'CLIENT_FORCED_LOSS',
        CLIENTPAIDFINE = <any> 'CLIENT_PAID_FINE',
        CLIENTUNRESPONSIVE = <any> 'CLIENT_UNRESPONSIVE',
        DEFERRED = <any> 'DEFERRED',
        DISMISSED = <any> 'DISMISSED',
        DIVERSION = <any> 'DIVERSION',
        FEESDISPUTED = <any> 'FEES_DISPUTED',
        FINEREDUCTIONONLY = <any> 'FINE_REDUCTION_ONLY',
        LAWFIRMWITHDRAWN = <any> 'LAWFIRM_WITHDRAWN',
        LOST = <any> 'LOST',
        NOLAWFIRMAVAILABLE = <any> 'NO_LAWFIRM_AVAILABLE',
        POINTREDUCTION = <any> 'POINT_REDUCTION',
        REFUSEDBYLAWFIRM = <any> 'REFUSED_BY_LAWFIRM',
        RESOLVEDNONPAYMENT = <any> 'RESOLVED_NON_PAYMENT',
        STALE = <any> 'STALE',
        TRAFFICSCHOOL = <any> 'TRAFFIC_SCHOOL',
        UNCONFIRMED = <any> 'UNCONFIRMED'
    }
    export enum PaymentRecipientEnum {
        COURT = <any> 'COURT',
        LAWFIRM = <any> 'LAWFIRM',
        OTR = <any> 'OTR'
    }
}
