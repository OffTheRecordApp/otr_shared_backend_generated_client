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
exports.ReportingControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var ReportingControllerApi = /** @class */ (function () {
    function ReportingControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary getCourtCoverageForCountyReport
     * @param countyId countyId
     * @param regionCode regionCode
     * @param urWindowInDays urWindowInDays
     */
    ReportingControllerApi.prototype.getCourtCoverageForCountyReportUsingGET = function (countyId, regionCode, urWindowInDays, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/reports/court-coverage/{regionCode}/{countyId}'
            .replace('{' + 'countyId' + '}', encodeURIComponent(String(countyId)))
            .replace('{' + 'regionCode' + '}', encodeURIComponent(String(regionCode)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'countyId' is not null or undefined
        if (countyId === null || countyId === undefined) {
            throw new Error('Required parameter countyId was null or undefined when calling getCourtCoverageForCountyReportUsingGET.');
        }
        // verify required parameter 'regionCode' is not null or undefined
        if (regionCode === null || regionCode === undefined) {
            throw new Error('Required parameter regionCode was null or undefined when calling getCourtCoverageForCountyReportUsingGET.');
        }
        if (urWindowInDays !== undefined) {
            queryParameters['urWindowInDays'] = urWindowInDays;
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
     * @summary getCourtCoverageForStateReport
     * @param regionCode regionCode
     * @param countyId countyId
     * @param urWindowInDays urWindowInDays
     */
    ReportingControllerApi.prototype.getCourtCoverageForStateReportUsingGET = function (regionCode, countyId, urWindowInDays, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/reports/court-coverage/{regionCode}'
            .replace('{' + 'regionCode' + '}', encodeURIComponent(String(regionCode)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'regionCode' is not null or undefined
        if (regionCode === null || regionCode === undefined) {
            throw new Error('Required parameter regionCode was null or undefined when calling getCourtCoverageForStateReportUsingGET.');
        }
        if (countyId !== undefined) {
            queryParameters['countyId'] = countyId;
        }
        if (urWindowInDays !== undefined) {
            queryParameters['urWindowInDays'] = urWindowInDays;
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
     * @summary getCourtCoverageReport
     * @param urWindowInDays urWindowInDays
     */
    ReportingControllerApi.prototype.getCourtCoverageReportUsingGET = function (urWindowInDays, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/reports/court-coverage';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (urWindowInDays !== undefined) {
            queryParameters['urWindowInDays'] = urWindowInDays;
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
     * @summary getLawfirmCoverageReport
     * @param countyId countyId
     * @param regionCode regionCode
     */
    ReportingControllerApi.prototype.getLawfirmCoverageReportUsingGET = function (countyId, regionCode, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/reports/court-coverage/lawfirms';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (countyId !== undefined) {
            queryParameters['countyId'] = countyId;
        }
        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
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
    ReportingControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return ReportingControllerApi;
}());
exports.ReportingControllerApi = ReportingControllerApi;