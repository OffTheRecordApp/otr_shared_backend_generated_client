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
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
} from './';

/**
 * 
 * @export
 * @interface Booking
 */
export interface Booking {
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    bookingDate?: string;
    /**
     * 
     * @type {Timestamp}
     * @memberof Booking
     */
    bookingDateUtc?: Timestamp;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    caseId?: string;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    caseStatus?: BookingCaseStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    clientTotalCost?: number;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    lawfirmId?: number;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    lawfirmName?: string;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    numPayments?: number;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    otrPercent?: number;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    otrRevenue?: number;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    state?: BookingStateEnum;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    userFirstName?: string;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    userLastName?: string;
}

export function BookingFromJSON(json: any): Booking {
    return BookingFromJSONTyped(json, false);
}

export function BookingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Booking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingDate': !exists(json, 'bookingDate') ? undefined : json['bookingDate'],
        'bookingDateUtc': !exists(json, 'bookingDateUtc') ? undefined : TimestampFromJSON(json['bookingDateUtc']),
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseStatus': !exists(json, 'caseStatus') ? undefined : json['caseStatus'],
        'clientTotalCost': !exists(json, 'clientTotalCost') ? undefined : json['clientTotalCost'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawfirmName': !exists(json, 'lawfirmName') ? undefined : json['lawfirmName'],
        'numPayments': !exists(json, 'numPayments') ? undefined : json['numPayments'],
        'otrPercent': !exists(json, 'otrPercent') ? undefined : json['otrPercent'],
        'otrRevenue': !exists(json, 'otrRevenue') ? undefined : json['otrRevenue'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'userFirstName': !exists(json, 'userFirstName') ? undefined : json['userFirstName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userLastName': !exists(json, 'userLastName') ? undefined : json['userLastName'],
    };
}

export function BookingToJSON(value?: Booking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingDate': value.bookingDate,
        'bookingDateUtc': TimestampToJSON(value.bookingDateUtc),
        'caseId': value.caseId,
        'caseStatus': value.caseStatus,
        'clientTotalCost': value.clientTotalCost,
        'lawfirmId': value.lawfirmId,
        'lawfirmName': value.lawfirmName,
        'numPayments': value.numPayments,
        'otrPercent': value.otrPercent,
        'otrRevenue': value.otrRevenue,
        'state': value.state,
        'userFirstName': value.userFirstName,
        'userId': value.userId,
        'userLastName': value.userLastName,
    };
}

/**
* @export
* @enum {string}
*/
export enum BookingCaseStatusEnum {
    AMENDEDDOWNWITHINCLASS = 'AMENDED_DOWN_WITHIN_CLASS',
    AMENDEDFULLFINE = 'AMENDED_FULL_FINE',
    AMENDEDINCREASEDFINE = 'AMENDED_INCREASED_FINE',
    AMENDEDNOFINE = 'AMENDED_NO_FINE',
    AMENDEDREDUCEDFINE = 'AMENDED_REDUCED_FINE',
    AMENDEDTOINFRACTION = 'AMENDED_TO_INFRACTION',
    AMENDEDTONMV = 'AMENDED_TO_NMV',
    CANCELLEDATTORNEYATFAULT = 'CANCELLED_ATTORNEY_AT_FAULT',
    CANCELLEDBYLAWFIRM = 'CANCELLED_BY_LAWFIRM',
    CANCELLEDBYUSER = 'CANCELLED_BY_USER',
    CANCELLEDDUPLICATE = 'CANCELLED_DUPLICATE',
    CANCELLEDNMV = 'CANCELLED_NMV',
    CANCELLEDNONPAYMENT = 'CANCELLED_NON_PAYMENT',
    CANCELLEDNOLAWFIRM = 'CANCELLED_NO_LAWFIRM',
    CANCELLEDOVERDUE = 'CANCELLED_OVERDUE',
    CANCELLEDTOOSHORTNOTICE = 'CANCELLED_TOO_SHORT_NOTICE',
    CASEINPROGRESS = 'CASE_IN_PROGRESS',
    CLIENTCONFIRMED = 'CLIENT_CONFIRMED',
    CLIENTCONFIRMEDUNPAID = 'CLIENT_CONFIRMED_UNPAID',
    CLIENTFIREDLAWFIRM = 'CLIENT_FIRED_LAWFIRM',
    CLIENTFORCEDLOSS = 'CLIENT_FORCED_LOSS',
    CLIENTPAIDFINE = 'CLIENT_PAID_FINE',
    CLIENTUNRESPONSIVE = 'CLIENT_UNRESPONSIVE',
    DEFERRED = 'DEFERRED',
    DISMISSED = 'DISMISSED',
    DIVERSION = 'DIVERSION',
    FEESDISPUTED = 'FEES_DISPUTED',
    FINEREDUCTIONONLY = 'FINE_REDUCTION_ONLY',
    LAWFIRMWITHDRAWN = 'LAWFIRM_WITHDRAWN',
    LOST = 'LOST',
    NOLAWFIRMAVAILABLE = 'NO_LAWFIRM_AVAILABLE',
    POINTREDUCTION = 'POINT_REDUCTION',
    REFUSEDBYLAWFIRM = 'REFUSED_BY_LAWFIRM',
    RESOLVEDNONPAYMENT = 'RESOLVED_NON_PAYMENT',
    STALE = 'STALE',
    TRAFFICSCHOOL = 'TRAFFIC_SCHOOL',
    UNCONFIRMED = 'UNCONFIRMED'
}
/**
* @export
* @enum {string}
*/
export enum BookingStateEnum {
    AK = 'AK',
    AL = 'AL',
    AR = 'AR',
    AZ = 'AZ',
    CA = 'CA',
    CO = 'CO',
    CT = 'CT',
    DC = 'DC',
    DE = 'DE',
    FL = 'FL',
    GA = 'GA',
    HI = 'HI',
    IA = 'IA',
    ID = 'ID',
    IL = 'IL',
    IN = 'IN',
    KS = 'KS',
    KY = 'KY',
    LA = 'LA',
    MA = 'MA',
    MD = 'MD',
    ME = 'ME',
    MI = 'MI',
    MN = 'MN',
    MO = 'MO',
    MS = 'MS',
    MT = 'MT',
    NC = 'NC',
    ND = 'ND',
    NE = 'NE',
    NH = 'NH',
    NJ = 'NJ',
    NM = 'NM',
    NV = 'NV',
    NY = 'NY',
    OH = 'OH',
    OK = 'OK',
    OR = 'OR',
    PA = 'PA',
    RI = 'RI',
    SC = 'SC',
    SD = 'SD',
    TN = 'TN',
    TX = 'TX',
    UT = 'UT',
    VA = 'VA',
    VT = 'VT',
    WA = 'WA',
    WI = 'WI',
    WV = 'WV',
    WY = 'WY'
}


