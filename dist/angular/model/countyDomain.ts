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


export interface CountyDomain { 
    countyId?: number;
    countyName?: string;
    stateCode?: CountyDomain.StateCodeEnum;
}
export namespace CountyDomain {
    export type StateCodeEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    export const StateCodeEnum = {
        Ak: 'AK' as StateCodeEnum,
        Al: 'AL' as StateCodeEnum,
        Ar: 'AR' as StateCodeEnum,
        Az: 'AZ' as StateCodeEnum,
        Ca: 'CA' as StateCodeEnum,
        Co: 'CO' as StateCodeEnum,
        Ct: 'CT' as StateCodeEnum,
        Dc: 'DC' as StateCodeEnum,
        De: 'DE' as StateCodeEnum,
        Fl: 'FL' as StateCodeEnum,
        Ga: 'GA' as StateCodeEnum,
        Hi: 'HI' as StateCodeEnum,
        Ia: 'IA' as StateCodeEnum,
        Id: 'ID' as StateCodeEnum,
        Il: 'IL' as StateCodeEnum,
        In: 'IN' as StateCodeEnum,
        Ks: 'KS' as StateCodeEnum,
        Ky: 'KY' as StateCodeEnum,
        La: 'LA' as StateCodeEnum,
        Ma: 'MA' as StateCodeEnum,
        Md: 'MD' as StateCodeEnum,
        Me: 'ME' as StateCodeEnum,
        Mi: 'MI' as StateCodeEnum,
        Mn: 'MN' as StateCodeEnum,
        Mo: 'MO' as StateCodeEnum,
        Ms: 'MS' as StateCodeEnum,
        Mt: 'MT' as StateCodeEnum,
        Nc: 'NC' as StateCodeEnum,
        Nd: 'ND' as StateCodeEnum,
        Ne: 'NE' as StateCodeEnum,
        Nh: 'NH' as StateCodeEnum,
        Nj: 'NJ' as StateCodeEnum,
        Nm: 'NM' as StateCodeEnum,
        Nv: 'NV' as StateCodeEnum,
        Ny: 'NY' as StateCodeEnum,
        Oh: 'OH' as StateCodeEnum,
        Ok: 'OK' as StateCodeEnum,
        Or: 'OR' as StateCodeEnum,
        Pa: 'PA' as StateCodeEnum,
        Ri: 'RI' as StateCodeEnum,
        Sc: 'SC' as StateCodeEnum,
        Sd: 'SD' as StateCodeEnum,
        Tn: 'TN' as StateCodeEnum,
        Tx: 'TX' as StateCodeEnum,
        Ut: 'UT' as StateCodeEnum,
        Va: 'VA' as StateCodeEnum,
        Vt: 'VT' as StateCodeEnum,
        Wa: 'WA' as StateCodeEnum,
        Wi: 'WI' as StateCodeEnum,
        Wv: 'WV' as StateCodeEnum,
        Wy: 'WY' as StateCodeEnum
    };
}

