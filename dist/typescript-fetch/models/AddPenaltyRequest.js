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
import { PenaltyRequestFromJSON, PenaltyRequestToJSON, } from './';
export function AddPenaltyRequestFromJSON(json) {
    return AddPenaltyRequestFromJSONTyped(json, false);
}
export function AddPenaltyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'penaltiesToAdd': !exists(json, 'penaltiesToAdd') ? undefined : (json['penaltiesToAdd'].map(PenaltyRequestFromJSON)),
    };
}
export function AddPenaltyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'penaltiesToAdd': value.penaltiesToAdd === undefined ? undefined : (value.penaltiesToAdd.map(PenaltyRequestToJSON)),
    };
}
