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
export function BillingSubscriptionItemModelFromJSON(json) {
    return BillingSubscriptionItemModelFromJSONTyped(json, false);
}
export function BillingSubscriptionItemModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'billingScheme': !exists(json, 'billingScheme') ? undefined : json['billingScheme'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
        'intervalCount': !exists(json, 'intervalCount') ? undefined : json['intervalCount'],
        'priceDescription': !exists(json, 'priceDescription') ? undefined : json['priceDescription'],
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'tiersMode': !exists(json, 'tiersMode') ? undefined : json['tiersMode'],
        'usageType': !exists(json, 'usageType') ? undefined : json['usageType'],
    };
}
export function BillingSubscriptionItemModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'billingScheme': value.billingScheme,
        'id': value.id,
        'interval': value.interval,
        'intervalCount': value.intervalCount,
        'priceDescription': value.priceDescription,
        'productId': value.productId,
        'quantity': value.quantity,
        'tiersMode': value.tiersMode,
        'usageType': value.usageType,
    };
}
/**
* @export
* @enum {string}
*/
export var BillingSubscriptionItemModelBillingSchemeEnum;
(function (BillingSubscriptionItemModelBillingSchemeEnum) {
    BillingSubscriptionItemModelBillingSchemeEnum["PERUNIT"] = "PER_UNIT";
    BillingSubscriptionItemModelBillingSchemeEnum["TIERED"] = "TIERED";
    BillingSubscriptionItemModelBillingSchemeEnum["UNKNOWN"] = "UNKNOWN";
})(BillingSubscriptionItemModelBillingSchemeEnum || (BillingSubscriptionItemModelBillingSchemeEnum = {}));
/**
* @export
* @enum {string}
*/
export var BillingSubscriptionItemModelIntervalEnum;
(function (BillingSubscriptionItemModelIntervalEnum) {
    BillingSubscriptionItemModelIntervalEnum["DAILY"] = "DAILY";
    BillingSubscriptionItemModelIntervalEnum["MONTHLY"] = "MONTHLY";
    BillingSubscriptionItemModelIntervalEnum["QUARTERLY"] = "QUARTERLY";
    BillingSubscriptionItemModelIntervalEnum["WEEKLY"] = "WEEKLY";
    BillingSubscriptionItemModelIntervalEnum["YEARLY"] = "YEARLY";
})(BillingSubscriptionItemModelIntervalEnum || (BillingSubscriptionItemModelIntervalEnum = {}));
/**
* @export
* @enum {string}
*/
export var BillingSubscriptionItemModelTiersModeEnum;
(function (BillingSubscriptionItemModelTiersModeEnum) {
    BillingSubscriptionItemModelTiersModeEnum["GRADUATED"] = "GRADUATED";
    BillingSubscriptionItemModelTiersModeEnum["VOLUME"] = "VOLUME";
})(BillingSubscriptionItemModelTiersModeEnum || (BillingSubscriptionItemModelTiersModeEnum = {}));
/**
* @export
* @enum {string}
*/
export var BillingSubscriptionItemModelUsageTypeEnum;
(function (BillingSubscriptionItemModelUsageTypeEnum) {
    BillingSubscriptionItemModelUsageTypeEnum["LICENSED"] = "LICENSED";
    BillingSubscriptionItemModelUsageTypeEnum["METERED"] = "METERED";
})(BillingSubscriptionItemModelUsageTypeEnum || (BillingSubscriptionItemModelUsageTypeEnum = {}));
