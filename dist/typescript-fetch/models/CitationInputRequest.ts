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
    AddressDomainReq,
    AddressDomainReqFromJSON,
    AddressDomainReqFromJSONTyped,
    AddressDomainReqToJSON,
    CourtInputRequest,
    CourtInputRequestFromJSON,
    CourtInputRequestFromJSONTyped,
    CourtInputRequestToJSON,
    TimestampReq,
    TimestampReqFromJSON,
    TimestampReqFromJSONTyped,
    TimestampReqToJSON,
    TrafficViolationInputRequest,
    TrafficViolationInputRequestFromJSON,
    TrafficViolationInputRequestFromJSONTyped,
    TrafficViolationInputRequestToJSON,
} from './';

/**
 * 
 * @export
 * @interface CitationInputRequest
 */
export interface CitationInputRequest {
    /**
     * 
     * @type {AddressDomainReq}
     * @memberof CitationInputRequest
     */
    address?: AddressDomainReq;
    /**
     * 
     * @type {string}
     * @memberof CitationInputRequest
     */
    cdlStatus?: CitationInputRequestCdlStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof CitationInputRequest
     */
    citationIssueDate?: Date;
    /**
     * 
     * @type {TimestampReq}
     * @memberof CitationInputRequest
     */
    citationIssueDateUTC?: TimestampReq;
    /**
     * 
     * @type {string}
     * @memberof CitationInputRequest
     */
    clientEmailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationInputRequest
     */
    clientFirstName?: string;
    /**
     * 
     * @type {CourtInputRequest}
     * @memberof CitationInputRequest
     */
    court?: CourtInputRequest;
    /**
     * 
     * @type {string}
     * @memberof CitationInputRequest
     */
    documentUrlToConvert?: string;
    /**
     * 
     * @type {number}
     * @memberof CitationInputRequest
     */
    fineAmount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CitationInputRequest
     */
    involvesAccident?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CitationInputRequest
     */
    isDismissedFromContactList?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CitationInputRequest
     */
    isPastDue?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CitationInputRequest
     */
    state?: CitationInputRequestStateEnum;
    /**
     * 
     * @type {string}
     * @memberof CitationInputRequest
     */
    ticketNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof CitationInputRequest
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof CitationInputRequest
     */
    violationCount?: number;
    /**
     * 
     * @type {Array<TrafficViolationInputRequest>}
     * @memberof CitationInputRequest
     */
    violations?: Array<TrafficViolationInputRequest>;
}

export function CitationInputRequestFromJSON(json: any): CitationInputRequest {
    return CitationInputRequestFromJSONTyped(json, false);
}

export function CitationInputRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CitationInputRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressDomainReqFromJSON(json['address']),
        'cdlStatus': !exists(json, 'cdlStatus') ? undefined : json['cdlStatus'],
        'citationIssueDate': !exists(json, 'citationIssueDate') ? undefined : (new Date(json['citationIssueDate'])),
        'citationIssueDateUTC': !exists(json, 'citationIssueDateUTC') ? undefined : TimestampReqFromJSON(json['citationIssueDateUTC']),
        'clientEmailAddress': !exists(json, 'clientEmailAddress') ? undefined : json['clientEmailAddress'],
        'clientFirstName': !exists(json, 'clientFirstName') ? undefined : json['clientFirstName'],
        'court': !exists(json, 'court') ? undefined : CourtInputRequestFromJSON(json['court']),
        'documentUrlToConvert': !exists(json, 'documentUrlToConvert') ? undefined : json['documentUrlToConvert'],
        'fineAmount': !exists(json, 'fineAmount') ? undefined : json['fineAmount'],
        'involvesAccident': !exists(json, 'involvesAccident') ? undefined : json['involvesAccident'],
        'isDismissedFromContactList': !exists(json, 'isDismissedFromContactList') ? undefined : json['isDismissedFromContactList'],
        'isPastDue': !exists(json, 'isPastDue') ? undefined : json['isPastDue'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'violationCount': !exists(json, 'violationCount') ? undefined : json['violationCount'],
        'violations': !exists(json, 'violations') ? undefined : ((json['violations'] as Array<any>).map(TrafficViolationInputRequestFromJSON)),
    };
}

export function CitationInputRequestToJSON(value?: CitationInputRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressDomainReqToJSON(value.address),
        'cdlStatus': value.cdlStatus,
        'citationIssueDate': value.citationIssueDate === undefined ? undefined : (value.citationIssueDate.toISOString()),
        'citationIssueDateUTC': TimestampReqToJSON(value.citationIssueDateUTC),
        'clientEmailAddress': value.clientEmailAddress,
        'clientFirstName': value.clientFirstName,
        'court': CourtInputRequestToJSON(value.court),
        'documentUrlToConvert': value.documentUrlToConvert,
        'fineAmount': value.fineAmount,
        'involvesAccident': value.involvesAccident,
        'isDismissedFromContactList': value.isDismissedFromContactList,
        'isPastDue': value.isPastDue,
        'state': value.state,
        'ticketNumber': value.ticketNumber,
        'userId': value.userId,
        'violationCount': value.violationCount,
        'violations': value.violations === undefined ? undefined : ((value.violations as Array<any>).map(TrafficViolationInputRequestToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum CitationInputRequestCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = 'CDL_IN_COMMERCIAL_VEHICLE',
    CDLINPERSONALVEHICLE = 'CDL_IN_PERSONAL_VEHICLE',
    NOCDL = 'NO_CDL'
}
/**
* @export
* @enum {string}
*/
export enum CitationInputRequestStateEnum {
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

