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
import { Timestamp } from './timestamp';
export interface PhoneNumberDomain {
    creationDateUtc?: Timestamp;
    entityType?: PhoneNumberDomain.EntityTypeEnum;
    extension?: string;
    lastUpdatedDateUtc?: Timestamp;
    phoneNumber?: string;
    phoneNumberId?: number;
    referenceId?: number;
    type?: PhoneNumberDomain.TypeEnum;
}
export declare namespace PhoneNumberDomain {
    type EntityTypeEnum = 'CASE' | 'CASE_PAYMENT' | 'CITATION' | 'COURT' | 'LAWFIRM' | 'LAWFIRM_CASE' | 'LAWYER' | 'LINE_ITEM' | 'STRIPE_CHARGE' | 'USER';
    const EntityTypeEnum: {
        Case: EntityTypeEnum;
        CasePayment: EntityTypeEnum;
        Citation: EntityTypeEnum;
        Court: EntityTypeEnum;
        Lawfirm: EntityTypeEnum;
        LawfirmCase: EntityTypeEnum;
        Lawyer: EntityTypeEnum;
        LineItem: EntityTypeEnum;
        StripeCharge: EntityTypeEnum;
        User: EntityTypeEnum;
    };
    type TypeEnum = 'HOME' | 'MOBILE' | 'NOT_SPECIFIED' | 'OFFICE';
    const TypeEnum: {
        Home: TypeEnum;
        Mobile: TypeEnum;
        NotSpecified: TypeEnum;
        Office: TypeEnum;
    };
}