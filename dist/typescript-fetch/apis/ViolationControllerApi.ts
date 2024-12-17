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
    AddViolationRequest,
    AddViolationRequestFromJSON,
    AddViolationRequestToJSON,
    AddViolationResponse,
    AddViolationResponseFromJSON,
    AddViolationResponseToJSON,
    GetRegionsWithViolationsResponse,
    GetRegionsWithViolationsResponseFromJSON,
    GetRegionsWithViolationsResponseToJSON,
    GetTrafficViolationTypesResponse,
    GetTrafficViolationTypesResponseFromJSON,
    GetTrafficViolationTypesResponseToJSON,
    ListViolationClassificationResponse,
    ListViolationClassificationResponseFromJSON,
    ListViolationClassificationResponseToJSON,
    UpdateViolationRequest,
    UpdateViolationRequestFromJSON,
    UpdateViolationRequestToJSON,
} from '../models';

export interface AddViolationUsingPOSTRequest {
    isLive: boolean;
    request: AddViolationRequest;
}

export interface DeleteViolationUsingDELETERequest {
    violationId: number;
}

export interface GetTrafficViolationTypesUsingGETRequest {
    audience?: string;
    flavor?: string;
    includePenalties?: boolean;
    state?: string;
}

export interface ListViolationClassificationsUsingGETRequest {
    regionCode?: string;
}

export interface UpdateViolationUsingPUTRequest {
    violationId: number;
    request: UpdateViolationRequest;
}

/**
 * 
 */
export class ViolationControllerApi extends runtime.BaseAPI {

    /**
     * addViolation
     */
    async addViolationUsingPOSTRaw(requestParameters: AddViolationUsingPOSTRequest): Promise<runtime.ApiResponse<AddViolationResponse>> {
        if (requestParameters.isLive === null || requestParameters.isLive === undefined) {
            throw new runtime.RequiredError('isLive','Required parameter requestParameters.isLive was null or undefined when calling addViolationUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling addViolationUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.isLive !== undefined) {
            queryParameters['isLive'] = requestParameters.isLive;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/violations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddViolationRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AddViolationResponseFromJSON(jsonValue));
    }

    /**
     * addViolation
     */
    async addViolationUsingPOST(requestParameters: AddViolationUsingPOSTRequest): Promise<AddViolationResponse> {
        const response = await this.addViolationUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * deleteViolation
     */
    async deleteViolationUsingDELETERaw(requestParameters: DeleteViolationUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.violationId === null || requestParameters.violationId === undefined) {
            throw new runtime.RequiredError('violationId','Required parameter requestParameters.violationId was null or undefined when calling deleteViolationUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/violations/{violationId}`.replace(`{${"violationId"}}`, encodeURIComponent(String(requestParameters.violationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deleteViolation
     */
    async deleteViolationUsingDELETE(requestParameters: DeleteViolationUsingDELETERequest): Promise<void> {
        await this.deleteViolationUsingDELETERaw(requestParameters);
    }

    /**
     * getRegionsWithViolations
     */
    async getRegionsWithViolationsUsingGETRaw(): Promise<runtime.ApiResponse<GetRegionsWithViolationsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/violations/region-availability`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetRegionsWithViolationsResponseFromJSON(jsonValue));
    }

    /**
     * getRegionsWithViolations
     */
    async getRegionsWithViolationsUsingGET(): Promise<GetRegionsWithViolationsResponse> {
        const response = await this.getRegionsWithViolationsUsingGETRaw();
        return await response.value();
    }

    /**
     * getTrafficViolationTypes
     */
    async getTrafficViolationTypesUsingGETRaw(requestParameters: GetTrafficViolationTypesUsingGETRequest): Promise<runtime.ApiResponse<GetTrafficViolationTypesResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.audience !== undefined) {
            queryParameters['audience'] = requestParameters.audience;
        }

        if (requestParameters.flavor !== undefined) {
            queryParameters['flavor'] = requestParameters.flavor;
        }

        if (requestParameters.includePenalties !== undefined) {
            queryParameters['includePenalties'] = requestParameters.includePenalties;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/violations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTrafficViolationTypesResponseFromJSON(jsonValue));
    }

    /**
     * getTrafficViolationTypes
     */
    async getTrafficViolationTypesUsingGET(requestParameters: GetTrafficViolationTypesUsingGETRequest): Promise<GetTrafficViolationTypesResponse> {
        const response = await this.getTrafficViolationTypesUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * listViolationClassifications
     */
    async listViolationClassificationsUsingGETRaw(requestParameters: ListViolationClassificationsUsingGETRequest): Promise<runtime.ApiResponse<ListViolationClassificationResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.regionCode !== undefined) {
            queryParameters['regionCode'] = requestParameters.regionCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/violations/classifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListViolationClassificationResponseFromJSON(jsonValue));
    }

    /**
     * listViolationClassifications
     */
    async listViolationClassificationsUsingGET(requestParameters: ListViolationClassificationsUsingGETRequest): Promise<ListViolationClassificationResponse> {
        const response = await this.listViolationClassificationsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateViolation
     */
    async updateViolationUsingPUTRaw(requestParameters: UpdateViolationUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.violationId === null || requestParameters.violationId === undefined) {
            throw new runtime.RequiredError('violationId','Required parameter requestParameters.violationId was null or undefined when calling updateViolationUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateViolationUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/violations/{violationId}`.replace(`{${"violationId"}}`, encodeURIComponent(String(requestParameters.violationId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateViolationRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * updateViolation
     */
    async updateViolationUsingPUT(requestParameters: UpdateViolationUsingPUTRequest): Promise<void> {
        await this.updateViolationUsingPUTRaw(requestParameters);
    }

}