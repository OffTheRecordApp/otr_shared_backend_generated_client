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
    AddressDomain,
    AddressDomainFromJSON,
    AddressDomainFromJSONTyped,
    AddressDomainToJSON,
    CourtDomain,
    CourtDomainFromJSON,
    CourtDomainFromJSONTyped,
    CourtDomainToJSON,
    PureDate,
    PureDateFromJSON,
    PureDateFromJSONTyped,
    PureDateToJSON,
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
    ViolationModel,
    ViolationModelFromJSON,
    ViolationModelFromJSONTyped,
    ViolationModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface MatchCitationModel
 */
export interface MatchCitationModel {
    /**
     * 
     * @type {AddressDomain}
     * @memberof MatchCitationModel
     */
    address?: AddressDomain;
    /**
     * 
     * @type {string}
     * @memberof MatchCitationModel
     */
    cdlStatus?: MatchCitationModelCdlStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof MatchCitationModel
     */
    citationId?: number;
    /**
     * 
     * @type {PureDate}
     * @memberof MatchCitationModel
     */
    citationIssueDate?: PureDate;
    /**
     * 
     * @type {Timestamp}
     * @memberof MatchCitationModel
     */
    citationIssueDateUtc?: Timestamp;
    /**
     * 
     * @type {boolean}
     * @memberof MatchCitationModel
     */
    citationLockedForClient?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MatchCitationModel
     */
    clientEmailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchCitationModel
     */
    clientFirstName?: string;
    /**
     * 
     * @type {CourtDomain}
     * @memberof MatchCitationModel
     */
    court?: CourtDomain;
    /**
     * 
     * @type {string}
     * @memberof MatchCitationModel
     */
    documentUrlToConvert?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchCitationModel
     */
    fineAmount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MatchCitationModel
     */
    involvesAccident?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchCitationModel
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MatchCitationModel
     */
    regionCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchCitationModel
     */
    signedTicketImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchCitationModel
     */
    ticketImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchCitationModel
     */
    ticketNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchCitationModel
     */
    violationCount?: number;
    /**
     * 
     * @type {Array<ViolationModel>}
     * @memberof MatchCitationModel
     */
    violations?: Array<ViolationModel>;
}

export function MatchCitationModelFromJSON(json: any): MatchCitationModel {
    return MatchCitationModelFromJSONTyped(json, false);
}

export function MatchCitationModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchCitationModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressDomainFromJSON(json['address']),
        'cdlStatus': !exists(json, 'cdlStatus') ? undefined : json['cdlStatus'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'citationIssueDate': !exists(json, 'citationIssueDate') ? undefined : PureDateFromJSON(json['citationIssueDate']),
        'citationIssueDateUtc': !exists(json, 'citationIssueDateUtc') ? undefined : TimestampFromJSON(json['citationIssueDateUtc']),
        'citationLockedForClient': !exists(json, 'citationLockedForClient') ? undefined : json['citationLockedForClient'],
        'clientEmailAddress': !exists(json, 'clientEmailAddress') ? undefined : json['clientEmailAddress'],
        'clientFirstName': !exists(json, 'clientFirstName') ? undefined : json['clientFirstName'],
        'court': !exists(json, 'court') ? undefined : CourtDomainFromJSON(json['court']),
        'documentUrlToConvert': !exists(json, 'documentUrlToConvert') ? undefined : json['documentUrlToConvert'],
        'fineAmount': !exists(json, 'fineAmount') ? undefined : json['fineAmount'],
        'involvesAccident': !exists(json, 'involvesAccident') ? undefined : json['involvesAccident'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'signedTicketImageUrl': !exists(json, 'signedTicketImageUrl') ? undefined : json['signedTicketImageUrl'],
        'ticketImageUrl': !exists(json, 'ticketImageUrl') ? undefined : json['ticketImageUrl'],
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'violationCount': !exists(json, 'violationCount') ? undefined : json['violationCount'],
        'violations': !exists(json, 'violations') ? undefined : ((json['violations'] as Array<any>).map(ViolationModelFromJSON)),
    };
}

export function MatchCitationModelToJSON(value?: MatchCitationModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressDomainToJSON(value.address),
        'cdlStatus': value.cdlStatus,
        'citationId': value.citationId,
        'citationIssueDate': PureDateToJSON(value.citationIssueDate),
        'citationIssueDateUtc': TimestampToJSON(value.citationIssueDateUtc),
        'citationLockedForClient': value.citationLockedForClient,
        'clientEmailAddress': value.clientEmailAddress,
        'clientFirstName': value.clientFirstName,
        'court': CourtDomainToJSON(value.court),
        'documentUrlToConvert': value.documentUrlToConvert,
        'fineAmount': value.fineAmount,
        'involvesAccident': value.involvesAccident,
        'isDeleted': value.isDeleted,
        'regionCode': value.regionCode,
        'signedTicketImageUrl': value.signedTicketImageUrl,
        'ticketImageUrl': value.ticketImageUrl,
        'ticketNumber': value.ticketNumber,
        'violationCount': value.violationCount,
        'violations': value.violations === undefined ? undefined : ((value.violations as Array<any>).map(ViolationModelToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum MatchCitationModelCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = 'CDL_IN_COMMERCIAL_VEHICLE',
    CDLINPERSONALVEHICLE = 'CDL_IN_PERSONAL_VEHICLE',
    NOCDL = 'NO_CDL'
}


