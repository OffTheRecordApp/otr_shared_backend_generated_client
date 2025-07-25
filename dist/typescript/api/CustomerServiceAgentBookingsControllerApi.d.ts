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
export declare class CustomerServiceAgentBookingsControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary deleteAgentBooking
     * @param agentBookingId agentBookingId
     */
    deleteAgentBookingUsingDELETE(agentBookingId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary listAgentBookings
     * @param agentTeam agentTeam
     * @param agentUserId agentUserId
     * @param caseStatus caseStatus
     * @param channel channel
     * @param direction direction
     * @param endDate endDate
     * @param length length
     * @param offset offset
     * @param sortBy sortBy
     * @param sortOrder sortOrder
     * @param startDate startDate
     * @param state state
     * @param statusCategory statusCategory
     * @param timeZoneId timeZoneId
     */
    listAgentBookingsUsingGET(agentTeam?: string, agentUserId?: number, caseStatus?: string, channel?: string, direction?: string, endDate?: string, length?: number, offset?: number, sortBy?: string, sortOrder?: string, startDate?: string, state?: string, statusCategory?: string, timeZoneId?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListAgentBookingsResponse>;
    /**
     *
     * @summary saveAgentBooking
     * @param request request
     */
    saveAgentBookingUsingPOST(request: models.SaveAgentBookingRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SaveAgentBookingResponse>;
}
