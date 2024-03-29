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
export interface CoachingCardUsersModel {
    "acknowledgementDateUtc"?: string;
    "assignmentDateUtc"?: string;
    "coachingDateUtc"?: string;
    "coachingMethod"?: string;
    "hasBeenCoached"?: boolean;
    "isActionRequired"?: boolean;
    "isRepeatOffense"?: boolean;
    "permissionType"?: CoachingCardUsersModel.PermissionTypeEnum;
    "recipientNote"?: string;
    "resolutionDateUtc"?: string;
    "userId"?: number;
}
export declare namespace CoachingCardUsersModel {
    enum PermissionTypeEnum {
        AUTHOR,
        MANAGER,
        PARTICIPANT,
        RECIPIENT
    }
}
