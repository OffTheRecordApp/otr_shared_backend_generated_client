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
export function ServiceLevelAgreementFromJSON(json) {
    return ServiceLevelAgreementFromJSONTyped(json, false);
}
export function ServiceLevelAgreementFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'slaName': !exists(json, 'sla_name') ? undefined : json['sla_name'],
        'slaStatus': !exists(json, 'sla_status') ? undefined : json['sla_status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}
export function ServiceLevelAgreementToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sla_name': value.slaName,
        'sla_status': value.slaStatus,
        'type': value.type,
    };
}
