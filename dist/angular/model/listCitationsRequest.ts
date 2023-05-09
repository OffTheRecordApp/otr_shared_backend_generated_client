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


export interface ListCitationsRequest { 
    caseStatusCategoryFilter?: ListCitationsRequest.CaseStatusCategoryFilterEnum;
    caseStatusFilterList?: Array<ListCitationsRequest.CaseStatusFilterListEnum>;
    countyFilter?: string;
    endDate?: string;
    length?: number;
    page?: number;
    sortMap?: { [key: string]: string; };
    startDate?: string;
    stateFilterList?: Array<ListCitationsRequest.StateFilterListEnum>;
    timeZoneId?: string;
}
export namespace ListCitationsRequest {
    export type CaseStatusCategoryFilterEnum = 'ACTIVE' | 'CANCELLED' | 'RESOLVED' | 'UNCONFIRMED';
    export const CaseStatusCategoryFilterEnum = {
        Active: 'ACTIVE' as CaseStatusCategoryFilterEnum,
        Cancelled: 'CANCELLED' as CaseStatusCategoryFilterEnum,
        Resolved: 'RESOLVED' as CaseStatusCategoryFilterEnum,
        Unconfirmed: 'UNCONFIRMED' as CaseStatusCategoryFilterEnum
    };
    export type CaseStatusFilterListEnum = 'AMENDED_DOWN_WITHIN_CLASS' | 'AMENDED_FULL_FINE' | 'AMENDED_INCREASED_FINE' | 'AMENDED_NO_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_TO_INFRACTION' | 'AMENDED_TO_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_BY_USER' | 'CANCELLED_DUPLICATE' | 'CANCELLED_NMV' | 'CANCELLED_NON_PAYMENT' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE' | 'CASE_IN_PROGRESS' | 'CLIENT_CONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'CLIENT_FIRED_LAWFIRM' | 'CLIENT_FORCED_LOSS' | 'CLIENT_PAID_FINE' | 'CLIENT_UNRESPONSIVE' | 'DEFERRED' | 'DISMISSED' | 'DIVERSION' | 'FEES_DISPUTED' | 'FINE_REDUCTION_ONLY' | 'LAWFIRM_WITHDRAWN' | 'LOST' | 'NO_LAWFIRM_AVAILABLE' | 'POINT_REDUCTION' | 'REFUSED_BY_LAWFIRM' | 'RESOLVED_NON_PAYMENT' | 'STALE' | 'TRAFFIC_SCHOOL' | 'UNCONFIRMED';
    export const CaseStatusFilterListEnum = {
        AmendedDownWithinClass: 'AMENDED_DOWN_WITHIN_CLASS' as CaseStatusFilterListEnum,
        AmendedFullFine: 'AMENDED_FULL_FINE' as CaseStatusFilterListEnum,
        AmendedIncreasedFine: 'AMENDED_INCREASED_FINE' as CaseStatusFilterListEnum,
        AmendedNoFine: 'AMENDED_NO_FINE' as CaseStatusFilterListEnum,
        AmendedReducedFine: 'AMENDED_REDUCED_FINE' as CaseStatusFilterListEnum,
        AmendedToInfraction: 'AMENDED_TO_INFRACTION' as CaseStatusFilterListEnum,
        AmendedToNmv: 'AMENDED_TO_NMV' as CaseStatusFilterListEnum,
        CancelledAttorneyAtFault: 'CANCELLED_ATTORNEY_AT_FAULT' as CaseStatusFilterListEnum,
        CancelledByLawfirm: 'CANCELLED_BY_LAWFIRM' as CaseStatusFilterListEnum,
        CancelledByUser: 'CANCELLED_BY_USER' as CaseStatusFilterListEnum,
        CancelledDuplicate: 'CANCELLED_DUPLICATE' as CaseStatusFilterListEnum,
        CancelledNmv: 'CANCELLED_NMV' as CaseStatusFilterListEnum,
        CancelledNonPayment: 'CANCELLED_NON_PAYMENT' as CaseStatusFilterListEnum,
        CancelledNoLawfirm: 'CANCELLED_NO_LAWFIRM' as CaseStatusFilterListEnum,
        CancelledOverdue: 'CANCELLED_OVERDUE' as CaseStatusFilterListEnum,
        CancelledTooShortNotice: 'CANCELLED_TOO_SHORT_NOTICE' as CaseStatusFilterListEnum,
        CaseInProgress: 'CASE_IN_PROGRESS' as CaseStatusFilterListEnum,
        ClientConfirmed: 'CLIENT_CONFIRMED' as CaseStatusFilterListEnum,
        ClientConfirmedUnpaid: 'CLIENT_CONFIRMED_UNPAID' as CaseStatusFilterListEnum,
        ClientFiredLawfirm: 'CLIENT_FIRED_LAWFIRM' as CaseStatusFilterListEnum,
        ClientForcedLoss: 'CLIENT_FORCED_LOSS' as CaseStatusFilterListEnum,
        ClientPaidFine: 'CLIENT_PAID_FINE' as CaseStatusFilterListEnum,
        ClientUnresponsive: 'CLIENT_UNRESPONSIVE' as CaseStatusFilterListEnum,
        Deferred: 'DEFERRED' as CaseStatusFilterListEnum,
        Dismissed: 'DISMISSED' as CaseStatusFilterListEnum,
        Diversion: 'DIVERSION' as CaseStatusFilterListEnum,
        FeesDisputed: 'FEES_DISPUTED' as CaseStatusFilterListEnum,
        FineReductionOnly: 'FINE_REDUCTION_ONLY' as CaseStatusFilterListEnum,
        LawfirmWithdrawn: 'LAWFIRM_WITHDRAWN' as CaseStatusFilterListEnum,
        Lost: 'LOST' as CaseStatusFilterListEnum,
        NoLawfirmAvailable: 'NO_LAWFIRM_AVAILABLE' as CaseStatusFilterListEnum,
        PointReduction: 'POINT_REDUCTION' as CaseStatusFilterListEnum,
        RefusedByLawfirm: 'REFUSED_BY_LAWFIRM' as CaseStatusFilterListEnum,
        ResolvedNonPayment: 'RESOLVED_NON_PAYMENT' as CaseStatusFilterListEnum,
        Stale: 'STALE' as CaseStatusFilterListEnum,
        TrafficSchool: 'TRAFFIC_SCHOOL' as CaseStatusFilterListEnum,
        Unconfirmed: 'UNCONFIRMED' as CaseStatusFilterListEnum
    };
    export type StateFilterListEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    export const StateFilterListEnum = {
        Ak: 'AK' as StateFilterListEnum,
        Al: 'AL' as StateFilterListEnum,
        Ar: 'AR' as StateFilterListEnum,
        Az: 'AZ' as StateFilterListEnum,
        Ca: 'CA' as StateFilterListEnum,
        Co: 'CO' as StateFilterListEnum,
        Ct: 'CT' as StateFilterListEnum,
        Dc: 'DC' as StateFilterListEnum,
        De: 'DE' as StateFilterListEnum,
        Fl: 'FL' as StateFilterListEnum,
        Ga: 'GA' as StateFilterListEnum,
        Hi: 'HI' as StateFilterListEnum,
        Ia: 'IA' as StateFilterListEnum,
        Id: 'ID' as StateFilterListEnum,
        Il: 'IL' as StateFilterListEnum,
        In: 'IN' as StateFilterListEnum,
        Ks: 'KS' as StateFilterListEnum,
        Ky: 'KY' as StateFilterListEnum,
        La: 'LA' as StateFilterListEnum,
        Ma: 'MA' as StateFilterListEnum,
        Md: 'MD' as StateFilterListEnum,
        Me: 'ME' as StateFilterListEnum,
        Mi: 'MI' as StateFilterListEnum,
        Mn: 'MN' as StateFilterListEnum,
        Mo: 'MO' as StateFilterListEnum,
        Ms: 'MS' as StateFilterListEnum,
        Mt: 'MT' as StateFilterListEnum,
        Nc: 'NC' as StateFilterListEnum,
        Nd: 'ND' as StateFilterListEnum,
        Ne: 'NE' as StateFilterListEnum,
        Nh: 'NH' as StateFilterListEnum,
        Nj: 'NJ' as StateFilterListEnum,
        Nm: 'NM' as StateFilterListEnum,
        Nv: 'NV' as StateFilterListEnum,
        Ny: 'NY' as StateFilterListEnum,
        Oh: 'OH' as StateFilterListEnum,
        Ok: 'OK' as StateFilterListEnum,
        Or: 'OR' as StateFilterListEnum,
        Pa: 'PA' as StateFilterListEnum,
        Ri: 'RI' as StateFilterListEnum,
        Sc: 'SC' as StateFilterListEnum,
        Sd: 'SD' as StateFilterListEnum,
        Tn: 'TN' as StateFilterListEnum,
        Tx: 'TX' as StateFilterListEnum,
        Ut: 'UT' as StateFilterListEnum,
        Va: 'VA' as StateFilterListEnum,
        Vt: 'VT' as StateFilterListEnum,
        Wa: 'WA' as StateFilterListEnum,
        Wi: 'WI' as StateFilterListEnum,
        Wv: 'WV' as StateFilterListEnum,
        Wy: 'WY' as StateFilterListEnum
    };
}

