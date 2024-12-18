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
    CaseWithCoverageObtained,
    CaseWithCoverageObtainedFromJSON,
    CaseWithCoverageObtainedFromJSONTyped,
    CaseWithCoverageObtainedToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetCasesWithCoverageObtainedResponse
 */
export interface GetCasesWithCoverageObtainedResponse {
    /**
     * 
     * @type {Array<CaseWithCoverageObtained>}
     * @memberof GetCasesWithCoverageObtainedResponse
     */
    cases?: Array<CaseWithCoverageObtained>;
}

export function GetCasesWithCoverageObtainedResponseFromJSON(json: any): GetCasesWithCoverageObtainedResponse {
    return GetCasesWithCoverageObtainedResponseFromJSONTyped(json, false);
}

export function GetCasesWithCoverageObtainedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCasesWithCoverageObtainedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cases': !exists(json, 'cases') ? undefined : ((json['cases'] as Array<any>).map(CaseWithCoverageObtainedFromJSON)),
    };
}

export function GetCasesWithCoverageObtainedResponseToJSON(value?: GetCasesWithCoverageObtainedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cases': value.cases === undefined ? undefined : ((value.cases as Array<any>).map(CaseWithCoverageObtainedToJSON)),
    };
}


