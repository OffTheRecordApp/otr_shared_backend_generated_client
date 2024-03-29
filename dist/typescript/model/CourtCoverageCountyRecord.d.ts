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
export interface CourtCoverageCountyRecord {
    "countyId"?: number;
    "countyName"?: string;
    "numActiveLawfirms"?: number;
    "numCourts"?: number;
    "numCourtsWithCoverage"?: number;
    "numCourtsWithoutCoverage"?: number;
    "numUnserviceableRequests"?: number;
    "percentCourtCoverage"?: number;
    "regionCode"?: string;
}
