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
export interface ActivityFeedModel {
    "activityDate"?: string;
    "activityDescription"?: string;
    "activityDescriptionInHtml"?: string;
    "activityType"?: ActivityFeedModel.ActivityTypeEnum;
    "city"?: string;
    "ownerName"?: string;
    "privacyMode"?: ActivityFeedModel.PrivacyModeEnum;
    "profilePicUrl"?: string;
    "regionCode"?: string;
}
export declare namespace ActivityFeedModel {
    enum ActivityTypeEnum {
        PURCHASE,
        REFERRAL,
        REFUND,
        RESOLUTION,
        TICKETREVIEW
    }
    enum PrivacyModeEnum {
        FRIENDS,
        PRIVATE,
        PUBLIC,
        SEMIPUBLIC
    }
}
