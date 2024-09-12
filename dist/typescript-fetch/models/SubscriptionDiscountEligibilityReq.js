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
export function SubscriptionDiscountEligibilityReqFromJSON(json) {
    return SubscriptionDiscountEligibilityReqFromJSONTyped(json, false);
}
export function SubscriptionDiscountEligibilityReqFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'subscriptionDiscountEligibilityType': !exists(json, 'subscriptionDiscountEligibilityType') ? undefined : json['subscriptionDiscountEligibilityType'],
        'uiSubscriptionEligibilityMsg': !exists(json, 'uiSubscriptionEligibilityMsg') ? undefined : json['uiSubscriptionEligibilityMsg'],
    };
}
export function SubscriptionDiscountEligibilityReqToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'subscriptionDiscountEligibilityType': value.subscriptionDiscountEligibilityType,
        'uiSubscriptionEligibilityMsg': value.uiSubscriptionEligibilityMsg,
    };
}
/**
* @export
* @enum {string}
*/
export var SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum;
(function (SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum) {
    SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum["ISELIGIBLE"] = "IS_ELIGIBLE";
    SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum["ISNOTELIGIBLE"] = "IS_NOT_ELIGIBLE";
    SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum["NOTAPPLICABLE"] = "NOT_APPLICABLE";
})(SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum || (SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum = {}));