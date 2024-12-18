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
    AddActionToCaseRequest,
    AddActionToCaseRequestFromJSON,
    AddActionToCaseRequestToJSON,
    AddActionToCaseResponse,
    AddActionToCaseResponseFromJSON,
    AddActionToCaseResponseToJSON,
    GetCaseActionResponse,
    GetCaseActionResponseFromJSON,
    GetCaseActionResponseToJSON,
    GetCaseActionTimelineResponse,
    GetCaseActionTimelineResponseFromJSON,
    GetCaseActionTimelineResponseToJSON,
    GetCaseActionTypesResponse,
    GetCaseActionTypesResponseFromJSON,
    GetCaseActionTypesResponseToJSON,
    MarkActionAsDeletedResponse,
    MarkActionAsDeletedResponseFromJSON,
    MarkActionAsDeletedResponseToJSON,
    UpdateCaseActionRequest,
    UpdateCaseActionRequestFromJSON,
    UpdateCaseActionRequestToJSON,
    UpdateCaseActionResponse,
    UpdateCaseActionResponseFromJSON,
    UpdateCaseActionResponseToJSON,
} from '../models';

export interface AddActionToCaseV2UsingPOSTRequest {
    caseId: string;
    request: AddActionToCaseRequest;
}

export interface GetActionTimelineUsingGETRequest {
    caseId: string;
}

export interface GetCaseActionsUsingGETRequest {
    caseId: string;
    showDeleted?: boolean;
}

export interface MarkActionAsDeletedUsingDELETERequest {
    caseActionId: number;
    caseId: string;
    isDeleted: boolean;
}

export interface UpdateCaseActionUsingPUTRequest {
    caseActionId: number;
    caseId: string;
    request: UpdateCaseActionRequest;
}

/**
 * 
 */
export class CaseActionsControllerApi extends runtime.BaseAPI {

    /**
     * addActionToCaseV2
     */
    async addActionToCaseV2UsingPOSTRaw(requestParameters: AddActionToCaseV2UsingPOSTRequest): Promise<runtime.ApiResponse<AddActionToCaseResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling addActionToCaseV2UsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling addActionToCaseV2UsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/cases/{caseId}/actions`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddActionToCaseRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AddActionToCaseResponseFromJSON(jsonValue));
    }

    /**
     * addActionToCaseV2
     */
    async addActionToCaseV2UsingPOST(requestParameters: AddActionToCaseV2UsingPOSTRequest): Promise<AddActionToCaseResponse> {
        const response = await this.addActionToCaseV2UsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * getActionTimeline
     */
    async getActionTimelineUsingGETRaw(requestParameters: GetActionTimelineUsingGETRequest): Promise<runtime.ApiResponse<GetCaseActionTimelineResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getActionTimelineUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/actions/timeline`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseActionTimelineResponseFromJSON(jsonValue));
    }

    /**
     * getActionTimeline
     */
    async getActionTimelineUsingGET(requestParameters: GetActionTimelineUsingGETRequest): Promise<GetCaseActionTimelineResponse> {
        const response = await this.getActionTimelineUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getAllActions
     */
    async getAllActionsUsingGETRaw(): Promise<runtime.ApiResponse<GetCaseActionTypesResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/actions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseActionTypesResponseFromJSON(jsonValue));
    }

    /**
     * getAllActions
     */
    async getAllActionsUsingGET(): Promise<GetCaseActionTypesResponse> {
        const response = await this.getAllActionsUsingGETRaw();
        return await response.value();
    }

    /**
     * getCaseActions
     */
    async getCaseActionsUsingGETRaw(requestParameters: GetCaseActionsUsingGETRequest): Promise<runtime.ApiResponse<GetCaseActionResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getCaseActionsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.showDeleted !== undefined) {
            queryParameters['showDeleted'] = requestParameters.showDeleted;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/actions`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseActionResponseFromJSON(jsonValue));
    }

    /**
     * getCaseActions
     */
    async getCaseActionsUsingGET(requestParameters: GetCaseActionsUsingGETRequest): Promise<GetCaseActionResponse> {
        const response = await this.getCaseActionsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * markActionAsDeleted
     */
    async markActionAsDeletedUsingDELETERaw(requestParameters: MarkActionAsDeletedUsingDELETERequest): Promise<runtime.ApiResponse<MarkActionAsDeletedResponse>> {
        if (requestParameters.caseActionId === null || requestParameters.caseActionId === undefined) {
            throw new runtime.RequiredError('caseActionId','Required parameter requestParameters.caseActionId was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }

        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }

        if (requestParameters.isDeleted === null || requestParameters.isDeleted === undefined) {
            throw new runtime.RequiredError('isDeleted','Required parameter requestParameters.isDeleted was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.isDeleted !== undefined) {
            queryParameters['isDeleted'] = requestParameters.isDeleted;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/actions/{caseActionId}`.replace(`{${"caseActionId"}}`, encodeURIComponent(String(requestParameters.caseActionId))).replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MarkActionAsDeletedResponseFromJSON(jsonValue));
    }

    /**
     * markActionAsDeleted
     */
    async markActionAsDeletedUsingDELETE(requestParameters: MarkActionAsDeletedUsingDELETERequest): Promise<MarkActionAsDeletedResponse> {
        const response = await this.markActionAsDeletedUsingDELETERaw(requestParameters);
        return await response.value();
    }

    /**
     * updateCaseAction
     */
    async updateCaseActionUsingPUTRaw(requestParameters: UpdateCaseActionUsingPUTRequest): Promise<runtime.ApiResponse<UpdateCaseActionResponse>> {
        if (requestParameters.caseActionId === null || requestParameters.caseActionId === undefined) {
            throw new runtime.RequiredError('caseActionId','Required parameter requestParameters.caseActionId was null or undefined when calling updateCaseActionUsingPUT.');
        }

        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling updateCaseActionUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateCaseActionUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/actions/{caseActionId}`.replace(`{${"caseActionId"}}`, encodeURIComponent(String(requestParameters.caseActionId))).replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCaseActionRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateCaseActionResponseFromJSON(jsonValue));
    }

    /**
     * updateCaseAction
     */
    async updateCaseActionUsingPUT(requestParameters: UpdateCaseActionUsingPUTRequest): Promise<UpdateCaseActionResponse> {
        const response = await this.updateCaseActionUsingPUTRaw(requestParameters);
        return await response.value();
    }

}
