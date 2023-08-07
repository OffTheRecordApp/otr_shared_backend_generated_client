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
export interface GetCaseUserModel {
    "additionalNote"?: string;
    "caseId"?: string;
    "dateOfBirth"?: string;
    "emailAddress"?: string;
    "firstName"?: string;
    "isBookingAgent"?: boolean;
    "isDefendant"?: boolean;
    "isOwner"?: boolean;
    "isRemoved"?: boolean;
    "lastName"?: string;
    "licenseNumber"?: string;
    "licenseState"?: string;
    "permissionAttributes"?: models.CaseUserPermissionAttributes;
    "relationshipToClient"?: GetCaseUserModel.RelationshipToClientEnum;
    "userId"?: number;
}
export declare namespace GetCaseUserModel {
    enum RelationshipToClientEnum {
        EMPLOYER,
        FAMILYMEMBER,
        FRIEND,
        LAWYER,
        OTHER,
        SELF
    }
}
