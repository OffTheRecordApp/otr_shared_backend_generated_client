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
export function SetFlagOnMessageModelFromJSON(json) {
    return SetFlagOnMessageModelFromJSONTyped(json, false);
}
export function SetFlagOnMessageModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
    };
}
export function SetFlagOnMessageModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'messageId': value.messageId,
    };
}
