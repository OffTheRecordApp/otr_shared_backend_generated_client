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
    GetUserRefLinksResponse,
    GetUserRefLinksResponseFromJSON,
    GetUserRefLinksResponseToJSON,
} from '../models';

export interface GetRefLinksForUserUsingGETRequest {
    userIdString: string;
}

/**
 * 
 */
export class RefLinkControllerApi extends runtime.BaseAPI {

    /**
     * getRefLinksForUser
     */
    async getRefLinksForUserUsingGETRaw(requestParameters: GetRefLinksForUserUsingGETRequest): Promise<runtime.ApiResponse<GetUserRefLinksResponse>> {
        if (requestParameters.userIdString === null || requestParameters.userIdString === undefined) {
            throw new runtime.RequiredError('userIdString','Required parameter requestParameters.userIdString was null or undefined when calling getRefLinksForUserUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/reflinks/{userIdString}`.replace(`{${"userIdString"}}`, encodeURIComponent(String(requestParameters.userIdString))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUserRefLinksResponseFromJSON(jsonValue));
    }

    /**
     * getRefLinksForUser
     */
    async getRefLinksForUserUsingGET(requestParameters: GetRefLinksForUserUsingGETRequest): Promise<GetUserRefLinksResponse> {
        const response = await this.getRefLinksForUserUsingGETRaw(requestParameters);
        return await response.value();
    }

}