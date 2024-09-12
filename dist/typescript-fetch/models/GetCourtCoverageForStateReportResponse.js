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
import { exists } from '../runtime';
import { CourtCoverageCountyRecordFromJSON, CourtCoverageCountyRecordToJSON, } from './';
export function GetCourtCoverageForStateReportResponseFromJSON(json) {
    return GetCourtCoverageForStateReportResponseFromJSONTyped(json, false);
}
export function GetCourtCoverageForStateReportResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'numCounties': !exists(json, 'numCounties') ? undefined : json['numCounties'],
        'records': !exists(json, 'records') ? undefined : (json['records'].map(CourtCoverageCountyRecordFromJSON)),
    };
}
export function GetCourtCoverageForStateReportResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'numCounties': value.numCounties,
        'records': value.records === undefined ? undefined : (value.records.map(CourtCoverageCountyRecordToJSON)),
    };
}