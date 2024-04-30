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
export declare class DashboardControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary getBookings
     * @param request request
     */
    getBookingsUsingPOST(request: models.GetBookingsRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetBookingsResponse>;
    /**
     *
     * @summary getUserRegistrations
     * @param request request
     */
    getUserRegistrationsUsingPOST(request: models.GetUserRegistrationsRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetUserRegistrationsResponse>;
    /**
     *
     * @summary listCaseBookings
     * @param request request
     */
    listCaseBookingsUsingPOST(request: models.ListCaseBookingsRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListCaseBookingsResponse>;
    /**
     *
     * @summary listCaseCancellations
     * @param request request
     */
    listCaseCancellationsUsingPOST(request: models.ListCaseCancellationsRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListCaseCancellationsResponse>;
    /**
     *
     * @summary listCitations
     * @param request request
     */
    listCitationsUsingPOST(request: models.ListCitationsRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListCitationsResponse>;
    /**
     *
     * @summary listCustomers
     * @param graphRequest graphRequest
     */
    listCustomersUsingPOST(graphRequest: models.GraphRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SqlResponse>;
    /**
     *
     * @summary listDropoffs
     * @param graphRequest graphRequest
     */
    listDropoffsUsingPOST(graphRequest: models.GraphRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SqlResponse>;
    /**
     *
     * @summary listExpenses
     * @param graphRequest graphRequest
     */
    listExpensesUsingPOST(graphRequest: models.GraphRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SqlResponse>;
    /**
     *
     * @summary listLawfirmsEngaged
     * @param request request
     */
    listLawfirmsEngagedUsingPOST(request: models.ListLawfirmsEngagedRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListLawfirmsEngagedResponse>;
    /**
     *
     * @summary listLawyerLeads
     * @param graphRequest graphRequest
     */
    listLawyerLeadsUsingPOST(graphRequest: models.GraphRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SqlResponse>;
    /**
     *
     * @summary listPhoneCalls
     * @param agentId agentId
     * @param agentName agentName
     * @param callQueueName callQueueName
     * @param callStatus callStatus
     * @param customerName customerName
     * @param direction direction
     * @param endDate endDate
     * @param ivrName ivrName
     * @param length length
     * @param page page
     * @param phoneNumber phoneNumber
     * @param shouldIncludePhoneCalls shouldIncludePhoneCalls
     * @param sortBy sortBy
     * @param sortOrder sortOrder
     * @param startDate startDate
     * @param teamName teamName
     * @param timeZoneId timeZoneId
     * @param totalOtrAccounts totalOtrAccounts
     */
    listPhoneCallsUsingGET(agentId?: number, agentName?: string, callQueueName?: string, callStatus?: 'ABANDONED' | 'BLOCKED' | 'BUSY' | 'COMPLETED' | 'CONNECTING' | 'CONNECTION_FAILED' | 'DEFAULT' | 'DISCONNECTED' | 'ENQUEUED' | 'IN_PROGRESS' | 'MISSED_CALL' | 'ON_HOLD' | 'RECENTLY_COMPLETED' | 'RESTRICTED' | 'VOICEMAIL' | 'VOICEMAIL_RECORDING_IN_PROGRESS', customerName?: string, direction?: 'INCOMING' | 'OUTGOING', endDate?: string, ivrName?: string, length?: number, page?: number, phoneNumber?: string, shouldIncludePhoneCalls?: boolean, sortBy?: string, sortOrder?: string, startDate?: string, teamName?: string, timeZoneId?: string, totalOtrAccounts?: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListPhoneCallsResponse>;
}
