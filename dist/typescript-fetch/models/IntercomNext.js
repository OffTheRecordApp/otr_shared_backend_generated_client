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
export function IntercomNextFromJSON(json) {
    return IntercomNextFromJSONTyped(json, false);
}
export function IntercomNextFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'page': !exists(json, 'page') ? undefined : json['page'],
        'startingAfter': !exists(json, 'starting_after') ? undefined : json['starting_after'],
    };
}
export function IntercomNextToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'page': value.page,
        'starting_after': value.startingAfter,
    };
}