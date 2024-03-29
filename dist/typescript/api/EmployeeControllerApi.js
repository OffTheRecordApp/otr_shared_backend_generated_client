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
exports.EmployeeControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var EmployeeControllerApi = /** @class */ (function () {
    function EmployeeControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary listEmployees
     * @param isActive isActive
     * @param length length
     * @param page page
     * @param team team
     */
    EmployeeControllerApi.prototype.listEmployeesUsingGET = function (isActive, length, page, team, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/employees';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (isActive !== undefined) {
            queryParameters['isActive'] = isActive;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (page !== undefined) {
            queryParameters['page'] = page;
        }
        if (team !== undefined) {
            queryParameters['team'] = team;
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
    EmployeeControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return EmployeeControllerApi;
}());
exports.EmployeeControllerApi = EmployeeControllerApi;
