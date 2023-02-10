"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingSubscriptionModel = void 0;
var BillingSubscriptionModel;
(function (BillingSubscriptionModel) {
    BillingSubscriptionModel.StatusEnum = {
        Active: 'ACTIVE',
        Canceled: 'CANCELED',
        Incomplete: 'INCOMPLETE',
        IncompleteExpired: 'INCOMPLETE_EXPIRED',
        InTrialPeriod: 'IN_TRIAL_PERIOD',
        PastDue: 'PAST_DUE',
        Unknown: 'UNKNOWN',
        Unpaid: 'UNPAID'
    };
})(BillingSubscriptionModel = exports.BillingSubscriptionModel || (exports.BillingSubscriptionModel = {}));
