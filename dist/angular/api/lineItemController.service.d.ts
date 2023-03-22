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
import { GetLineItemTypesResponse } from '../model/getLineItemTypesResponse';
import { GetLineItemsResponse } from '../model/getLineItemsResponse';
import { InsertCaseLineItemResponse } from '../model/insertCaseLineItemResponse';
import { InsertInvoiceLineItemRequest } from '../model/insertInvoiceLineItemRequest';
import { UpdateInvoiceLineItemRequest } from '../model/updateInvoiceLineItemRequest';
import { Configuration } from '../configuration';
export declare class LineItemControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * deleteCaseLineItem
     * @param caseId caseId
     * @param lineItemId lineItemId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteCaseLineItemUsingDELETE(caseId: string, lineItemId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<object>;
    deleteCaseLineItemUsingDELETE(caseId: string, lineItemId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<object>>;
    deleteCaseLineItemUsingDELETE(caseId: string, lineItemId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<object>>;
    /**
     * getLineItemTypes
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLineItemTypesUsingGET(observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetLineItemTypesResponse>;
    getLineItemTypesUsingGET(observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLineItemTypesResponse>>;
    getLineItemTypesUsingGET(observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLineItemTypesResponse>>;
    /**
     * getLineItems
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLineItemsUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetLineItemsResponse>;
    getLineItemsUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLineItemsResponse>>;
    getLineItemsUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLineItemsResponse>>;
    /**
     * insertCaseLineItem
     * @param caseId caseId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    insertCaseLineItemUsingPOST(caseId: string, request: InsertInvoiceLineItemRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<InsertCaseLineItemResponse>;
    insertCaseLineItemUsingPOST(caseId: string, request: InsertInvoiceLineItemRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<InsertCaseLineItemResponse>>;
    insertCaseLineItemUsingPOST(caseId: string, request: InsertInvoiceLineItemRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<InsertCaseLineItemResponse>>;
    /**
     * updateCaseLineItem
     * @param caseId caseId
     * @param lineItemId lineItemId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateCaseLineItemUsingPUT(caseId: string, lineItemId: string, request: UpdateInvoiceLineItemRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<object>;
    updateCaseLineItemUsingPUT(caseId: string, lineItemId: string, request: UpdateInvoiceLineItemRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<object>>;
    updateCaseLineItemUsingPUT(caseId: string, lineItemId: string, request: UpdateInvoiceLineItemRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<object>>;
}