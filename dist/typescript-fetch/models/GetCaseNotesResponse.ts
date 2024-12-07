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
    CaseNotesDomain,
    CaseNotesDomainFromJSON,
    CaseNotesDomainFromJSONTyped,
    CaseNotesDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetCaseNotesResponse
 */
export interface GetCaseNotesResponse {
    /**
     * 
     * @type {CaseNotesDomain}
     * @memberof GetCaseNotesResponse
     */
    caseNotes?: CaseNotesDomain;
}

export function GetCaseNotesResponseFromJSON(json: any): GetCaseNotesResponse {
    return GetCaseNotesResponseFromJSONTyped(json, false);
}

export function GetCaseNotesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCaseNotesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseNotes': !exists(json, 'caseNotes') ? undefined : CaseNotesDomainFromJSON(json['caseNotes']),
    };
}

export function GetCaseNotesResponseToJSON(value?: GetCaseNotesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseNotes': CaseNotesDomainToJSON(value.caseNotes),
    };
}


