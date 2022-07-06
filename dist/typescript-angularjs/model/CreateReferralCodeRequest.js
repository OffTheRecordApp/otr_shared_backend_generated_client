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
exports.CreateReferralCodeRequest = void 0;
var CreateReferralCodeRequest;
(function (CreateReferralCodeRequest) {
    var RefereeCreditTypeEnum;
    (function (RefereeCreditTypeEnum) {
        RefereeCreditTypeEnum[RefereeCreditTypeEnum["CENTSVALUE"] = 'CENTS_VALUE'] = "CENTSVALUE";
        RefereeCreditTypeEnum[RefereeCreditTypeEnum["NOCREDIT"] = 'NO_CREDIT'] = "NOCREDIT";
        RefereeCreditTypeEnum[RefereeCreditTypeEnum["PERCENTAGEDISCOUNT"] = 'PERCENTAGE_DISCOUNT'] = "PERCENTAGEDISCOUNT";
    })(RefereeCreditTypeEnum = CreateReferralCodeRequest.RefereeCreditTypeEnum || (CreateReferralCodeRequest.RefereeCreditTypeEnum = {}));
    var ReferrerCreditTypeEnum;
    (function (ReferrerCreditTypeEnum) {
        ReferrerCreditTypeEnum[ReferrerCreditTypeEnum["CENTSVALUE"] = 'CENTS_VALUE'] = "CENTSVALUE";
        ReferrerCreditTypeEnum[ReferrerCreditTypeEnum["NOCREDIT"] = 'NO_CREDIT'] = "NOCREDIT";
        ReferrerCreditTypeEnum[ReferrerCreditTypeEnum["PERCENTAGEDISCOUNT"] = 'PERCENTAGE_DISCOUNT'] = "PERCENTAGEDISCOUNT";
    })(ReferrerCreditTypeEnum = CreateReferralCodeRequest.ReferrerCreditTypeEnum || (CreateReferralCodeRequest.ReferrerCreditTypeEnum = {}));
})(CreateReferralCodeRequest = exports.CreateReferralCodeRequest || (exports.CreateReferralCodeRequest = {}));
