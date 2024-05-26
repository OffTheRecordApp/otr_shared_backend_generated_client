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
exports.RecurringBillingControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var RecurringBillingControllerApi = /** @class */ (function () {
    function RecurringBillingControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary cancelBillingSubscription
     * @param id id
     * @param userId userId
     * @param isProrated isProrated
     */
    RecurringBillingControllerApi.prototype.cancelBillingSubscriptionUsingDELETE = function (id, userId, isProrated, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/billing/{userId}/subscriptions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cancelBillingSubscriptionUsingDELETE.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling cancelBillingSubscriptionUsingDELETE.');
        }
        if (isProrated !== undefined) {
            queryParameters['isProrated'] = isProrated;
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
     * @summary createBillingSubscription
     * @param userId userId
     * @param request request
     */
    RecurringBillingControllerApi.prototype.createBillingSubscriptionUsingPOST = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/billing/{userId}/subscriptions'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling createBillingSubscriptionUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createBillingSubscriptionUsingPOST.');
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
     * @summary listBillingProducts
     * @param active active
     * @param audience audience
     * @param limit limit
     * @param userId userId
     */
    RecurringBillingControllerApi.prototype.listBillingProductsUsingGET = function (active, audience, limit, userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/billing/products';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (active !== undefined) {
            queryParameters['active'] = active;
        }
        if (audience !== undefined) {
            queryParameters['audience'] = audience;
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (userId !== undefined) {
            queryParameters['userId'] = userId;
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
     * @summary listBillingSubscriptions
     * @param userId userId
     * @param includeInactive includeInactive
     */
    RecurringBillingControllerApi.prototype.listBillingSubscriptionsUsingGET = function (userId, includeInactive, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/billing/{userId}/subscriptions'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listBillingSubscriptionsUsingGET.');
        }
        if (includeInactive !== undefined) {
            queryParameters['includeInactive'] = includeInactive;
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
     * @summary listSubscriptionInvoices
     * @param id id
     * @param userId userId
     * @param limit limit
     */
    RecurringBillingControllerApi.prototype.listSubscriptionInvoicesUsingGET = function (id, userId, limit, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/billing/{userId}/subscriptions/{id}/invoices'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listSubscriptionInvoicesUsingGET.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listSubscriptionInvoicesUsingGET.');
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
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
    RecurringBillingControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return RecurringBillingControllerApi;
}());
exports.RecurringBillingControllerApi = RecurringBillingControllerApi;
