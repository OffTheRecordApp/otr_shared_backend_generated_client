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
export interface Penalty {
    "additionalTip"?: string;
    "penaltyFriendlyDescription"?: string;
    "penaltyMerged"?: boolean;
    "penaltyType"?: Penalty.PenaltyTypeEnum;
    "penaltyTypeId"?: number;
    "penaltyValue"?: string;
    "vectorImageUrl"?: string;
}
export declare namespace Penalty {
    enum PenaltyTypeEnum {
        DEMERITPOINTS,
        INCARCERATIONMAXDAYS,
        INCARCERATIONMINDAYS,
        INSURANCEPOINTS,
        INSURANCERATEINCREASE,
        LICENSEREVOCATIONMAXDAYS,
        LICENSEREVOCATIONMINDAYS,
        LICENSESUSPENSIONMAXDAYS,
        LICENSESUSPENSIONMINDAYS,
        MANDATORYCOURTAPPEARANCE,
        MANDATORYCOURTAPPEARANCEWITHATTORNEY,
        MAXBAILAMOUNT,
        MINBAILAMOUNT,
        PROBATIONINDAYS,
        TOTALBAILAMOUNT
    }
}
