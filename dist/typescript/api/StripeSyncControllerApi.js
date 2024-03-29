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
exports.StripeSyncControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var StripeSyncControllerApi = /** @class */ (function () {
    function StripeSyncControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary syncAllDisputes
     */
    StripeSyncControllerApi.prototype.syncAllDisputesUsingPOST = function (extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/disputes/sync-all';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var httpRequestParams = {
            method: 'POST',
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
     * @summary syncDispute
     * @param disputeId disputeId
     */
    StripeSyncControllerApi.prototype.syncDisputeUsingPOST = function (disputeId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/disputes/{disputeId}/sync'
            .replace('{' + 'disputeId' + '}', encodeURIComponent(String(disputeId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'disputeId' is not null or undefined
        if (disputeId === null || disputeId === undefined) {
            throw new Error('Required parameter disputeId was null or undefined when calling syncDisputeUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
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
     * @summary syncStripeCharges
     * @param request request
     */
    StripeSyncControllerApi.prototype.syncStripeChargesUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/sync-stripe-charges';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling syncStripeChargesUsingPOST.');
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
     * @summary syncStripePayments
     * @param request request
     */
    StripeSyncControllerApi.prototype.syncStripePaymentsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/payments/sync';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling syncStripePaymentsUsingPOST.');
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
     * @summary syncStripeRefunds
     * @param request request
     */
    StripeSyncControllerApi.prototype.syncStripeRefundsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/sync-stripe-refunds';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling syncStripeRefundsUsingPOST.');
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
     * @summary syncStripeTransfers
     * @param request request
     */
    StripeSyncControllerApi.prototype.syncStripeTransfersUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/transfers/sync';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling syncStripeTransfersUsingPOST.');
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
    StripeSyncControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return StripeSyncControllerApi;
}());
exports.StripeSyncControllerApi = StripeSyncControllerApi;
