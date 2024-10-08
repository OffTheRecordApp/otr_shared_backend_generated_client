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
import { TimestampFromJSON, TimestampToJSON, } from './';
export function LawfirmCoverageRecordFromJSON(json) {
    return LawfirmCoverageRecordFromJSONTyped(json, false);
}
export function LawfirmCoverageRecordFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseAssignmentPriority': !exists(json, 'caseAssignmentPriority') ? undefined : json['caseAssignmentPriority'],
        'countyId': !exists(json, 'countyId') ? undefined : json['countyId'],
        'countyName': !exists(json, 'countyName') ? undefined : json['countyName'],
        'isVacationMode': !exists(json, 'isVacationMode') ? undefined : json['isVacationMode'],
        'latestCaseAssignmentDateUtc': !exists(json, 'latestCaseAssignmentDateUtc') ? undefined : TimestampFromJSON(json['latestCaseAssignmentDateUtc']),
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'maxCaseCapacity': !exists(json, 'maxCaseCapacity') ? undefined : json['maxCaseCapacity'],
        'numActiveCases': !exists(json, 'numActiveCases') ? undefined : json['numActiveCases'],
        'numCourtsCovered': !exists(json, 'numCourtsCovered') ? undefined : json['numCourtsCovered'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
    };
}
export function LawfirmCoverageRecordToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseAssignmentPriority': value.caseAssignmentPriority,
        'countyId': value.countyId,
        'countyName': value.countyName,
        'isVacationMode': value.isVacationMode,
        'latestCaseAssignmentDateUtc': TimestampToJSON(value.latestCaseAssignmentDateUtc),
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'maxCaseCapacity': value.maxCaseCapacity,
        'numActiveCases': value.numActiveCases,
        'numCourtsCovered': value.numCourtsCovered,
        'regionCode': value.regionCode,
    };
}
