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
import { ZoneRules } from './';
/**
 *
 * @export
 * @interface ZoneOffset
 */
export interface ZoneOffset {
    /**
     *
     * @type {string}
     * @memberof ZoneOffset
     */
    id?: string;
    /**
     *
     * @type {ZoneRules}
     * @memberof ZoneOffset
     */
    rules?: ZoneRules;
    /**
     *
     * @type {number}
     * @memberof ZoneOffset
     */
    totalSeconds?: number;
}
export declare function ZoneOffsetFromJSON(json: any): ZoneOffset;
export declare function ZoneOffsetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZoneOffset;
export declare function ZoneOffsetToJSON(value?: ZoneOffset | null): any;
