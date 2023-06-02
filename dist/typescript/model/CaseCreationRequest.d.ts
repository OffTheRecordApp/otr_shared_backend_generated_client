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
export interface CaseCreationRequest {
    "courtDate"?: string;
    "forcePredeterminedLawfirmId"?: boolean;
    "legalServiceType"?: CaseCreationRequest.LegalServiceTypeEnum;
    "predeterminedLawfirmId"?: number;
    "setQuoteExpirationOn"?: boolean;
}
export declare namespace CaseCreationRequest {
    enum LegalServiceTypeEnum {
        DEFER,
        FIGHT
    }
}
