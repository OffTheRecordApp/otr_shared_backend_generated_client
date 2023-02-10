"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseDomain = void 0;
var CaseDomain;
(function (CaseDomain) {
    CaseDomain.CaseStatusEnum = {
        AmendedDownWithinClass: 'AMENDED_DOWN_WITHIN_CLASS',
        AmendedFullFine: 'AMENDED_FULL_FINE',
        AmendedIncreasedFine: 'AMENDED_INCREASED_FINE',
        AmendedNoFine: 'AMENDED_NO_FINE',
        AmendedReducedFine: 'AMENDED_REDUCED_FINE',
        AmendedToInfraction: 'AMENDED_TO_INFRACTION',
        AmendedToNmv: 'AMENDED_TO_NMV',
        CancelledAttorneyAtFault: 'CANCELLED_ATTORNEY_AT_FAULT',
        CancelledByLawfirm: 'CANCELLED_BY_LAWFIRM',
        CancelledByUser: 'CANCELLED_BY_USER',
        CancelledDuplicate: 'CANCELLED_DUPLICATE',
        CancelledNmv: 'CANCELLED_NMV',
        CancelledNonPayment: 'CANCELLED_NON_PAYMENT',
        CancelledNoLawfirm: 'CANCELLED_NO_LAWFIRM',
        CancelledOverdue: 'CANCELLED_OVERDUE',
        CancelledTooShortNotice: 'CANCELLED_TOO_SHORT_NOTICE',
        CaseInProgress: 'CASE_IN_PROGRESS',
        ClientConfirmed: 'CLIENT_CONFIRMED',
        ClientConfirmedUnpaid: 'CLIENT_CONFIRMED_UNPAID',
        ClientFiredLawfirm: 'CLIENT_FIRED_LAWFIRM',
        ClientForcedLoss: 'CLIENT_FORCED_LOSS',
        ClientPaidFine: 'CLIENT_PAID_FINE',
        ClientUnresponsive: 'CLIENT_UNRESPONSIVE',
        Deferred: 'DEFERRED',
        Dismissed: 'DISMISSED',
        Diversion: 'DIVERSION',
        FeesDisputed: 'FEES_DISPUTED',
        FineReductionOnly: 'FINE_REDUCTION_ONLY',
        LawfirmWithdrawn: 'LAWFIRM_WITHDRAWN',
        Lost: 'LOST',
        NoLawfirmAvailable: 'NO_LAWFIRM_AVAILABLE',
        PointReduction: 'POINT_REDUCTION',
        RefusedByLawfirm: 'REFUSED_BY_LAWFIRM',
        ResolvedNonPayment: 'RESOLVED_NON_PAYMENT',
        Stale: 'STALE',
        TrafficSchool: 'TRAFFIC_SCHOOL',
        Unconfirmed: 'UNCONFIRMED'
    };
    CaseDomain.CaseStatusCategoryEnum = {
        Active: 'ACTIVE',
        Cancelled: 'CANCELLED',
        Resolved: 'RESOLVED',
        Unconfirmed: 'UNCONFIRMED'
    };
    CaseDomain.RefundEligibilityEnum = {
        FullRefund: 'FULL_REFUND',
        NoRefund: 'NO_REFUND'
    };
})(CaseDomain = exports.CaseDomain || (exports.CaseDomain = {}));
