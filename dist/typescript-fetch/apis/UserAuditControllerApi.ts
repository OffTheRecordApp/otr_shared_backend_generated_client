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


import * as runtime from '../runtime';
import {
    GetLastLoginResponse,
    GetLastLoginResponseFromJSON,
    GetLastLoginResponseToJSON,
    ListUserAuditEventsByCursorResponse,
    ListUserAuditEventsByCursorResponseFromJSON,
    ListUserAuditEventsByCursorResponseToJSON,
} from '../models';

export interface GetLastLoginUsingGETRequest {
    userId: number;
    clients?: GetLastLoginUsingGETClientsEnum;
}

export interface ListUserAuditEventsByCursorUsingGETRequest {
    userId: number;
    excludeTypes?: ListUserAuditEventsByCursorUsingGETExcludeTypesEnum;
    includeTypes?: ListUserAuditEventsByCursorUsingGETIncludeTypesEnum;
    limit?: number;
    nextPageToken?: string;
}

/**
 * 
 */
export class UserAuditControllerApi extends runtime.BaseAPI {

    /**
     * getLastLogin
     */
    async getLastLoginUsingGETRaw(requestParameters: GetLastLoginUsingGETRequest): Promise<runtime.ApiResponse<GetLastLoginResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getLastLoginUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.clients !== undefined) {
            queryParameters['clients'] = requestParameters.clients;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/api/v1/users/{userId}/last-login`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLastLoginResponseFromJSON(jsonValue));
    }

    /**
     * getLastLogin
     */
    async getLastLoginUsingGET(requestParameters: GetLastLoginUsingGETRequest): Promise<GetLastLoginResponse> {
        const response = await this.getLastLoginUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * listUserAuditEventsByCursor
     */
    async listUserAuditEventsByCursorUsingGETRaw(requestParameters: ListUserAuditEventsByCursorUsingGETRequest): Promise<runtime.ApiResponse<ListUserAuditEventsByCursorResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling listUserAuditEventsByCursorUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

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

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/users/{userId}/audit-events`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListUserAuditEventsByCursorResponseFromJSON(jsonValue));
    }

    /**
     * listUserAuditEventsByCursor
     */
    async listUserAuditEventsByCursorUsingGET(requestParameters: ListUserAuditEventsByCursorUsingGETRequest): Promise<ListUserAuditEventsByCursorResponse> {
        const response = await this.listUserAuditEventsByCursorUsingGETRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetLastLoginUsingGETClientsEnum {
    ANDROID = 'ANDROID',
    DESKTOPWEBAPP = 'DESKTOP_WEBAPP',
    DMVGO = 'DMV_GO',
    DMVORG = 'DMV_ORG',
    EMAIL = 'EMAIL',
    FRESHDESK = 'FRESH_DESK',
    IOS = 'IOS',
    LOCALHOST = 'LOCALHOST',
    MOBILEWEBAPP = 'MOBILE_WEBAPP',
    OTRADMINCONSOLE = 'OTR_ADMIN_CONSOLE',
    OTRADMINCONSOLEDEVO = 'OTR_ADMIN_CONSOLE_DEVO',
    OTRADMINCONSOLELOCALHOST = 'OTR_ADMIN_CONSOLE_LOCALHOST',
    OTREXPLORER = 'OTR_EXPLORER',
    OTRJOBSCHEDULER = 'OTR_JOB_SCHEDULER',
    OTRLAWFIRMPORTAL = 'OTR_LAWFIRM_PORTAL',
    OTRLAWFIRMPORTALDEVO = 'OTR_LAWFIRM_PORTAL_DEVO',
    OTRLAWFIRMPORTALLOCALHOST = 'OTR_LAWFIRM_PORTAL_LOCALHOST',
    OTRWEBSITE = 'OTR_WEBSITE',
    OTRWEBSITEDEVO = 'OTR_WEBSITE_DEVO',
    OTRWEBSITELOCALHOST = 'OTR_WEBSITE_LOCALHOST',
    OTRWIDGET = 'OTR_WIDGET',
    UNKNOWN = 'UNKNOWN'
}
/**
    * @export
    * @enum {string}
    */
export enum ListUserAuditEventsByCursorUsingGETExcludeTypesEnum {
    ACCOUNTCOVERAGEADDED = 'ACCOUNT_COVERAGE_ADDED',
    ACCOUNTCOVERAGEREMOVED = 'ACCOUNT_COVERAGE_REMOVED',
    ACCOUNTNOTIFICATIONSTATUSCHANGED = 'ACCOUNT_NOTIFICATION_STATUS_CHANGED',
    ACCOUNTSTATUSCHANGED = 'ACCOUNT_STATUS_CHANGED',
    CASEACCEPT = 'CASE_ACCEPT',
    CASEBOOKING = 'CASE_BOOKING',
    CASECANCEL = 'CASE_CANCEL',
    CASECOUNTERACCEPTED = 'CASE_COUNTER_ACCEPTED',
    CASECOUNTERDECLINED = 'CASE_COUNTER_DECLINED',
    CASECOUNTERINITIATED = 'CASE_COUNTER_INITIATED',
    CASECOUNTERWITHDRAWN = 'CASE_COUNTER_WITHDRAWN',
    CASEDECLINE = 'CASE_DECLINE',
    CASEMATCH = 'CASE_MATCH',
    CASEPAYMENTDELETED = 'CASE_PAYMENT_DELETED',
    CASEPAYMENTRESCHEDULED = 'CASE_PAYMENT_RESCHEDULED',
    CASERESOLVE = 'CASE_RESOLVE',
    CASESTATUS = 'CASE_STATUS',
    CASETRANSFER = 'CASE_TRANSFER',
    CASEUNSERVICEABLEREQUEST = 'CASE_UNSERVICEABLE_REQUEST',
    CITATIONUPDATED = 'CITATION_UPDATED',
    CITATIONUPLOAD = 'CITATION_UPLOAD',
    COURTCOVERAGEADDED = 'COURT_COVERAGE_ADDED',
    COURTCOVERAGEREMOVED = 'COURT_COVERAGE_REMOVED',
    COURTFEECHANGED = 'COURT_FEE_CHANGED',
    CUSTOMFEESRESETTODEFAULTFORVIOLATION = 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION',
    DECIDEEXPERIMENTGROUPCOMMAND = 'DECIDE_EXPERIMENT_GROUP_COMMAND',
    DEFAULTFEEADDED = 'DEFAULT_FEE_ADDED',
    DEFAULTFEECHANGED = 'DEFAULT_FEE_CHANGED',
    DEFAULTFEEREMOVED = 'DEFAULT_FEE_REMOVED',
    EMAILSENT = 'EMAIL_SENT',
    EXTERNALTICKETREQUEST = 'EXTERNAL_TICKET_REQUEST',
    GHOSTACCOUNTCREATED = 'GHOST_ACCOUNT_CREATED',
    LAWFIRMACCOUNTPRIORITY = 'LAWFIRM_ACCOUNT_PRIORITY',
    LAWFIRMACCOUNTSTATUS = 'LAWFIRM_ACCOUNT_STATUS',
    LAWFIRMADDRESSUPDATED = 'LAWFIRM_ADDRESS_UPDATED',
    LAWFIRMDAILYCAPACITY = 'LAWFIRM_DAILY_CAPACITY',
    LAWFIRMFEEREFUNDED = 'LAWFIRM_FEE_REFUNDED',
    LAWFIRMNAMECHANGED = 'LAWFIRM_NAME_CHANGED',
    LAWFIRMPERSONNELADDED = 'LAWFIRM_PERSONNEL_ADDED',
    LAWFIRMPROFILEUPDATED = 'LAWFIRM_PROFILE_UPDATED',
    LAWFIRMSETTINGUPDATED = 'LAWFIRM_SETTING_UPDATED',
    LAWFIRMTOTALCAPACITY = 'LAWFIRM_TOTAL_CAPACITY',
    LAWFIRMTRANSFERREVERSED = 'LAWFIRM_TRANSFER_REVERSED',
    LINEITEMADDED = 'LINE_ITEM_ADDED',
    LINEITEMDELETED = 'LINE_ITEM_DELETED',
    LINEITEMUPDATED = 'LINE_ITEM_UPDATED',
    MBGELIGIBILITYCHANGED = 'MBG_ELIGIBILITY_CHANGED',
    NAMECHANGED = 'NAME_CHANGED',
    OCRTEXTEXTRACTED = 'OCR_TEXT_EXTRACTED',
    PASSWORDCHANGE = 'PASSWORD_CHANGE',
    PASSWORDRESETREQUESTED = 'PASSWORD_RESET_REQUESTED',
    PAYMENTAUTHORIZED = 'PAYMENT_AUTHORIZED',
    PAYMENTCAPTURED = 'PAYMENT_CAPTURED',
    PAYMENTMETHODADD = 'PAYMENT_METHOD_ADD',
    PAYMENTMETHODDELETE = 'PAYMENT_METHOD_DELETE',
    PAYMENTPLANOPTIONCHANGED = 'PAYMENT_PLAN_OPTION_CHANGED',
    PAYMENTREFUNDED = 'PAYMENT_REFUNDED',
    PAYMENTSCHEDULED = 'PAYMENT_SCHEDULED',
    PHONENUMBERADDED = 'PHONE_NUMBER_ADDED',
    PHONENUMBERDELETED = 'PHONE_NUMBER_DELETED',
    REFERRALCODEAPPLIED = 'REFERRAL_CODE_APPLIED',
    REFERRALCODEATTEMPTFAILED = 'REFERRAL_CODE_ATTEMPT_FAILED',
    REFERRALCODEREMOVED = 'REFERRAL_CODE_REMOVED',
    SAVEVACATIONMODEENDDATE = 'SAVE_VACATION_MODE_END_DATE',
    SAVEVACATIONMODEREASON = 'SAVE_VACATION_MODE_REASON',
    SUBSCRIPTIONPLANPURCHASED = 'SUBSCRIPTION_PLAN_PURCHASED',
    UNKNOWN = 'UNKNOWN',
    USERDELETED = 'USER_DELETED',
    USERLOGINEVENT = 'USER_LOGIN_EVENT',
    USERMERGE = 'USER_MERGE',
    USERREGISTRATION = 'USER_REGISTRATION',
    USERREGISTRATIONATTRIBUTED = 'USER_REGISTRATION_ATTRIBUTED',
    USERREVIVED = 'USER_REVIVED',
    USERSETTINGUPDATED = 'USER_SETTING_UPDATED',
    VACATIONMODETOGGLE = 'VACATION_MODE_TOGGLE',
    VACATIONMODEUPDATE = 'VACATION_MODE_UPDATE',
    VERIFYEMAIL = 'VERIFY_EMAIL',
    VERIFYPHONE = 'VERIFY_PHONE',
    VIOLATIONENABLEDFORALLCOVEREDCOURTS = 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS'
}
/**
    * @export
    * @enum {string}
    */
export enum ListUserAuditEventsByCursorUsingGETIncludeTypesEnum {
    ACCOUNTCOVERAGEADDED = 'ACCOUNT_COVERAGE_ADDED',
    ACCOUNTCOVERAGEREMOVED = 'ACCOUNT_COVERAGE_REMOVED',
    ACCOUNTNOTIFICATIONSTATUSCHANGED = 'ACCOUNT_NOTIFICATION_STATUS_CHANGED',
    ACCOUNTSTATUSCHANGED = 'ACCOUNT_STATUS_CHANGED',
    CASEACCEPT = 'CASE_ACCEPT',
    CASEBOOKING = 'CASE_BOOKING',
    CASECANCEL = 'CASE_CANCEL',
    CASECOUNTERACCEPTED = 'CASE_COUNTER_ACCEPTED',
    CASECOUNTERDECLINED = 'CASE_COUNTER_DECLINED',
    CASECOUNTERINITIATED = 'CASE_COUNTER_INITIATED',
    CASECOUNTERWITHDRAWN = 'CASE_COUNTER_WITHDRAWN',
    CASEDECLINE = 'CASE_DECLINE',
    CASEMATCH = 'CASE_MATCH',
    CASEPAYMENTDELETED = 'CASE_PAYMENT_DELETED',
    CASEPAYMENTRESCHEDULED = 'CASE_PAYMENT_RESCHEDULED',
    CASERESOLVE = 'CASE_RESOLVE',
    CASESTATUS = 'CASE_STATUS',
    CASETRANSFER = 'CASE_TRANSFER',
    CASEUNSERVICEABLEREQUEST = 'CASE_UNSERVICEABLE_REQUEST',
    CITATIONUPDATED = 'CITATION_UPDATED',
    CITATIONUPLOAD = 'CITATION_UPLOAD',
    COURTCOVERAGEADDED = 'COURT_COVERAGE_ADDED',
    COURTCOVERAGEREMOVED = 'COURT_COVERAGE_REMOVED',
    COURTFEECHANGED = 'COURT_FEE_CHANGED',
    CUSTOMFEESRESETTODEFAULTFORVIOLATION = 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION',
    DECIDEEXPERIMENTGROUPCOMMAND = 'DECIDE_EXPERIMENT_GROUP_COMMAND',
    DEFAULTFEEADDED = 'DEFAULT_FEE_ADDED',
    DEFAULTFEECHANGED = 'DEFAULT_FEE_CHANGED',
    DEFAULTFEEREMOVED = 'DEFAULT_FEE_REMOVED',
    EMAILSENT = 'EMAIL_SENT',
    EXTERNALTICKETREQUEST = 'EXTERNAL_TICKET_REQUEST',
    GHOSTACCOUNTCREATED = 'GHOST_ACCOUNT_CREATED',
    LAWFIRMACCOUNTPRIORITY = 'LAWFIRM_ACCOUNT_PRIORITY',
    LAWFIRMACCOUNTSTATUS = 'LAWFIRM_ACCOUNT_STATUS',
    LAWFIRMADDRESSUPDATED = 'LAWFIRM_ADDRESS_UPDATED',
    LAWFIRMDAILYCAPACITY = 'LAWFIRM_DAILY_CAPACITY',
    LAWFIRMFEEREFUNDED = 'LAWFIRM_FEE_REFUNDED',
    LAWFIRMNAMECHANGED = 'LAWFIRM_NAME_CHANGED',
    LAWFIRMPERSONNELADDED = 'LAWFIRM_PERSONNEL_ADDED',
    LAWFIRMPROFILEUPDATED = 'LAWFIRM_PROFILE_UPDATED',
    LAWFIRMSETTINGUPDATED = 'LAWFIRM_SETTING_UPDATED',
    LAWFIRMTOTALCAPACITY = 'LAWFIRM_TOTAL_CAPACITY',
    LAWFIRMTRANSFERREVERSED = 'LAWFIRM_TRANSFER_REVERSED',
    LINEITEMADDED = 'LINE_ITEM_ADDED',
    LINEITEMDELETED = 'LINE_ITEM_DELETED',
    LINEITEMUPDATED = 'LINE_ITEM_UPDATED',
    MBGELIGIBILITYCHANGED = 'MBG_ELIGIBILITY_CHANGED',
    NAMECHANGED = 'NAME_CHANGED',
    OCRTEXTEXTRACTED = 'OCR_TEXT_EXTRACTED',
    PASSWORDCHANGE = 'PASSWORD_CHANGE',
    PASSWORDRESETREQUESTED = 'PASSWORD_RESET_REQUESTED',
    PAYMENTAUTHORIZED = 'PAYMENT_AUTHORIZED',
    PAYMENTCAPTURED = 'PAYMENT_CAPTURED',
    PAYMENTMETHODADD = 'PAYMENT_METHOD_ADD',
    PAYMENTMETHODDELETE = 'PAYMENT_METHOD_DELETE',
    PAYMENTPLANOPTIONCHANGED = 'PAYMENT_PLAN_OPTION_CHANGED',
    PAYMENTREFUNDED = 'PAYMENT_REFUNDED',
    PAYMENTSCHEDULED = 'PAYMENT_SCHEDULED',
    PHONENUMBERADDED = 'PHONE_NUMBER_ADDED',
    PHONENUMBERDELETED = 'PHONE_NUMBER_DELETED',
    REFERRALCODEAPPLIED = 'REFERRAL_CODE_APPLIED',
    REFERRALCODEATTEMPTFAILED = 'REFERRAL_CODE_ATTEMPT_FAILED',
    REFERRALCODEREMOVED = 'REFERRAL_CODE_REMOVED',
    SAVEVACATIONMODEENDDATE = 'SAVE_VACATION_MODE_END_DATE',
    SAVEVACATIONMODEREASON = 'SAVE_VACATION_MODE_REASON',
    SUBSCRIPTIONPLANPURCHASED = 'SUBSCRIPTION_PLAN_PURCHASED',
    UNKNOWN = 'UNKNOWN',
    USERDELETED = 'USER_DELETED',
    USERLOGINEVENT = 'USER_LOGIN_EVENT',
    USERMERGE = 'USER_MERGE',
    USERREGISTRATION = 'USER_REGISTRATION',
    USERREGISTRATIONATTRIBUTED = 'USER_REGISTRATION_ATTRIBUTED',
    USERREVIVED = 'USER_REVIVED',
    USERSETTINGUPDATED = 'USER_SETTING_UPDATED',
    VACATIONMODETOGGLE = 'VACATION_MODE_TOGGLE',
    VACATIONMODEUPDATE = 'VACATION_MODE_UPDATE',
    VERIFYEMAIL = 'VERIFY_EMAIL',
    VERIFYPHONE = 'VERIFY_PHONE',
    VIOLATIONENABLEDFORALLCOVEREDCOURTS = 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS'
}
