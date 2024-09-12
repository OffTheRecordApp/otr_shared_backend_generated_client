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
import { exists } from '../runtime';
import { CitationModelFromJSON, CitationModelToJSON, } from './';
export function DeleteCitationResponseFromJSON(json) {
    return DeleteCitationResponseFromJSONTyped(json, false);
}
export function DeleteCitationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'citation': !exists(json, 'citation') ? undefined : CitationModelFromJSON(json['citation']),
    };
}
export function DeleteCitationResponseToJSON(value) {
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