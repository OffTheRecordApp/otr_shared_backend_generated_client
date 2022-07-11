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
exports.AppEventCreateRequest = void 0;
var AppEventCreateRequest;
(function (AppEventCreateRequest) {
    var AppEventNameEnum;
    (function (AppEventNameEnum) {
        AppEventNameEnum[AppEventNameEnum["FIRSTOPEN"] = 'FIRST_OPEN'] = "FIRSTOPEN";
        AppEventNameEnum[AppEventNameEnum["INSTALL"] = 'INSTALL'] = "INSTALL";
        AppEventNameEnum[AppEventNameEnum["PREINSTALLENGAGEMENT"] = 'PRE_INSTALL_ENGAGEMENT'] = "PREINSTALLENGAGEMENT";
    })(AppEventNameEnum = AppEventCreateRequest.AppEventNameEnum || (AppEventCreateRequest.AppEventNameEnum = {}));
})(AppEventCreateRequest = exports.AppEventCreateRequest || (exports.AppEventCreateRequest = {}));