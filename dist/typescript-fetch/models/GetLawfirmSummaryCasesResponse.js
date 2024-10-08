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
import { CaseSummaryDomainFromJSON, CaseSummaryDomainToJSON, } from './';
export function GetLawfirmSummaryCasesResponseFromJSON(json) {
    return GetLawfirmSummaryCasesResponseFromJSONTyped(json, false);
}
export function GetLawfirmSummaryCasesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activeCasesCount': !exists(json, 'activeCasesCount') ? undefined : json['activeCasesCount'],
        'bookedCasesCount': !exists(json, 'bookedCasesCount') ? undefined : json['bookedCasesCount'],
        'cases': !exists(json, 'cases') ? undefined : (json['cases'].map(CaseSummaryDomainFromJSON)),
        'numMatchingCases': !exists(json, 'numMatchingCases') ? undefined : json['numMatchingCases'],
        'pastDueCasesCount': !exists(json, 'pastDueCasesCount') ? undefined : json['pastDueCasesCount'],
        'paymentPlanCasesCount': !exists(json, 'paymentPlanCasesCount') ? undefined : json['paymentPlanCasesCount'],
        'pendingCasesCount': !exists(json, 'pendingCasesCount') ? undefined : json['pendingCasesCount'],
        'percentCasesWithPaymentPlan': !exists(json, 'percentCasesWithPaymentPlan') ? undefined : json['percentCasesWithPaymentPlan'],
    };
}
export function GetLawfirmSummaryCasesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activeCasesCount': value.activeCasesCount,
        'bookedCasesCount': value.bookedCasesCount,
        'cases': value.cases === undefined ? undefined : (value.cases.map(CaseSummaryDomainToJSON)),
        'numMatchingCases': value.numMatchingCases,
        'pastDueCasesCount': value.pastDueCasesCount,
        'paymentPlanCasesCount': value.paymentPlanCasesCount,
        'pendingCasesCount': value.pendingCasesCount,
        'percentCasesWithPaymentPlan': value.percentCasesWithPaymentPlan,
    };
}
