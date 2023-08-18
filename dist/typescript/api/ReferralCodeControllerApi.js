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
exports.ReferralCodeControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var ReferralCodeControllerApi = /** @class */ (function () {
    function ReferralCodeControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary Only for admins. This will approve and activate a given referral code
     * @param codeId codeId
     */
    ReferralCodeControllerApi.prototype.approveReferralCodeUsingPUT = function (codeId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/referrals/codes/{codeId}/approve'
            .replace('{' + 'codeId' + '}', encodeURIComponent(String(codeId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'codeId' is not null or undefined
        if (codeId === null || codeId === undefined) {
            throw new Error('Required parameter codeId was null or undefined when calling approveReferralCodeUsingPUT.');
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
     * @summary Referral codes are currently immutable. Meaning, once a referral code is created then no modification is allowed. In urgent scenarios, we can update the values via SQL. If you want to apply a discount to the referee then enter a negative value (applies both for percentage_discount and cents_value types), and enter a positive value if you want to increase the price.
     * @param request request
     */
    ReferralCodeControllerApi.prototype.generateReferralCodeUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/referrals/codes';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling generateReferralCodeUsingPOST.');
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
     * @summary getReferralCode
     * @param codeId codeId
     */
    ReferralCodeControllerApi.prototype.getReferralCodeUsingGET = function (codeId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/referrals/codes/{codeId}'
            .replace('{' + 'codeId' + '}', encodeURIComponent(String(codeId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'codeId' is not null or undefined
        if (codeId === null || codeId === undefined) {
            throw new Error('Required parameter codeId was null or undefined when calling getReferralCodeUsingGET.');
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
     * @summary getReferralCodes
     * @param isActive isActive
     */
    ReferralCodeControllerApi.prototype.getReferralCodesUsingGET = function (isActive, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/referrals/codes';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (isActive !== undefined) {
            queryParameters['isActive'] = isActive;
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
     * @summary markCodeAsInactive
     * @param codeId codeId
     */
    ReferralCodeControllerApi.prototype.markCodeAsInactiveUsingDELETE = function (codeId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/referrals/codes/{codeId}'
            .replace('{' + 'codeId' + '}', encodeURIComponent(String(codeId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'codeId' is not null or undefined
        if (codeId === null || codeId === undefined) {
            throw new Error('Required parameter codeId was null or undefined when calling markCodeAsInactiveUsingDELETE.');
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
     * @summary Validates and returns the referral code. Validation includes: Are we passed the expiration date? Has the code exceeded it\'s max use count?
     * @param codeId codeId
     */
    ReferralCodeControllerApi.prototype.validateReferralCodeUsingGET = function (codeId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/referrals/codes/{codeId}/validate'
            .replace('{' + 'codeId' + '}', encodeURIComponent(String(codeId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'codeId' is not null or undefined
        if (codeId === null || codeId === undefined) {
            throw new Error('Required parameter codeId was null or undefined when calling validateReferralCodeUsingGET.');
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
    ReferralCodeControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return ReferralCodeControllerApi;
}());
exports.ReferralCodeControllerApi = ReferralCodeControllerApi;