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

export interface SaveLawyerRequest {
    "jobTitle"?: SaveLawyerRequest.JobTitleEnum;
    "lawSchool"?: string;
    "lawfirmId"?: number;
    "licensedDate"?: string;
    "otherJobTitle"?: string;
    "userId"?: number;
}

export namespace SaveLawyerRequest {
    export enum JobTitleEnum {
        ACCOUNTANT = <any> 'ACCOUNTANT',
        ATTORNEY = <any> 'ATTORNEY',
        ATTORNEYASSOCIATE = <any> 'ATTORNEY_ASSOCIATE',
        ATTORNEYCOUNSEL = <any> 'ATTORNEY_COUNSEL',
        ATTORNEYMANAGINGPARTNER = <any> 'ATTORNEY_MANAGING_PARTNER',
        ATTORNEYPARTNER = <any> 'ATTORNEY_PARTNER',
        ATTORNEYSTAFF = <any> 'ATTORNEY_STAFF',
        CUSTOMERSERVICEREP = <any> 'CUSTOMER_SERVICE_REP',
        LEGALASSISTANT = <any> 'LEGAL_ASSISTANT',
        LEGALINTERN = <any> 'LEGAL_INTERN',
        LEGALSECRETARY = <any> 'LEGAL_SECRETARY',
        OTHER = <any> 'OTHER',
        PARALEGAL = <any> 'PARALEGAL'
    }
}
