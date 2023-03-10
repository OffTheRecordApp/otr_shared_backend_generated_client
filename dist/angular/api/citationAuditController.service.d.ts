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
import { ListCitationAuditEventsResponse } from '../model/listCitationAuditEventsResponse';
import { Configuration } from '../configuration';
export declare class CitationAuditControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * listCitationAuditEvents
     * @param citationId citationId
     * @param excludeTypes excludeTypes
     * @param includeTypes includeTypes
     * @param limit limit
     * @param nextPageToken nextPageToken
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listCitationAuditEventsUsingGET(citationId: number, excludeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CITATION_UPLOAD' | 'EXTERNAL_TICKET_REQUEST' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL', includeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CITATION_UPLOAD' | 'EXTERNAL_TICKET_REQUEST' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL', limit?: number, nextPageToken?: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<ListCitationAuditEventsResponse>;
    listCitationAuditEventsUsingGET(citationId: number, excludeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CITATION_UPLOAD' | 'EXTERNAL_TICKET_REQUEST' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL', includeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CITATION_UPLOAD' | 'EXTERNAL_TICKET_REQUEST' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL', limit?: number, nextPageToken?: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<ListCitationAuditEventsResponse>>;
    listCitationAuditEventsUsingGET(citationId: number, excludeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CITATION_UPLOAD' | 'EXTERNAL_TICKET_REQUEST' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL', includeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CITATION_UPLOAD' | 'EXTERNAL_TICKET_REQUEST' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL', limit?: number, nextPageToken?: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<ListCitationAuditEventsResponse>>;
}
