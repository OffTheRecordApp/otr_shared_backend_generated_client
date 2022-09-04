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
     * @summary listUserAuditEventsByCursor
     * @param userId userId
     * @param excludeTypes excludeTypes
     * @param includeTypes includeTypes
     * @param limit limit
     * @param nextPageToken nextPageToken
     */
    listUserAuditEventsByCursorUsingGET(userId: number, excludeTypes?: 'CASE_BOOKING' | 'CASE_MATCH' | 'CITATION_UPLOAD' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE', includeTypes?: 'CASE_BOOKING' | 'CASE_MATCH' | 'CITATION_UPLOAD' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE', limit?: number, nextPageToken?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListUserAuditEventsByCursorResponse>;
}
