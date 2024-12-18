/* tslint:disable */
/* eslint-disable */
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
import {
    AddCourtRequest,
    AddCourtRequestFromJSON,
    AddCourtRequestToJSON,
    FindCourtsWithNoCoverageResponse,
    FindCourtsWithNoCoverageResponseFromJSON,
    FindCourtsWithNoCoverageResponseToJSON,
    FindsCourtsResponse,
    FindsCourtsResponseFromJSON,
    FindsCourtsResponseToJSON,
    GetCourtResponse,
    GetCourtResponseFromJSON,
    GetCourtResponseToJSON,
    GetCourtsByQueryResponse,
    GetCourtsByQueryResponseFromJSON,
    GetCourtsByQueryResponseToJSON,
    UpdateCourtRequest,
    UpdateCourtRequestFromJSON,
    UpdateCourtRequestToJSON,
    UpsertAddressRequest,
    UpsertAddressRequestFromJSON,
    UpsertAddressRequestToJSON,
} from '../models';

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
export class CourtControllerApi extends runtime.BaseAPI {

    /**
     * addCourt
     */
    async addCourtUsingPOSTRaw(requestParameters: AddCourtUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling addCourtUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/courts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddCourtRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * addCourt
     */
    async addCourtUsingPOST(requestParameters: AddCourtUsingPOSTRequest): Promise<void> {
        await this.addCourtUsingPOSTRaw(requestParameters);
    }

    /**
     * findCourts
     */
    async findCourtsUsingGETRaw(requestParameters: FindCourtsUsingGETRequest): Promise<runtime.ApiResponse<FindsCourtsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.citationId !== undefined) {
            queryParameters['citationId'] = requestParameters.citationId;
        }

        if (requestParameters.city !== undefined) {
            queryParameters['city'] = requestParameters.city;
        }

        if (requestParameters.countryCode !== undefined) {
            queryParameters['countryCode'] = requestParameters.countryCode;
        }

        if (requestParameters.county !== undefined) {
            queryParameters['county'] = requestParameters.county;
        }

