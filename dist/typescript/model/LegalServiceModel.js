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
exports.LegalServiceModel = void 0;
var LegalServiceModel;
(function (LegalServiceModel) {
    var LegalServiceTypeEnum;
    (function (LegalServiceTypeEnum) {
        LegalServiceTypeEnum[LegalServiceTypeEnum["DEFER"] = 'DEFER'] = "DEFER";
        LegalServiceTypeEnum[LegalServiceTypeEnum["FIGHT"] = 'FIGHT'] = "FIGHT";
    })(LegalServiceTypeEnum = LegalServiceModel.LegalServiceTypeEnum || (LegalServiceModel.LegalServiceTypeEnum = {}));
    var LegalVerticalEnum;
    (function (LegalVerticalEnum) {
        LegalVerticalEnum[LegalVerticalEnum["TRAFFIC"] = 'TRAFFIC'] = "TRAFFIC";
    })(LegalVerticalEnum = LegalServiceModel.LegalVerticalEnum || (LegalServiceModel.LegalVerticalEnum = {}));
    var RefundEligibilityEnum;
    (function (RefundEligibilityEnum) {
        RefundEligibilityEnum[RefundEligibilityEnum["FULLREFUND"] = 'FULL_REFUND'] = "FULLREFUND";
        RefundEligibilityEnum[RefundEligibilityEnum["NOREFUND"] = 'NO_REFUND'] = "NOREFUND";
    })(RefundEligibilityEnum = LegalServiceModel.RefundEligibilityEnum || (LegalServiceModel.RefundEligibilityEnum = {}));
})(LegalServiceModel = exports.LegalServiceModel || (exports.LegalServiceModel = {}));
