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
import { CancelationDetails, CaseActionDomain, CaseStatusDomain, CaseViolationPenalty, CitationModel, LawfirmCaseModel, LetterOfEngagement, PaymentCardInput, PaymentPlanTypeModel, SubscriptionDiscountEligibility, Timestamp, UserDomain } from './';
/**
 *
 * @export
 * @interface CaseModel
 */
export interface CaseModel {
    /**
     *
     * @type {Array<CaseActionDomain>}
     * @memberof CaseModel
     */
    actions?: Array<CaseActionDomain>;
    /**
     *
     * @type {number}
     * @memberof CaseModel
     */
    adjustedFineAmount?: number;
    /**
     *
     * @type {number}
     * @memberof CaseModel
     */
    adjustedPointCount?: number;
    /**
     *
     * @type {Timestamp}
     * @memberof CaseModel
     */
    bookingConfirmedDate?: Timestamp;
    /**
     *
     * @type {CancelationDetails}
     * @memberof CaseModel
     */
    cancelationDetails?: CancelationDetails;
    /**
     *
     * @type {string}
     * @memberof CaseModel
     */
    cancelationReason?: string;
    /**
     *
     * @type {Timestamp}
     * @memberof CaseModel
     */
    cancellationExpiryDate?: Timestamp;
    /**
     *
     * @type {PaymentCardInput}
     * @memberof CaseModel
     */
    cardInput?: PaymentCardInput;
    /**
     *
     * @type {Timestamp}
     * @memberof CaseModel
     */
    caseCancellationDate?: Timestamp;
    /**
     *
     * @type {Timestamp}
     * @memberof CaseModel
     */
    caseCreationDate?: Timestamp;
    /**
     *
     * @type {string}
     * @memberof CaseModel
     */
    caseId?: string;
    /**
     *
     * @type {Timestamp}
     * @memberof CaseModel
     */
    caseResolutionDate?: Timestamp;
    /**
     *
     * @type {string}
     * @memberof CaseModel
     */
    caseStatus?: CaseModelCaseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof CaseModel
     */
    caseStatusCategory?: CaseModelCaseStatusCategoryEnum;
    /**
     *
     * @type {CaseStatusDomain}
     * @memberof CaseModel
     */
    caseStatusDomain?: CaseStatusDomain;
    /**
     *
     * @type {CitationModel}
     * @memberof CaseModel
     */
    citation?: CitationModel;
    /**
     *
     * @type {Timestamp}
     * @memberof CaseModel
     */
    courtAppointmentDate?: Timestamp;
    /**
     *
     * @type {boolean}
     * @memberof CaseModel
     */
    hasLeftLawyerReview?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CaseModel
     */
    isPointSystemState?: boolean;
    /**
     *
     * @type {LawfirmCaseModel}
     * @memberof CaseModel
     */
    lawfirmCaseDecision?: LawfirmCaseModel;
    /**
     *
     * @type {boolean}
     * @memberof CaseModel
     */
    lawfirmCodeApplied?: boolean;
    /**
     *
     * @type {LetterOfEngagement}
     * @memberof CaseModel
     */
    letterOfEngagement?: LetterOfEngagement;
    /**
     *
     * @type {Array<CaseViolationPenalty>}
     * @memberof CaseModel
     */
    maxPenalties?: Array<CaseViolationPenalty>;
    /**
     *
     * @type {PaymentPlanTypeModel}
     * @memberof CaseModel
     */
    paymentPlanTypeModel?: PaymentPlanTypeModel;
    /**
     *
     * @type {string}
     * @memberof CaseModel
     */
    referralCode?: string;
    /**
     *
     * @type {string}
     * @memberof CaseModel
     */
    refundEligibility?: CaseModelRefundEligibilityEnum;
    /**
     *
     * @type {string}
     * @memberof CaseModel
     */
    resolutionSummary?: string;
    /**
     *
     * @type {SubscriptionDiscountEligibility}
     * @memberof CaseModel
     */
    subscriptionDiscountEligibility?: SubscriptionDiscountEligibility;
    /**
     *
     * @type {string}
     * @memberof CaseModel
     */
    uiRefundMsg?: string;
    /**
     *
     * @type {UserDomain}
     * @memberof CaseModel
     */
    user?: UserDomain;
    /**
     *
     * @type {number}
     * @memberof CaseModel
     */
    userId?: number;
}
export declare function CaseModelFromJSON(json: any): CaseModel;
export declare function CaseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseModel;
export declare function CaseModelToJSON(value?: CaseModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CaseModelCaseStatusEnum {
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
export declare enum CaseModelCaseStatusCategoryEnum {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    RESOLVED = "RESOLVED",
    UNCONFIRMED = "UNCONFIRMED"
}
/**
* @export
* @enum {string}
*/
export declare enum CaseModelRefundEligibilityEnum {
    FULLREFUND = "FULL_REFUND",
    NOREFUND = "NO_REFUND"
}
