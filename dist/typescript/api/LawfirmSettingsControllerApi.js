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
exports.LawfirmSettingsControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var LawfirmSettingsControllerApi = /** @class */ (function () {
    function LawfirmSettingsControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary getLawfirmSetting
     * @param lawfirmId lawfirmId
     * @param name name
     */
    LawfirmSettingsControllerApi.prototype.getLawfirmSettingUsingGET = function (lawfirmId, name, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirm-settings/{lawfirmId}/setting'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getLawfirmSettingUsingGET.');
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getLawfirmSettingUsingGET.');
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
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
     * @summary getLawfirmSettings
     * @param lawfirmId lawfirmId
     */
    LawfirmSettingsControllerApi.prototype.getLawfirmSettingsUsingGET = function (lawfirmId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/settings'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getLawfirmSettingsUsingGET.');
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
     * @summary updateLawfirmSetting
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmSettingsControllerApi.prototype.updateLawfirmSettingUsingPOST = function (lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirm-settings/{lawfirmId}/setting'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling updateLawfirmSettingUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateLawfirmSettingUsingPOST.');
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
     * @summary updateLawfirmSettings
     * @param lawfirmIdString lawfirmIdString
     * @param request request
     */
    LawfirmSettingsControllerApi.prototype.updateLawfirmSettingsUsingPOST = function (lawfirmIdString, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmIdString}/settings'
            .replace('{' + 'lawfirmIdString' + '}', encodeURIComponent(String(lawfirmIdString)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmIdString' is not null or undefined
        if (lawfirmIdString === null || lawfirmIdString === undefined) {
            throw new Error('Required parameter lawfirmIdString was null or undefined when calling updateLawfirmSettingsUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateLawfirmSettingsUsingPOST.');
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
    LawfirmSettingsControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return LawfirmSettingsControllerApi;
}());
exports.LawfirmSettingsControllerApi = LawfirmSettingsControllerApi;
