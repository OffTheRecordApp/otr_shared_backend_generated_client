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
export interface PredictImageClassificationResponse {
    "blurLevel"?: string;
    "blurLevelConfidenceLevel"?: number;
    "blurry"?: boolean;
    "documentType"?: string;
    "documentTypeConfidenceLevel"?: number;
    "exposure"?: string;
    "exposureConfidenceLevel"?: number;
    "federal"?: boolean;
    "isBlurryConfidenceLevel"?: number;
    "isFederalConfidenceLevel"?: number;
    "isTypedConfidenceLevel"?: number;
    "regionCode"?: string;
    "regionConfidenceLevel"?: number;
    "regionName"?: string;
    "typed"?: boolean;
}