/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import {
    AuthorizeChargeForCasePaymentRequest,
    AuthorizeChargeForCasePaymentRequestFromJSON,
    AuthorizeChargeForCasePaymentRequestToJSON,
    AuthorizeChargeForCasePaymentResponse,
    AuthorizeChargeForCasePaymentResponseFromJSON,
    AuthorizeChargeForCasePaymentResponseToJSON,
    CaptureChargeFromCasePaymentRequest,
    CaptureChargeFromCasePaymentRequestFromJSON,
    CaptureChargeFromCasePaymentRequestToJSON,
    GetAvailablePaymentPlansResponse,
    GetAvailablePaymentPlansResponseFromJSON,
    GetAvailablePaymentPlansResponseToJSON,
    GetCasePaymentsResponse,
    GetCasePaymentsResponseFromJSON,
    GetCasePaymentsResponseToJSON,
    GetStripeChargeResponse,
    GetStripeChargeResponseFromJSON,
    GetStripeChargeResponseToJSON,
    GetStripeChargesResponse,
    GetStripeChargesResponseFromJSON,
    GetStripeChargesResponseToJSON,
    ListCostItemsForCustomerResponse,
    ListCostItemsForCustomerResponseFromJSON,
    ListCostItemsForCustomerResponseToJSON,
    ScheduleNewPaymentRequest,
    ScheduleNewPaymentRequestFromJSON,
    ScheduleNewPaymentRequestToJSON,
    UpdateCasePaymentRequest,
    UpdateCasePaymentRequestFromJSON,
    UpdateCasePaymentRequestToJSON,
    UpdatePaymentDueDateRequest,
    UpdatePaymentDueDateRequestFromJSON,
    UpdatePaymentDueDateRequestToJSON,
} from '../models';

export interface AuthorizeChargeForCasePaymentUsingPOSTRequest {
    caseId: string;
    casePaymentId: string;
    request?: AuthorizeChargeForCasePaymentRequest;
}

export interface CaptureChargeFromCasePaymentUsingPOSTRequest {
    caseId: string;
    casePaymentId: string;
    request?: CaptureChargeFromCasePaymentRequest;
}

export interface DeleteCasePaymentUsingDELETERequest {
    caseId: string;
    casePaymentId: string;
}

export interface GenerateCasePaymentPlanUsingGETRequest {
    caseId: string;
    paymentPlanTypeId: string;
    period?: GenerateCasePaymentPlanUsingGETPeriodEnum;
    productId?: string;
}

export interface GetAvailablePaymentPlansUsingPOSTRequest {
    lawfirmId: number;
    legalFeeInCents: string;
    state: string;
}

export interface GetCasePaymentsUsingGETRequest {
    caseId: string;
}

export interface GetPaymentPlanOptionsUsingGETRequest {
    caseId: string;
    feeInCents: number;
    lawfirmId: number;
    userId?: number;
}

export interface GetStripeChargeUsingGETRequest {
    caseId: string;
    stripeChargeId: string;
}

export interface GetStripeChargesUsingGETRequest {
    caseId: string;
}

export interface ListCostItemsForCustomerUsingGETRequest {
    caseId: string;
    period?: ListCostItemsForCustomerUsingGETPeriodEnum;
    productId?: string;
}

export interface ScheduleNewPaymentUsingPOSTRequest {
    caseId: string;
    request: ScheduleNewPaymentRequest;
}

export interface UpdateCasePaymentUsingPUTRequest {
    casePaymentId: string;
    request: UpdateCasePaymentRequest;
}

export interface UpdatePaymentDueDateUsingPUTRequest {
    casePaymentId: string;
    request: UpdatePaymentDueDateRequest;
}

export interface UpdatePaymentRecipientUsingPUTRequest {
    casePaymentId: string;
    recipient: UpdatePaymentRecipientUsingPUTRecipientEnum;
}

/**
 * 
 */
export class CasePaymentControllerApi extends runtime.BaseAPI {

