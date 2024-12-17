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

import * as models from './models';

export interface SaveLawfirmSurchargeModel {
    "featureType"?: SaveLawfirmSurchargeModel.FeatureTypeEnum;
    "feeType"?: SaveLawfirmSurchargeModel.FeeTypeEnum;
    "feeValue"?: string;
    "isEnabled"?: boolean;
    "refundEligibility"?: SaveLawfirmSurchargeModel.RefundEligibilityEnum;
    "surchargeId"?: number;
    "surchargeType"?: SaveLawfirmSurchargeModel.SurchargeTypeEnum;
}

export namespace SaveLawfirmSurchargeModel {
    export enum FeatureTypeEnum {
        BLACKBOX = <any> 'BLACK_BOX',
        FASTLANETEEN = <any> 'FASTLANE_TEEN',
        STATEPAGE = <any> 'STATE_PAGE',
        STOREFRONT = <any> 'STOREFRONT'
    }
    export enum FeeTypeEnum {
        FLATFEEINCENTS = <any> 'FLAT_FEE_IN_CENTS',
        FORMULA = <any> 'FORMULA',
        PERCENT = <any> 'PERCENT'
    }
    export enum RefundEligibilityEnum {
        DEFAULT = <any> 'DEFAULT',
        NONREFUNDABLE = <any> 'NON_REFUNDABLE',
        SURCHARGEONLY = <any> 'SURCHARGE_ONLY'
    }
    export enum SurchargeTypeEnum {
        CDL = <any> 'CDL',
        FAILURETOAPPEAR = <any> 'FAILURE_TO_APPEAR',
        LATE = <any> 'LATE',
        MULTIPLEVIOLATIONS = <any> 'MULTIPLE_VIOLATIONS',
        OUTOFSTATE = <any> 'OUT_OF_STATE',
        SHORTNOTICE = <any> 'SHORT_NOTICE',
        WARRANT = <any> 'WARRANT'
    }
}