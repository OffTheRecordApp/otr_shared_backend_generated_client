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
exports.OneTimePasswordControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var OneTimePasswordControllerApi = /** @class */ (function () {
    function OneTimePasswordControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary sendOneTimePassword
     */
    OneTimePasswordControllerApi.prototype.sendOneTimePasswordUsingPOST = function (extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/one_time_password';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
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
    OneTimePasswordControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return OneTimePasswordControllerApi;
}());
exports.OneTimePasswordControllerApi = OneTimePasswordControllerApi;
