"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var UserProfileControllerApi = /** @class */ (function () {
    function UserProfileControllerApi($http, $httpParamSerializer, basePath) {
        this.$http = $http;
        this.$httpParamSerializer = $httpParamSerializer;
        this.basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
        this.defaultHeaders = {};
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
    UserProfileControllerApi.prototype.addUserAddressUsingPOST = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/addresses'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addUserAddressUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addUserAddressUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary addUserPhoneNumber
     * @param userId userId
     * @param request request
     */
    UserProfileControllerApi.prototype.addUserPhoneNumberUsingPOST = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/phone-numbers'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addUserPhoneNumberUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addUserPhoneNumberUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary deleteUserPhoneNumber
     * @param phoneNumberId phoneNumberId
     * @param userId userId
     */
    UserProfileControllerApi.prototype.deleteUserPhoneNumberUsingDELETE = function (phoneNumberId, userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/phone-numbers/{phoneNumberId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new Error('Required parameter phoneNumberId was null or undefined when calling deleteUserPhoneNumberUsingDELETE.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteUserPhoneNumberUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary getUserAddresses
     * @param userId userId
     */
    UserProfileControllerApi.prototype.getUserAddressesUsingGET = function (userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/addresses'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAddressesUsingGET.');
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary mergeUser
     * @param primaryUserId primaryUserId
     * @param request request
     */
    UserProfileControllerApi.prototype.mergeUserUsingPOST = function (primaryUserId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{primaryUserId}/merge'
            .replace('{' + 'primaryUserId' + '}', encodeURIComponent(String(primaryUserId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'primaryUserId' is not null or undefined
        if (primaryUserId === null || primaryUserId === undefined) {
            throw new Error('Required parameter primaryUserId was null or undefined when calling mergeUserUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling mergeUserUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary updateProfilePicture
     * @param userId userId
     * @param request request
     */
    UserProfileControllerApi.prototype.updateProfilePictureUsingPUT = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/profile-picture'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateProfilePictureUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateProfilePictureUsingPUT.');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary updateUserAddress
     * @param addressId addressId
     * @param userId userId
     * @param request request
     */
    UserProfileControllerApi.prototype.updateUserAddressUsingPUT = function (addressId, userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/addresses/{addressId}'
            .replace('{' + 'addressId' + '}', encodeURIComponent(String(addressId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
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
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary updateUserPhoneNumber
     * @param phoneNumberId phoneNumberId
     * @param userId userId
     * @param request request
     */
    UserProfileControllerApi.prototype.updateUserPhoneNumberUsingPUT = function (phoneNumberId, userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/phone-numbers/{phoneNumberId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
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
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    /**
     *
     * @summary validatePhoneNumber
     * @param validatePhoneNumberRequest validatePhoneNumberRequest
     */
    UserProfileControllerApi.prototype.validatePhoneNumberUsingPOST = function (validatePhoneNumberRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/validate-phone-number';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'validatePhoneNumberRequest' is not null or undefined
        if (validatePhoneNumberRequest === null || validatePhoneNumberRequest === undefined) {
            throw new Error('Required parameter validatePhoneNumberRequest was null or undefined when calling validatePhoneNumberUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: validatePhoneNumberRequest,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    UserProfileControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return UserProfileControllerApi;
}());
exports.UserProfileControllerApi = UserProfileControllerApi;
