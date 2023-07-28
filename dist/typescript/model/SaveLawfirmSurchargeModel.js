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
exports.SaveLawfirmSurchargeModel = void 0;
var SaveLawfirmSurchargeModel;
(function (SaveLawfirmSurchargeModel) {
    var FeatureTypeEnum;
    (function (FeatureTypeEnum) {
        FeatureTypeEnum[FeatureTypeEnum["BLACKBOX"] = 'BLACK_BOX'] = "BLACKBOX";
        FeatureTypeEnum[FeatureTypeEnum["STATEPAGE"] = 'STATE_PAGE'] = "STATEPAGE";
        FeatureTypeEnum[FeatureTypeEnum["STOREFRONT"] = 'STOREFRONT'] = "STOREFRONT";
    })(FeatureTypeEnum = SaveLawfirmSurchargeModel.FeatureTypeEnum || (SaveLawfirmSurchargeModel.FeatureTypeEnum = {}));
    var FeeTypeEnum;
    (function (FeeTypeEnum) {
        FeeTypeEnum[FeeTypeEnum["FLATFEEINCENTS"] = 'FLAT_FEE_IN_CENTS'] = "FLATFEEINCENTS";
        FeeTypeEnum[FeeTypeEnum["FORMULA"] = 'FORMULA'] = "FORMULA";
        FeeTypeEnum[FeeTypeEnum["PERCENT"] = 'PERCENT'] = "PERCENT";
    })(FeeTypeEnum = SaveLawfirmSurchargeModel.FeeTypeEnum || (SaveLawfirmSurchargeModel.FeeTypeEnum = {}));
    var RefundEligibilityEnum;
    (function (RefundEligibilityEnum) {
        RefundEligibilityEnum[RefundEligibilityEnum["DEFAULT"] = 'DEFAULT'] = "DEFAULT";
        RefundEligibilityEnum[RefundEligibilityEnum["NONREFUNDABLE"] = 'NON_REFUNDABLE'] = "NONREFUNDABLE";
        RefundEligibilityEnum[RefundEligibilityEnum["SURCHARGEONLY"] = 'SURCHARGE_ONLY'] = "SURCHARGEONLY";
    })(RefundEligibilityEnum = SaveLawfirmSurchargeModel.RefundEligibilityEnum || (SaveLawfirmSurchargeModel.RefundEligibilityEnum = {}));
    var SurchargeTypeEnum;
    (function (SurchargeTypeEnum) {
        SurchargeTypeEnum[SurchargeTypeEnum["CDL"] = 'CDL'] = "CDL";
        SurchargeTypeEnum[SurchargeTypeEnum["FAILURETOAPPEAR"] = 'FAILURE_TO_APPEAR'] = "FAILURETOAPPEAR";
        SurchargeTypeEnum[SurchargeTypeEnum["LATE"] = 'LATE'] = "LATE";
        SurchargeTypeEnum[SurchargeTypeEnum["MULTIPLEVIOLATIONS"] = 'MULTIPLE_VIOLATIONS'] = "MULTIPLEVIOLATIONS";
        SurchargeTypeEnum[SurchargeTypeEnum["OUTOFSTATE"] = 'OUT_OF_STATE'] = "OUTOFSTATE";
        SurchargeTypeEnum[SurchargeTypeEnum["SHORTNOTICE"] = 'SHORT_NOTICE'] = "SHORTNOTICE";
        SurchargeTypeEnum[SurchargeTypeEnum["WARRANT"] = 'WARRANT'] = "WARRANT";
    })(SurchargeTypeEnum = SaveLawfirmSurchargeModel.SurchargeTypeEnum || (SaveLawfirmSurchargeModel.SurchargeTypeEnum = {}));
})(SaveLawfirmSurchargeModel = exports.SaveLawfirmSurchargeModel || (exports.SaveLawfirmSurchargeModel = {}));
