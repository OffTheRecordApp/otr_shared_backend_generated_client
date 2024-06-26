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
exports.UserSocialProfileControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var UserSocialProfileControllerApi = /** @class */ (function () {
    function UserSocialProfileControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary removeUserSocialProfile
     * @param platform platform
     * @param userId userId
     */
    UserSocialProfileControllerApi.prototype.removeUserSocialProfileUsingDELETE = function (platform, userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/social-profiles'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'platform' is not null or undefined
        if (platform === null || platform === undefined) {
            throw new Error('Required parameter platform was null or undefined when calling removeUserSocialProfileUsingDELETE.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling removeUserSocialProfileUsingDELETE.');
        }
        if (platform !== undefined) {
            queryParameters['platform'] = platform;
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
     * @summary saveUserSocialProfiles
     * @param userId userId
     * @param request request
     */
    UserSocialProfileControllerApi.prototype.saveUserSocialProfilesUsingPOST = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/users/{userId}/social-profiles'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling saveUserSocialProfilesUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveUserSocialProfilesUsingPOST.');
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
    UserSocialProfileControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return UserSocialProfileControllerApi;
}());
exports.UserSocialProfileControllerApi = UserSocialProfileControllerApi;
