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
import { ZoneIdFromJSON, ZoneIdToJSON, } from './';
export function AggregatesFromJSON(json) {
    return AggregatesFromJSONTyped(json, false);
}
export function AggregatesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'matchingRecords': !exists(json, 'matchingRecords') ? undefined : json['matchingRecords'],
        'matchingRevenue': !exists(json, 'matchingRevenue') ? undefined : json['matchingRevenue'],
        'matchingTransactionVolume': !exists(json, 'matchingTransactionVolume') ? undefined : json['matchingTransactionVolume'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'totalRecords': !exists(json, 'totalRecords') ? undefined : json['totalRecords'],
        'totalRevenue': !exists(json, 'totalRevenue') ? undefined : json['totalRevenue'],
        'totalTransactionVolume': !exists(json, 'totalTransactionVolume') ? undefined : json['totalTransactionVolume'],
        'zoneId': !exists(json, 'zoneId') ? undefined : ZoneIdFromJSON(json['zoneId']),
    };
}
export function AggregatesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'endDate': value.endDate,
        'matchingRecords': value.matchingRecords,
        'matchingRevenue': value.matchingRevenue,
        'matchingTransactionVolume': value.matchingTransactionVolume,
        'startDate': value.startDate,
        'totalRecords': value.totalRecords,
        'totalRevenue': value.totalRevenue,
        'totalTransactionVolume': value.totalTransactionVolume,
        'zoneId': ZoneIdToJSON(value.zoneId),
    };
}
