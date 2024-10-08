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
export function ListPhoneCallsCountModelFromJSON(json) {
    return ListPhoneCallsCountModelFromJSONTyped(json, false);
}
export function ListPhoneCallsCountModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'matchingRecords': !exists(json, 'matchingRecords') ? undefined : json['matchingRecords'],
        'totalRecords': !exists(json, 'totalRecords') ? undefined : json['totalRecords'],
    };
}
export function ListPhoneCallsCountModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'matchingRecords': value.matchingRecords,
        'totalRecords': value.totalRecords,
    };
}
