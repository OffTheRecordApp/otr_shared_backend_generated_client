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


export interface DismissPhoneLeadRequest { 
    entityType?: DismissPhoneLeadRequest.EntityTypeEnum;
    referenceIdList?: Array<string>;
}
export namespace DismissPhoneLeadRequest {
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
}

