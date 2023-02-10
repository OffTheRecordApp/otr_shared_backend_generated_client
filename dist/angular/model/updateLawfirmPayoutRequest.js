"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLawfirmPayoutRequest = void 0;
var UpdateLawfirmPayoutRequest;
(function (UpdateLawfirmPayoutRequest) {
    UpdateLawfirmPayoutRequest.TransactionMethodEnum = {
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
})(UpdateLawfirmPayoutRequest = exports.UpdateLawfirmPayoutRequest || (exports.UpdateLawfirmPayoutRequest = {}));
