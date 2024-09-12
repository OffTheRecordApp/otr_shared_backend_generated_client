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
import { ActivityFeedModel, CursorModel } from './';
/**
 *
 * @export
 * @interface GetActivityFeedResponse
 */
export interface GetActivityFeedResponse {
    /**
     *
     * @type {Array<ActivityFeedModel>}
     * @memberof GetActivityFeedResponse
     */
    activity?: Array<ActivityFeedModel>;
    /**
     *
     * @type {CursorModel}
     * @memberof GetActivityFeedResponse
     */
    cursor?: CursorModel;
}
export declare function GetActivityFeedResponseFromJSON(json: any): GetActivityFeedResponse;
export declare function GetActivityFeedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetActivityFeedResponse;
export declare function GetActivityFeedResponseToJSON(value?: GetActivityFeedResponse | null): any;