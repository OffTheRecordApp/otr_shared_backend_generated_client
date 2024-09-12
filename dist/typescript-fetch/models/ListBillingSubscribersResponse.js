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
import { BillingSubscriberAggregateModelFromJSON, BillingSubscriberAggregateModelToJSON, BillingSubscriberModelFromJSON, BillingSubscriberModelToJSON, } from './';
export function ListBillingSubscribersResponseFromJSON(json) {
    return ListBillingSubscribersResponseFromJSONTyped(json, false);
}
export function ListBillingSubscribersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'matchingAggregates': !exists(json, 'matchingAggregates') ? undefined : BillingSubscriberAggregateModelFromJSON(json['matchingAggregates']),
        'subscribers': !exists(json, 'subscribers') ? undefined : (json['subscribers'].map(BillingSubscriberModelFromJSON)),
        'totalAggregates': !exists(json, 'totalAggregates') ? undefined : BillingSubscriberAggregateModelFromJSON(json['totalAggregates']),
    };
}
export function ListBillingSubscribersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'matchingAggregates': BillingSubscriberAggregateModelToJSON(value.matchingAggregates),
        'subscribers': value.subscribers === undefined ? undefined : (value.subscribers.map(BillingSubscriberModelToJSON)),
        'totalAggregates': BillingSubscriberAggregateModelToJSON(value.totalAggregates),
    };
}