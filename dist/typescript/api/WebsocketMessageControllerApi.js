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
exports.WebsocketMessageControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var WebsocketMessageControllerApi = /** @class */ (function () {
    function WebsocketMessageControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary forwardMessage
     * @param xSessionId X-Session-Id
     * @param message message
     */
    WebsocketMessageControllerApi.prototype.forwardMessageUsingPOST = function (xSessionId, message, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/forward-message';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'xSessionId' is not null or undefined
        if (xSessionId === null || xSessionId === undefined) {
            throw new Error('Required parameter xSessionId was null or undefined when calling forwardMessageUsingPOST.');
        }
        // verify required parameter 'message' is not null or undefined
        if (message === null || message === undefined) {
            throw new Error('Required parameter message was null or undefined when calling forwardMessageUsingPOST.');
        }
        headerParams['X-Session-Id'] = xSessionId;
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: message,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    WebsocketMessageControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return WebsocketMessageControllerApi;
}());
exports.WebsocketMessageControllerApi = WebsocketMessageControllerApi;
