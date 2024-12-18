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
    FindChargeDisputesResponse,
    FindChargeDisputesResponseFromJSON,
    FindChargeDisputesResponseToJSON,
    GetCurrentUserResponse,
    GetCurrentUserResponseFromJSON,
    GetCurrentUserResponseToJSON,
    GetOverduePaymentsResponse,
    GetOverduePaymentsResponseFromJSON,
    GetOverduePaymentsResponseToJSON,
    GetSupportTicketsResponse,
    GetSupportTicketsResponseFromJSON,
    GetSupportTicketsResponseToJSON,
    GetUserDetailsResponse,
    GetUserDetailsResponseFromJSON,
    GetUserDetailsResponseToJSON,
    GetUserStripeAccountResponse,
    GetUserStripeAccountResponseFromJSON,
    GetUserStripeAccountResponseToJSON,
    IsUserLoggedInResponse,
    IsUserLoggedInResponseFromJSON,
    IsUserLoggedInResponseToJSON,
    UpdateUserDetailsResponse,
    UpdateUserDetailsResponseFromJSON,
    UpdateUserDetailsResponseToJSON,
    UpdateUserProfileRequest,
    UpdateUserProfileRequestFromJSON,
    UpdateUserProfileRequestToJSON,
    UpdateUserRolesRequest,
    UpdateUserRolesRequestFromJSON,
    UpdateUserRolesRequestToJSON,
    ValidateUserEmailResponse,
    ValidateUserEmailResponseFromJSON,
    ValidateUserEmailResponseToJSON,
} from '../models';

export interface FindChargeDisputesByUserIdUsingGETRequest {
    userId: string;
}

export interface GetCurrentUserInfoUsingGETRequest {
    isAdmin?: boolean;
    serviceProviderId?: string;
}

export interface GetOverduePaymentsUsingGETRequest {
    userId: number;
}

export interface GetSupportTicketsForUserUsingGETRequest {
    email: string;
    limit?: number;
}

export interface GetUserDetailsUsingGETRequest {
    userIdString: string;
}

export interface GetUserStripeAccountUsingGETRequest {
    userId: number;
}

export interface LogoutUserUsingDELETERequest {
    userId: number;
}

export interface RemoveUserUsingDELETERequest {
    userId: number;
}

export interface ReviveUserUsingPUTRequest {
    userId: number;
}

export interface UpdateUserProfileUsingPUTRequest {
    userId: number;
    request: UpdateUserProfileRequest;
}

export interface UpdateUserRolesUsingPOSTRequest {
    request: UpdateUserRolesRequest;
}

export interface ValidateUserByEmailUsingGETRequest {
    email: string;
}

/**
 * 
 */
export class UserControllerApi extends runtime.BaseAPI {

