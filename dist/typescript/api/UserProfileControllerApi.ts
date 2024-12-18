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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class UserProfileControllerApi {
    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary addUserAddress
     * @param userId userId
     * @param request request
     */
    public addUserAddressUsingPOST (userId: number, request: models.UpsertAddressRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/addresses'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addUserAddressUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addUserAddressUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary addUserPhoneNumber
     * @param userId userId
     * @param request request
     */
    public addUserPhoneNumberUsingPOST (userId: number, request: models.UpdateUserPhoneNumberRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UpdateUserDetailsResponse> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/phone-numbers'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addUserPhoneNumberUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addUserPhoneNumberUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary deleteUserPhoneNumber
     * @param phoneNumberId phoneNumberId
     * @param userId userId
     */
    public deleteUserPhoneNumberUsingDELETE (phoneNumberId: number, userId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UpdateUserDetailsResponse> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/phone-numbers/{phoneNumberId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new Error('Required parameter phoneNumberId was null or undefined when calling deleteUserPhoneNumberUsingDELETE.');
        }

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteUserPhoneNumberUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getUserAddresses
     * @param userId userId
     */
    public getUserAddressesUsingGET (userId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetUserAddressesResponse> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/addresses'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAddressesUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary mergeUser
     * @param primaryUserId primaryUserId
     * @param request request
     */
    public mergeUserUsingPOST (primaryUserId: string, request: models.MergeUserRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.MergeUserResponse> {
        const localVarPath = this.basePath + '/api/v1/users/{primaryUserId}/merge'
            .replace('{' + 'primaryUserId' + '}', encodeURIComponent(String(primaryUserId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'primaryUserId' is not null or undefined
        if (primaryUserId === null || primaryUserId === undefined) {
            throw new Error('Required parameter primaryUserId was null or undefined when calling mergeUserUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling mergeUserUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary setMarketingEmailOptIn
     * @param userId userId
     * @param request request
     */
    public setMarketingEmailOptInUsingPUT (userId: number, request: models.SetMarketingEmailOptInRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/set-marketing-email-opt-in'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setMarketingEmailOptInUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling setMarketingEmailOptInUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updateProfilePicture
     * @param userId userId
     * @param request request
     */
    public updateProfilePictureUsingPUT (userId: number, request: models.UpdateProfilePictureRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UpdateProfilePictureResponse> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/profile-picture'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateProfilePictureUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateProfilePictureUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updateUserAddress
     * @param addressId addressId
     * @param userId userId
     * @param request request
     */
    public updateUserAddressUsingPUT (addressId: number, userId: number, request: models.UpsertAddressRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/addresses/{addressId}'
            .replace('{' + 'addressId' + '}', encodeURIComponent(String(addressId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'addressId' is not null or undefined
        if (addressId === null || addressId === undefined) {
            throw new Error('Required parameter addressId was null or undefined when calling updateUserAddressUsingPUT.');
        }

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserAddressUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateUserAddressUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updateUserPhoneNumber
     * @param phoneNumberId phoneNumberId
     * @param userId userId
     * @param request request
     */
    public updateUserPhoneNumberUsingPUT (phoneNumberId: number, userId: number, request: models.UpdateUserPhoneNumberRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UpdateUserDetailsResponse> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/phone-numbers/{phoneNumberId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new Error('Required parameter phoneNumberId was null or undefined when calling updateUserPhoneNumberUsingPUT.');
        }

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserPhoneNumberUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateUserPhoneNumberUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary validatePhoneNumber
     * @param validatePhoneNumberRequest validatePhoneNumberRequest
     */
    public validatePhoneNumberUsingPOST (validatePhoneNumberRequest: models.ValidatePhoneNumberRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ValidatePhoneNumberResponse> {
        const localVarPath = this.basePath + '/api/v1/users/validate-phone-number';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'validatePhoneNumberRequest' is not null or undefined
        if (validatePhoneNumberRequest === null || validatePhoneNumberRequest === undefined) {
            throw new Error('Required parameter validatePhoneNumberRequest was null or undefined when calling validatePhoneNumberUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: validatePhoneNumberRequest,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
