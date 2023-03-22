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
import { AddressDomainRes } from './addressDomainRes';
import { TimeZoneRes } from './timeZoneRes';
import { CountyDomain } from './countyDomain';
export interface CourtDomainRes {
    address?: AddressDomainRes;
    county?: string;
    countyId?: number;
    countyObj?: CountyDomain;
    courtCode?: string;
    courtId?: number;
    courtName?: string;
    courtNameAdditional?: string;
    courtType?: CourtDomainRes.CourtTypeEnum;
    lookupCaseInfoLink?: string;
    otrTargetFee?: number;
    timeZone?: TimeZoneRes;
    unserviceableRequests?: number;
    website?: string;
}
export declare namespace CourtDomainRes {
    type CourtTypeEnum = 'CIRCUIT' | 'COUNTY_CLERK' | 'DISTRICT' | 'JUVENILE' | 'MUNICIPAL' | 'PROBATION' | 'SUPERIOR' | 'VIOLATIONS_BUREAU';
    const CourtTypeEnum: {
        Circuit: CourtTypeEnum;
        CountyClerk: CourtTypeEnum;
        District: CourtTypeEnum;
        Juvenile: CourtTypeEnum;
        Municipal: CourtTypeEnum;
        Probation: CourtTypeEnum;
        Superior: CourtTypeEnum;
        ViolationsBureau: CourtTypeEnum;
    };
}