    /**
     * findChargeDisputesByUserId
     */
    async findChargeDisputesByUserIdUsingGETRaw(requestParameters: FindChargeDisputesByUserIdUsingGETRequest): Promise<runtime.ApiResponse<FindChargeDisputesResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling findChargeDisputesByUserIdUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/disputes`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FindChargeDisputesResponseFromJSON(jsonValue));
    }

    /**
     * findChargeDisputesByUserId
     */
    async findChargeDisputesByUserIdUsingGET(requestParameters: FindChargeDisputesByUserIdUsingGETRequest): Promise<FindChargeDisputesResponse> {
        const response = await this.findChargeDisputesByUserIdUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getCurrentUserInfo
     */
    async getCurrentUserInfoUsingGETRaw(requestParameters: GetCurrentUserInfoUsingGETRequest): Promise<runtime.ApiResponse<GetCurrentUserResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.isAdmin !== undefined) {
            queryParameters['isAdmin'] = requestParameters.isAdmin;
        }

        if (requestParameters.serviceProviderId !== undefined) {
            queryParameters['serviceProviderId'] = requestParameters.serviceProviderId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCurrentUserResponseFromJSON(jsonValue));
    }

    /**
     * getCurrentUserInfo
     */
    async getCurrentUserInfoUsingGET(requestParameters: GetCurrentUserInfoUsingGETRequest): Promise<GetCurrentUserResponse> {
        const response = await this.getCurrentUserInfoUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getOverduePayments
     */
    async getOverduePaymentsUsingGETRaw(requestParameters: GetOverduePaymentsUsingGETRequest): Promise<runtime.ApiResponse<GetOverduePaymentsResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getOverduePaymentsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/overdue-payments`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetOverduePaymentsResponseFromJSON(jsonValue));
    }

    /**
     * getOverduePayments
     */
    async getOverduePaymentsUsingGET(requestParameters: GetOverduePaymentsUsingGETRequest): Promise<GetOverduePaymentsResponse> {
        const response = await this.getOverduePaymentsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getSupportTicketsForUser
     */
    async getSupportTicketsForUserUsingGETRaw(requestParameters: GetSupportTicketsForUserUsingGETRequest): Promise<runtime.ApiResponse<GetSupportTicketsResponse>> {
        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling getSupportTicketsForUserUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{email}/support-tickets`.replace(`{${"email"}}`, encodeURIComponent(String(requestParameters.email))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSupportTicketsResponseFromJSON(jsonValue));
    }

    /**
     * getSupportTicketsForUser
     */
    async getSupportTicketsForUserUsingGET(requestParameters: GetSupportTicketsForUserUsingGETRequest): Promise<GetSupportTicketsResponse> {
        const response = await this.getSupportTicketsForUserUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getUserDetails
     */
    async getUserDetailsUsingGETRaw(requestParameters: GetUserDetailsUsingGETRequest): Promise<runtime.ApiResponse<GetUserDetailsResponse>> {
        if (requestParameters.userIdString === null || requestParameters.userIdString === undefined) {
            throw new runtime.RequiredError('userIdString','Required parameter requestParameters.userIdString was null or undefined when calling getUserDetailsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userIdString}`.replace(`{${"userIdString"}}`, encodeURIComponent(String(requestParameters.userIdString))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUserDetailsResponseFromJSON(jsonValue));
    }

    /**
     * getUserDetails
     */
    async getUserDetailsUsingGET(requestParameters: GetUserDetailsUsingGETRequest): Promise<GetUserDetailsResponse> {
        const response = await this.getUserDetailsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getUserStripeAccount
     */
    async getUserStripeAccountUsingGETRaw(requestParameters: GetUserStripeAccountUsingGETRequest): Promise<runtime.ApiResponse<GetUserStripeAccountResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserStripeAccountUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/stripe/account`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUserStripeAccountResponseFromJSON(jsonValue));
    }

    /**
     * getUserStripeAccount
     */
    async getUserStripeAccountUsingGET(requestParameters: GetUserStripeAccountUsingGETRequest): Promise<GetUserStripeAccountResponse> {
        const response = await this.getUserStripeAccountUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * isUserLoggedIn
     */
    async isUserLoggedInUsingGETRaw(): Promise<runtime.ApiResponse<IsUserLoggedInResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/authentication/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IsUserLoggedInResponseFromJSON(jsonValue));
    }

    /**
     * isUserLoggedIn
     */
    async isUserLoggedInUsingGET(): Promise<IsUserLoggedInResponse> {
        const response = await this.isUserLoggedInUsingGETRaw();
        return await response.value();
    }

    /**
     * logoutUser
     */
    async logoutUserUsingDELETERaw(requestParameters: LogoutUserUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling logoutUserUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/logout`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * logoutUser
     */
    async logoutUserUsingDELETE(requestParameters: LogoutUserUsingDELETERequest): Promise<void> {
        await this.logoutUserUsingDELETERaw(requestParameters);
    }

    /**
     * removeUser
     */
    async removeUserUsingDELETERaw(requestParameters: RemoveUserUsingDELETERequest): Promise<runtime.ApiResponse<UpdateUserDetailsResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling removeUserUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateUserDetailsResponseFromJSON(jsonValue));
    }

    /**
     * removeUser
     */
    async removeUserUsingDELETE(requestParameters: RemoveUserUsingDELETERequest): Promise<UpdateUserDetailsResponse> {
        const response = await this.removeUserUsingDELETERaw(requestParameters);
        return await response.value();
    }

    /**
     * reviveUser
     */
    async reviveUserUsingPUTRaw(requestParameters: ReviveUserUsingPUTRequest): Promise<runtime.ApiResponse<UpdateUserDetailsResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling reviveUserUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/revive`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateUserDetailsResponseFromJSON(jsonValue));
    }

    /**
     * reviveUser
     */
    async reviveUserUsingPUT(requestParameters: ReviveUserUsingPUTRequest): Promise<UpdateUserDetailsResponse> {
        const response = await this.reviveUserUsingPUTRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateUserProfile
     */
    async updateUserProfileUsingPUTRaw(requestParameters: UpdateUserProfileUsingPUTRequest): Promise<runtime.ApiResponse<UpdateUserDetailsResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUserProfileUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateUserProfileUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserProfileRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateUserDetailsResponseFromJSON(jsonValue));
    }

    /**
     * updateUserProfile
     */
    async updateUserProfileUsingPUT(requestParameters: UpdateUserProfileUsingPUTRequest): Promise<UpdateUserDetailsResponse> {
        const response = await this.updateUserProfileUsingPUTRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateUserRoles
     */
    async updateUserRolesUsingPOSTRaw(requestParameters: UpdateUserRolesUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateUserRolesUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/users/roles`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserRolesRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * updateUserRoles
     */
    async updateUserRolesUsingPOST(requestParameters: UpdateUserRolesUsingPOSTRequest): Promise<void> {
        await this.updateUserRolesUsingPOSTRaw(requestParameters);
    }

    /**
     * validateUserByEmail
     */
    async validateUserByEmailUsingGETRaw(requestParameters: ValidateUserByEmailUsingGETRequest): Promise<runtime.ApiResponse<ValidateUserEmailResponse>> {
        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling validateUserByEmailUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/validate`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ValidateUserEmailResponseFromJSON(jsonValue));
    }

    /**
     * validateUserByEmail
     */
    async validateUserByEmailUsingGET(requestParameters: ValidateUserByEmailUsingGETRequest): Promise<ValidateUserEmailResponse> {
        const response = await this.validateUserByEmailUsingGETRaw(requestParameters);
        return await response.value();
    }

}
