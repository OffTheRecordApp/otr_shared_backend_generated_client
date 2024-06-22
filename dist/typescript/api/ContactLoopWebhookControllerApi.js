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
exports.ContactLoopWebhookControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var ContactLoopWebhookControllerApi = /** @class */ (function () {
    function ContactLoopWebhookControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary handleContactLoopEvent
     * @param requestString requestString
     */
    ContactLoopWebhookControllerApi.prototype.handleContactLoopEventUsingPOST = function (requestString, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/contact-loop/webhook';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'requestString' is not null or undefined
        if (requestString === null || requestString === undefined) {
            throw new Error('Required parameter requestString was null or undefined when calling handleContactLoopEventUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: requestString,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    ContactLoopWebhookControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return ContactLoopWebhookControllerApi;
}());
exports.ContactLoopWebhookControllerApi = ContactLoopWebhookControllerApi;
