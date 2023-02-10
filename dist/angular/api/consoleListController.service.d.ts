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
import { FindChargeDisputesResponse } from '../model/findChargeDisputesResponse';
import { FindDisputesRequest } from '../model/findDisputesRequest';
import { GenericAdminListRequest } from '../model/genericAdminListRequest';
import { GetCasesWithCoverageObtainedResponse } from '../model/getCasesWithCoverageObtainedResponse';
import { GetCasesWithMissingLawfirmPayoutsResponse } from '../model/getCasesWithMissingLawfirmPayoutsResponse';
import { GetCasesWithOverduePaymentsResponse } from '../model/getCasesWithOverduePaymentsResponse';
import { GetCasesWithUncapturedChargesRequest } from '../model/getCasesWithUncapturedChargesRequest';
import { GetCitationPhoneLeadsRequest } from '../model/getCitationPhoneLeadsRequest';
import { GetCitationPhoneLeadsResponse } from '../model/getCitationPhoneLeadsResponse';
import { GetCitationsWithMissingFieldsRequest } from '../model/getCitationsWithMissingFieldsRequest';
import { GetCitationsWithMissingFieldsResponse } from '../model/getCitationsWithMissingFieldsResponse';
import { GetClientConfirmedUnpaidCasesResponse } from '../model/getClientConfirmedUnpaidCasesResponse';
import { GetDeclinedCasesRequest } from '../model/getDeclinedCasesRequest';
import { GetDeclinedCasesResponse } from '../model/getDeclinedCasesResponse';
import { GetInvalidCasesWithStripeChargeResponse } from '../model/getInvalidCasesWithStripeChargeResponse';
import { GetLawfirmLeadsRequest } from '../model/getLawfirmLeadsRequest';
import { GetLawfirmLeadsResponse } from '../model/getLawfirmLeadsResponse';
import { GetLostCasesWithTransferNotReversedRequest } from '../model/getLostCasesWithTransferNotReversedRequest';
import { GetLostCasesWithTransferNotReversedResponse } from '../model/getLostCasesWithTransferNotReversedResponse';
import { GetPendingCasesResponse } from '../model/getPendingCasesResponse';
import { GetPendingTicketReviewsRequest } from '../model/getPendingTicketReviewsRequest';
import { GetPendingTicketReviewsResponse } from '../model/getPendingTicketReviewsResponse';
import { GetPotentialCustomersRequest } from '../model/getPotentialCustomersRequest';
import { GetPotentialCustomersResponse } from '../model/getPotentialCustomersResponse';
import { ListBillingSubscribersRequest } from '../model/listBillingSubscribersRequest';
import { ListBillingSubscribersResponse } from '../model/listBillingSubscribersResponse';
import { Configuration } from '../configuration';
export declare class ConsoleListControllerService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * findDisputes
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    findDisputesUsingPOST(request: FindDisputesRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<FindChargeDisputesResponse>;
    findDisputesUsingPOST(request: FindDisputesRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<FindChargeDisputesResponse>>;
    findDisputesUsingPOST(request: FindDisputesRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<FindChargeDisputesResponse>>;
    /**
     * getCasesWithCoverageObtained
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCasesWithCoverageObtainedUsingPOST(request: GenericAdminListRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetCasesWithCoverageObtainedResponse>;
    getCasesWithCoverageObtainedUsingPOST(request: GenericAdminListRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetCasesWithCoverageObtainedResponse>>;
    getCasesWithCoverageObtainedUsingPOST(request: GenericAdminListRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetCasesWithCoverageObtainedResponse>>;
    /**
     * getCasesWithMissingLawfirmPayouts
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCasesWithMissingLawfirmPayoutsUsingPOST(request: object, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetCasesWithMissingLawfirmPayoutsResponse>;
    getCasesWithMissingLawfirmPayoutsUsingPOST(request: object, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetCasesWithMissingLawfirmPayoutsResponse>>;
    getCasesWithMissingLawfirmPayoutsUsingPOST(request: object, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetCasesWithMissingLawfirmPayoutsResponse>>;
    /**
     * getCasesWithOverduePayments
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCasesWithOverduePaymentsUsingPOST(request: GetCasesWithUncapturedChargesRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetCasesWithOverduePaymentsResponse>;
    getCasesWithOverduePaymentsUsingPOST(request: GetCasesWithUncapturedChargesRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetCasesWithOverduePaymentsResponse>>;
    getCasesWithOverduePaymentsUsingPOST(request: GetCasesWithUncapturedChargesRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetCasesWithOverduePaymentsResponse>>;
    /**
     * getCitationPhoneLeads
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCitationPhoneLeadsUsingPOST(request: GetCitationPhoneLeadsRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetCitationPhoneLeadsResponse>;
    getCitationPhoneLeadsUsingPOST(request: GetCitationPhoneLeadsRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetCitationPhoneLeadsResponse>>;
    getCitationPhoneLeadsUsingPOST(request: GetCitationPhoneLeadsRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetCitationPhoneLeadsResponse>>;
    /**
     * getCitationsWithMissingFields
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCitationsWithMissingFieldsUsingPOST(request: GetCitationsWithMissingFieldsRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetCitationsWithMissingFieldsResponse>;
    getCitationsWithMissingFieldsUsingPOST(request: GetCitationsWithMissingFieldsRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetCitationsWithMissingFieldsResponse>>;
    getCitationsWithMissingFieldsUsingPOST(request: GetCitationsWithMissingFieldsRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetCitationsWithMissingFieldsResponse>>;
    /**
     * getClientConfirmedUnpaidCases
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getClientConfirmedUnpaidCasesUsingPOST(request: object, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetClientConfirmedUnpaidCasesResponse>;
    getClientConfirmedUnpaidCasesUsingPOST(request: object, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetClientConfirmedUnpaidCasesResponse>>;
    getClientConfirmedUnpaidCasesUsingPOST(request: object, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetClientConfirmedUnpaidCasesResponse>>;
    /**
     * getDeclinedCases
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getDeclinedCasesUsingPOST(request: GetDeclinedCasesRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetDeclinedCasesResponse>;
    getDeclinedCasesUsingPOST(request: GetDeclinedCasesRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetDeclinedCasesResponse>>;
    getDeclinedCasesUsingPOST(request: GetDeclinedCasesRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetDeclinedCasesResponse>>;
    /**
     * getInvalidCasesWithStripeCharge
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getInvalidCasesWithStripeChargeUsingPOST(request: object, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetInvalidCasesWithStripeChargeResponse>;
    getInvalidCasesWithStripeChargeUsingPOST(request: object, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetInvalidCasesWithStripeChargeResponse>>;
    getInvalidCasesWithStripeChargeUsingPOST(request: object, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetInvalidCasesWithStripeChargeResponse>>;
    /**
     * getLostCasesWithTransferNotReversed
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getLostCasesWithTransferNotReversedUsingPOST(request: GetLostCasesWithTransferNotReversedRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetLostCasesWithTransferNotReversedResponse>;
    getLostCasesWithTransferNotReversedUsingPOST(request: GetLostCasesWithTransferNotReversedRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLostCasesWithTransferNotReversedResponse>>;
    getLostCasesWithTransferNotReversedUsingPOST(request: GetLostCasesWithTransferNotReversedRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLostCasesWithTransferNotReversedResponse>>;
    /**
     * getPendingCases
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getPendingCasesUsingPOST(request: object, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetPendingCasesResponse>;
    getPendingCasesUsingPOST(request: object, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetPendingCasesResponse>>;
    getPendingCasesUsingPOST(request: object, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetPendingCasesResponse>>;
    /**
     * getPendingTicketReviews
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getPendingTicketReviewsUsingPOST(request: GetPendingTicketReviewsRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetPendingTicketReviewsResponse>;
    getPendingTicketReviewsUsingPOST(request: GetPendingTicketReviewsRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetPendingTicketReviewsResponse>>;
    getPendingTicketReviewsUsingPOST(request: GetPendingTicketReviewsRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetPendingTicketReviewsResponse>>;
    /**
     * listBillingSubscribers
     * @param length length
     * @param page page
     * @param start start
     * @param statuses statuses
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listBillingSubscribersUsingPOST(length?: number, page?: number, start?: string, statuses?: 'ACTIVE' | 'CANCELED' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'IN_TRIAL_PERIOD' | 'PAST_DUE' | 'UNKNOWN' | 'UNPAID', request?: ListBillingSubscribersRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ListBillingSubscribersResponse>;
    listBillingSubscribersUsingPOST(length?: number, page?: number, start?: string, statuses?: 'ACTIVE' | 'CANCELED' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'IN_TRIAL_PERIOD' | 'PAST_DUE' | 'UNKNOWN' | 'UNPAID', request?: ListBillingSubscribersRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ListBillingSubscribersResponse>>;
    listBillingSubscribersUsingPOST(length?: number, page?: number, start?: string, statuses?: 'ACTIVE' | 'CANCELED' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'IN_TRIAL_PERIOD' | 'PAST_DUE' | 'UNKNOWN' | 'UNPAID', request?: ListBillingSubscribersRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ListBillingSubscribersResponse>>;
    /**
     * listLawfirmLeads
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listLawfirmLeadsUsingPOST(request: GetLawfirmLeadsRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetLawfirmLeadsResponse>;
    listLawfirmLeadsUsingPOST(request: GetLawfirmLeadsRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetLawfirmLeadsResponse>>;
    listLawfirmLeadsUsingPOST(request: GetLawfirmLeadsRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetLawfirmLeadsResponse>>;
    /**
     * listPotentialCustomers
     * @param request request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listPotentialCustomersUsingPOST(request: GetPotentialCustomersRequest, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetPotentialCustomersResponse>;
    listPotentialCustomersUsingPOST(request: GetPotentialCustomersRequest, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetPotentialCustomersResponse>>;
    listPotentialCustomersUsingPOST(request: GetPotentialCustomersRequest, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetPotentialCustomersResponse>>;
}
