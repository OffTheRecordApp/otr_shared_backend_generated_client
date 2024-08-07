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
exports.CaseCounterOfferControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var CaseCounterOfferControllerApi = /** @class */ (function () {
    function CaseCounterOfferControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary acceptCaseCounter
     * @param caseId caseId
     * @param counterId counterId
     */
    CaseCounterOfferControllerApi.prototype.acceptCaseCounterUsingPUT = function (caseId, counterId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/counters/{counterId}/accept'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'counterId' + '}', encodeURIComponent(String(counterId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling acceptCaseCounterUsingPUT.');
        }
        // verify required parameter 'counterId' is not null or undefined
        if (counterId === null || counterId === undefined) {
            throw new Error('Required parameter counterId was null or undefined when calling acceptCaseCounterUsingPUT.');
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
    /**
     *
     * @summary declineCaseCounter
     * @param caseId caseId
     * @param counterId counterId
     * @param request request
     */
    CaseCounterOfferControllerApi.prototype.declineCaseCounterUsingPUT = function (caseId, counterId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/counters/{counterId}/decline'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'counterId' + '}', encodeURIComponent(String(counterId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling declineCaseCounterUsingPUT.');
        }
        // verify required parameter 'counterId' is not null or undefined
        if (counterId === null || counterId === undefined) {
            throw new Error('Required parameter counterId was null or undefined when calling declineCaseCounterUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling declineCaseCounterUsingPUT.');
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
     * @summary getCaseCounterOptions
     */
    CaseCounterOfferControllerApi.prototype.getCaseCounterOptionsUsingGET = function (extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/counter-options';
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
     * @summary getCounterOffer
     * @param caseId caseId
     */
    CaseCounterOfferControllerApi.prototype.getCounterOfferUsingGET = function (caseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/counters'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getCounterOfferUsingGET.');
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
     * @summary initiateCaseCounter
     * @param caseId caseId
     * @param request request
     */
    CaseCounterOfferControllerApi.prototype.initiateCaseCounterUsingPOST = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/counters'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling initiateCaseCounterUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling initiateCaseCounterUsingPOST.');
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
     * @summary withdrawCaseCounter
     * @param caseId caseId
     * @param counterId counterId
     */
    CaseCounterOfferControllerApi.prototype.withdrawCaseCounterUsingPUT = function (caseId, counterId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/counters/{counterId}/withdraw'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'counterId' + '}', encodeURIComponent(String(counterId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling withdrawCaseCounterUsingPUT.');
        }
        // verify required parameter 'counterId' is not null or undefined
        if (counterId === null || counterId === undefined) {
            throw new Error('Required parameter counterId was null or undefined when calling withdrawCaseCounterUsingPUT.');
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
    CaseCounterOfferControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return CaseCounterOfferControllerApi;
}());
exports.CaseCounterOfferControllerApi = CaseCounterOfferControllerApi;
