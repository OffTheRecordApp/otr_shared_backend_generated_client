"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBillingSubscriptionResponse = void 0;
var CreateBillingSubscriptionResponse;
(function (CreateBillingSubscriptionResponse) {
    CreateBillingSubscriptionResponse.StatusEnum = {
        Active: 'ACTIVE',
        Canceled: 'CANCELED',
        Incomplete: 'INCOMPLETE',
        IncompleteExpired: 'INCOMPLETE_EXPIRED',
        InTrialPeriod: 'IN_TRIAL_PERIOD',
        PastDue: 'PAST_DUE',
        Unknown: 'UNKNOWN',
        Unpaid: 'UNPAID'
    };
})(CreateBillingSubscriptionResponse = exports.CreateBillingSubscriptionResponse || (exports.CreateBillingSubscriptionResponse = {}));
