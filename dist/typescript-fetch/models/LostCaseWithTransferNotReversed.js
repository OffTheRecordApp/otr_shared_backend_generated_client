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
export function LostCaseWithTransferNotReversedFromJSON(json) {
    return LostCaseWithTransferNotReversedFromJSONTyped(json, false);
}
export function LostCaseWithTransferNotReversedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actualCustomerCost': !exists(json, 'actualCustomerCost') ? undefined : json['actualCustomerCost'],
        'amountRefunded': !exists(json, 'amountRefunded') ? undefined : json['amountRefunded'],
        'applicationFeeRefundAmount': !exists(json, 'applicationFeeRefundAmount') ? undefined : json['applicationFeeRefundAmount'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseResolutionDateUtc': !exists(json, 'caseResolutionDateUtc') ? undefined : TimestampResFromJSON(json['caseResolutionDateUtc']),
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'lawfirmGrossRevenue': !exists(json, 'lawfirmGrossRevenue') ? undefined : json['lawfirmGrossRevenue'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'originalApplicationFee': !exists(json, 'originalApplicationFee') ? undefined : json['originalApplicationFee'],
        'originalCustomerCost': !exists(json, 'originalCustomerCost') ? undefined : json['originalCustomerCost'],
        'originalTransferAmount': !exists(json, 'originalTransferAmount') ? undefined : json['originalTransferAmount'],
        'otrIncome': !exists(json, 'otrIncome') ? undefined : json['otrIncome'],
        'platformFee': !exists(json, 'platformFee') ? undefined : json['platformFee'],
        'refundOwner': !exists(json, 'refundOwner') ? undefined : json['refundOwner'],
        'stripeFee': !exists(json, 'stripeFee') ? undefined : json['stripeFee'],
        'transferAmountRefunded': !exists(json, 'transferAmountRefunded') ? undefined : json['transferAmountRefunded'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function LostCaseWithTransferNotReversedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actualCustomerCost': value.actualCustomerCost,
        'amountRefunded': value.amountRefunded,
        'applicationFeeRefundAmount': value.applicationFeeRefundAmount,
        'caseId': value.caseId,
        'caseResolutionDateUtc': TimestampResToJSON(value.caseResolutionDateUtc),
        'firstName': value.firstName,
        'lastName': value.lastName,
        'lawfirmGrossRevenue': value.lawfirmGrossRevenue,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'originalApplicationFee': value.originalApplicationFee,
        'originalCustomerCost': value.originalCustomerCost,
        'originalTransferAmount': value.originalTransferAmount,
        'otrIncome': value.otrIncome,
        'platformFee': value.platformFee,
        'refundOwner': value.refundOwner,
        'stripeFee': value.stripeFee,
        'transferAmountRefunded': value.transferAmountRefunded,
        'userId': value.userId,
    };
}
/**
* @export
* @enum {string}
*/
export var LostCaseWithTransferNotReversedRefundOwnerEnum;
(function (LostCaseWithTransferNotReversedRefundOwnerEnum) {
    LostCaseWithTransferNotReversedRefundOwnerEnum["LAWFIRM"] = "LAWFIRM";
    LostCaseWithTransferNotReversedRefundOwnerEnum["NONE"] = "NONE";
    LostCaseWithTransferNotReversedRefundOwnerEnum["OTR"] = "OTR";
})(LostCaseWithTransferNotReversedRefundOwnerEnum || (LostCaseWithTransferNotReversedRefundOwnerEnum = {}));
