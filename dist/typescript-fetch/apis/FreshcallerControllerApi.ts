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
    SignRecordingUrlRequest,
    SignRecordingUrlRequestFromJSON,
    SignRecordingUrlRequestToJSON,
    SignRecordingUrlResponse,
    SignRecordingUrlResponseFromJSON,
    SignRecordingUrlResponseToJSON,
} from '../models';

export interface SignRecordingUrlUsingPOSTRequest {
    request: SignRecordingUrlRequest;
}

/**
 * 
 */
export class FreshcallerControllerApi extends runtime.BaseAPI {

    /**
     * signRecordingUrl
     */
    async signRecordingUrlUsingPOSTRaw(requestParameters: SignRecordingUrlUsingPOSTRequest): Promise<runtime.ApiResponse<SignRecordingUrlResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling signRecordingUrlUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/phone-calls/sign`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SignRecordingUrlRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SignRecordingUrlResponseFromJSON(jsonValue));
    }

    /**
     * signRecordingUrl
     */
    async signRecordingUrlUsingPOST(requestParameters: SignRecordingUrlUsingPOSTRequest): Promise<SignRecordingUrlResponse> {
        const response = await this.signRecordingUrlUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}