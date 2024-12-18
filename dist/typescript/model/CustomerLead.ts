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

export interface CustomerLead {
    "caseDescription"?: string;
    "channel"?: CustomerLead.ChannelEnum;
    "emailAddress": string;
    "fineInCents"?: number;
    "firstName": string;
    "hasCourtDate"?: boolean;
    "lastName": string;
    "licenseType"?: string;
    "phoneNumber"?: string;
    "state"?: CustomerLead.StateEnum;
    "violation"?: string;
    "zipCode"?: string;
}

export namespace CustomerLead {
    export enum ChannelEnum {
        DMVCOM = <any> 'DMV_COM',
        DMVORG = <any> 'DMV_ORG',
        EDUCATEDDRIVER = <any> 'EDUCATED_DRIVER',
        NOLO = <any> 'NOLO',
        PHOTOENFORCED = <any> 'PHOTO_ENFORCED',
        RIDESHAREGUY = <any> 'RIDE_SHARE_GUY',
        RIDESHARINGDRIVER = <any> 'RIDE_SHARING_DRIVER',
        UNKNOWN = <any> 'UNKNOWN',
        WTL = <any> 'WTL'
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
