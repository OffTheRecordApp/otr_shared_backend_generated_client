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
export interface SaveDriverLicenseRequest {
    "addressLine1"?: string;
    "addressLine2"?: string;
    "city"?: string;
    "dob"?: string;
    "driverLicenseBackUserAssetId"?: number;
    "driverLicenseFrontUserAssetId"?: number;
    "driverLicenseId"?: number;
    "driverLicenseNumber"?: string;
    "expirationDate"?: string;
    "firstName"?: string;
    "isBackOfLicense"?: boolean;
    "isDeleted"?: boolean;
    "issueDate"?: string;
    "lastName"?: string;
    "licenseClass"?: string;
    "licenseClassEndorsements"?: string;
    "licenseRestrictions"?: string;
    "postalCode"?: string;
    "regionCode"?: string;
    "sex"?: string;
}
