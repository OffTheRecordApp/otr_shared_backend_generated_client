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
export function UserAssetModelFromJSON(json) {
    return UserAssetModelFromJSONTyped(json, false);
}
export function UserAssetModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'assetSizeInBytes': !exists(json, 'assetSizeInBytes') ? undefined : json['assetSizeInBytes'],
        'assetType': !exists(json, 'assetType') ? undefined : json['assetType'],
        'assetUrl': !exists(json, 'assetUrl') ? undefined : json['assetUrl'],
        'signedAssetUrl': !exists(json, 'signedAssetUrl') ? undefined : json['signedAssetUrl'],
        'userAssetId': !exists(json, 'userAssetId') ? undefined : json['userAssetId'],
    };
}
export function UserAssetModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'assetSizeInBytes': value.assetSizeInBytes,
        'assetType': value.assetType,
        'assetUrl': value.assetUrl,
        'signedAssetUrl': value.signedAssetUrl,
        'userAssetId': value.userAssetId,
    };
}
