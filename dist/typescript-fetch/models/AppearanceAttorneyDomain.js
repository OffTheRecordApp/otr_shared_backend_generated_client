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
export function AppearanceAttorneyDomainFromJSON(json) {
    return AppearanceAttorneyDomainFromJSONTyped(json, false);
}
export function AppearanceAttorneyDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'lawfirmCaseId': !exists(json, 'lawfirmCaseId') ? undefined : json['lawfirmCaseId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function AppearanceAttorneyDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstName': value.firstName,
        'lastName': value.lastName,
        'lawfirmCaseId': value.lawfirmCaseId,
        'userId': value.userId,
    };
}