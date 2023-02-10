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
import { ChargeFeeToLawfirmRequest } from '../model/chargeFeeToLawfirmRequest';
import { ChargeFeeToLawfirmResponse } from '../model/chargeFeeToLawfirmResponse';
import { GetLawfirmFeesResponse } from '../model/getLawfirmFeesResponse';
import { GetLawfirmFinancialTransactionsResponse } from '../model/getLawfirmFinancialTransactionsResponse';
import { GetLawfirmPayoutReversalsResponse } from '../model/getLawfirmPayoutReversalsResponse';
import { GetLawfirmPayoutsResponse } from '../model/getLawfirmPayoutsResponse';
import { GetLawfirmTransactionsForCaseResponse } from '../model/getLawfirmTransactionsForCaseResponse';
import { RefundLawfirmFeeRequest } from '../model/refundLawfirmFeeRequest';
import { ReverseLawfirmPayoutRequest } from '../model/reverseLawfirmPayoutRequest';
import { SendPayoutToLawfirmRequest } from '../model/sendPayoutToLawfirmRequest';
import { SendPayoutToLawfirmResponse } from '../model/sendPayoutToLawfirmResponse';
import { UpdateLawfirmFeeRequest } from '../model/updateLawfirmFeeRequest';
import { UpdateLawfirmFeeResponse } from '../model/updateLawfirmFeeResponse';
import { UpdateLawfirmPayoutRequest } from '../model/updateLawfirmPayoutRequest';
import { UpdateLawfirmPayoutResponse } from '../model/updateLawfirmPayoutResponse';
import { Configuration } from '../configuration';
export declare class LawfirmTransactionsControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * chargeFeeToLawfirm
     * @param lawfirmId lawfirmId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    chargeFeeToLawfirmUsingPOST(lawfirmId: number, request: ChargeFeeToLawfirmRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<ChargeFeeToLawfirmResponse>;
    chargeFeeToLawfirmUsingPOST(lawfirmId: number, request: ChargeFeeToLawfirmRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<ChargeFeeToLawfirmResponse>>;
    chargeFeeToLawfirmUsingPOST(lawfirmId: number, request: ChargeFeeToLawfirmRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<ChargeFeeToLawfirmResponse>>;
    /**
     * debitLawfirmFee
     * @param lawfirmFeeId lawfirmFeeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    debitLawfirmFeeUsingPOST(lawfirmFeeId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    debitLawfirmFeeUsingPOST(lawfirmFeeId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    debitLawfirmFeeUsingPOST(lawfirmFeeId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * deleteLawfirmFeeRecord
     * @param lawfirmFeeId lawfirmFeeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteLawfirmFeeRecordUsingDELETE(lawfirmFeeId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    deleteLawfirmFeeRecordUsingDELETE(lawfirmFeeId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    deleteLawfirmFeeRecordUsingDELETE(lawfirmFeeId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * deleteLawfirmPayoutRecord
     * @param lawfirmPayoutId lawfirmPayoutId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteLawfirmPayoutRecordUsingDELETE(lawfirmPayoutId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    deleteLawfirmPayoutRecordUsingDELETE(lawfirmPayoutId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    deleteLawfirmPayoutRecordUsingDELETE(lawfirmPayoutId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * executeLawfirmPayout
     * @param lawfirmPayoutId lawfirmPayoutId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    executeLawfirmPayoutUsingPOST(lawfirmPayoutId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    executeLawfirmPayoutUsingPOST(lawfirmPayoutId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    executeLawfirmPayoutUsingPOST(lawfirmPayoutId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * getLawfirmFees
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLawfirmFeesUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetLawfirmFeesResponse>;
    getLawfirmFeesUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLawfirmFeesResponse>>;
    getLawfirmFeesUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLawfirmFeesResponse>>;
    /**
     * getLawfirmFinancialTransactions
     * @param lawfirmId lawfirmId
     * @param length length
     * @param page page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLawfirmFinancialTransactionsUsingGET(lawfirmId: number, length?: number, page?: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetLawfirmFinancialTransactionsResponse>;
    getLawfirmFinancialTransactionsUsingGET(lawfirmId: number, length?: number, page?: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLawfirmFinancialTransactionsResponse>>;
    getLawfirmFinancialTransactionsUsingGET(lawfirmId: number, length?: number, page?: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLawfirmFinancialTransactionsResponse>>;
    /**
     * getLawfirmPayoutReversals
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLawfirmPayoutReversalsUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetLawfirmPayoutReversalsResponse>;
    getLawfirmPayoutReversalsUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLawfirmPayoutReversalsResponse>>;
    getLawfirmPayoutReversalsUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLawfirmPayoutReversalsResponse>>;
    /**
     * getLawfirmPayouts
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLawfirmPayoutsUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetLawfirmPayoutsResponse>;
    getLawfirmPayoutsUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLawfirmPayoutsResponse>>;
    getLawfirmPayoutsUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLawfirmPayoutsResponse>>;
    /**
     * getLawfirmTransactionsForCase
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLawfirmTransactionsForCaseUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetLawfirmTransactionsForCaseResponse>;
    getLawfirmTransactionsForCaseUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLawfirmTransactionsForCaseResponse>>;
    getLawfirmTransactionsForCaseUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLawfirmTransactionsForCaseResponse>>;
    /**
     * refundLawfirmFee
     * @param lawfirmFeeId lawfirmFeeId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    refundLawfirmFeeUsingPOST(lawfirmFeeId: string, request: RefundLawfirmFeeRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    refundLawfirmFeeUsingPOST(lawfirmFeeId: string, request: RefundLawfirmFeeRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    refundLawfirmFeeUsingPOST(lawfirmFeeId: string, request: RefundLawfirmFeeRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * reverseLawfirmPayout
     * @param lawfirmPayoutId lawfirmPayoutId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    reverseLawfirmPayoutUsingPOST(lawfirmPayoutId: string, request: ReverseLawfirmPayoutRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<object>;
    reverseLawfirmPayoutUsingPOST(lawfirmPayoutId: string, request: ReverseLawfirmPayoutRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<object>>;
    reverseLawfirmPayoutUsingPOST(lawfirmPayoutId: string, request: ReverseLawfirmPayoutRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<object>>;
    /**
     * sendPayoutToLawfirm
     * @param lawfirmId lawfirmId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    sendPayoutToLawfirmUsingPOST(lawfirmId: number, request: SendPayoutToLawfirmRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<SendPayoutToLawfirmResponse>;
    sendPayoutToLawfirmUsingPOST(lawfirmId: number, request: SendPayoutToLawfirmRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<SendPayoutToLawfirmResponse>>;
    sendPayoutToLawfirmUsingPOST(lawfirmId: number, request: SendPayoutToLawfirmRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<SendPayoutToLawfirmResponse>>;
    /**
     * updateLawfirmFee
     * @param lawfirmFeeId lawfirmFeeId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateLawfirmFeeUsingPUT(lawfirmFeeId: string, request: UpdateLawfirmFeeRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<UpdateLawfirmFeeResponse>;
    updateLawfirmFeeUsingPUT(lawfirmFeeId: string, request: UpdateLawfirmFeeRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<UpdateLawfirmFeeResponse>>;
    updateLawfirmFeeUsingPUT(lawfirmFeeId: string, request: UpdateLawfirmFeeRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<UpdateLawfirmFeeResponse>>;
    /**
     * updateLawfirmPayout
     * @param lawfirmPayoutId lawfirmPayoutId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateLawfirmPayoutUsingPUT(lawfirmPayoutId: string, request: UpdateLawfirmPayoutRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<UpdateLawfirmPayoutResponse>;
    updateLawfirmPayoutUsingPUT(lawfirmPayoutId: string, request: UpdateLawfirmPayoutRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<UpdateLawfirmPayoutResponse>>;
    updateLawfirmPayoutUsingPUT(lawfirmPayoutId: string, request: UpdateLawfirmPayoutRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<UpdateLawfirmPayoutResponse>>;
}
