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
export function AppleLoginRequestFromJSON(json) {
    return AppleLoginRequestFromJSONTyped(json, false);
}
export function AppleLoginRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authCode': !exists(json, 'authCode') ? undefined : json['authCode'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'familyName': !exists(json, 'familyName') ? undefined : json['familyName'],
        'fingerPrintId': !exists(json, 'fingerPrintId') ? undefined : json['fingerPrintId'],
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'identityToken': !exists(json, 'identityToken') ? undefined : json['identityToken'],
    };
}
export function AppleLoginRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authCode': value.authCode,
        'citationId': value.citationId,
        'familyName': value.familyName,
        'fingerPrintId': value.fingerPrintId,
        'givenName': value.givenName,
        'identityToken': value.identityToken,
    };
}