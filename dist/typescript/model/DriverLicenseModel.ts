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

export interface DriverLicenseModel {
    "address"?: models.AddressDomain;
    "deleted"?: boolean;
    "dob"?: string;
    "documentDiscriminatorId"?: string;
    "driverLicenseBackAsset"?: models.UserAssetModel;
    "driverLicenseFrontAsset"?: models.UserAssetModel;
    "driverLicenseId"?: number;
    "driverLicenseNumber"?: string;
    "expirationDate"?: string;
    "eyeColor"?: string;
    "firstName"?: string;
    "height"?: string;
    "isOrganDonor"?: boolean;
    "issueDate"?: string;
    "lastName"?: string;
    "licenseClass"?: string;
    "licenseClassEndorsements"?: string;
    "licenseRestrictions"?: string;
    "sex"?: string;
    "stateName"?: string;
    "userId"?: number;
    "weight"?: string;
}
