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
export interface LawfirmBookingSummary {
    bookingsCount?: number;
    lawfirmId?: number;
    lawfirmName?: string;
    lawfirmTransactions?: number;
    otrPercent?: number;
    otrRevenue?: number;
    state?: LawfirmBookingSummary.StateEnum;
}
export declare namespace LawfirmBookingSummary {
    type StateEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    const StateEnum: {
        Ak: StateEnum;
        Al: StateEnum;
        Ar: StateEnum;
        Az: StateEnum;
        Ca: StateEnum;
        Co: StateEnum;
        Ct: StateEnum;
        Dc: StateEnum;
        De: StateEnum;
        Fl: StateEnum;
        Ga: StateEnum;
        Hi: StateEnum;
        Ia: StateEnum;
        Id: StateEnum;
        Il: StateEnum;
        In: StateEnum;
        Ks: StateEnum;
        Ky: StateEnum;
        La: StateEnum;
        Ma: StateEnum;
        Md: StateEnum;
        Me: StateEnum;
        Mi: StateEnum;
        Mn: StateEnum;
        Mo: StateEnum;
        Ms: StateEnum;
        Mt: StateEnum;
        Nc: StateEnum;
        Nd: StateEnum;
        Ne: StateEnum;
        Nh: StateEnum;
        Nj: StateEnum;
        Nm: StateEnum;
        Nv: StateEnum;
        Ny: StateEnum;
        Oh: StateEnum;
        Ok: StateEnum;
        Or: StateEnum;
        Pa: StateEnum;
        Ri: StateEnum;
        Sc: StateEnum;
        Sd: StateEnum;
        Tn: StateEnum;
        Tx: StateEnum;
        Ut: StateEnum;
        Va: StateEnum;
        Vt: StateEnum;
        Wa: StateEnum;
        Wi: StateEnum;
        Wv: StateEnum;
        Wy: StateEnum;
    };
}
