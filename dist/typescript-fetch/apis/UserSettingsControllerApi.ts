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
    GetUserSettingsRequest,
    GetUserSettingsRequestFromJSON,
    GetUserSettingsRequestToJSON,
    GetUserSettingsResponse,
    GetUserSettingsResponseFromJSON,
    GetUserSettingsResponseToJSON,
    SettingRequest,
    SettingRequestFromJSON,
    SettingRequestToJSON,
    SettingResponse,
    SettingResponseFromJSON,
    SettingResponseToJSON,
    UpdateUserSettingsRequest,
    UpdateUserSettingsRequestFromJSON,
    UpdateUserSettingsRequestToJSON,
    UpdateUserSettingsResponse,
    UpdateUserSettingsResponseFromJSON,
    UpdateUserSettingsResponseToJSON,
} from '../models';

export interface GetUserSettingUsingGETRequest {
    name: string;
    userId: number;
}

export interface GetUserSettingsUsingPOSTRequest {
    userId: number;
    request: GetUserSettingsRequest;
}

export interface UpdateUserSettingUsingPOSTRequest {
    userId: number;
    request: SettingRequest;
}

export interface UpdateUserSettingsUsingPOSTRequest {
    userId: number;
    request: UpdateUserSettingsRequest;
}

/**
 * 
 */
export class UserSettingsControllerApi extends runtime.BaseAPI {

    /**
     * getUserSetting
     */
    async getUserSettingUsingGETRaw(requestParameters: GetUserSettingUsingGETRequest): Promise<runtime.ApiResponse<SettingResponse>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getUserSettingUsingGET.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserSettingUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/user-settings/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingResponseFromJSON(jsonValue));
    }

    /**
     * getUserSetting
     */
    async getUserSettingUsingGET(requestParameters: GetUserSettingUsingGETRequest): Promise<SettingResponse> {
        const response = await this.getUserSettingUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getUserSettings
     */
    async getUserSettingsUsingPOSTRaw(requestParameters: GetUserSettingsUsingPOSTRequest): Promise<runtime.ApiResponse<GetUserSettingsResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserSettingsUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling getUserSettingsUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user-settings/{userId}/get-settings`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetUserSettingsRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUserSettingsResponseFromJSON(jsonValue));
    }

    /**
     * getUserSettings
     */
    async getUserSettingsUsingPOST(requestParameters: GetUserSettingsUsingPOSTRequest): Promise<GetUserSettingsResponse> {
        const response = await this.getUserSettingsUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateUserSetting
     */
    async updateUserSettingUsingPOSTRaw(requestParameters: UpdateUserSettingUsingPOSTRequest): Promise<runtime.ApiResponse<SettingResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserSettingUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateUserSettingUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user-settings/{userId}/setting`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SettingRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingResponseFromJSON(jsonValue));
    }

    /**
     * updateUserSetting
     */
    async updateUserSettingUsingPOST(requestParameters: UpdateUserSettingUsingPOSTRequest): Promise<SettingResponse> {
        const response = await this.updateUserSettingUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateUserSettings
     */
    async updateUserSettingsUsingPOSTRaw(requestParameters: UpdateUserSettingsUsingPOSTRequest): Promise<runtime.ApiResponse<UpdateUserSettingsResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserSettingsUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateUserSettingsUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/user-settings/{userId}/update-settings`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserSettingsRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateUserSettingsResponseFromJSON(jsonValue));
    }

    /**
     * updateUserSettings
     */
    async updateUserSettingsUsingPOST(requestParameters: UpdateUserSettingsUsingPOSTRequest): Promise<UpdateUserSettingsResponse> {
        const response = await this.updateUserSettingsUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}
