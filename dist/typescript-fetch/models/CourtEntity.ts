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
import {
    AddressEntity,
    AddressEntityFromJSON,
    AddressEntityFromJSONTyped,
    AddressEntityToJSON,
    CountyEntity,
    CountyEntityFromJSON,
    CountyEntityFromJSONTyped,
    CountyEntityToJSON,
} from './';

/**
 * 
 * @export
 * @interface CourtEntity
 */
export interface CourtEntity {
    /**
     * 
     * @type {AddressEntity}
     * @memberof CourtEntity
     */
    address?: AddressEntity;
    /**
     * 
     * @type {CountyEntity}
     * @memberof CourtEntity
     */
    county?: CountyEntity;
    /**
     * 
     * @type {string}
     * @memberof CourtEntity
     */
    courtCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtEntity
     */
    courtId?: number;
    /**
     * 
     * @type {string}
     * @memberof CourtEntity
     */
    courtName?: string;
    /**
     * 
     * @type {string}
     * @memberof CourtEntity
     */
    courtNameAdditional?: string;
    /**
     * 
     * @type {string}
     * @memberof CourtEntity
     */
    courtType?: CourtEntityCourtTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CourtEntity
     */
    lookupCaseInfoLink?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtEntity
     */
    otrTargetFee?: number;
    /**
     * 
     * @type {number}
     * @memberof CourtEntity
     */
    similarityScore?: number;
    /**
     * 
     * @type {string}
     * @memberof CourtEntity
     */
    website?: string;
}

export function CourtEntityFromJSON(json: any): CourtEntity {
    return CourtEntityFromJSONTyped(json, false);
}

export function CourtEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourtEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressEntityFromJSON(json['address']),
        'county': !exists(json, 'county') ? undefined : CountyEntityFromJSON(json['county']),
        'courtCode': !exists(json, 'courtCode') ? undefined : json['courtCode'],
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'courtNameAdditional': !exists(json, 'courtNameAdditional') ? undefined : json['courtNameAdditional'],
        'courtType': !exists(json, 'courtType') ? undefined : json['courtType'],
        'lookupCaseInfoLink': !exists(json, 'lookupCaseInfoLink') ? undefined : json['lookupCaseInfoLink'],
        'otrTargetFee': !exists(json, 'otrTargetFee') ? undefined : json['otrTargetFee'],
        'similarityScore': !exists(json, 'similarityScore') ? undefined : json['similarityScore'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}

export function CourtEntityToJSON(value?: CourtEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressEntityToJSON(value.address),
        'county': CountyEntityToJSON(value.county),
        'courtCode': value.courtCode,
        'courtId': value.courtId,
        'courtName': value.courtName,
        'courtNameAdditional': value.courtNameAdditional,
        'courtType': value.courtType,
        'lookupCaseInfoLink': value.lookupCaseInfoLink,
        'otrTargetFee': value.otrTargetFee,
        'similarityScore': value.similarityScore,
        'website': value.website,
    };
}

/**
* @export
* @enum {string}
*/
export enum CourtEntityCourtTypeEnum {
    CIRCUIT = 'CIRCUIT',
    COUNTYCLERK = 'COUNTY_CLERK',
    DISTRICT = 'DISTRICT',
    JUVENILE = 'JUVENILE',
    MUNICIPAL = 'MUNICIPAL',
    PROBATION = 'PROBATION',
    SUPERIOR = 'SUPERIOR',
    VIOLATIONSBUREAU = 'VIOLATIONS_BUREAU'
}


