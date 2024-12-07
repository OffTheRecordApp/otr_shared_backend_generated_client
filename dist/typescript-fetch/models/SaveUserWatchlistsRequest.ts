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

import { exists, mapValues } from '../runtime';
import {
    SaveItemToWatchlistRequest,
    SaveItemToWatchlistRequestFromJSON,
    SaveItemToWatchlistRequestFromJSONTyped,
    SaveItemToWatchlistRequestToJSON,
} from './';

/**
 * 
 * @export
 * @interface SaveUserWatchlistsRequest
 */
export interface SaveUserWatchlistsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SaveUserWatchlistsRequest
     */
    isArchived?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SaveUserWatchlistsRequest
     */
    watchlistId?: number;
    /**
     * 
     * @type {SaveItemToWatchlistRequest}
     * @memberof SaveUserWatchlistsRequest
     */
    watchlistItems?: SaveItemToWatchlistRequest;
    /**
     * 
     * @type {string}
     * @memberof SaveUserWatchlistsRequest
     */
    watchlistName?: string;
}

export function SaveUserWatchlistsRequestFromJSON(json: any): SaveUserWatchlistsRequest {
    return SaveUserWatchlistsRequestFromJSONTyped(json, false);
}

export function SaveUserWatchlistsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveUserWatchlistsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isArchived': !exists(json, 'isArchived') ? undefined : json['isArchived'],
        'watchlistId': !exists(json, 'watchlistId') ? undefined : json['watchlistId'],
        'watchlistItems': !exists(json, 'watchlistItems') ? undefined : SaveItemToWatchlistRequestFromJSON(json['watchlistItems']),
        'watchlistName': !exists(json, 'watchlistName') ? undefined : json['watchlistName'],
    };
}

export function SaveUserWatchlistsRequestToJSON(value?: SaveUserWatchlistsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isArchived': value.isArchived,
        'watchlistId': value.watchlistId,
        'watchlistItems': SaveItemToWatchlistRequestToJSON(value.watchlistItems),
        'watchlistName': value.watchlistName,
    };
}


