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
import { TimestampReq } from './timestampReq';


export interface PhoneNumberDomainReq { 
    creationDateUtc?: TimestampReq;
    entityType?: PhoneNumberDomainReq.EntityTypeEnum;
    extension?: string;
    lastUpdatedDateUtc?: TimestampReq;
    phoneNumber?: string;
    phoneNumberId?: number;
    referenceId?: number;
    type?: PhoneNumberDomainReq.TypeEnum;
}
export namespace PhoneNumberDomainReq {
    export type EntityTypeEnum = 'CASE' | 'CASE_PAYMENT' | 'CITATION' | 'COURT' | 'LAWFIRM' | 'LAWFIRM_CASE' | 'LAWYER' | 'LINE_ITEM' | 'STRIPE_CHARGE' | 'USER';
    export const EntityTypeEnum = {
        Case: 'CASE' as EntityTypeEnum,
        CasePayment: 'CASE_PAYMENT' as EntityTypeEnum,
        Citation: 'CITATION' as EntityTypeEnum,
        Court: 'COURT' as EntityTypeEnum,
        Lawfirm: 'LAWFIRM' as EntityTypeEnum,
        LawfirmCase: 'LAWFIRM_CASE' as EntityTypeEnum,
        Lawyer: 'LAWYER' as EntityTypeEnum,
        LineItem: 'LINE_ITEM' as EntityTypeEnum,
        StripeCharge: 'STRIPE_CHARGE' as EntityTypeEnum,
        User: 'USER' as EntityTypeEnum
    };
    export type TypeEnum = 'HOME' | 'MOBILE' | 'NOT_SPECIFIED' | 'OFFICE';
    export const TypeEnum = {
        Home: 'HOME' as TypeEnum,
        Mobile: 'MOBILE' as TypeEnum,
        NotSpecified: 'NOT_SPECIFIED' as TypeEnum,
        Office: 'OFFICE' as TypeEnum
    };
}


