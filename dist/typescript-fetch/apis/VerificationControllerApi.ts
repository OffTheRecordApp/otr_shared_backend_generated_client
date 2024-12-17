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
    GetInviteByTokenResponse,
    GetInviteByTokenResponseFromJSON,
    GetInviteByTokenResponseToJSON,
} from '../models';

export interface GetInviteByTokenUsingGETRequest {
    token: string;
}

/**
 * 
 */
export class VerificationControllerApi extends runtime.BaseAPI {

    /**
     * getInviteByToken
     */
    async getInviteByTokenUsingGETRaw(requestParameters: GetInviteByTokenUsingGETRequest): Promise<runtime.ApiResponse<GetInviteByTokenResponse>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling getInviteByTokenUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/verification-tokens`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetInviteByTokenResponseFromJSON(jsonValue));
    }

    /**
     * getInviteByToken
     */
    async getInviteByTokenUsingGET(requestParameters: GetInviteByTokenUsingGETRequest): Promise<GetInviteByTokenResponse> {
        const response = await this.getInviteByTokenUsingGETRaw(requestParameters);
        return await response.value();
    }

}