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
import { MatchCaseLineItemModel } from './matchCaseLineItemModel';


export interface MatchLegalServiceModel { 
    chanceOfSuccess?: number;
    isSelected?: boolean;
    lawfirmCaseId?: number;
    lawfirmId?: number;
    lawfirmName?: string;
    legalServiceId?: number;
    legalServiceName?: string;
    legalServiceType?: MatchLegalServiceModel.LegalServiceTypeEnum;
    legalVertical?: MatchLegalServiceModel.LegalVerticalEnum;
    lineItems?: Array<MatchCaseLineItemModel>;
    matchExpirationDateUtc?: string;
    obfuscatedPictureUrl?: string;
    profilePictureUrl?: string;
    refundEligibility?: MatchLegalServiceModel.RefundEligibilityEnum;
    refundMessage?: string;
    refundPercentage?: number;
    totalClientCostInCents?: number;
}
export namespace MatchLegalServiceModel {
    export type LegalServiceTypeEnum = 'DEFER' | 'FIGHT';
    export const LegalServiceTypeEnum = {
        Defer: 'DEFER' as LegalServiceTypeEnum,
        Fight: 'FIGHT' as LegalServiceTypeEnum
    };
    export type LegalVerticalEnum = 'TRAFFIC';
    export const LegalVerticalEnum = {
        Traffic: 'TRAFFIC' as LegalVerticalEnum
    };
    export type RefundEligibilityEnum = 'FULL_REFUND' | 'NO_REFUND';
    export const RefundEligibilityEnum = {
        FullRefund: 'FULL_REFUND' as RefundEligibilityEnum,
        NoRefund: 'NO_REFUND' as RefundEligibilityEnum
    };
}


