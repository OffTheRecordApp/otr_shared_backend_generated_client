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
export var ListLawfirmSurchargeModel;
(function (ListLawfirmSurchargeModel) {
    let FeatureEnum;
    (function (FeatureEnum) {
        FeatureEnum[FeatureEnum["BLACKBOX"] = 'BLACK_BOX'] = "BLACKBOX";
        FeatureEnum[FeatureEnum["FASTLANETEEN"] = 'FASTLANE_TEEN'] = "FASTLANETEEN";
        FeatureEnum[FeatureEnum["STATEPAGE"] = 'STATE_PAGE'] = "STATEPAGE";
        FeatureEnum[FeatureEnum["STOREFRONT"] = 'STOREFRONT'] = "STOREFRONT";
    })(FeatureEnum = ListLawfirmSurchargeModel.FeatureEnum || (ListLawfirmSurchargeModel.FeatureEnum = {}));
    let FeeTypeEnum;
    (function (FeeTypeEnum) {
        FeeTypeEnum[FeeTypeEnum["FLATFEEINCENTS"] = 'FLAT_FEE_IN_CENTS'] = "FLATFEEINCENTS";
        FeeTypeEnum[FeeTypeEnum["FORMULA"] = 'FORMULA'] = "FORMULA";
        FeeTypeEnum[FeeTypeEnum["PERCENT"] = 'PERCENT'] = "PERCENT";
    })(FeeTypeEnum = ListLawfirmSurchargeModel.FeeTypeEnum || (ListLawfirmSurchargeModel.FeeTypeEnum = {}));
    let RefundEligibilityEnum;
    (function (RefundEligibilityEnum) {
        RefundEligibilityEnum[RefundEligibilityEnum["DEFAULT"] = 'DEFAULT'] = "DEFAULT";
        RefundEligibilityEnum[RefundEligibilityEnum["NONREFUNDABLE"] = 'NON_REFUNDABLE'] = "NONREFUNDABLE";
        RefundEligibilityEnum[RefundEligibilityEnum["SURCHARGEONLY"] = 'SURCHARGE_ONLY'] = "SURCHARGEONLY";
    })(RefundEligibilityEnum = ListLawfirmSurchargeModel.RefundEligibilityEnum || (ListLawfirmSurchargeModel.RefundEligibilityEnum = {}));
})(ListLawfirmSurchargeModel || (ListLawfirmSurchargeModel = {}));
