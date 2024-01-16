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
export interface UserSubscriptionPlanModelRes {
    "expirationDateUtc"?: string;
    "id"?: string;
    "subscriptionCovered"?: boolean;
    "subscriptionStatus"?: UserSubscriptionPlanModelRes.SubscriptionStatusEnum;
}
export declare namespace UserSubscriptionPlanModelRes {
    enum SubscriptionStatusEnum {
        ACTIVE,
        CANCELED,
        INCOMPLETE,
        INCOMPLETEEXPIRED,
        INTRIALPERIOD,
        PASTDUE,
        UNKNOWN,
        UNPAID
    }
}
