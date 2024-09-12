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
import { DashboardCaseModelFromJSON, DashboardCaseModelToJSON, } from './';
export function ListDashboardCasesResponseFromJSON(json) {
    return ListDashboardCasesResponseFromJSONTyped(json, false);
}
export function ListDashboardCasesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cases': !exists(json, 'cases') ? undefined : (json['cases'].map(DashboardCaseModelFromJSON)),
        'previousPageToken': !exists(json, 'previousPageToken') ? undefined : json['previousPageToken'],
    };
}
export function ListDashboardCasesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cases': value.cases === undefined ? undefined : (value.cases.map(DashboardCaseModelToJSON)),
        'previousPageToken': value.previousPageToken,
    };
}