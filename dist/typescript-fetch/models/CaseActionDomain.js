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
import { AuthorModelFromJSON, AuthorModelToJSON, } from './';
export function CaseActionDomainFromJSON(json) {
    return CaseActionDomainFromJSONTyped(json, false);
}
export function CaseActionDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionDate': !exists(json, 'actionDate') ? undefined : (new Date(json['actionDate'])),
        'actionNote': !exists(json, 'actionNote') ? undefined : json['actionNote'],
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'author': !exists(json, 'author') ? undefined : AuthorModelFromJSON(json['author']),
        'authorId': !exists(json, 'authorId') ? undefined : json['authorId'],
        'authorName': !exists(json, 'authorName') ? undefined : json['authorName'],
        'caseActionId': !exists(json, 'caseActionId') ? undefined : json['caseActionId'],
        'courtDateActionNote': !exists(json, 'courtDateActionNote') ? undefined : json['courtDateActionNote'],
        'courtDateActionTitle': !exists(json, 'courtDateActionTitle') ? undefined : json['courtDateActionTitle'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'label1': !exists(json, 'label1') ? undefined : json['label1'],
        'label2': !exists(json, 'label2') ? undefined : json['label2'],
    };
}
export function CaseActionDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionDate': value.actionDate === undefined ? undefined : (value.actionDate.toISOString()),
        'actionNote': value.actionNote,
        'actionType': value.actionType,
        'author': AuthorModelToJSON(value.author),
        'authorId': value.authorId,
        'authorName': value.authorName,
        'caseActionId': value.caseActionId,
        'courtDateActionNote': value.courtDateActionNote,
        'courtDateActionTitle': value.courtDateActionTitle,
        'isDeleted': value.isDeleted,
        'label1': value.label1,
        'label2': value.label2,
    };
}
/**
* @export
* @enum {string}
*/
export var CaseActionDomainActionTypeEnum;
(function (CaseActionDomainActionTypeEnum) {
    CaseActionDomainActionTypeEnum["CASEACCEPT"] = "CASE_ACCEPT";
    CaseActionDomainActionTypeEnum["CASECOUNTERACCEPTED"] = "CASE_COUNTER_ACCEPTED";
    CaseActionDomainActionTypeEnum["CASECOUNTERDECLINED"] = "CASE_COUNTER_DECLINED";
    CaseActionDomainActionTypeEnum["CASECOUNTERINITIATED"] = "CASE_COUNTER_INITIATED";
    CaseActionDomainActionTypeEnum["CASECOUNTERWITHDRAWN"] = "CASE_COUNTER_WITHDRAWN";
    CaseActionDomainActionTypeEnum["CASEDECLINE"] = "CASE_DECLINE";
    CaseActionDomainActionTypeEnum["CITATIONDATAEXTRACTED"] = "CITATION_DATA_EXTRACTED";
    CaseActionDomainActionTypeEnum["COURTDATEREMOVED"] = "COURT_DATE_REMOVED";
    CaseActionDomainActionTypeEnum["COURTDATESCHEDULED"] = "COURT_DATE_SCHEDULED";
    CaseActionDomainActionTypeEnum["DISCOVERYRECEIVED"] = "DISCOVERY_RECEIVED";
    CaseActionDomainActionTypeEnum["DISCOVERYREQUESTED"] = "DISCOVERY_REQUESTED";
    CaseActionDomainActionTypeEnum["DISPUTEFILED"] = "DISPUTE_FILED";
    CaseActionDomainActionTypeEnum["DRIVERLICENSEREQUESTED"] = "DRIVER_LICENSE_REQUESTED";
    CaseActionDomainActionTypeEnum["FAILEDPAYMENTATTEMPT"] = "FAILED_PAYMENT_ATTEMPT";
    CaseActionDomainActionTypeEnum["NOTICEOFAPPEARANCEFILED"] = "NOTICE_OF_APPEARANCE_FILED";
    CaseActionDomainActionTypeEnum["OTHER"] = "OTHER";
    CaseActionDomainActionTypeEnum["OVERDUEBALANCEPAID"] = "OVERDUE_BALANCE_PAID";
    CaseActionDomainActionTypeEnum["REVIEWEDBYLAWFIRM"] = "REVIEWED_BY_LAWFIRM";
    CaseActionDomainActionTypeEnum["SOCIALMEDIAASK"] = "SOCIAL_MEDIA_ASK";
    CaseActionDomainActionTypeEnum["TICKETMAILEDTOCOURT"] = "TICKET_MAILED_TO_COURT";
})(CaseActionDomainActionTypeEnum || (CaseActionDomainActionTypeEnum = {}));
