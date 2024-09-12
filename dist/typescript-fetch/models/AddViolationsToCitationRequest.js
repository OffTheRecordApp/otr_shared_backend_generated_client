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
export function AddViolationsToCitationRequestFromJSON(json) {
    return AddViolationsToCitationRequestFromJSONTyped(json, false);
}
export function AddViolationsToCitationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'violationTypes': !exists(json, 'violationTypes') ? undefined : json['violationTypes'],
    };
}
export function AddViolationsToCitationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'violationTypes': value.violationTypes,
    };
}