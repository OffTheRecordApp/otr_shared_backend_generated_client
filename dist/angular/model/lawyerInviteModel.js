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
exports.LawyerInviteModel = void 0;
var LawyerInviteModel;
(function (LawyerInviteModel) {
    LawyerInviteModel.RoleTypesEnum = {
        Admin: 'ADMIN',
        Defendant: 'DEFENDANT',
        LawfirmAdmin: 'LAWFIRM_ADMIN',
        Lawyer: 'LAWYER',
        Partner: 'PARTNER',
        Unknown: 'UNKNOWN'
    };
    LawyerInviteModel.VerificationStatusEnum = {
        Cancelled: 'CANCELLED',
        Pending: 'PENDING',
        Verified: 'VERIFIED'
    };
})(LawyerInviteModel = exports.LawyerInviteModel || (exports.LawyerInviteModel = {}));