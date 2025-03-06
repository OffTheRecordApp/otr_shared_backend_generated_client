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
import { CitationModel } from './citationModel';
import { LawfirmCaseModel } from './lawfirmCaseModel';
import { PaymentCardInput } from './paymentCardInput';
import { CaseStatusDomain } from './caseStatusDomain';
import { CaseViolationPenalty } from './caseViolationPenalty';
import { SubscriptionDiscountEligibility } from './subscriptionDiscountEligibility';
import { UserDomain } from './userDomain';
import { CaseActionDomain } from './caseActionDomain';
import { LetterOfEngagement } from './letterOfEngagement';
import { Timestamp } from './timestamp';
import { CancelationDetails } from './cancelationDetails';
import { PaymentPlanTypeModel } from './paymentPlanTypeModel';


export interface CaseModel { 
    actions?: Array<CaseActionDomain>;
    adjustedFineAmount?: number;
    adjustedPointCount?: number;
    bookingConfirmedDate?: Timestamp;
    cancelationDetails?: CancelationDetails;
    cancelationReason?: string;
    cancellationExpiryDate?: Timestamp;
    cardInput?: PaymentCardInput;
    caseCancellationDate?: Timestamp;
    caseCreationDate?: Timestamp;
    caseId?: string;
    caseResolutionDate?: Timestamp;
    caseStatus?: CaseModel.CaseStatusEnum;
    caseStatusCategory?: CaseModel.CaseStatusCategoryEnum;
    caseStatusDomain?: CaseStatusDomain;
    citation?: CitationModel;
    courtAppointmentDate?: Timestamp;
    hasLeftLawyerReview?: boolean;
    isPointSystemState?: boolean;
    lawfirmCaseDecision?: LawfirmCaseModel;
    lawfirmCodeApplied?: boolean;
    letterOfEngagement?: LetterOfEngagement;
    maxPenalties?: Array<CaseViolationPenalty>;
    paymentPlanTypeModel?: PaymentPlanTypeModel;
    referralCode?: string;
    refundEligibility?: CaseModel.RefundEligibilityEnum;
    resolutionSummary?: string;
    subscriptionDiscountEligibility?: SubscriptionDiscountEligibility;
    uiRefundMsg?: string;
    user?: UserDomain;
    userId?: number;
}
export namespace CaseModel {
    export type CaseStatusEnum = 'AMENDED_DOWN_WITHIN_CLASS' | 'AMENDED_FULL_FINE' | 'AMENDED_INCREASED_FINE' | 'AMENDED_NO_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_TO_INFRACTION' | 'AMENDED_TO_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_BY_USER' | 'CANCELLED_DUPLICATE' | 'CANCELLED_NMV' | 'CANCELLED_NON_PAYMENT' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE' | 'CASE_IN_PROGRESS' | 'CLIENT_CONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'CLIENT_FIRED_LAWFIRM' | 'CLIENT_FORCED_LOSS' | 'CLIENT_PAID_FINE' | 'CLIENT_UNRESPONSIVE' | 'DEFERRED' | 'DISMISSED' | 'DIVERSION' | 'FEES_DISPUTED' | 'FINE_REDUCTION_ONLY' | 'LAWFIRM_WITHDRAWN' | 'LOST' | 'NO_LAWFIRM_AVAILABLE' | 'POINT_REDUCTION' | 'REFUSED_BY_LAWFIRM' | 'RESOLVED_NON_PAYMENT' | 'STALE' | 'TRAFFIC_SCHOOL' | 'UNCONFIRMED';
    export const CaseStatusEnum = {
        AmendedDownWithinClass: 'AMENDED_DOWN_WITHIN_CLASS' as CaseStatusEnum,
        AmendedFullFine: 'AMENDED_FULL_FINE' as CaseStatusEnum,
        AmendedIncreasedFine: 'AMENDED_INCREASED_FINE' as CaseStatusEnum,
        AmendedNoFine: 'AMENDED_NO_FINE' as CaseStatusEnum,
        AmendedReducedFine: 'AMENDED_REDUCED_FINE' as CaseStatusEnum,
        AmendedToInfraction: 'AMENDED_TO_INFRACTION' as CaseStatusEnum,
        AmendedToNmv: 'AMENDED_TO_NMV' as CaseStatusEnum,
        CancelledAttorneyAtFault: 'CANCELLED_ATTORNEY_AT_FAULT' as CaseStatusEnum,
        CancelledByLawfirm: 'CANCELLED_BY_LAWFIRM' as CaseStatusEnum,
        CancelledByUser: 'CANCELLED_BY_USER' as CaseStatusEnum,
        CancelledDuplicate: 'CANCELLED_DUPLICATE' as CaseStatusEnum,
        CancelledNmv: 'CANCELLED_NMV' as CaseStatusEnum,
        CancelledNonPayment: 'CANCELLED_NON_PAYMENT' as CaseStatusEnum,
        CancelledNoLawfirm: 'CANCELLED_NO_LAWFIRM' as CaseStatusEnum,
        CancelledOverdue: 'CANCELLED_OVERDUE' as CaseStatusEnum,
        CancelledTooShortNotice: 'CANCELLED_TOO_SHORT_NOTICE' as CaseStatusEnum,
        CaseInProgress: 'CASE_IN_PROGRESS' as CaseStatusEnum,
        ClientConfirmed: 'CLIENT_CONFIRMED' as CaseStatusEnum,
        ClientConfirmedUnpaid: 'CLIENT_CONFIRMED_UNPAID' as CaseStatusEnum,
        ClientFiredLawfirm: 'CLIENT_FIRED_LAWFIRM' as CaseStatusEnum,
        ClientForcedLoss: 'CLIENT_FORCED_LOSS' as CaseStatusEnum,
        ClientPaidFine: 'CLIENT_PAID_FINE' as CaseStatusEnum,
        ClientUnresponsive: 'CLIENT_UNRESPONSIVE' as CaseStatusEnum,
        Deferred: 'DEFERRED' as CaseStatusEnum,
        Dismissed: 'DISMISSED' as CaseStatusEnum,
        Diversion: 'DIVERSION' as CaseStatusEnum,
        FeesDisputed: 'FEES_DISPUTED' as CaseStatusEnum,
        FineReductionOnly: 'FINE_REDUCTION_ONLY' as CaseStatusEnum,
        LawfirmWithdrawn: 'LAWFIRM_WITHDRAWN' as CaseStatusEnum,
        Lost: 'LOST' as CaseStatusEnum,
        NoLawfirmAvailable: 'NO_LAWFIRM_AVAILABLE' as CaseStatusEnum,
        PointReduction: 'POINT_REDUCTION' as CaseStatusEnum,
        RefusedByLawfirm: 'REFUSED_BY_LAWFIRM' as CaseStatusEnum,
        ResolvedNonPayment: 'RESOLVED_NON_PAYMENT' as CaseStatusEnum,
        Stale: 'STALE' as CaseStatusEnum,
        TrafficSchool: 'TRAFFIC_SCHOOL' as CaseStatusEnum,
        Unconfirmed: 'UNCONFIRMED' as CaseStatusEnum
    };
    export type CaseStatusCategoryEnum = 'ACTIVE' | 'CANCELLED' | 'RESOLVED' | 'UNCONFIRMED';
    export const CaseStatusCategoryEnum = {
        Active: 'ACTIVE' as CaseStatusCategoryEnum,
        Cancelled: 'CANCELLED' as CaseStatusCategoryEnum,
        Resolved: 'RESOLVED' as CaseStatusCategoryEnum,
        Unconfirmed: 'UNCONFIRMED' as CaseStatusCategoryEnum
    };
    export type RefundEligibilityEnum = 'FULL_REFUND' | 'NO_REFUND';
    export const RefundEligibilityEnum = {
        FullRefund: 'FULL_REFUND' as RefundEligibilityEnum,
        NoRefund: 'NO_REFUND' as RefundEligibilityEnum
    };
}


