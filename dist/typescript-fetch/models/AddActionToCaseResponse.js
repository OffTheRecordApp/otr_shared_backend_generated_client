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
import { CaseModelFromJSON, CaseModelToJSON, } from './';
export function AddActionToCaseResponseFromJSON(json) {
    return AddActionToCaseResponseFromJSONTyped(json, false);
}
export function AddActionToCaseResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'theCase': !exists(json, 'theCase') ? undefined : CaseModelFromJSON(json['theCase']),
    };
}
export function AddActionToCaseResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'theCase': CaseModelToJSON(value.theCase),
    };
}