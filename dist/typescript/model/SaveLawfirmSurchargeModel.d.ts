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
export interface SaveLawfirmSurchargeModel {
    "featureType"?: SaveLawfirmSurchargeModel.FeatureTypeEnum;
    "feeType"?: SaveLawfirmSurchargeModel.FeeTypeEnum;
    "feeValue"?: string;
    "isEnabled"?: boolean;
    "refundEligibility"?: SaveLawfirmSurchargeModel.RefundEligibilityEnum;
    "surchargeId"?: number;
    "surchargeType"?: SaveLawfirmSurchargeModel.SurchargeTypeEnum;
}
export declare namespace SaveLawfirmSurchargeModel {
    enum FeatureTypeEnum {
        BLACKBOX,
        FASTLANETEEN,
        STATEPAGE,
        STOREFRONT
    }
    enum FeeTypeEnum {
        FLATFEEINCENTS,
        FORMULA,
        PERCENT
    }
    enum RefundEligibilityEnum {
        DEFAULT,
        NONREFUNDABLE,
        SURCHARGEONLY
    }
    enum SurchargeTypeEnum {
        CDL,
        FAILURETOAPPEAR,
        LATE,
        MULTIPLEVIOLATIONS,
        OUTOFSTATE,
        SHORTNOTICE,
        WARRANT
    }
}
