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


export interface Case { 
    bookingDateUtc?: Timestamp;
    caseId?: string;
    caseStatus?: Case.CaseStatusEnum;
    caseSubtotal?: number;
    otrReferralFee?: number;
    state?: Case.StateEnum;
}
export namespace Case {
    export type CaseStatusEnum = 'AMENDED_DOWN_WITHIN_CLASS' | 'AMENDED_FULL_FINE' | 'AMENDED_INCREASED_FINE' | 'AMENDED_NO_FINE' | 'AMENDED_REDUCED_FINE' | 'AMENDED_TO_INFRACTION' | 'AMENDED_TO_NMV' | 'CANCELLED_ATTORNEY_AT_FAULT' | 'CANCELLED_BY_LAWFIRM' | 'CANCELLED_BY_USER' | 'CANCELLED_DUPLICATE' | 'CANCELLED_NMV' | 'CANCELLED_NON_PAYMENT' | 'CANCELLED_NO_LAWFIRM' | 'CANCELLED_OVERDUE' | 'CANCELLED_TOO_SHORT_NOTICE' | 'CASE_IN_PROGRESS' | 'CLIENT_CONFIRMED' | 'CLIENT_CONFIRMED_UNPAID' | 'CLIENT_FIRED_LAWFIRM' | 'CLIENT_FORCED_LOSS' | 'CLIENT_PAID_FINE' | 'CLIENT_UNRESPONSIVE' | 'DEFERRED' | 'DISMISSED' | 'DIVERSION' | 'FEES_DISPUTED' | 'FINE_REDUCTION_ONLY' | 'LAWFIRM_WITHDRAWN' | 'LOST' | 'NO_LAWFIRM_AVAILABLE' | 'POINT_REDUCTION' | 'REFUSED_BY_LAWFIRM' | 'RESOLVED_NON_PAYMENT' | 'STALE' | 'TRAFFIC_SCHOOL' | 'UNCONFIRMED';
    export const CaseStatusEnum = {
        AmendedDownWithinClass: 'AMENDED_DOWN_WITHIN_CLASS' as CaseStatusEnum,
        AmendedFullFine: 'AMENDED_FULL_FINE' as CaseStatusEnum,
        AmendedIncreasedFine: 'AMENDED_INCREASED_FINE' as CaseStatusEnum,
        AmendedNoFine: 'AMENDED_NO_FINE' as CaseStatusEnum,
        AmendedReducedFine: 'AMENDED_REDUCED_FINE' as CaseStatusEnum,
        AmendedToInfraction: 'AMENDED_TO_INFRACTION' as CaseStatusEnum,
        AmendedToNmv: 'AMENDED_TO_NMV' as CaseStatusEnum,
        CancelledAttorneyAtFault: 'CANCELLED_ATTORNEY_AT_FAULT' as CaseStatusEnum,
        CancelledByLawfirm: 'CANCELLED_BY_LAWFIRM' as CaseStatusEnum,
        CancelledByUser: 'CANCELLED_BY_USER' as CaseStatusEnum,
        CancelledDuplicate: 'CANCELLED_DUPLICATE' as CaseStatusEnum,
        CancelledNmv: 'CANCELLED_NMV' as CaseStatusEnum,
        CancelledNonPayment: 'CANCELLED_NON_PAYMENT' as CaseStatusEnum,
        CancelledNoLawfirm: 'CANCELLED_NO_LAWFIRM' as CaseStatusEnum,
        CancelledOverdue: 'CANCELLED_OVERDUE' as CaseStatusEnum,
        CancelledTooShortNotice: 'CANCELLED_TOO_SHORT_NOTICE' as CaseStatusEnum,
        CaseInProgress: 'CASE_IN_PROGRESS' as CaseStatusEnum,
        ClientConfirmed: 'CLIENT_CONFIRMED' as CaseStatusEnum,
        ClientConfirmedUnpaid: 'CLIENT_CONFIRMED_UNPAID' as CaseStatusEnum,
        ClientFiredLawfirm: 'CLIENT_FIRED_LAWFIRM' as CaseStatusEnum,
        ClientForcedLoss: 'CLIENT_FORCED_LOSS' as CaseStatusEnum,
        ClientPaidFine: 'CLIENT_PAID_FINE' as CaseStatusEnum,
        ClientUnresponsive: 'CLIENT_UNRESPONSIVE' as CaseStatusEnum,
        Deferred: 'DEFERRED' as CaseStatusEnum,
        Dismissed: 'DISMISSED' as CaseStatusEnum,
        Diversion: 'DIVERSION' as CaseStatusEnum,
        FeesDisputed: 'FEES_DISPUTED' as CaseStatusEnum,
        FineReductionOnly: 'FINE_REDUCTION_ONLY' as CaseStatusEnum,
        LawfirmWithdrawn: 'LAWFIRM_WITHDRAWN' as CaseStatusEnum,
        Lost: 'LOST' as CaseStatusEnum,
        NoLawfirmAvailable: 'NO_LAWFIRM_AVAILABLE' as CaseStatusEnum,
        PointReduction: 'POINT_REDUCTION' as CaseStatusEnum,
        RefusedByLawfirm: 'REFUSED_BY_LAWFIRM' as CaseStatusEnum,
        ResolvedNonPayment: 'RESOLVED_NON_PAYMENT' as CaseStatusEnum,
        Stale: 'STALE' as CaseStatusEnum,
        TrafficSchool: 'TRAFFIC_SCHOOL' as CaseStatusEnum,
        Unconfirmed: 'UNCONFIRMED' as CaseStatusEnum
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


