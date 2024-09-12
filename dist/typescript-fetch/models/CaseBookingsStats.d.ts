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
 * @interface CaseBookingsStats
 */
export interface CaseBookingsStats {
    /**
     *
     * @type {string}
     * @memberof CaseBookingsStats
     */
    endDate?: string;
    /**
     *
     * @type {number}
     * @memberof CaseBookingsStats
     */
    numBookings?: number;
    /**
     *
     * @type {number}
     * @memberof CaseBookingsStats
     */
    numCancelations?: number;
    /**
     *
     * @type {number}
     * @memberof CaseBookingsStats
     */
    numLawfirmsEngaged?: number;
    /**
     *
     * @type {number}
     * @memberof CaseBookingsStats
     */
    onTrackTransactions?: number;
    /**
     *
     * @type {number}
     * @memberof CaseBookingsStats
     */
    otrRevenue?: number;
    /**
     *
     * @type {string}
     * @memberof CaseBookingsStats
     */
    startDate?: string;
    /**
     *
     * @type {ZoneId}
     * @memberof CaseBookingsStats
     */
    zoneId?: ZoneId;
}
export declare function CaseBookingsStatsFromJSON(json: any): CaseBookingsStats;
export declare function CaseBookingsStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseBookingsStats;
export declare function CaseBookingsStatsToJSON(value?: CaseBookingsStats | null): any;