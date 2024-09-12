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
import { CitationInputRequestFromJSON, CitationInputRequestToJSON, } from './';
export function UpdateCitationRequestFromJSON(json) {
    return UpdateCitationRequestFromJSONTyped(json, false);
}
export function UpdateCitationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'citation': !exists(json, 'citation') ? undefined : CitationInputRequestFromJSON(json['citation']),
    };
}
export function UpdateCitationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'citation': CitationInputRequestToJSON(value.citation),
    };
}