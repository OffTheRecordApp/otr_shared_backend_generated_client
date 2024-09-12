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
export function DashboardAuthorModelFromJSON(json) {
    return DashboardAuthorModelFromJSONTyped(json, false);
}
export function DashboardAuthorModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorFirstName': !exists(json, 'authorFirstName') ? undefined : json['authorFirstName'],
        'authorLastName': !exists(json, 'authorLastName') ? undefined : json['authorLastName'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
    };
}
export function DashboardAuthorModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorFirstName': value.authorFirstName,
        'authorLastName': value.authorLastName,
        'profilePictureUrl': value.profilePictureUrl,
    };
}