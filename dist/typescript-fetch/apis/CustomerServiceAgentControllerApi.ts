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
    GetCustomerServiceAgentsResponse,
    GetCustomerServiceAgentsResponseFromJSON,
    GetCustomerServiceAgentsResponseToJSON,
} from '../models';

export interface GetCustomerServiceAgentsUsingGETRequest {
    isActive?: boolean;
}

/**
 * 
 */
export class CustomerServiceAgentControllerApi extends runtime.BaseAPI {

    /**
     * getCustomerServiceAgents
     */
    async getCustomerServiceAgentsUsingGETRaw(requestParameters: GetCustomerServiceAgentsUsingGETRequest): Promise<runtime.ApiResponse<GetCustomerServiceAgentsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.isActive !== undefined) {
            queryParameters['isActive'] = requestParameters.isActive;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cs-agents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCustomerServiceAgentsResponseFromJSON(jsonValue));
    }

    /**
     * getCustomerServiceAgents
     */
    async getCustomerServiceAgentsUsingGET(requestParameters: GetCustomerServiceAgentsUsingGETRequest): Promise<GetCustomerServiceAgentsResponse> {
        const response = await this.getCustomerServiceAgentsUsingGETRaw(requestParameters);
        return await response.value();
    }

}
