"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseActionDomain = void 0;
var CaseActionDomain;
(function (CaseActionDomain) {
    CaseActionDomain.ActionTypeEnum = {
        CaseAccept: 'CASE_ACCEPT',
        CaseDecline: 'CASE_DECLINE',
        CitationDataExtracted: 'CITATION_DATA_EXTRACTED',
        CourtDateRemoved: 'COURT_DATE_REMOVED',
        CourtDateScheduled: 'COURT_DATE_SCHEDULED',
        DiscoveryReceived: 'DISCOVERY_RECEIVED',
        DiscoveryRequested: 'DISCOVERY_REQUESTED',
        DisputeFiled: 'DISPUTE_FILED',
        FailedPaymentAttempt: 'FAILED_PAYMENT_ATTEMPT',
        NoticeOfAppearanceFiled: 'NOTICE_OF_APPEARANCE_FILED',
        Other: 'OTHER',
        OverdueBalancePaid: 'OVERDUE_BALANCE_PAID',
        ReviewedByLawfirm: 'REVIEWED_BY_LAWFIRM',
        SocialMediaAsk: 'SOCIAL_MEDIA_ASK',
        TicketMailedToCourt: 'TICKET_MAILED_TO_COURT'
    };
})(CaseActionDomain = exports.CaseActionDomain || (exports.CaseActionDomain = {}));
