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
/**
 *
 * @export
 * @interface ListCitationsRequest
 */
export interface ListCitationsRequest {
    /**
     *
     * @type {string}
     * @memberof ListCitationsRequest
     */
    caseStatusCategoryFilter?: ListCitationsRequestCaseStatusCategoryFilterEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof ListCitationsRequest
     */
    caseStatusFilterList?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ListCitationsRequest
     */
    cdlStatus?: Array<ListCitationsRequestCdlStatusEnum>;
    /**
     *
     * @type {string}
     * @memberof ListCitationsRequest
     */
    countyFilter?: string;
    /**
     *
     * @type {Date}
     * @memberof ListCitationsRequest
     */
    endDate?: Date;
    /**
     *
     * @type {string}
     * @memberof ListCitationsRequest
     */
    experimentGroup?: ListCitationsRequestExperimentGroupEnum;
    /**
     *
     * @type {string}
     * @memberof ListCitationsRequest
     */
    experimentName?: string;
    /**
     *
     * @type {boolean}
     * @memberof ListCitationsRequest
     */
    hasAccident?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ListCitationsRequest
     */
    hasCase?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ListCitationsRequest
     */
    hasLastBookingDate?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ListCitationsRequest
     */
    hasPhoto?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ListCitationsRequest
     */
    includeDataRecords?: boolean;
    /**
     *
     * @type {number}
     * @memberof ListCitationsRequest
     */
    length?: number;
    /**
     *
     * @type {number}
     * @memberof ListCitationsRequest
     */
    page?: number;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ListCitationsRequest
     */
    sortMap?: {
        [key: string]: string;
    };
    /**
     *
     * @type {Date}
     * @memberof ListCitationsRequest
     */
    startDate?: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof ListCitationsRequest
     */
    stateFilterList?: Array<ListCitationsRequestStateFilterListEnum>;
    /**
     *
     * @type {string}
     * @memberof ListCitationsRequest
     */
    timeZoneId?: string;
}
export declare function ListCitationsRequestFromJSON(json: any): ListCitationsRequest;
export declare function ListCitationsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCitationsRequest;
export declare function ListCitationsRequestToJSON(value?: ListCitationsRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ListCitationsRequestCaseStatusCategoryFilterEnum {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    RESOLVED = "RESOLVED",
    UNCONFIRMED = "UNCONFIRMED"
}
/**
* @export
* @enum {string}
*/
export declare enum ListCitationsRequestCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = "CDL_IN_COMMERCIAL_VEHICLE",
    CDLINPERSONALVEHICLE = "CDL_IN_PERSONAL_VEHICLE",
    NOCDL = "NO_CDL"
}
/**
* @export
* @enum {string}
*/
export declare enum ListCitationsRequestExperimentGroupEnum {
    CONTROL = "CONTROL",
    VARIATION1 = "VARIATION_1",
    VARIATION2 = "VARIATION_2"
}
/**
* @export
* @enum {string}
*/
export declare enum ListCitationsRequestStateFilterListEnum {
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
