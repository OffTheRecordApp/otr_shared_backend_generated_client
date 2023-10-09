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
import { CaseUserPermissionAttributes } from './caseUserPermissionAttributes';


export interface GetCaseUserModel { 
    additionalNote?: string;
    caseId?: string;
    creationDateUtc?: string;
    dateOfBirth?: string;
    emailAddress?: string;
    firstName?: string;
    isBookingAgent?: boolean;
    isDefendant?: boolean;
    isGhostUser?: boolean;
    isOwner?: boolean;
    isRemoved?: boolean;
    lastName?: string;
    lastUpdatedDateUtc?: string;
    licenseNumber?: string;
    licenseState?: string;
    permissionAttributes?: CaseUserPermissionAttributes;
    relationshipToClient?: GetCaseUserModel.RelationshipToClientEnum;
    signedProfilePictureUrl?: string;
    userId?: number;
}
export namespace GetCaseUserModel {
    export type RelationshipToClientEnum = 'EMPLOYER' | 'FAMILY_MEMBER' | 'FRIEND' | 'LAWYER' | 'OTHER' | 'SELF' | 'UNKNOWN';
    export const RelationshipToClientEnum = {
        Employer: 'EMPLOYER' as RelationshipToClientEnum,
        FamilyMember: 'FAMILY_MEMBER' as RelationshipToClientEnum,
        Friend: 'FRIEND' as RelationshipToClientEnum,
        Lawyer: 'LAWYER' as RelationshipToClientEnum,
        Other: 'OTHER' as RelationshipToClientEnum,
        Self: 'SELF' as RelationshipToClientEnum,
        Unknown: 'UNKNOWN' as RelationshipToClientEnum
    };
}


