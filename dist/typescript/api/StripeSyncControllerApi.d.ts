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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class StripeSyncControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary syncAllDisputes
     */
    syncAllDisputesUsingPOST(extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary syncDispute
     * @param disputeId disputeId
     */
    syncDisputeUsingPOST(disputeId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.SyncStripeDisputeResponse>;
    /**
     *
     * @summary syncStripeCharges
     * @param request request
     */
    syncStripeChargesUsingPOST(request: models.SyncStripeChargesRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SyncStripeChargesResponse>;
    /**
     *
     * @summary syncStripePayments
     * @param request request
     */
    syncStripePaymentsUsingPOST(request: models.SyncStripePaymentsRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SyncStripePaymentsResponse>;
    /**
     *
     * @summary syncStripeRefunds
     * @param request request
     */
    syncStripeRefundsUsingPOST(request: models.SyncStripeRefundsRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SyncStripeChargesResponse>;
    /**
     *
     * @summary syncStripeTransfers
     * @param request request
     */
    syncStripeTransfersUsingPOST(request: models.SyncStripeTransfersRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.SyncStripeTransfersResponse>;
}
