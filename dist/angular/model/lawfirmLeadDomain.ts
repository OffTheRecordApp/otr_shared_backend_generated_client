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
import { OutgoingContactDomain } from './outgoingContactDomain';


export interface LawfirmLeadDomain { 
    isLawyerEmailConfirmed?: boolean;
    isLawyerEnabled?: boolean;
    isTestLawfirm?: boolean;
    isTestLawyer?: boolean;
    isVacationMode?: boolean;
    lawfirmAddressState?: LawfirmLeadDomain.LawfirmAddressStateEnum;
    lawfirmCity?: string;
    lawfirmCreatedByUserId?: number;
    lawfirmId?: number;
    lawfirmName?: string;
    lawfirmPostalCode?: string;
    lawfirmState?: LawfirmLeadDomain.LawfirmStateEnum;
    lawyerEmailAddress?: string;
    lawyerFirstName?: string;
    lawyerLastName?: string;
    lawyerUserId?: number;
    leadOwnerFirstName?: string;
    leadOwnerLastName?: string;
    outgoingContacts?: Array<OutgoingContactDomain>;
}
export namespace LawfirmLeadDomain {
    export type LawfirmAddressStateEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    export const LawfirmAddressStateEnum = {
        Ak: 'AK' as LawfirmAddressStateEnum,
        Al: 'AL' as LawfirmAddressStateEnum,
        Ar: 'AR' as LawfirmAddressStateEnum,
        Az: 'AZ' as LawfirmAddressStateEnum,
        Ca: 'CA' as LawfirmAddressStateEnum,
        Co: 'CO' as LawfirmAddressStateEnum,
        Ct: 'CT' as LawfirmAddressStateEnum,
        Dc: 'DC' as LawfirmAddressStateEnum,
        De: 'DE' as LawfirmAddressStateEnum,
        Fl: 'FL' as LawfirmAddressStateEnum,
        Ga: 'GA' as LawfirmAddressStateEnum,
        Hi: 'HI' as LawfirmAddressStateEnum,
        Ia: 'IA' as LawfirmAddressStateEnum,
        Id: 'ID' as LawfirmAddressStateEnum,
        Il: 'IL' as LawfirmAddressStateEnum,
        In: 'IN' as LawfirmAddressStateEnum,
        Ks: 'KS' as LawfirmAddressStateEnum,
        Ky: 'KY' as LawfirmAddressStateEnum,
        La: 'LA' as LawfirmAddressStateEnum,
        Ma: 'MA' as LawfirmAddressStateEnum,
        Md: 'MD' as LawfirmAddressStateEnum,
        Me: 'ME' as LawfirmAddressStateEnum,
        Mi: 'MI' as LawfirmAddressStateEnum,
        Mn: 'MN' as LawfirmAddressStateEnum,
        Mo: 'MO' as LawfirmAddressStateEnum,
        Ms: 'MS' as LawfirmAddressStateEnum,
        Mt: 'MT' as LawfirmAddressStateEnum,
        Nc: 'NC' as LawfirmAddressStateEnum,
        Nd: 'ND' as LawfirmAddressStateEnum,
        Ne: 'NE' as LawfirmAddressStateEnum,
        Nh: 'NH' as LawfirmAddressStateEnum,
        Nj: 'NJ' as LawfirmAddressStateEnum,
        Nm: 'NM' as LawfirmAddressStateEnum,
        Nv: 'NV' as LawfirmAddressStateEnum,
        Ny: 'NY' as LawfirmAddressStateEnum,
        Oh: 'OH' as LawfirmAddressStateEnum,
        Ok: 'OK' as LawfirmAddressStateEnum,
        Or: 'OR' as LawfirmAddressStateEnum,
        Pa: 'PA' as LawfirmAddressStateEnum,
        Ri: 'RI' as LawfirmAddressStateEnum,
        Sc: 'SC' as LawfirmAddressStateEnum,
        Sd: 'SD' as LawfirmAddressStateEnum,
        Tn: 'TN' as LawfirmAddressStateEnum,
        Tx: 'TX' as LawfirmAddressStateEnum,
        Ut: 'UT' as LawfirmAddressStateEnum,
        Va: 'VA' as LawfirmAddressStateEnum,
        Vt: 'VT' as LawfirmAddressStateEnum,
        Wa: 'WA' as LawfirmAddressStateEnum,
        Wi: 'WI' as LawfirmAddressStateEnum,
        Wv: 'WV' as LawfirmAddressStateEnum,
        Wy: 'WY' as LawfirmAddressStateEnum
    };
    export type LawfirmStateEnum = 'ACCOUNT_CLOSED' | 'DUPLICATE' | 'ESTABLISHED' | 'FUTURE_LEAD' | 'IN_TRIAL' | 'LAWFIRM_INTERESTED' | 'LAWFIRM_LEAD' | 'LAWFIRM_NOT_INTERESTED' | 'NOT_INTERESTED_FEE_SPLITTING_ETHICS' | 'NOT_INTERESTED_REFUND_ETHICS' | 'ONBOARDING' | 'TEMPORARILY_TURNED_OFF' | 'TERMINATED_FRAUD' | 'TERMINATED_POOR_SERVICE' | 'TERMINATED_POOR_SUCCESS' | 'UNDER_REVIEW';
    export const LawfirmStateEnum = {
        AccountClosed: 'ACCOUNT_CLOSED' as LawfirmStateEnum,
        Duplicate: 'DUPLICATE' as LawfirmStateEnum,
        Established: 'ESTABLISHED' as LawfirmStateEnum,
        FutureLead: 'FUTURE_LEAD' as LawfirmStateEnum,
        InTrial: 'IN_TRIAL' as LawfirmStateEnum,
        LawfirmInterested: 'LAWFIRM_INTERESTED' as LawfirmStateEnum,
        LawfirmLead: 'LAWFIRM_LEAD' as LawfirmStateEnum,
        LawfirmNotInterested: 'LAWFIRM_NOT_INTERESTED' as LawfirmStateEnum,
        NotInterestedFeeSplittingEthics: 'NOT_INTERESTED_FEE_SPLITTING_ETHICS' as LawfirmStateEnum,
        NotInterestedRefundEthics: 'NOT_INTERESTED_REFUND_ETHICS' as LawfirmStateEnum,
        Onboarding: 'ONBOARDING' as LawfirmStateEnum,
        TemporarilyTurnedOff: 'TEMPORARILY_TURNED_OFF' as LawfirmStateEnum,
        TerminatedFraud: 'TERMINATED_FRAUD' as LawfirmStateEnum,
        TerminatedPoorService: 'TERMINATED_POOR_SERVICE' as LawfirmStateEnum,
        TerminatedPoorSuccess: 'TERMINATED_POOR_SUCCESS' as LawfirmStateEnum,
        UnderReview: 'UNDER_REVIEW' as LawfirmStateEnum
    };
}


