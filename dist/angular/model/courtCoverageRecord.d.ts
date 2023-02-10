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
export interface CourtCoverageRecord {
    countyId?: number;
    countyName?: string;
    courtId?: number;
    courtName?: string;
    isVacationMode?: boolean;
    lawfirmId?: number;
    lawfirmName?: string;
    lawfirmPriority?: number;
    lawyerFee?: number;
    otrTargetFee?: number;
    regionCode?: string;
    unserviceableRequests?: number;
}
