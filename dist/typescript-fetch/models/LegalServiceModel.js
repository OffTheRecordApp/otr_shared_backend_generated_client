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
import { WorkflowFinancialsFromJSON, WorkflowFinancialsToJSON, WorkflowLineItemModelFromJSON, WorkflowLineItemModelToJSON, } from './';
export function LegalServiceModelFromJSON(json) {
    return LegalServiceModelFromJSONTyped(json, false);
}
export function LegalServiceModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'algoName': !exists(json, 'algoName') ? undefined : json['algoName'],
        'chanceOfSuccess': !exists(json, 'chanceOfSuccess') ? undefined : json['chanceOfSuccess'],
        'financials': !exists(json, 'financials') ? undefined : WorkflowFinancialsFromJSON(json['financials']),
        'isSelected': !exists(json, 'isSelected') ? undefined : json['isSelected'],
        'lawfirmCaseId': !exists(json, 'lawfirmCaseId') ? undefined : json['lawfirmCaseId'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'legalServiceId': !exists(json, 'legalServiceId') ? undefined : json['legalServiceId'],
        'legalServiceName': !exists(json, 'legalServiceName') ? undefined : json['legalServiceName'],
        'legalServiceType': !exists(json, 'legalServiceType') ? undefined : json['legalServiceType'],
        'legalVertical': !exists(json, 'legalVertical') ? undefined : json['legalVertical'],
        'lineItems': !exists(json, 'lineItems') ? undefined : (json['lineItems'].map(WorkflowLineItemModelFromJSON)),
        'matchExpirationDateUtc': !exists(json, 'matchExpirationDateUtc') ? undefined : (new Date(json['matchExpirationDateUtc'])),
        'obfuscatedPictureUrl': !exists(json, 'obfuscatedPictureUrl') ? undefined : json['obfuscatedPictureUrl'],
        'predeterminedLawfirmName': !exists(json, 'predeterminedLawfirmName') ? undefined : json['predeterminedLawfirmName'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'refundEligibility': !exists(json, 'refundEligibility') ? undefined : json['refundEligibility'],
        'refundMessage': !exists(json, 'refundMessage') ? undefined : json['refundMessage'],
        'refundPercentage': !exists(json, 'refundPercentage') ? undefined : json['refundPercentage'],
        'totalClientCostInCents': !exists(json, 'totalClientCostInCents') ? undefined : json['totalClientCostInCents'],
    };
}
export function LegalServiceModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'algoName': value.algoName,
        'chanceOfSuccess': value.chanceOfSuccess,
        'financials': WorkflowFinancialsToJSON(value.financials),
        'isSelected': value.isSelected,
        'lawfirmCaseId': value.lawfirmCaseId,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'legalServiceId': value.legalServiceId,
        'legalServiceName': value.legalServiceName,
        'legalServiceType': value.legalServiceType,
        'legalVertical': value.legalVertical,
        'lineItems': value.lineItems === undefined ? undefined : (value.lineItems.map(WorkflowLineItemModelToJSON)),
        'matchExpirationDateUtc': value.matchExpirationDateUtc === undefined ? undefined : (value.matchExpirationDateUtc.toISOString()),
        'obfuscatedPictureUrl': value.obfuscatedPictureUrl,
        'predeterminedLawfirmName': value.predeterminedLawfirmName,
        'profilePictureUrl': value.profilePictureUrl,
        'refundEligibility': value.refundEligibility,
        'refundMessage': value.refundMessage,
        'refundPercentage': value.refundPercentage,
        'totalClientCostInCents': value.totalClientCostInCents,
    };
}
/**
* @export
* @enum {string}
*/
export var LegalServiceModelLegalServiceTypeEnum;
(function (LegalServiceModelLegalServiceTypeEnum) {
    LegalServiceModelLegalServiceTypeEnum["DEFER"] = "DEFER";
    LegalServiceModelLegalServiceTypeEnum["FIGHT"] = "FIGHT";
})(LegalServiceModelLegalServiceTypeEnum || (LegalServiceModelLegalServiceTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var LegalServiceModelLegalVerticalEnum;
(function (LegalServiceModelLegalVerticalEnum) {
    LegalServiceModelLegalVerticalEnum["TRAFFIC"] = "TRAFFIC";
})(LegalServiceModelLegalVerticalEnum || (LegalServiceModelLegalVerticalEnum = {}));
/**
* @export
* @enum {string}
*/
export var LegalServiceModelRefundEligibilityEnum;
(function (LegalServiceModelRefundEligibilityEnum) {
    LegalServiceModelRefundEligibilityEnum["FULLREFUND"] = "FULL_REFUND";
    LegalServiceModelRefundEligibilityEnum["NOREFUND"] = "NO_REFUND";
})(LegalServiceModelRefundEligibilityEnum || (LegalServiceModelRefundEligibilityEnum = {}));
