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
import * as models from '../model/models';
export declare class PushNotificationControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary getUnreadCounts
     * @param includeMessage includeMessage
     */
    getUnreadCountsUsingGET(includeMessage?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<models.NotificationEvents>;
    /**
     *
     * @summary markAllReadForUser
     * @param userId userId
     */
    markAllReadForUserUsingDELETE(userId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary markCaseNotificationsAsUnread
     * @param caseId caseId
     * @param userId userId
     */
    markCaseNotificationsAsUnreadUsingPUT(caseId: string, userId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary markPageTypesAsRead
     * @param caseId caseId
     * @param request request
     */
    markPageTypesAsReadUsingDELETE(caseId: string, request: models.DeleteNotificationByPagesRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.NotificationEvents>;
    /**
     *
     * @summary markRead
     * @param caseId caseId
     * @param request request
     */
    markReadUsingDELETE(caseId: string, request: models.DeleteNotificationEventRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.NotificationEvents>;
    /**
     *
     * @summary pushCaseMessage
     * @param caseId caseId
     * @param pushRequest pushRequest
     */
    pushCaseMessageUsingPOST(caseId: string, pushRequest: models.PushNotificationRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary pushNotificationToUser
     * @param body body
     */
    pushNotificationToUserUsingPOST(body: string, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary register
     * @param request request
     */
    registerUsingPOST(request: models.PushNotificationRegistrationRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
}
