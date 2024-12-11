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

export interface StripeCustomerAccountDomain {
    "entityId"?: number;
    "entityType"?: StripeCustomerAccountDomain.EntityTypeEnum;
    "stripeCustomerAccountId"?: string;
    "stripePlatformAccountId"?: string;
}

export namespace StripeCustomerAccountDomain {
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
}
