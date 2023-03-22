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
    AuthorModel.UserRoleEnum = {
        Admin: 'ADMIN',
        Defendant: 'DEFENDANT',
        LawfirmAdmin: 'LAWFIRM_ADMIN',
        Lawyer: 'LAWYER',
        Partner: 'PARTNER',
        Unknown: 'UNKNOWN'
    };
})(AuthorModel = exports.AuthorModel || (exports.AuthorModel = {}));