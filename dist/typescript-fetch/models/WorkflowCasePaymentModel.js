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
import { CasePaymentBreakdownItemModelFromJSON, CasePaymentBreakdownItemModelToJSON, } from './';
export function WorkflowCasePaymentModelFromJSON(json) {
    return WorkflowCasePaymentModelFromJSONTyped(json, false);
}
export function WorkflowCasePaymentModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dueDate': !exists(json, 'dueDate') ? undefined : (new Date(json['dueDate'])),
        'dueNow': !exists(json, 'dueNow') ? undefined : json['dueNow'],
        'feeAmount': !exists(json, 'feeAmount') ? undefined : json['feeAmount'],
        'items': !exists(json, 'items') ? undefined : (json['items'].map(CasePaymentBreakdownItemModelFromJSON)),
    };
}
export function WorkflowCasePaymentModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dueDate': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'dueNow': value.dueNow,
        'feeAmount': value.feeAmount,
        'items': value.items === undefined ? undefined : (value.items.map(CasePaymentBreakdownItemModelToJSON)),
    };
}
