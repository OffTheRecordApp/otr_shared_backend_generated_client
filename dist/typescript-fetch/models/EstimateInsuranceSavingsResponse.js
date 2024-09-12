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
export function EstimateInsuranceSavingsResponseFromJSON(json) {
    return EstimateInsuranceSavingsResponseFromJSONTyped(json, false);
}
export function EstimateInsuranceSavingsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'monthlyExtraInsuranceCostInCents': !exists(json, 'monthlyExtraInsuranceCostInCents') ? undefined : json['monthlyExtraInsuranceCostInCents'],
        'totalCostOfTicketInCents': !exists(json, 'totalCostOfTicketInCents') ? undefined : json['totalCostOfTicketInCents'],
        'totalExtraInsuranceCostInCents': !exists(json, 'totalExtraInsuranceCostInCents') ? undefined : json['totalExtraInsuranceCostInCents'],
    };
}
export function EstimateInsuranceSavingsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'monthlyExtraInsuranceCostInCents': value.monthlyExtraInsuranceCostInCents,
        'totalCostOfTicketInCents': value.totalCostOfTicketInCents,
        'totalExtraInsuranceCostInCents': value.totalExtraInsuranceCostInCents,
    };
}