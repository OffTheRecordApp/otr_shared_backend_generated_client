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
    AddressDomain,
    AddressDomainFromJSON,
    AddressDomainFromJSONTyped,
    AddressDomainToJSON,
    CountyDomain,
    CountyDomainFromJSON,
    CountyDomainFromJSONTyped,
    CountyDomainToJSON,
    TimeZone,
    TimeZoneFromJSON,
    TimeZoneFromJSONTyped,
    TimeZoneToJSON,
} from './';

/**
 * 
 * @export
 * @interface CourtDomain
 */
export interface CourtDomain {
    /**
     * 
     * @type {AddressDomain}
     * @memberof CourtDomain
     */
    address?: AddressDomain;
    /**
     * 
     * @type {string}
     * @memberof CourtDomain
     */
    county?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtDomain
     */
    countyId?: number;
    /**
     * 
     * @type {CountyDomain}
     * @memberof CourtDomain
     */
    countyObj?: CountyDomain;
    /**
     * 
     * @type {string}
     * @memberof CourtDomain
     */
    courtCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtDomain
     */
    courtId?: number;
    /**
     * 
     * @type {string}
     * @memberof CourtDomain
     */
    courtName?: string;
    /**
     * 
     * @type {string}
     * @memberof CourtDomain
     */
    courtNameAdditional?: string;
    /**
     * 
     * @type {string}
     * @memberof CourtDomain
     */
    courtType?: CourtDomainCourtTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CourtDomain
     */
    lookupCaseInfoLink?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtDomain
     */
    otrTargetFee?: number;
    /**
     * 
     * @type {TimeZone}
     * @memberof CourtDomain
     */
    timeZone?: TimeZone;
    /**
     * 
     * @type {number}
     * @memberof CourtDomain
     */
    unserviceableRequests?: number;
    /**
     * 
     * @type {string}
     * @memberof CourtDomain
     */
    website?: string;
}

export function CourtDomainFromJSON(json: any): CourtDomain {
    return CourtDomainFromJSONTyped(json, false);
}

export function CourtDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourtDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressDomainFromJSON(json['address']),
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
        'timeZone': !exists(json, 'timeZone') ? undefined : TimeZoneFromJSON(json['timeZone']),
        'unserviceableRequests': !exists(json, 'unserviceableRequests') ? undefined : json['unserviceableRequests'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}

export function CourtDomainToJSON(value?: CourtDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressDomainToJSON(value.address),
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
        'timeZone': TimeZoneToJSON(value.timeZone),
        'unserviceableRequests': value.unserviceableRequests,
        'website': value.website,
    };
}

/**
* @export
* @enum {string}
*/
export enum CourtDomainCourtTypeEnum {
    CIRCUIT = 'CIRCUIT',
    COUNTYCLERK = 'COUNTY_CLERK',
    DISTRICT = 'DISTRICT',
    JUVENILE = 'JUVENILE',
    MUNICIPAL = 'MUNICIPAL',
    PROBATION = 'PROBATION',
    SUPERIOR = 'SUPERIOR',
    VIOLATIONSBUREAU = 'VIOLATIONS_BUREAU'
}


