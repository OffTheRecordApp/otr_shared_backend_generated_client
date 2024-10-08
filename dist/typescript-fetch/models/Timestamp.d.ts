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
 * @interface Timestamp
 */
export interface Timestamp {
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    date?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    day?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    hours?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    minutes?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    month?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    nanos?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    seconds?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    time?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    timezoneOffset?: number;
    /**
     *
     * @type {number}
     * @memberof Timestamp
     */
    year?: number;
}
export declare function TimestampFromJSON(json: any): Timestamp;
export declare function TimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): Timestamp;
export declare function TimestampToJSON(value?: Timestamp | null): any;
