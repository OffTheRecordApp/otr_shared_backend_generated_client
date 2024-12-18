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
    AppEventCreateRequest,
    AppEventCreateRequestFromJSON,
    AppEventCreateRequestToJSON,
} from '../models';

export interface AddAppEventUsingPOSTRequest {
    request: AppEventCreateRequest;
}

/**
 * 
 */
export class AppEventsControllerApi extends runtime.BaseAPI {

    /**
     * addAppEvent
     */
    async addAppEventUsingPOSTRaw(requestParameters: AddAppEventUsingPOSTRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling addAppEventUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/app-events`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventCreateRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * addAppEvent
     */
    async addAppEventUsingPOST(requestParameters: AddAppEventUsingPOSTRequest): Promise<object> {
        const response = await this.addAppEventUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}
