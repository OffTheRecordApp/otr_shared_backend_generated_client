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
export function IsRefundEligibleResponseFromJSON(json) {
    return IsRefundEligibleResponseFromJSONTyped(json, false);
}
export function IsRefundEligibleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'refundEligibilityType': !exists(json, 'refundEligibilityType') ? undefined : json['refundEligibilityType'],
        'uiReasonMsg': !exists(json, 'uiReasonMsg') ? undefined : json['uiReasonMsg'],
    };
}
export function IsRefundEligibleResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'refundEligibilityType': value.refundEligibilityType,
        'uiReasonMsg': value.uiReasonMsg,
    };
}
/**
* @export
* @enum {string}
*/
export var IsRefundEligibleResponseRefundEligibilityTypeEnum;
(function (IsRefundEligibleResponseRefundEligibilityTypeEnum) {
    IsRefundEligibleResponseRefundEligibilityTypeEnum["FULLREFUND"] = "FULL_REFUND";
    IsRefundEligibleResponseRefundEligibilityTypeEnum["NOREFUND"] = "NO_REFUND";
})(IsRefundEligibleResponseRefundEligibilityTypeEnum || (IsRefundEligibleResponseRefundEligibilityTypeEnum = {}));
