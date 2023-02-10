"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmCaseDomain = void 0;
var LawfirmCaseDomain;
(function (LawfirmCaseDomain) {
    LawfirmCaseDomain.CaseDecisionStatusEnum = {
        Accepted: 'ACCEPTED',
        Created: 'CREATED',
        Declined: 'DECLINED',
        Expired: 'EXPIRED',
        Pending: 'PENDING',
        Rematched: 'REMATCHED',
        RematchedReferral: 'REMATCHED_REFERRAL'
    };
    LawfirmCaseDomain.RefundOwnerEnum = {
        Lawfirm: 'LAWFIRM',
        None: 'NONE',
        Otr: 'OTR'
    };
})(LawfirmCaseDomain = exports.LawfirmCaseDomain || (exports.LawfirmCaseDomain = {}));
