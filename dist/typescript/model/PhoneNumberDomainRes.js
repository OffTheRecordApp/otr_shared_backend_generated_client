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
exports.PhoneNumberDomainRes = void 0;
var PhoneNumberDomainRes;
(function (PhoneNumberDomainRes) {
    var EntityTypeEnum;
    (function (EntityTypeEnum) {
        EntityTypeEnum[EntityTypeEnum["CASE"] = 'CASE'] = "CASE";
        EntityTypeEnum[EntityTypeEnum["CASEPAYMENT"] = 'CASE_PAYMENT'] = "CASEPAYMENT";
        EntityTypeEnum[EntityTypeEnum["CITATION"] = 'CITATION'] = "CITATION";
        EntityTypeEnum[EntityTypeEnum["COURT"] = 'COURT'] = "COURT";
        EntityTypeEnum[EntityTypeEnum["LAWFIRM"] = 'LAWFIRM'] = "LAWFIRM";
        EntityTypeEnum[EntityTypeEnum["LAWFIRMCASE"] = 'LAWFIRM_CASE'] = "LAWFIRMCASE";
        EntityTypeEnum[EntityTypeEnum["LAWYER"] = 'LAWYER'] = "LAWYER";
        EntityTypeEnum[EntityTypeEnum["LINEITEM"] = 'LINE_ITEM'] = "LINEITEM";
        EntityTypeEnum[EntityTypeEnum["STRIPECHARGE"] = 'STRIPE_CHARGE'] = "STRIPECHARGE";
        EntityTypeEnum[EntityTypeEnum["USER"] = 'USER'] = "USER";
    })(EntityTypeEnum = PhoneNumberDomainRes.EntityTypeEnum || (PhoneNumberDomainRes.EntityTypeEnum = {}));
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["HOME"] = 'HOME'] = "HOME";
        TypeEnum[TypeEnum["MOBILE"] = 'MOBILE'] = "MOBILE";
        TypeEnum[TypeEnum["NOTSPECIFIED"] = 'NOT_SPECIFIED'] = "NOTSPECIFIED";
        TypeEnum[TypeEnum["OFFICE"] = 'OFFICE'] = "OFFICE";
    })(TypeEnum = PhoneNumberDomainRes.TypeEnum || (PhoneNumberDomainRes.TypeEnum = {}));
})(PhoneNumberDomainRes = exports.PhoneNumberDomainRes || (exports.PhoneNumberDomainRes = {}));
