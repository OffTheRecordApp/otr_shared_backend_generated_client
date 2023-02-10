"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreshDeskTicketRes = void 0;
var FreshDeskTicketRes;
(function (FreshDeskTicketRes) {
    FreshDeskTicketRes.PriorityTypeEnum = {
        High: 'HIGH',
        Low: 'LOW',
        Medium: 'MEDIUM',
        Unknown: 'UNKNOWN',
        Urgent: 'URGENT'
    };
    FreshDeskTicketRes.StatusTypeEnum = {
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
})(FreshDeskTicketRes = exports.FreshDeskTicketRes || (exports.FreshDeskTicketRes = {}));
