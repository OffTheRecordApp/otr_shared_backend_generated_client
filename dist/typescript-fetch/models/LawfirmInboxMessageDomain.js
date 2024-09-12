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
import { PureDateFromJSON, PureDateToJSON, } from './';
export function LawfirmInboxMessageDomainFromJSON(json) {
    return LawfirmInboxMessageDomainFromJSONTyped(json, false);
}
export function LawfirmInboxMessageDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attachment': !exists(json, 'attachment') ? undefined : json['attachment'],
        'authorFirstName': !exists(json, 'authorFirstName') ? undefined : json['authorFirstName'],
        'authorLastName': !exists(json, 'authorLastName') ? undefined : json['authorLastName'],
        'authorRoleType': !exists(json, 'authorRoleType') ? undefined : json['authorRoleType'],
        'authorUserId': !exists(json, 'authorUserId') ? undefined : json['authorUserId'],
        'caseActionNote': !exists(json, 'caseActionNote') ? undefined : json['caseActionNote'],
        'caseArchived': !exists(json, 'caseArchived') ? undefined : json['caseArchived'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseStatus': !exists(json, 'caseStatus') ? undefined : json['caseStatus'],
        'caseStatusCategory': !exists(json, 'caseStatusCategory') ? undefined : json['caseStatusCategory'],
        'citationIssueDate': !exists(json, 'citationIssueDate') ? undefined : PureDateFromJSON(json['citationIssueDate']),
        'citationIssueDateUtc': !exists(json, 'citationIssueDateUtc') ? undefined : (new Date(json['citationIssueDateUtc'])),
        'courtDateUtc': !exists(json, 'courtDateUtc') ? undefined : (new Date(json['courtDateUtc'])),
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'customerFirstName': !exists(json, 'customerFirstName') ? undefined : json['customerFirstName'],
        'customerLastName': !exists(json, 'customerLastName') ? undefined : json['customerLastName'],
        'hasFlagMessage': !exists(json, 'hasFlagMessage') ? undefined : json['hasFlagMessage'],
        'hasStarMessage': !exists(json, 'hasStarMessage') ? undefined : json['hasStarMessage'],
        'lawfirmCaseDecisionStatus': !exists(json, 'lawfirmCaseDecisionStatus') ? undefined : json['lawfirmCaseDecisionStatus'],
        'lawfirmReceiptDateUtc': !exists(json, 'lawfirmReceiptDateUtc') ? undefined : (new Date(json['lawfirmReceiptDateUtc'])),
        'messageBody': !exists(json, 'messageBody') ? undefined : json['messageBody'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'messageSentDateUtc': !exists(json, 'messageSentDateUtc') ? undefined : (new Date(json['messageSentDateUtc'])),
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
    };
}
export function LawfirmInboxMessageDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attachment': value.attachment,
        'authorFirstName': value.authorFirstName,
        'authorLastName': value.authorLastName,
        'authorRoleType': value.authorRoleType,
        'authorUserId': value.authorUserId,
        'caseActionNote': value.caseActionNote,
        'caseArchived': value.caseArchived,
        'caseId': value.caseId,
        'caseStatus': value.caseStatus,
        'caseStatusCategory': value.caseStatusCategory,
        'citationIssueDate': PureDateToJSON(value.citationIssueDate),
        'citationIssueDateUtc': value.citationIssueDateUtc === undefined ? undefined : (value.citationIssueDateUtc.toISOString()),
        'courtDateUtc': value.courtDateUtc === undefined ? undefined : (value.courtDateUtc.toISOString()),
        'courtName': value.courtName,
        'customerFirstName': value.customerFirstName,
        'customerLastName': value.customerLastName,
        'hasFlagMessage': value.hasFlagMessage,
        'hasStarMessage': value.hasStarMessage,
        'lawfirmCaseDecisionStatus': value.lawfirmCaseDecisionStatus,
        'lawfirmReceiptDateUtc': value.lawfirmReceiptDateUtc === undefined ? undefined : (value.lawfirmReceiptDateUtc.toISOString()),
        'messageBody': value.messageBody,
        'messageId': value.messageId,
        'messageSentDateUtc': value.messageSentDateUtc === undefined ? undefined : (value.messageSentDateUtc.toISOString()),
        'profilePictureUrl': value.profilePictureUrl,
    };
}
/**
* @export
* @enum {string}
*/
export var LawfirmInboxMessageDomainAuthorRoleTypeEnum;
(function (LawfirmInboxMessageDomainAuthorRoleTypeEnum) {
    LawfirmInboxMessageDomainAuthorRoleTypeEnum["ADMIN"] = "ADMIN";
    LawfirmInboxMessageDomainAuthorRoleTypeEnum["DEFENDANT"] = "DEFENDANT";
    LawfirmInboxMessageDomainAuthorRoleTypeEnum["LAWFIRMADMIN"] = "LAWFIRM_ADMIN";
    LawfirmInboxMessageDomainAuthorRoleTypeEnum["LAWYER"] = "LAWYER";
    LawfirmInboxMessageDomainAuthorRoleTypeEnum["PARTNER"] = "PARTNER";
    LawfirmInboxMessageDomainAuthorRoleTypeEnum["UNKNOWN"] = "UNKNOWN";
})(LawfirmInboxMessageDomainAuthorRoleTypeEnum || (LawfirmInboxMessageDomainAuthorRoleTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawfirmInboxMessageDomainCaseStatusEnum;
(function (LawfirmInboxMessageDomainCaseStatusEnum) {
    LawfirmInboxMessageDomainCaseStatusEnum["AMENDEDDOWNWITHINCLASS"] = "AMENDED_DOWN_WITHIN_CLASS";
    LawfirmInboxMessageDomainCaseStatusEnum["AMENDEDFULLFINE"] = "AMENDED_FULL_FINE";
    LawfirmInboxMessageDomainCaseStatusEnum["AMENDEDINCREASEDFINE"] = "AMENDED_INCREASED_FINE";
    LawfirmInboxMessageDomainCaseStatusEnum["AMENDEDNOFINE"] = "AMENDED_NO_FINE";
    LawfirmInboxMessageDomainCaseStatusEnum["AMENDEDREDUCEDFINE"] = "AMENDED_REDUCED_FINE";
    LawfirmInboxMessageDomainCaseStatusEnum["AMENDEDTOINFRACTION"] = "AMENDED_TO_INFRACTION";
    LawfirmInboxMessageDomainCaseStatusEnum["AMENDEDTONMV"] = "AMENDED_TO_NMV";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDATTORNEYATFAULT"] = "CANCELLED_ATTORNEY_AT_FAULT";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDBYLAWFIRM"] = "CANCELLED_BY_LAWFIRM";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDBYUSER"] = "CANCELLED_BY_USER";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDDUPLICATE"] = "CANCELLED_DUPLICATE";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDNMV"] = "CANCELLED_NMV";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDNONPAYMENT"] = "CANCELLED_NON_PAYMENT";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDNOLAWFIRM"] = "CANCELLED_NO_LAWFIRM";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDOVERDUE"] = "CANCELLED_OVERDUE";
    LawfirmInboxMessageDomainCaseStatusEnum["CANCELLEDTOOSHORTNOTICE"] = "CANCELLED_TOO_SHORT_NOTICE";
    LawfirmInboxMessageDomainCaseStatusEnum["CASEINPROGRESS"] = "CASE_IN_PROGRESS";
    LawfirmInboxMessageDomainCaseStatusEnum["CLIENTCONFIRMED"] = "CLIENT_CONFIRMED";
    LawfirmInboxMessageDomainCaseStatusEnum["CLIENTCONFIRMEDUNPAID"] = "CLIENT_CONFIRMED_UNPAID";
    LawfirmInboxMessageDomainCaseStatusEnum["CLIENTFIREDLAWFIRM"] = "CLIENT_FIRED_LAWFIRM";
    LawfirmInboxMessageDomainCaseStatusEnum["CLIENTFORCEDLOSS"] = "CLIENT_FORCED_LOSS";
    LawfirmInboxMessageDomainCaseStatusEnum["CLIENTPAIDFINE"] = "CLIENT_PAID_FINE";
    LawfirmInboxMessageDomainCaseStatusEnum["CLIENTUNRESPONSIVE"] = "CLIENT_UNRESPONSIVE";
    LawfirmInboxMessageDomainCaseStatusEnum["DEFERRED"] = "DEFERRED";
    LawfirmInboxMessageDomainCaseStatusEnum["DISMISSED"] = "DISMISSED";
    LawfirmInboxMessageDomainCaseStatusEnum["DIVERSION"] = "DIVERSION";
    LawfirmInboxMessageDomainCaseStatusEnum["FEESDISPUTED"] = "FEES_DISPUTED";
    LawfirmInboxMessageDomainCaseStatusEnum["FINEREDUCTIONONLY"] = "FINE_REDUCTION_ONLY";
    LawfirmInboxMessageDomainCaseStatusEnum["LAWFIRMWITHDRAWN"] = "LAWFIRM_WITHDRAWN";
    LawfirmInboxMessageDomainCaseStatusEnum["LOST"] = "LOST";
    LawfirmInboxMessageDomainCaseStatusEnum["NOLAWFIRMAVAILABLE"] = "NO_LAWFIRM_AVAILABLE";
    LawfirmInboxMessageDomainCaseStatusEnum["POINTREDUCTION"] = "POINT_REDUCTION";
    LawfirmInboxMessageDomainCaseStatusEnum["REFUSEDBYLAWFIRM"] = "REFUSED_BY_LAWFIRM";
    LawfirmInboxMessageDomainCaseStatusEnum["RESOLVEDNONPAYMENT"] = "RESOLVED_NON_PAYMENT";
    LawfirmInboxMessageDomainCaseStatusEnum["STALE"] = "STALE";
    LawfirmInboxMessageDomainCaseStatusEnum["TRAFFICSCHOOL"] = "TRAFFIC_SCHOOL";
    LawfirmInboxMessageDomainCaseStatusEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(LawfirmInboxMessageDomainCaseStatusEnum || (LawfirmInboxMessageDomainCaseStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawfirmInboxMessageDomainCaseStatusCategoryEnum;
(function (LawfirmInboxMessageDomainCaseStatusCategoryEnum) {
    LawfirmInboxMessageDomainCaseStatusCategoryEnum["ACTIVE"] = "ACTIVE";
    LawfirmInboxMessageDomainCaseStatusCategoryEnum["CANCELLED"] = "CANCELLED";
    LawfirmInboxMessageDomainCaseStatusCategoryEnum["RESOLVED"] = "RESOLVED";
    LawfirmInboxMessageDomainCaseStatusCategoryEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(LawfirmInboxMessageDomainCaseStatusCategoryEnum || (LawfirmInboxMessageDomainCaseStatusCategoryEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum;
(function (LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum) {
    LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum["ACCEPTED"] = "ACCEPTED";
    LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum["CREATED"] = "CREATED";
    LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum["DECLINED"] = "DECLINED";
    LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum["EXPIRED"] = "EXPIRED";
    LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum["PENDING"] = "PENDING";
    LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum["REMATCHED"] = "REMATCHED";
    LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum["REMATCHEDREFERRAL"] = "REMATCHED_REFERRAL";
})(LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum || (LawfirmInboxMessageDomainLawfirmCaseDecisionStatusEnum = {}));