"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberDomain = void 0;
var PhoneNumberDomain;
(function (PhoneNumberDomain) {
    PhoneNumberDomain.EntityTypeEnum = {
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
    PhoneNumberDomain.TypeEnum = {
        Home: 'HOME',
        Mobile: 'MOBILE',
        NotSpecified: 'NOT_SPECIFIED',
        Office: 'OFFICE'
    };
})(PhoneNumberDomain = exports.PhoneNumberDomain || (exports.PhoneNumberDomain = {}));
