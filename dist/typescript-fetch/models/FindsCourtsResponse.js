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
import { GetCourtsInnerResponseFromJSON, GetCourtsInnerResponseToJSON, } from './';
export function FindsCourtsResponseFromJSON(json) {
    return FindsCourtsResponseFromJSONTyped(json, false);
}
export function FindsCourtsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'courts': !exists(json, 'courts') ? undefined : (json['courts'].map(GetCourtsInnerResponseFromJSON)),
        'numRecords': !exists(json, 'numRecords') ? undefined : json['numRecords'],
    };
}
export function FindsCourtsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'courts': value.courts === undefined ? undefined : (value.courts.map(GetCourtsInnerResponseToJSON)),
        'numRecords': value.numRecords,
    };
}
