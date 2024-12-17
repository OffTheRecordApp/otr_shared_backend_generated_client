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
    CaseActionDomain,
    CaseActionDomainFromJSON,
    CaseActionDomainFromJSONTyped,
    CaseActionDomainToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetCaseActionResponse
 */
export interface GetCaseActionResponse {
    /**
     * 
     * @type {Array<CaseActionDomain>}
     * @memberof GetCaseActionResponse
     */
    actions?: Array<CaseActionDomain>;
}

export function GetCaseActionResponseFromJSON(json: any): GetCaseActionResponse {
    return GetCaseActionResponseFromJSONTyped(json, false);
}

export function GetCaseActionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCaseActionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': !exists(json, 'actions') ? undefined : ((json['actions'] as Array<any>).map(CaseActionDomainFromJSON)),
    };
}

export function GetCaseActionResponseToJSON(value?: GetCaseActionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions === undefined ? undefined : ((value.actions as Array<any>).map(CaseActionDomainToJSON)),
    };
}

