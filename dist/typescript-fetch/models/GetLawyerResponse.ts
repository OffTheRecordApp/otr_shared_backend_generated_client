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
    LawyerModel,
    LawyerModelFromJSON,
    LawyerModelFromJSONTyped,
    LawyerModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetLawyerResponse
 */
export interface GetLawyerResponse {
    /**
     * 
     * @type {LawyerModel}
     * @memberof GetLawyerResponse
     */
    lawyer?: LawyerModel;
}

export function GetLawyerResponseFromJSON(json: any): GetLawyerResponse {
    return GetLawyerResponseFromJSONTyped(json, false);
}

export function GetLawyerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawyerResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lawyer': !exists(json, 'lawyer') ? undefined : LawyerModelFromJSON(json['lawyer']),
    };
}

export function GetLawyerResponseToJSON(value?: GetLawyerResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lawyer': LawyerModelToJSON(value.lawyer),
    };
}

