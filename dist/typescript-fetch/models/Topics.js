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
import { TopicFromJSON, TopicToJSON, } from './';
export function TopicsFromJSON(json) {
    return TopicsFromJSONTyped(json, false);
}
export function TopicsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'topics': !exists(json, 'topics') ? undefined : (json['topics'].map(TopicFromJSON)),
        'totalCount': !exists(json, 'total_count') ? undefined : json['total_count'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}
export function TopicsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'topics': value.topics === undefined ? undefined : (value.topics.map(TopicToJSON)),
        'total_count': value.totalCount,
        'type': value.type,
    };
}
