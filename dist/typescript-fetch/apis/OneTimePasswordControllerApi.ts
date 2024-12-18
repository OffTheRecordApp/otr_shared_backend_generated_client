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
    SendOneTimePasswordRequest,
    SendOneTimePasswordRequestFromJSON,
    SendOneTimePasswordRequestToJSON,
} from '../models';

export interface SendOneTimePasswordUsingPOSTRequest {
    request?: SendOneTimePasswordRequest;
}

/**
 * 
 */
export class OneTimePasswordControllerApi extends runtime.BaseAPI {

    /**
     * sendOneTimePassword
     */
    async sendOneTimePasswordUsingPOSTRaw(requestParameters: SendOneTimePasswordUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/one_time_password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendOneTimePasswordRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * sendOneTimePassword
     */
    async sendOneTimePasswordUsingPOST(requestParameters: SendOneTimePasswordUsingPOSTRequest): Promise<void> {
        await this.sendOneTimePasswordUsingPOSTRaw(requestParameters);
    }

}
