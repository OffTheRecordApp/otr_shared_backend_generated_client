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
import { LobMailingAddressFromJSON, LobMailingAddressToJSON, } from './';
export function VerifyMailingAddressResponseFromJSON(json) {
    return VerifyMailingAddressResponseFromJSONTyped(json, false);
}
export function VerifyMailingAddressResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressToUse': !exists(json, 'addressToUse') ? undefined : LobMailingAddressFromJSON(json['addressToUse']),
        'deliverable': !exists(json, 'deliverable') ? undefined : json['deliverable'],
        'deliverableMessage': !exists(json, 'deliverableMessage') ? undefined : json['deliverableMessage'],
    };
}
export function VerifyMailingAddressResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressToUse': LobMailingAddressToJSON(value.addressToUse),
        'deliverable': value.deliverable,
        'deliverableMessage': value.deliverableMessage,
    };
}
