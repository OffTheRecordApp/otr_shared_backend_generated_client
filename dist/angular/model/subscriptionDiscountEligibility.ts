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


export interface SubscriptionDiscountEligibility { 
    productName?: string;
    subscriptionDiscountEligibilityType?: SubscriptionDiscountEligibility.SubscriptionDiscountEligibilityTypeEnum;
    uiSubscriptionEligibilityMsg?: string;
}
export namespace SubscriptionDiscountEligibility {
    export type SubscriptionDiscountEligibilityTypeEnum = 'IS_ELIGIBLE' | 'IS_NOT_ELIGIBLE' | 'NOT_APPLICABLE';
    export const SubscriptionDiscountEligibilityTypeEnum = {
        IsEligible: 'IS_ELIGIBLE' as SubscriptionDiscountEligibilityTypeEnum,
        IsNotEligible: 'IS_NOT_ELIGIBLE' as SubscriptionDiscountEligibilityTypeEnum,
        NotApplicable: 'NOT_APPLICABLE' as SubscriptionDiscountEligibilityTypeEnum
    };
}


