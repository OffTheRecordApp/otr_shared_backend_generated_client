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
import { NoteModelFromJSON, NoteModelToJSON, } from './';
export function SearchNotesResponseFromJSON(json) {
    return SearchNotesResponseFromJSONTyped(json, false);
}
export function SearchNotesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'notes': !exists(json, 'notes') ? undefined : (json['notes'].map(NoteModelFromJSON)),
    };
}
export function SearchNotesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'notes': value.notes === undefined ? undefined : (value.notes.map(NoteModelToJSON)),
    };
}
