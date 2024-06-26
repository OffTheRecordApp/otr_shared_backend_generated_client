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
exports.DashboardControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var DashboardControllerApi = /** @class */ (function () {
    function DashboardControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary getBookings
     * @param request request
     */
    DashboardControllerApi.prototype.getBookingsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/bookings';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getBookingsUsingPOST.');
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
     * @summary getUserRegistrations
     * @param request request
     */
    DashboardControllerApi.prototype.getUserRegistrationsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/registrations';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getUserRegistrationsUsingPOST.');
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
     * @summary listCaseBookings
     * @param request request
     */
    DashboardControllerApi.prototype.listCaseBookingsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/bookings2';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling listCaseBookingsUsingPOST.');
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
     * @summary listCaseCancellations
     * @param request request
     */
    DashboardControllerApi.prototype.listCaseCancellationsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/cancellations';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling listCaseCancellationsUsingPOST.');
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
     * @summary listCitations
     * @param request request
     */
    DashboardControllerApi.prototype.listCitationsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/citations';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling listCitationsUsingPOST.');
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
     * @summary listCustomers
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listCustomersUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/customers';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listCustomersUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listDropoffs
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listDropoffsUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/dropoff';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listDropoffsUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listExpenses
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listExpensesUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/expenses';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listExpensesUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listLawfirmsEngaged
     * @param request request
     */
    DashboardControllerApi.prototype.listLawfirmsEngagedUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/lawfirm-engagement';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling listLawfirmsEngagedUsingPOST.');
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
     * @summary listLawyerLeads
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listLawyerLeadsUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/lawyer-leads';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listLawyerLeadsUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listPhoneCalls
     * @param agentId agentId
     * @param agentName agentName
     * @param callQueueName callQueueName
     * @param callStatus callStatus
     * @param customerName customerName
     * @param direction direction
     * @param endDate endDate
     * @param ivrName ivrName
     * @param length length
     * @param page page
     * @param phoneNumber phoneNumber
     * @param shouldIncludePhoneCalls shouldIncludePhoneCalls
     * @param sortBy sortBy
     * @param sortOrder sortOrder
     * @param startDate startDate
     * @param teamName teamName
     * @param timeZoneId timeZoneId
     * @param totalCalls totalCalls
     * @param totalOtrAccounts totalOtrAccounts
     */
    DashboardControllerApi.prototype.listPhoneCallsUsingGET = function (agentId, agentName, callQueueName, callStatus, customerName, direction, endDate, ivrName, length, page, phoneNumber, shouldIncludePhoneCalls, sortBy, sortOrder, startDate, teamName, timeZoneId, totalCalls, totalOtrAccounts, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/phone-calls';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (agentId !== undefined) {
            queryParameters['agentId'] = agentId;
        }
        if (agentName !== undefined) {
            queryParameters['agentName'] = agentName;
        }
        if (callQueueName !== undefined) {
            queryParameters['callQueueName'] = callQueueName;
        }
        if (callStatus !== undefined) {
            queryParameters['callStatus'] = callStatus;
        }
        if (customerName !== undefined) {
            queryParameters['customerName'] = customerName;
        }
        if (direction !== undefined) {
            queryParameters['direction'] = direction;
        }
        if (endDate !== undefined) {
            queryParameters['endDate'] = endDate;
        }
        if (ivrName !== undefined) {
            queryParameters['ivrName'] = ivrName;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (page !== undefined) {
            queryParameters['page'] = page;
        }
        if (phoneNumber !== undefined) {
            queryParameters['phoneNumber'] = phoneNumber;
        }
        if (shouldIncludePhoneCalls !== undefined) {
            queryParameters['shouldIncludePhoneCalls'] = shouldIncludePhoneCalls;
        }
        if (sortBy !== undefined) {
            queryParameters['sortBy'] = sortBy;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startDate !== undefined) {
            queryParameters['startDate'] = startDate;
        }
        if (teamName !== undefined) {
            queryParameters['teamName'] = teamName;
        }
        if (timeZoneId !== undefined) {
            queryParameters['timeZoneId'] = timeZoneId;
        }
        if (totalCalls !== undefined) {
            queryParameters['totalCalls'] = totalCalls;
        }
        if (totalOtrAccounts !== undefined) {
            queryParameters['totalOtrAccounts'] = totalOtrAccounts;
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
    DashboardControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return DashboardControllerApi;
}());
exports.DashboardControllerApi = DashboardControllerApi;
