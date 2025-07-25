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
import * as models from '../model/models';
export declare class StripeControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary connectStripeAccount
     * @param code code
     */
    connectStripeAccountUsingPOST(code: string, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary createConnectAccountLink
     * @param request request
     */
    createConnectAccountLinkUsingPOST(request: models.CreateConnectAccountLinkRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.CreateConnectAccountLinkResponse>;
    /**
     *
     * @summary createStripeConnectAccount
     * @param request request
     */
    createStripeConnectAccountUsingPOST(request: models.CreateStripeConnectAccountRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.CreateStripeConnectAccountResponse>;
    /**
     *
     * @summary handleOrphanedStripeCharges
     * @param request request
     */
    handleOrphanedStripeChargesUsingPOST(request: models.HandleOrphanedStripeChargeRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.HandleOrphanedStripeChargeResponse>;
    /**
     *
     * @summary updateDispute
     * @param disputeId disputeId
     * @param request request
     */
    updateDisputeUsingPUT(disputeId: string, request: models.UpdateDisputeRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
