"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmFeeDomain = void 0;
var LawfirmFeeDomain;
(function (LawfirmFeeDomain) {
    LawfirmFeeDomain.TransactionMethodEnum = {
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
})(LawfirmFeeDomain = exports.LawfirmFeeDomain || (exports.LawfirmFeeDomain = {}));
