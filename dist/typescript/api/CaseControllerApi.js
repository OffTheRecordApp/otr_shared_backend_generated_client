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
exports.CaseControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var CaseControllerApi = /** @class */ (function () {
    function CaseControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary addViolationsToCitation
     * @param caseId caseId
     * @param request request
     */
    CaseControllerApi.prototype.addViolationsToCitationUsingPOST = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/citation/violations'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling addViolationsToCitationUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addViolationsToCitationUsingPOST.');
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
     * @summary assignCaseToUser
     * @param caseId caseId
     * @param userId userId
     */
    CaseControllerApi.prototype.assignCaseToUserUsingPOST = function (caseId, userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/owner/{userId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling assignCaseToUserUsingPOST.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling assignCaseToUserUsingPOST.');
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
     * @summary assignOwner
     * @param caseId caseId
     */
    CaseControllerApi.prototype.assignOwnerUsingPOST = function (caseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/owner'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling assignOwnerUsingPOST.');
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
     * @summary findChargeDisputesByCaseId
     * @param caseId caseId
     */
    CaseControllerApi.prototype.findChargeDisputesByCaseIdUsingGET = function (caseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/disputes'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling findChargeDisputesByCaseIdUsingGET.');
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
     * @summary getAppearanceAttorneysForCase
     * @param caseId caseId
     */
    CaseControllerApi.prototype.getAppearanceAttorneysForCaseUsingGET = function (caseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/appearance-attorneys'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getAppearanceAttorneysForCaseUsingGET.');
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
     * @summary getSupportTicketsForCase
     * @param caseId caseId
     */
    CaseControllerApi.prototype.getSupportTicketsForCaseUsingGET = function (caseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/support-tickets'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getSupportTicketsForCaseUsingGET.');
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
     * @summary initiateCaseAndChargeCustomer
     * @param caseId caseId
     * @param request request
     */
    CaseControllerApi.prototype.initiateCaseAndChargeCustomerUsingPOST = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/initiate-with-payment'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling initiateCaseAndChargeCustomerUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling initiateCaseAndChargeCustomerUsingPOST.');
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
     * @summary initiateCase
     * @param caseId caseId
     * @param request request
     */
    CaseControllerApi.prototype.initiateCaseUsingPOST = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/initiate'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling initiateCaseUsingPOST.');
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
     * @summary markCaseAsResolved
     * @param caseId caseId
     * @param request request
     */
    CaseControllerApi.prototype.markCaseAsResolvedUsingPOST = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/resolution'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling markCaseAsResolvedUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling markCaseAsResolvedUsingPOST.');
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
     * @summary removeViolationsFromCitation
     * @param caseId caseId
     * @param violationTypes violationTypes
     */
    CaseControllerApi.prototype.removeViolationsFromCitationUsingDELETE = function (caseId, violationTypes, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/citation/violations/{violationTypes}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'violationTypes' + '}', encodeURIComponent(String(violationTypes)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling removeViolationsFromCitationUsingDELETE.');
        }
        // verify required parameter 'violationTypes' is not null or undefined
        if (violationTypes === null || violationTypes === undefined) {
            throw new Error('Required parameter violationTypes was null or undefined when calling removeViolationsFromCitationUsingDELETE.');
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
     * @summary reopenCase
     * @param caseId caseId
     */
    CaseControllerApi.prototype.reopenCaseUsingPUT = function (caseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/reopen'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling reopenCaseUsingPUT.');
        }
        var httpRequestParams = {
            method: 'PUT',
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
     * @summary setCourtDateForCase
     * @param caseId caseId
     * @param request request
     */
    CaseControllerApi.prototype.setCourtDateForCaseUsingPOST = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/courtdate'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling setCourtDateForCaseUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling setCourtDateForCaseUsingPOST.');
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
     * @summary submitRequestForPriceMatch
     * @param caseId caseId
     * @param priceMatchRequest priceMatchRequest
     */
    CaseControllerApi.prototype.submitRequestForPriceMatchUsingPOST = function (caseId, priceMatchRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/price-match'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling submitRequestForPriceMatchUsingPOST.');
        }
        // verify required parameter 'priceMatchRequest' is not null or undefined
        if (priceMatchRequest === null || priceMatchRequest === undefined) {
            throw new Error('Required parameter priceMatchRequest was null or undefined when calling submitRequestForPriceMatchUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: priceMatchRequest,
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
     * @summary updateCase
     * @param caseId caseId
     * @param caseFromRequest caseFromRequest
     */
    CaseControllerApi.prototype.updateCaseUsingPUT = function (caseId, caseFromRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling updateCaseUsingPUT.');
        }
        // verify required parameter 'caseFromRequest' is not null or undefined
        if (caseFromRequest === null || caseFromRequest === undefined) {
            throw new Error('Required parameter caseFromRequest was null or undefined when calling updateCaseUsingPUT.');
        }
        var httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            data: caseFromRequest,
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
     * @summary updateDeclineTickets
     * @param caseId caseId
     * @param request request
     */
    CaseControllerApi.prototype.updateDeclineTicketsUsingPUT = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/decline-tickets'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling updateDeclineTicketsUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateDeclineTicketsUsingPUT.');
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
    CaseControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return CaseControllerApi;
}());
exports.CaseControllerApi = CaseControllerApi;