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
/**
 *
 * @export
 * @interface Topic
 */
export interface Topic {
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    type?: string;
}
export declare function TopicFromJSON(json: any): Topic;
export declare function TopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): Topic;
export declare function TopicToJSON(value?: Topic | null): any;
