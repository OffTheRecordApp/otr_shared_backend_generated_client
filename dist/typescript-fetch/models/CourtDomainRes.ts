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
    AddressDomainRes,
    AddressDomainResFromJSON,
    AddressDomainResFromJSONTyped,
    AddressDomainResToJSON,
    CountyDomain,
    CountyDomainFromJSON,
    CountyDomainFromJSONTyped,
    CountyDomainToJSON,
    TimeZoneRes,
    TimeZoneResFromJSON,
    TimeZoneResFromJSONTyped,
    TimeZoneResToJSON,
} from './';

/**
 * 
 * @export
 * @interface CourtDomainRes
 */
export interface CourtDomainRes {
    /**
     * 
     * @type {AddressDomainRes}
     * @memberof CourtDomainRes
     */
    address?: AddressDomainRes;
    /**
     * 
     * @type {string}
     * @memberof CourtDomainRes
     */
    county?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtDomainRes
     */
    countyId?: number;
    /**
     * 
     * @type {CountyDomain}
     * @memberof CourtDomainRes
     */
    countyObj?: CountyDomain;
    /**
     * 
     * @type {string}
     * @memberof CourtDomainRes
     */
    courtCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtDomainRes
     */
    courtId?: number;
    /**
     * 
     * @type {string}
     * @memberof CourtDomainRes
     */
    courtName?: string;
    /**
     * 
     * @type {string}
     * @memberof CourtDomainRes
     */
    courtNameAdditional?: string;
    /**
     * 
     * @type {string}
     * @memberof CourtDomainRes
     */
    courtType?: CourtDomainResCourtTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CourtDomainRes
     */
    lookupCaseInfoLink?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtDomainRes
     */
    otrTargetFee?: number;
    /**
     * 
     * @type {TimeZoneRes}
     * @memberof CourtDomainRes
     */
    timeZone?: TimeZoneRes;
    /**
     * 
     * @type {number}
     * @memberof CourtDomainRes
     */
    unserviceableRequests?: number;
    /**
     * 
     * @type {string}
     * @memberof CourtDomainRes
     */
    website?: string;
}

export function CourtDomainResFromJSON(json: any): CourtDomainRes {
    return CourtDomainResFromJSONTyped(json, false);
}

export function CourtDomainResFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourtDomainRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressDomainResFromJSON(json['address']),
        'county': !exists(json, 'county') ? undefined : json['county'],
        'countyId': !exists(json, 'countyId') ? undefined : json['countyId'],
        'countyObj': !exists(json, 'countyObj') ? undefined : CountyDomainFromJSON(json['countyObj']),
        'courtCode': !exists(json, 'courtCode') ? undefined : json['courtCode'],
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'courtNameAdditional': !exists(json, 'courtNameAdditional') ? undefined : json['courtNameAdditional'],
        'courtType': !exists(json, 'courtType') ? undefined : json['courtType'],
        'lookupCaseInfoLink': !exists(json, 'lookupCaseInfoLink') ? undefined : json['lookupCaseInfoLink'],
        'otrTargetFee': !exists(json, 'otrTargetFee') ? undefined : json['otrTargetFee'],
        'timeZone': !exists(json, 'timeZone') ? undefined : TimeZoneResFromJSON(json['timeZone']),
        'unserviceableRequests': !exists(json, 'unserviceableRequests') ? undefined : json['unserviceableRequests'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}

export function CourtDomainResToJSON(value?: CourtDomainRes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressDomainResToJSON(value.address),
        'county': value.county,
        'countyId': value.countyId,
        'countyObj': CountyDomainToJSON(value.countyObj),
        'courtCode': value.courtCode,
        'courtId': value.courtId,
        'courtName': value.courtName,
        'courtNameAdditional': value.courtNameAdditional,
        'courtType': value.courtType,
        'lookupCaseInfoLink': value.lookupCaseInfoLink,
        'otrTargetFee': value.otrTargetFee,
        'timeZone': TimeZoneResToJSON(value.timeZone),
        'unserviceableRequests': value.unserviceableRequests,
        'website': value.website,
    };
}

/**
* @export
* @enum {string}
*/
export enum CourtDomainResCourtTypeEnum {
    CIRCUIT = 'CIRCUIT',
    COUNTYCLERK = 'COUNTY_CLERK',
    DISTRICT = 'DISTRICT',
    JUVENILE = 'JUVENILE',
    MUNICIPAL = 'MUNICIPAL',
    PROBATION = 'PROBATION',
    SUPERIOR = 'SUPERIOR',
    VIOLATIONSBUREAU = 'VIOLATIONS_BUREAU'
}


