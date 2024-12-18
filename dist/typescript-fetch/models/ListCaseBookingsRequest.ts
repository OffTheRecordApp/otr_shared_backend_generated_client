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
/**
 * 
 * @export
 * @interface ListCaseBookingsRequest
 */
export interface ListCaseBookingsRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ListCaseBookingsRequest
     */
    caseStatusFilter?: Array<ListCaseBookingsRequestCaseStatusFilterEnum>;
    /**
     * 
     * @type {Date}
     * @memberof ListCaseBookingsRequest
     */
    endDate?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListCaseBookingsRequest
     */
    genderFilterList?: Array<ListCaseBookingsRequestGenderFilterListEnum>;
    /**
     * 
     * @type {boolean}
     * @memberof ListCaseBookingsRequest
     */
    includeDataRecords?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ListCaseBookingsRequest
     */
    lawfirmStringFilter?: string;
    /**
     * 
     * @type {number}
     * @memberof ListCaseBookingsRequest
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof ListCaseBookingsRequest
     */
    page?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListCaseBookingsRequest
     */
    raceFilterList?: Array<ListCaseBookingsRequestRaceFilterListEnum>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ListCaseBookingsRequest
     */
    sortMap?: { [key: string]: string; };
    /**
     * 
     * @type {Date}
     * @memberof ListCaseBookingsRequest
     */
    startDate?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListCaseBookingsRequest
     */
    stateFilterList?: Array<ListCaseBookingsRequestStateFilterListEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListCaseBookingsRequest
     */
    statusCategoryFilter?: Array<ListCaseBookingsRequestStatusCategoryFilterEnum>;
    /**
     * 
     * @type {string}
     * @memberof ListCaseBookingsRequest
     */
    timeZoneId?: string;
}

export function ListCaseBookingsRequestFromJSON(json: any): ListCaseBookingsRequest {
    return ListCaseBookingsRequestFromJSONTyped(json, false);
}

export function ListCaseBookingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCaseBookingsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseStatusFilter': !exists(json, 'caseStatusFilter') ? undefined : json['caseStatusFilter'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'genderFilterList': !exists(json, 'genderFilterList') ? undefined : json['genderFilterList'],
        'includeDataRecords': !exists(json, 'includeDataRecords') ? undefined : json['includeDataRecords'],
        'lawfirmStringFilter': !exists(json, 'lawfirmStringFilter') ? undefined : json['lawfirmStringFilter'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'page': !exists(json, 'page') ? undefined : json['page'],
        'raceFilterList': !exists(json, 'raceFilterList') ? undefined : json['raceFilterList'],
        'sortMap': !exists(json, 'sortMap') ? undefined : json['sortMap'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'stateFilterList': !exists(json, 'stateFilterList') ? undefined : json['stateFilterList'],
        'statusCategoryFilter': !exists(json, 'statusCategoryFilter') ? undefined : json['statusCategoryFilter'],
        'timeZoneId': !exists(json, 'timeZoneId') ? undefined : json['timeZoneId'],
    };
}

export function ListCaseBookingsRequestToJSON(value?: ListCaseBookingsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseStatusFilter': value.caseStatusFilter,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'genderFilterList': value.genderFilterList,
        'includeDataRecords': value.includeDataRecords,
        'lawfirmStringFilter': value.lawfirmStringFilter,
        'length': value.length,
        'page': value.page,
        'raceFilterList': value.raceFilterList,
        'sortMap': value.sortMap,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'stateFilterList': value.stateFilterList,
        'statusCategoryFilter': value.statusCategoryFilter,
        'timeZoneId': value.timeZoneId,
    };
}

/**
* @export
* @enum {string}
*/
export enum ListCaseBookingsRequestCaseStatusFilterEnum {
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
export enum ListCaseBookingsRequestGenderFilterListEnum {
    FEMALE = 'FEMALE',
    MALE = 'MALE',
    NOTAVAILABLE = 'NOT_AVAILABLE',
    NOTLISTED = 'NOT_LISTED',
    UNVERIFIED = 'UNVERIFIED',
    X = 'X'
}
/**
* @export
* @enum {string}
*/
export enum ListCaseBookingsRequestRaceFilterListEnum {
    ASIAN = 'ASIAN',
    BLACK = 'BLACK',
    HISPANIC = 'HISPANIC',
    MIDDLEEASTERN = 'MIDDLE_EASTERN',
    NATIVE = 'NATIVE',
    NOTAVAILABLE = 'NOT_AVAILABLE',
    PACIFICISLANDER = 'PACIFIC_ISLANDER',
    TWOORMORE = 'TWO_OR_MORE',
    UNKNOWN = 'UNKNOWN',
    UNVERIFIED = 'UNVERIFIED',
    WHITE = 'WHITE'
}
/**
* @export
* @enum {string}
*/
export enum ListCaseBookingsRequestStateFilterListEnum {
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
/**
* @export
* @enum {string}
*/
export enum ListCaseBookingsRequestStatusCategoryFilterEnum {
    ACTIVE = 'ACTIVE',
    CANCELLED = 'CANCELLED',
    RESOLVED = 'RESOLVED',
    UNCONFIRMED = 'UNCONFIRMED'
}


