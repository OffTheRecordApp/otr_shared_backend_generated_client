/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime';
import { TimestampResFromJSON, TimestampResToJSON, } from './';
export function FinancialTransactionFromJSON(json) {
    return FinancialTransactionFromJSONTyped(json, false);
}
export function FinancialTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'isOverdue': !exists(json, 'isOverdue') ? undefined : json['isOverdue'],
        'lawfirmReferenceId': !exists(json, 'lawfirmReferenceId') ? undefined : json['lawfirmReferenceId'],
        'otrAmount': !exists(json, 'otrAmount') ? undefined : json['otrAmount'],
        'runAtDateUtc': !exists(json, 'runAtDateUtc') ? undefined : TimestampResFromJSON(json['runAtDateUtc']),
        'stripeAmount': !exists(json, 'stripeAmount') ? undefined : json['stripeAmount'],
        'taskStatus': !exists(json, 'taskStatus') ? undefined : json['taskStatus'],
        'transactionDateUtc': !exists(json, 'transactionDateUtc') ? undefined : TimestampResFromJSON(json['transactionDateUtc']),
        'transactionMethod': !exists(json, 'transactionMethod') ? undefined : json['transactionMethod'],
        'transactionReferenceId': !exists(json, 'transactionReferenceId') ? undefined : json['transactionReferenceId'],
        'transactionType': !exists(json, 'transactionType') ? undefined : json['transactionType'],
        'userFirstName': !exists(json, 'userFirstName') ? undefined : json['userFirstName'],
        'userLastName': !exists(json, 'userLastName') ? undefined : json['userLastName'],
    };
}
export function FinancialTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'caseId': value.caseId,
        'isOverdue': value.isOverdue,
        'lawfirmReferenceId': value.lawfirmReferenceId,
        'otrAmount': value.otrAmount,
        'runAtDateUtc': TimestampResToJSON(value.runAtDateUtc),
        'stripeAmount': value.stripeAmount,
        'taskStatus': value.taskStatus,
        'transactionDateUtc': TimestampResToJSON(value.transactionDateUtc),
        'transactionMethod': value.transactionMethod,
        'transactionReferenceId': value.transactionReferenceId,
        'transactionType': value.transactionType,
        'userFirstName': value.userFirstName,
        'userLastName': value.userLastName,
    };
}
/**
* @export
* @enum {string}
*/
export var FinancialTransactionTaskStatusEnum;
(function (FinancialTransactionTaskStatusEnum) {
    FinancialTransactionTaskStatusEnum["CANCELLED"] = "CANCELLED";
    FinancialTransactionTaskStatusEnum["COMPLETE"] = "COMPLETE";
    FinancialTransactionTaskStatusEnum["ERROR"] = "ERROR";
    FinancialTransactionTaskStatusEnum["INPROGRESS"] = "IN_PROGRESS";
    FinancialTransactionTaskStatusEnum["NOOPERATION"] = "NO_OPERATION";
    FinancialTransactionTaskStatusEnum["QUEUED"] = "QUEUED";
})(FinancialTransactionTaskStatusEnum || (FinancialTransactionTaskStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var FinancialTransactionTransactionMethodEnum;
(function (FinancialTransactionTransactionMethodEnum) {
    FinancialTransactionTransactionMethodEnum["CASH"] = "CASH";
    FinancialTransactionTransactionMethodEnum["CHECK"] = "CHECK";
    FinancialTransactionTransactionMethodEnum["DESTINATIONCHARGETRANSFER"] = "DESTINATION_CHARGE_TRANSFER";
    FinancialTransactionTransactionMethodEnum["LOBCHECK"] = "LOB_CHECK";
    FinancialTransactionTransactionMethodEnum["PAYPAL"] = "PAYPAL";
    FinancialTransactionTransactionMethodEnum["STRIPEAPPLICATIONFEE"] = "STRIPE_APPLICATION_FEE";
    FinancialTransactionTransactionMethodEnum["STRIPECHARGE"] = "STRIPE_CHARGE";
    FinancialTransactionTransactionMethodEnum["STRIPECONNECTDEBIT"] = "STRIPE_CONNECT_DEBIT";
    FinancialTransactionTransactionMethodEnum["STRIPETRANSFER"] = "STRIPE_TRANSFER";
    FinancialTransactionTransactionMethodEnum["UNKNOWN"] = "UNKNOWN";
    FinancialTransactionTransactionMethodEnum["VENMO"] = "VENMO";
    FinancialTransactionTransactionMethodEnum["WIRETRANSFER"] = "WIRE_TRANSFER";
    FinancialTransactionTransactionMethodEnum["ZELLE"] = "ZELLE";
})(FinancialTransactionTransactionMethodEnum || (FinancialTransactionTransactionMethodEnum = {}));
/**
* @export
* @enum {string}
*/
export var FinancialTransactionTransactionTypeEnum;
(function (FinancialTransactionTransactionTypeEnum) {
    FinancialTransactionTransactionTypeEnum["FEE"] = "FEE";
    FinancialTransactionTransactionTypeEnum["FEEREFUND"] = "FEE_REFUND";
    FinancialTransactionTransactionTypeEnum["TRANSFER"] = "TRANSFER";
    FinancialTransactionTransactionTypeEnum["TRANSFERREVERSAL"] = "TRANSFER_REVERSAL";
})(FinancialTransactionTransactionTypeEnum || (FinancialTransactionTransactionTypeEnum = {}));
