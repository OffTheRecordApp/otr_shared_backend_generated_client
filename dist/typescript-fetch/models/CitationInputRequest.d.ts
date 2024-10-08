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
import { AddressDomainReq, CourtInputRequest, TimestampReq, TrafficViolationInputRequest } from './';
/**
 *
 * @export
 * @interface CitationInputRequest
 */
export interface CitationInputRequest {
    /**
     *
     * @type {AddressDomainReq}
     * @memberof CitationInputRequest
     */
    address?: AddressDomainReq;
    /**
     *
     * @type {string}
     * @memberof CitationInputRequest
     */
    cdlStatus?: CitationInputRequestCdlStatusEnum;
    /**
     *
     * @type {Date}
     * @memberof CitationInputRequest
     */
    citationIssueDate?: Date;
    /**
     *
     * @type {TimestampReq}
     * @memberof CitationInputRequest
     */
    citationIssueDateUTC?: TimestampReq;
    /**
     *
     * @type {string}
     * @memberof CitationInputRequest
     */
    clientEmailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof CitationInputRequest
     */
    clientFirstName?: string;
    /**
     *
     * @type {CourtInputRequest}
     * @memberof CitationInputRequest
     */
    court?: CourtInputRequest;
    /**
     *
     * @type {string}
     * @memberof CitationInputRequest
     */
    documentUrlToConvert?: string;
    /**
     *
     * @type {number}
     * @memberof CitationInputRequest
     */
    fineAmount?: number;
    /**
     *
     * @type {boolean}
     * @memberof CitationInputRequest
     */
    involvesAccident?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CitationInputRequest
     */
    isDismissedFromContactList?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CitationInputRequest
     */
    isPastDue?: boolean;
    /**
     *
     * @type {string}
     * @memberof CitationInputRequest
     */
    state?: CitationInputRequestStateEnum;
    /**
     *
     * @type {string}
     * @memberof CitationInputRequest
     */
    ticketNumber?: string;
    /**
     *
     * @type {number}
     * @memberof CitationInputRequest
     */
    userId?: number;
    /**
     *
     * @type {number}
     * @memberof CitationInputRequest
     */
    violationCount?: number;
    /**
     *
     * @type {Array<TrafficViolationInputRequest>}
     * @memberof CitationInputRequest
     */
    violations?: Array<TrafficViolationInputRequest>;
}
export declare function CitationInputRequestFromJSON(json: any): CitationInputRequest;
export declare function CitationInputRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CitationInputRequest;
export declare function CitationInputRequestToJSON(value?: CitationInputRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CitationInputRequestCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = "CDL_IN_COMMERCIAL_VEHICLE",
    CDLINPERSONALVEHICLE = "CDL_IN_PERSONAL_VEHICLE",
    NOCDL = "NO_CDL"
}
/**
* @export
* @enum {string}
*/
export declare enum CitationInputRequestStateEnum {
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
