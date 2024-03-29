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
exports.CourtControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var CourtControllerApi = /** @class */ (function () {
    function CourtControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary addCourt
     * @param request request
     */
    CourtControllerApi.prototype.addCourtUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/courts';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addCourtUsingPOST.');
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
     * @summary findCourts
     * @param citationId citationId
     * @param city city
     * @param countryCode countryCode
     * @param county county
     * @param length length
     * @param offset offset
     * @param q q
     * @param regionCode regionCode
     * @param state state
     */
    CourtControllerApi.prototype.findCourtsUsingGET = function (citationId, city, countryCode, county, length, offset, q, regionCode, state, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v2/courts/traffic';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (citationId !== undefined) {
            queryParameters['citationId'] = citationId;
        }
        if (city !== undefined) {
            queryParameters['city'] = city;
        }
        if (countryCode !== undefined) {
            queryParameters['countryCode'] = countryCode;
        }
        if (county !== undefined) {
            queryParameters['county'] = county;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }
        if (q !== undefined) {
            queryParameters['q'] = q;
        }
        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }
        if (state !== undefined) {
            queryParameters['state'] = state;
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
     * @summary findCourtsWithNoCoverage
     * @param countryCode countryCode
     * @param countyId countyId
     * @param regionCode regionCode
     * @param trailingDays trailingDays
     */
    CourtControllerApi.prototype.findCourtsWithNoCoverageUsingGET = function (countryCode, countyId, regionCode, trailingDays, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/courts/no-coverage';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (countryCode !== undefined) {
            queryParameters['countryCode'] = countryCode;
        }
        if (countyId !== undefined) {
            queryParameters['countyId'] = countyId;
        }
        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }
        if (trailingDays !== undefined) {
            queryParameters['trailingDays'] = trailingDays;
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
     * @summary getCourt
     * @param courtId courtId
     */
    CourtControllerApi.prototype.getCourtUsingGET = function (courtId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/courts/{courtId}'
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new Error('Required parameter courtId was null or undefined when calling getCourtUsingGET.');
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
     * @summary searchCourts
     * @param citationId citationId
     * @param city city
     * @param countryCode countryCode
     * @param county county
     * @param length length
     * @param offset offset
     * @param q q
     * @param regionCode regionCode
     * @param state state
     */
    CourtControllerApi.prototype.searchCourtsUsingGET = function (citationId, city, countryCode, county, length, offset, q, regionCode, state, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/courts/traffic';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (citationId !== undefined) {
            queryParameters['citationId'] = citationId;
        }
        if (city !== undefined) {
            queryParameters['city'] = city;
        }
        if (countryCode !== undefined) {
            queryParameters['countryCode'] = countryCode;
        }
        if (county !== undefined) {
            queryParameters['county'] = county;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }
        if (q !== undefined) {
            queryParameters['q'] = q;
        }
        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }
        if (state !== undefined) {
            queryParameters['state'] = state;
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
     * @summary updateCourtAddress
     * @param addressId addressId
     * @param courtId courtId
     * @param request request
     */
    CourtControllerApi.prototype.updateCourtAddressUsingPUT = function (addressId, courtId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/courts/{courtId}/addresses/{addressId}'
            .replace('{' + 'addressId' + '}', encodeURIComponent(String(addressId)))
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'addressId' is not null or undefined
        if (addressId === null || addressId === undefined) {
            throw new Error('Required parameter addressId was null or undefined when calling updateCourtAddressUsingPUT.');
        }
        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new Error('Required parameter courtId was null or undefined when calling updateCourtAddressUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCourtAddressUsingPUT.');
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
     * @summary updateCourt
     * @param courtId courtId
     * @param request request
     */
    CourtControllerApi.prototype.updateCourtUsingPUT = function (courtId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/courts/{courtId}'
            .replace('{' + 'courtId' + '}', encodeURIComponent(String(courtId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'courtId' is not null or undefined
        if (courtId === null || courtId === undefined) {
            throw new Error('Required parameter courtId was null or undefined when calling updateCourtUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCourtUsingPUT.');
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
    CourtControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return CourtControllerApi;
}());
exports.CourtControllerApi = CourtControllerApi;