        if (requestParameters.length !== undefined) {
            queryParameters['length'] = requestParameters.length;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.regionCode !== undefined) {
            queryParameters['regionCode'] = requestParameters.regionCode;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/courts/traffic`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FindsCourtsResponseFromJSON(jsonValue));
    }

    /**
     * findCourts
     */
    async findCourtsUsingGET(requestParameters: FindCourtsUsingGETRequest): Promise<FindsCourtsResponse> {
        const response = await this.findCourtsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * findCourtsWithNoCoverage
     */
    async findCourtsWithNoCoverageUsingGETRaw(requestParameters: FindCourtsWithNoCoverageUsingGETRequest): Promise<runtime.ApiResponse<FindCourtsWithNoCoverageResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.countryCode !== undefined) {
            queryParameters['countryCode'] = requestParameters.countryCode;
        }

        if (requestParameters.countyId !== undefined) {
            queryParameters['countyId'] = requestParameters.countyId;
        }

        if (requestParameters.regionCode !== undefined) {
            queryParameters['regionCode'] = requestParameters.regionCode;
        }

        if (requestParameters.trailingDays !== undefined) {
            queryParameters['trailingDays'] = requestParameters.trailingDays;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/courts/no-coverage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FindCourtsWithNoCoverageResponseFromJSON(jsonValue));
    }

    /**
     * findCourtsWithNoCoverage
     */
    async findCourtsWithNoCoverageUsingGET(requestParameters: FindCourtsWithNoCoverageUsingGETRequest): Promise<FindCourtsWithNoCoverageResponse> {
        const response = await this.findCourtsWithNoCoverageUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getCourt
     */
    async getCourtUsingGETRaw(requestParameters: GetCourtUsingGETRequest): Promise<runtime.ApiResponse<GetCourtResponse>> {
        if (requestParameters.courtId === null || requestParameters.courtId === undefined) {
            throw new runtime.RequiredError('courtId','Required parameter requestParameters.courtId was null or undefined when calling getCourtUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/courts/{courtId}`.replace(`{${"courtId"}}`, encodeURIComponent(String(requestParameters.courtId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCourtResponseFromJSON(jsonValue));
    }

    /**
     * getCourt
     */
    async getCourtUsingGET(requestParameters: GetCourtUsingGETRequest): Promise<GetCourtResponse> {
        const response = await this.getCourtUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * searchCourts
     */
    async searchCourtsUsingGETRaw(requestParameters: SearchCourtsUsingGETRequest): Promise<runtime.ApiResponse<GetCourtsByQueryResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.citationId !== undefined) {
            queryParameters['citationId'] = requestParameters.citationId;
        }

        if (requestParameters.city !== undefined) {
            queryParameters['city'] = requestParameters.city;
        }

        if (requestParameters.countryCode !== undefined) {
            queryParameters['countryCode'] = requestParameters.countryCode;
        }

        if (requestParameters.county !== undefined) {
            queryParameters['county'] = requestParameters.county;
        }

        if (requestParameters.length !== undefined) {
            queryParameters['length'] = requestParameters.length;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.regionCode !== undefined) {
            queryParameters['regionCode'] = requestParameters.regionCode;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/courts/traffic`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCourtsByQueryResponseFromJSON(jsonValue));
    }

    /**
     * searchCourts
     */
    async searchCourtsUsingGET(requestParameters: SearchCourtsUsingGETRequest): Promise<GetCourtsByQueryResponse> {
        const response = await this.searchCourtsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateCourtAddress
     */
    async updateCourtAddressUsingPUTRaw(requestParameters: UpdateCourtAddressUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.addressId === null || requestParameters.addressId === undefined) {
            throw new runtime.RequiredError('addressId','Required parameter requestParameters.addressId was null or undefined when calling updateCourtAddressUsingPUT.');
        }

        if (requestParameters.courtId === null || requestParameters.courtId === undefined) {
            throw new runtime.RequiredError('courtId','Required parameter requestParameters.courtId was null or undefined when calling updateCourtAddressUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateCourtAddressUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/courts/{courtId}/addresses/{addressId}`.replace(`{${"addressId"}}`, encodeURIComponent(String(requestParameters.addressId))).replace(`{${"courtId"}}`, encodeURIComponent(String(requestParameters.courtId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpsertAddressRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * updateCourtAddress
     */
    async updateCourtAddressUsingPUT(requestParameters: UpdateCourtAddressUsingPUTRequest): Promise<void> {
        await this.updateCourtAddressUsingPUTRaw(requestParameters);
    }

    /**
     * updateCourt
     */
    async updateCourtUsingPUTRaw(requestParameters: UpdateCourtUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.courtId === null || requestParameters.courtId === undefined) {
            throw new runtime.RequiredError('courtId','Required parameter requestParameters.courtId was null or undefined when calling updateCourtUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateCourtUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/courts/{courtId}`.replace(`{${"courtId"}}`, encodeURIComponent(String(requestParameters.courtId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCourtRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * updateCourt
     */
    async updateCourtUsingPUT(requestParameters: UpdateCourtUsingPUTRequest): Promise<void> {
        await this.updateCourtUsingPUTRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum FindCourtsUsingGETStateEnum {
    AK = 'AK',
    AL = 'AL',
    AR = 'AR',
    AZ = 'AZ',
    CA = 'CA',
    CO = 'CO',
    CT = 'CT',
    DC = 'DC',
    DE = 'DE',
    FL = 'FL',
    GA = 'GA',
    HI = 'HI',
    IA = 'IA',
    ID = 'ID',
    IL = 'IL',
    IN = 'IN',
    KS = 'KS',
    KY = 'KY',
    LA = 'LA',
    MA = 'MA',
    MD = 'MD',
    ME = 'ME',
    MI = 'MI',
    MN = 'MN',
    MO = 'MO',
    MS = 'MS',
    MT = 'MT',
    NC = 'NC',
    ND = 'ND',
    NE = 'NE',
    NH = 'NH',
    NJ = 'NJ',
    NM = 'NM',
    NV = 'NV',
    NY = 'NY',
    OH = 'OH',
    OK = 'OK',
    OR = 'OR',
    PA = 'PA',
    RI = 'RI',
    SC = 'SC',
    SD = 'SD',
    TN = 'TN',
    TX = 'TX',
    UT = 'UT',
    VA = 'VA',
    VT = 'VT',
    WA = 'WA',
    WI = 'WI',
    WV = 'WV',
    WY = 'WY'
}
/**
    * @export
    * @enum {string}
    */
export enum SearchCourtsUsingGETStateEnum {
    AK = 'AK',
    AL = 'AL',
    AR = 'AR',
    AZ = 'AZ',
    CA = 'CA',
    CO = 'CO',
    CT = 'CT',
    DC = 'DC',
    DE = 'DE',
    FL = 'FL',
    GA = 'GA',
    HI = 'HI',
    IA = 'IA',
    ID = 'ID',
    IL = 'IL',
    IN = 'IN',
    KS = 'KS',
    KY = 'KY',
    LA = 'LA',
    MA = 'MA',
    MD = 'MD',
    ME = 'ME',
    MI = 'MI',
    MN = 'MN',
    MO = 'MO',
    MS = 'MS',
    MT = 'MT',
    NC = 'NC',
    ND = 'ND',
    NE = 'NE',
    NH = 'NH',
    NJ = 'NJ',
    NM = 'NM',
    NV = 'NV',
    NY = 'NY',
    OH = 'OH',
    OK = 'OK',
    OR = 'OR',
    PA = 'PA',
    RI = 'RI',
    SC = 'SC',
    SD = 'SD',
    TN = 'TN',
    TX = 'TX',
    UT = 'UT',
    VA = 'VA',
    VT = 'VT',
    WA = 'WA',
    WI = 'WI',
    WV = 'WV',
    WY = 'WY'
}
