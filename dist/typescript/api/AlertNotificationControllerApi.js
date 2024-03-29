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
exports.AlertNotificationControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var AlertNotificationControllerApi = /** @class */ (function () {
    function AlertNotificationControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary getAlerts
     * @param userId userId
     */
    AlertNotificationControllerApi.prototype.getAlertsUsingGET = function (userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/alerts/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getAlertsUsingGET.');
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
     * @summary markAlertAsRead
     * @param alertId alertId
     */
    AlertNotificationControllerApi.prototype.markAlertAsReadUsingDELETE = function (alertId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/alerts/{alertId}'
            .replace('{' + 'alertId' + '}', encodeURIComponent(String(alertId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'alertId' is not null or undefined
        if (alertId === null || alertId === undefined) {
            throw new Error('Required parameter alertId was null or undefined when calling markAlertAsReadUsingDELETE.');
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
    AlertNotificationControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return AlertNotificationControllerApi;
}());
exports.AlertNotificationControllerApi = AlertNotificationControllerApi;
