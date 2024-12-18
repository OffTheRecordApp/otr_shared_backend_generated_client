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
    CaseItem,
    CaseItemFromJSON,
    CaseItemFromJSONTyped,
    CaseItemToJSON,
    LawfirmItem,
    LawfirmItemFromJSON,
    LawfirmItemFromJSONTyped,
    LawfirmItemToJSON,
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
    UserItem,
    UserItemFromJSON,
    UserItemFromJSONTyped,
    UserItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface WatchlistItemsModel
 */
export interface WatchlistItemsModel {
    /**
     * 
     * @type {CaseItem}
     * @memberof WatchlistItemsModel
     */
    caseItem?: CaseItem;
    /**
     * 
     * @type {string}
     * @memberof WatchlistItemsModel
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof WatchlistItemsModel
     */
    entityType?: WatchlistItemsModelEntityTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof WatchlistItemsModel
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {Timestamp}
     * @memberof WatchlistItemsModel
     */
    itemCreatedDate?: Timestamp;
    /**
     * 
     * @type {Timestamp}
     * @memberof WatchlistItemsModel
     */
    itemLastUpdatedDate?: Timestamp;
    /**
     * 
     * @type {LawfirmItem}
     * @memberof WatchlistItemsModel
     */
    lawfirmItem?: LawfirmItem;
    /**
     * 
     * @type {string}
     * @memberof WatchlistItemsModel
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof WatchlistItemsModel
     */
    priority?: WatchlistItemsModelPriorityEnum;
    /**
     * 
     * @type {UserItem}
     * @memberof WatchlistItemsModel
     */
    userItem?: UserItem;
    /**
     * 
     * @type {number}
     * @memberof WatchlistItemsModel
     */
    watchlistId?: number;
    /**
     * 
     * @type {number}
     * @memberof WatchlistItemsModel
     */
    watchlistItemId?: number;
}

export function WatchlistItemsModelFromJSON(json: any): WatchlistItemsModel {
    return WatchlistItemsModelFromJSONTyped(json, false);
}

export function WatchlistItemsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistItemsModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseItem': !exists(json, 'caseItem') ? undefined : CaseItemFromJSON(json['caseItem']),
        'entityId': !exists(json, 'entityId') ? undefined : json['entityId'],
        'entityType': !exists(json, 'entityType') ? undefined : json['entityType'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'itemCreatedDate': !exists(json, 'itemCreatedDate') ? undefined : TimestampFromJSON(json['itemCreatedDate']),
        'itemLastUpdatedDate': !exists(json, 'itemLastUpdatedDate') ? undefined : TimestampFromJSON(json['itemLastUpdatedDate']),
        'lawfirmItem': !exists(json, 'lawfirmItem') ? undefined : LawfirmItemFromJSON(json['lawfirmItem']),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'userItem': !exists(json, 'userItem') ? undefined : UserItemFromJSON(json['userItem']),
        'watchlistId': !exists(json, 'watchlistId') ? undefined : json['watchlistId'],
        'watchlistItemId': !exists(json, 'watchlistItemId') ? undefined : json['watchlistItemId'],
    };
}

export function WatchlistItemsModelToJSON(value?: WatchlistItemsModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseItem': CaseItemToJSON(value.caseItem),
        'entityId': value.entityId,
        'entityType': value.entityType,
        'isDeleted': value.isDeleted,
        'itemCreatedDate': TimestampToJSON(value.itemCreatedDate),
        'itemLastUpdatedDate': TimestampToJSON(value.itemLastUpdatedDate),
        'lawfirmItem': LawfirmItemToJSON(value.lawfirmItem),
        'note': value.note,
        'priority': value.priority,
        'userItem': UserItemToJSON(value.userItem),
        'watchlistId': value.watchlistId,
        'watchlistItemId': value.watchlistItemId,
    };
}

/**
* @export
* @enum {string}
*/
export enum WatchlistItemsModelEntityTypeEnum {
    CASE = 'CASE',
    LAWFIRM = 'LAWFIRM',
    UNKNOWN = 'UNKNOWN',
    USER = 'USER'
}
/**
* @export
* @enum {string}
*/
export enum WatchlistItemsModelPriorityEnum {
    HIGH = 'HIGH',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM'
}


