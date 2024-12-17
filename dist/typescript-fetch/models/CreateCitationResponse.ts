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
    CitationModel,
    CitationModelFromJSON,
    CitationModelFromJSONTyped,
    CitationModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface CreateCitationResponse
 */
export interface CreateCitationResponse {
    /**
     * 
     * @type {CitationModel}
     * @memberof CreateCitationResponse
     */
    citation?: CitationModel;
}

export function CreateCitationResponseFromJSON(json: any): CreateCitationResponse {
    return CreateCitationResponseFromJSONTyped(json, false);
}

export function CreateCitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCitationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'citation': !exists(json, 'citation') ? undefined : CitationModelFromJSON(json['citation']),
    };
}

export function CreateCitationResponseToJSON(value?: CreateCitationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'citation': CitationModelToJSON(value.citation),
    };
}

