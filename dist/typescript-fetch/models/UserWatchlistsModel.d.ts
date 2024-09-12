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
import { WatchlistItemsModel } from './';
/**
 *
 * @export
 * @interface UserWatchlistsModel
 */
export interface UserWatchlistsModel {
    /**
     *
     * @type {boolean}
     * @memberof UserWatchlistsModel
     */
    isArchived?: boolean;
    /**
     *
     * @type {number}
     * @memberof UserWatchlistsModel
     */
    watchlistId?: number;
    /**
     *
     * @type {Array<WatchlistItemsModel>}
     * @memberof UserWatchlistsModel
     */
    watchlistItems?: Array<WatchlistItemsModel>;
    /**
     *
     * @type {string}
     * @memberof UserWatchlistsModel
     */
    watchlistName?: string;
}
export declare function UserWatchlistsModelFromJSON(json: any): UserWatchlistsModel;
export declare function UserWatchlistsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserWatchlistsModel;
export declare function UserWatchlistsModelToJSON(value?: UserWatchlistsModel | null): any;