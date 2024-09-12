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
export function PaymentPlanTypeModelResFromJSON(json) {
    return PaymentPlanTypeModelResFromJSONTyped(json, false);
}
export function PaymentPlanTypeModelResFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'paymentPlanId': !exists(json, 'paymentPlanId') ? undefined : json['paymentPlanId'],
        'paymentPlanType': !exists(json, 'paymentPlanType') ? undefined : json['paymentPlanType'],
    };
}
export function PaymentPlanTypeModelResToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'paymentPlanId': value.paymentPlanId,
        'paymentPlanType': value.paymentPlanType,
    };
}
/**
* @export
* @enum {string}
*/
export var PaymentPlanTypeModelResPaymentPlanTypeEnum;
(function (PaymentPlanTypeModelResPaymentPlanTypeEnum) {
    PaymentPlanTypeModelResPaymentPlanTypeEnum["ALLUPFRONT"] = "ALL_UPFRONT";
    PaymentPlanTypeModelResPaymentPlanTypeEnum["THREEPAYMENTSHALFFIRST"] = "THREE_PAYMENTS_HALF_FIRST";
    PaymentPlanTypeModelResPaymentPlanTypeEnum["TWOPAYMENTSMONTHLY"] = "TWO_PAYMENTS_MONTHLY";
})(PaymentPlanTypeModelResPaymentPlanTypeEnum || (PaymentPlanTypeModelResPaymentPlanTypeEnum = {}));