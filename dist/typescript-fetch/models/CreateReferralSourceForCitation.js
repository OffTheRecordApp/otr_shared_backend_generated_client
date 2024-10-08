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
export function CreateReferralSourceForCitationFromJSON(json) {
    return CreateReferralSourceForCitationFromJSONTyped(json, false);
}
export function CreateReferralSourceForCitationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'referralSourceData': !exists(json, 'referralSourceData') ? undefined : json['referralSourceData'],
    };
}
export function CreateReferralSourceForCitationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'referralSourceData': value.referralSourceData,
    };
}
