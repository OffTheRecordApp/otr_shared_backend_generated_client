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
import { CountryRegion } from './countryRegion';


export interface AddressDomainRes { 
    addressId?: number;
    addressLine1?: string;
    addressLine2?: string;
    addressedTo?: string;
    city?: string;
    countryCode?: string;
    entityType?: AddressDomainRes.EntityTypeEnum;
    fullAddress?: string;
    phoneNumber?: string;
    postalCode?: string;
    referenceId?: number;
    region?: CountryRegion;
    state?: AddressDomainRes.StateEnum;
    timeZoneName?: string;
}
export namespace AddressDomainRes {
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
    export type StateEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    export const StateEnum = {
        Ak: 'AK' as StateEnum,
        Al: 'AL' as StateEnum,
        Ar: 'AR' as StateEnum,
        Az: 'AZ' as StateEnum,
        Ca: 'CA' as StateEnum,
        Co: 'CO' as StateEnum,
        Ct: 'CT' as StateEnum,
        Dc: 'DC' as StateEnum,
        De: 'DE' as StateEnum,
        Fl: 'FL' as StateEnum,
        Ga: 'GA' as StateEnum,
        Hi: 'HI' as StateEnum,
        Ia: 'IA' as StateEnum,
        Id: 'ID' as StateEnum,
        Il: 'IL' as StateEnum,
        In: 'IN' as StateEnum,
        Ks: 'KS' as StateEnum,
        Ky: 'KY' as StateEnum,
        La: 'LA' as StateEnum,
        Ma: 'MA' as StateEnum,
        Md: 'MD' as StateEnum,
        Me: 'ME' as StateEnum,
        Mi: 'MI' as StateEnum,
        Mn: 'MN' as StateEnum,
        Mo: 'MO' as StateEnum,
        Ms: 'MS' as StateEnum,
        Mt: 'MT' as StateEnum,
        Nc: 'NC' as StateEnum,
        Nd: 'ND' as StateEnum,
        Ne: 'NE' as StateEnum,
        Nh: 'NH' as StateEnum,
        Nj: 'NJ' as StateEnum,
        Nm: 'NM' as StateEnum,
        Nv: 'NV' as StateEnum,
        Ny: 'NY' as StateEnum,
        Oh: 'OH' as StateEnum,
        Ok: 'OK' as StateEnum,
        Or: 'OR' as StateEnum,
        Pa: 'PA' as StateEnum,
        Ri: 'RI' as StateEnum,
        Sc: 'SC' as StateEnum,
        Sd: 'SD' as StateEnum,
        Tn: 'TN' as StateEnum,
        Tx: 'TX' as StateEnum,
        Ut: 'UT' as StateEnum,
        Va: 'VA' as StateEnum,
        Vt: 'VT' as StateEnum,
        Wa: 'WA' as StateEnum,
        Wi: 'WI' as StateEnum,
        Wv: 'WV' as StateEnum,
        Wy: 'WY' as StateEnum
    };
}


