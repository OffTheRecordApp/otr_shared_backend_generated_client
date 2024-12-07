/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SaveDriverLicenseRequest
 */
export interface SaveDriverLicenseRequest {
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    addressLine1?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    addressLine2?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    city?: string;
    /**
     * 
     * @type {Date}
     * @memberof SaveDriverLicenseRequest
     */
    dob?: Date;
    /**
     * 
     * @type {number}
     * @memberof SaveDriverLicenseRequest
     */
    driverLicenseBackUserAssetId?: number;
    /**
     * 
     * @type {number}
     * @memberof SaveDriverLicenseRequest
     */
    driverLicenseFrontUserAssetId?: number;
    /**
     * 
     * @type {number}
     * @memberof SaveDriverLicenseRequest
     */
    driverLicenseId?: number;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    driverLicenseNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof SaveDriverLicenseRequest
     */
    expirationDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    firstName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SaveDriverLicenseRequest
     */
    isBackOfLicense?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SaveDriverLicenseRequest
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof SaveDriverLicenseRequest
     */
    issueDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    licenseClass?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    licenseClassEndorsements?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    licenseRestrictions?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    regionCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SaveDriverLicenseRequest
     */
    sex?: string;
}

export function SaveDriverLicenseRequestFromJSON(json: any): SaveDriverLicenseRequest {
    return SaveDriverLicenseRequestFromJSONTyped(json, false);
}

export function SaveDriverLicenseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveDriverLicenseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'addressLine2': !exists(json, 'addressLine2') ? undefined : json['addressLine2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'dob': !exists(json, 'dob') ? undefined : (new Date(json['dob'])),
        'driverLicenseBackUserAssetId': !exists(json, 'driverLicenseBackUserAssetId') ? undefined : json['driverLicenseBackUserAssetId'],
        'driverLicenseFrontUserAssetId': !exists(json, 'driverLicenseFrontUserAssetId') ? undefined : json['driverLicenseFrontUserAssetId'],
        'driverLicenseId': !exists(json, 'driverLicenseId') ? undefined : json['driverLicenseId'],
        'driverLicenseNumber': !exists(json, 'driverLicenseNumber') ? undefined : json['driverLicenseNumber'],
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'isBackOfLicense': !exists(json, 'isBackOfLicense') ? undefined : json['isBackOfLicense'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'issueDate': !exists(json, 'issueDate') ? undefined : (new Date(json['issueDate'])),
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'licenseClass': !exists(json, 'licenseClass') ? undefined : json['licenseClass'],
        'licenseClassEndorsements': !exists(json, 'licenseClassEndorsements') ? undefined : json['licenseClassEndorsements'],
        'licenseRestrictions': !exists(json, 'licenseRestrictions') ? undefined : json['licenseRestrictions'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'sex': !exists(json, 'sex') ? undefined : json['sex'],
    };
}

export function SaveDriverLicenseRequestToJSON(value?: SaveDriverLicenseRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressLine1': value.addressLine1,
        'addressLine2': value.addressLine2,
        'city': value.city,
        'dob': value.dob === undefined ? undefined : (value.dob.toISOString()),
        'driverLicenseBackUserAssetId': value.driverLicenseBackUserAssetId,
        'driverLicenseFrontUserAssetId': value.driverLicenseFrontUserAssetId,
        'driverLicenseId': value.driverLicenseId,
        'driverLicenseNumber': value.driverLicenseNumber,
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString()),
        'firstName': value.firstName,
        'isBackOfLicense': value.isBackOfLicense,
        'isDeleted': value.isDeleted,
        'issueDate': value.issueDate === undefined ? undefined : (value.issueDate.toISOString()),
        'lastName': value.lastName,
        'licenseClass': value.licenseClass,
        'licenseClassEndorsements': value.licenseClassEndorsements,
        'licenseRestrictions': value.licenseRestrictions,
        'postalCode': value.postalCode,
        'regionCode': value.regionCode,
        'sex': value.sex,
    };
}


