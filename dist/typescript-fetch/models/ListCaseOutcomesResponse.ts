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
    CaseOutcomeModel,
    CaseOutcomeModelFromJSON,
    CaseOutcomeModelFromJSONTyped,
    CaseOutcomeModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListCaseOutcomesResponse
 */
export interface ListCaseOutcomesResponse {
    /**
     * 
     * @type {Array<CaseOutcomeModel>}
     * @memberof ListCaseOutcomesResponse
     */
    outcomes?: Array<CaseOutcomeModel>;
}

export function ListCaseOutcomesResponseFromJSON(json: any): ListCaseOutcomesResponse {
    return ListCaseOutcomesResponseFromJSONTyped(json, false);
}

export function ListCaseOutcomesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCaseOutcomesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'outcomes': !exists(json, 'outcomes') ? undefined : ((json['outcomes'] as Array<any>).map(CaseOutcomeModelFromJSON)),
    };
}

export function ListCaseOutcomesResponseToJSON(value?: ListCaseOutcomesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'outcomes': value.outcomes === undefined ? undefined : ((value.outcomes as Array<any>).map(CaseOutcomeModelToJSON)),
    };
}

