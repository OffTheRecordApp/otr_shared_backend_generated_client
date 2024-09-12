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
import { TimestampReqFromJSON, TimestampReqToJSON, } from './';
export function FreshdeskAttachmentReqFromJSON(json) {
    return FreshdeskAttachmentReqFromJSONTyped(json, false);
}
export function FreshdeskAttachmentReqFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attachmentUrl': !exists(json, 'attachment_url') ? undefined : json['attachment_url'],
        'contentType': !exists(json, 'content_type') ? undefined : json['content_type'],
        'createdAt': !exists(json, 'created_at') ? undefined : TimestampReqFromJSON(json['created_at']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : TimestampReqFromJSON(json['updated_at']),
    };
}
export function FreshdeskAttachmentReqToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attachment_url': value.attachmentUrl,
        'content_type': value.contentType,
        'created_at': TimestampReqToJSON(value.createdAt),
        'id': value.id,
        'name': value.name,
        'size': value.size,
        'updated_at': TimestampReqToJSON(value.updatedAt),
    };
}