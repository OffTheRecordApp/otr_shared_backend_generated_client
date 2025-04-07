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
export function SaveCasePaymentPlanRequestFromJSON(json) {
    return SaveCasePaymentPlanRequestFromJSONTyped(json, false);
}
export function SaveCasePaymentPlanRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
    };
}
export function SaveCasePaymentPlanRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'interval': value.interval,
        'productId': value.productId,
    };
}
/**
* @export
* @enum {string}
*/
export var SaveCasePaymentPlanRequestIntervalEnum;
(function (SaveCasePaymentPlanRequestIntervalEnum) {
    SaveCasePaymentPlanRequestIntervalEnum["DAILY"] = "DAILY";
    SaveCasePaymentPlanRequestIntervalEnum["MONTHLY"] = "MONTHLY";
    SaveCasePaymentPlanRequestIntervalEnum["QUARTERLY"] = "QUARTERLY";
    SaveCasePaymentPlanRequestIntervalEnum["WEEKLY"] = "WEEKLY";
    SaveCasePaymentPlanRequestIntervalEnum["YEARLY"] = "YEARLY";
})(SaveCasePaymentPlanRequestIntervalEnum || (SaveCasePaymentPlanRequestIntervalEnum = {}));
