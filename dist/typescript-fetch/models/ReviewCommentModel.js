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
export function ReviewCommentModelFromJSON(json) {
    return ReviewCommentModelFromJSONTyped(json, false);
}
export function ReviewCommentModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorName': !exists(json, 'authorName') ? undefined : json['authorName'],
        'commentDateUtc': !exists(json, 'commentDateUtc') ? undefined : (new Date(json['commentDateUtc'])),
        'copy': !exists(json, 'copy') ? undefined : json['copy'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'profilePictureSignedUrl': !exists(json, 'profilePictureSignedUrl') ? undefined : json['profilePictureSignedUrl'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
    };
}
export function ReviewCommentModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorName': value.authorName,
        'commentDateUtc': value.commentDateUtc === undefined ? undefined : (value.commentDateUtc.toISOString()),
        'copy': value.copy,
        'id': value.id,
        'profilePictureSignedUrl': value.profilePictureSignedUrl,
        'profilePictureUrl': value.profilePictureUrl,
    };
}
