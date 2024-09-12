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
export function AuditLogFromJSON(json) {
    return AuditLogFromJSONTyped(json, false);
}
export function AuditLogFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'key': !exists(json, 'key') ? undefined : json['key'],
        'level': !exists(json, 'level') ? undefined : json['level'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}
export function AuditLogToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'key': value.key,
        'level': value.level,
        'message': value.message,
        'source': value.source,
    };
}
/**
* @export
* @enum {string}
*/
export var AuditLogLevelEnum;
(function (AuditLogLevelEnum) {
    AuditLogLevelEnum["NONTECHNICAL"] = "NON_TECHNICAL";
    AuditLogLevelEnum["TECHNICAL"] = "TECHNICAL";
})(AuditLogLevelEnum || (AuditLogLevelEnum = {}));