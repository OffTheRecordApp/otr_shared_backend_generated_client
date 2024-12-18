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
 * @interface CaseUserDefendantAttributesRequest
 */
export interface CaseUserDefendantAttributesRequest {
    /**
     * 
     * @type {Date}
     * @memberof CaseUserDefendantAttributesRequest
     */
    dateOfBirth?: Date;
    /**
     * 
     * @type {string}
     * @memberof CaseUserDefendantAttributesRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseUserDefendantAttributesRequest
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseUserDefendantAttributesRequest
     */
    licenseNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CaseUserDefendantAttributesRequest
     */
    licenseState?: string;
}

export function CaseUserDefendantAttributesRequestFromJSON(json: any): CaseUserDefendantAttributesRequest {
    return CaseUserDefendantAttributesRequestFromJSONTyped(json, false);
}

export function CaseUserDefendantAttributesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseUserDefendantAttributesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateOfBirth': !exists(json, 'dateOfBirth') ? undefined : (new Date(json['dateOfBirth'])),
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'licenseNumber': !exists(json, 'licenseNumber') ? undefined : json['licenseNumber'],
        'licenseState': !exists(json, 'licenseState') ? undefined : json['licenseState'],
    };
}

export function CaseUserDefendantAttributesRequestToJSON(value?: CaseUserDefendantAttributesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dateOfBirth': value.dateOfBirth === undefined ? undefined : (value.dateOfBirth.toISOString().substr(0,10)),
        'firstName': value.firstName,
        'lastName': value.lastName,
        'licenseNumber': value.licenseNumber,
        'licenseState': value.licenseState,
    };
}


