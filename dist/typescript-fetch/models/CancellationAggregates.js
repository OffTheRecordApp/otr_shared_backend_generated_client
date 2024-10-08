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
export function CancellationAggregatesFromJSON(json) {
    return CancellationAggregatesFromJSONTyped(json, false);
}
export function CancellationAggregatesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseCancellationCount': !exists(json, 'caseCancellationCount') ? undefined : json['caseCancellationCount'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'transactionVolume': !exists(json, 'transactionVolume') ? undefined : json['transactionVolume'],
        'zoneId': !exists(json, 'zoneId') ? undefined : ZoneIdFromJSON(json['zoneId']),
    };
}
export function CancellationAggregatesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseCancellationCount': value.caseCancellationCount,
        'endDate': value.endDate,
        'revenue': value.revenue,
        'startDate': value.startDate,
        'transactionVolume': value.transactionVolume,
        'zoneId': ZoneIdToJSON(value.zoneId),
    };
}
