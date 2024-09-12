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
import { GetLawfirmFeeCoverageModelFromJSON, GetLawfirmFeeCoverageModelToJSON, } from './';
export function GetLawfirmFeeCoverageResponseFromJSON(json) {
    return GetLawfirmFeeCoverageResponseFromJSONTyped(json, false);
}
export function GetLawfirmFeeCoverageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'coverage': !exists(json, 'coverage') ? undefined : (json['coverage'].map(GetLawfirmFeeCoverageModelFromJSON)),
    };
}
export function GetLawfirmFeeCoverageResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'coverage': value.coverage === undefined ? undefined : (value.coverage.map(GetLawfirmFeeCoverageModelToJSON)),
    };
}