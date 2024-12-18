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
    Aggregates,
    AggregatesFromJSON,
    AggregatesFromJSONTyped,
    AggregatesToJSON,
    Lawfirm,
    LawfirmFromJSON,
    LawfirmFromJSONTyped,
    LawfirmToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListLawfirmsEngagedResponse
 */
export interface ListLawfirmsEngagedResponse {
    /**
     * 
     * @type {Aggregates}
     * @memberof ListLawfirmsEngagedResponse
     */
    aggregates?: Aggregates;
    /**
     * 
     * @type {Array<Lawfirm>}
     * @memberof ListLawfirmsEngagedResponse
     */
    lawfirms?: Array<Lawfirm>;
}

export function ListLawfirmsEngagedResponseFromJSON(json: any): ListLawfirmsEngagedResponse {
    return ListLawfirmsEngagedResponseFromJSONTyped(json, false);
}

export function ListLawfirmsEngagedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListLawfirmsEngagedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregates': !exists(json, 'aggregates') ? undefined : AggregatesFromJSON(json['aggregates']),
        'lawfirms': !exists(json, 'lawfirms') ? undefined : ((json['lawfirms'] as Array<any>).map(LawfirmFromJSON)),
    };
}

export function ListLawfirmsEngagedResponseToJSON(value?: ListLawfirmsEngagedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aggregates': AggregatesToJSON(value.aggregates),
        'lawfirms': value.lawfirms === undefined ? undefined : ((value.lawfirms as Array<any>).map(LawfirmToJSON)),
    };
}


