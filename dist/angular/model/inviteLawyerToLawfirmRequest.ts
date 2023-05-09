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


export interface InviteLawyerToLawfirmRequest { 
    emailAddress: string;
    firstName: string;
    lastName: string;
    role?: InviteLawyerToLawfirmRequest.RoleEnum;
}
export namespace InviteLawyerToLawfirmRequest {
    export type RoleEnum = 'LAWFIRM_ADMIN' | 'LAWYER';
    export const RoleEnum = {
        LawfirmAdmin: 'LAWFIRM_ADMIN' as RoleEnum,
        Lawyer: 'LAWYER' as RoleEnum
    };
}

