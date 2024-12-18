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
    SaveUserSocialProfileRequest,
    SaveUserSocialProfileRequestFromJSON,
    SaveUserSocialProfileRequestToJSON,
} from '../models';

export interface RemoveUserSocialProfileUsingDELETERequest {
    platform: RemoveUserSocialProfileUsingDELETEPlatformEnum;
    userId: string;
}

export interface SaveUserSocialProfilesUsingPOSTRequest {
    userId: string;
    request: SaveUserSocialProfileRequest;
}

/**
 * 
 */
export class UserSocialProfileControllerApi extends runtime.BaseAPI {

    /**
     * removeUserSocialProfile
     */
    async removeUserSocialProfileUsingDELETERaw(requestParameters: RemoveUserSocialProfileUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.platform === null || requestParameters.platform === undefined) {
            throw new runtime.RequiredError('platform','Required parameter requestParameters.platform was null or undefined when calling removeUserSocialProfileUsingDELETE.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling removeUserSocialProfileUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.platform !== undefined) {
            queryParameters['platform'] = requestParameters.platform;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/social-profiles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * removeUserSocialProfile
     */
    async removeUserSocialProfileUsingDELETE(requestParameters: RemoveUserSocialProfileUsingDELETERequest): Promise<void> {
        await this.removeUserSocialProfileUsingDELETERaw(requestParameters);
    }

    /**
     * saveUserSocialProfiles
     */
    async saveUserSocialProfilesUsingPOSTRaw(requestParameters: SaveUserSocialProfilesUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling saveUserSocialProfilesUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling saveUserSocialProfilesUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/users/{userId}/social-profiles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SaveUserSocialProfileRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * saveUserSocialProfiles
     */
    async saveUserSocialProfilesUsingPOST(requestParameters: SaveUserSocialProfilesUsingPOSTRequest): Promise<void> {
        await this.saveUserSocialProfilesUsingPOSTRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum RemoveUserSocialProfileUsingDELETEPlatformEnum {
    INSTAGRAM = 'INSTAGRAM',
    SNAPCHAT = 'SNAPCHAT',
    TIKTOK = 'TIKTOK',
    TWITCH = 'TWITCH',
    X = 'X',
    YOUTUBE = 'YOUTUBE'
}
