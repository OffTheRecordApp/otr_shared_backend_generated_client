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
import { CancelationDetailsReq, CaseActionDomain, CaseStatusDomain, CaseViolationPenalty, CitationModelReq, LawfirmCaseModelReq, LetterOfEngagement, PaymentCardInput, PaymentPlanTypeModelReq, SubscriptionDiscountEligibilityReq, TimestampReq, UserDomainReq } from './';
/**
 *
 * @export
 * @interface CaseModelReq
 */
export interface CaseModelReq {
    /**
     *
     * @type {Array<CaseActionDomain>}
     * @memberof CaseModelReq
     */
    actions?: Array<CaseActionDomain>;
    /**
     *
     * @type {number}
     * @memberof CaseModelReq
     */
    adjustedFineAmount?: number;
    /**
     *
     * @type {number}
     * @memberof CaseModelReq
     */
    adjustedPointCount?: number;
    /**
     *
     * @type {TimestampReq}
     * @memberof CaseModelReq
     */
    bookingConfirmedDate?: TimestampReq;
    /**
     *
     * @type {CancelationDetailsReq}
     * @memberof CaseModelReq
     */
    cancelationDetails?: CancelationDetailsReq;
    /**
     *
     * @type {string}
     * @memberof CaseModelReq
     */
    cancelationReason?: string;
    /**
     *
     * @type {TimestampReq}
     * @memberof CaseModelReq
     */
    cancellationExpiryDate?: TimestampReq;
    /**
     *
     * @type {PaymentCardInput}
     * @memberof CaseModelReq
     */
    cardInput?: PaymentCardInput;
    /**
     *
     * @type {TimestampReq}
     * @memberof CaseModelReq
     */
    caseCancellationDate?: TimestampReq;
    /**
     *
     * @type {TimestampReq}
     * @memberof CaseModelReq
     */
    caseCreationDate?: TimestampReq;
    /**
     *
     * @type {string}
     * @memberof CaseModelReq
     */
    caseId?: string;
    /**
     *
     * @type {TimestampReq}
     * @memberof CaseModelReq
     */
    caseResolutionDate?: TimestampReq;
    /**
     *
     * @type {string}
     * @memberof CaseModelReq
     */
    caseStatus?: CaseModelReqCaseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof CaseModelReq
     */
    caseStatusCategory?: CaseModelReqCaseStatusCategoryEnum;
    /**
     *
     * @type {CaseStatusDomain}
     * @memberof CaseModelReq
     */
    caseStatusDomain?: CaseStatusDomain;
    /**
     *
     * @type {CitationModelReq}
     * @memberof CaseModelReq
     */
    citation?: CitationModelReq;
    /**
     *
     * @type {TimestampReq}
     * @memberof CaseModelReq
     */
    courtAppointmentDate?: TimestampReq;
    /**
     *
     * @type {boolean}
     * @memberof CaseModelReq
     */
    hasLeftLawyerReview?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CaseModelReq
     */
    isPointSystemState?: boolean;
    /**
     *
     * @type {LawfirmCaseModelReq}
     * @memberof CaseModelReq
     */
    lawfirmCaseDecision?: LawfirmCaseModelReq;
    /**
     *
     * @type {boolean}
     * @memberof CaseModelReq
     */
    lawfirmCodeApplied?: boolean;
    /**
     *
     * @type {LetterOfEngagement}
     * @memberof CaseModelReq
     */
    letterOfEngagement?: LetterOfEngagement;
    /**
     *
     * @type {Array<CaseViolationPenalty>}
     * @memberof CaseModelReq
     */
    maxPenalties?: Array<CaseViolationPenalty>;
    /**
     *
     * @type {PaymentPlanTypeModelReq}
     * @memberof CaseModelReq
     */
    paymentPlanTypeModel?: PaymentPlanTypeModelReq;
    /**
     *
     * @type {string}
     * @memberof CaseModelReq
     */
    referralCode?: string;
    /**
     *
     * @type {string}
     * @memberof CaseModelReq
     */
    refundEligibility?: CaseModelReqRefundEligibilityEnum;
    /**
     *
     * @type {string}
     * @memberof CaseModelReq
     */
    resolutionSummary?: string;
    /**
     *
     * @type {SubscriptionDiscountEligibilityReq}
     * @memberof CaseModelReq
     */
    subscriptionDiscountEligibility?: SubscriptionDiscountEligibilityReq;
    /**
     *
     * @type {string}
     * @memberof CaseModelReq
     */
    uiRefundMsg?: string;
    /**
     *
     * @type {UserDomainReq}
     * @memberof CaseModelReq
     */
    user?: UserDomainReq;
    /**
     *
     * @type {number}
     * @memberof CaseModelReq
     */
    userId?: number;
}
export declare function CaseModelReqFromJSON(json: any): CaseModelReq;
export declare function CaseModelReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseModelReq;
export declare function CaseModelReqToJSON(value?: CaseModelReq | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CaseModelReqCaseStatusEnum {
    AMENDEDDOWNWITHINCLASS = "AMENDED_DOWN_WITHIN_CLASS",
    AMENDEDFULLFINE = "AMENDED_FULL_FINE",
    AMENDEDINCREASEDFINE = "AMENDED_INCREASED_FINE",
    AMENDEDNOFINE = "AMENDED_NO_FINE",
    AMENDEDREDUCEDFINE = "AMENDED_REDUCED_FINE",
    AMENDEDTOINFRACTION = "AMENDED_TO_INFRACTION",
    AMENDEDTONMV = "AMENDED_TO_NMV",
    CANCELLEDATTORNEYATFAULT = "CANCELLED_ATTORNEY_AT_FAULT",
    CANCELLEDBYLAWFIRM = "CANCELLED_BY_LAWFIRM",
    CANCELLEDBYUSER = "CANCELLED_BY_USER",
    CANCELLEDDUPLICATE = "CANCELLED_DUPLICATE",
    CANCELLEDNMV = "CANCELLED_NMV",
    CANCELLEDNONPAYMENT = "CANCELLED_NON_PAYMENT",
    CANCELLEDNOLAWFIRM = "CANCELLED_NO_LAWFIRM",
    CANCELLEDOVERDUE = "CANCELLED_OVERDUE",
    CANCELLEDTOOSHORTNOTICE = "CANCELLED_TOO_SHORT_NOTICE",
    CASEINPROGRESS = "CASE_IN_PROGRESS",
    CLIENTCONFIRMED = "CLIENT_CONFIRMED",
    CLIENTCONFIRMEDUNPAID = "CLIENT_CONFIRMED_UNPAID",
    CLIENTFIREDLAWFIRM = "CLIENT_FIRED_LAWFIRM",
    CLIENTFORCEDLOSS = "CLIENT_FORCED_LOSS",
    CLIENTPAIDFINE = "CLIENT_PAID_FINE",
    CLIENTUNRESPONSIVE = "CLIENT_UNRESPONSIVE",
    DEFERRED = "DEFERRED",
    DISMISSED = "DISMISSED",
    DIVERSION = "DIVERSION",
    FEESDISPUTED = "FEES_DISPUTED",
    FINEREDUCTIONONLY = "FINE_REDUCTION_ONLY",
    LAWFIRMWITHDRAWN = "LAWFIRM_WITHDRAWN",
    LOST = "LOST",
    NOLAWFIRMAVAILABLE = "NO_LAWFIRM_AVAILABLE",
    POINTREDUCTION = "POINT_REDUCTION",
    REFUSEDBYLAWFIRM = "REFUSED_BY_LAWFIRM",
    RESOLVEDNONPAYMENT = "RESOLVED_NON_PAYMENT",
    STALE = "STALE",
    TRAFFICSCHOOL = "TRAFFIC_SCHOOL",
    UNCONFIRMED = "UNCONFIRMED"
}
/**
* @export
* @enum {string}
*/
export declare enum CaseModelReqCaseStatusCategoryEnum {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    RESOLVED = "RESOLVED",
    UNCONFIRMED = "UNCONFIRMED"
}
/**
* @export
* @enum {string}
*/
export declare enum CaseModelReqRefundEligibilityEnum {
    FULLREFUND = "FULL_REFUND",
    NOREFUND = "NO_REFUND"
}
