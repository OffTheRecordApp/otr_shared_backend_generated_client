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
    GetHouseholdMatesResponse,
    GetHouseholdMatesResponseFromJSON,
    GetHouseholdMatesResponseToJSON,
    InviteHouseholdMateRequest,
    InviteHouseholdMateRequestFromJSON,
    InviteHouseholdMateRequestToJSON,
} from '../models';

export interface AcceptHouseholdInviteUsingPUTRequest {
    email: string;
    token: string;
}

export interface CancelHouseholdMateInviteUsingDELETERequest {
    inviteeEmail: string;
    userId: number;
}

export interface GetHouseholdMatesUsingGETRequest {
    userId: string;
}

export interface InviteHouseholdMateUsingPOSTRequest {
    userId: number;
    request: InviteHouseholdMateRequest;
}

export interface RemoveHouseholdMateUsingDELETERequest {
    mateUserId: number;
    userId: number;
}

/**
 * 
 */
export class HouseholdMateControllerApi extends runtime.BaseAPI {

    /**
     * acceptHouseholdInvite
     */
    async acceptHouseholdInviteUsingPUTRaw(requestParameters: AcceptHouseholdInviteUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling acceptHouseholdInviteUsingPUT.');
        }

        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling acceptHouseholdInviteUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/household-mates/accept-invite`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * acceptHouseholdInvite
     */
    async acceptHouseholdInviteUsingPUT(requestParameters: AcceptHouseholdInviteUsingPUTRequest): Promise<void> {
        await this.acceptHouseholdInviteUsingPUTRaw(requestParameters);
    }

    /**
     * cancelHouseholdMateInvite
     */
    async cancelHouseholdMateInviteUsingDELETERaw(requestParameters: CancelHouseholdMateInviteUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.inviteeEmail === null || requestParameters.inviteeEmail === undefined) {
            throw new runtime.RequiredError('inviteeEmail','Required parameter requestParameters.inviteeEmail was null or undefined when calling cancelHouseholdMateInviteUsingDELETE.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling cancelHouseholdMateInviteUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inviteeEmail !== undefined) {
            queryParameters['inviteeEmail'] = requestParameters.inviteeEmail;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/household-mates/{userId}/invite`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * cancelHouseholdMateInvite
     */
    async cancelHouseholdMateInviteUsingDELETE(requestParameters: CancelHouseholdMateInviteUsingDELETERequest): Promise<void> {
        await this.cancelHouseholdMateInviteUsingDELETERaw(requestParameters);
    }

    /**
     * getHouseholdMates
     */
    async getHouseholdMatesUsingGETRaw(requestParameters: GetHouseholdMatesUsingGETRequest): Promise<runtime.ApiResponse<GetHouseholdMatesResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getHouseholdMatesUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/household-mates/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetHouseholdMatesResponseFromJSON(jsonValue));
    }

    /**
     * getHouseholdMates
     */
    async getHouseholdMatesUsingGET(requestParameters: GetHouseholdMatesUsingGETRequest): Promise<GetHouseholdMatesResponse> {
        const response = await this.getHouseholdMatesUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * inviteHouseholdMate
     */
    async inviteHouseholdMateUsingPOSTRaw(requestParameters: InviteHouseholdMateUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling inviteHouseholdMateUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling inviteHouseholdMateUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/household-mates/{userId}/invite`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InviteHouseholdMateRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * inviteHouseholdMate
     */
    async inviteHouseholdMateUsingPOST(requestParameters: InviteHouseholdMateUsingPOSTRequest): Promise<void> {
        await this.inviteHouseholdMateUsingPOSTRaw(requestParameters);
    }

    /**
     * removeHouseholdMate
     */
    async removeHouseholdMateUsingDELETERaw(requestParameters: RemoveHouseholdMateUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.mateUserId === null || requestParameters.mateUserId === undefined) {
            throw new runtime.RequiredError('mateUserId','Required parameter requestParameters.mateUserId was null or undefined when calling removeHouseholdMateUsingDELETE.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling removeHouseholdMateUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.mateUserId !== undefined) {
            queryParameters['mateUserId'] = requestParameters.mateUserId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/household-mates/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * removeHouseholdMate
     */
    async removeHouseholdMateUsingDELETE(requestParameters: RemoveHouseholdMateUsingDELETERequest): Promise<void> {
        await this.removeHouseholdMateUsingDELETERaw(requestParameters);
    }

}
