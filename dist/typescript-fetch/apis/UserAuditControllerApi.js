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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { GetLastLoginResponseFromJSON, ListUserAuditEventsByCursorResponseFromJSON, } from '../models';
/**
 *
 */
export class UserAuditControllerApi extends runtime.BaseAPI {
    /**
     * getLastLogin
     */
    getLastLoginUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling getLastLoginUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.clients !== undefined) {
                queryParameters['clients'] = requestParameters.clients;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/api/v1/users/{userId}/last-login`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => GetLastLoginResponseFromJSON(jsonValue));
        });
    }
    /**
     * getLastLogin
     */
    getLastLoginUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getLastLoginUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * listUserAuditEventsByCursor
     */
    listUserAuditEventsByCursorUsingGETRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.userId === null || requestParameters.userId === undefined) {
                throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling listUserAuditEventsByCursorUsingGET.');
            }
            const queryParameters = {};
            if (requestParameters.excludeTypes !== undefined) {
                queryParameters['excludeTypes'] = requestParameters.excludeTypes;
            }
            if (requestParameters.includeTypes !== undefined) {
                queryParameters['includeTypes'] = requestParameters.includeTypes;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.nextPageToken !== undefined) {
                queryParameters['nextPageToken'] = requestParameters.nextPageToken;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/api/v1/users/{userId}/audit-events`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => ListUserAuditEventsByCursorResponseFromJSON(jsonValue));
        });
    }
    /**
     * listUserAuditEventsByCursor
     */
    listUserAuditEventsByCursorUsingGET(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listUserAuditEventsByCursorUsingGETRaw(requestParameters);
            return yield response.value();
        });
    }
}
/**
    * @export
    * @enum {string}
    */
export var GetLastLoginUsingGETClientsEnum;
(function (GetLastLoginUsingGETClientsEnum) {
    GetLastLoginUsingGETClientsEnum["ANDROID"] = "ANDROID";
    GetLastLoginUsingGETClientsEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    GetLastLoginUsingGETClientsEnum["DMVGO"] = "DMV_GO";
    GetLastLoginUsingGETClientsEnum["DMVORG"] = "DMV_ORG";
    GetLastLoginUsingGETClientsEnum["EMAIL"] = "EMAIL";
    GetLastLoginUsingGETClientsEnum["FRESHDESK"] = "FRESH_DESK";
    GetLastLoginUsingGETClientsEnum["IOS"] = "IOS";
    GetLastLoginUsingGETClientsEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    GetLastLoginUsingGETClientsEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    GetLastLoginUsingGETClientsEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    GetLastLoginUsingGETClientsEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    GetLastLoginUsingGETClientsEnum["OTREXPLORER"] = "OTR_EXPLORER";
    GetLastLoginUsingGETClientsEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    GetLastLoginUsingGETClientsEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    GetLastLoginUsingGETClientsEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    GetLastLoginUsingGETClientsEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    GetLastLoginUsingGETClientsEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    GetLastLoginUsingGETClientsEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    GetLastLoginUsingGETClientsEnum["OTRWIDGET"] = "OTR_WIDGET";
    GetLastLoginUsingGETClientsEnum["UNKNOWN"] = "UNKNOWN";
})(GetLastLoginUsingGETClientsEnum || (GetLastLoginUsingGETClientsEnum = {}));
/**
    * @export
    * @enum {string}
    */
