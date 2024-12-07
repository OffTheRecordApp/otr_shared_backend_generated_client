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
    VerifyCaptchaTokenRequest,
    VerifyCaptchaTokenRequestFromJSON,
    VerifyCaptchaTokenRequestToJSON,
    VerifyCaptchaTokenResponse,
    VerifyCaptchaTokenResponseFromJSON,
    VerifyCaptchaTokenResponseToJSON,
} from '../models';

export interface VerifyCaptchaTokenUsingPOSTRequest {
    request: VerifyCaptchaTokenRequest;
}

/**
 * 
 */
export class CaptchaControllerApi extends runtime.BaseAPI {

    /**
     * verifyCaptchaToken
     */
    async verifyCaptchaTokenUsingPOSTRaw(requestParameters: VerifyCaptchaTokenUsingPOSTRequest): Promise<runtime.ApiResponse<VerifyCaptchaTokenResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling verifyCaptchaTokenUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/captcha/verify-token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyCaptchaTokenRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifyCaptchaTokenResponseFromJSON(jsonValue));
    }

    /**
     * verifyCaptchaToken
     */
    async verifyCaptchaTokenUsingPOST(requestParameters: VerifyCaptchaTokenUsingPOSTRequest): Promise<VerifyCaptchaTokenResponse> {
        const response = await this.verifyCaptchaTokenUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}
