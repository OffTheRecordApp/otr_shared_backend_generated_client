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
exports.LawyerControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var LawyerControllerApi = /** @class */ (function () {
    function LawyerControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary cancelLawyerInvite
     * @param inviteeEmail inviteeEmail
     * @param userId userId
     */
    LawyerControllerApi.prototype.cancelLawyerInviteUsingDELETE = function (inviteeEmail, userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawyers/{userId}/invite'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'inviteeEmail' is not null or undefined
        if (inviteeEmail === null || inviteeEmail === undefined) {
            throw new Error('Required parameter inviteeEmail was null or undefined when calling cancelLawyerInviteUsingDELETE.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling cancelLawyerInviteUsingDELETE.');
        }
        if (inviteeEmail !== undefined) {
            queryParameters['inviteeEmail'] = inviteeEmail;
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
     * @summary deleteLawyerLicenses
     * @param userId userId
     * @param request request
     */
    LawyerControllerApi.prototype.deleteLawyerLicensesUsingDELETE = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawyers/{userId}/licenses'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteLawyerLicensesUsingDELETE.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling deleteLawyerLicensesUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
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
     * @summary deleteLawyer
     * @param userId userId
     * @param removeAdminOnly removeAdminOnly
     */
    LawyerControllerApi.prototype.deleteLawyerUsingDELETE = function (userId, removeAdminOnly, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawyers/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteLawyerUsingDELETE.');
        }
        if (removeAdminOnly !== undefined) {
            queryParameters['removeAdminOnly'] = removeAdminOnly;
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
     * @summary getLawyerEmailGuesses
     * @param lawyerId lawyerId
     */
    LawyerControllerApi.prototype.getLawyerEmailGuessesUsingGET = function (lawyerId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawyers/{lawyerId}/email-guesses'
            .replace('{' + 'lawyerId' + '}', encodeURIComponent(String(lawyerId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawyerId' is not null or undefined
        if (lawyerId === null || lawyerId === undefined) {
            throw new Error('Required parameter lawyerId was null or undefined when calling getLawyerEmailGuessesUsingGET.');
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
     * @summary getLawyer
     * @param userId userId
     */
    LawyerControllerApi.prototype.getLawyerUsingGET = function (userId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawyers/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getLawyerUsingGET.');
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
     * @summary inviteLawyerToLawfirm
     * @param lawfirmId lawfirmId
     * @param userId userId
     * @param request request
     */
    LawyerControllerApi.prototype.inviteLawyerToLawfirmUsingPOST = function (lawfirmId, userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/lawyers/{userId}/invite'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling inviteLawyerToLawfirmUsingPOST.');
        }
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling inviteLawyerToLawfirmUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling inviteLawyerToLawfirmUsingPOST.');
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
     * @summary saveLawyerLead
     * @param request request
     */
    LawyerControllerApi.prototype.saveLawyerLeadUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawyers/lead';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveLawyerLeadUsingPOST.');
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
     * @summary saveLawyerLicenses
     * @param userId userId
     * @param request request
     */
    LawyerControllerApi.prototype.saveLawyerLicensesUsingPOST = function (userId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawyers/{userId}/licenses'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling saveLawyerLicensesUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveLawyerLicensesUsingPOST.');
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
     * @summary upsertLawyer
     * @param request request
     */
    LawyerControllerApi.prototype.upsertLawyerUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawyers';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling upsertLawyerUsingPOST.');
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
    LawyerControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return LawyerControllerApi;
}());
exports.LawyerControllerApi = LawyerControllerApi;
