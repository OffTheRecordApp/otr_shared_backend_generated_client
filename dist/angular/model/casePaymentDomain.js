"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasePaymentDomain = void 0;
var CasePaymentDomain;
(function (CasePaymentDomain) {
    CasePaymentDomain.RecipientEnum = {
        Lawfirm: 'LAWFIRM',
        Otr: 'OTR'
    };
    CasePaymentDomain.TransactionMethodEnum = {
        Check: 'CHECK',
        DestinationChargeTransfer: 'DESTINATION_CHARGE_TRANSFER',
        LobCheck: 'LOB_CHECK',
        Paypal: 'PAYPAL',
        StripeApplicationFee: 'STRIPE_APPLICATION_FEE',
        StripeCharge: 'STRIPE_CHARGE',
        StripeConnectDebit: 'STRIPE_CONNECT_DEBIT',
        StripeTransfer: 'STRIPE_TRANSFER',
        Unknown: 'UNKNOWN',
        Venmo: 'VENMO',
        WireTransfer: 'WIRE_TRANSFER',
        Zelle: 'ZELLE'
    };
})(CasePaymentDomain = exports.CasePaymentDomain || (exports.CasePaymentDomain = {}));
