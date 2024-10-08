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
export function CancelBillingSubscriptionResponseFromJSON(json) {
    return CancelBillingSubscriptionResponseFromJSONTyped(json, false);
}
export function CancelBillingSubscriptionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cancelAtPeriodEnd': !exists(json, 'cancelAtPeriodEnd') ? undefined : json['cancelAtPeriodEnd'],
        'cancelledAt': !exists(json, 'cancelledAt') ? undefined : (new Date(json['cancelledAt'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'stripeCustomerId': !exists(json, 'stripeCustomerId') ? undefined : json['stripeCustomerId'],
    };
}
export function CancelBillingSubscriptionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cancelAtPeriodEnd': value.cancelAtPeriodEnd,
        'cancelledAt': value.cancelledAt === undefined ? undefined : (value.cancelledAt.toISOString()),
        'id': value.id,
        'status': value.status,
        'stripeCustomerId': value.stripeCustomerId,
    };
}
/**
* @export
* @enum {string}
*/
export var CancelBillingSubscriptionResponseStatusEnum;
(function (CancelBillingSubscriptionResponseStatusEnum) {
    CancelBillingSubscriptionResponseStatusEnum["ACTIVE"] = "ACTIVE";
    CancelBillingSubscriptionResponseStatusEnum["CANCELED"] = "CANCELED";
    CancelBillingSubscriptionResponseStatusEnum["INCOMPLETE"] = "INCOMPLETE";
    CancelBillingSubscriptionResponseStatusEnum["INCOMPLETEEXPIRED"] = "INCOMPLETE_EXPIRED";
    CancelBillingSubscriptionResponseStatusEnum["INTRIALPERIOD"] = "IN_TRIAL_PERIOD";
    CancelBillingSubscriptionResponseStatusEnum["PASTDUE"] = "PAST_DUE";
    CancelBillingSubscriptionResponseStatusEnum["UNKNOWN"] = "UNKNOWN";
    CancelBillingSubscriptionResponseStatusEnum["UNPAID"] = "UNPAID";
})(CancelBillingSubscriptionResponseStatusEnum || (CancelBillingSubscriptionResponseStatusEnum = {}));
