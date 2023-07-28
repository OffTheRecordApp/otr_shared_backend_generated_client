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
export interface MatchInnerCaseModel {
    "caseId"?: string;
    "citation"?: models.MatchCitationModel;
    "isLawfirmCodeApplied"?: boolean;
    "legalServices"?: Array<models.MatchLegalServiceModel>;
    "maxPenalties"?: Array<models.MatchCaseViolationPenaltyModel>;
    "referralCodeOwner"?: MatchInnerCaseModel.ReferralCodeOwnerEnum;
    "userId"?: number;
}
export declare namespace MatchInnerCaseModel {
    enum ReferralCodeOwnerEnum {
        LAWFIRM,
        OTR
    }
}
