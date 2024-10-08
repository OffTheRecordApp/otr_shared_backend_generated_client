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
export function RefundCasePaymentRequestFromJSON(json) {
    return RefundCasePaymentRequestFromJSONTyped(json, false);
}
export function RefundCasePaymentRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'refundAmount': !exists(json, 'refundAmount') ? undefined : json['refundAmount'],
        'refundNote': !exists(json, 'refundNote') ? undefined : json['refundNote'],
        'refundOTRFees': !exists(json, 'refundOTRFees') ? undefined : json['refundOTRFees'],
        'refundReasonType': !exists(json, 'refundReasonType') ? undefined : json['refundReasonType'],
        'reverseLawfirmPayout': !exists(json, 'reverseLawfirmPayout') ? undefined : json['reverseLawfirmPayout'],
    };
}
export function RefundCasePaymentRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'refundAmount': value.refundAmount,
        'refundNote': value.refundNote,
        'refundOTRFees': value.refundOTRFees,
        'refundReasonType': value.refundReasonType,
        'reverseLawfirmPayout': value.reverseLawfirmPayout,
    };
}
/**
* @export
* @enum {string}
*/
export var RefundCasePaymentRequestRefundReasonTypeEnum;
(function (RefundCasePaymentRequestRefundReasonTypeEnum) {
    RefundCasePaymentRequestRefundReasonTypeEnum["CANCELATION"] = "CANCELATION";
    RefundCasePaymentRequestRefundReasonTypeEnum["CLIENTDISPUTEDCHARGE"] = "CLIENT_DISPUTED_CHARGE";
    RefundCasePaymentRequestRefundReasonTypeEnum["DUPLICATECASE"] = "DUPLICATE_CASE";
    RefundCasePaymentRequestRefundReasonTypeEnum["LOSTCASE"] = "LOST_CASE";
    RefundCasePaymentRequestRefundReasonTypeEnum["OTHER"] = "OTHER";
})(RefundCasePaymentRequestRefundReasonTypeEnum || (RefundCasePaymentRequestRefundReasonTypeEnum = {}));
