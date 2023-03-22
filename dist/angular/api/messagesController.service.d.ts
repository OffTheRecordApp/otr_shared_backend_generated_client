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
import { GetMessagesByEntityResponse } from '../model/getMessagesByEntityResponse';
import { Configuration } from '../configuration';
export declare class MessagesControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * listMessagesByEntity
     * @param lawfirmId lawfirmId
     * @param length length
     * @param page page
     * @param userIds userIds
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listMessagesByEntityUsingGET(lawfirmId?: number, length?: number, page?: number, userIds?: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetMessagesByEntityResponse>;
    listMessagesByEntityUsingGET(lawfirmId?: number, length?: number, page?: number, userIds?: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetMessagesByEntityResponse>>;
    listMessagesByEntityUsingGET(lawfirmId?: number, length?: number, page?: number, userIds?: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetMessagesByEntityResponse>>;
}