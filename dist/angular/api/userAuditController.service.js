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
exports.UserAuditControllerService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var encoder_1 = require("../encoder");
// @ts-ignore
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var UserAuditControllerService = /** @class */ (function () {
    function UserAuditControllerService(httpClient, basePath, configuration) {
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
    UserAuditControllerService.prototype.addToHttpParams = function (httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    };
    UserAuditControllerService.prototype.addToHttpParamsRecursive = function (httpParams, value, key) {
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
    UserAuditControllerService.prototype.getLastLoginUsingGET = function (userId, clients, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getLastLoginUsingGET.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (clients !== undefined && clients !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, clients, 'clients');
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
        var localVarPath = "/api/v1/api/v1/users/".concat(this.configuration.encodeParam({ name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64" }), "/last-login");
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
    UserAuditControllerService.prototype.listUserAuditEventsByCursorUsingGET = function (userId, excludeTypes, includeTypes, limit, nextPageToken, observe, reportProgress, options) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listUserAuditEventsByCursorUsingGET.');
        }
        var localVarQueryParameters = new http_1.HttpParams({ encoder: this.encoder });
        if (excludeTypes !== undefined && excludeTypes !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, excludeTypes, 'excludeTypes');
        }
        if (includeTypes !== undefined && includeTypes !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, includeTypes, 'includeTypes');
        }
        if (limit !== undefined && limit !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, 'limit');
        }
        if (nextPageToken !== undefined && nextPageToken !== null) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, nextPageToken, 'nextPageToken');
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
        var localVarPath = "/api/v1/users/".concat(this.configuration.encodeParam({ name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64" }), "/audit-events");
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
    UserAuditControllerService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        }),
        __param(1, (0, core_1.Optional)()),
        __param(1, (0, core_1.Inject)(variables_1.BASE_PATH)),
        __param(2, (0, core_1.Optional)())
    ], UserAuditControllerService);
    return UserAuditControllerService;
}());
exports.UserAuditControllerService = UserAuditControllerService;
