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
exports.LawfirmFeeCoverageControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var LawfirmFeeCoverageControllerApi = /** @class */ (function () {
    function LawfirmFeeCoverageControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary addCourtToCoverage
     * @param lawfirmIdString lawfirmIdString
     * @param request request
     */
    LawfirmFeeCoverageControllerApi.prototype.addCourtToCoverageUsingPOST = function (lawfirmIdString, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmIdString}/courts'
            .replace('{' + 'lawfirmIdString' + '}', encodeURIComponent(String(lawfirmIdString)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmIdString' is not null or undefined
        if (lawfirmIdString === null || lawfirmIdString === undefined) {
            throw new Error('Required parameter lawfirmIdString was null or undefined when calling addCourtToCoverageUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addCourtToCoverageUsingPOST.');
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
     * @summary enableViolationsForLawfirm
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmFeeCoverageControllerApi.prototype.enableViolationsForLawfirmUsingPOST = function (lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/account-fees/enable-violations'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling enableViolationsForLawfirmUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling enableViolationsForLawfirmUsingPOST.');
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
     * @summary getAccountFees
     * @param lawfirmId lawfirmId
     * @param enabledFeesOnly enabledFeesOnly
     */
    LawfirmFeeCoverageControllerApi.prototype.getAccountFeesUsingGET = function (lawfirmId, enabledFeesOnly, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/account-fees'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getAccountFeesUsingGET.');
        }
        if (enabledFeesOnly !== undefined) {
            queryParameters['enabledFeesOnly'] = enabledFeesOnly;
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
     * @summary getLawfirmCoverage
     * @param lawfirmIdString lawfirmIdString
     */
    LawfirmFeeCoverageControllerApi.prototype.getLawfirmCoverageUsingGET = function (lawfirmIdString, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmIdString}/coverage'
            .replace('{' + 'lawfirmIdString' + '}', encodeURIComponent(String(lawfirmIdString)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmIdString' is not null or undefined
        if (lawfirmIdString === null || lawfirmIdString === undefined) {
            throw new Error('Required parameter lawfirmIdString was null or undefined when calling getLawfirmCoverageUsingGET.');
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
     * @summary getLawfirmFeeCoverage
     * @param lawfirmId lawfirmId
     */
    LawfirmFeeCoverageControllerApi.prototype.getLawfirmFeeCoverageUsingGET = function (lawfirmId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v2/lawfirms/{lawfirmId}/coverage'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getLawfirmFeeCoverageUsingGET.');
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
     * @summary removeAccountFees
     * @param lawfirmId lawfirmId
     * @param classification classification
     * @param isPermitted isPermitted
     * @param violationId violationId
     */
    LawfirmFeeCoverageControllerApi.prototype.removeAccountFeesUsingDELETE = function (lawfirmId, classification, isPermitted, violationId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/account-fees'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling removeAccountFeesUsingDELETE.');
        }
        if (classification !== undefined) {
            queryParameters['classification'] = classification;
        }
        if (isPermitted !== undefined) {
            queryParameters['isPermitted'] = isPermitted;
        }
        if (violationId !== undefined) {
            queryParameters['violationId'] = violationId;
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
     * @summary removeCourts
     * @param courtsToRemove courtsToRemove
     * @param lawfirmId lawfirmId
     */
    LawfirmFeeCoverageControllerApi.prototype.removeCourtsUsingDELETE = function (courtsToRemove, lawfirmId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/courts'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'courtsToRemove' is not null or undefined
        if (courtsToRemove === null || courtsToRemove === undefined) {
            throw new Error('Required parameter courtsToRemove was null or undefined when calling removeCourtsUsingDELETE.');
        }
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling removeCourtsUsingDELETE.');
        }
        if (courtsToRemove !== undefined) {
            queryParameters['courtsToRemove'] = courtsToRemove;
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
     * @summary removeCoverage
     * @param lawfirmId lawfirmId
     * @param courtsToRemove courtsToRemove
     */
    LawfirmFeeCoverageControllerApi.prototype.removeCoverageUsingDELETE = function (lawfirmId, courtsToRemove, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v2/lawfirms/{lawfirmId}/courts'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling removeCoverageUsingDELETE.');
        }
        // verify required parameter 'courtsToRemove' is not null or undefined
        if (courtsToRemove === null || courtsToRemove === undefined) {
            throw new Error('Required parameter courtsToRemove was null or undefined when calling removeCoverageUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
            data: courtsToRemove,
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
     * @summary resetFeesForLawfirm
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmFeeCoverageControllerApi.prototype.resetFeesForLawfirmUsingPOST = function (lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/account-fees/reset'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling resetFeesForLawfirmUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling resetFeesForLawfirmUsingPOST.');
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
     * @summary saveAccountFees
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmFeeCoverageControllerApi.prototype.saveAccountFeesUsingPOST = function (lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/account-fees'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling saveAccountFeesUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveAccountFeesUsingPOST.');
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
    LawfirmFeeCoverageControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return LawfirmFeeCoverageControllerApi;
}());
exports.LawfirmFeeCoverageControllerApi = LawfirmFeeCoverageControllerApi;
