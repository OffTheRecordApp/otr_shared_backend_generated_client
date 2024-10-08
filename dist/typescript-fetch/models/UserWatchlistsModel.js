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
import { WatchlistItemsModelFromJSON, WatchlistItemsModelToJSON, } from './';
export function UserWatchlistsModelFromJSON(json) {
    return UserWatchlistsModelFromJSONTyped(json, false);
}
export function UserWatchlistsModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isArchived': !exists(json, 'isArchived') ? undefined : json['isArchived'],
        'watchlistId': !exists(json, 'watchlistId') ? undefined : json['watchlistId'],
        'watchlistItems': !exists(json, 'watchlistItems') ? undefined : (json['watchlistItems'].map(WatchlistItemsModelFromJSON)),
        'watchlistName': !exists(json, 'watchlistName') ? undefined : json['watchlistName'],
    };
}
export function UserWatchlistsModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'isArchived': value.isArchived,
        'watchlistId': value.watchlistId,
        'watchlistItems': value.watchlistItems === undefined ? undefined : (value.watchlistItems.map(WatchlistItemsModelToJSON)),
        'watchlistName': value.watchlistName,
    };
}
