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
exports.RecurringBillingControllerService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var encoder_1 = require("../encoder");
// @ts-ignore
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var RecurringBillingControllerService = /** @class */ (function () {
    function RecurringBillingControllerService(httpClient, basePath, configuration) {
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
    RecurringBillingControllerService.prototype.addToHttpParams = function (httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    };
    RecurringBillingControllerService.prototype.addToHttpParamsRecursive = function (httpParams, value, key) {
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
    RecurringBillingControllerService.prototype.cancelBillingSubscriptionUsingDELETE = function (id, userId, isProrated, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cancelBillingSubscriptionUsingDELETE.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling cancelBillingSubscriptionUsingDELETE.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (isProrated !== undefined && isProrated !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, isProrated, 'isProrated');
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
        var localVarPath = "/api/v1/billing/".concat(this.configuration.encodeParam({ name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/subscriptions/").concat(this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }));
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
    RecurringBillingControllerService.prototype.createBillingSubscriptionUsingPOST = function (userId, request, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling createBillingSubscriptionUsingPOST.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling createBillingSubscriptionUsingPOST.');
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
        var localVarPath = "/api/v1/billing/".concat(this.configuration.encodeParam({ name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64" }), "/subscriptions");
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
    RecurringBillingControllerService.prototype.listBillingProductsUsingGET = function (active, audience, limit, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (active !== undefined && active !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, active, 'active');
        }
        if (audience !== undefined && audience !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, audience, 'audience');
        }
        if (limit !== undefined && limit !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, 'limit');
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
        var localVarPath = "/api/v1/billing/products";
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
    RecurringBillingControllerService.prototype.listBillingSubscriptionsUsingGET = function (userId, includeInactive, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listBillingSubscriptionsUsingGET.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (includeInactive !== undefined && includeInactive !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, includeInactive, 'includeInactive');
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
        var localVarPath = "/api/v1/billing/".concat(this.configuration.encodeParam({ name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64" }), "/subscriptions");
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
    RecurringBillingControllerService.prototype.listSubscriptionInvoicesUsingGET = function (id, userId, limit, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling listSubscriptionInvoicesUsingGET.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listSubscriptionInvoicesUsingGET.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (limit !== undefined && limit !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, 'limit');
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
        var localVarPath = "/api/v1/billing/".concat(this.configuration.encodeParam({ name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64" }), "/subscriptions/").concat(this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined }), "/invoices");
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
    RecurringBillingControllerService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        __param(1, (0, core_1.Optional)()),
        __param(1, (0, core_1.Inject)(variables_1.BASE_PATH)),
        __param(2, (0, core_1.Optional)())
    ], RecurringBillingControllerService);
    return RecurringBillingControllerService;
}());
exports.RecurringBillingControllerService = RecurringBillingControllerService;