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
exports.UserPasswordControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var UserPasswordControllerApi = /** @class */ (function () {
    function UserPasswordControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary changeUserPassword
     * @param request request
     */
    UserPasswordControllerApi.prototype.changeUserPasswordUsingPUT = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/user/p';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling changeUserPasswordUsingPUT.');
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
     * @summary resetUserPasswordByAdmin
     * @param userId userId
     * @param request request
     */
    UserPasswordControllerApi.prototype.resetUserPasswordByAdminUsingPUT = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/password'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling resetUserPasswordByAdminUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling resetUserPasswordByAdminUsingPUT.');
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
     * @summary resetUserPassword
     * @param request request
     */
    UserPasswordControllerApi.prototype.resetUserPasswordUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/user/p/reset';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling resetUserPasswordUsingPOST.');
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
     * @summary sendAccountVerificationCode
     * @param userId userId
     */
    UserPasswordControllerApi.prototype.sendAccountVerificationCodeUsingPOST = function (userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/send-verification-code';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling sendAccountVerificationCodeUsingPOST.');
        }
        if (userId !== undefined) {
            queryParameters['userId'] = userId;
        }
        var httpRequestParams = {
            method: 'POST',
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
     * @summary sendResetPasswordToken
     * @param email email
     */
    UserPasswordControllerApi.prototype.sendResetPasswordTokenUsingPOST = function (email, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/user/password/token';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling sendResetPasswordTokenUsingPOST.');
        }
        if (email !== undefined) {
            queryParameters['email'] = email;
        }
        var httpRequestParams = {
            method: 'POST',
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
     * @summary verifyPwdResetToken
     * @param token token
     */
    UserPasswordControllerApi.prototype.verifyPwdResetTokenUsingGET = function (token, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/user/password/token';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling verifyPwdResetTokenUsingGET.');
        }
        if (token !== undefined) {
            queryParameters['token'] = token;
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
     * @summary verifyUserAccount
     * @param code code
     * @param userId userId
     * @param fieldName fieldName
     * @param fieldValue fieldValue
     */
    UserPasswordControllerApi.prototype.verifyUserAccountUsingPUT = function (code, userId, fieldName, fieldValue, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/verify-account';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling verifyUserAccountUsingPUT.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling verifyUserAccountUsingPUT.');
        }
        if (code !== undefined) {
            queryParameters['code'] = code;
        }
        if (fieldName !== undefined) {
            queryParameters['fieldName'] = fieldName;
        }
        if (fieldValue !== undefined) {
            queryParameters['fieldValue'] = fieldValue;
        }
        if (userId !== undefined) {
            queryParameters['userId'] = userId;
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    UserPasswordControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return UserPasswordControllerApi;
}());
exports.UserPasswordControllerApi = UserPasswordControllerApi;
