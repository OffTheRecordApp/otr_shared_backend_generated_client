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
import { AddressDomainReqFromJSON, AddressDomainReqToJSON, CourtDomainReqFromJSON, CourtDomainReqToJSON, PureDateFromJSON, PureDateToJSON, TimestampReqFromJSON, TimestampReqToJSON, ViolationModelFromJSON, ViolationModelToJSON, } from './';
export function CitationModelReqFromJSON(json) {
    return CitationModelReqFromJSONTyped(json, false);
}
export function CitationModelReqFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !exists(json, 'address') ? undefined : AddressDomainReqFromJSON(json['address']),
        'cdlStatus': !exists(json, 'cdlStatus') ? undefined : json['cdlStatus'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'citationIssueDate': !exists(json, 'citationIssueDate') ? undefined : PureDateFromJSON(json['citationIssueDate']),
        'citationIssueDateUTC': !exists(json, 'citationIssueDateUTC') ? undefined : TimestampReqFromJSON(json['citationIssueDateUTC']),
        'citationLockedForClient': !exists(json, 'citationLockedForClient') ? undefined : json['citationLockedForClient'],
        'clientEmailAddress': !exists(json, 'clientEmailAddress') ? undefined : json['clientEmailAddress'],
        'clientFirstName': !exists(json, 'clientFirstName') ? undefined : json['clientFirstName'],
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'court': !exists(json, 'court') ? undefined : CourtDomainReqFromJSON(json['court']),
        'creationDateUTC': !exists(json, 'creationDateUTC') ? undefined : TimestampReqFromJSON(json['creationDateUTC']),
        'documentUrlToConvert': !exists(json, 'documentUrlToConvert') ? undefined : json['documentUrlToConvert'],
        'fineAmount': !exists(json, 'fineAmount') ? undefined : json['fineAmount'],
        'hasCase': !exists(json, 'hasCase') ? undefined : json['hasCase'],
        'hubspotContactId': !exists(json, 'hubspotContactId') ? undefined : json['hubspotContactId'],
        'involvesAccident': !exists(json, 'involvesAccident') ? undefined : json['involvesAccident'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'isDismissedFromContactList': !exists(json, 'isDismissedFromContactList') ? undefined : json['isDismissedFromContactList'],
        'isPastDue': !exists(json, 'isPastDue') ? undefined : json['isPastDue'],
        'originalPointCount': !exists(json, 'originalPointCount') ? undefined : json['originalPointCount'],
        'signedTicketImageUrl': !exists(json, 'signedTicketImageUrl') ? undefined : json['signedTicketImageUrl'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'ticketImageUrl': !exists(json, 'ticketImageUrl') ? undefined : json['ticketImageUrl'],
        'ticketLocationTags': !exists(json, 'ticketLocationTags') ? undefined : json['ticketLocationTags'],
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'violationCategoryName': !exists(json, 'violationCategoryName') ? undefined : json['violationCategoryName'],
        'violationCount': !exists(json, 'violationCount') ? undefined : json['violationCount'],
        'violations': !exists(json, 'violations') ? undefined : (json['violations'].map(ViolationModelFromJSON)),
    };
}
export function CitationModelReqToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': AddressDomainReqToJSON(value.address),
        'cdlStatus': value.cdlStatus,
        'citationId': value.citationId,
        'citationIssueDate': PureDateToJSON(value.citationIssueDate),
        'citationIssueDateUTC': TimestampReqToJSON(value.citationIssueDateUTC),
        'citationLockedForClient': value.citationLockedForClient,
        'clientEmailAddress': value.clientEmailAddress,
        'clientFirstName': value.clientFirstName,
        'clientType': value.clientType,
        'court': CourtDomainReqToJSON(value.court),
        'creationDateUTC': TimestampReqToJSON(value.creationDateUTC),
        'documentUrlToConvert': value.documentUrlToConvert,
        'fineAmount': value.fineAmount,
        'hasCase': value.hasCase,
        'hubspotContactId': value.hubspotContactId,
        'involvesAccident': value.involvesAccident,
        'isDeleted': value.isDeleted,
        'isDismissedFromContactList': value.isDismissedFromContactList,
        'isPastDue': value.isPastDue,
        'originalPointCount': value.originalPointCount,
        'signedTicketImageUrl': value.signedTicketImageUrl,
        'state': value.state,
        'ticketImageUrl': value.ticketImageUrl,
        'ticketLocationTags': value.ticketLocationTags,
        'ticketNumber': value.ticketNumber,
        'userId': value.userId,
        'violationCategoryName': value.violationCategoryName,
        'violationCount': value.violationCount,
        'violations': value.violations === undefined ? undefined : (value.violations.map(ViolationModelToJSON)),
    };
}
/**
* @export
* @enum {string}
*/
export var CitationModelReqCdlStatusEnum;
(function (CitationModelReqCdlStatusEnum) {
    CitationModelReqCdlStatusEnum["CDLINCOMMERCIALVEHICLE"] = "CDL_IN_COMMERCIAL_VEHICLE";
    CitationModelReqCdlStatusEnum["CDLINPERSONALVEHICLE"] = "CDL_IN_PERSONAL_VEHICLE";
    CitationModelReqCdlStatusEnum["NOCDL"] = "NO_CDL";
})(CitationModelReqCdlStatusEnum || (CitationModelReqCdlStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var CitationModelReqClientTypeEnum;
(function (CitationModelReqClientTypeEnum) {
    CitationModelReqClientTypeEnum["ANDROID"] = "ANDROID";
    CitationModelReqClientTypeEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    CitationModelReqClientTypeEnum["DMVGO"] = "DMV_GO";
    CitationModelReqClientTypeEnum["DMVORG"] = "DMV_ORG";
    CitationModelReqClientTypeEnum["EMAIL"] = "EMAIL";
    CitationModelReqClientTypeEnum["FRESHDESK"] = "FRESH_DESK";
    CitationModelReqClientTypeEnum["IOS"] = "IOS";
    CitationModelReqClientTypeEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    CitationModelReqClientTypeEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    CitationModelReqClientTypeEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    CitationModelReqClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    CitationModelReqClientTypeEnum["OTREXPLORER"] = "OTR_EXPLORER";
    CitationModelReqClientTypeEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    CitationModelReqClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    CitationModelReqClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    CitationModelReqClientTypeEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    CitationModelReqClientTypeEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    CitationModelReqClientTypeEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    CitationModelReqClientTypeEnum["OTRWIDGET"] = "OTR_WIDGET";
    CitationModelReqClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(CitationModelReqClientTypeEnum || (CitationModelReqClientTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var CitationModelReqStateEnum;
(function (CitationModelReqStateEnum) {
    CitationModelReqStateEnum["AK"] = "AK";
    CitationModelReqStateEnum["AL"] = "AL";
    CitationModelReqStateEnum["AR"] = "AR";
    CitationModelReqStateEnum["AZ"] = "AZ";
    CitationModelReqStateEnum["CA"] = "CA";
    CitationModelReqStateEnum["CO"] = "CO";
    CitationModelReqStateEnum["CT"] = "CT";
    CitationModelReqStateEnum["DC"] = "DC";
    CitationModelReqStateEnum["DE"] = "DE";
    CitationModelReqStateEnum["FL"] = "FL";
    CitationModelReqStateEnum["GA"] = "GA";
    CitationModelReqStateEnum["HI"] = "HI";
    CitationModelReqStateEnum["IA"] = "IA";
    CitationModelReqStateEnum["ID"] = "ID";
    CitationModelReqStateEnum["IL"] = "IL";
    CitationModelReqStateEnum["IN"] = "IN";
    CitationModelReqStateEnum["KS"] = "KS";
    CitationModelReqStateEnum["KY"] = "KY";
    CitationModelReqStateEnum["LA"] = "LA";
    CitationModelReqStateEnum["MA"] = "MA";
    CitationModelReqStateEnum["MD"] = "MD";
    CitationModelReqStateEnum["ME"] = "ME";
    CitationModelReqStateEnum["MI"] = "MI";
    CitationModelReqStateEnum["MN"] = "MN";
    CitationModelReqStateEnum["MO"] = "MO";
    CitationModelReqStateEnum["MS"] = "MS";
    CitationModelReqStateEnum["MT"] = "MT";
    CitationModelReqStateEnum["NC"] = "NC";
    CitationModelReqStateEnum["ND"] = "ND";
    CitationModelReqStateEnum["NE"] = "NE";
    CitationModelReqStateEnum["NH"] = "NH";
    CitationModelReqStateEnum["NJ"] = "NJ";
    CitationModelReqStateEnum["NM"] = "NM";
    CitationModelReqStateEnum["NV"] = "NV";
    CitationModelReqStateEnum["NY"] = "NY";
    CitationModelReqStateEnum["OH"] = "OH";
    CitationModelReqStateEnum["OK"] = "OK";
    CitationModelReqStateEnum["OR"] = "OR";
    CitationModelReqStateEnum["PA"] = "PA";
    CitationModelReqStateEnum["RI"] = "RI";
    CitationModelReqStateEnum["SC"] = "SC";
    CitationModelReqStateEnum["SD"] = "SD";
    CitationModelReqStateEnum["TN"] = "TN";
    CitationModelReqStateEnum["TX"] = "TX";
    CitationModelReqStateEnum["UT"] = "UT";
    CitationModelReqStateEnum["VA"] = "VA";
    CitationModelReqStateEnum["VT"] = "VT";
    CitationModelReqStateEnum["WA"] = "WA";
    CitationModelReqStateEnum["WI"] = "WI";
    CitationModelReqStateEnum["WV"] = "WV";
    CitationModelReqStateEnum["WY"] = "WY";
})(CitationModelReqStateEnum || (CitationModelReqStateEnum = {}));