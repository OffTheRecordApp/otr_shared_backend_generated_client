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
export interface CaseDomainReq {
    "actions"?: Array<models.CaseActionDomainReq>;
    "adjustedFineAmount"?: number;
    "adjustedPointCount"?: number;
    "bookingConfirmedDate"?: models.TimestampReq;
    "cancelationDetails"?: models.CancelationDetailsReq;
    "cancelationReason"?: string;
    "cancellationExpiryDate"?: models.TimestampReq;
    "caseCancellationDate"?: models.TimestampReq;
    "caseCreationDate"?: models.TimestampReq;
    "caseId"?: string;
    "caseResolutionDate"?: models.TimestampReq;
    "caseStatus"?: CaseDomainReq.CaseStatusEnum;
    "caseStatusCategory"?: CaseDomainReq.CaseStatusCategoryEnum;
    "caseStatusDomain"?: models.CaseStatusDomain;
    "citation"?: models.CitationDomainReq;
    "courtAppointmentDate"?: models.TimestampReq;
    "hasLeftLawyerReview"?: boolean;
    "isPointSystemState"?: boolean;
    "lawfirmCaseDecision"?: models.LawfirmCaseDomainReq;
    "refundEligibility"?: CaseDomainReq.RefundEligibilityEnum;
    "resolutionSummary"?: string;
    "uiRefundMsg"?: string;
    "user"?: models.UserDomainReq;
    "userId"?: number;
}
export declare namespace CaseDomainReq {
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
    enum CaseStatusCategoryEnum {
        ACTIVE,
        CANCELLED,
        RESOLVED,
        UNCONFIRMED
    }
    enum RefundEligibilityEnum {
        FULLREFUND,
        NOREFUND,
        PARTIALREFUND
    }
}
