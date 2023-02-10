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
exports.CaseActionsControllerService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var encoder_1 = require("../encoder");
// @ts-ignore
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var CaseActionsControllerService = /** @class */ (function () {
    function CaseActionsControllerService(httpClient, basePath, configuration) {
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
    CaseActionsControllerService.prototype.addToHttpParams = function (httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    };
    CaseActionsControllerService.prototype.addToHttpParamsRecursive = function (httpParams, value, key) {
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
    CaseActionsControllerService.prototype.addActionToCaseV2UsingPOST = function (caseId, request, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling addActionToCaseV2UsingPOST.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addActionToCaseV2UsingPOST.');
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
        var localVarPath = "/api/v2/cases/".concat(this.configuration.encodeParam({ name: "caseId", value: caseId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/actions");
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
    CaseActionsControllerService.prototype.getActionTimelineUsingGET = function (caseId, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getActionTimelineUsingGET.');
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
        var localVarPath = "/api/v1/cases/".concat(this.configuration.encodeParam({ name: "caseId", value: caseId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/actions/timeline");
        return this.httpClient.request('get', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CaseActionsControllerService.prototype.getAllActionsUsingGET = function (observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
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
        var localVarPath = "/api/v1/cases/actions";
        return this.httpClient.request('get', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CaseActionsControllerService.prototype.getCaseActionsUsingGET = function (caseId, showDeleted, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getCaseActionsUsingGET.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (showDeleted !== undefined && showDeleted !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, showDeleted, 'showDeleted');
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
        var localVarPath = "/api/v1/cases/".concat(this.configuration.encodeParam({ name: "caseId", value: caseId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/actions");
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
    CaseActionsControllerService.prototype.markActionAsDeletedUsingDELETE = function (caseActionId, caseId, isDeleted, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (caseActionId === null || caseActionId === undefined) {
            throw new Error('Required parameter caseActionId was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }
        if (isDeleted === null || isDeleted === undefined) {
            throw new Error('Required parameter isDeleted was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (isDeleted !== undefined && isDeleted !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, isDeleted, 'isDeleted');
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
        var localVarPath = "/api/v1/cases/".concat(this.configuration.encodeParam({ name: "caseId", value: caseId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/actions/").concat(this.configuration.encodeParam({ name: "caseActionId", value: caseActionId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64" }));
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
    CaseActionsControllerService.prototype.updateCaseActionUsingPUT = function (caseActionId, caseId, request, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (caseActionId === null || caseActionId === undefined) {
            throw new Error('Required parameter caseActionId was null or undefined when calling updateCaseActionUsingPUT.');
        }
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling updateCaseActionUsingPUT.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCaseActionUsingPUT.');
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
        var localVarPath = "/api/v1/cases/".concat(this.configuration.encodeParam({ name: "caseId", value: caseId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/actions/").concat(this.configuration.encodeParam({ name: "caseActionId", value: caseActionId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64" }));
        return this.httpClient.request('put', "".concat(this.configuration.basePath).concat(localVarPath), {
            context: localVarHttpContext,
            body: request,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CaseActionsControllerService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        __param(1, (0, core_1.Optional)()),
        __param(1, (0, core_1.Inject)(variables_1.BASE_PATH)),
        __param(2, (0, core_1.Optional)())
    ], CaseActionsControllerService);
    return CaseActionsControllerService;
}());
exports.CaseActionsControllerService = CaseActionsControllerService;
