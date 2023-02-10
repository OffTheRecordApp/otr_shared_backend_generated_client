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
export interface FinancialTransaction {
    "amount"?: number;
    "caseId"?: string;
    "isOverdue"?: boolean;
    "lawfirmReferenceId"?: string;
    "otrAmount"?: number;
    "runAtDateUtc"?: models.TimestampRes;
    "stripeAmount"?: number;
    "taskStatus"?: FinancialTransaction.TaskStatusEnum;
    "transactionDateUtc"?: models.TimestampRes;
    "transactionMethod"?: FinancialTransaction.TransactionMethodEnum;
    "transactionReferenceId"?: string;
    "transactionType"?: FinancialTransaction.TransactionTypeEnum;
    "userFirstName"?: string;
    "userLastName"?: string;
}
export declare namespace FinancialTransaction {
    enum TaskStatusEnum {
        CANCELLED,
        COMPLETE,
        ERROR,
        INPROGRESS,
        NOOPERATION,
        QUEUED
    }
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
    enum TransactionTypeEnum {
        FEE,
        FEEREFUND,
        TRANSFER,
        TRANSFERREVERSAL
    }
}
