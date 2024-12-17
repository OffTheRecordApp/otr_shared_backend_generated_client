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
    WorkflowCaseModel,
    WorkflowCaseModelFromJSON,
    WorkflowCaseModelFromJSONTyped,
    WorkflowCaseModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetWorkflowStateResponse
 */
export interface GetWorkflowStateResponse {
    /**
     * 
     * @type {number}
     * @memberof GetWorkflowStateResponse
     */
    projectedInsuranceCostInCents?: number;
    /**
     * 
     * @type {WorkflowCaseModel}
     * @memberof GetWorkflowStateResponse
     */
    theCase?: WorkflowCaseModel;
}

export function GetWorkflowStateResponseFromJSON(json: any): GetWorkflowStateResponse {
    return GetWorkflowStateResponseFromJSONTyped(json, false);
}

export function GetWorkflowStateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetWorkflowStateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectedInsuranceCostInCents': !exists(json, 'projectedInsuranceCostInCents') ? undefined : json['projectedInsuranceCostInCents'],
        'theCase': !exists(json, 'theCase') ? undefined : WorkflowCaseModelFromJSON(json['theCase']),
    };
}

export function GetWorkflowStateResponseToJSON(value?: GetWorkflowStateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'projectedInsuranceCostInCents': value.projectedInsuranceCostInCents,
        'theCase': WorkflowCaseModelToJSON(value.theCase),
    };
}

