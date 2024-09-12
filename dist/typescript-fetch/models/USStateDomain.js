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
export function USStateDomainFromJSON(json) {
    return USStateDomainFromJSONTyped(json, false);
}
export function USStateDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stateCode': !exists(json, 'stateCode') ? undefined : json['stateCode'],
        'stateName': !exists(json, 'stateName') ? undefined : json['stateName'],
    };
}
export function USStateDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stateCode': value.stateCode,
        'stateName': value.stateName,
    };
}