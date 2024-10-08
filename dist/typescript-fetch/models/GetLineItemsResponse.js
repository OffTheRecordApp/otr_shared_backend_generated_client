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
import { CaseLineItemDomainResFromJSON, CaseLineItemDomainResToJSON, CaseLineItemsSummaryFromJSON, CaseLineItemsSummaryToJSON, } from './';
export function GetLineItemsResponseFromJSON(json) {
    return GetLineItemsResponseFromJSONTyped(json, false);
}
export function GetLineItemsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lineItems': !exists(json, 'lineItems') ? undefined : (json['lineItems'].map(CaseLineItemDomainResFromJSON)),
        'lineItemsSummary': !exists(json, 'lineItemsSummary') ? undefined : CaseLineItemsSummaryFromJSON(json['lineItemsSummary']),
    };
}
export function GetLineItemsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lineItems': value.lineItems === undefined ? undefined : (value.lineItems.map(CaseLineItemDomainResToJSON)),
        'lineItemsSummary': CaseLineItemsSummaryToJSON(value.lineItemsSummary),
    };
}
