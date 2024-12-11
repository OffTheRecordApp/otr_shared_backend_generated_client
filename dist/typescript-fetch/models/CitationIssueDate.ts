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
/**
 * 
 * @export
 * @interface CitationIssueDate
 */
export interface CitationIssueDate {
    /**
     * 
     * @type {string}
     * @memberof CitationIssueDate
     */
    llmPrediction?: string;
}

export function CitationIssueDateFromJSON(json: any): CitationIssueDate {
    return CitationIssueDateFromJSONTyped(json, false);
}

export function CitationIssueDateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CitationIssueDate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'llmPrediction': !exists(json, 'llm_prediction') ? undefined : json['llm_prediction'],
    };
}

export function CitationIssueDateToJSON(value?: CitationIssueDate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'llm_prediction': value.llmPrediction,
    };
}


