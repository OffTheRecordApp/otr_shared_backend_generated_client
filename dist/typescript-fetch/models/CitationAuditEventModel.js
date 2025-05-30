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
export function CitationAuditEventModelFromJSON(json) {
    return CitationAuditEventModelFromJSONTyped(json, false);
}
export function CitationAuditEventModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorName': !exists(json, 'authorName') ? undefined : json['authorName'],
        'citationEventId': !exists(json, 'citationEventId') ? undefined : json['citationEventId'],
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'event': !exists(json, 'event') ? undefined : json['event'],
        'eventDate': !exists(json, 'eventDate') ? undefined : (new Date(json['eventDate'])),
        'eventId': !exists(json, 'eventId') ? undefined : json['eventId'],
        'newValue': !exists(json, 'newValue') ? undefined : json['newValue'],
        'oldValue': !exists(json, 'oldValue') ? undefined : json['oldValue'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function CitationAuditEventModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorName': value.authorName,
        'citationEventId': value.citationEventId,
        'clientType': value.clientType,
        'event': value.event,
        'eventDate': value.eventDate === undefined ? undefined : (value.eventDate.toISOString()),
        'eventId': value.eventId,
        'newValue': value.newValue,
        'oldValue': value.oldValue,
        'subject': value.subject,
        'userId': value.userId,
    };
}
/**
* @export
* @enum {string}
*/
export var CitationAuditEventModelClientTypeEnum;
(function (CitationAuditEventModelClientTypeEnum) {
    CitationAuditEventModelClientTypeEnum["ANDROID"] = "ANDROID";
    CitationAuditEventModelClientTypeEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    CitationAuditEventModelClientTypeEnum["DMVGO"] = "DMV_GO";
    CitationAuditEventModelClientTypeEnum["DMVORG"] = "DMV_ORG";
    CitationAuditEventModelClientTypeEnum["EMAIL"] = "EMAIL";
    CitationAuditEventModelClientTypeEnum["FRESHDESK"] = "FRESH_DESK";
    CitationAuditEventModelClientTypeEnum["IOS"] = "IOS";
    CitationAuditEventModelClientTypeEnum["LOCALHOST"] = "LOCALHOST";
    CitationAuditEventModelClientTypeEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    CitationAuditEventModelClientTypeEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    CitationAuditEventModelClientTypeEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    CitationAuditEventModelClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    CitationAuditEventModelClientTypeEnum["OTREXPLORER"] = "OTR_EXPLORER";
    CitationAuditEventModelClientTypeEnum["OTRJOBSCHEDULER"] = "OTR_JOB_SCHEDULER";
    CitationAuditEventModelClientTypeEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    CitationAuditEventModelClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    CitationAuditEventModelClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    CitationAuditEventModelClientTypeEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    CitationAuditEventModelClientTypeEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    CitationAuditEventModelClientTypeEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    CitationAuditEventModelClientTypeEnum["OTRWIDGET"] = "OTR_WIDGET";
    CitationAuditEventModelClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(CitationAuditEventModelClientTypeEnum || (CitationAuditEventModelClientTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var CitationAuditEventModelEventEnum;
(function (CitationAuditEventModelEventEnum) {
    CitationAuditEventModelEventEnum["ACCOUNTCOVERAGEADDED"] = "ACCOUNT_COVERAGE_ADDED";
    CitationAuditEventModelEventEnum["ACCOUNTCOVERAGEREMOVED"] = "ACCOUNT_COVERAGE_REMOVED";
    CitationAuditEventModelEventEnum["ACCOUNTNOTIFICATIONSTATUSCHANGED"] = "ACCOUNT_NOTIFICATION_STATUS_CHANGED";
    CitationAuditEventModelEventEnum["ACCOUNTSTATUSCHANGED"] = "ACCOUNT_STATUS_CHANGED";
    CitationAuditEventModelEventEnum["CASEACCEPT"] = "CASE_ACCEPT";
    CitationAuditEventModelEventEnum["CASEBOOKING"] = "CASE_BOOKING";
    CitationAuditEventModelEventEnum["CASECANCEL"] = "CASE_CANCEL";
    CitationAuditEventModelEventEnum["CASECOUNTERACCEPTED"] = "CASE_COUNTER_ACCEPTED";
    CitationAuditEventModelEventEnum["CASECOUNTERDECLINED"] = "CASE_COUNTER_DECLINED";
    CitationAuditEventModelEventEnum["CASECOUNTERINITIATED"] = "CASE_COUNTER_INITIATED";
    CitationAuditEventModelEventEnum["CASECOUNTERWITHDRAWN"] = "CASE_COUNTER_WITHDRAWN";
    CitationAuditEventModelEventEnum["CASEDECLINE"] = "CASE_DECLINE";
    CitationAuditEventModelEventEnum["CASEMATCH"] = "CASE_MATCH";
    CitationAuditEventModelEventEnum["CASEPAYMENTDELETED"] = "CASE_PAYMENT_DELETED";
    CitationAuditEventModelEventEnum["CASEPAYMENTRESCHEDULED"] = "CASE_PAYMENT_RESCHEDULED";
    CitationAuditEventModelEventEnum["CASERESOLVE"] = "CASE_RESOLVE";
    CitationAuditEventModelEventEnum["CASESTATUS"] = "CASE_STATUS";
    CitationAuditEventModelEventEnum["CASETRANSFER"] = "CASE_TRANSFER";
    CitationAuditEventModelEventEnum["CASEUNSERVICEABLEREQUEST"] = "CASE_UNSERVICEABLE_REQUEST";
    CitationAuditEventModelEventEnum["CITATIONUPDATED"] = "CITATION_UPDATED";
    CitationAuditEventModelEventEnum["CITATIONUPLOAD"] = "CITATION_UPLOAD";
    CitationAuditEventModelEventEnum["COURTCOVERAGEADDED"] = "COURT_COVERAGE_ADDED";
    CitationAuditEventModelEventEnum["COURTCOVERAGEREMOVED"] = "COURT_COVERAGE_REMOVED";
    CitationAuditEventModelEventEnum["COURTFEECHANGED"] = "COURT_FEE_CHANGED";
    CitationAuditEventModelEventEnum["CUSTOMERREVIEWADDED"] = "CUSTOMER_REVIEW_ADDED";
    CitationAuditEventModelEventEnum["CUSTOMFEESRESETTODEFAULTFORVIOLATION"] = "CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION";
    CitationAuditEventModelEventEnum["DECIDEEXPERIMENTGROUPCOMMAND"] = "DECIDE_EXPERIMENT_GROUP_COMMAND";
    CitationAuditEventModelEventEnum["DEFAULTFEEADDED"] = "DEFAULT_FEE_ADDED";
    CitationAuditEventModelEventEnum["DEFAULTFEECHANGED"] = "DEFAULT_FEE_CHANGED";
    CitationAuditEventModelEventEnum["DEFAULTFEEREMOVED"] = "DEFAULT_FEE_REMOVED";
    CitationAuditEventModelEventEnum["EMAILSENT"] = "EMAIL_SENT";
    CitationAuditEventModelEventEnum["EXTERNALTICKETREQUEST"] = "EXTERNAL_TICKET_REQUEST";
    CitationAuditEventModelEventEnum["GHOSTACCOUNTCREATED"] = "GHOST_ACCOUNT_CREATED";
    CitationAuditEventModelEventEnum["LAWFIRMACCOUNTPRIORITY"] = "LAWFIRM_ACCOUNT_PRIORITY";
    CitationAuditEventModelEventEnum["LAWFIRMACCOUNTSTATUS"] = "LAWFIRM_ACCOUNT_STATUS";
    CitationAuditEventModelEventEnum["LAWFIRMADDRESSUPDATED"] = "LAWFIRM_ADDRESS_UPDATED";
    CitationAuditEventModelEventEnum["LAWFIRMDAILYCAPACITY"] = "LAWFIRM_DAILY_CAPACITY";
    CitationAuditEventModelEventEnum["LAWFIRMFEEREFUNDED"] = "LAWFIRM_FEE_REFUNDED";
    CitationAuditEventModelEventEnum["LAWFIRMNAMECHANGED"] = "LAWFIRM_NAME_CHANGED";
    CitationAuditEventModelEventEnum["LAWFIRMPERSONNELADDED"] = "LAWFIRM_PERSONNEL_ADDED";
    CitationAuditEventModelEventEnum["LAWFIRMPROFILEUPDATED"] = "LAWFIRM_PROFILE_UPDATED";
    CitationAuditEventModelEventEnum["LAWFIRMSETTINGUPDATED"] = "LAWFIRM_SETTING_UPDATED";
    CitationAuditEventModelEventEnum["LAWFIRMTOTALCAPACITY"] = "LAWFIRM_TOTAL_CAPACITY";
    CitationAuditEventModelEventEnum["LAWFIRMTRANSFERREVERSED"] = "LAWFIRM_TRANSFER_REVERSED";
    CitationAuditEventModelEventEnum["LINEITEMADDED"] = "LINE_ITEM_ADDED";
    CitationAuditEventModelEventEnum["LINEITEMDELETED"] = "LINE_ITEM_DELETED";
    CitationAuditEventModelEventEnum["LINEITEMUPDATED"] = "LINE_ITEM_UPDATED";
    CitationAuditEventModelEventEnum["MBGELIGIBILITYCHANGED"] = "MBG_ELIGIBILITY_CHANGED";
    CitationAuditEventModelEventEnum["NAMECHANGED"] = "NAME_CHANGED";
    CitationAuditEventModelEventEnum["OCRTEXTEXTRACTED"] = "OCR_TEXT_EXTRACTED";
    CitationAuditEventModelEventEnum["PASSWORDCHANGE"] = "PASSWORD_CHANGE";
    CitationAuditEventModelEventEnum["PASSWORDRESETREQUESTED"] = "PASSWORD_RESET_REQUESTED";
    CitationAuditEventModelEventEnum["PAYMENTAUTHORIZED"] = "PAYMENT_AUTHORIZED";
    CitationAuditEventModelEventEnum["PAYMENTCAPTURED"] = "PAYMENT_CAPTURED";
    CitationAuditEventModelEventEnum["PAYMENTMETHODADD"] = "PAYMENT_METHOD_ADD";
    CitationAuditEventModelEventEnum["PAYMENTMETHODDELETE"] = "PAYMENT_METHOD_DELETE";
    CitationAuditEventModelEventEnum["PAYMENTPLANOPTIONCHANGED"] = "PAYMENT_PLAN_OPTION_CHANGED";
    CitationAuditEventModelEventEnum["PAYMENTREFUNDED"] = "PAYMENT_REFUNDED";
    CitationAuditEventModelEventEnum["PAYMENTSCHEDULED"] = "PAYMENT_SCHEDULED";
    CitationAuditEventModelEventEnum["PHONENUMBERADDED"] = "PHONE_NUMBER_ADDED";
    CitationAuditEventModelEventEnum["PHONENUMBERDELETED"] = "PHONE_NUMBER_DELETED";
    CitationAuditEventModelEventEnum["REFERRALCODEAPPLIED"] = "REFERRAL_CODE_APPLIED";
    CitationAuditEventModelEventEnum["REFERRALCODEATTEMPTFAILED"] = "REFERRAL_CODE_ATTEMPT_FAILED";
    CitationAuditEventModelEventEnum["REFERRALCODEREMOVED"] = "REFERRAL_CODE_REMOVED";
    CitationAuditEventModelEventEnum["SAVEVACATIONMODEENDDATE"] = "SAVE_VACATION_MODE_END_DATE";
    CitationAuditEventModelEventEnum["SAVEVACATIONMODEREASON"] = "SAVE_VACATION_MODE_REASON";
    CitationAuditEventModelEventEnum["SUBSCRIPTIONPLANPURCHASED"] = "SUBSCRIPTION_PLAN_PURCHASED";
    CitationAuditEventModelEventEnum["UNKNOWN"] = "UNKNOWN";
    CitationAuditEventModelEventEnum["USERDELETED"] = "USER_DELETED";
    CitationAuditEventModelEventEnum["USERLOGINEVENT"] = "USER_LOGIN_EVENT";
    CitationAuditEventModelEventEnum["USERMERGE"] = "USER_MERGE";
    CitationAuditEventModelEventEnum["USERREGISTRATION"] = "USER_REGISTRATION";
    CitationAuditEventModelEventEnum["USERREGISTRATIONATTRIBUTED"] = "USER_REGISTRATION_ATTRIBUTED";
    CitationAuditEventModelEventEnum["USERREVIVED"] = "USER_REVIVED";
    CitationAuditEventModelEventEnum["USERSETTINGUPDATED"] = "USER_SETTING_UPDATED";
    CitationAuditEventModelEventEnum["VACATIONMODETOGGLE"] = "VACATION_MODE_TOGGLE";
    CitationAuditEventModelEventEnum["VACATIONMODEUPDATE"] = "VACATION_MODE_UPDATE";
    CitationAuditEventModelEventEnum["VERIFYEMAIL"] = "VERIFY_EMAIL";
    CitationAuditEventModelEventEnum["VERIFYPHONE"] = "VERIFY_PHONE";
    CitationAuditEventModelEventEnum["VIOLATIONENABLEDFORALLCOVEREDCOURTS"] = "VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS";
})(CitationAuditEventModelEventEnum || (CitationAuditEventModelEventEnum = {}));
