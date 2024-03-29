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


export interface SaveLawyerRequest { 
    jobTitle?: SaveLawyerRequest.JobTitleEnum;
    lawSchool?: string;
    lawfirmId?: number;
    licensedDate?: string;
    otherJobTitle?: string;
    userId?: number;
    verificationToken?: string;
}
export namespace SaveLawyerRequest {
    export type JobTitleEnum = 'ACCOUNTANT' | 'ATTORNEY' | 'ATTORNEY_ASSOCIATE' | 'ATTORNEY_COUNSEL' | 'ATTORNEY_MANAGING_PARTNER' | 'ATTORNEY_PARTNER' | 'ATTORNEY_STAFF' | 'CUSTOMER_SERVICE_REP' | 'LEGAL_ASSISTANT' | 'LEGAL_INTERN' | 'LEGAL_SECRETARY' | 'OTHER' | 'PARALEGAL';
    export const JobTitleEnum = {
        Accountant: 'ACCOUNTANT' as JobTitleEnum,
        Attorney: 'ATTORNEY' as JobTitleEnum,
        AttorneyAssociate: 'ATTORNEY_ASSOCIATE' as JobTitleEnum,
        AttorneyCounsel: 'ATTORNEY_COUNSEL' as JobTitleEnum,
        AttorneyManagingPartner: 'ATTORNEY_MANAGING_PARTNER' as JobTitleEnum,
        AttorneyPartner: 'ATTORNEY_PARTNER' as JobTitleEnum,
        AttorneyStaff: 'ATTORNEY_STAFF' as JobTitleEnum,
        CustomerServiceRep: 'CUSTOMER_SERVICE_REP' as JobTitleEnum,
        LegalAssistant: 'LEGAL_ASSISTANT' as JobTitleEnum,
        LegalIntern: 'LEGAL_INTERN' as JobTitleEnum,
        LegalSecretary: 'LEGAL_SECRETARY' as JobTitleEnum,
        Other: 'OTHER' as JobTitleEnum,
        Paralegal: 'PARALEGAL' as JobTitleEnum
    };
}


