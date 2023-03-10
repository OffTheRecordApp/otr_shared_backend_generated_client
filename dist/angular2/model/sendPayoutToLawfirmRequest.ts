/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface SendPayoutToLawfirmRequest { 
    caseId?: string;
    description?: string;
    dueDateUtc?: string;
    lawfirmCaseId?: number;
    payoutAmountInCents?: number;
    sourceCasePaymentId?: string;
    sourceStripeChargeId?: string;
    transactionDateUtc?: string;
    transactionMethod?: SendPayoutToLawfirmRequest.TransactionMethodEnum;
    transactionReference?: string;
    transferGroup?: string;
}
export namespace SendPayoutToLawfirmRequest {
    export type TransactionMethodEnum = 'CHECK' | 'DESTINATION_CHARGE_TRANSFER' | 'LOB_CHECK' | 'PAYPAL' | 'STRIPE_APPLICATION_FEE' | 'STRIPE_CHARGE' | 'STRIPE_CONNECT_DEBIT' | 'STRIPE_TRANSFER' | 'UNKNOWN' | 'VENMO' | 'WIRE_TRANSFER' | 'ZELLE';
    export const TransactionMethodEnum = {
        Check: 'CHECK' as TransactionMethodEnum,
        DestinationChargeTransfer: 'DESTINATION_CHARGE_TRANSFER' as TransactionMethodEnum,
        LobCheck: 'LOB_CHECK' as TransactionMethodEnum,
        Paypal: 'PAYPAL' as TransactionMethodEnum,
        StripeApplicationFee: 'STRIPE_APPLICATION_FEE' as TransactionMethodEnum,
        StripeCharge: 'STRIPE_CHARGE' as TransactionMethodEnum,
        StripeConnectDebit: 'STRIPE_CONNECT_DEBIT' as TransactionMethodEnum,
        StripeTransfer: 'STRIPE_TRANSFER' as TransactionMethodEnum,
        Unknown: 'UNKNOWN' as TransactionMethodEnum,
        Venmo: 'VENMO' as TransactionMethodEnum,
        WireTransfer: 'WIRE_TRANSFER' as TransactionMethodEnum,
        Zelle: 'ZELLE' as TransactionMethodEnum
    };
}


