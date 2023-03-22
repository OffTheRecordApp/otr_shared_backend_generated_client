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
    SaveLawfirmSurchargeModel.FeatureTypeEnum = {
        BlackBox: 'BLACK_BOX',
        StatePage: 'STATE_PAGE',
        Storefront: 'STOREFRONT'
    };
    SaveLawfirmSurchargeModel.FeeTypeEnum = {
        FlatFeeInCents: 'FLAT_FEE_IN_CENTS',
        Formula: 'FORMULA',
        Percent: 'PERCENT'
    };
    SaveLawfirmSurchargeModel.RefundEligibilityEnum = {
        Default: 'DEFAULT',
        NonRefundable: 'NON_REFUNDABLE',
        SurchargeOnly: 'SURCHARGE_ONLY'
    };
    SaveLawfirmSurchargeModel.SurchargeTypeEnum = {
        Cdl: 'CDL',
        FailureToAppear: 'FAILURE_TO_APPEAR',
        Late: 'LATE',
        MultipleViolations: 'MULTIPLE_VIOLATIONS',
        OutOfState: 'OUT_OF_STATE',
        ShortNotice: 'SHORT_NOTICE',
        Warrant: 'WARRANT'
    };
})(SaveLawfirmSurchargeModel = exports.SaveLawfirmSurchargeModel || (exports.SaveLawfirmSurchargeModel = {}));