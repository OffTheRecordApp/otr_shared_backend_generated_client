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
import { Duration, ZoneOffset } from './';
/**
 *
 * @export
 * @interface ZoneOffsetTransition
 */
export interface ZoneOffsetTransition {
    /**
     *
     * @type {Date}
     * @memberof ZoneOffsetTransition
     */
    dateTimeAfter?: Date;
    /**
     *
     * @type {Date}
     * @memberof ZoneOffsetTransition
     */
    dateTimeBefore?: Date;
    /**
     *
     * @type {Duration}
     * @memberof ZoneOffsetTransition
     */
    duration?: Duration;
    /**
     *
     * @type {boolean}
     * @memberof ZoneOffsetTransition
     */
    gap?: boolean;
    /**
     *
     * @type {Date}
     * @memberof ZoneOffsetTransition
     */
    instant?: Date;
    /**
     *
     * @type {ZoneOffset}
     * @memberof ZoneOffsetTransition
     */
    offsetAfter?: ZoneOffset;
    /**
     *
     * @type {ZoneOffset}
     * @memberof ZoneOffsetTransition
     */
    offsetBefore?: ZoneOffset;
    /**
     *
     * @type {boolean}
     * @memberof ZoneOffsetTransition
     */
    overlap?: boolean;
}
export declare function ZoneOffsetTransitionFromJSON(json: any): ZoneOffsetTransition;
export declare function ZoneOffsetTransitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZoneOffsetTransition;
export declare function ZoneOffsetTransitionToJSON(value?: ZoneOffsetTransition | null): any;
