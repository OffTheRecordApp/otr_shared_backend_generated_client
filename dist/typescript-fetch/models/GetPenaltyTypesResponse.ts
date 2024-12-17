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
    GetPenaltyType,
    GetPenaltyTypeFromJSON,
    GetPenaltyTypeFromJSONTyped,
    GetPenaltyTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetPenaltyTypesResponse
 */
export interface GetPenaltyTypesResponse {
    /**
     * 
     * @type {Array<GetPenaltyType>}
     * @memberof GetPenaltyTypesResponse
     */
    penaltyTypes?: Array<GetPenaltyType>;
}

export function GetPenaltyTypesResponseFromJSON(json: any): GetPenaltyTypesResponse {
    return GetPenaltyTypesResponseFromJSONTyped(json, false);
}

export function GetPenaltyTypesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPenaltyTypesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'penaltyTypes': !exists(json, 'penaltyTypes') ? undefined : ((json['penaltyTypes'] as Array<any>).map(GetPenaltyTypeFromJSON)),
    };
}

export function GetPenaltyTypesResponseToJSON(value?: GetPenaltyTypesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'penaltyTypes': value.penaltyTypes === undefined ? undefined : ((value.penaltyTypes as Array<any>).map(GetPenaltyTypeToJSON)),
    };
}

