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
    CaseModel,
    CaseModelFromJSON,
    CaseModelFromJSONTyped,
    CaseModelToJSON,
    CitationModel,
    CitationModelFromJSON,
    CitationModelFromJSONTyped,
    CitationModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetUserCasesResponse
 */
export interface GetUserCasesResponse {
    /**
     * 
     * @type {Array<CaseModel>}
     * @memberof GetUserCasesResponse
     */
    cases?: Array<CaseModel>;
    /**
     * 
     * @type {Array<CitationModel>}
     * @memberof GetUserCasesResponse
     */
    citations?: Array<CitationModel>;
    /**
     * 
     * @type {number}
     * @memberof GetUserCasesResponse
     */
    numBookings?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUserCasesResponse
     */
    numCitationUploads?: number;
}

export function GetUserCasesResponseFromJSON(json: any): GetUserCasesResponse {
    return GetUserCasesResponseFromJSONTyped(json, false);
}

export function GetUserCasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserCasesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cases': !exists(json, 'cases') ? undefined : ((json['cases'] as Array<any>).map(CaseModelFromJSON)),
        'citations': !exists(json, 'citations') ? undefined : ((json['citations'] as Array<any>).map(CitationModelFromJSON)),
        'numBookings': !exists(json, 'numBookings') ? undefined : json['numBookings'],
        'numCitationUploads': !exists(json, 'numCitationUploads') ? undefined : json['numCitationUploads'],
    };
}

export function GetUserCasesResponseToJSON(value?: GetUserCasesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cases': value.cases === undefined ? undefined : ((value.cases as Array<any>).map(CaseModelToJSON)),
        'citations': value.citations === undefined ? undefined : ((value.citations as Array<any>).map(CitationModelToJSON)),
        'numBookings': value.numBookings,
        'numCitationUploads': value.numCitationUploads,
    };
}


