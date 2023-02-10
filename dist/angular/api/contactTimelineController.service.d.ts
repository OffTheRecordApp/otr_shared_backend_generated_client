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
import { ListContactTimelineResponse } from '../model/listContactTimelineResponse';
import { Configuration } from '../configuration';
export declare class ContactTimelineControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * listContactTimeline
     * @param userId userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listContactTimelineUsingGET(userId: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ListContactTimelineResponse>;
    listContactTimelineUsingGET(userId: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ListContactTimelineResponse>>;
    listContactTimelineUsingGET(userId: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ListContactTimelineResponse>>;
}
