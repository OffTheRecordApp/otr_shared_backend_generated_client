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

import * as models from './models';

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
    "violationDescription"?: string;
}

export namespace ActivityFeedModel {
    export enum ActivityTypeEnum {
        PURCHASE = <any> 'PURCHASE',
        REFERRAL = <any> 'REFERRAL',
        REFUND = <any> 'REFUND',
        RESOLUTION = <any> 'RESOLUTION',
        TICKETREVIEW = <any> 'TICKET_REVIEW'
    }
    export enum PrivacyModeEnum {
        FRIENDS = <any> 'FRIENDS',
        PRIVATE = <any> 'PRIVATE',
        PUBLIC = <any> 'PUBLIC',
        SEMIPUBLIC = <any> 'SEMI_PUBLIC'
    }
}
