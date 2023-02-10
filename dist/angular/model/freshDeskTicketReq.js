"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreshDeskTicketReq = void 0;
var FreshDeskTicketReq;
(function (FreshDeskTicketReq) {
    FreshDeskTicketReq.PriorityTypeEnum = {
        High: 'HIGH',
        Low: 'LOW',
        Medium: 'MEDIUM',
        Unknown: 'UNKNOWN',
        Urgent: 'URGENT'
    };
    FreshDeskTicketReq.StatusTypeEnum = {
        Closed: 'CLOSED',
        Open: 'OPEN',
        Pending: 'PENDING',
        PendingOneWeek: 'PENDING_ONE_WEEK',
        PendingTwoDays: 'PENDING_TWO_DAYS',
        QueuedForAutomation: 'QUEUED_FOR_AUTOMATION',
        Resolved: 'RESOLVED',
        Unknown: 'UNKNOWN',
        WaitingOnAttorney: 'WAITING_ON_ATTORNEY',
        WaitingOnCustomer: 'WAITING_ON_CUSTOMER',
        WaitingOnOtr: 'WAITING_ON_OTR',
        WaitingOnThirdParty: 'WAITING_ON_THIRD_PARTY'
    };
})(FreshDeskTicketReq = exports.FreshDeskTicketReq || (exports.FreshDeskTicketReq = {}));
