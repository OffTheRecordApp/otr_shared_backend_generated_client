"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmCaseDomainReq = void 0;
var LawfirmCaseDomainReq;
(function (LawfirmCaseDomainReq) {
    LawfirmCaseDomainReq.CaseDecisionStatusEnum = {
        Accepted: 'ACCEPTED',
        Created: 'CREATED',
        Declined: 'DECLINED',
        Expired: 'EXPIRED',
        Pending: 'PENDING',
        Rematched: 'REMATCHED',
        RematchedReferral: 'REMATCHED_REFERRAL'
    };
    LawfirmCaseDomainReq.RefundOwnerEnum = {
        Lawfirm: 'LAWFIRM',
        None: 'NONE',
        Otr: 'OTR'
    };
})(LawfirmCaseDomainReq = exports.LawfirmCaseDomainReq || (exports.LawfirmCaseDomainReq = {}));
