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
exports.AuthorModel = void 0;
var AuthorModel;
(function (AuthorModel) {
    var UserRoleEnum;
    (function (UserRoleEnum) {
        UserRoleEnum[UserRoleEnum["ADMIN"] = 'ADMIN'] = "ADMIN";
        UserRoleEnum[UserRoleEnum["DEFENDANT"] = 'DEFENDANT'] = "DEFENDANT";
        UserRoleEnum[UserRoleEnum["LAWFIRMADMIN"] = 'LAWFIRM_ADMIN'] = "LAWFIRMADMIN";
        UserRoleEnum[UserRoleEnum["LAWYER"] = 'LAWYER'] = "LAWYER";
        UserRoleEnum[UserRoleEnum["PARTNER"] = 'PARTNER'] = "PARTNER";
        UserRoleEnum[UserRoleEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(UserRoleEnum = AuthorModel.UserRoleEnum || (AuthorModel.UserRoleEnum = {}));
})(AuthorModel = exports.AuthorModel || (exports.AuthorModel = {}));
