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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class UserAuditControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary getLastLogin
     * @param userId userId
     * @param clients clients
     */
    getLastLoginUsingGET(userId: number, clients?: 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN', extraHttpRequestParams?: any): ng.IHttpPromise<models.GetLastLoginResponse>;
    /**
     *
     * @summary listUserAuditEventsByCursor
     * @param userId userId
     * @param excludeTypes excludeTypes
     * @param includeTypes includeTypes
     * @param limit limit
     * @param nextPageToken nextPageToken
     */
    listUserAuditEventsByCursorUsingGET(userId: number, excludeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CITATION_UPLOAD' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE', includeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CITATION_UPLOAD' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE', limit?: number, nextPageToken?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListUserAuditEventsByCursorResponse>;
}
