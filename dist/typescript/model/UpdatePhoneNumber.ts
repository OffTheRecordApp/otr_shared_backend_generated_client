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

export interface UpdatePhoneNumber {
    "entityType"?: UpdatePhoneNumber.EntityTypeEnum;
    "extension"?: string;
    "phoneNumber"?: string;
    "type"?: UpdatePhoneNumber.TypeEnum;
}

export namespace UpdatePhoneNumber {
    export enum EntityTypeEnum {
        CASE = <any> 'CASE',
        CASEPAYMENT = <any> 'CASE_PAYMENT',
        CITATION = <any> 'CITATION',
        COURT = <any> 'COURT',
        LAWFIRM = <any> 'LAWFIRM',
        LAWFIRMCASE = <any> 'LAWFIRM_CASE',
        LAWYER = <any> 'LAWYER',
        LINEITEM = <any> 'LINE_ITEM',
        STRIPECHARGE = <any> 'STRIPE_CHARGE',
        USER = <any> 'USER'
    }
    export enum TypeEnum {
        HOME = <any> 'HOME',
        MOBILE = <any> 'MOBILE',
        NOTSPECIFIED = <any> 'NOT_SPECIFIED',
        OFFICE = <any> 'OFFICE'
    }
}
