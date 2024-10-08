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
import { CaseMessageDomainFromJSON, CaseMessageDomainToJSON, } from './';
export function GetCaseMessagesResponseFromJSON(json) {
    return GetCaseMessagesResponseFromJSONTyped(json, false);
}
export function GetCaseMessagesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'messages': !exists(json, 'messages') ? undefined : (json['messages'].map(CaseMessageDomainFromJSON)),
        'totalRecords': !exists(json, 'totalRecords') ? undefined : json['totalRecords'],
    };
}
export function GetCaseMessagesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'messages': value.messages === undefined ? undefined : (value.messages.map(CaseMessageDomainToJSON)),
        'totalRecords': value.totalRecords,
    };
}
