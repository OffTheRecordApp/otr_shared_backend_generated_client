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
exports.LawfirmSurchargeControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var LawfirmSurchargeControllerApi = /** @class */ (function () {
    function LawfirmSurchargeControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary listLawfirmSurcharges
     * @param lawfirmId lawfirmId
     * @param featureType featureType
     */
    LawfirmSurchargeControllerApi.prototype.listLawfirmSurchargesUsingGET = function (lawfirmId, featureType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/surcharges'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling listLawfirmSurchargesUsingGET.');
        }
        if (featureType !== undefined) {
            queryParameters['featureType'] = featureType;
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
     * @summary removeSurcharges
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmSurchargeControllerApi.prototype.removeSurchargesUsingDELETE = function (lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/surcharges'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling removeSurchargesUsingDELETE.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling removeSurchargesUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
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
     * @summary saveLawfirmSurcharges
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmSurchargeControllerApi.prototype.saveLawfirmSurchargesUsingPOST = function (lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/surcharges'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling saveLawfirmSurchargesUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveLawfirmSurchargesUsingPOST.');
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
    LawfirmSurchargeControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return LawfirmSurchargeControllerApi;
}());
exports.LawfirmSurchargeControllerApi = LawfirmSurchargeControllerApi;