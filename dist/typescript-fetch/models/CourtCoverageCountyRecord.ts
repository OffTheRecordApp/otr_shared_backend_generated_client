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
 * @interface CourtCoverageCountyRecord
 */
export interface CourtCoverageCountyRecord {
    /**
     * 
     * @type {number}
     * @memberof CourtCoverageCountyRecord
     */
    countyId?: number;
    /**
     * 
     * @type {string}
     * @memberof CourtCoverageCountyRecord
     */
    countyName?: string;
    /**
     * 
     * @type {number}
     * @memberof CourtCoverageCountyRecord
     */
    numActiveLawfirms?: number;
    /**
     * 
     * @type {number}
     * @memberof CourtCoverageCountyRecord
     */
    numCourts?: number;
    /**
     * 
     * @type {number}
     * @memberof CourtCoverageCountyRecord
     */
    numCourtsWithCoverage?: number;
    /**
     * 
     * @type {number}
     * @memberof CourtCoverageCountyRecord
     */
    numCourtsWithoutCoverage?: number;
    /**
     * 
     * @type {number}
     * @memberof CourtCoverageCountyRecord
     */
    numUnserviceableRequests?: number;
    /**
     * 
     * @type {number}
     * @memberof CourtCoverageCountyRecord
     */
    percentCourtCoverage?: number;
    /**
     * 
     * @type {string}
     * @memberof CourtCoverageCountyRecord
     */
    regionCode?: string;
}

export function CourtCoverageCountyRecordFromJSON(json: any): CourtCoverageCountyRecord {
    return CourtCoverageCountyRecordFromJSONTyped(json, false);
}

export function CourtCoverageCountyRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): CourtCoverageCountyRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countyId': !exists(json, 'countyId') ? undefined : json['countyId'],
        'countyName': !exists(json, 'countyName') ? undefined : json['countyName'],
        'numActiveLawfirms': !exists(json, 'numActiveLawfirms') ? undefined : json['numActiveLawfirms'],
        'numCourts': !exists(json, 'numCourts') ? undefined : json['numCourts'],
        'numCourtsWithCoverage': !exists(json, 'numCourtsWithCoverage') ? undefined : json['numCourtsWithCoverage'],
        'numCourtsWithoutCoverage': !exists(json, 'numCourtsWithoutCoverage') ? undefined : json['numCourtsWithoutCoverage'],
        'numUnserviceableRequests': !exists(json, 'numUnserviceableRequests') ? undefined : json['numUnserviceableRequests'],
        'percentCourtCoverage': !exists(json, 'percentCourtCoverage') ? undefined : json['percentCourtCoverage'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
    };
}

export function CourtCoverageCountyRecordToJSON(value?: CourtCoverageCountyRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countyId': value.countyId,
        'countyName': value.countyName,
        'numActiveLawfirms': value.numActiveLawfirms,
        'numCourts': value.numCourts,
        'numCourtsWithCoverage': value.numCourtsWithCoverage,
        'numCourtsWithoutCoverage': value.numCourtsWithoutCoverage,
        'numUnserviceableRequests': value.numUnserviceableRequests,
        'percentCourtCoverage': value.percentCourtCoverage,
        'regionCode': value.regionCode,
    };
}


