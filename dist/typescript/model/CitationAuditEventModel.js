"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitationAuditEventModel = void 0;
var CitationAuditEventModel;
(function (CitationAuditEventModel) {
    var ClientTypeEnum;
    (function (ClientTypeEnum) {
        ClientTypeEnum[ClientTypeEnum["ANDROID"] = 'ANDROID'] = "ANDROID";
        ClientTypeEnum[ClientTypeEnum["DESKTOPWEBAPP"] = 'DESKTOP_WEBAPP'] = "DESKTOPWEBAPP";
        ClientTypeEnum[ClientTypeEnum["DMVGO"] = 'DMV_GO'] = "DMVGO";
        ClientTypeEnum[ClientTypeEnum["DMVORG"] = 'DMV_ORG'] = "DMVORG";
        ClientTypeEnum[ClientTypeEnum["EMAIL"] = 'EMAIL'] = "EMAIL";
        ClientTypeEnum[ClientTypeEnum["FRESHDESK"] = 'FRESH_DESK'] = "FRESHDESK";
        ClientTypeEnum[ClientTypeEnum["IOS"] = 'IOS'] = "IOS";
        ClientTypeEnum[ClientTypeEnum["MOBILEWEBAPP"] = 'MOBILE_WEBAPP'] = "MOBILEWEBAPP";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLE"] = 'OTR_ADMIN_CONSOLE'] = "OTRADMINCONSOLE";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLEDEVO"] = 'OTR_ADMIN_CONSOLE_DEVO'] = "OTRADMINCONSOLEDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = 'OTR_ADMIN_CONSOLE_LOCALHOST'] = "OTRADMINCONSOLELOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTREXPLORER"] = 'OTR_EXPLORER'] = "OTREXPLORER";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTAL"] = 'OTR_LAWFIRM_PORTAL'] = "OTRLAWFIRMPORTAL";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = 'OTR_LAWFIRM_PORTAL_DEVO'] = "OTRLAWFIRMPORTALDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = 'OTR_LAWFIRM_PORTAL_LOCALHOST'] = "OTRLAWFIRMPORTALLOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITE"] = 'OTR_WEBSITE'] = "OTRWEBSITE";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITEDEVO"] = 'OTR_WEBSITE_DEVO'] = "OTRWEBSITEDEVO";
        ClientTypeEnum[ClientTypeEnum["OTRWEBSITELOCALHOST"] = 'OTR_WEBSITE_LOCALHOST'] = "OTRWEBSITELOCALHOST";
        ClientTypeEnum[ClientTypeEnum["OTRWIDGET"] = 'OTR_WIDGET'] = "OTRWIDGET";
        ClientTypeEnum[ClientTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(ClientTypeEnum = CitationAuditEventModel.ClientTypeEnum || (CitationAuditEventModel.ClientTypeEnum = {}));
    var EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["ACCOUNTCOVERAGEADDED"] = 'ACCOUNT_COVERAGE_ADDED'] = "ACCOUNTCOVERAGEADDED";
        EventEnum[EventEnum["ACCOUNTCOVERAGEREMOVED"] = 'ACCOUNT_COVERAGE_REMOVED'] = "ACCOUNTCOVERAGEREMOVED";
        EventEnum[EventEnum["ACCOUNTNOTIFICATIONSTATUSCHANGED"] = 'ACCOUNT_NOTIFICATION_STATUS_CHANGED'] = "ACCOUNTNOTIFICATIONSTATUSCHANGED";
        EventEnum[EventEnum["ACCOUNTSTATUSCHANGED"] = 'ACCOUNT_STATUS_CHANGED'] = "ACCOUNTSTATUSCHANGED";
        EventEnum[EventEnum["CASEACCEPT"] = 'CASE_ACCEPT'] = "CASEACCEPT";
        EventEnum[EventEnum["CASEBOOKING"] = 'CASE_BOOKING'] = "CASEBOOKING";
        EventEnum[EventEnum["CASECANCEL"] = 'CASE_CANCEL'] = "CASECANCEL";
        EventEnum[EventEnum["CASECOUNTERACCEPTED"] = 'CASE_COUNTER_ACCEPTED'] = "CASECOUNTERACCEPTED";
        EventEnum[EventEnum["CASECOUNTERDECLINED"] = 'CASE_COUNTER_DECLINED'] = "CASECOUNTERDECLINED";
        EventEnum[EventEnum["CASECOUNTERINITIATED"] = 'CASE_COUNTER_INITIATED'] = "CASECOUNTERINITIATED";
        EventEnum[EventEnum["CASEDECLINE"] = 'CASE_DECLINE'] = "CASEDECLINE";
        EventEnum[EventEnum["CASEMATCH"] = 'CASE_MATCH'] = "CASEMATCH";
        EventEnum[EventEnum["CASEPAYMENTDELETED"] = 'CASE_PAYMENT_DELETED'] = "CASEPAYMENTDELETED";
        EventEnum[EventEnum["CASEPAYMENTRESCHEDULED"] = 'CASE_PAYMENT_RESCHEDULED'] = "CASEPAYMENTRESCHEDULED";
        EventEnum[EventEnum["CASERESOLVE"] = 'CASE_RESOLVE'] = "CASERESOLVE";
        EventEnum[EventEnum["CASESTATUS"] = 'CASE_STATUS'] = "CASESTATUS";
        EventEnum[EventEnum["CASETRANSFER"] = 'CASE_TRANSFER'] = "CASETRANSFER";
        EventEnum[EventEnum["CASEUNSERVICEABLEREQUEST"] = 'CASE_UNSERVICEABLE_REQUEST'] = "CASEUNSERVICEABLEREQUEST";
        EventEnum[EventEnum["CITATIONUPDATED"] = 'CITATION_UPDATED'] = "CITATIONUPDATED";
        EventEnum[EventEnum["CITATIONUPLOAD"] = 'CITATION_UPLOAD'] = "CITATIONUPLOAD";
        EventEnum[EventEnum["COURTCOVERAGEADDED"] = 'COURT_COVERAGE_ADDED'] = "COURTCOVERAGEADDED";
        EventEnum[EventEnum["COURTCOVERAGEREMOVED"] = 'COURT_COVERAGE_REMOVED'] = "COURTCOVERAGEREMOVED";
        EventEnum[EventEnum["COURTFEECHANGED"] = 'COURT_FEE_CHANGED'] = "COURTFEECHANGED";
        EventEnum[EventEnum["CUSTOMFEESRESETTODEFAULTFORVIOLATION"] = 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION'] = "CUSTOMFEESRESETTODEFAULTFORVIOLATION";
        EventEnum[EventEnum["DECIDEEXPERIMENTGROUPCOMMAND"] = 'DECIDE_EXPERIMENT_GROUP_COMMAND'] = "DECIDEEXPERIMENTGROUPCOMMAND";
        EventEnum[EventEnum["DEFAULTFEEADDED"] = 'DEFAULT_FEE_ADDED'] = "DEFAULTFEEADDED";
        EventEnum[EventEnum["DEFAULTFEECHANGED"] = 'DEFAULT_FEE_CHANGED'] = "DEFAULTFEECHANGED";
        EventEnum[EventEnum["DEFAULTFEEREMOVED"] = 'DEFAULT_FEE_REMOVED'] = "DEFAULTFEEREMOVED";
        EventEnum[EventEnum["EMAILSENT"] = 'EMAIL_SENT'] = "EMAILSENT";
        EventEnum[EventEnum["EXTERNALTICKETREQUEST"] = 'EXTERNAL_TICKET_REQUEST'] = "EXTERNALTICKETREQUEST";
        EventEnum[EventEnum["GHOSTACCOUNTCREATED"] = 'GHOST_ACCOUNT_CREATED'] = "GHOSTACCOUNTCREATED";
        EventEnum[EventEnum["LAWFIRMACCOUNTPRIORITY"] = 'LAWFIRM_ACCOUNT_PRIORITY'] = "LAWFIRMACCOUNTPRIORITY";
        EventEnum[EventEnum["LAWFIRMACCOUNTSTATUS"] = 'LAWFIRM_ACCOUNT_STATUS'] = "LAWFIRMACCOUNTSTATUS";
        EventEnum[EventEnum["LAWFIRMDAILYCAPACITY"] = 'LAWFIRM_DAILY_CAPACITY'] = "LAWFIRMDAILYCAPACITY";
        EventEnum[EventEnum["LAWFIRMFEEREFUNDED"] = 'LAWFIRM_FEE_REFUNDED'] = "LAWFIRMFEEREFUNDED";
        EventEnum[EventEnum["LAWFIRMTOTALCAPACITY"] = 'LAWFIRM_TOTAL_CAPACITY'] = "LAWFIRMTOTALCAPACITY";
        EventEnum[EventEnum["LAWFIRMTRANSFERREVERSED"] = 'LAWFIRM_TRANSFER_REVERSED'] = "LAWFIRMTRANSFERREVERSED";
        EventEnum[EventEnum["LINEITEMADDED"] = 'LINE_ITEM_ADDED'] = "LINEITEMADDED";
        EventEnum[EventEnum["LINEITEMDELETED"] = 'LINE_ITEM_DELETED'] = "LINEITEMDELETED";
        EventEnum[EventEnum["LINEITEMUPDATED"] = 'LINE_ITEM_UPDATED'] = "LINEITEMUPDATED";
        EventEnum[EventEnum["MBGELIGIBILITYCHANGED"] = 'MBG_ELIGIBILITY_CHANGED'] = "MBGELIGIBILITYCHANGED";
        EventEnum[EventEnum["NAMECHANGED"] = 'NAME_CHANGED'] = "NAMECHANGED";
        EventEnum[EventEnum["OCRTEXTEXTRACTED"] = 'OCR_TEXT_EXTRACTED'] = "OCRTEXTEXTRACTED";
        EventEnum[EventEnum["PASSWORDCHANGE"] = 'PASSWORD_CHANGE'] = "PASSWORDCHANGE";
        EventEnum[EventEnum["PASSWORDRESETREQUESTED"] = 'PASSWORD_RESET_REQUESTED'] = "PASSWORDRESETREQUESTED";
        EventEnum[EventEnum["PAYMENTAUTHORIZED"] = 'PAYMENT_AUTHORIZED'] = "PAYMENTAUTHORIZED";
        EventEnum[EventEnum["PAYMENTCAPTURED"] = 'PAYMENT_CAPTURED'] = "PAYMENTCAPTURED";
        EventEnum[EventEnum["PAYMENTMETHODADD"] = 'PAYMENT_METHOD_ADD'] = "PAYMENTMETHODADD";
        EventEnum[EventEnum["PAYMENTMETHODDELETE"] = 'PAYMENT_METHOD_DELETE'] = "PAYMENTMETHODDELETE";
        EventEnum[EventEnum["PAYMENTPLANOPTIONCHANGED"] = 'PAYMENT_PLAN_OPTION_CHANGED'] = "PAYMENTPLANOPTIONCHANGED";
        EventEnum[EventEnum["PAYMENTREFUNDED"] = 'PAYMENT_REFUNDED'] = "PAYMENTREFUNDED";
        EventEnum[EventEnum["PAYMENTSCHEDULED"] = 'PAYMENT_SCHEDULED'] = "PAYMENTSCHEDULED";
        EventEnum[EventEnum["REFERRALCODEAPPLIED"] = 'REFERRAL_CODE_APPLIED'] = "REFERRALCODEAPPLIED";
        EventEnum[EventEnum["REFERRALCODEATTEMPTFAILED"] = 'REFERRAL_CODE_ATTEMPT_FAILED'] = "REFERRALCODEATTEMPTFAILED";
        EventEnum[EventEnum["REFERRALCODEREMOVED"] = 'REFERRAL_CODE_REMOVED'] = "REFERRALCODEREMOVED";
        EventEnum[EventEnum["SAVEVACATIONMODEENDDATE"] = 'SAVE_VACATION_MODE_END_DATE'] = "SAVEVACATIONMODEENDDATE";
        EventEnum[EventEnum["SAVEVACATIONMODEREASON"] = 'SAVE_VACATION_MODE_REASON'] = "SAVEVACATIONMODEREASON";
        EventEnum[EventEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        EventEnum[EventEnum["USERLOGINEVENT"] = 'USER_LOGIN_EVENT'] = "USERLOGINEVENT";
        EventEnum[EventEnum["USERMERGE"] = 'USER_MERGE'] = "USERMERGE";
        EventEnum[EventEnum["USERREGISTRATION"] = 'USER_REGISTRATION'] = "USERREGISTRATION";
        EventEnum[EventEnum["USERREGISTRATIONATTRIBUTED"] = 'USER_REGISTRATION_ATTRIBUTED'] = "USERREGISTRATIONATTRIBUTED";
        EventEnum[EventEnum["USERSETTINGUPDATED"] = 'USER_SETTING_UPDATED'] = "USERSETTINGUPDATED";
        EventEnum[EventEnum["VACATIONMODETOGGLE"] = 'VACATION_MODE_TOGGLE'] = "VACATIONMODETOGGLE";
        EventEnum[EventEnum["VACATIONMODEUPDATE"] = 'VACATION_MODE_UPDATE'] = "VACATIONMODEUPDATE";
        EventEnum[EventEnum["VERIFYEMAIL"] = 'VERIFY_EMAIL'] = "VERIFYEMAIL";
        EventEnum[EventEnum["VERIFYPHONE"] = 'VERIFY_PHONE'] = "VERIFYPHONE";
        EventEnum[EventEnum["VIOLATIONENABLEDFORALLCOVEREDCOURTS"] = 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS'] = "VIOLATIONENABLEDFORALLCOVEREDCOURTS";
    })(EventEnum = CitationAuditEventModel.EventEnum || (CitationAuditEventModel.EventEnum = {}));
})(CitationAuditEventModel = exports.CitationAuditEventModel || (exports.CitationAuditEventModel = {}));
