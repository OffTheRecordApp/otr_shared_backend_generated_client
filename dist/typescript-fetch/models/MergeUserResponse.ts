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
    MergeStatusReport,
    MergeStatusReportFromJSON,
    MergeStatusReportFromJSONTyped,
    MergeStatusReportToJSON,
} from './';

/**
 * 
 * @export
 * @interface MergeUserResponse
 */
export interface MergeUserResponse {
    /**
     * 
     * @type {MergeStatusReport}
     * @memberof MergeUserResponse
     */
    report?: MergeStatusReport;
}

export function MergeUserResponseFromJSON(json: any): MergeUserResponse {
    return MergeUserResponseFromJSONTyped(json, false);
}

export function MergeUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MergeUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'report': !exists(json, 'report') ? undefined : MergeStatusReportFromJSON(json['report']),
    };
}

export function MergeUserResponseToJSON(value?: MergeUserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'report': MergeStatusReportToJSON(value.report),
    };
}

