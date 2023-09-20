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
import { CountyEntity } from './countyEntity';
import { AddressEntity } from './addressEntity';


export interface CourtEntity { 
    address?: AddressEntity;
    county?: CountyEntity;
    courtCode?: string;
    courtId?: number;
    courtName?: string;
    courtNameAdditional?: string;
    courtType?: CourtEntity.CourtTypeEnum;
    lookupCaseInfoLink?: string;
    otrTargetFee?: number;
    website?: string;
}
export namespace CourtEntity {
    export type CourtTypeEnum = 'CIRCUIT' | 'COUNTY_CLERK' | 'DISTRICT' | 'JUVENILE' | 'MUNICIPAL' | 'PROBATION' | 'SUPERIOR' | 'VIOLATIONS_BUREAU';
    export const CourtTypeEnum = {
        Circuit: 'CIRCUIT' as CourtTypeEnum,
        CountyClerk: 'COUNTY_CLERK' as CourtTypeEnum,
        District: 'DISTRICT' as CourtTypeEnum,
        Juvenile: 'JUVENILE' as CourtTypeEnum,
        Municipal: 'MUNICIPAL' as CourtTypeEnum,
        Probation: 'PROBATION' as CourtTypeEnum,
        Superior: 'SUPERIOR' as CourtTypeEnum,
        ViolationsBureau: 'VIOLATIONS_BUREAU' as CourtTypeEnum
    };
}


