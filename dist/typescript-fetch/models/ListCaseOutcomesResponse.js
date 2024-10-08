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
import { CaseOutcomeModelFromJSON, CaseOutcomeModelToJSON, } from './';
export function ListCaseOutcomesResponseFromJSON(json) {
    return ListCaseOutcomesResponseFromJSONTyped(json, false);
}
export function ListCaseOutcomesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'outcomes': !exists(json, 'outcomes') ? undefined : (json['outcomes'].map(CaseOutcomeModelFromJSON)),
    };
}
export function ListCaseOutcomesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'outcomes': value.outcomes === undefined ? undefined : (value.outcomes.map(CaseOutcomeModelToJSON)),
    };
}
