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
import { OutgoingContactDomain } from './';
/**
 *
 * @export
 * @interface LawfirmLeadDomain
 */
export interface LawfirmLeadDomain {
    /**
     *
     * @type {boolean}
     * @memberof LawfirmLeadDomain
     */
    isLawyerEmailConfirmed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmLeadDomain
     */
    isLawyerEnabled?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmLeadDomain
     */
    isTestLawfirm?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmLeadDomain
     */
    isTestLawyer?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmLeadDomain
     */
    isVacationMode?: boolean;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    lawfirmAddressState?: LawfirmLeadDomainLawfirmAddressStateEnum;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    lawfirmCity?: string;
    /**
     *
     * @type {number}
     * @memberof LawfirmLeadDomain
     */
    lawfirmCreatedByUserId?: number;
    /**
     *
     * @type {number}
     * @memberof LawfirmLeadDomain
     */
    lawfirmId?: number;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    lawfirmName?: string;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    lawfirmPostalCode?: string;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    lawfirmState?: LawfirmLeadDomainLawfirmStateEnum;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    lawyerEmailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    lawyerFirstName?: string;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    lawyerLastName?: string;
    /**
     *
     * @type {number}
     * @memberof LawfirmLeadDomain
     */
    lawyerUserId?: number;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    leadOwnerFirstName?: string;
    /**
     *
     * @type {string}
     * @memberof LawfirmLeadDomain
     */
    leadOwnerLastName?: string;
    /**
     *
     * @type {Array<OutgoingContactDomain>}
     * @memberof LawfirmLeadDomain
     */
    outgoingContacts?: Array<OutgoingContactDomain>;
}
export declare function LawfirmLeadDomainFromJSON(json: any): LawfirmLeadDomain;
export declare function LawfirmLeadDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawfirmLeadDomain;
export declare function LawfirmLeadDomainToJSON(value?: LawfirmLeadDomain | null): any;
/**
* @export
* @enum {string}
*/
export declare enum LawfirmLeadDomainLawfirmAddressStateEnum {
    AK = "AK",
    AL = "AL",
    AR = "AR",
    AZ = "AZ",
    CA = "CA",
    CO = "CO",
    CT = "CT",
    DC = "DC",
    DE = "DE",
    FL = "FL",
    GA = "GA",
    HI = "HI",
    IA = "IA",
    ID = "ID",
    IL = "IL",
    IN = "IN",
    KS = "KS",
    KY = "KY",
    LA = "LA",
    MA = "MA",
    MD = "MD",
    ME = "ME",
    MI = "MI",
    MN = "MN",
    MO = "MO",
    MS = "MS",
    MT = "MT",
    NC = "NC",
    ND = "ND",
    NE = "NE",
    NH = "NH",
    NJ = "NJ",
    NM = "NM",
    NV = "NV",
    NY = "NY",
    OH = "OH",
    OK = "OK",
    OR = "OR",
    PA = "PA",
    RI = "RI",
    SC = "SC",
    SD = "SD",
    TN = "TN",
    TX = "TX",
    UT = "UT",
    VA = "VA",
    VT = "VT",
    WA = "WA",
    WI = "WI",
    WV = "WV",
    WY = "WY"
}
/**
* @export
* @enum {string}
*/
export declare enum LawfirmLeadDomainLawfirmStateEnum {
    ACCOUNTCLOSED = "ACCOUNT_CLOSED",
    DUPLICATE = "DUPLICATE",
    ESTABLISHED = "ESTABLISHED",
    FUTURELEAD = "FUTURE_LEAD",
    INTRIAL = "IN_TRIAL",
    LAWFIRMINTERESTED = "LAWFIRM_INTERESTED",
    LAWFIRMLEAD = "LAWFIRM_LEAD",
    LAWFIRMNOTINTERESTED = "LAWFIRM_NOT_INTERESTED",
    NOTINTERESTEDFEESPLITTINGETHICS = "NOT_INTERESTED_FEE_SPLITTING_ETHICS",
    NOTINTERESTEDREFUNDETHICS = "NOT_INTERESTED_REFUND_ETHICS",
    ONBOARDING = "ONBOARDING",
    TEMPORARILYTURNEDOFF = "TEMPORARILY_TURNED_OFF",
    TERMINATEDFRAUD = "TERMINATED_FRAUD",
    TERMINATEDPOORSERVICE = "TERMINATED_POOR_SERVICE",
    TERMINATEDPOORSUCCESS = "TERMINATED_POOR_SUCCESS",
    UNDERREVIEW = "UNDER_REVIEW"
}