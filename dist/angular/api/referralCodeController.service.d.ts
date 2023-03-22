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
import { CreateReferralCodeRequest } from '../model/createReferralCodeRequest';
import { CreateReferralCodeResponse } from '../model/createReferralCodeResponse';
import { GetReferralCodeResponse } from '../model/getReferralCodeResponse';
import { GetReferralCodesResponse } from '../model/getReferralCodesResponse';
import { Configuration } from '../configuration';
export declare class ReferralCodeControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * Only for admins. This will approve and activate a given referral code
     * @param codeId codeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    approveReferralCodeUsingPUT(codeId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    approveReferralCodeUsingPUT(codeId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    approveReferralCodeUsingPUT(codeId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * Referral codes are currently immutable. Meaning, once a referral code is created then no modification is allowed. In urgent scenarios, we can update the values via SQL. If you want to apply a discount to the referee then enter a negative value (applies both for percentage_discount and cents_value types), and enter a positive value if you want to increase the price.
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    generateReferralCodeUsingPOST(request: CreateReferralCodeRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CreateReferralCodeResponse>;
    generateReferralCodeUsingPOST(request: CreateReferralCodeRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CreateReferralCodeResponse>>;
    generateReferralCodeUsingPOST(request: CreateReferralCodeRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CreateReferralCodeResponse>>;
    /**
     * getReferralCode
     * @param codeId codeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getReferralCodeUsingGET(codeId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetReferralCodeResponse>;
    getReferralCodeUsingGET(codeId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetReferralCodeResponse>>;
    getReferralCodeUsingGET(codeId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetReferralCodeResponse>>;
    /**
     * getReferralCodes
     * @param isActive isActive
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getReferralCodesUsingGET(isActive?: boolean, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetReferralCodesResponse>;
    getReferralCodesUsingGET(isActive?: boolean, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetReferralCodesResponse>>;
    getReferralCodesUsingGET(isActive?: boolean, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetReferralCodesResponse>>;
    /**
     * markCodeAsInactive
     * @param codeId codeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    markCodeAsInactiveUsingDELETE(codeId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    markCodeAsInactiveUsingDELETE(codeId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    markCodeAsInactiveUsingDELETE(codeId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * Validates and returns the referral code. Validation includes: Are we passed the expiration date? Has the code exceeded it\&#39;s max use count?
     * @param codeId codeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    validateReferralCodeUsingGET(codeId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetReferralCodeResponse>;
    validateReferralCodeUsingGET(codeId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetReferralCodeResponse>>;
    validateReferralCodeUsingGET(codeId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetReferralCodeResponse>>;
}