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
export interface MatchLegalServiceModel {
    "chanceOfSuccess"?: number;
    "isSelected"?: boolean;
    "lawfirmCaseId"?: number;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "legalServiceId"?: number;
    "legalServiceName"?: string;
    "legalServiceType"?: MatchLegalServiceModel.LegalServiceTypeEnum;
    "legalVertical"?: MatchLegalServiceModel.LegalVerticalEnum;
    "lineItems"?: Array<models.MatchCaseLineItemModel>;
    "matchExpirationDateUtc"?: string;
    "obfuscatedPictureUrl"?: string;
    "profilePictureUrl"?: string;
    "refundEligibility"?: MatchLegalServiceModel.RefundEligibilityEnum;
    "refundMessage"?: string;
    "refundPercentage"?: number;
    "totalClientCostInCents"?: number;
}
export declare namespace MatchLegalServiceModel {
    enum LegalServiceTypeEnum {
        DEFER,
        FIGHT
    }
    enum LegalVerticalEnum {
        TRAFFIC
    }
    enum RefundEligibilityEnum {
        FULLREFUND,
        NOREFUND
    }
}
