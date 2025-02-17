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
    "productName"?: string;
    "subscriptionDiscountEligibilityType"?: SubscriptionDiscountEligibility.SubscriptionDiscountEligibilityTypeEnum;
    "uiSubscriptionEligibilityMsg"?: string;
}
export declare namespace SubscriptionDiscountEligibility {
    enum SubscriptionDiscountEligibilityTypeEnum {
        ISELIGIBLE,
        ISNOTELIGIBLE,
        NOTAPPLICABLE
    }
}
