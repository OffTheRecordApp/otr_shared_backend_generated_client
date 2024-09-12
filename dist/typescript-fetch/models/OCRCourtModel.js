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
export function OCRCourtModelFromJSON(json) {
    return OCRCourtModelFromJSONTyped(json, false);
}
export function OCRCourtModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'city': !exists(json, 'city') ? undefined : json['city'],
        'countyName': !exists(json, 'countyName') ? undefined : json['countyName'],
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'courtNameAdditional': !exists(json, 'courtNameAdditional') ? undefined : json['courtNameAdditional'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'similarityScore': !exists(json, 'similarityScore') ? undefined : json['similarityScore'],
        'timeZoneName': !exists(json, 'timeZoneName') ? undefined : json['timeZoneName'],
    };
}
export function OCRCourtModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'city': value.city,
        'countyName': value.countyName,
        'courtId': value.courtId,
        'courtName': value.courtName,
        'courtNameAdditional': value.courtNameAdditional,
        'regionCode': value.regionCode,
        'similarityScore': value.similarityScore,
        'timeZoneName': value.timeZoneName,
    };
}