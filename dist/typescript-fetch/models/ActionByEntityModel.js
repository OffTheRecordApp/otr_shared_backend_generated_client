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
export function ActionByEntityModelFromJSON(json) {
    return ActionByEntityModelFromJSONTyped(json, false);
}
export function ActionByEntityModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionDateUtc': !exists(json, 'actionDateUtc') ? undefined : (new Date(json['actionDateUtc'])),
        'actionId': !exists(json, 'actionId') ? undefined : json['actionId'],
        'actionNote': !exists(json, 'actionNote') ? undefined : json['actionNote'],
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'authorFirstName': !exists(json, 'authorFirstName') ? undefined : json['authorFirstName'],
        'authorLastName': !exists(json, 'authorLastName') ? undefined : json['authorLastName'],
        'authorUserId': !exists(json, 'authorUserId') ? undefined : json['authorUserId'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseStatus': !exists(json, 'caseStatus') ? undefined : json['caseStatus'],
        'caseStatusCategory': !exists(json, 'caseStatusCategory') ? undefined : json['caseStatusCategory'],
        'customerFirstName': !exists(json, 'customerFirstName') ? undefined : json['customerFirstName'],
        'customerLastName': !exists(json, 'customerLastName') ? undefined : json['customerLastName'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
    };
}
export function ActionByEntityModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionDateUtc': value.actionDateUtc === undefined ? undefined : (value.actionDateUtc.toISOString()),
        'actionId': value.actionId,
        'actionNote': value.actionNote,
        'actionType': value.actionType,
        'authorFirstName': value.authorFirstName,
        'authorLastName': value.authorLastName,
        'authorUserId': value.authorUserId,
        'caseId': value.caseId,
        'caseStatus': value.caseStatus,
        'caseStatusCategory': value.caseStatusCategory,
        'customerFirstName': value.customerFirstName,
        'customerLastName': value.customerLastName,
        'isDeleted': value.isDeleted,
        'profilePictureUrl': value.profilePictureUrl,
    };
}
/**
* @export
* @enum {string}
*/
export var ActionByEntityModelActionTypeEnum;
(function (ActionByEntityModelActionTypeEnum) {
    ActionByEntityModelActionTypeEnum["CASEACCEPT"] = "CASE_ACCEPT";
    ActionByEntityModelActionTypeEnum["CASECOUNTERACCEPTED"] = "CASE_COUNTER_ACCEPTED";
    ActionByEntityModelActionTypeEnum["CASECOUNTERDECLINED"] = "CASE_COUNTER_DECLINED";
    ActionByEntityModelActionTypeEnum["CASECOUNTERINITIATED"] = "CASE_COUNTER_INITIATED";
    ActionByEntityModelActionTypeEnum["CASECOUNTERWITHDRAWN"] = "CASE_COUNTER_WITHDRAWN";
    ActionByEntityModelActionTypeEnum["CASEDECLINE"] = "CASE_DECLINE";
    ActionByEntityModelActionTypeEnum["CITATIONDATAEXTRACTED"] = "CITATION_DATA_EXTRACTED";
    ActionByEntityModelActionTypeEnum["COURTDATEREMOVED"] = "COURT_DATE_REMOVED";
    ActionByEntityModelActionTypeEnum["COURTDATESCHEDULED"] = "COURT_DATE_SCHEDULED";
    ActionByEntityModelActionTypeEnum["DISCOVERYRECEIVED"] = "DISCOVERY_RECEIVED";
    ActionByEntityModelActionTypeEnum["DISCOVERYREQUESTED"] = "DISCOVERY_REQUESTED";
    ActionByEntityModelActionTypeEnum["DISPUTEFILED"] = "DISPUTE_FILED";
    ActionByEntityModelActionTypeEnum["DRIVERLICENSEREQUESTED"] = "DRIVER_LICENSE_REQUESTED";
    ActionByEntityModelActionTypeEnum["FAILEDPAYMENTATTEMPT"] = "FAILED_PAYMENT_ATTEMPT";
    ActionByEntityModelActionTypeEnum["NOTICEOFAPPEARANCEFILED"] = "NOTICE_OF_APPEARANCE_FILED";
    ActionByEntityModelActionTypeEnum["OTHER"] = "OTHER";
    ActionByEntityModelActionTypeEnum["OVERDUEBALANCEPAID"] = "OVERDUE_BALANCE_PAID";
    ActionByEntityModelActionTypeEnum["REVIEWEDBYLAWFIRM"] = "REVIEWED_BY_LAWFIRM";
    ActionByEntityModelActionTypeEnum["SOCIALMEDIAASK"] = "SOCIAL_MEDIA_ASK";
    ActionByEntityModelActionTypeEnum["TICKETMAILEDTOCOURT"] = "TICKET_MAILED_TO_COURT";
})(ActionByEntityModelActionTypeEnum || (ActionByEntityModelActionTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var ActionByEntityModelCaseStatusEnum;
(function (ActionByEntityModelCaseStatusEnum) {
    ActionByEntityModelCaseStatusEnum["AMENDEDDOWNWITHINCLASS"] = "AMENDED_DOWN_WITHIN_CLASS";
    ActionByEntityModelCaseStatusEnum["AMENDEDFULLFINE"] = "AMENDED_FULL_FINE";
    ActionByEntityModelCaseStatusEnum["AMENDEDINCREASEDFINE"] = "AMENDED_INCREASED_FINE";
    ActionByEntityModelCaseStatusEnum["AMENDEDNOFINE"] = "AMENDED_NO_FINE";
    ActionByEntityModelCaseStatusEnum["AMENDEDREDUCEDFINE"] = "AMENDED_REDUCED_FINE";
    ActionByEntityModelCaseStatusEnum["AMENDEDTOINFRACTION"] = "AMENDED_TO_INFRACTION";
    ActionByEntityModelCaseStatusEnum["AMENDEDTONMV"] = "AMENDED_TO_NMV";
    ActionByEntityModelCaseStatusEnum["CANCELLEDATTORNEYATFAULT"] = "CANCELLED_ATTORNEY_AT_FAULT";
    ActionByEntityModelCaseStatusEnum["CANCELLEDBYLAWFIRM"] = "CANCELLED_BY_LAWFIRM";
    ActionByEntityModelCaseStatusEnum["CANCELLEDBYUSER"] = "CANCELLED_BY_USER";
    ActionByEntityModelCaseStatusEnum["CANCELLEDDUPLICATE"] = "CANCELLED_DUPLICATE";
    ActionByEntityModelCaseStatusEnum["CANCELLEDNMV"] = "CANCELLED_NMV";
    ActionByEntityModelCaseStatusEnum["CANCELLEDNONPAYMENT"] = "CANCELLED_NON_PAYMENT";
    ActionByEntityModelCaseStatusEnum["CANCELLEDNOLAWFIRM"] = "CANCELLED_NO_LAWFIRM";
    ActionByEntityModelCaseStatusEnum["CANCELLEDOVERDUE"] = "CANCELLED_OVERDUE";
    ActionByEntityModelCaseStatusEnum["CANCELLEDTOOSHORTNOTICE"] = "CANCELLED_TOO_SHORT_NOTICE";
    ActionByEntityModelCaseStatusEnum["CASEINPROGRESS"] = "CASE_IN_PROGRESS";
    ActionByEntityModelCaseStatusEnum["CLIENTCONFIRMED"] = "CLIENT_CONFIRMED";
    ActionByEntityModelCaseStatusEnum["CLIENTCONFIRMEDUNPAID"] = "CLIENT_CONFIRMED_UNPAID";
    ActionByEntityModelCaseStatusEnum["CLIENTFIREDLAWFIRM"] = "CLIENT_FIRED_LAWFIRM";
    ActionByEntityModelCaseStatusEnum["CLIENTFORCEDLOSS"] = "CLIENT_FORCED_LOSS";
    ActionByEntityModelCaseStatusEnum["CLIENTPAIDFINE"] = "CLIENT_PAID_FINE";
    ActionByEntityModelCaseStatusEnum["CLIENTUNRESPONSIVE"] = "CLIENT_UNRESPONSIVE";
    ActionByEntityModelCaseStatusEnum["DEFERRED"] = "DEFERRED";
    ActionByEntityModelCaseStatusEnum["DISMISSED"] = "DISMISSED";
    ActionByEntityModelCaseStatusEnum["DIVERSION"] = "DIVERSION";
    ActionByEntityModelCaseStatusEnum["FEESDISPUTED"] = "FEES_DISPUTED";
    ActionByEntityModelCaseStatusEnum["FINEREDUCTIONONLY"] = "FINE_REDUCTION_ONLY";
    ActionByEntityModelCaseStatusEnum["LAWFIRMWITHDRAWN"] = "LAWFIRM_WITHDRAWN";
    ActionByEntityModelCaseStatusEnum["LOST"] = "LOST";
    ActionByEntityModelCaseStatusEnum["NOLAWFIRMAVAILABLE"] = "NO_LAWFIRM_AVAILABLE";
    ActionByEntityModelCaseStatusEnum["POINTREDUCTION"] = "POINT_REDUCTION";
    ActionByEntityModelCaseStatusEnum["REFUSEDBYLAWFIRM"] = "REFUSED_BY_LAWFIRM";
    ActionByEntityModelCaseStatusEnum["RESOLVEDNONPAYMENT"] = "RESOLVED_NON_PAYMENT";
    ActionByEntityModelCaseStatusEnum["STALE"] = "STALE";
    ActionByEntityModelCaseStatusEnum["TRAFFICSCHOOL"] = "TRAFFIC_SCHOOL";
    ActionByEntityModelCaseStatusEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(ActionByEntityModelCaseStatusEnum || (ActionByEntityModelCaseStatusEnum = {}));
/**
* @export
* @enum {string}
*/
export var ActionByEntityModelCaseStatusCategoryEnum;
(function (ActionByEntityModelCaseStatusCategoryEnum) {
    ActionByEntityModelCaseStatusCategoryEnum["ACTIVE"] = "ACTIVE";
    ActionByEntityModelCaseStatusCategoryEnum["CANCELLED"] = "CANCELLED";
    ActionByEntityModelCaseStatusCategoryEnum["RESOLVED"] = "RESOLVED";
    ActionByEntityModelCaseStatusCategoryEnum["UNCONFIRMED"] = "UNCONFIRMED";
})(ActionByEntityModelCaseStatusCategoryEnum || (ActionByEntityModelCaseStatusCategoryEnum = {}));