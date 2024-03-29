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
export interface SaveCaseUserRequest {
    "additionalNote"?: string;
    "defendantAttributes"?: models.CaseUserDefendantAttributesRequest;
    "emailAddress"?: string;
    "isBookingAgent"?: boolean;
    "isDefendant"?: boolean;
    "isOwner"?: boolean;
    "isRemoved"?: boolean;
    "permissionAttributes"?: models.CaseUserPermissionAttributes;
    "relationshipToClient"?: SaveCaseUserRequest.RelationshipToClientEnum;
    "userId"?: number;
}
export declare namespace SaveCaseUserRequest {
    enum RelationshipToClientEnum {
        EMPLOYER,
        FAMILYMEMBER,
        FRIEND,
        LAWYER,
        OTHER,
        SELF,
        UNKNOWN
    }
}
