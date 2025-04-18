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
import { exists } from '../runtime';
import { AddressDomainFromJSON, AddressDomainToJSON, CourtDomainFromJSON, CourtDomainToJSON, PureDateFromJSON, PureDateToJSON, TimestampFromJSON, TimestampToJSON, ViolationModelFromJSON, ViolationModelToJSON, } from './';
export function MatchCitationModelFromJSON(json) {
    return MatchCitationModelFromJSONTyped(json, false);
}
export function MatchCitationModelFromJSONTyped(json, ignoreDiscriminator) {
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
        'hasCitationImage': !exists(json, 'hasCitationImage') ? undefined : json['hasCitationImage'],
        'involvesAccident': !exists(json, 'involvesAccident') ? undefined : json['involvesAccident'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'signedTicketImageUrl': !exists(json, 'signedTicketImageUrl') ? undefined : json['signedTicketImageUrl'],
        'ticketImageUrl': !exists(json, 'ticketImageUrl') ? undefined : json['ticketImageUrl'],
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'violationCount': !exists(json, 'violationCount') ? undefined : json['violationCount'],
        'violations': !exists(json, 'violations') ? undefined : (json['violations'].map(ViolationModelFromJSON)),
    };
}
export function MatchCitationModelToJSON(value) {
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
        'hasCitationImage': value.hasCitationImage,
        'involvesAccident': value.involvesAccident,
        'isDeleted': value.isDeleted,
        'regionCode': value.regionCode,
        'signedTicketImageUrl': value.signedTicketImageUrl,
        'ticketImageUrl': value.ticketImageUrl,
        'ticketNumber': value.ticketNumber,
        'violationCount': value.violationCount,
        'violations': value.violations === undefined ? undefined : (value.violations.map(ViolationModelToJSON)),
    };
}
/**
* @export
* @enum {string}
*/
export var MatchCitationModelCdlStatusEnum;
(function (MatchCitationModelCdlStatusEnum) {
    MatchCitationModelCdlStatusEnum["CDLINCOMMERCIALVEHICLE"] = "CDL_IN_COMMERCIAL_VEHICLE";
    MatchCitationModelCdlStatusEnum["CDLINPERSONALVEHICLE"] = "CDL_IN_PERSONAL_VEHICLE";
    MatchCitationModelCdlStatusEnum["NOCDL"] = "NO_CDL";
})(MatchCitationModelCdlStatusEnum || (MatchCitationModelCdlStatusEnum = {}));
