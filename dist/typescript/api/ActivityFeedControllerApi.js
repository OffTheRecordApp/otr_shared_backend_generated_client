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
exports.ActivityFeedControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var ActivityFeedControllerApi = /** @class */ (function () {
    function ActivityFeedControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary listActivityFeed
     * @param limit limit
     * @param nextPageToken nextPageToken
     * @param previousPageToken previousPageToken
     * @param regionCode regionCode
     */
    ActivityFeedControllerApi.prototype.listActivityFeedUsingGET = function (limit, nextPageToken, previousPageToken, regionCode, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/activity-feed';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling listActivityFeedUsingGET.');
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (nextPageToken !== undefined) {
            queryParameters['nextPageToken'] = nextPageToken;
        }
        if (previousPageToken !== undefined) {
            queryParameters['previousPageToken'] = previousPageToken;
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
    /**
     *
     * @summary listCaseOutcomes
     * @param includeCriminal includeCriminal
     * @param limit limit
     * @param regionCode regionCode
     * @param resolutionStatuses resolutionStatuses
     * @param startDate startDate
     */
    ActivityFeedControllerApi.prototype.listCaseOutcomesUsingGET = function (includeCriminal, limit, regionCode, resolutionStatuses, startDate, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/activity-feed/case-outcomes';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (includeCriminal !== undefined) {
            queryParameters['includeCriminal'] = includeCriminal;
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }
        if (resolutionStatuses !== undefined) {
            queryParameters['resolutionStatuses'] = resolutionStatuses;
        }
        if (startDate !== undefined) {
            queryParameters['startDate'] = startDate;
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
    ActivityFeedControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return ActivityFeedControllerApi;
}());
exports.ActivityFeedControllerApi = ActivityFeedControllerApi;
