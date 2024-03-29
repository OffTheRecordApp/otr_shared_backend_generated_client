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


export interface SaveCoachingCardUserRequest { 
    acknowledgementDateUtc?: string;
    assignmentDateUtc?: string;
    coachingCardId?: number;
    coachingDateUtc?: string;
    coachingMethod?: string;
    hasBeenCoached?: boolean;
    isActionRequired?: boolean;
    isRepeatOffense?: boolean;
    permissionType?: SaveCoachingCardUserRequest.PermissionTypeEnum;
    recipientNote?: string;
    resolutionDateUtc?: string;
    userId?: number;
}
export namespace SaveCoachingCardUserRequest {
    export type PermissionTypeEnum = 'AUTHOR' | 'MANAGER' | 'PARTICIPANT' | 'RECIPIENT';
    export const PermissionTypeEnum = {
        Author: 'AUTHOR' as PermissionTypeEnum,
        Manager: 'MANAGER' as PermissionTypeEnum,
        Participant: 'PARTICIPANT' as PermissionTypeEnum,
        Recipient: 'RECIPIENT' as PermissionTypeEnum
    };
}


