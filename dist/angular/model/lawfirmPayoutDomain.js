"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmPayoutDomain = void 0;
var LawfirmPayoutDomain;
(function (LawfirmPayoutDomain) {
    LawfirmPayoutDomain.TransactionMethodEnum = {
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
})(LawfirmPayoutDomain = exports.LawfirmPayoutDomain || (exports.LawfirmPayoutDomain = {}));
