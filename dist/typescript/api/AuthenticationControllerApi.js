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
exports.AuthenticationControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var AuthenticationControllerApi = /** @class */ (function () {
    function AuthenticationControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary getUserInfo
     */
    AuthenticationControllerApi.prototype.getUserInfoUsingGET = function (extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/authentication/user';
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
    AuthenticationControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return AuthenticationControllerApi;
}());
exports.AuthenticationControllerApi = AuthenticationControllerApi;