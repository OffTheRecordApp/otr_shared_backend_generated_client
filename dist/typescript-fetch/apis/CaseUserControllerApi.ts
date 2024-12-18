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
    GetCaseUsersResponse,
    GetCaseUsersResponseFromJSON,
    GetCaseUsersResponseToJSON,
    SaveCaseUserRequest,
    SaveCaseUserRequestFromJSON,
    SaveCaseUserRequestToJSON,
} from '../models';

export interface GetCaseUsersByCaseUsingGETRequest {
    caseId: string;
    getRemovedUsers?: boolean;
}

export interface SaveCaseUserUsingPOSTRequest {
    caseId: string;
    request: SaveCaseUserRequest;
}

/**
 * 
 */
export class CaseUserControllerApi extends runtime.BaseAPI {

    /**
     * getCaseUsersByCase
     */
    async getCaseUsersByCaseUsingGETRaw(requestParameters: GetCaseUsersByCaseUsingGETRequest): Promise<runtime.ApiResponse<GetCaseUsersResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getCaseUsersByCaseUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.getRemovedUsers !== undefined) {
            queryParameters['getRemovedUsers'] = requestParameters.getRemovedUsers;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/users`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseUsersResponseFromJSON(jsonValue));
    }

    /**
     * getCaseUsersByCase
     */
    async getCaseUsersByCaseUsingGET(requestParameters: GetCaseUsersByCaseUsingGETRequest): Promise<GetCaseUsersResponse> {
        const response = await this.getCaseUsersByCaseUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * saveCaseUser
     */
    async saveCaseUserUsingPOSTRaw(requestParameters: SaveCaseUserUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling saveCaseUserUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling saveCaseUserUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/users`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SaveCaseUserRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * saveCaseUser
     */
    async saveCaseUserUsingPOST(requestParameters: SaveCaseUserUsingPOSTRequest): Promise<void> {
        await this.saveCaseUserUsingPOSTRaw(requestParameters);
    }

}
