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
/**
 *
 * @export
 * @interface ActivityFeedModel
 */
export interface ActivityFeedModel {
    /**
     *
     * @type {Date}
     * @memberof ActivityFeedModel
     */
    activityDate?: Date;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    activityDescription?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    activityDescriptionInHtml?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    activityType?: ActivityFeedModelActivityTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    ownerName?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    privacyMode?: ActivityFeedModelPrivacyModeEnum;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    profilePicUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    regionCode?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    violationDescription?: string;
}
export declare function ActivityFeedModelFromJSON(json: any): ActivityFeedModel;
export declare function ActivityFeedModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityFeedModel;
export declare function ActivityFeedModelToJSON(value?: ActivityFeedModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ActivityFeedModelActivityTypeEnum {
    PURCHASE = "PURCHASE",
    REFERRAL = "REFERRAL",
    REFUND = "REFUND",
    RESOLUTION = "RESOLUTION",
    TICKETREVIEW = "TICKET_REVIEW"
}
/**
* @export
* @enum {string}
*/
export declare enum ActivityFeedModelPrivacyModeEnum {
    FRIENDS = "FRIENDS",
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC",
    SEMIPUBLIC = "SEMI_PUBLIC"
}
