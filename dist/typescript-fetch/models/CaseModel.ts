/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    CancelationDetails,
    CancelationDetailsFromJSON,
    CancelationDetailsFromJSONTyped,
    CancelationDetailsToJSON,
    CaseActionDomain,
    CaseActionDomainFromJSON,
    CaseActionDomainFromJSONTyped,
    CaseActionDomainToJSON,
    CaseStatusDomain,
    CaseStatusDomainFromJSON,
    CaseStatusDomainFromJSONTyped,
    CaseStatusDomainToJSON,
    CaseViolationPenalty,
    CaseViolationPenaltyFromJSON,
    CaseViolationPenaltyFromJSONTyped,
    CaseViolationPenaltyToJSON,
    CitationModel,
    CitationModelFromJSON,
    CitationModelFromJSONTyped,
    CitationModelToJSON,
    LawfirmCaseModel,
    LawfirmCaseModelFromJSON,
    LawfirmCaseModelFromJSONTyped,
    LawfirmCaseModelToJSON,
    LetterOfEngagement,
    LetterOfEngagementFromJSON,
    LetterOfEngagementFromJSONTyped,
    LetterOfEngagementToJSON,
    PaymentPlanTypeModel,
    PaymentPlanTypeModelFromJSON,
    PaymentPlanTypeModelFromJSONTyped,
    PaymentPlanTypeModelToJSON,
    SubscriptionDiscountEligibility,
    SubscriptionDiscountEligibilityFromJSON,
    SubscriptionDiscountEligibilityFromJSONTyped,
    SubscriptionDiscountEligibilityToJSON,
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
    UserDomain,
    UserDomainFromJSON,
    UserDomainFromJSONTyped,
    UserDomainToJSON,
} from './';

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

export function CaseModelFromJSON(json: any): CaseModel {
    return CaseModelFromJSONTyped(json, false);
}

export function CaseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': !exists(json, 'actions') ? undefined : ((json['actions'] as Array<any>).map(CaseActionDomainFromJSON)),
        'adjustedFineAmount': !exists(json, 'adjustedFineAmount') ? undefined : json['adjustedFineAmount'],
        'adjustedPointCount': !exists(json, 'adjustedPointCount') ? undefined : json['adjustedPointCount'],
        'bookingConfirmedDate': !exists(json, 'bookingConfirmedDate') ? undefined : TimestampFromJSON(json['bookingConfirmedDate']),
        'cancelationDetails': !exists(json, 'cancelationDetails') ? undefined : CancelationDetailsFromJSON(json['cancelationDetails']),
        'cancelationReason': !exists(json, 'cancelationReason') ? undefined : json['cancelationReason'],
        'cancellationExpiryDate': !exists(json, 'cancellationExpiryDate') ? undefined : TimestampFromJSON(json['cancellationExpiryDate']),
        'caseCancellationDate': !exists(json, 'caseCancellationDate') ? undefined : TimestampFromJSON(json['caseCancellationDate']),
        'caseCreationDate': !exists(json, 'caseCreationDate') ? undefined : TimestampFromJSON(json['caseCreationDate']),
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseResolutionDate': !exists(json, 'caseResolutionDate') ? undefined : TimestampFromJSON(json['caseResolutionDate']),
        'caseStatus': !exists(json, 'caseStatus') ? undefined : json['caseStatus'],
        'caseStatusCategory': !exists(json, 'caseStatusCategory') ? undefined : json['caseStatusCategory'],
        'caseStatusDomain': !exists(json, 'caseStatusDomain') ? undefined : CaseStatusDomainFromJSON(json['caseStatusDomain']),
        'citation': !exists(json, 'citation') ? undefined : CitationModelFromJSON(json['citation']),
        'courtAppointmentDate': !exists(json, 'courtAppointmentDate') ? undefined : TimestampFromJSON(json['courtAppointmentDate']),
        'hasLeftLawyerReview': !exists(json, 'hasLeftLawyerReview') ? undefined : json['hasLeftLawyerReview'],
        'isPointSystemState': !exists(json, 'isPointSystemState') ? undefined : json['isPointSystemState'],
        'lawfirmCaseDecision': !exists(json, 'lawfirmCaseDecision') ? undefined : LawfirmCaseModelFromJSON(json['lawfirmCaseDecision']),
        'lawfirmCodeApplied': !exists(json, 'lawfirmCodeApplied') ? undefined : json['lawfirmCodeApplied'],
        'letterOfEngagement': !exists(json, 'letterOfEngagement') ? undefined : LetterOfEngagementFromJSON(json['letterOfEngagement']),
        'maxPenalties': !exists(json, 'maxPenalties') ? undefined : ((json['maxPenalties'] as Array<any>).map(CaseViolationPenaltyFromJSON)),
        'paymentPlanTypeModel': !exists(json, 'paymentPlanTypeModel') ? undefined : PaymentPlanTypeModelFromJSON(json['paymentPlanTypeModel']),
        'referralCode': !exists(json, 'referralCode') ? undefined : json['referralCode'],
        'refundEligibility': !exists(json, 'refundEligibility') ? undefined : json['refundEligibility'],
        'resolutionSummary': !exists(json, 'resolutionSummary') ? undefined : json['resolutionSummary'],
        'subscriptionDiscountEligibility': !exists(json, 'subscriptionDiscountEligibility') ? undefined : SubscriptionDiscountEligibilityFromJSON(json['subscriptionDiscountEligibility']),
        'uiRefundMsg': !exists(json, 'uiRefundMsg') ? undefined : json['uiRefundMsg'],
        'user': !exists(json, 'user') ? undefined : UserDomainFromJSON(json['user']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function CaseModelToJSON(value?: CaseModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions === undefined ? undefined : ((value.actions as Array<any>).map(CaseActionDomainToJSON)),
        'adjustedFineAmount': value.adjustedFineAmount,
        'adjustedPointCount': value.adjustedPointCount,
        'bookingConfirmedDate': TimestampToJSON(value.bookingConfirmedDate),
        'cancelationDetails': CancelationDetailsToJSON(value.cancelationDetails),
        'cancelationReason': value.cancelationReason,
        'cancellationExpiryDate': TimestampToJSON(value.cancellationExpiryDate),
        'caseCancellationDate': TimestampToJSON(value.caseCancellationDate),
        'caseCreationDate': TimestampToJSON(value.caseCreationDate),
        'caseId': value.caseId,
        'caseResolutionDate': TimestampToJSON(value.caseResolutionDate),
        'caseStatus': value.caseStatus,
        'caseStatusCategory': value.caseStatusCategory,
        'caseStatusDomain': CaseStatusDomainToJSON(value.caseStatusDomain),
        'citation': CitationModelToJSON(value.citation),
        'courtAppointmentDate': TimestampToJSON(value.courtAppointmentDate),
        'hasLeftLawyerReview': value.hasLeftLawyerReview,
        'isPointSystemState': value.isPointSystemState,
        'lawfirmCaseDecision': LawfirmCaseModelToJSON(value.lawfirmCaseDecision),
        'lawfirmCodeApplied': value.lawfirmCodeApplied,
        'letterOfEngagement': LetterOfEngagementToJSON(value.letterOfEngagement),
        'maxPenalties': value.maxPenalties === undefined ? undefined : ((value.maxPenalties as Array<any>).map(CaseViolationPenaltyToJSON)),
        'paymentPlanTypeModel': PaymentPlanTypeModelToJSON(value.paymentPlanTypeModel),
        'referralCode': value.referralCode,
        'refundEligibility': value.refundEligibility,
        'resolutionSummary': value.resolutionSummary,
        'subscriptionDiscountEligibility': SubscriptionDiscountEligibilityToJSON(value.subscriptionDiscountEligibility),
        'uiRefundMsg': value.uiRefundMsg,
        'user': UserDomainToJSON(value.user),
        'userId': value.userId,
    };
}

