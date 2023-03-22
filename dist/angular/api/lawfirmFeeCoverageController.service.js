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
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmFeeCoverageControllerService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var encoder_1 = require("../encoder");
// @ts-ignore
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var LawfirmFeeCoverageControllerService = /** @class */ (function () {
    function LawfirmFeeCoverageControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
        this.defaultHeaders = new http_1.HttpHeaders();
        this.configuration = new configuration_1.Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new encoder_1.CustomHttpParameterCodec();
    }
    // @ts-ignore
    LawfirmFeeCoverageControllerService.prototype.addToHttpParams = function (httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    };
    LawfirmFeeCoverageControllerService.prototype.addToHttpParamsRecursive = function (httpParams, value, key) {
        var _this = this;
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(function (elem) { return httpParams = _this.addToHttpParamsRecursive(httpParams, elem, key); });
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(function (k) { return httpParams = _this.addToHttpParamsRecursive(httpParams, value[k], key != null ? "".concat(key, ".").concat(k) : k); });
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    };
    LawfirmFeeCoverageControllerService.prototype.addCourtToCoverageUsingPOST = function (lawfirmIdString, request, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmIdString === null || lawfirmIdString === undefined) {
            throw new Error('Required parameter lawfirmIdString was null or undefined when calling addCourtToCoverageUsingPOST.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addCourtToCoverageUsingPOST.');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v1/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmIdString", value: lawfirmIdString, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/courts");
        return this.httpClient.request('post', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            body: request,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.enableViolationsForLawfirmUsingPOST = function (lawfirmId, request, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling enableViolationsForLawfirmUsingPOST.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling enableViolationsForLawfirmUsingPOST.');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v1/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmId", value: lawfirmId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/account-fees/enable-violations");
        return this.httpClient.request('post', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            body: request,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.getAccountFeesUsingGET = function (lawfirmId, enabledFeesOnly, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getAccountFeesUsingGET.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (enabledFeesOnly !== undefined && enabledFeesOnly !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, enabledFeesOnly, 'enabledFeesOnly');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v1/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmId", value: lawfirmId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/account-fees");
        return this.httpClient.request('get', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            params: localVarQueryParameters,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.getLawfirmCoverageUsingGET = function (lawfirmIdString, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmIdString === null || lawfirmIdString === undefined) {
            throw new Error('Required parameter lawfirmIdString was null or undefined when calling getLawfirmCoverageUsingGET.');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v1/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmIdString", value: lawfirmIdString, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/coverage");
        return this.httpClient.request('get', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.getLawfirmFeeCoverageUsingGET = function (lawfirmId, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getLawfirmFeeCoverageUsingGET.');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v2/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmId", value: lawfirmId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/coverage");
        return this.httpClient.request('get', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.removeAccountFeesUsingDELETE = function (lawfirmId, classification, isPermitted, regionCode, violationId, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling removeAccountFeesUsingDELETE.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (classification !== undefined && classification !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, classification, 'classification');
        }
        if (isPermitted !== undefined && isPermitted !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, isPermitted, 'isPermitted');
        }
        if (regionCode !== undefined && regionCode !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, regionCode, 'regionCode');
        }
        if (violationId !== undefined && violationId !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, violationId, 'violationId');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v1/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmId", value: lawfirmId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/account-fees");
        return this.httpClient.request('delete', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            params: localVarQueryParameters,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.removeCourtsUsingDELETE = function (courtsToRemove, lawfirmId, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (courtsToRemove === null || courtsToRemove === undefined) {
            throw new Error('Required parameter courtsToRemove was null or undefined when calling removeCourtsUsingDELETE.');
        }
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling removeCourtsUsingDELETE.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (courtsToRemove !== undefined && courtsToRemove !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, courtsToRemove, 'courtsToRemove');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v1/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmId", value: lawfirmId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/courts");
        return this.httpClient.request('delete', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            params: localVarQueryParameters,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.removeCoverageUsingDELETE = function (lawfirmId, courtsToRemove, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling removeCoverageUsingDELETE.');
        }
        if (courtsToRemove === null || courtsToRemove === undefined) {
            throw new Error('Required parameter courtsToRemove was null or undefined when calling removeCoverageUsingDELETE.');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v2/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmId", value: lawfirmId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/courts");
        return this.httpClient.request('delete', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            body: courtsToRemove,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.resetFeesForLawfirmUsingPOST = function (lawfirmId, request, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling resetFeesForLawfirmUsingPOST.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling resetFeesForLawfirmUsingPOST.');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v1/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmId", value: lawfirmId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/account-fees/reset");
        return this.httpClient.request('post', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            body: request,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService.prototype.saveAccountFeesUsingPOST = function (lawfirmId, request, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling saveAccountFeesUsingPOST.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveAccountFeesUsingPOST.');
        }
        var localVarHeaders = this.defaultHeaders;
        var localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            var httpHeaderAccepts = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        var localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new http_1.HttpContext();
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }
        var responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        var localVarPath = "/api/v1/lawfirms/".concat(this.configuration.encodeParam({ name: "lawfirmId", value: lawfirmId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/account-fees");
        return this.httpClient.request('post', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            body: request,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    LawfirmFeeCoverageControllerService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        __param(1, (0, core_1.Optional)()),
        __param(1, (0, core_1.Inject)(variables_1.BASE_PATH)),
        __param(2, (0, core_1.Optional)())
    ], LawfirmFeeCoverageControllerService);
    return LawfirmFeeCoverageControllerService;
}());
exports.LawfirmFeeCoverageControllerService = LawfirmFeeCoverageControllerService;