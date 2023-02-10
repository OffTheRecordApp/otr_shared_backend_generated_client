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
export interface DashboardStatusModel {
    caseStatus?: DashboardStatusModel.CaseStatusEnum;
    clientFriendlyDescription?: string;
    clientFriendlyName?: string;
    statusCategory?: DashboardStatusModel.StatusCategoryEnum;
}
export declare namespace DashboardStatusModel {
    type CaseStatusEnum = 'AMENDED_DOWN_WITHIN_CLASS' | 'AMENDED_FULL_FINE' | 'AMENDED_INCREASED_FINE' | 'AMENDED_NO_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_TO_INFRACTION' | 'AMENDED_TO_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_BY_USER' | 'CANCELLED_DUPLICATE' | 'CANCELLED_NMV' | 'CANCELLED_NON_PAYMENT' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE' | 'CASE_IN_PROGRESS' | 'CLIENT_CONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'CLIENT_FIRED_LAWFIRM' | 'CLIENT_FORCED_LOSS' | 'CLIENT_PAID_FINE' | 'CLIENT_UNRESPONSIVE' | 'DEFERRED' | 'DISMISSED' | 'DIVERSION' | 'FEES_DISPUTED' | 'FINE_REDUCTION_ONLY' | 'LAWFIRM_WITHDRAWN' | 'LOST' | 'NO_LAWFIRM_AVAILABLE' | 'POINT_REDUCTION' | 'REFUSED_BY_LAWFIRM' | 'RESOLVED_NON_PAYMENT' | 'STALE' | 'TRAFFIC_SCHOOL' | 'UNCONFIRMED';
    const CaseStatusEnum: {
        AmendedDownWithinClass: CaseStatusEnum;
        AmendedFullFine: CaseStatusEnum;
        AmendedIncreasedFine: CaseStatusEnum;
        AmendedNoFine: CaseStatusEnum;
        AmendedReducedFine: CaseStatusEnum;
        AmendedToInfraction: CaseStatusEnum;
        AmendedToNmv: CaseStatusEnum;
        CancelledAttorneyAtFault: CaseStatusEnum;
        CancelledByLawfirm: CaseStatusEnum;
        CancelledByUser: CaseStatusEnum;
        CancelledDuplicate: CaseStatusEnum;
        CancelledNmv: CaseStatusEnum;
        CancelledNonPayment: CaseStatusEnum;
        CancelledNoLawfirm: CaseStatusEnum;
        CancelledOverdue: CaseStatusEnum;
        CancelledTooShortNotice: CaseStatusEnum;
        CaseInProgress: CaseStatusEnum;
        ClientConfirmed: CaseStatusEnum;
        ClientConfirmedUnpaid: CaseStatusEnum;
        ClientFiredLawfirm: CaseStatusEnum;
        ClientForcedLoss: CaseStatusEnum;
        ClientPaidFine: CaseStatusEnum;
        ClientUnresponsive: CaseStatusEnum;
        Deferred: CaseStatusEnum;
        Dismissed: CaseStatusEnum;
        Diversion: CaseStatusEnum;
        FeesDisputed: CaseStatusEnum;
        FineReductionOnly: CaseStatusEnum;
        LawfirmWithdrawn: CaseStatusEnum;
        Lost: CaseStatusEnum;
        NoLawfirmAvailable: CaseStatusEnum;
        PointReduction: CaseStatusEnum;
        RefusedByLawfirm: CaseStatusEnum;
        ResolvedNonPayment: CaseStatusEnum;
        Stale: CaseStatusEnum;
        TrafficSchool: CaseStatusEnum;
        Unconfirmed: CaseStatusEnum;
    };
    type StatusCategoryEnum = 'ACTIVE' | 'CANCELLED' | 'RESOLVED' | 'UNCONFIRMED';
    const StatusCategoryEnum: {
        Active: StatusCategoryEnum;
        Cancelled: StatusCategoryEnum;
        Resolved: StatusCategoryEnum;
        Unconfirmed: StatusCategoryEnum;
    };
}