/**
* @export
* @enum {string}
*/
export enum CaseModelCaseStatusEnum {
    AMENDEDDOWNWITHINCLASS = 'AMENDED_DOWN_WITHIN_CLASS',
    AMENDEDFULLFINE = 'AMENDED_FULL_FINE',
    AMENDEDINCREASEDFINE = 'AMENDED_INCREASED_FINE',
    AMENDEDNOFINE = 'AMENDED_NO_FINE',
    AMENDEDREDUCEDFINE = 'AMENDED_REDUCED_FINE',
    AMENDEDTOINFRACTION = 'AMENDED_TO_INFRACTION',
    AMENDEDTONMV = 'AMENDED_TO_NMV',
    CANCELLEDATTORNEYATFAULT = 'CANCELLED_ATTORNEY_AT_FAULT',
    CANCELLEDBYLAWFIRM = 'CANCELLED_BY_LAWFIRM',
    CANCELLEDBYUSER = 'CANCELLED_BY_USER',
    CANCELLEDDUPLICATE = 'CANCELLED_DUPLICATE',
    CANCELLEDNMV = 'CANCELLED_NMV',
    CANCELLEDNONPAYMENT = 'CANCELLED_NON_PAYMENT',
    CANCELLEDNOLAWFIRM = 'CANCELLED_NO_LAWFIRM',
    CANCELLEDOVERDUE = 'CANCELLED_OVERDUE',
    CANCELLEDTOOSHORTNOTICE = 'CANCELLED_TOO_SHORT_NOTICE',
    CASEINPROGRESS = 'CASE_IN_PROGRESS',
    CLIENTCONFIRMED = 'CLIENT_CONFIRMED',
    CLIENTCONFIRMEDUNPAID = 'CLIENT_CONFIRMED_UNPAID',
    CLIENTFIREDLAWFIRM = 'CLIENT_FIRED_LAWFIRM',
    CLIENTFORCEDLOSS = 'CLIENT_FORCED_LOSS',
    CLIENTPAIDFINE = 'CLIENT_PAID_FINE',
    CLIENTUNRESPONSIVE = 'CLIENT_UNRESPONSIVE',
    DEFERRED = 'DEFERRED',
    DISMISSED = 'DISMISSED',
    DIVERSION = 'DIVERSION',
    FEESDISPUTED = 'FEES_DISPUTED',
    FINEREDUCTIONONLY = 'FINE_REDUCTION_ONLY',
    LAWFIRMWITHDRAWN = 'LAWFIRM_WITHDRAWN',
    LOST = 'LOST',
    NOLAWFIRMAVAILABLE = 'NO_LAWFIRM_AVAILABLE',
    POINTREDUCTION = 'POINT_REDUCTION',
    REFUSEDBYLAWFIRM = 'REFUSED_BY_LAWFIRM',
    RESOLVEDNONPAYMENT = 'RESOLVED_NON_PAYMENT',
    STALE = 'STALE',
    TRAFFICSCHOOL = 'TRAFFIC_SCHOOL',
    UNCONFIRMED = 'UNCONFIRMED'
}
/**
* @export
* @enum {string}
*/
export enum CaseModelCaseStatusCategoryEnum {
    ACTIVE = 'ACTIVE',
    CANCELLED = 'CANCELLED',
    RESOLVED = 'RESOLVED',
    UNCONFIRMED = 'UNCONFIRMED'
}
/**
* @export
* @enum {string}
*/
export enum CaseModelRefundEligibilityEnum {
    FULLREFUND = 'FULL_REFUND',
    NOREFUND = 'NO_REFUND'
}

