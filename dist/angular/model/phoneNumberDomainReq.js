"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberDomainReq = void 0;
var PhoneNumberDomainReq;
(function (PhoneNumberDomainReq) {
    PhoneNumberDomainReq.EntityTypeEnum = {
        Case: 'CASE',
        CasePayment: 'CASE_PAYMENT',
        Citation: 'CITATION',
        Court: 'COURT',
        Lawfirm: 'LAWFIRM',
        LawfirmCase: 'LAWFIRM_CASE',
        Lawyer: 'LAWYER',
        LineItem: 'LINE_ITEM',
        StripeCharge: 'STRIPE_CHARGE',
        User: 'USER'
    };
    PhoneNumberDomainReq.TypeEnum = {
        Home: 'HOME',
        Mobile: 'MOBILE',
        NotSpecified: 'NOT_SPECIFIED',
        Office: 'OFFICE'
    };
})(PhoneNumberDomainReq = exports.PhoneNumberDomainReq || (exports.PhoneNumberDomainReq = {}));
