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


export interface MarkCaseAsResolvedRequest { 
    adjustedFineAmount?: number;
    adjustedPointCount?: number;
    originalPointCount?: number;
    resolutionStatus?: MarkCaseAsResolvedRequest.ResolutionStatusEnum;
    resolutionSummary?: string;
}
export namespace MarkCaseAsResolvedRequest {
    export type ResolutionStatusEnum = 'AMENDED_DOWN_WITHIN_CLASS' | 'AMENDED_FULL_FINE' | 'AMENDED_INCREASED_FINE' | 'AMENDED_NO_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_TO_INFRACTION' | 'AMENDED_TO_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_BY_USER' | 'CANCELLED_DUPLICATE' | 'CANCELLED_NMV' | 'CANCELLED_NON_PAYMENT' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE' | 'CASE_IN_PROGRESS' | 'CLIENT_CONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'CLIENT_FIRED_LAWFIRM' | 'CLIENT_FORCED_LOSS' | 'CLIENT_PAID_FINE' | 'CLIENT_UNRESPONSIVE' | 'DEFERRED' | 'DISMISSED' | 'DIVERSION' | 'FEES_DISPUTED' | 'FINE_REDUCTION_ONLY' | 'LAWFIRM_WITHDRAWN' | 'LOST' | 'NO_LAWFIRM_AVAILABLE' | 'POINT_REDUCTION' | 'REFUSED_BY_LAWFIRM' | 'RESOLVED_NON_PAYMENT' | 'STALE' | 'TRAFFIC_SCHOOL' | 'UNCONFIRMED';
    export const ResolutionStatusEnum = {
        AmendedDownWithinClass: 'AMENDED_DOWN_WITHIN_CLASS' as ResolutionStatusEnum,
        AmendedFullFine: 'AMENDED_FULL_FINE' as ResolutionStatusEnum,
        AmendedIncreasedFine: 'AMENDED_INCREASED_FINE' as ResolutionStatusEnum,
        AmendedNoFine: 'AMENDED_NO_FINE' as ResolutionStatusEnum,
        AmendedReducedFine: 'AMENDED_REDUCED_FINE' as ResolutionStatusEnum,
        AmendedToInfraction: 'AMENDED_TO_INFRACTION' as ResolutionStatusEnum,
        AmendedToNmv: 'AMENDED_TO_NMV' as ResolutionStatusEnum,
        CancelledAttorneyAtFault: 'CANCELLED_ATTORNEY_AT_FAULT' as ResolutionStatusEnum,
        CancelledByLawfirm: 'CANCELLED_BY_LAWFIRM' as ResolutionStatusEnum,
        CancelledByUser: 'CANCELLED_BY_USER' as ResolutionStatusEnum,
        CancelledDuplicate: 'CANCELLED_DUPLICATE' as ResolutionStatusEnum,
        CancelledNmv: 'CANCELLED_NMV' as ResolutionStatusEnum,
        CancelledNonPayment: 'CANCELLED_NON_PAYMENT' as ResolutionStatusEnum,
        CancelledNoLawfirm: 'CANCELLED_NO_LAWFIRM' as ResolutionStatusEnum,
        CancelledOverdue: 'CANCELLED_OVERDUE' as ResolutionStatusEnum,
        CancelledTooShortNotice: 'CANCELLED_TOO_SHORT_NOTICE' as ResolutionStatusEnum,
        CaseInProgress: 'CASE_IN_PROGRESS' as ResolutionStatusEnum,
        ClientConfirmed: 'CLIENT_CONFIRMED' as ResolutionStatusEnum,
        ClientConfirmedUnpaid: 'CLIENT_CONFIRMED_UNPAID' as ResolutionStatusEnum,
        ClientFiredLawfirm: 'CLIENT_FIRED_LAWFIRM' as ResolutionStatusEnum,
        ClientForcedLoss: 'CLIENT_FORCED_LOSS' as ResolutionStatusEnum,
        ClientPaidFine: 'CLIENT_PAID_FINE' as ResolutionStatusEnum,
        ClientUnresponsive: 'CLIENT_UNRESPONSIVE' as ResolutionStatusEnum,
        Deferred: 'DEFERRED' as ResolutionStatusEnum,
        Dismissed: 'DISMISSED' as ResolutionStatusEnum,
        Diversion: 'DIVERSION' as ResolutionStatusEnum,
        FeesDisputed: 'FEES_DISPUTED' as ResolutionStatusEnum,
        FineReductionOnly: 'FINE_REDUCTION_ONLY' as ResolutionStatusEnum,
        LawfirmWithdrawn: 'LAWFIRM_WITHDRAWN' as ResolutionStatusEnum,
        Lost: 'LOST' as ResolutionStatusEnum,
        NoLawfirmAvailable: 'NO_LAWFIRM_AVAILABLE' as ResolutionStatusEnum,
        PointReduction: 'POINT_REDUCTION' as ResolutionStatusEnum,
        RefusedByLawfirm: 'REFUSED_BY_LAWFIRM' as ResolutionStatusEnum,
        ResolvedNonPayment: 'RESOLVED_NON_PAYMENT' as ResolutionStatusEnum,
        Stale: 'STALE' as ResolutionStatusEnum,
        TrafficSchool: 'TRAFFIC_SCHOOL' as ResolutionStatusEnum,
        Unconfirmed: 'UNCONFIRMED' as ResolutionStatusEnum
    };
}


