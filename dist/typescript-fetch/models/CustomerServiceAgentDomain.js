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
export function CustomerServiceAgentDomainFromJSON(json) {
    return CustomerServiceAgentDomainFromJSONTyped(json, false);
}
export function CustomerServiceAgentDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'freshcallerAgentId': !exists(json, 'freshcallerAgentId') ? undefined : json['freshcallerAgentId'],
        'freshdeskAgentId': !exists(json, 'freshdeskAgentId') ? undefined : json['freshdeskAgentId'],
        'freshdeskApiToken': !exists(json, 'freshdeskApiToken') ? undefined : json['freshdeskApiToken'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function CustomerServiceAgentDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstName': value.firstName,
        'freshcallerAgentId': value.freshcallerAgentId,
        'freshdeskAgentId': value.freshdeskAgentId,
        'freshdeskApiToken': value.freshdeskApiToken,
        'isActive': value.isActive,
        'lastName': value.lastName,
        'userId': value.userId,
    };
}
