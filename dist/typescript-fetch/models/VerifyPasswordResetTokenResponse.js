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
export function VerifyPasswordResetTokenResponseFromJSON(json) {
    return VerifyPasswordResetTokenResponseFromJSONTyped(json, false);
}
export function VerifyPasswordResetTokenResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isTokenValid': !exists(json, 'isTokenValid') ? undefined : json['isTokenValid'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function VerifyPasswordResetTokenResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'isTokenValid': value.isTokenValid,
        'userId': value.userId,
    };
}
