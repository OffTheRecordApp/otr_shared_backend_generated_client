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
exports.LegalServicesControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var LegalServicesControllerApi = /** @class */ (function () {
    function LegalServicesControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary createLegalServices
     * @param citationId citationId
     * @param request request
     */
    LegalServicesControllerApi.prototype.createLegalServicesUsingPOST = function (citationId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/legal-services'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling createLegalServicesUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createLegalServicesUsingPOST.');
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
     * @summary selectLegalService
     * @param citationId citationId
     * @param lawfirmCaseId lawfirmCaseId
     */
    LegalServicesControllerApi.prototype.selectLegalServiceUsingPUT = function (citationId, lawfirmCaseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/citations/{citationId}/select-legal-service/{lawfirmCaseId}'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)))
            .replace('{' + 'lawfirmCaseId' + '}', encodeURIComponent(String(lawfirmCaseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling selectLegalServiceUsingPUT.');
        }
        // verify required parameter 'lawfirmCaseId' is not null or undefined
        if (lawfirmCaseId === null || lawfirmCaseId === undefined) {
            throw new Error('Required parameter lawfirmCaseId was null or undefined when calling selectLegalServiceUsingPUT.');
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
    LegalServicesControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return LegalServicesControllerApi;
}());
exports.LegalServicesControllerApi = LegalServicesControllerApi;