export var ListUserAuditEventsByCursorUsingGETExcludeTypesEnum;
(function (ListUserAuditEventsByCursorUsingGETExcludeTypesEnum) {
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["ACCOUNTCOVERAGEADDED"] = "ACCOUNT_COVERAGE_ADDED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["ACCOUNTCOVERAGEREMOVED"] = "ACCOUNT_COVERAGE_REMOVED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["ACCOUNTNOTIFICATIONSTATUSCHANGED"] = "ACCOUNT_NOTIFICATION_STATUS_CHANGED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["ACCOUNTSTATUSCHANGED"] = "ACCOUNT_STATUS_CHANGED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASEACCEPT"] = "CASE_ACCEPT";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASEBOOKING"] = "CASE_BOOKING";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASECANCEL"] = "CASE_CANCEL";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASECOUNTERACCEPTED"] = "CASE_COUNTER_ACCEPTED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASECOUNTERDECLINED"] = "CASE_COUNTER_DECLINED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASECOUNTERINITIATED"] = "CASE_COUNTER_INITIATED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASEDECLINE"] = "CASE_DECLINE";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASEMATCH"] = "CASE_MATCH";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASEPAYMENTDELETED"] = "CASE_PAYMENT_DELETED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASEPAYMENTRESCHEDULED"] = "CASE_PAYMENT_RESCHEDULED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASERESOLVE"] = "CASE_RESOLVE";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASESTATUS"] = "CASE_STATUS";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASETRANSFER"] = "CASE_TRANSFER";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CASEUNSERVICEABLEREQUEST"] = "CASE_UNSERVICEABLE_REQUEST";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CITATIONUPDATED"] = "CITATION_UPDATED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CITATIONUPLOAD"] = "CITATION_UPLOAD";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["COURTCOVERAGEADDED"] = "COURT_COVERAGE_ADDED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["COURTCOVERAGEREMOVED"] = "COURT_COVERAGE_REMOVED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["COURTFEECHANGED"] = "COURT_FEE_CHANGED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["CUSTOMFEESRESETTODEFAULTFORVIOLATION"] = "CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["DECIDEEXPERIMENTGROUPCOMMAND"] = "DECIDE_EXPERIMENT_GROUP_COMMAND";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["DEFAULTFEEADDED"] = "DEFAULT_FEE_ADDED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["DEFAULTFEECHANGED"] = "DEFAULT_FEE_CHANGED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["DEFAULTFEEREMOVED"] = "DEFAULT_FEE_REMOVED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["EMAILSENT"] = "EMAIL_SENT";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["EXTERNALTICKETREQUEST"] = "EXTERNAL_TICKET_REQUEST";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["GHOSTACCOUNTCREATED"] = "GHOST_ACCOUNT_CREATED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LAWFIRMACCOUNTPRIORITY"] = "LAWFIRM_ACCOUNT_PRIORITY";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LAWFIRMACCOUNTSTATUS"] = "LAWFIRM_ACCOUNT_STATUS";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LAWFIRMDAILYCAPACITY"] = "LAWFIRM_DAILY_CAPACITY";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LAWFIRMFEEREFUNDED"] = "LAWFIRM_FEE_REFUNDED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LAWFIRMTOTALCAPACITY"] = "LAWFIRM_TOTAL_CAPACITY";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LAWFIRMTRANSFERREVERSED"] = "LAWFIRM_TRANSFER_REVERSED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LINEITEMADDED"] = "LINE_ITEM_ADDED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LINEITEMDELETED"] = "LINE_ITEM_DELETED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["LINEITEMUPDATED"] = "LINE_ITEM_UPDATED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["MBGELIGIBILITYCHANGED"] = "MBG_ELIGIBILITY_CHANGED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["NAMECHANGED"] = "NAME_CHANGED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["OCRTEXTEXTRACTED"] = "OCR_TEXT_EXTRACTED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PASSWORDCHANGE"] = "PASSWORD_CHANGE";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PASSWORDRESETREQUESTED"] = "PASSWORD_RESET_REQUESTED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PAYMENTAUTHORIZED"] = "PAYMENT_AUTHORIZED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PAYMENTCAPTURED"] = "PAYMENT_CAPTURED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PAYMENTMETHODADD"] = "PAYMENT_METHOD_ADD";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PAYMENTMETHODDELETE"] = "PAYMENT_METHOD_DELETE";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PAYMENTPLANOPTIONCHANGED"] = "PAYMENT_PLAN_OPTION_CHANGED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PAYMENTREFUNDED"] = "PAYMENT_REFUNDED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["PAYMENTSCHEDULED"] = "PAYMENT_SCHEDULED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["REFERRALCODEAPPLIED"] = "REFERRAL_CODE_APPLIED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["REFERRALCODEATTEMPTFAILED"] = "REFERRAL_CODE_ATTEMPT_FAILED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["REFERRALCODEREMOVED"] = "REFERRAL_CODE_REMOVED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["SAVEVACATIONMODEENDDATE"] = "SAVE_VACATION_MODE_END_DATE";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["SAVEVACATIONMODEREASON"] = "SAVE_VACATION_MODE_REASON";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["UNKNOWN"] = "UNKNOWN";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["USERLOGINEVENT"] = "USER_LOGIN_EVENT";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["USERREGISTRATION"] = "USER_REGISTRATION";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["USERREGISTRATIONATTRIBUTED"] = "USER_REGISTRATION_ATTRIBUTED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["USERSETTINGUPDATED"] = "USER_SETTING_UPDATED";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["VACATIONMODETOGGLE"] = "VACATION_MODE_TOGGLE";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["VACATIONMODEUPDATE"] = "VACATION_MODE_UPDATE";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["VERIFYEMAIL"] = "VERIFY_EMAIL";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["VERIFYPHONE"] = "VERIFY_PHONE";
    ListUserAuditEventsByCursorUsingGETExcludeTypesEnum["VIOLATIONENABLEDFORALLCOVEREDCOURTS"] = "VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS";
})(ListUserAuditEventsByCursorUsingGETExcludeTypesEnum || (ListUserAuditEventsByCursorUsingGETExcludeTypesEnum = {}));
/**
    * @export
    * @enum {string}
    */
