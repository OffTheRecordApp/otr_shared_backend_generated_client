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
export interface AddInnerCourt {
    "countyObj"?: models.CountyDomain;
    "courtCode"?: string;
    "courtName"?: string;
    "courtNameAdditional"?: string;
    "courtType"?: AddInnerCourt.CourtTypeEnum;
    "otrTargetFee"?: number;
    "unserviceableRequests"?: number;
    "website"?: string;
}
export declare namespace AddInnerCourt {
    enum CourtTypeEnum {
        CIRCUIT,
        COUNTYCLERK,
        DISTRICT,
        JUVENILE,
        MUNICIPAL,
        PROBATION,
        SUPERIOR,
        VIOLATIONSBUREAU
    }
}
