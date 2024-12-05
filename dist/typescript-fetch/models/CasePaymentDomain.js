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
import { FreshdeskTicketReferenceDomainFromJSON, FreshdeskTicketReferenceDomainToJSON, StripeChargeDomainFromJSON, StripeChargeDomainToJSON, TimestampFromJSON, TimestampToJSON, } from './';
export function CasePaymentDomainFromJSON(json) {
    return CasePaymentDomainFromJSONTyped(json, false);
}
export function CasePaymentDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'baseFeeInCents': !exists(json, 'baseFeeInCents') ? undefined : json['baseFeeInCents'],
        'casePaymentId': !exists(json, 'casePaymentId') ? undefined : json['casePaymentId'],
        'chargeAttempts': !exists(json, 'chargeAttempts') ? undefined : json['chargeAttempts'],
        'clientTotalCost': !exists(json, 'clientTotalCost') ? undefined : json['clientTotalCost'],
        'creationDateUTC': !exists(json, 'creationDateUTC') ? undefined : TimestampFromJSON(json['creationDateUTC']),
        'dueDate': !exists(json, 'dueDate') ? undefined : (new Date(json['dueDate'])),
        'hasPredictedOrAdjustedFee': !exists(json, 'hasPredictedOrAdjustedFee') ? undefined : json['hasPredictedOrAdjustedFee'],
        'isLocked': !exists(json, 'isLocked') ? undefined : json['isLocked'],
        'isPaymentActive': !exists(json, 'isPaymentActive') ? undefined : json['isPaymentActive'],
        'lastAttemptDate': !exists(json, 'lastAttemptDate') ? undefined : (new Date(json['lastAttemptDate'])),
        'lastUpdatedDateUTC': !exists(json, 'lastUpdatedDateUTC') ? undefined : TimestampFromJSON(json['lastUpdatedDateUTC']),
        'lawfirmAssumedCost': !exists(json, 'lawfirmAssumedCost') ? undefined : json['lawfirmAssumedCost'],
        'lawfirmCaseId': !exists(json, 'lawfirmCaseId') ? undefined : json['lawfirmCaseId'],
        'lawfirmEarnings': !exists(json, 'lawfirmEarnings') ? undefined : json['lawfirmEarnings'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'lawfirmReferralCodeAdjustmentInCents': !exists(json, 'lawfirmReferralCodeAdjustmentInCents') ? undefined : json['lawfirmReferralCodeAdjustmentInCents'],
        'mostRecentChargeError': !exists(json, 'mostRecentChargeError') ? undefined : json['mostRecentChargeError'],
        'otrCustomerCharges': !exists(json, 'otrCustomerCharges') ? undefined : json['otrCustomerCharges'],
        'otrEarnings': !exists(json, 'otrEarnings') ? undefined : json['otrEarnings'],
        'otrMarketingFeeInCents': !exists(json, 'otrMarketingFeeInCents') ? undefined : json['otrMarketingFeeInCents'],
        'otrReferralCodeAdjustmentInCents': !exists(json, 'otrReferralCodeAdjustmentInCents') ? undefined : json['otrReferralCodeAdjustmentInCents'],
        'paymentProcessingFeeActual': !exists(json, 'paymentProcessingFeeActual') ? undefined : json['paymentProcessingFeeActual'],
        'paymentProcessingFeeChargedToLawfirm': !exists(json, 'paymentProcessingFeeChargedToLawfirm') ? undefined : json['paymentProcessingFeeChargedToLawfirm'],
        'recipient': !exists(json, 'recipient') ? undefined : json['recipient'],
        'stripeCharge': !exists(json, 'stripeCharge') ? undefined : StripeChargeDomainFromJSON(json['stripeCharge']),
        'supportTickets': !exists(json, 'supportTickets') ? undefined : (json['supportTickets'].map(FreshdeskTicketReferenceDomainFromJSON)),
        'transactionMethod': !exists(json, 'transactionMethod') ? undefined : json['transactionMethod'],
        'updatedDueDate': !exists(json, 'updatedDueDate') ? undefined : (new Date(json['updatedDueDate'])),
    };
}
export function CasePaymentDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'baseFeeInCents': value.baseFeeInCents,
        'casePaymentId': value.casePaymentId,
        'chargeAttempts': value.chargeAttempts,
        'clientTotalCost': value.clientTotalCost,
        'creationDateUTC': TimestampToJSON(value.creationDateUTC),
        'dueDate': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'hasPredictedOrAdjustedFee': value.hasPredictedOrAdjustedFee,
        'isLocked': value.isLocked,
        'isPaymentActive': value.isPaymentActive,
        'lastAttemptDate': value.lastAttemptDate === undefined ? undefined : (value.lastAttemptDate.toISOString()),
        'lastUpdatedDateUTC': TimestampToJSON(value.lastUpdatedDateUTC),
        'lawfirmAssumedCost': value.lawfirmAssumedCost,
        'lawfirmCaseId': value.lawfirmCaseId,
        'lawfirmEarnings': value.lawfirmEarnings,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'lawfirmReferralCodeAdjustmentInCents': value.lawfirmReferralCodeAdjustmentInCents,
        'mostRecentChargeError': value.mostRecentChargeError,
        'otrCustomerCharges': value.otrCustomerCharges,
        'otrEarnings': value.otrEarnings,
        'otrMarketingFeeInCents': value.otrMarketingFeeInCents,
        'otrReferralCodeAdjustmentInCents': value.otrReferralCodeAdjustmentInCents,
        'paymentProcessingFeeActual': value.paymentProcessingFeeActual,
        'paymentProcessingFeeChargedToLawfirm': value.paymentProcessingFeeChargedToLawfirm,
        'recipient': value.recipient,
        'stripeCharge': StripeChargeDomainToJSON(value.stripeCharge),
        'supportTickets': value.supportTickets === undefined ? undefined : (value.supportTickets.map(FreshdeskTicketReferenceDomainToJSON)),
        'transactionMethod': value.transactionMethod,
        'updatedDueDate': value.updatedDueDate === undefined ? undefined : (value.updatedDueDate.toISOString()),
    };
}
/**
* @export
* @enum {string}
*/
export var CasePaymentDomainRecipientEnum;
(function (CasePaymentDomainRecipientEnum) {
    CasePaymentDomainRecipientEnum["COURT"] = "COURT";
    CasePaymentDomainRecipientEnum["LAWFIRM"] = "LAWFIRM";
    CasePaymentDomainRecipientEnum["OTR"] = "OTR";
})(CasePaymentDomainRecipientEnum || (CasePaymentDomainRecipientEnum = {}));
/**
* @export
* @enum {string}
*/
export var CasePaymentDomainTransactionMethodEnum;
(function (CasePaymentDomainTransactionMethodEnum) {
    CasePaymentDomainTransactionMethodEnum["CASH"] = "CASH";
    CasePaymentDomainTransactionMethodEnum["CHECK"] = "CHECK";
    CasePaymentDomainTransactionMethodEnum["DESTINATIONCHARGETRANSFER"] = "DESTINATION_CHARGE_TRANSFER";
    CasePaymentDomainTransactionMethodEnum["LOBCHECK"] = "LOB_CHECK";
    CasePaymentDomainTransactionMethodEnum["PAYPAL"] = "PAYPAL";
    CasePaymentDomainTransactionMethodEnum["STRIPEAPPLICATIONFEE"] = "STRIPE_APPLICATION_FEE";
    CasePaymentDomainTransactionMethodEnum["STRIPECHARGE"] = "STRIPE_CHARGE";
    CasePaymentDomainTransactionMethodEnum["STRIPECONNECTDEBIT"] = "STRIPE_CONNECT_DEBIT";
    CasePaymentDomainTransactionMethodEnum["STRIPETRANSFER"] = "STRIPE_TRANSFER";
    CasePaymentDomainTransactionMethodEnum["UNKNOWN"] = "UNKNOWN";
    CasePaymentDomainTransactionMethodEnum["VENMO"] = "VENMO";
    CasePaymentDomainTransactionMethodEnum["WIRETRANSFER"] = "WIRE_TRANSFER";
    CasePaymentDomainTransactionMethodEnum["ZELLE"] = "ZELLE";
})(CasePaymentDomainTransactionMethodEnum || (CasePaymentDomainTransactionMethodEnum = {}));
