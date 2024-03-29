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
export declare namespace StripeDisputeDomain {
    enum CaseStatusEnum {
        AMENDEDDOWNWITHINCLASS,
        AMENDEDFULLFINE,
        AMENDEDINCREASEDFINE,
        AMENDEDNOFINE,
        AMENDEDREDUCEDFINE,
        AMENDEDTOINFRACTION,
        AMENDEDTONMV,
        CANCELLEDATTORNEYATFAULT,
        CANCELLEDBYLAWFIRM,
        CANCELLEDBYUSER,
        CANCELLEDDUPLICATE,
        CANCELLEDNMV,
        CANCELLEDNONPAYMENT,
        CANCELLEDNOLAWFIRM,
        CANCELLEDOVERDUE,
        CANCELLEDTOOSHORTNOTICE,
        CASEINPROGRESS,
        CLIENTCONFIRMED,
        CLIENTCONFIRMEDUNPAID,
        CLIENTFIREDLAWFIRM,
        CLIENTFORCEDLOSS,
        CLIENTPAIDFINE,
        CLIENTUNRESPONSIVE,
        DEFERRED,
        DISMISSED,
        DIVERSION,
        FEESDISPUTED,
        FINEREDUCTIONONLY,
        LAWFIRMWITHDRAWN,
        LOST,
        NOLAWFIRMAVAILABLE,
        POINTREDUCTION,
        REFUSEDBYLAWFIRM,
        RESOLVEDNONPAYMENT,
        STALE,
        TRAFFICSCHOOL,
        UNCONFIRMED
    }
    enum PaymentRecipientEnum {
        COURT,
        LAWFIRM,
        OTR
    }
}
