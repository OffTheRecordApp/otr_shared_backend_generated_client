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
import * as models from './models';
export interface LawfirmFeeDomain {
    "amount"?: number;
    "caseId"?: string;
    "dueDate"?: string;
    "lawfirmCaseId"?: number;
    "lawfirmFeeId"?: string;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "note"?: string;
    "otrAmount"?: number;
    "processingFeeActual"?: number;
    "processingFeeCharged"?: number;
    "sourceCasePaymentId"?: string;
    "stripeAmount"?: number;
    "stripeApplicationFee"?: models.StripeApplicationFeeDomain;
    "stripePayment"?: models.StripePaymentDomain;
    "transactionDateUtc"?: string;
    "transactionMethod"?: LawfirmFeeDomain.TransactionMethodEnum;
    "transactionReferenceId"?: string;
    "updatedDueDate"?: string;
}
export declare namespace LawfirmFeeDomain {
    enum TransactionMethodEnum {
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
