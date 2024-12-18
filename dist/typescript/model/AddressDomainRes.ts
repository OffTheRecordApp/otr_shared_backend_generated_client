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

export interface AddressDomainRes {
    "addressId"?: number;
    "addressLine1"?: string;
    "addressLine2"?: string;
    "addressedTo"?: string;
    "city"?: string;
    "countryCode"?: string;
    "entityType"?: AddressDomainRes.EntityTypeEnum;
    "fullAddress"?: string;
    "phoneNumber"?: string;
    "postalCode"?: string;
    "referenceId"?: number;
    "region"?: models.CountryRegion;
    "state"?: AddressDomainRes.StateEnum;
    "timeZoneName"?: string;
}

export namespace AddressDomainRes {
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
    export enum StateEnum {
        AK = <any> 'AK',
        AL = <any> 'AL',
        AR = <any> 'AR',
        AZ = <any> 'AZ',
        CA = <any> 'CA',
        CO = <any> 'CO',
        CT = <any> 'CT',
        DC = <any> 'DC',
        DE = <any> 'DE',
        FL = <any> 'FL',
        GA = <any> 'GA',
        HI = <any> 'HI',
        IA = <any> 'IA',
        ID = <any> 'ID',
        IL = <any> 'IL',
        IN = <any> 'IN',
        KS = <any> 'KS',
        KY = <any> 'KY',
        LA = <any> 'LA',
        MA = <any> 'MA',
        MD = <any> 'MD',
        ME = <any> 'ME',
        MI = <any> 'MI',
        MN = <any> 'MN',
        MO = <any> 'MO',
        MS = <any> 'MS',
        MT = <any> 'MT',
        NC = <any> 'NC',
        ND = <any> 'ND',
        NE = <any> 'NE',
        NH = <any> 'NH',
        NJ = <any> 'NJ',
        NM = <any> 'NM',
        NV = <any> 'NV',
        NY = <any> 'NY',
        OH = <any> 'OH',
        OK = <any> 'OK',
        OR = <any> 'OR',
        PA = <any> 'PA',
        RI = <any> 'RI',
        SC = <any> 'SC',
        SD = <any> 'SD',
        TN = <any> 'TN',
        TX = <any> 'TX',
        UT = <any> 'UT',
        VA = <any> 'VA',
        VT = <any> 'VT',
        WA = <any> 'WA',
        WI = <any> 'WI',
        WV = <any> 'WV',
        WY = <any> 'WY'
    }
}
