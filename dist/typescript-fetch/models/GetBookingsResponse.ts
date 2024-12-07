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
    Booking,
    BookingFromJSON,
    BookingFromJSONTyped,
    BookingToJSON,
    BookingCancelation,
    BookingCancelationFromJSON,
    BookingCancelationFromJSONTyped,
    BookingCancelationToJSON,
    CaseBookingsStats,
    CaseBookingsStatsFromJSON,
    CaseBookingsStatsFromJSONTyped,
    CaseBookingsStatsToJSON,
    LawfirmBookingSummary,
    LawfirmBookingSummaryFromJSON,
    LawfirmBookingSummaryFromJSONTyped,
    LawfirmBookingSummaryToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetBookingsResponse
 */
export interface GetBookingsResponse {
    /**
     * 
     * @type {Array<Booking>}
     * @memberof GetBookingsResponse
     */
    bookings?: Array<Booking>;
    /**
     * 
     * @type {Array<LawfirmBookingSummary>}
     * @memberof GetBookingsResponse
     */
    bookingsByLawfirm?: Array<LawfirmBookingSummary>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof GetBookingsResponse
     */
    bookingsByStatus?: { [key: string]: number; };
    /**
     * 
     * @type {Array<BookingCancelation>}
     * @memberof GetBookingsResponse
     */
    cancelations?: Array<BookingCancelation>;
    /**
     * 
     * @type {CaseBookingsStats}
     * @memberof GetBookingsResponse
     */
    stats?: CaseBookingsStats;
}

export function GetBookingsResponseFromJSON(json: any): GetBookingsResponse {
    return GetBookingsResponseFromJSONTyped(json, false);
}

export function GetBookingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBookingsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookings': !exists(json, 'bookings') ? undefined : ((json['bookings'] as Array<any>).map(BookingFromJSON)),
        'bookingsByLawfirm': !exists(json, 'bookingsByLawfirm') ? undefined : ((json['bookingsByLawfirm'] as Array<any>).map(LawfirmBookingSummaryFromJSON)),
        'bookingsByStatus': !exists(json, 'bookingsByStatus') ? undefined : json['bookingsByStatus'],
        'cancelations': !exists(json, 'cancelations') ? undefined : ((json['cancelations'] as Array<any>).map(BookingCancelationFromJSON)),
        'stats': !exists(json, 'stats') ? undefined : CaseBookingsStatsFromJSON(json['stats']),
    };
}

export function GetBookingsResponseToJSON(value?: GetBookingsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookings': value.bookings === undefined ? undefined : ((value.bookings as Array<any>).map(BookingToJSON)),
        'bookingsByLawfirm': value.bookingsByLawfirm === undefined ? undefined : ((value.bookingsByLawfirm as Array<any>).map(LawfirmBookingSummaryToJSON)),
        'bookingsByStatus': value.bookingsByStatus,
        'cancelations': value.cancelations === undefined ? undefined : ((value.cancelations as Array<any>).map(BookingCancelationToJSON)),
        'stats': CaseBookingsStatsToJSON(value.stats),
    };
}