export var ListUserAuditEventsByCursorUsingGETIncludeTypesEnum;
(function (ListUserAuditEventsByCursorUsingGETIncludeTypesEnum) {
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["ACCOUNTCOVERAGEADDED"] = "ACCOUNT_COVERAGE_ADDED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["ACCOUNTCOVERAGEREMOVED"] = "ACCOUNT_COVERAGE_REMOVED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["ACCOUNTNOTIFICATIONSTATUSCHANGED"] = "ACCOUNT_NOTIFICATION_STATUS_CHANGED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["ACCOUNTSTATUSCHANGED"] = "ACCOUNT_STATUS_CHANGED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASEACCEPT"] = "CASE_ACCEPT";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASEBOOKING"] = "CASE_BOOKING";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASECANCEL"] = "CASE_CANCEL";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASECOUNTERACCEPTED"] = "CASE_COUNTER_ACCEPTED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASECOUNTERDECLINED"] = "CASE_COUNTER_DECLINED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASECOUNTERINITIATED"] = "CASE_COUNTER_INITIATED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASEDECLINE"] = "CASE_DECLINE";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASEMATCH"] = "CASE_MATCH";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASEPAYMENTDELETED"] = "CASE_PAYMENT_DELETED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASEPAYMENTRESCHEDULED"] = "CASE_PAYMENT_RESCHEDULED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASERESOLVE"] = "CASE_RESOLVE";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASESTATUS"] = "CASE_STATUS";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASETRANSFER"] = "CASE_TRANSFER";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CASEUNSERVICEABLEREQUEST"] = "CASE_UNSERVICEABLE_REQUEST";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CITATIONUPDATED"] = "CITATION_UPDATED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CITATIONUPLOAD"] = "CITATION_UPLOAD";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["COURTCOVERAGEADDED"] = "COURT_COVERAGE_ADDED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["COURTCOVERAGEREMOVED"] = "COURT_COVERAGE_REMOVED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["COURTFEECHANGED"] = "COURT_FEE_CHANGED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["CUSTOMFEESRESETTODEFAULTFORVIOLATION"] = "CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["DECIDEEXPERIMENTGROUPCOMMAND"] = "DECIDE_EXPERIMENT_GROUP_COMMAND";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["DEFAULTFEEADDED"] = "DEFAULT_FEE_ADDED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["DEFAULTFEECHANGED"] = "DEFAULT_FEE_CHANGED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["DEFAULTFEEREMOVED"] = "DEFAULT_FEE_REMOVED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["EMAILSENT"] = "EMAIL_SENT";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["EXTERNALTICKETREQUEST"] = "EXTERNAL_TICKET_REQUEST";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["GHOSTACCOUNTCREATED"] = "GHOST_ACCOUNT_CREATED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LAWFIRMACCOUNTPRIORITY"] = "LAWFIRM_ACCOUNT_PRIORITY";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LAWFIRMACCOUNTSTATUS"] = "LAWFIRM_ACCOUNT_STATUS";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LAWFIRMDAILYCAPACITY"] = "LAWFIRM_DAILY_CAPACITY";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LAWFIRMFEEREFUNDED"] = "LAWFIRM_FEE_REFUNDED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LAWFIRMTOTALCAPACITY"] = "LAWFIRM_TOTAL_CAPACITY";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LAWFIRMTRANSFERREVERSED"] = "LAWFIRM_TRANSFER_REVERSED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LINEITEMADDED"] = "LINE_ITEM_ADDED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LINEITEMDELETED"] = "LINE_ITEM_DELETED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["LINEITEMUPDATED"] = "LINE_ITEM_UPDATED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["MBGELIGIBILITYCHANGED"] = "MBG_ELIGIBILITY_CHANGED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["NAMECHANGED"] = "NAME_CHANGED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["OCRTEXTEXTRACTED"] = "OCR_TEXT_EXTRACTED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PASSWORDCHANGE"] = "PASSWORD_CHANGE";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PASSWORDRESETREQUESTED"] = "PASSWORD_RESET_REQUESTED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PAYMENTAUTHORIZED"] = "PAYMENT_AUTHORIZED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PAYMENTCAPTURED"] = "PAYMENT_CAPTURED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PAYMENTMETHODADD"] = "PAYMENT_METHOD_ADD";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PAYMENTMETHODDELETE"] = "PAYMENT_METHOD_DELETE";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PAYMENTPLANOPTIONCHANGED"] = "PAYMENT_PLAN_OPTION_CHANGED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PAYMENTREFUNDED"] = "PAYMENT_REFUNDED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["PAYMENTSCHEDULED"] = "PAYMENT_SCHEDULED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["REFERRALCODEAPPLIED"] = "REFERRAL_CODE_APPLIED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["REFERRALCODEATTEMPTFAILED"] = "REFERRAL_CODE_ATTEMPT_FAILED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["REFERRALCODEREMOVED"] = "REFERRAL_CODE_REMOVED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["SAVEVACATIONMODEENDDATE"] = "SAVE_VACATION_MODE_END_DATE";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["SAVEVACATIONMODEREASON"] = "SAVE_VACATION_MODE_REASON";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["UNKNOWN"] = "UNKNOWN";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["USERLOGINEVENT"] = "USER_LOGIN_EVENT";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["USERREGISTRATION"] = "USER_REGISTRATION";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["USERREGISTRATIONATTRIBUTED"] = "USER_REGISTRATION_ATTRIBUTED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["USERSETTINGUPDATED"] = "USER_SETTING_UPDATED";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["VACATIONMODETOGGLE"] = "VACATION_MODE_TOGGLE";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["VACATIONMODEUPDATE"] = "VACATION_MODE_UPDATE";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["VERIFYEMAIL"] = "VERIFY_EMAIL";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["VERIFYPHONE"] = "VERIFY_PHONE";
    ListUserAuditEventsByCursorUsingGETIncludeTypesEnum["VIOLATIONENABLEDFORALLCOVEREDCOURTS"] = "VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS";
})(ListUserAuditEventsByCursorUsingGETIncludeTypesEnum || (ListUserAuditEventsByCursorUsingGETIncludeTypesEnum = {}));