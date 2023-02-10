"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialTransaction = void 0;
var FinancialTransaction;
(function (FinancialTransaction) {
    FinancialTransaction.TaskStatusEnum = {
        Cancelled: 'CANCELLED',
        Complete: 'COMPLETE',
        Error: 'ERROR',
        InProgress: 'IN_PROGRESS',
        NoOperation: 'NO_OPERATION',
        Queued: 'QUEUED'
    };
    FinancialTransaction.TransactionMethodEnum = {
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
    FinancialTransaction.TransactionTypeEnum = {
        Fee: 'FEE',
        FeeRefund: 'FEE_REFUND',
        Transfer: 'TRANSFER',
        TransferReversal: 'TRANSFER_REVERSAL'
    };
})(FinancialTransaction = exports.FinancialTransaction || (exports.FinancialTransaction = {}));