    /**
     * authorizeChargeForCasePayment
     */
    async authorizeChargeForCasePaymentUsingPOSTRaw(requestParameters: AuthorizeChargeForCasePaymentUsingPOSTRequest): Promise<runtime.ApiResponse<AuthorizeChargeForCasePaymentResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling authorizeChargeForCasePaymentUsingPOST.');
        }

        if (requestParameters.casePaymentId === null || requestParameters.casePaymentId === undefined) {
            throw new runtime.RequiredError('casePaymentId','Required parameter requestParameters.casePaymentId was null or undefined when calling authorizeChargeForCasePaymentUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payments/{casePaymentId}/authorize`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"casePaymentId"}}`, encodeURIComponent(String(requestParameters.casePaymentId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthorizeChargeForCasePaymentRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthorizeChargeForCasePaymentResponseFromJSON(jsonValue));
    }

    /**
     * authorizeChargeForCasePayment
     */
    async authorizeChargeForCasePaymentUsingPOST(requestParameters: AuthorizeChargeForCasePaymentUsingPOSTRequest): Promise<AuthorizeChargeForCasePaymentResponse> {
        const response = await this.authorizeChargeForCasePaymentUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * captureChargeFromCasePayment
     */
    async captureChargeFromCasePaymentUsingPOSTRaw(requestParameters: CaptureChargeFromCasePaymentUsingPOSTRequest): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling captureChargeFromCasePaymentUsingPOST.');
        }

        if (requestParameters.casePaymentId === null || requestParameters.casePaymentId === undefined) {
            throw new runtime.RequiredError('casePaymentId','Required parameter requestParameters.casePaymentId was null or undefined when calling captureChargeFromCasePaymentUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payments/{casePaymentId}/capture`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"casePaymentId"}}`, encodeURIComponent(String(requestParameters.casePaymentId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CaptureChargeFromCasePaymentRequestToJSON(requestParameters.request),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * captureChargeFromCasePayment
     */
    async captureChargeFromCasePaymentUsingPOST(requestParameters: CaptureChargeFromCasePaymentUsingPOSTRequest): Promise<boolean> {
        const response = await this.captureChargeFromCasePaymentUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * deleteCasePayment
     */
    async deleteCasePaymentUsingDELETERaw(requestParameters: DeleteCasePaymentUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling deleteCasePaymentUsingDELETE.');
        }

        if (requestParameters.casePaymentId === null || requestParameters.casePaymentId === undefined) {
            throw new runtime.RequiredError('casePaymentId','Required parameter requestParameters.casePaymentId was null or undefined when calling deleteCasePaymentUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payments/{casePaymentId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"casePaymentId"}}`, encodeURIComponent(String(requestParameters.casePaymentId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deleteCasePayment
     */
    async deleteCasePaymentUsingDELETE(requestParameters: DeleteCasePaymentUsingDELETERequest): Promise<void> {
        await this.deleteCasePaymentUsingDELETERaw(requestParameters);
    }

    /**
     * generateCasePaymentPlan
     */
    async generateCasePaymentPlanUsingGETRaw(requestParameters: GenerateCasePaymentPlanUsingGETRequest): Promise<runtime.ApiResponse<ListCostItemsForCustomerResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling generateCasePaymentPlanUsingGET.');
        }

        if (requestParameters.paymentPlanTypeId === null || requestParameters.paymentPlanTypeId === undefined) {
            throw new runtime.RequiredError('paymentPlanTypeId','Required parameter requestParameters.paymentPlanTypeId was null or undefined when calling generateCasePaymentPlanUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.period !== undefined) {
            queryParameters['period'] = requestParameters.period;
        }

        if (requestParameters.productId !== undefined) {
            queryParameters['productId'] = requestParameters.productId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payment-plans/{paymentPlanTypeId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"paymentPlanTypeId"}}`, encodeURIComponent(String(requestParameters.paymentPlanTypeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCostItemsForCustomerResponseFromJSON(jsonValue));
    }

    /**
     * generateCasePaymentPlan
     */
    async generateCasePaymentPlanUsingGET(requestParameters: GenerateCasePaymentPlanUsingGETRequest): Promise<ListCostItemsForCustomerResponse> {
        const response = await this.generateCasePaymentPlanUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getAvailablePaymentPlans
     */
    async getAvailablePaymentPlansUsingPOSTRaw(requestParameters: GetAvailablePaymentPlansUsingPOSTRequest): Promise<runtime.ApiResponse<GetAvailablePaymentPlansResponse>> {
        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        if (requestParameters.legalFeeInCents === null || requestParameters.legalFeeInCents === undefined) {
            throw new runtime.RequiredError('legalFeeInCents','Required parameter requestParameters.legalFeeInCents was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        if (requestParameters.state === null || requestParameters.state === undefined) {
            throw new runtime.RequiredError('state','Required parameter requestParameters.state was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.legalFeeInCents !== undefined) {
            queryParameters['legalFeeInCents'] = requestParameters.legalFeeInCents;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/payment-plans/{lawfirmId}/case-payment`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAvailablePaymentPlansResponseFromJSON(jsonValue));
    }

    /**
     * getAvailablePaymentPlans
     */
    async getAvailablePaymentPlansUsingPOST(requestParameters: GetAvailablePaymentPlansUsingPOSTRequest): Promise<GetAvailablePaymentPlansResponse> {
        const response = await this.getAvailablePaymentPlansUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * getCasePayments
     */
    async getCasePaymentsUsingGETRaw(requestParameters: GetCasePaymentsUsingGETRequest): Promise<runtime.ApiResponse<GetCasePaymentsResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getCasePaymentsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payments`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCasePaymentsResponseFromJSON(jsonValue));
    }

    /**
     * getCasePayments
     */
    async getCasePaymentsUsingGET(requestParameters: GetCasePaymentsUsingGETRequest): Promise<GetCasePaymentsResponse> {
        const response = await this.getCasePaymentsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getPaymentPlanOptions
     */
    async getPaymentPlanOptionsUsingGETRaw(requestParameters: GetPaymentPlanOptionsUsingGETRequest): Promise<runtime.ApiResponse<GetAvailablePaymentPlansResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getPaymentPlanOptionsUsingGET.');
        }

        if (requestParameters.feeInCents === null || requestParameters.feeInCents === undefined) {
            throw new runtime.RequiredError('feeInCents','Required parameter requestParameters.feeInCents was null or undefined when calling getPaymentPlanOptionsUsingGET.');
        }

        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling getPaymentPlanOptionsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.feeInCents !== undefined) {
            queryParameters['feeInCents'] = requestParameters.feeInCents;
        }

        if (requestParameters.lawfirmId !== undefined) {
            queryParameters['lawfirmId'] = requestParameters.lawfirmId;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payment-plans`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAvailablePaymentPlansResponseFromJSON(jsonValue));
    }

    /**
     * getPaymentPlanOptions
     */
    async getPaymentPlanOptionsUsingGET(requestParameters: GetPaymentPlanOptionsUsingGETRequest): Promise<GetAvailablePaymentPlansResponse> {
        const response = await this.getPaymentPlanOptionsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getStripeCharge
     */
    async getStripeChargeUsingGETRaw(requestParameters: GetStripeChargeUsingGETRequest): Promise<runtime.ApiResponse<GetStripeChargeResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getStripeChargeUsingGET.');
        }

        if (requestParameters.stripeChargeId === null || requestParameters.stripeChargeId === undefined) {
            throw new runtime.RequiredError('stripeChargeId','Required parameter requestParameters.stripeChargeId was null or undefined when calling getStripeChargeUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/charges/{stripeChargeId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"stripeChargeId"}}`, encodeURIComponent(String(requestParameters.stripeChargeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetStripeChargeResponseFromJSON(jsonValue));
    }

    /**
     * getStripeCharge
     */
    async getStripeChargeUsingGET(requestParameters: GetStripeChargeUsingGETRequest): Promise<GetStripeChargeResponse> {
        const response = await this.getStripeChargeUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getStripeCharges
     */
    async getStripeChargesUsingGETRaw(requestParameters: GetStripeChargesUsingGETRequest): Promise<runtime.ApiResponse<GetStripeChargesResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getStripeChargesUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/stripe-charges`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetStripeChargesResponseFromJSON(jsonValue));
    }

    /**
     * getStripeCharges
     */
    async getStripeChargesUsingGET(requestParameters: GetStripeChargesUsingGETRequest): Promise<GetStripeChargesResponse> {
        const response = await this.getStripeChargesUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * listCostItemsForCustomer
     */
    async listCostItemsForCustomerUsingGETRaw(requestParameters: ListCostItemsForCustomerUsingGETRequest): Promise<runtime.ApiResponse<ListCostItemsForCustomerResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling listCostItemsForCustomerUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.period !== undefined) {
            queryParameters['period'] = requestParameters.period;
        }

        if (requestParameters.productId !== undefined) {
            queryParameters['productId'] = requestParameters.productId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/customer/cost`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCostItemsForCustomerResponseFromJSON(jsonValue));
    }

    /**
     * listCostItemsForCustomer
     */
    async listCostItemsForCustomerUsingGET(requestParameters: ListCostItemsForCustomerUsingGETRequest): Promise<ListCostItemsForCustomerResponse> {
        const response = await this.listCostItemsForCustomerUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * scheduleNewPayment
     */
    async scheduleNewPaymentUsingPOSTRaw(requestParameters: ScheduleNewPaymentUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling scheduleNewPaymentUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling scheduleNewPaymentUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payments`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScheduleNewPaymentRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * scheduleNewPayment
     */
    async scheduleNewPaymentUsingPOST(requestParameters: ScheduleNewPaymentUsingPOSTRequest): Promise<void> {
        await this.scheduleNewPaymentUsingPOSTRaw(requestParameters);
    }

    /**
     * updateCasePayment
     */
    async updateCasePaymentUsingPUTRaw(requestParameters: UpdateCasePaymentUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.casePaymentId === null || requestParameters.casePaymentId === undefined) {
            throw new runtime.RequiredError('casePaymentId','Required parameter requestParameters.casePaymentId was null or undefined when calling updateCasePaymentUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateCasePaymentUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/payments/{casePaymentId}`.replace(`{${"casePaymentId"}}`, encodeURIComponent(String(requestParameters.casePaymentId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCasePaymentRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * updateCasePayment
     */
    async updateCasePaymentUsingPUT(requestParameters: UpdateCasePaymentUsingPUTRequest): Promise<void> {
        await this.updateCasePaymentUsingPUTRaw(requestParameters);
    }

    /**
     * updatePaymentDueDate
     */
    async updatePaymentDueDateUsingPUTRaw(requestParameters: UpdatePaymentDueDateUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.casePaymentId === null || requestParameters.casePaymentId === undefined) {
            throw new runtime.RequiredError('casePaymentId','Required parameter requestParameters.casePaymentId was null or undefined when calling updatePaymentDueDateUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updatePaymentDueDateUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/payments/{casePaymentId}/due-date`.replace(`{${"casePaymentId"}}`, encodeURIComponent(String(requestParameters.casePaymentId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePaymentDueDateRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * updatePaymentDueDate
     */
    async updatePaymentDueDateUsingPUT(requestParameters: UpdatePaymentDueDateUsingPUTRequest): Promise<void> {
        await this.updatePaymentDueDateUsingPUTRaw(requestParameters);
    }

    /**
     * updatePaymentRecipient
     */
    async updatePaymentRecipientUsingPUTRaw(requestParameters: UpdatePaymentRecipientUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.casePaymentId === null || requestParameters.casePaymentId === undefined) {
            throw new runtime.RequiredError('casePaymentId','Required parameter requestParameters.casePaymentId was null or undefined when calling updatePaymentRecipientUsingPUT.');
        }

        if (requestParameters.recipient === null || requestParameters.recipient === undefined) {
            throw new runtime.RequiredError('recipient','Required parameter requestParameters.recipient was null or undefined when calling updatePaymentRecipientUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.recipient !== undefined) {
            queryParameters['recipient'] = requestParameters.recipient;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/payments/{casePaymentId}/owner`.replace(`{${"casePaymentId"}}`, encodeURIComponent(String(requestParameters.casePaymentId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * updatePaymentRecipient
     */
    async updatePaymentRecipientUsingPUT(requestParameters: UpdatePaymentRecipientUsingPUTRequest): Promise<void> {
        await this.updatePaymentRecipientUsingPUTRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GenerateCasePaymentPlanUsingGETPeriodEnum {
    DAILY = 'DAILY',
    MONTHLY = 'MONTHLY',
    QUARTERLY = 'QUARTERLY',
    WEEKLY = 'WEEKLY',
    YEARLY = 'YEARLY'
}
/**
    * @export
    * @enum {string}
    */
export enum ListCostItemsForCustomerUsingGETPeriodEnum {
    DAILY = 'DAILY',
    MONTHLY = 'MONTHLY',
    QUARTERLY = 'QUARTERLY',
    WEEKLY = 'WEEKLY',
    YEARLY = 'YEARLY'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdatePaymentRecipientUsingPUTRecipientEnum {
    COURT = 'COURT',
    LAWFIRM = 'LAWFIRM',
    OTR = 'OTR'
}