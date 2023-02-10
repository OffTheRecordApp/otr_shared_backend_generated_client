"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmCaseDomainRes = void 0;
var LawfirmCaseDomainRes;
(function (LawfirmCaseDomainRes) {
    LawfirmCaseDomainRes.CaseDecisionStatusEnum = {
        Accepted: 'ACCEPTED',
        Created: 'CREATED',
        Declined: 'DECLINED',
        Expired: 'EXPIRED',
        Pending: 'PENDING',
        Rematched: 'REMATCHED',
        RematchedReferral: 'REMATCHED_REFERRAL'
    };
    LawfirmCaseDomainRes.RefundOwnerEnum = {
        Lawfirm: 'LAWFIRM',
        None: 'NONE',
        Otr: 'OTR'
    };
})(LawfirmCaseDomainRes = exports.LawfirmCaseDomainRes || (exports.LawfirmCaseDomainRes = {}));
