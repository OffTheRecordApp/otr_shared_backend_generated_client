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
import { BlogMetadataFromJSON, BlogMetadataToJSON, } from './';
export function BlogDocumentFromJSON(json) {
    return BlogDocumentFromJSONTyped(json, false);
}
export function BlogDocumentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addition': !exists(json, 'addition') ? undefined : (json['addition'].map(BlogMetadataFromJSON)),
        'deletion': !exists(json, 'deletion') ? undefined : (json['deletion'].map(BlogMetadataFromJSON)),
        'update': !exists(json, 'update') ? undefined : (json['update'].map(BlogMetadataFromJSON)),
    };
}
export function BlogDocumentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addition': value.addition === undefined ? undefined : (value.addition.map(BlogMetadataToJSON)),
        'deletion': value.deletion === undefined ? undefined : (value.deletion.map(BlogMetadataToJSON)),
        'update': value.update === undefined ? undefined : (value.update.map(BlogMetadataToJSON)),
    };
}