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
export interface CaseModelReq {
    "actions"?: Array<models.CaseActionDomain>;
    "adjustedFineAmount"?: number;
    "adjustedPointCount"?: number;
    "bookingConfirmedDate"?: models.TimestampReq;
    "cancelationDetails"?: models.CancelationDetailsReq;
    "cancelationReason"?: string;
    "cancellationExpiryDate"?: models.TimestampReq;
    "cardInput"?: models.PaymentCardInput;
    "caseCancellationDate"?: models.TimestampReq;
    "caseCreationDate"?: models.TimestampReq;
    "caseId"?: string;
    "caseResolutionDate"?: models.TimestampReq;
    "caseStatus"?: CaseModelReq.CaseStatusEnum;
    "caseStatusCategory"?: CaseModelReq.CaseStatusCategoryEnum;
    "caseStatusDomain"?: models.CaseStatusDomain;
    "citation"?: models.CitationModelReq;
    "courtAppointmentDate"?: models.TimestampReq;
    "hasLeftLawyerReview"?: boolean;
    "isPointSystemState"?: boolean;
    "lawfirmCaseDecision"?: models.LawfirmCaseModelReq;
    "lawfirmCodeApplied"?: boolean;
    "letterOfEngagement"?: models.LetterOfEngagement;
    "maxPenalties"?: Array<models.CaseViolationPenalty>;
    "paymentPlanTypeModel"?: models.PaymentPlanTypeModelReq;
    "referralCode"?: string;
    "refundEligibility"?: CaseModelReq.RefundEligibilityEnum;
    "resolutionSummary"?: string;
    "subscriptionDiscountEligibility"?: models.SubscriptionDiscountEligibilityReq;
    "uiRefundMsg"?: string;
    "user"?: models.UserDomainReq;
    "userId"?: number;
}
export declare namespace CaseModelReq {
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
        NOREFUND
    }
}
