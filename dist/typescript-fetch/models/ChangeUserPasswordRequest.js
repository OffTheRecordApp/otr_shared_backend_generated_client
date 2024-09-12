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
export function ChangeUserPasswordRequestFromJSON(json) {
    return ChangeUserPasswordRequestFromJSONTyped(json, false);
}
export function ChangeUserPasswordRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'plainTextPasswordNew': !exists(json, 'plainTextPasswordNew') ? undefined : json['plainTextPasswordNew'],
        'plainTextPasswordOld': !exists(json, 'plainTextPasswordOld') ? undefined : json['plainTextPasswordOld'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function ChangeUserPasswordRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'plainTextPasswordNew': value.plainTextPasswordNew,
        'plainTextPasswordOld': value.plainTextPasswordOld,
        'userId': value.userId,
    };
}