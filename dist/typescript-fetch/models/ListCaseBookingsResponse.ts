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

import { exists, mapValues } from '../runtime';
import {
    AggregateQueryResults,
    AggregateQueryResultsFromJSON,
    AggregateQueryResultsFromJSONTyped,
    AggregateQueryResultsToJSON,
    Aggregates,
    AggregatesFromJSON,
    AggregatesFromJSONTyped,
    AggregatesToJSON,
    Case,
    CaseFromJSON,
    CaseFromJSONTyped,
    CaseToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListCaseBookingsResponse
 */
export interface ListCaseBookingsResponse {
    /**
     * 
     * @type {Aggregates}
     * @memberof ListCaseBookingsResponse
     */
    aggregates?: Aggregates;
    /**
     * 
     * @type {{ [key: string]: AggregateQueryResults; }}
     * @memberof ListCaseBookingsResponse
     */
    aggregatesByGender?: { [key: string]: AggregateQueryResults; };
    /**
     * 
     * @type {{ [key: string]: AggregateQueryResults; }}
     * @memberof ListCaseBookingsResponse
     */
    aggregatesByRace?: { [key: string]: AggregateQueryResults; };
    /**
     * 
     * @type {{ [key: string]: AggregateQueryResults; }}
     * @memberof ListCaseBookingsResponse
     */
    aggregatesByState?: { [key: string]: AggregateQueryResults; };
    /**
     * 
     * @type {Array<Case>}
     * @memberof ListCaseBookingsResponse
     */
    cases?: Array<Case>;
}

export function ListCaseBookingsResponseFromJSON(json: any): ListCaseBookingsResponse {
    return ListCaseBookingsResponseFromJSONTyped(json, false);
}

export function ListCaseBookingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCaseBookingsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregates': !exists(json, 'aggregates') ? undefined : AggregatesFromJSON(json['aggregates']),
        'aggregatesByGender': !exists(json, 'aggregatesByGender') ? undefined : (mapValues(json['aggregatesByGender'], AggregateQueryResultsFromJSON)),
        'aggregatesByRace': !exists(json, 'aggregatesByRace') ? undefined : (mapValues(json['aggregatesByRace'], AggregateQueryResultsFromJSON)),
        'aggregatesByState': !exists(json, 'aggregatesByState') ? undefined : (mapValues(json['aggregatesByState'], AggregateQueryResultsFromJSON)),
        'cases': !exists(json, 'cases') ? undefined : ((json['cases'] as Array<any>).map(CaseFromJSON)),
    };
}

export function ListCaseBookingsResponseToJSON(value?: ListCaseBookingsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aggregates': AggregatesToJSON(value.aggregates),
        'aggregatesByGender': value.aggregatesByGender === undefined ? undefined : (mapValues(value.aggregatesByGender, AggregateQueryResultsToJSON)),
        'aggregatesByRace': value.aggregatesByRace === undefined ? undefined : (mapValues(value.aggregatesByRace, AggregateQueryResultsToJSON)),
        'aggregatesByState': value.aggregatesByState === undefined ? undefined : (mapValues(value.aggregatesByState, AggregateQueryResultsToJSON)),
        'cases': value.cases === undefined ? undefined : ((value.cases as Array<any>).map(CaseToJSON)),
    };
}


