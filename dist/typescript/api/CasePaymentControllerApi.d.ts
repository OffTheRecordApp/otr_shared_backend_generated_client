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
export declare class CasePaymentControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary authorizeChargeForCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param request request
     */
    authorizeChargeForCasePaymentUsingPOST(caseId: string, casePaymentId: string, request?: models.AuthorizeChargeForCasePaymentRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.AuthorizeChargeForCasePaymentResponse>;
    /**
     *
     * @summary captureChargeFromCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param request request
     */
    captureChargeFromCasePaymentUsingPOST(caseId: string, casePaymentId: string, request?: models.CaptureChargeFromCasePaymentRequest, extraHttpRequestParams?: any): ng.IHttpPromise<boolean>;
    /**
     *
     * @summary deleteCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     */
    deleteCasePaymentUsingDELETE(caseId: string, casePaymentId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary generateCasePaymentPlan
     * @param caseId caseId
     * @param paymentPlanTypeId paymentPlanTypeId
     * @param period period
     * @param productId productId
     */
    generateCasePaymentPlanUsingGET(caseId: string, paymentPlanTypeId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListCostItemsForCustomerResponse>;
    /**
     *
     * @summary getAvailablePaymentPlans
     * @param lawfirmId lawfirmId
     * @param legalFeeInCents legalFeeInCents
     * @param state state
     */
    getAvailablePaymentPlansUsingPOST(lawfirmId: number, legalFeeInCents: string, state: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetAvailablePaymentPlansResponse>;
    /**
     *
     * @summary getCasePayments
     * @param caseId caseId
     */
    getCasePaymentsUsingGET(caseId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCasePaymentsResponse>;
    /**
     *
     * @summary getOverdueCasePayments
     * @param caseId caseId
     * @param includeUpcoming includeUpcoming
     */
    getOverdueCasePaymentsUsingGET(caseId: string, includeUpcoming?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetOverdueCasePaymentsResponse>;
    /**
     *
     * @summary getPaymentPlanOptions
     * @param caseId caseId
     * @param lawfirmId lawfirmId
     * @param feeInCents feeInCents
     * @param userId userId
     */
    getPaymentPlanOptionsUsingGET(caseId: string, lawfirmId: number, feeInCents?: number, userId?: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetAvailablePaymentPlansResponse>;
    /**
     *
     * @summary getStripeCharge
     * @param caseId caseId
     * @param stripeChargeId stripeChargeId
     */
    getStripeChargeUsingGET(caseId: string, stripeChargeId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetStripeChargeResponse>;
    /**
     *
     * @summary getStripeCharges
     * @param caseId caseId
     */
    getStripeChargesUsingGET(caseId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetStripeChargesResponse>;
    /**
     *
     * @summary listCostItemsForCustomer
     * @param caseId caseId
     * @param period period
     * @param productId productId
     */
    listCostItemsForCustomerUsingGET(caseId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListCostItemsForCustomerResponse>;
    /**
     *
     * @summary saveCasePaymentPlan
     * @param caseId caseId
     * @param paymentPlanTypeId paymentPlanTypeId
     * @param request request
     */
    saveCasePaymentPlanUsingPOST(caseId: string, paymentPlanTypeId: string, request?: object, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary scheduleNewPayment
     * @param caseId caseId
     * @param request request
     */
    scheduleNewPaymentUsingPOST(caseId: string, request: models.ScheduleNewPaymentRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary updateCasePayment
     * @param casePaymentId casePaymentId
     * @param request request
     */
    updateCasePaymentUsingPUT(casePaymentId: string, request: models.UpdateCasePaymentRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary updatePaymentDueDate
     * @param casePaymentId casePaymentId
     * @param request request
     */
    updatePaymentDueDateUsingPUT(casePaymentId: string, request: models.UpdatePaymentDueDateRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary updatePaymentRecipient
     * @param casePaymentId casePaymentId
     * @param recipient recipient
     */
    updatePaymentRecipientUsingPUT(casePaymentId: string, recipient: 'COURT' | 'LAWFIRM' | 'OTR', extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
