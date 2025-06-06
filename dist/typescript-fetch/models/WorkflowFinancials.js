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
import { WorkflowCasePaymentModelFromJSON, WorkflowCasePaymentModelToJSON, WorkflowLineItemModelFromJSON, WorkflowLineItemModelToJSON, } from './';
export function WorkflowFinancialsFromJSON(json) {
    return WorkflowFinancialsFromJSONTyped(json, false);
}
export function WorkflowFinancialsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lineItems': !exists(json, 'lineItems') ? undefined : (json['lineItems'].map(WorkflowLineItemModelFromJSON)),
        'payments': !exists(json, 'payments') ? undefined : (json['payments'].map(WorkflowCasePaymentModelFromJSON)),
        'totalClientBaseCostInCents': !exists(json, 'totalClientBaseCostInCents') ? undefined : json['totalClientBaseCostInCents'],
        'totalClientCostInCents': !exists(json, 'totalClientCostInCents') ? undefined : json['totalClientCostInCents'],
        'totalRefCodeAdjustmentInCents': !exists(json, 'totalRefCodeAdjustmentInCents') ? undefined : json['totalRefCodeAdjustmentInCents'],
    };
}
export function WorkflowFinancialsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lineItems': value.lineItems === undefined ? undefined : (value.lineItems.map(WorkflowLineItemModelToJSON)),
        'payments': value.payments === undefined ? undefined : (value.payments.map(WorkflowCasePaymentModelToJSON)),
        'totalClientBaseCostInCents': value.totalClientBaseCostInCents,
        'totalClientCostInCents': value.totalClientCostInCents,
        'totalRefCodeAdjustmentInCents': value.totalRefCodeAdjustmentInCents,
    };
}
