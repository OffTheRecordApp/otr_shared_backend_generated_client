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
import { Topic } from './';
/**
 *
 * @export
 * @interface Topics
 */
export interface Topics {
    /**
     *
     * @type {Array<Topic>}
     * @memberof Topics
     */
    topics?: Array<Topic>;
    /**
     *
     * @type {number}
     * @memberof Topics
     */
    totalCount?: number;
    /**
     *
     * @type {string}
     * @memberof Topics
     */
    type?: string;
}
export declare function TopicsFromJSON(json: any): Topics;
export declare function TopicsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Topics;
export declare function TopicsToJSON(value?: Topics | null): any;
