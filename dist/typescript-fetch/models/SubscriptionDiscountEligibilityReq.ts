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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SubscriptionDiscountEligibilityReq
 */
export interface SubscriptionDiscountEligibilityReq {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionDiscountEligibilityReq
     */
    subscriptionDiscountEligibilityType?: SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionDiscountEligibilityReq
     */
    uiSubscriptionEligibilityMsg?: string;
}

export function SubscriptionDiscountEligibilityReqFromJSON(json: any): SubscriptionDiscountEligibilityReq {
    return SubscriptionDiscountEligibilityReqFromJSONTyped(json, false);
}

export function SubscriptionDiscountEligibilityReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionDiscountEligibilityReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriptionDiscountEligibilityType': !exists(json, 'subscriptionDiscountEligibilityType') ? undefined : json['subscriptionDiscountEligibilityType'],
        'uiSubscriptionEligibilityMsg': !exists(json, 'uiSubscriptionEligibilityMsg') ? undefined : json['uiSubscriptionEligibilityMsg'],
    };
}

export function SubscriptionDiscountEligibilityReqToJSON(value?: SubscriptionDiscountEligibilityReq | null): any {
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
export enum SubscriptionDiscountEligibilityReqSubscriptionDiscountEligibilityTypeEnum {
    ISELIGIBLE = 'IS_ELIGIBLE',
    ISNOTELIGIBLE = 'IS_NOT_ELIGIBLE',
    NOTAPPLICABLE = 'NOT_APPLICABLE'
}

