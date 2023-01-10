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
exports.UserControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var UserControllerApi = /** @class */ (function () {
    function UserControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary findChargeDisputesByUserId
     * @param userId userId
     */
    UserControllerApi.prototype.findChargeDisputesByUserIdUsingGET = function (userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/disputes'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling findChargeDisputesByUserIdUsingGET.');
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
     * @summary getCurrentUserInfo
     * @param isAdmin isAdmin
     * @param serviceProviderId serviceProviderId
     */
    UserControllerApi.prototype.getCurrentUserInfoUsingGET = function (isAdmin, serviceProviderId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/user';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (isAdmin !== undefined) {
            queryParameters['isAdmin'] = isAdmin;
        }
        if (serviceProviderId !== undefined) {
            queryParameters['serviceProviderId'] = serviceProviderId;
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
     * @summary getOverduePayments
     * @param userId userId
     */
    UserControllerApi.prototype.getOverduePaymentsUsingGET = function (userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/overdue-payments'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getOverduePaymentsUsingGET.');
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
     * @summary getSupportTicketsForUser
     * @param email email
     */
    UserControllerApi.prototype.getSupportTicketsForUserUsingGET = function (email, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{email}/support-tickets'
            .replace('{' + 'email' + '}', encodeURIComponent(String(email)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling getSupportTicketsForUserUsingGET.');
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
     * @summary getUserDetails
     * @param userIdString userIdString
     */
    UserControllerApi.prototype.getUserDetailsUsingGET = function (userIdString, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userIdString}'
            .replace('{' + 'userIdString' + '}', encodeURIComponent(String(userIdString)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userIdString' is not null or undefined
        if (userIdString === null || userIdString === undefined) {
            throw new Error('Required parameter userIdString was null or undefined when calling getUserDetailsUsingGET.');
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
     * @summary getUserStripeAccount
     * @param userId userId
     */
    UserControllerApi.prototype.getUserStripeAccountUsingGET = function (userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/stripe/account'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserStripeAccountUsingGET.');
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
     * @summary isUserLoggedIn
     */
    UserControllerApi.prototype.isUserLoggedInUsingGET = function (extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/authentication/status';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
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
     * @summary updateUserProfile
     * @param userId userId
     * @param request request
     */
    UserControllerApi.prototype.updateUserProfileUsingPUT = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserProfileUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateUserProfileUsingPUT.');
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
     * @summary updateUserRoles
     * @param request request
     */
    UserControllerApi.prototype.updateUserRolesUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/roles';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateUserRolesUsingPOST.');
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
     * @summary validateUserByEmail
     * @param email email
     */
    UserControllerApi.prototype.validateUserByEmailUsingGET = function (email, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/validate';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling validateUserByEmailUsingGET.');
        }
        if (email !== undefined) {
            queryParameters['email'] = email;
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
    UserControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return UserControllerApi;
}());
exports.UserControllerApi = UserControllerApi;
