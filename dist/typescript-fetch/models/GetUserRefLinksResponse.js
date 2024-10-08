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
import { UserRefLinkDomainFromJSON, UserRefLinkDomainToJSON, } from './';
export function GetUserRefLinksResponseFromJSON(json) {
    return GetUserRefLinksResponseFromJSONTyped(json, false);
}
export function GetUserRefLinksResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'refLinks': !exists(json, 'refLinks') ? undefined : (json['refLinks'].map(UserRefLinkDomainFromJSON)),
    };
}
export function GetUserRefLinksResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'refLinks': value.refLinks === undefined ? undefined : (value.refLinks.map(UserRefLinkDomainToJSON)),
    };
}
