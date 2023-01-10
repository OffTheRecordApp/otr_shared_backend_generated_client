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
exports.GetReferralCodeResponse = void 0;
var GetReferralCodeResponse;
(function (GetReferralCodeResponse) {
    var OwnerTypeEnum;
    (function (OwnerTypeEnum) {
        OwnerTypeEnum[OwnerTypeEnum["LAWFIRM"] = 'LAWFIRM'] = "LAWFIRM";
        OwnerTypeEnum[OwnerTypeEnum["OTR"] = 'OTR'] = "OTR";
    })(OwnerTypeEnum = GetReferralCodeResponse.OwnerTypeEnum || (GetReferralCodeResponse.OwnerTypeEnum = {}));
    var RefereeCreditTypeEnum;
    (function (RefereeCreditTypeEnum) {
        RefereeCreditTypeEnum[RefereeCreditTypeEnum["CENTSVALUE"] = 'CENTS_VALUE'] = "CENTSVALUE";
        RefereeCreditTypeEnum[RefereeCreditTypeEnum["NOCREDIT"] = 'NO_CREDIT'] = "NOCREDIT";
        RefereeCreditTypeEnum[RefereeCreditTypeEnum["PERCENTAGEDISCOUNT"] = 'PERCENTAGE_DISCOUNT'] = "PERCENTAGEDISCOUNT";
    })(RefereeCreditTypeEnum = GetReferralCodeResponse.RefereeCreditTypeEnum || (GetReferralCodeResponse.RefereeCreditTypeEnum = {}));
})(GetReferralCodeResponse = exports.GetReferralCodeResponse || (exports.GetReferralCodeResponse = {}));
