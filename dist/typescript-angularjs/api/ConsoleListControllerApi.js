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
exports.ConsoleListControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var ConsoleListControllerApi = /** @class */ (function () {
    function ConsoleListControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary findDisputes
     * @param request request
     */
    ConsoleListControllerApi.prototype.findDisputesUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/disputes';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling findDisputesUsingPOST.');
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
     * @summary getCasesWithCoverageObtained
     * @param request request
     */
    ConsoleListControllerApi.prototype.getCasesWithCoverageObtainedUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/cases-with-coverage-obtained';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCasesWithCoverageObtainedUsingPOST.');
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
     * @summary getCasesWithMissingLawfirmPayouts
     * @param request request
     */
    ConsoleListControllerApi.prototype.getCasesWithMissingLawfirmPayoutsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/cases/missing-lawfirm-payouts';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCasesWithMissingLawfirmPayoutsUsingPOST.');
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
     * @summary getCasesWithOverduePayments
     * @param request request
     */
    ConsoleListControllerApi.prototype.getCasesWithOverduePaymentsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/cases/unpaid';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCasesWithOverduePaymentsUsingPOST.');
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
     * @summary getCitationPhoneLeads
     * @param request request
     */
    ConsoleListControllerApi.prototype.getCitationPhoneLeadsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/citation-phone-leads';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCitationPhoneLeadsUsingPOST.');
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
     * @summary getCitationsWithMissingFields
     * @param request request
     */
    ConsoleListControllerApi.prototype.getCitationsWithMissingFieldsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/citations-with-missing-fields';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getCitationsWithMissingFieldsUsingPOST.');
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
     * @summary getClientConfirmedUnpaidCases
     * @param request request
     */
    ConsoleListControllerApi.prototype.getClientConfirmedUnpaidCasesUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/cases/client-confirmed-unpaid';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getClientConfirmedUnpaidCasesUsingPOST.');
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
     * @summary getDeclinedCases
     * @param request request
     */
    ConsoleListControllerApi.prototype.getDeclinedCasesUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/declined';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getDeclinedCasesUsingPOST.');
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
     * @summary getInvalidCasesWithStripeCharge
     * @param request request
     */
    ConsoleListControllerApi.prototype.getInvalidCasesWithStripeChargeUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/cases/invalid-with-charge';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getInvalidCasesWithStripeChargeUsingPOST.');
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
     * @summary getLostCasesWithTransferNotReversed
     * @param request request
     */
    ConsoleListControllerApi.prototype.getLostCasesWithTransferNotReversedUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/cases/lost/not-reversed';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getLostCasesWithTransferNotReversedUsingPOST.');
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
     * @summary getPendingCases
     * @param request request
     */
    ConsoleListControllerApi.prototype.getPendingCasesUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/pending';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getPendingCasesUsingPOST.');
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
     * @summary getPendingTicketReviews
     * @param request request
     */
    ConsoleListControllerApi.prototype.getPendingTicketReviewsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/ticket-review-requests/pending';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getPendingTicketReviewsUsingPOST.');
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
     * @summary listLawfirmLeads
     * @param request request
     */
    ConsoleListControllerApi.prototype.listLawfirmLeadsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/lawfirms/leads';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling listLawfirmLeadsUsingPOST.');
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
     * @summary listPotentialCustomers
     * @param request request
     */
    ConsoleListControllerApi.prototype.listPotentialCustomersUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/potential-customers';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling listPotentialCustomersUsingPOST.');
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
    ConsoleListControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return ConsoleListControllerApi;
}());
exports.ConsoleListControllerApi = ConsoleListControllerApi;
