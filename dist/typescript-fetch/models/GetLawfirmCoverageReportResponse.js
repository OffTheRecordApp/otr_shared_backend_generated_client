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
import { LawfirmCoverageRecordFromJSON, LawfirmCoverageRecordToJSON, } from './';
export function GetLawfirmCoverageReportResponseFromJSON(json) {
    return GetLawfirmCoverageReportResponseFromJSONTyped(json, false);
}
export function GetLawfirmCoverageReportResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'numRecords': !exists(json, 'numRecords') ? undefined : json['numRecords'],
        'records': !exists(json, 'records') ? undefined : (json['records'].map(LawfirmCoverageRecordFromJSON)),
    };
}
export function GetLawfirmCoverageReportResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'numRecords': value.numRecords,
        'records': value.records === undefined ? undefined : (value.records.map(LawfirmCoverageRecordToJSON)),
    };
}
