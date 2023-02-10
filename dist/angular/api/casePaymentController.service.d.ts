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
import { AuthorizeChargeForCasePaymentRequest } from '../model/authorizeChargeForCasePaymentRequest';
import { AuthorizeChargeForCasePaymentResponse } from '../model/authorizeChargeForCasePaymentResponse';
import { CaptureChargeFromCasePaymentRequest } from '../model/captureChargeFromCasePaymentRequest';
import { GetAvailablePaymentPlansResponse } from '../model/getAvailablePaymentPlansResponse';
import { GetCaseCostsAttorneyResponse } from '../model/getCaseCostsAttorneyResponse';
import { GetCasePaymentsResponse } from '../model/getCasePaymentsResponse';
import { GetStripeChargeResponse } from '../model/getStripeChargeResponse';
import { GetStripeChargesResponse } from '../model/getStripeChargesResponse';
import { ListCostItemsForCustomerResponse } from '../model/listCostItemsForCustomerResponse';
import { ScheduleNewPaymentRequest } from '../model/scheduleNewPaymentRequest';
import { UpdateCasePaymentRequest } from '../model/updateCasePaymentRequest';
import { UpdatePaymentDueDateRequest } from '../model/updatePaymentDueDateRequest';
import { Configuration } from '../configuration';
export declare class CasePaymentControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * authorizeChargeForCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    authorizeChargeForCasePaymentUsingPOST(caseId: string, casePaymentId: string, request?: AuthorizeChargeForCasePaymentRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<AuthorizeChargeForCasePaymentResponse>;
    authorizeChargeForCasePaymentUsingPOST(caseId: string, casePaymentId: string, request?: AuthorizeChargeForCasePaymentRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<AuthorizeChargeForCasePaymentResponse>>;
    authorizeChargeForCasePaymentUsingPOST(caseId: string, casePaymentId: string, request?: AuthorizeChargeForCasePaymentRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<AuthorizeChargeForCasePaymentResponse>>;
    /**
     * captureChargeFromCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    captureChargeFromCasePaymentUsingPOST(caseId: string, casePaymentId: string, request?: CaptureChargeFromCasePaymentRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<boolean>;
    captureChargeFromCasePaymentUsingPOST(caseId: string, casePaymentId: string, request?: CaptureChargeFromCasePaymentRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<boolean>>;
    captureChargeFromCasePaymentUsingPOST(caseId: string, casePaymentId: string, request?: CaptureChargeFromCasePaymentRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<boolean>>;
    /**
     * deleteCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteCasePaymentUsingDELETE(caseId: string, casePaymentId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    deleteCasePaymentUsingDELETE(caseId: string, casePaymentId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    deleteCasePaymentUsingDELETE(caseId: string, casePaymentId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * generateCasePaymentPlan
     * @param caseId caseId
     * @param paymentPlanTypeId paymentPlanTypeId
     * @param period period
     * @param productId productId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    generateCasePaymentPlanUsingGET(caseId: string, paymentPlanTypeId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<ListCostItemsForCustomerResponse>;
    generateCasePaymentPlanUsingGET(caseId: string, paymentPlanTypeId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<ListCostItemsForCustomerResponse>>;
    generateCasePaymentPlanUsingGET(caseId: string, paymentPlanTypeId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<ListCostItemsForCustomerResponse>>;
    /**
     * getAvailablePaymentPlans
     * @param lawfirmId lawfirmId
     * @param legalFeeInCents legalFeeInCents
     * @param state state
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @deprecated
     */
    getAvailablePaymentPlansUsingPOST(lawfirmId: number, legalFeeInCents: string, state: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetAvailablePaymentPlansResponse>;
    getAvailablePaymentPlansUsingPOST(lawfirmId: number, legalFeeInCents: string, state: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetAvailablePaymentPlansResponse>>;
    getAvailablePaymentPlansUsingPOST(lawfirmId: number, legalFeeInCents: string, state: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetAvailablePaymentPlansResponse>>;
    /**
     * getCasePayments
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCasePaymentsUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetCasePaymentsResponse>;
    getCasePaymentsUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetCasePaymentsResponse>>;
    getCasePaymentsUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetCasePaymentsResponse>>;
    /**
     * getPaymentPlanOptions
     * @param caseId caseId
     * @param feeInCents feeInCents
     * @param lawfirmId lawfirmId
     * @param userId userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getPaymentPlanOptionsUsingGET(caseId: string, feeInCents: number, lawfirmId: number, userId?: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetAvailablePaymentPlansResponse>;
    getPaymentPlanOptionsUsingGET(caseId: string, feeInCents: number, lawfirmId: number, userId?: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetAvailablePaymentPlansResponse>>;
    getPaymentPlanOptionsUsingGET(caseId: string, feeInCents: number, lawfirmId: number, userId?: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetAvailablePaymentPlansResponse>>;
    /**
     * getStripeCharge
     * @param caseId caseId
     * @param stripeChargeId stripeChargeId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getStripeChargeUsingGET(caseId: string, stripeChargeId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetStripeChargeResponse>;
    getStripeChargeUsingGET(caseId: string, stripeChargeId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetStripeChargeResponse>>;
    getStripeChargeUsingGET(caseId: string, stripeChargeId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetStripeChargeResponse>>;
    /**
     * getStripeCharges
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getStripeChargesUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetStripeChargesResponse>;
    getStripeChargesUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetStripeChargesResponse>>;
    getStripeChargesUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetStripeChargesResponse>>;
    /**
     * listCostItemsForAttorney
     * @param caseId caseId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listCostItemsForAttorneyUsingGET(caseId: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<GetCaseCostsAttorneyResponse>;
    listCostItemsForAttorneyUsingGET(caseId: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<GetCaseCostsAttorneyResponse>>;
    listCostItemsForAttorneyUsingGET(caseId: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<GetCaseCostsAttorneyResponse>>;
    /**
     * listCostItemsForCustomer
     * @param caseId caseId
     * @param period period
     * @param productId productId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listCostItemsForCustomerUsingGET(caseId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<ListCostItemsForCustomerResponse>;
    listCostItemsForCustomerUsingGET(caseId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpResponse<ListCostItemsForCustomerResponse>>;
    listCostItemsForCustomerUsingGET(caseId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: '*/*';
        context?: HttpContext;
    }): Observable<HttpEvent<ListCostItemsForCustomerResponse>>;
    /**
     * scheduleNewPayment
     * @param caseId caseId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    scheduleNewPaymentUsingPOST(caseId: string, request: ScheduleNewPaymentRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    scheduleNewPaymentUsingPOST(caseId: string, request: ScheduleNewPaymentRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    scheduleNewPaymentUsingPOST(caseId: string, request: ScheduleNewPaymentRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * updateCasePayment
     * @param casePaymentId casePaymentId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateCasePaymentUsingPUT(casePaymentId: string, request: UpdateCasePaymentRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    updateCasePaymentUsingPUT(casePaymentId: string, request: UpdateCasePaymentRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    updateCasePaymentUsingPUT(casePaymentId: string, request: UpdateCasePaymentRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * updatePaymentDueDate
     * @param casePaymentId casePaymentId
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updatePaymentDueDateUsingPUT(casePaymentId: string, request: UpdatePaymentDueDateRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    updatePaymentDueDateUsingPUT(casePaymentId: string, request: UpdatePaymentDueDateRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    updatePaymentDueDateUsingPUT(casePaymentId: string, request: UpdatePaymentDueDateRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * updatePaymentRecipient
     * @param casePaymentId casePaymentId
     * @param recipient recipient
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updatePaymentRecipientUsingPUT(casePaymentId: string, recipient: 'LAWFIRM' | 'OTR', observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    updatePaymentRecipientUsingPUT(casePaymentId: string, recipient: 'LAWFIRM' | 'OTR', observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    updatePaymentRecipientUsingPUT(casePaymentId: string, recipient: 'LAWFIRM' | 'OTR', observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
}
