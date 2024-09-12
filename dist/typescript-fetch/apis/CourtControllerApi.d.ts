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
import * as runtime from '../runtime';
import { AddCourtRequest, FindCourtsWithNoCoverageResponse, FindsCourtsResponse, GetCourtResponse, GetCourtsByQueryResponse, UpdateCourtRequest, UpsertAddressRequest } from '../models';
export interface AddCourtUsingPOSTRequest {
    request: AddCourtRequest;
}
export interface FindCourtsUsingGETRequest {
    citationId?: number;
    city?: string;
    countryCode?: string;
    county?: string;
    length?: number;
    offset?: number;
    q?: string;
    regionCode?: string;
    state?: FindCourtsUsingGETStateEnum;
}
export interface FindCourtsWithNoCoverageUsingGETRequest {
    countryCode?: string;
    countyId?: number;
    regionCode?: string;
    trailingDays?: number;
}
export interface GetCourtUsingGETRequest {
    courtId: string;
}
export interface SearchCourtsUsingGETRequest {
    citationId?: number;
    city?: string;
    countryCode?: string;
    county?: string;
    length?: number;
    offset?: number;
    q?: string;
    regionCode?: string;
    state?: SearchCourtsUsingGETStateEnum;
}
export interface UpdateCourtAddressUsingPUTRequest {
    addressId: number;
    courtId: number;
    request: UpsertAddressRequest;
}
export interface UpdateCourtUsingPUTRequest {
    courtId: number;
    request: UpdateCourtRequest;
}
/**
 *
 */
export declare class CourtControllerApi extends runtime.BaseAPI {
    /**
     * addCourt
     */
    addCourtUsingPOSTRaw(requestParameters: AddCourtUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * addCourt
     */
    addCourtUsingPOST(requestParameters: AddCourtUsingPOSTRequest): Promise<void>;
    /**
     * findCourts
     */
    findCourtsUsingGETRaw(requestParameters: FindCourtsUsingGETRequest): Promise<runtime.ApiResponse<FindsCourtsResponse>>;
    /**
     * findCourts
     */
    findCourtsUsingGET(requestParameters: FindCourtsUsingGETRequest): Promise<FindsCourtsResponse>;
    /**
     * findCourtsWithNoCoverage
     */
    findCourtsWithNoCoverageUsingGETRaw(requestParameters: FindCourtsWithNoCoverageUsingGETRequest): Promise<runtime.ApiResponse<FindCourtsWithNoCoverageResponse>>;
    /**
     * findCourtsWithNoCoverage
     */
    findCourtsWithNoCoverageUsingGET(requestParameters: FindCourtsWithNoCoverageUsingGETRequest): Promise<FindCourtsWithNoCoverageResponse>;
    /**
     * getCourt
     */
    getCourtUsingGETRaw(requestParameters: GetCourtUsingGETRequest): Promise<runtime.ApiResponse<GetCourtResponse>>;
    /**
     * getCourt
     */
    getCourtUsingGET(requestParameters: GetCourtUsingGETRequest): Promise<GetCourtResponse>;
    /**
     * searchCourts
     */
    searchCourtsUsingGETRaw(requestParameters: SearchCourtsUsingGETRequest): Promise<runtime.ApiResponse<GetCourtsByQueryResponse>>;
    /**
     * searchCourts
     */
    searchCourtsUsingGET(requestParameters: SearchCourtsUsingGETRequest): Promise<GetCourtsByQueryResponse>;
    /**
     * updateCourtAddress
     */
    updateCourtAddressUsingPUTRaw(requestParameters: UpdateCourtAddressUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * updateCourtAddress
     */
    updateCourtAddressUsingPUT(requestParameters: UpdateCourtAddressUsingPUTRequest): Promise<void>;
    /**
     * updateCourt
     */
    updateCourtUsingPUTRaw(requestParameters: UpdateCourtUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * updateCourt
     */
    updateCourtUsingPUT(requestParameters: UpdateCourtUsingPUTRequest): Promise<void>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum FindCourtsUsingGETStateEnum {
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
export declare enum SearchCourtsUsingGETStateEnum {
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