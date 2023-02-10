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
import { DeleteLawyerLicenseRequest } from '../model/deleteLawyerLicenseRequest';
import { GetLawyerResponse } from '../model/getLawyerResponse';
import { SaveLawyerLeadRequest } from '../model/saveLawyerLeadRequest';
import { SaveLawyerLicensesRequest } from '../model/saveLawyerLicensesRequest';
import { SaveLawyerRequest } from '../model/saveLawyerRequest';
import { Configuration } from '../configuration';
export declare class LawyerControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * deleteLawyerLicenses
     * @param userId userId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteLawyerLicensesUsingDELETE(userId: string, request: DeleteLawyerLicenseRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<object>;
    deleteLawyerLicensesUsingDELETE(userId: string, request: DeleteLawyerLicenseRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<object>>;
    deleteLawyerLicensesUsingDELETE(userId: string, request: DeleteLawyerLicenseRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<object>>;
    /**
     * deleteLawyer
     * @param userId userId
     * @param removeAdminOnly removeAdminOnly
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteLawyerUsingDELETE(userId: string, removeAdminOnly?: boolean, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    deleteLawyerUsingDELETE(userId: string, removeAdminOnly?: boolean, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    deleteLawyerUsingDELETE(userId: string, removeAdminOnly?: boolean, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * getLawyerEmailGuesses
     * @param lawyerId lawyerId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLawyerEmailGuessesUsingGET(lawyerId: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<object>;
    getLawyerEmailGuessesUsingGET(lawyerId: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<object>>;
    getLawyerEmailGuessesUsingGET(lawyerId: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<object>>;
    /**
     * getLawyer
     * @param userId userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLawyerUsingGET(userId: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetLawyerResponse>;
    getLawyerUsingGET(userId: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLawyerResponse>>;
    getLawyerUsingGET(userId: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLawyerResponse>>;
    /**
     * saveLawyerLead
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    saveLawyerLeadUsingPOST(request: SaveLawyerLeadRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<object>;
    saveLawyerLeadUsingPOST(request: SaveLawyerLeadRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<object>>;
    saveLawyerLeadUsingPOST(request: SaveLawyerLeadRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<object>>;
    /**
     * saveLawyerLicenses
     * @param userId userId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    saveLawyerLicensesUsingPOST(userId: string, request: SaveLawyerLicensesRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<object>;
    saveLawyerLicensesUsingPOST(userId: string, request: SaveLawyerLicensesRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<object>>;
    saveLawyerLicensesUsingPOST(userId: string, request: SaveLawyerLicensesRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<object>>;
    /**
     * upsertLawyer
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    upsertLawyerUsingPOST(request: SaveLawyerRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<object>;
    upsertLawyerUsingPOST(request: SaveLawyerRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<object>>;
    upsertLawyerUsingPOST(request: SaveLawyerRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<object>>;
}
