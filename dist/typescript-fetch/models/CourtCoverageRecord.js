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
export function CourtCoverageRecordFromJSON(json) {
    return CourtCoverageRecordFromJSONTyped(json, false);
}
export function CourtCoverageRecordFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'countyId': !exists(json, 'countyId') ? undefined : json['countyId'],
        'countyName': !exists(json, 'countyName') ? undefined : json['countyName'],
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'isVacationMode': !exists(json, 'isVacationMode') ? undefined : json['isVacationMode'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'lawfirmPriority': !exists(json, 'lawfirmPriority') ? undefined : json['lawfirmPriority'],
        'lawyerFee': !exists(json, 'lawyerFee') ? undefined : json['lawyerFee'],
        'otrTargetFee': !exists(json, 'otrTargetFee') ? undefined : json['otrTargetFee'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'unserviceableRequests': !exists(json, 'unserviceableRequests') ? undefined : json['unserviceableRequests'],
    };
}
export function CourtCoverageRecordToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'countyId': value.countyId,
        'countyName': value.countyName,
        'courtId': value.courtId,
        'courtName': value.courtName,
        'isVacationMode': value.isVacationMode,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'lawfirmPriority': value.lawfirmPriority,
        'lawyerFee': value.lawyerFee,
        'otrTargetFee': value.otrTargetFee,
        'regionCode': value.regionCode,
        'unserviceableRequests': value.unserviceableRequests,
    };
}
