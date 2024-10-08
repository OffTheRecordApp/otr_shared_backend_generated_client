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
export function TimeZoneFromJSON(json) {
    return TimeZoneFromJSONTyped(json, false);
}
export function TimeZoneFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'dstsavings': !exists(json, 'dstsavings') ? undefined : json['dstsavings'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'rawOffset': !exists(json, 'rawOffset') ? undefined : json['rawOffset'],
    };
}
export function TimeZoneToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'displayName': value.displayName,
        'dstsavings': value.dstsavings,
        'id': value.id,
        'rawOffset': value.rawOffset,
    };
}
