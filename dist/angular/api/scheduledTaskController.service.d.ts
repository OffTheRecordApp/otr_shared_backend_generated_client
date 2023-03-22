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
import { RescheduleTaskRequest } from '../model/rescheduleTaskRequest';
import { ScheduledTaskGetResponse } from '../model/scheduledTaskGetResponse';
import { Configuration } from '../configuration';
export declare class ScheduledTaskControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * deleteScheduledTask
     * @param taskId taskId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteScheduledTaskUsingDELETE(taskId: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<ScheduledTaskGetResponse>;
    deleteScheduledTaskUsingDELETE(taskId: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<ScheduledTaskGetResponse>>;
    deleteScheduledTaskUsingDELETE(taskId: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<ScheduledTaskGetResponse>>;
    /**
     * getScheduledTasks
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getScheduledTasksUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<ScheduledTaskGetResponse>;
    getScheduledTasksUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<ScheduledTaskGetResponse>>;
    getScheduledTasksUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<ScheduledTaskGetResponse>>;
    /**
     * rescheduleTask
     * @param taskId taskId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    rescheduleTaskUsingPUT(taskId: string, request: RescheduleTaskRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    rescheduleTaskUsingPUT(taskId: string, request: RescheduleTaskRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    rescheduleTaskUsingPUT(taskId: string, request: RescheduleTaskRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
}