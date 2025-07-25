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


export interface LawfirmJobTitleModel { 
    jobTitle?: string;
    name?: LawfirmJobTitleModel.NameEnum;
}
export namespace LawfirmJobTitleModel {
    export type NameEnum = 'ACCOUNTANT' | 'ATTORNEY' | 'ATTORNEY_ASSOCIATE' | 'ATTORNEY_COUNSEL' | 'ATTORNEY_MANAGING_PARTNER' | 'ATTORNEY_PARTNER' | 'ATTORNEY_STAFF' | 'CUSTOMER_SERVICE_REP' | 'LEGAL_ASSISTANT' | 'LEGAL_INTERN' | 'LEGAL_SECRETARY' | 'OTHER' | 'PARALEGAL';
    export const NameEnum = {
        Accountant: 'ACCOUNTANT' as NameEnum,
        Attorney: 'ATTORNEY' as NameEnum,
        AttorneyAssociate: 'ATTORNEY_ASSOCIATE' as NameEnum,
        AttorneyCounsel: 'ATTORNEY_COUNSEL' as NameEnum,
        AttorneyManagingPartner: 'ATTORNEY_MANAGING_PARTNER' as NameEnum,
        AttorneyPartner: 'ATTORNEY_PARTNER' as NameEnum,
        AttorneyStaff: 'ATTORNEY_STAFF' as NameEnum,
        CustomerServiceRep: 'CUSTOMER_SERVICE_REP' as NameEnum,
        LegalAssistant: 'LEGAL_ASSISTANT' as NameEnum,
        LegalIntern: 'LEGAL_INTERN' as NameEnum,
        LegalSecretary: 'LEGAL_SECRETARY' as NameEnum,
        Other: 'OTHER' as NameEnum,
        Paralegal: 'PARALEGAL' as NameEnum
    };
}


