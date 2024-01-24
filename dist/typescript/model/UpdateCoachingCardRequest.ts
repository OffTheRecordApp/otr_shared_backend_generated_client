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

export interface UpdateCoachingCardRequest {
    "acknowledgementDateUtc"?: string;
    "coachingCardId"?: number;
    "permissionType"?: UpdateCoachingCardRequest.PermissionTypeEnum;
    "recipientNote"?: string;
    "resolutionDateUtc"?: string;
    "userId"?: number;
}

export namespace UpdateCoachingCardRequest {
    export enum PermissionTypeEnum {
        AUTHOR = <any> 'AUTHOR',
        MANAGER = <any> 'MANAGER',
        PARTICIPANT = <any> 'PARTICIPANT',
        RECIPIENT = <any> 'RECIPIENT'
    }
}
