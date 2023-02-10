"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberDomainRes = void 0;
var PhoneNumberDomainRes;
(function (PhoneNumberDomainRes) {
    PhoneNumberDomainRes.EntityTypeEnum = {
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
    PhoneNumberDomainRes.TypeEnum = {
        Home: 'HOME',
        Mobile: 'MOBILE',
        NotSpecified: 'NOT_SPECIFIED',
        Office: 'OFFICE'
    };
})(PhoneNumberDomainRes = exports.PhoneNumberDomainRes || (exports.PhoneNumberDomainRes = {}));
