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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListAgentBookingsResponse } from '../model/listAgentBookingsResponse';
import { SaveAgentBookingRequest } from '../model/saveAgentBookingRequest';
import { SaveAgentBookingResponse } from '../model/saveAgentBookingResponse';
import { Configuration } from '../configuration';
export declare class CustomerServiceAgentBookingsControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * listAgentBookings
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
     * @param timeZoneId timeZoneId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listAgentBookingsUsingGET(agentUserId?: number, caseStatus?: string, channel?: string, direction?: string, endDate?: string, length?: number, offset?: number, sortBy?: string, sortOrder?: string, startDate?: string, state?: string, timeZoneId?: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<ListAgentBookingsResponse>;
    listAgentBookingsUsingGET(agentUserId?: number, caseStatus?: string, channel?: string, direction?: string, endDate?: string, length?: number, offset?: number, sortBy?: string, sortOrder?: string, startDate?: string, state?: string, timeZoneId?: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<ListAgentBookingsResponse>>;
    listAgentBookingsUsingGET(agentUserId?: number, caseStatus?: string, channel?: string, direction?: string, endDate?: string, length?: number, offset?: number, sortBy?: string, sortOrder?: string, startDate?: string, state?: string, timeZoneId?: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<ListAgentBookingsResponse>>;
    /**
     * saveAgentBooking
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    saveAgentBookingUsingPOST(request: SaveAgentBookingRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<SaveAgentBookingResponse>;
    saveAgentBookingUsingPOST(request: SaveAgentBookingRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<SaveAgentBookingResponse>>;
    saveAgentBookingUsingPOST(request: SaveAgentBookingRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<SaveAgentBookingResponse>>;
}