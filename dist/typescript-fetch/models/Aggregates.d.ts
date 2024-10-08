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
import { ZoneId } from './';
/**
 *
 * @export
 * @interface Aggregates
 */
export interface Aggregates {
    /**
     *
     * @type {string}
     * @memberof Aggregates
     */
    endDate?: string;
    /**
     *
     * @type {number}
     * @memberof Aggregates
     */
    matchingRecords?: number;
    /**
     *
     * @type {number}
     * @memberof Aggregates
     */
    matchingRevenue?: number;
    /**
     *
     * @type {number}
     * @memberof Aggregates
     */
    matchingTransactionVolume?: number;
    /**
     *
     * @type {string}
     * @memberof Aggregates
     */
    startDate?: string;
    /**
     *
     * @type {number}
     * @memberof Aggregates
     */
    totalRecords?: number;
    /**
     *
     * @type {number}
     * @memberof Aggregates
     */
    totalRevenue?: number;
    /**
     *
     * @type {number}
     * @memberof Aggregates
     */
    totalTransactionVolume?: number;
    /**
     *
     * @type {ZoneId}
     * @memberof Aggregates
     */
    zoneId?: ZoneId;
}
export declare function AggregatesFromJSON(json: any): Aggregates;
export declare function AggregatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Aggregates;
export declare function AggregatesToJSON(value?: Aggregates | null): any;
