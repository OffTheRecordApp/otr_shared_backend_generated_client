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
    "caseId"?: string;
    "description"?: string;
    "dueDateUtc"?: string;
    "lawfirmCaseId"?: number;
    "payoutAmountInCents"?: number;
    "sourceCasePaymentId"?: string;
    "sourceStripeChargeId"?: string;
    "transactionDateUtc"?: string;
    "transactionMethod"?: SendPayoutToLawfirmRequest.TransactionMethodEnum;
    "transactionReference"?: string;
    "transferGroup"?: string;
}
export declare namespace SendPayoutToLawfirmRequest {
    enum TransactionMethodEnum {
        CASH,
        CHECK,
        DESTINATIONCHARGETRANSFER,
        LOBCHECK,
        PAYPAL,
        STRIPEAPPLICATIONFEE,
        STRIPECHARGE,
        STRIPECONNECTDEBIT,
        STRIPETRANSFER,
        UNKNOWN,
        VENMO,
        WIRETRANSFER,
        ZELLE
    }
}
