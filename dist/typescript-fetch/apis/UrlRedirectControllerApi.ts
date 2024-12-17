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
    AddRedirectUrlRequest,
    AddRedirectUrlRequestFromJSON,
    AddRedirectUrlRequestToJSON,
    GetRedirectUrlResponse,
    GetRedirectUrlResponseFromJSON,
    GetRedirectUrlResponseToJSON,
} from '../models';

export interface AddRedirectUrlUsingPOSTRequest {
    request: AddRedirectUrlRequest;
}

export interface GetRedirectUrlUsingGETRequest {
    landingPageUrl?: string;
    lawfirmId?: string;
    pageType?: GetRedirectUrlUsingGETPageTypeEnum;
}

/**
 * 
 */
export class UrlRedirectControllerApi extends runtime.BaseAPI {

    /**
     * addRedirectUrl
     */
    async addRedirectUrlUsingPOSTRaw(requestParameters: AddRedirectUrlUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling addRedirectUrlUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/redirects`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddRedirectUrlRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * addRedirectUrl
     */
    async addRedirectUrlUsingPOST(requestParameters: AddRedirectUrlUsingPOSTRequest): Promise<void> {
        await this.addRedirectUrlUsingPOSTRaw(requestParameters);
    }

    /**
     * clearCache
     */
    async clearCacheUsingPOSTRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/redirects/clear-cache`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * clearCache
     */
    async clearCacheUsingPOST(): Promise<void> {
        await this.clearCacheUsingPOSTRaw();
    }

    /**
     * getRedirectUrl
     */
    async getRedirectUrlUsingGETRaw(requestParameters: GetRedirectUrlUsingGETRequest): Promise<runtime.ApiResponse<GetRedirectUrlResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.landingPageUrl !== undefined) {
            queryParameters['landingPageUrl'] = requestParameters.landingPageUrl;
        }

        if (requestParameters.lawfirmId !== undefined) {
            queryParameters['lawfirmId'] = requestParameters.lawfirmId;
        }

        if (requestParameters.pageType !== undefined) {
            queryParameters['pageType'] = requestParameters.pageType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/redirects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetRedirectUrlResponseFromJSON(jsonValue));
    }

    /**
     * getRedirectUrl
     */
    async getRedirectUrlUsingGET(requestParameters: GetRedirectUrlUsingGETRequest): Promise<GetRedirectUrlResponse> {
        const response = await this.getRedirectUrlUsingGETRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetRedirectUrlUsingGETPageTypeEnum {
    DEBUG = 'DEBUG',
    SEO = 'SEO',
    VANITY = 'VANITY'
}