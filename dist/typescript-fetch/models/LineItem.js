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
export function LineItemFromJSON(json) {
    return LineItemFromJSONTyped(json, false);
}
export function LineItemFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalDescription': !exists(json, 'additionalDescription') ? undefined : json['additionalDescription'],
        'feeAmount': !exists(json, 'feeAmount') ? undefined : json['feeAmount'],
        'lineItem': !exists(json, 'lineItem') ? undefined : json['lineItem'],
    };
}
export function LineItemToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalDescription': value.additionalDescription,
        'feeAmount': value.feeAmount,
        'lineItem': value.lineItem,
    };
}
/**
* @export
* @enum {string}
*/
export var LineItemLineItemEnum;
(function (LineItemLineItemEnum) {
    LineItemLineItemEnum["ACCIDENTFEE"] = "ACCIDENT_FEE";
    LineItemLineItemEnum["BASELEGALFEE"] = "BASE_LEGAL_FEE";
    LineItemLineItemEnum["BONDFEE"] = "BOND_FEE";
    LineItemLineItemEnum["BOOKINGFEE"] = "BOOKING_FEE";
    LineItemLineItemEnum["CDLFEE"] = "CDL_FEE";
    LineItemLineItemEnum["COURTFEE"] = "COURT_FEE";
    LineItemLineItemEnum["DISPUTEFEE"] = "DISPUTE_FEE";
    LineItemLineItemEnum["FINEPAYMENT"] = "FINE_PAYMENT";
    LineItemLineItemEnum["FTAFEE"] = "FTA_FEE";
    LineItemLineItemEnum["INITIALSUBSCRIPTIONFEE"] = "INITIAL_SUBSCRIPTION_FEE";
    LineItemLineItemEnum["LATEFEE"] = "LATE_FEE";
    LineItemLineItemEnum["MBGREFUND"] = "MBG_REFUND";
    LineItemLineItemEnum["MVSFEE"] = "MVS_FEE";
    LineItemLineItemEnum["OTHER"] = "OTHER";
    LineItemLineItemEnum["OTRCREDIT"] = "OTR_CREDIT";
    LineItemLineItemEnum["PAYMENTPLANSERVICEFEE"] = "PAYMENT_PLAN_SERVICE_FEE";
    LineItemLineItemEnum["WARRANTFEE"] = "WARRANT_FEE";
})(LineItemLineItemEnum || (LineItemLineItemEnum = {}));