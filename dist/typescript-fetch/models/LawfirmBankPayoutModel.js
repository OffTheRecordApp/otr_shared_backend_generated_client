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
import { BalanceTransactionModelFromJSON, BalanceTransactionModelToJSON, } from './';
export function LawfirmBankPayoutModelFromJSON(json) {
    return LawfirmBankPayoutModelFromJSONTyped(json, false);
}
export function LawfirmBankPayoutModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountInCents': !exists(json, 'amountInCents') ? undefined : json['amountInCents'],
        'arrivalDateUtc': !exists(json, 'arrivalDateUtc') ? undefined : (new Date(json['arrivalDateUtc'])),
        'automatic': !exists(json, 'automatic') ? undefined : json['automatic'],
        'balanceTransactionId': !exists(json, 'balanceTransactionId') ? undefined : json['balanceTransactionId'],
        'balanceTransactions': !exists(json, 'balanceTransactions') ? undefined : (json['balanceTransactions'].map(BalanceTransactionModelFromJSON)),
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'destinationId': !exists(json, 'destinationId') ? undefined : json['destinationId'],
        'failureAttributes': !exists(json, 'failureAttributes') ? undefined : json['failureAttributes'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'payoutCreationDateUtc': !exists(json, 'payoutCreationDateUtc') ? undefined : (new Date(json['payoutCreationDateUtc'])),
        'reconciliationStatus': !exists(json, 'reconciliationStatus') ? undefined : json['reconciliationStatus'],
        'sourceAccountId': !exists(json, 'sourceAccountId') ? undefined : json['sourceAccountId'],
        'statementDescriptor': !exists(json, 'statementDescriptor') ? undefined : json['statementDescriptor'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'stripePayoutId': !exists(json, 'stripePayoutId') ? undefined : json['stripePayoutId'],
        'stripePlatformAccountId': !exists(json, 'stripePlatformAccountId') ? undefined : json['stripePlatformAccountId'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'withdrawal': !exists(json, 'withdrawal') ? undefined : json['withdrawal'],
    };
}
export function LawfirmBankPayoutModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountInCents': value.amountInCents,
        'arrivalDateUtc': value.arrivalDateUtc === undefined ? undefined : (value.arrivalDateUtc.toISOString()),
        'automatic': value.automatic,
        'balanceTransactionId': value.balanceTransactionId,
        'balanceTransactions': value.balanceTransactions === undefined ? undefined : (value.balanceTransactions.map(BalanceTransactionModelToJSON)),
        'currency': value.currency,
        'destinationId': value.destinationId,
        'failureAttributes': value.failureAttributes,
        'id': value.id,
        'lawfirmId': value.lawfirmId,
        'method': value.method,
        'payoutCreationDateUtc': value.payoutCreationDateUtc === undefined ? undefined : (value.payoutCreationDateUtc.toISOString()),
        'reconciliationStatus': value.reconciliationStatus,
        'sourceAccountId': value.sourceAccountId,
        'statementDescriptor': value.statementDescriptor,
        'status': value.status,
        'stripePayoutId': value.stripePayoutId,
        'stripePlatformAccountId': value.stripePlatformAccountId,
        'type': value.type,
        'withdrawal': value.withdrawal,
    };
}
/**
* @export
* @enum {string}
*/
export var LawfirmBankPayoutModelMethodEnum;
(function (LawfirmBankPayoutModelMethodEnum) {
    LawfirmBankPayoutModelMethodEnum["INSTANT"] = "INSTANT";
    LawfirmBankPayoutModelMethodEnum["STANDARD"] = "STANDARD";
})(LawfirmBankPayoutModelMethodEnum || (LawfirmBankPayoutModelMethodEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawfirmBankPayoutModelReconciliationStatusEnum;
(function (LawfirmBankPayoutModelReconciliationStatusEnum) {
    LawfirmBankPayoutModelReconciliationStatusEnum["COMPLETED"] = "COMPLETED";
    LawfirmBankPayoutModelReconciliationStatusEnum["INPROGRESS"] = "IN_PROGRESS";
    LawfirmBankPayoutModelReconciliationStatusEnum["NOTAPPLICABLE"] = "NOT_APPLICABLE";
})(LawfirmBankPayoutModelReconciliationStatusEnum || (LawfirmBankPayoutModelReconciliationStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawfirmBankPayoutModelStatusEnum;
(function (LawfirmBankPayoutModelStatusEnum) {
    LawfirmBankPayoutModelStatusEnum["CANCELED"] = "CANCELED";
    LawfirmBankPayoutModelStatusEnum["FAILED"] = "FAILED";
    LawfirmBankPayoutModelStatusEnum["INTRANSIT"] = "IN_TRANSIT";
    LawfirmBankPayoutModelStatusEnum["PAID"] = "PAID";
    LawfirmBankPayoutModelStatusEnum["PENDING"] = "PENDING";
})(LawfirmBankPayoutModelStatusEnum || (LawfirmBankPayoutModelStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawfirmBankPayoutModelTypeEnum;
(function (LawfirmBankPayoutModelTypeEnum) {
    LawfirmBankPayoutModelTypeEnum["BANKACCOUNT"] = "BANK_ACCOUNT";
    LawfirmBankPayoutModelTypeEnum["CARD"] = "CARD";
})(LawfirmBankPayoutModelTypeEnum || (LawfirmBankPayoutModelTypeEnum = {}));
