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
import { Timestamp } from './';
/**
 *
 * @export
 * @interface Case
 */
export interface Case {
    /**
     *
     * @type {string}
     * @memberof Case
     */
    bookingDate?: string;
    /**
     *
     * @type {Timestamp}
     * @memberof Case
     */
    bookingDateUtc?: Timestamp;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    caseId?: string;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    caseStatus?: CaseCaseStatusEnum;
    /**
     *
     * @type {number}
     * @memberof Case
     */
    clientTotalCost?: number;
    /**
     *
     * @type {Date}
     * @memberof Case
     */
    dob?: Date;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    gender?: CaseGenderEnum;
    /**
     *
     * @type {boolean}
     * @memberof Case
     */
    hasSubscriptionPlan?: boolean;
    /**
     *
     * @type {number}
     * @memberof Case
     */
    lawfirmId?: number;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    lawfirmName?: string;
    /**
     *
     * @type {number}
     * @memberof Case
     */
    numPayments?: number;
    /**
     *
     * @type {number}
     * @memberof Case
     */
    otrPercent?: number;
    /**
     *
     * @type {number}
     * @memberof Case
     */
    otrRevenue?: number;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    race?: CaseRaceEnum;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    state?: CaseStateEnum;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    statusCategory?: CaseStatusCategoryEnum;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    userFirstName?: string;
    /**
     *
     * @type {number}
     * @memberof Case
     */
    userId?: number;
    /**
     *
     * @type {string}
     * @memberof Case
     */
    userLastName?: string;
}
export declare function CaseFromJSON(json: any): Case;
export declare function CaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Case;
export declare function CaseToJSON(value?: Case | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CaseCaseStatusEnum {
    AMENDEDDOWNWITHINCLASS = "AMENDED_DOWN_WITHIN_CLASS",
    AMENDEDFULLFINE = "AMENDED_FULL_FINE",
    AMENDEDINCREASEDFINE = "AMENDED_INCREASED_FINE",
    AMENDEDNOFINE = "AMENDED_NO_FINE",
    AMENDEDREDUCEDFINE = "AMENDED_REDUCED_FINE",
    AMENDEDTOINFRACTION = "AMENDED_TO_INFRACTION",
    AMENDEDTONMV = "AMENDED_TO_NMV",
    CANCELLEDATTORNEYATFAULT = "CANCELLED_ATTORNEY_AT_FAULT",
    CANCELLEDBYLAWFIRM = "CANCELLED_BY_LAWFIRM",
    CANCELLEDBYUSER = "CANCELLED_BY_USER",
    CANCELLEDDUPLICATE = "CANCELLED_DUPLICATE",
    CANCELLEDNMV = "CANCELLED_NMV",
    CANCELLEDNONPAYMENT = "CANCELLED_NON_PAYMENT",
    CANCELLEDNOLAWFIRM = "CANCELLED_NO_LAWFIRM",
    CANCELLEDOVERDUE = "CANCELLED_OVERDUE",
    CANCELLEDTOOSHORTNOTICE = "CANCELLED_TOO_SHORT_NOTICE",
    CASEINPROGRESS = "CASE_IN_PROGRESS",
    CLIENTCONFIRMED = "CLIENT_CONFIRMED",
    CLIENTCONFIRMEDUNPAID = "CLIENT_CONFIRMED_UNPAID",
    CLIENTFIREDLAWFIRM = "CLIENT_FIRED_LAWFIRM",
    CLIENTFORCEDLOSS = "CLIENT_FORCED_LOSS",
    CLIENTPAIDFINE = "CLIENT_PAID_FINE",
    CLIENTUNRESPONSIVE = "CLIENT_UNRESPONSIVE",
    DEFERRED = "DEFERRED",
    DISMISSED = "DISMISSED",
    DIVERSION = "DIVERSION",
    FEESDISPUTED = "FEES_DISPUTED",
    FINEREDUCTIONONLY = "FINE_REDUCTION_ONLY",
    LAWFIRMWITHDRAWN = "LAWFIRM_WITHDRAWN",
    LOST = "LOST",
    NOLAWFIRMAVAILABLE = "NO_LAWFIRM_AVAILABLE",
    POINTREDUCTION = "POINT_REDUCTION",
    REFUSEDBYLAWFIRM = "REFUSED_BY_LAWFIRM",
    RESOLVEDNONPAYMENT = "RESOLVED_NON_PAYMENT",
    STALE = "STALE",
    TRAFFICSCHOOL = "TRAFFIC_SCHOOL",
    UNCONFIRMED = "UNCONFIRMED"
}
/**
* @export
* @enum {string}
*/
export declare enum CaseGenderEnum {
    FEMALE = "FEMALE",
    MALE = "MALE",
    NOTAVAILABLE = "NOT_AVAILABLE",
    NOTLISTED = "NOT_LISTED",
    UNVERIFIED = "UNVERIFIED",
    X = "X"
}
/**
* @export
* @enum {string}
*/
export declare enum CaseRaceEnum {
    ASIAN = "ASIAN",
    BLACK = "BLACK",
    HISPANIC = "HISPANIC",
    MIDDLEEASTERN = "MIDDLE_EASTERN",
    NATIVE = "NATIVE",
    NOTAVAILABLE = "NOT_AVAILABLE",
    PACIFICISLANDER = "PACIFIC_ISLANDER",
    TWOORMORE = "TWO_OR_MORE",
    UNKNOWN = "UNKNOWN",
    UNVERIFIED = "UNVERIFIED",
    WHITE = "WHITE"
}
/**
* @export
* @enum {string}
*/
export declare enum CaseStateEnum {
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
export declare enum CaseStatusCategoryEnum {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    RESOLVED = "RESOLVED",
    UNCONFIRMED = "UNCONFIRMED"
}
