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
    CitationWithMissingFields,
    CitationWithMissingFieldsFromJSON,
    CitationWithMissingFieldsFromJSONTyped,
    CitationWithMissingFieldsToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetCitationsWithMissingFieldsResponse
 */
export interface GetCitationsWithMissingFieldsResponse {
    /**
     * 
     * @type {Array<CitationWithMissingFields>}
     * @memberof GetCitationsWithMissingFieldsResponse
     */
    citations?: Array<CitationWithMissingFields>;
    /**
     * 
     * @type {number}
     * @memberof GetCitationsWithMissingFieldsResponse
     */
    missingClientNameCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCitationsWithMissingFieldsResponse
     */
    missingCourtCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCitationsWithMissingFieldsResponse
     */
    missingFieldsCount?: number;
}

export function GetCitationsWithMissingFieldsResponseFromJSON(json: any): GetCitationsWithMissingFieldsResponse {
    return GetCitationsWithMissingFieldsResponseFromJSONTyped(json, false);
}

export function GetCitationsWithMissingFieldsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCitationsWithMissingFieldsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'citations': !exists(json, 'citations') ? undefined : ((json['citations'] as Array<any>).map(CitationWithMissingFieldsFromJSON)),
        'missingClientNameCount': !exists(json, 'missingClientNameCount') ? undefined : json['missingClientNameCount'],
        'missingCourtCount': !exists(json, 'missingCourtCount') ? undefined : json['missingCourtCount'],
        'missingFieldsCount': !exists(json, 'missingFieldsCount') ? undefined : json['missingFieldsCount'],
    };
}

export function GetCitationsWithMissingFieldsResponseToJSON(value?: GetCitationsWithMissingFieldsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'citations': value.citations === undefined ? undefined : ((value.citations as Array<any>).map(CitationWithMissingFieldsToJSON)),
        'missingClientNameCount': value.missingClientNameCount,
        'missingCourtCount': value.missingCourtCount,
        'missingFieldsCount': value.missingFieldsCount,
    };
}


