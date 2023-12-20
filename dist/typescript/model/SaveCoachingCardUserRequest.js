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
exports.SaveCoachingCardUserRequest = void 0;
var SaveCoachingCardUserRequest;
(function (SaveCoachingCardUserRequest) {
    var PermissionTypeEnum;
    (function (PermissionTypeEnum) {
        PermissionTypeEnum[PermissionTypeEnum["AUTHOR"] = 'AUTHOR'] = "AUTHOR";
        PermissionTypeEnum[PermissionTypeEnum["MANAGER"] = 'MANAGER'] = "MANAGER";
        PermissionTypeEnum[PermissionTypeEnum["PARTICIPANT"] = 'PARTICIPANT'] = "PARTICIPANT";
        PermissionTypeEnum[PermissionTypeEnum["RECIPIENT"] = 'RECIPIENT'] = "RECIPIENT";
    })(PermissionTypeEnum = SaveCoachingCardUserRequest.PermissionTypeEnum || (SaveCoachingCardUserRequest.PermissionTypeEnum = {}));
})(SaveCoachingCardUserRequest = exports.SaveCoachingCardUserRequest || (exports.SaveCoachingCardUserRequest = {}));