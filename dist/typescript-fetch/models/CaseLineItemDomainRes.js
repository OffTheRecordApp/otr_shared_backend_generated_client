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
export function CaseLineItemDomainResFromJSON(json) {
    return CaseLineItemDomainResFromJSONTyped(json, false);
}
export function CaseLineItemDomainResFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalDescription': !exists(json, 'additionalDescription') ? undefined : json['additionalDescription'],
        'chargeDescription': !exists(json, 'chargeDescription') ? undefined : json['chargeDescription'],
        'clientTotalCost': !exists(json, 'clientTotalCost') ? undefined : json['clientTotalCost'],
        'creationDate': !exists(json, 'creationDate') ? undefined : TimestampResFromJSON(json['creationDate']),
        'feeInCents': !exists(json, 'feeInCents') ? undefined : json['feeInCents'],
        'lawfirmAssumedCost': !exists(json, 'lawfirmAssumedCost') ? undefined : json['lawfirmAssumedCost'],
        'lawfirmCaseFees': !exists(json, 'lawfirmCaseFees') ? undefined : json['lawfirmCaseFees'],
        'lawfirmCaseId': !exists(json, 'lawfirmCaseId') ? undefined : json['lawfirmCaseId'],
        'lawfirmEarningsForCase': !exists(json, 'lawfirmEarningsForCase') ? undefined : json['lawfirmEarningsForCase'],
        'lawfirmReferralCodeAdjustmentInCents': !exists(json, 'lawfirmReferralCodeAdjustmentInCents') ? undefined : json['lawfirmReferralCodeAdjustmentInCents'],
        'lineItemId': !exists(json, 'lineItemId') ? undefined : json['lineItemId'],
        'lineItemOwner': !exists(json, 'lineItemOwner') ? undefined : json['lineItemOwner'],
        'lineItemType': !exists(json, 'lineItemType') ? undefined : json['lineItemType'],
        'otrEarnings': !exists(json, 'otrEarnings') ? undefined : json['otrEarnings'],
        'otrMarketingFeeActual': !exists(json, 'otrMarketingFeeActual') ? undefined : json['otrMarketingFeeActual'],
        'otrMarketingFeeChargedToLawfirm': !exists(json, 'otrMarketingFeeChargedToLawfirm') ? undefined : json['otrMarketingFeeChargedToLawfirm'],
        'otrReferralCodeAdjustmentInCents': !exists(json, 'otrReferralCodeAdjustmentInCents') ? undefined : json['otrReferralCodeAdjustmentInCents'],
        'paymentProcessingFeeActual': !exists(json, 'paymentProcessingFeeActual') ? undefined : json['paymentProcessingFeeActual'],
        'paymentProcessingFeeChargedToLawfirm': !exists(json, 'paymentProcessingFeeChargedToLawfirm') ? undefined : json['paymentProcessingFeeChargedToLawfirm'],
        'platformFee': !exists(json, 'platformFee') ? undefined : json['platformFee'],
    };
}
export function CaseLineItemDomainResToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalDescription': value.additionalDescription,
        'chargeDescription': value.chargeDescription,
        'clientTotalCost': value.clientTotalCost,
        'creationDate': TimestampResToJSON(value.creationDate),
        'feeInCents': value.feeInCents,
        'lawfirmAssumedCost': value.lawfirmAssumedCost,
        'lawfirmCaseFees': value.lawfirmCaseFees,
        'lawfirmCaseId': value.lawfirmCaseId,
        'lawfirmEarningsForCase': value.lawfirmEarningsForCase,
        'lawfirmReferralCodeAdjustmentInCents': value.lawfirmReferralCodeAdjustmentInCents,
        'lineItemId': value.lineItemId,
        'lineItemOwner': value.lineItemOwner,
        'lineItemType': value.lineItemType,
        'otrEarnings': value.otrEarnings,
        'otrMarketingFeeActual': value.otrMarketingFeeActual,
        'otrMarketingFeeChargedToLawfirm': value.otrMarketingFeeChargedToLawfirm,
        'otrReferralCodeAdjustmentInCents': value.otrReferralCodeAdjustmentInCents,
        'paymentProcessingFeeActual': value.paymentProcessingFeeActual,
        'paymentProcessingFeeChargedToLawfirm': value.paymentProcessingFeeChargedToLawfirm,
        'platformFee': value.platformFee,
    };
}
/**
* @export
* @enum {string}
*/
export var CaseLineItemDomainResLineItemOwnerEnum;
(function (CaseLineItemDomainResLineItemOwnerEnum) {
    CaseLineItemDomainResLineItemOwnerEnum["COURT"] = "COURT";
    CaseLineItemDomainResLineItemOwnerEnum["LAWFIRM"] = "LAWFIRM";
    CaseLineItemDomainResLineItemOwnerEnum["OTR"] = "OTR";
})(CaseLineItemDomainResLineItemOwnerEnum || (CaseLineItemDomainResLineItemOwnerEnum = {}));
/**
* @export
* @enum {string}
*/
export var CaseLineItemDomainResLineItemTypeEnum;
(function (CaseLineItemDomainResLineItemTypeEnum) {
    CaseLineItemDomainResLineItemTypeEnum["ACCIDENTFEE"] = "ACCIDENT_FEE";
    CaseLineItemDomainResLineItemTypeEnum["BASELEGALFEE"] = "BASE_LEGAL_FEE";
    CaseLineItemDomainResLineItemTypeEnum["BONDFEE"] = "BOND_FEE";
    CaseLineItemDomainResLineItemTypeEnum["BOOKINGFEE"] = "BOOKING_FEE";
    CaseLineItemDomainResLineItemTypeEnum["CDLFEE"] = "CDL_FEE";
    CaseLineItemDomainResLineItemTypeEnum["COURTFEE"] = "COURT_FEE";
    CaseLineItemDomainResLineItemTypeEnum["DISPUTEFEE"] = "DISPUTE_FEE";
    CaseLineItemDomainResLineItemTypeEnum["FINEPAYMENT"] = "FINE_PAYMENT";
    CaseLineItemDomainResLineItemTypeEnum["FTAFEE"] = "FTA_FEE";
    CaseLineItemDomainResLineItemTypeEnum["INITIALSUBSCRIPTIONFEE"] = "INITIAL_SUBSCRIPTION_FEE";
    CaseLineItemDomainResLineItemTypeEnum["LATEFEE"] = "LATE_FEE";
    CaseLineItemDomainResLineItemTypeEnum["MBGREFUND"] = "MBG_REFUND";
    CaseLineItemDomainResLineItemTypeEnum["MVSFEE"] = "MVS_FEE";
    CaseLineItemDomainResLineItemTypeEnum["OTHER"] = "OTHER";
    CaseLineItemDomainResLineItemTypeEnum["OTRCREDIT"] = "OTR_CREDIT";
    CaseLineItemDomainResLineItemTypeEnum["OTRSUBSCRIPTIONCREDIT"] = "OTR_SUBSCRIPTION_CREDIT";
    CaseLineItemDomainResLineItemTypeEnum["PAYMENTPLANSERVICEFEE"] = "PAYMENT_PLAN_SERVICE_FEE";
    CaseLineItemDomainResLineItemTypeEnum["WARRANTFEE"] = "WARRANT_FEE";
})(CaseLineItemDomainResLineItemTypeEnum || (CaseLineItemDomainResLineItemTypeEnum = {}));
