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
    GetCaseDeclineReasonTypesResponse,
    GetCaseDeclineReasonTypesResponseFromJSON,
    GetCaseDeclineReasonTypesResponseToJSON,
} from '../models';

/**
 * 
 */
export class CaseDeclineControllerApi extends runtime.BaseAPI {

    /**
     * getCaseDeclineReasonTypes
     */
    async getCaseDeclineReasonTypesUsingGETRaw(): Promise<runtime.ApiResponse<GetCaseDeclineReasonTypesResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/declines/reasons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseDeclineReasonTypesResponseFromJSON(jsonValue));
    }

    /**
     * getCaseDeclineReasonTypes
     */
    async getCaseDeclineReasonTypesUsingGET(): Promise<GetCaseDeclineReasonTypesResponse> {
        const response = await this.getCaseDeclineReasonTypesUsingGETRaw();
        return await response.value();
    }

}
