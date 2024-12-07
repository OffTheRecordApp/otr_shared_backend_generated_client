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
    GetLawfirmFeeCoverageModel,
    GetLawfirmFeeCoverageModelFromJSON,
    GetLawfirmFeeCoverageModelFromJSONTyped,
    GetLawfirmFeeCoverageModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetLawfirmFeeCoverageResponse
 */
export interface GetLawfirmFeeCoverageResponse {
    /**
     * 
     * @type {Array<GetLawfirmFeeCoverageModel>}
     * @memberof GetLawfirmFeeCoverageResponse
     */
    coverage?: Array<GetLawfirmFeeCoverageModel>;
}

export function GetLawfirmFeeCoverageResponseFromJSON(json: any): GetLawfirmFeeCoverageResponse {
    return GetLawfirmFeeCoverageResponseFromJSONTyped(json, false);
}

export function GetLawfirmFeeCoverageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmFeeCoverageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coverage': !exists(json, 'coverage') ? undefined : ((json['coverage'] as Array<any>).map(GetLawfirmFeeCoverageModelFromJSON)),
    };
}

export function GetLawfirmFeeCoverageResponseToJSON(value?: GetLawfirmFeeCoverageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coverage': value.coverage === undefined ? undefined : ((value.coverage as Array<any>).map(GetLawfirmFeeCoverageModelToJSON)),
    };
}


