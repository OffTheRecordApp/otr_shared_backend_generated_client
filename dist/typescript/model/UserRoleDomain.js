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
exports.UserRoleDomain = void 0;
var UserRoleDomain;
(function (UserRoleDomain) {
    var RoleTypeEnum;
    (function (RoleTypeEnum) {
        RoleTypeEnum[RoleTypeEnum["ADMIN"] = 'ADMIN'] = "ADMIN";
        RoleTypeEnum[RoleTypeEnum["DEFENDANT"] = 'DEFENDANT'] = "DEFENDANT";
        RoleTypeEnum[RoleTypeEnum["LAWFIRMADMIN"] = 'LAWFIRM_ADMIN'] = "LAWFIRMADMIN";
        RoleTypeEnum[RoleTypeEnum["LAWYER"] = 'LAWYER'] = "LAWYER";
        RoleTypeEnum[RoleTypeEnum["PARTNER"] = 'PARTNER'] = "PARTNER";
        RoleTypeEnum[RoleTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(RoleTypeEnum = UserRoleDomain.RoleTypeEnum || (UserRoleDomain.RoleTypeEnum = {}));
})(UserRoleDomain = exports.UserRoleDomain || (exports.UserRoleDomain = {}));
