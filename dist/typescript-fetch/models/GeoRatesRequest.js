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
import { ViolationInputRequestFromJSON, ViolationInputRequestToJSON, } from './';
export function GeoRatesRequestFromJSON(json) {
    return GeoRatesRequestFromJSONTyped(json, false);
}
export function GeoRatesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'courtDate': !exists(json, 'courtDate') ? undefined : (new Date(json['courtDate'])),
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'isCDL': !exists(json, 'isCDL') ? undefined : json['isCDL'],
        'isFTA': !exists(json, 'isFTA') ? undefined : json['isFTA'],
        'legalServiceId': !exists(json, 'legalServiceId') ? undefined : json['legalServiceId'],
        'violationCount': !exists(json, 'violationCount') ? undefined : json['violationCount'],
        'violations': !exists(json, 'violations') ? undefined : (json['violations'].map(ViolationInputRequestFromJSON)),
    };
}
export function GeoRatesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'courtDate': value.courtDate === undefined ? undefined : (value.courtDate.toISOString()),
        'courtId': value.courtId,
        'isCDL': value.isCDL,
        'isFTA': value.isFTA,
        'legalServiceId': value.legalServiceId,
        'violationCount': value.violationCount,
        'violations': value.violations === undefined ? undefined : (value.violations.map(ViolationInputRequestToJSON)),
    };
}
