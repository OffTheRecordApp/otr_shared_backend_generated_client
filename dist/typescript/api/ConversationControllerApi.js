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
exports.ConversationControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var ConversationControllerApi = /** @class */ (function () {
    function ConversationControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary addMessageToConversation
     * @param caseId caseId
     * @param request request
     */
    ConversationControllerApi.prototype.addMessageToConversationUsingPOST = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling addMessageToConversationUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addMessageToConversationUsingPOST.');
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
     * @summary editMessage
     * @param caseId caseId
     * @param messageId messageId
     * @param request request
     */
    ConversationControllerApi.prototype.editMessageUsingPUT = function (caseId, messageId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation/{messageId}/edit'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'messageId' + '}', encodeURIComponent(String(messageId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling editMessageUsingPUT.');
        }
        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new Error('Required parameter messageId was null or undefined when calling editMessageUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling editMessageUsingPUT.');
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
     * @summary getConversation
     * @param caseId caseId
     * @param length length
     * @param page page
     */
    ConversationControllerApi.prototype.getConversationUsingGET = function (caseId, length, page, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getConversationUsingGET.');
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (page !== undefined) {
            queryParameters['page'] = page;
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
     * @summary getMessage
     * @param caseId caseId
     * @param messageId messageId
     */
    ConversationControllerApi.prototype.getMessageUsingGET = function (caseId, messageId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation/{messageId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'messageId' + '}', encodeURIComponent(String(messageId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getMessageUsingGET.');
        }
        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new Error('Required parameter messageId was null or undefined when calling getMessageUsingGET.');
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
     * @summary markMessageAsDeleted
     * @param caseId caseId
     * @param isDeleted isDeleted
     * @param messageId messageId
     */
    ConversationControllerApi.prototype.markMessageAsDeletedUsingPUT = function (caseId, isDeleted, messageId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/conversation/{messageId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'messageId' + '}', encodeURIComponent(String(messageId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling markMessageAsDeletedUsingPUT.');
        }
        // verify required parameter 'isDeleted' is not null or undefined
        if (isDeleted === null || isDeleted === undefined) {
            throw new Error('Required parameter isDeleted was null or undefined when calling markMessageAsDeletedUsingPUT.');
        }
        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new Error('Required parameter messageId was null or undefined when calling markMessageAsDeletedUsingPUT.');
        }
        if (isDeleted !== undefined) {
            queryParameters['isDeleted'] = isDeleted;
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
     * @summary setFlagOnMessages
     * @param request request
     */
    ConversationControllerApi.prototype.setFlagOnMessagesUsingPUT = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/conversation/flag';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling setFlagOnMessagesUsingPUT.');
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
     * @summary setStarOnMessages
     * @param request request
     */
    ConversationControllerApi.prototype.setStarOnMessagesUsingPUT = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/conversation/star';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling setStarOnMessagesUsingPUT.');
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
    ConversationControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return ConversationControllerApi;
}());
exports.ConversationControllerApi = ConversationControllerApi;