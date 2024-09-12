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
import { WorkflowCaseModelFromJSON, WorkflowCaseModelToJSON, } from './';
export function GetWorkflowStateResponseFromJSON(json) {
    return GetWorkflowStateResponseFromJSONTyped(json, false);
}
export function GetWorkflowStateResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'projectedInsuranceCostInCents': !exists(json, 'projectedInsuranceCostInCents') ? undefined : json['projectedInsuranceCostInCents'],
        'theCase': !exists(json, 'theCase') ? undefined : WorkflowCaseModelFromJSON(json['theCase']),
    };
}
export function GetWorkflowStateResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'projectedInsuranceCostInCents': value.projectedInsuranceCostInCents,
        'theCase': WorkflowCaseModelToJSON(value.theCase),
    };
}