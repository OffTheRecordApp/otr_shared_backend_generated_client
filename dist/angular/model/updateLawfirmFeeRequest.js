"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLawfirmFeeRequest = void 0;
var UpdateLawfirmFeeRequest;
(function (UpdateLawfirmFeeRequest) {
    UpdateLawfirmFeeRequest.TransactionMethodEnum = {
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
})(UpdateLawfirmFeeRequest = exports.UpdateLawfirmFeeRequest || (exports.UpdateLawfirmFeeRequest = {}));
