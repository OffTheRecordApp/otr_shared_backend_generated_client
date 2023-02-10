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
exports.UserAuditEventModel = void 0;
var UserAuditEventModel;
(function (UserAuditEventModel) {
    var ClientTypeEnum;
    (function (ClientTypeEnum) {
        ClientTypeEnum[ClientTypeEnum["ANDROID"] = 'ANDROID'] = "ANDROID";
        ClientTypeEnum[ClientTypeEnum["DESKTOPWEBAPP"] = 'DESKTOP_WEBAPP'] = "DESKTOPWEBAPP";
        ClientTypeEnum[ClientTypeEnum["DMVGO"] = 'DMV_GO'] = "DMVGO";
        ClientTypeEnum[ClientTypeEnum["DMVORG"] = 'DMV_ORG'] = "DMVORG";
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
    })(ClientTypeEnum = UserAuditEventModel.ClientTypeEnum || (UserAuditEventModel.ClientTypeEnum = {}));
    var EventTypeEnum;
    (function (EventTypeEnum) {
        EventTypeEnum[EventTypeEnum["CASEACCEPT"] = 'CASE_ACCEPT'] = "CASEACCEPT";
        EventTypeEnum[EventTypeEnum["CASEBOOKING"] = 'CASE_BOOKING'] = "CASEBOOKING";
        EventTypeEnum[EventTypeEnum["CASEDECLINE"] = 'CASE_DECLINE'] = "CASEDECLINE";
        EventTypeEnum[EventTypeEnum["CASEMATCH"] = 'CASE_MATCH'] = "CASEMATCH";
        EventTypeEnum[EventTypeEnum["CASERESOLVE"] = 'CASE_RESOLVE'] = "CASERESOLVE";
        EventTypeEnum[EventTypeEnum["CITATIONUPLOAD"] = 'CITATION_UPLOAD'] = "CITATIONUPLOAD";
        EventTypeEnum[EventTypeEnum["LAWFIRMACCOUNTPRIORITY"] = 'LAWFIRM_ACCOUNT_PRIORITY'] = "LAWFIRMACCOUNTPRIORITY";
        EventTypeEnum[EventTypeEnum["LAWFIRMACCOUNTSTATUS"] = 'LAWFIRM_ACCOUNT_STATUS'] = "LAWFIRMACCOUNTSTATUS";
        EventTypeEnum[EventTypeEnum["LAWFIRMDAILYCAPACITY"] = 'LAWFIRM_DAILY_CAPACITY'] = "LAWFIRMDAILYCAPACITY";
        EventTypeEnum[EventTypeEnum["LAWFIRMTOTALCAPACITY"] = 'LAWFIRM_TOTAL_CAPACITY'] = "LAWFIRMTOTALCAPACITY";
        EventTypeEnum[EventTypeEnum["PASSWORDCHANGE"] = 'PASSWORD_CHANGE'] = "PASSWORDCHANGE";
        EventTypeEnum[EventTypeEnum["PASSWORDRESETREQUESTED"] = 'PASSWORD_RESET_REQUESTED'] = "PASSWORDRESETREQUESTED";
        EventTypeEnum[EventTypeEnum["PAYMENTMETHODADD"] = 'PAYMENT_METHOD_ADD'] = "PAYMENTMETHODADD";
        EventTypeEnum[EventTypeEnum["PAYMENTMETHODDELETE"] = 'PAYMENT_METHOD_DELETE'] = "PAYMENTMETHODDELETE";
        EventTypeEnum[EventTypeEnum["SAVEVACATIONMODEENDDATE"] = 'SAVE_VACATION_MODE_END_DATE'] = "SAVEVACATIONMODEENDDATE";
        EventTypeEnum[EventTypeEnum["SAVEVACATIONMODEREASON"] = 'SAVE_VACATION_MODE_REASON'] = "SAVEVACATIONMODEREASON";
        EventTypeEnum[EventTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        EventTypeEnum[EventTypeEnum["USERLOGINEVENT"] = 'USER_LOGIN_EVENT'] = "USERLOGINEVENT";
        EventTypeEnum[EventTypeEnum["VACATIONMODETOGGLE"] = 'VACATION_MODE_TOGGLE'] = "VACATIONMODETOGGLE";
        EventTypeEnum[EventTypeEnum["VACATIONMODEUPDATE"] = 'VACATION_MODE_UPDATE'] = "VACATIONMODEUPDATE";
        EventTypeEnum[EventTypeEnum["VERIFYEMAIL"] = 'VERIFY_EMAIL'] = "VERIFYEMAIL";
    })(EventTypeEnum = UserAuditEventModel.EventTypeEnum || (UserAuditEventModel.EventTypeEnum = {}));
})(UserAuditEventModel = exports.UserAuditEventModel || (exports.UserAuditEventModel = {}));
