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
import { AddressDomainRes, CourtDomainRes, PureDate, TimestampRes, ViolationModel } from './';
/**
 *
 * @export
 * @interface CitationModelRes
 */
export interface CitationModelRes {
    /**
     *
     * @type {AddressDomainRes}
     * @memberof CitationModelRes
     */
    address?: AddressDomainRes;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    cdlStatus?: CitationModelResCdlStatusEnum;
    /**
     *
     * @type {number}
     * @memberof CitationModelRes
     */
    citationId?: number;
    /**
     *
     * @type {PureDate}
     * @memberof CitationModelRes
     */
    citationIssueDate?: PureDate;
    /**
     *
     * @type {TimestampRes}
     * @memberof CitationModelRes
     */
    citationIssueDateUTC?: TimestampRes;
    /**
     *
     * @type {boolean}
     * @memberof CitationModelRes
     */
    citationLockedForClient?: boolean;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    clientEmailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    clientFirstName?: string;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    clientType?: CitationModelResClientTypeEnum;
    /**
     *
     * @type {CourtDomainRes}
     * @memberof CitationModelRes
     */
    court?: CourtDomainRes;
    /**
     *
     * @type {TimestampRes}
     * @memberof CitationModelRes
     */
    creationDateUTC?: TimestampRes;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    documentUrlToConvert?: string;
    /**
     *
     * @type {number}
     * @memberof CitationModelRes
     */
    fineAmount?: number;
    /**
     *
     * @type {boolean}
     * @memberof CitationModelRes
     */
    hasCase?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CitationModelRes
     */
    hasCitationImage?: boolean;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    hubspotContactId?: string;
    /**
     *
     * @type {boolean}
     * @memberof CitationModelRes
     */
    involvesAccident?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CitationModelRes
     */
    isDeleted?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CitationModelRes
     */
    isDismissedFromContactList?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CitationModelRes
     */
    isPastDue?: boolean;
    /**
     *
     * @type {number}
     * @memberof CitationModelRes
     */
    originalPointCount?: number;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    signedTicketImageUrl?: string;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    state?: CitationModelResStateEnum;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    ticketImageUrl?: string;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    ticketLocationTags?: string;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    ticketNumber?: string;
    /**
     *
     * @type {number}
     * @memberof CitationModelRes
     */
    userId?: number;
    /**
     *
     * @type {string}
     * @memberof CitationModelRes
     */
    violationCategoryName?: string;
    /**
     *
     * @type {number}
     * @memberof CitationModelRes
     */
    violationCount?: number;
    /**
     *
     * @type {Array<ViolationModel>}
     * @memberof CitationModelRes
     */
    violations?: Array<ViolationModel>;
}
export declare function CitationModelResFromJSON(json: any): CitationModelRes;
export declare function CitationModelResFromJSONTyped(json: any, ignoreDiscriminator: boolean): CitationModelRes;
export declare function CitationModelResToJSON(value?: CitationModelRes | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CitationModelResCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = "CDL_IN_COMMERCIAL_VEHICLE",
    CDLINPERSONALVEHICLE = "CDL_IN_PERSONAL_VEHICLE",
    NOCDL = "NO_CDL"
}
/**
* @export
* @enum {string}
*/
export declare enum CitationModelResClientTypeEnum {
    ANDROID = "ANDROID",
    DESKTOPWEBAPP = "DESKTOP_WEBAPP",
    DMVGO = "DMV_GO",
    DMVORG = "DMV_ORG",
    EMAIL = "EMAIL",
    FRESHDESK = "FRESH_DESK",
    IOS = "IOS",
    LOCALHOST = "LOCALHOST",
    MOBILEWEBAPP = "MOBILE_WEBAPP",
    OTRADMINCONSOLE = "OTR_ADMIN_CONSOLE",
    OTRADMINCONSOLEDEVO = "OTR_ADMIN_CONSOLE_DEVO",
    OTRADMINCONSOLELOCALHOST = "OTR_ADMIN_CONSOLE_LOCALHOST",
    OTREXPLORER = "OTR_EXPLORER",
    OTRJOBSCHEDULER = "OTR_JOB_SCHEDULER",
    OTRLAWFIRMPORTAL = "OTR_LAWFIRM_PORTAL",
    OTRLAWFIRMPORTALDEVO = "OTR_LAWFIRM_PORTAL_DEVO",
    OTRLAWFIRMPORTALLOCALHOST = "OTR_LAWFIRM_PORTAL_LOCALHOST",
    OTRWEBSITE = "OTR_WEBSITE",
    OTRWEBSITEDEVO = "OTR_WEBSITE_DEVO",
    OTRWEBSITELOCALHOST = "OTR_WEBSITE_LOCALHOST",
    OTRWIDGET = "OTR_WIDGET",
    UNKNOWN = "UNKNOWN"
}
/**
* @export
* @enum {string}
*/
export declare enum CitationModelResStateEnum {
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
