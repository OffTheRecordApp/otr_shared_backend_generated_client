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
export interface UpdateCasePaymentRequest {
    "baseFeeInCents"?: number;
    "lawfirmReferralCodeAdjustmentInCents"?: number;
    "otrMarketingFeeInCents"?: number;
    "otrReferralCodeAdjustmentInCents"?: number;
    "paymentProcessingFeeChargedToLawfirm"?: number;
    "recipient"?: UpdateCasePaymentRequest.RecipientEnum;
    "transactionMethod"?: UpdateCasePaymentRequest.TransactionMethodEnum;
}
export declare namespace UpdateCasePaymentRequest {
    enum RecipientEnum {
        COURT,
        LAWFIRM,
        OTR
    }
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
