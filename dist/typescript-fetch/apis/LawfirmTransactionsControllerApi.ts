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
    ChargeFeeToLawfirmRequest,
    ChargeFeeToLawfirmRequestFromJSON,
    ChargeFeeToLawfirmRequestToJSON,
    ChargeFeeToLawfirmResponse,
    ChargeFeeToLawfirmResponseFromJSON,
    ChargeFeeToLawfirmResponseToJSON,
    GetLawfirmFeesResponse,
    GetLawfirmFeesResponseFromJSON,
    GetLawfirmFeesResponseToJSON,
    GetLawfirmFinancialTransactionsResponse,
    GetLawfirmFinancialTransactionsResponseFromJSON,
    GetLawfirmFinancialTransactionsResponseToJSON,
    GetLawfirmPayoutReversalsResponse,
    GetLawfirmPayoutReversalsResponseFromJSON,
    GetLawfirmPayoutReversalsResponseToJSON,
    GetLawfirmPayoutsResponse,
    GetLawfirmPayoutsResponseFromJSON,
    GetLawfirmPayoutsResponseToJSON,
    GetLawfirmTransactionsForCaseResponse,
    GetLawfirmTransactionsForCaseResponseFromJSON,
    GetLawfirmTransactionsForCaseResponseToJSON,
    ListLawfirmBankPayoutsResponse,
    ListLawfirmBankPayoutsResponseFromJSON,
    ListLawfirmBankPayoutsResponseToJSON,
    RefundLawfirmFeeRequest,
    RefundLawfirmFeeRequestFromJSON,
    RefundLawfirmFeeRequestToJSON,
    ReverseLawfirmPayoutRequest,
    ReverseLawfirmPayoutRequestFromJSON,
    ReverseLawfirmPayoutRequestToJSON,
    SendPayoutToLawfirmRequest,
    SendPayoutToLawfirmRequestFromJSON,
    SendPayoutToLawfirmRequestToJSON,
    SendPayoutToLawfirmResponse,
    SendPayoutToLawfirmResponseFromJSON,
    SendPayoutToLawfirmResponseToJSON,
    UpdateLawfirmFeeRequest,
    UpdateLawfirmFeeRequestFromJSON,
    UpdateLawfirmFeeRequestToJSON,
    UpdateLawfirmFeeResponse,
    UpdateLawfirmFeeResponseFromJSON,
    UpdateLawfirmFeeResponseToJSON,
    UpdateLawfirmPayoutRequest,
    UpdateLawfirmPayoutRequestFromJSON,
    UpdateLawfirmPayoutRequestToJSON,
    UpdateLawfirmPayoutResponse,
    UpdateLawfirmPayoutResponseFromJSON,
    UpdateLawfirmPayoutResponseToJSON,
} from '../models';

export interface ChargeFeeToLawfirmUsingPOSTRequest {
    lawfirmId: number;
    request: ChargeFeeToLawfirmRequest;
}

export interface DebitLawfirmFeeUsingPOSTRequest {
    lawfirmFeeId: string;
}

export interface DeleteLawfirmFeeRecordUsingDELETERequest {
    lawfirmFeeId: string;
}

export interface DeleteLawfirmPayoutRecordUsingDELETERequest {
    lawfirmPayoutId: string;
}

export interface ExecuteLawfirmPayoutUsingPOSTRequest {
    lawfirmPayoutId: string;
}

export interface GetLawfirmFeesUsingGETRequest {
    caseId: string;
}

export interface GetLawfirmFinancialTransactionsUsingGETRequest {
    lawfirmId: number;
    length?: number;
    page?: number;
}

export interface GetLawfirmPayoutReversalsUsingGETRequest {
    caseId: string;
}

export interface GetLawfirmPayoutsUsingGETRequest {
    caseId: string;
}

export interface GetLawfirmTransactionsForCaseUsingGETRequest {
    caseId: string;
}

export interface ListLawfirmBankPayoutsUsingGETRequest {
    includeTransactions: boolean;
    index: number;
    lawfirmId: number;
    size?: number;
}

export interface RefundLawfirmFeeUsingPOSTRequest {
    lawfirmFeeId: string;
    request: RefundLawfirmFeeRequest;
}

export interface ReverseLawfirmPayoutUsingPOSTRequest {
    lawfirmPayoutId: string;
    request: ReverseLawfirmPayoutRequest;
}

export interface SendPayoutToLawfirmUsingPOSTRequest {
    lawfirmId: number;
    request: SendPayoutToLawfirmRequest;
}

export interface UpdateLawfirmFeeUsingPUTRequest {
    lawfirmFeeId: string;
    request: UpdateLawfirmFeeRequest;
}

export interface UpdateLawfirmPayoutUsingPUTRequest {
    lawfirmPayoutId: string;
    request: UpdateLawfirmPayoutRequest;
}

/**
 * 
 */
export class LawfirmTransactionsControllerApi extends runtime.BaseAPI {

    /**
     * chargeFeeToLawfirm
     */
    async chargeFeeToLawfirmUsingPOSTRaw(requestParameters: ChargeFeeToLawfirmUsingPOSTRequest): Promise<runtime.ApiResponse<ChargeFeeToLawfirmResponse>> {
        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling chargeFeeToLawfirmUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling chargeFeeToLawfirmUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirms/{lawfirmId}/debits`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChargeFeeToLawfirmRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeFeeToLawfirmResponseFromJSON(jsonValue));
    }

    /**
     * chargeFeeToLawfirm
     */
    async chargeFeeToLawfirmUsingPOST(requestParameters: ChargeFeeToLawfirmUsingPOSTRequest): Promise<ChargeFeeToLawfirmResponse> {
        const response = await this.chargeFeeToLawfirmUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * debitLawfirmFee
     */
    async debitLawfirmFeeUsingPOSTRaw(requestParameters: DebitLawfirmFeeUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.lawfirmFeeId === null || requestParameters.lawfirmFeeId === undefined) {
            throw new runtime.RequiredError('lawfirmFeeId','Required parameter requestParameters.lawfirmFeeId was null or undefined when calling debitLawfirmFeeUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/lawfirm-fees/{lawfirmFeeId}/debit`.replace(`{${"lawfirmFeeId"}}`, encodeURIComponent(String(requestParameters.lawfirmFeeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * debitLawfirmFee
     */
    async debitLawfirmFeeUsingPOST(requestParameters: DebitLawfirmFeeUsingPOSTRequest): Promise<void> {
        await this.debitLawfirmFeeUsingPOSTRaw(requestParameters);
    }

    /**
     * deleteLawfirmFeeRecord
     */
    async deleteLawfirmFeeRecordUsingDELETERaw(requestParameters: DeleteLawfirmFeeRecordUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.lawfirmFeeId === null || requestParameters.lawfirmFeeId === undefined) {
            throw new runtime.RequiredError('lawfirmFeeId','Required parameter requestParameters.lawfirmFeeId was null or undefined when calling deleteLawfirmFeeRecordUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/lawfirms/fees/{lawfirmFeeId}`.replace(`{${"lawfirmFeeId"}}`, encodeURIComponent(String(requestParameters.lawfirmFeeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deleteLawfirmFeeRecord
     */
    async deleteLawfirmFeeRecordUsingDELETE(requestParameters: DeleteLawfirmFeeRecordUsingDELETERequest): Promise<void> {
        await this.deleteLawfirmFeeRecordUsingDELETERaw(requestParameters);
    }

    /**
     * deleteLawfirmPayoutRecord
     */
    async deleteLawfirmPayoutRecordUsingDELETERaw(requestParameters: DeleteLawfirmPayoutRecordUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.lawfirmPayoutId === null || requestParameters.lawfirmPayoutId === undefined) {
            throw new runtime.RequiredError('lawfirmPayoutId','Required parameter requestParameters.lawfirmPayoutId was null or undefined when calling deleteLawfirmPayoutRecordUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/lawfirms/payouts/{lawfirmPayoutId}`.replace(`{${"lawfirmPayoutId"}}`, encodeURIComponent(String(requestParameters.lawfirmPayoutId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deleteLawfirmPayoutRecord
     */
    async deleteLawfirmPayoutRecordUsingDELETE(requestParameters: DeleteLawfirmPayoutRecordUsingDELETERequest): Promise<void> {
        await this.deleteLawfirmPayoutRecordUsingDELETERaw(requestParameters);
    }

    /**
     * executeLawfirmPayout
     */
    async executeLawfirmPayoutUsingPOSTRaw(requestParameters: ExecuteLawfirmPayoutUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.lawfirmPayoutId === null || requestParameters.lawfirmPayoutId === undefined) {
            throw new runtime.RequiredError('lawfirmPayoutId','Required parameter requestParameters.lawfirmPayoutId was null or undefined when calling executeLawfirmPayoutUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/lawfirm-payouts/{lawfirmPayoutId}/transfer`.replace(`{${"lawfirmPayoutId"}}`, encodeURIComponent(String(requestParameters.lawfirmPayoutId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * executeLawfirmPayout
     */
    async executeLawfirmPayoutUsingPOST(requestParameters: ExecuteLawfirmPayoutUsingPOSTRequest): Promise<void> {
        await this.executeLawfirmPayoutUsingPOSTRaw(requestParameters);
    }

    /**
     * getLawfirmFees
     */
    async getLawfirmFeesUsingGETRaw(requestParameters: GetLawfirmFeesUsingGETRequest): Promise<runtime.ApiResponse<GetLawfirmFeesResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getLawfirmFeesUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/lawfirm-fees`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLawfirmFeesResponseFromJSON(jsonValue));
    }

    /**
     * getLawfirmFees
     */
    async getLawfirmFeesUsingGET(requestParameters: GetLawfirmFeesUsingGETRequest): Promise<GetLawfirmFeesResponse> {
        const response = await this.getLawfirmFeesUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getLawfirmFinancialTransactions
     */
    async getLawfirmFinancialTransactionsUsingGETRaw(requestParameters: GetLawfirmFinancialTransactionsUsingGETRequest): Promise<runtime.ApiResponse<GetLawfirmFinancialTransactionsResponse>> {
        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling getLawfirmFinancialTransactionsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.length !== undefined) {
            queryParameters['length'] = requestParameters.length;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/lawfirms/{lawfirmId}/transactions`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLawfirmFinancialTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * getLawfirmFinancialTransactions
     */
    async getLawfirmFinancialTransactionsUsingGET(requestParameters: GetLawfirmFinancialTransactionsUsingGETRequest): Promise<GetLawfirmFinancialTransactionsResponse> {
        const response = await this.getLawfirmFinancialTransactionsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getLawfirmPayoutReversals
     */
    async getLawfirmPayoutReversalsUsingGETRaw(requestParameters: GetLawfirmPayoutReversalsUsingGETRequest): Promise<runtime.ApiResponse<GetLawfirmPayoutReversalsResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getLawfirmPayoutReversalsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/reversals`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLawfirmPayoutReversalsResponseFromJSON(jsonValue));
    }

    /**
     * getLawfirmPayoutReversals
     */
    async getLawfirmPayoutReversalsUsingGET(requestParameters: GetLawfirmPayoutReversalsUsingGETRequest): Promise<GetLawfirmPayoutReversalsResponse> {
        const response = await this.getLawfirmPayoutReversalsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getLawfirmPayouts
     */
    async getLawfirmPayoutsUsingGETRaw(requestParameters: GetLawfirmPayoutsUsingGETRequest): Promise<runtime.ApiResponse<GetLawfirmPayoutsResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getLawfirmPayoutsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payouts`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLawfirmPayoutsResponseFromJSON(jsonValue));
    }

    /**
     * getLawfirmPayouts
     */
    async getLawfirmPayoutsUsingGET(requestParameters: GetLawfirmPayoutsUsingGETRequest): Promise<GetLawfirmPayoutsResponse> {
        const response = await this.getLawfirmPayoutsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getLawfirmTransactionsForCase
     */
    async getLawfirmTransactionsForCaseUsingGETRaw(requestParameters: GetLawfirmTransactionsForCaseUsingGETRequest): Promise<runtime.ApiResponse<GetLawfirmTransactionsForCaseResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getLawfirmTransactionsForCaseUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/lawfirm-transactions`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLawfirmTransactionsForCaseResponseFromJSON(jsonValue));
    }

    /**
     * getLawfirmTransactionsForCase
     */
    async getLawfirmTransactionsForCaseUsingGET(requestParameters: GetLawfirmTransactionsForCaseUsingGETRequest): Promise<GetLawfirmTransactionsForCaseResponse> {
        const response = await this.getLawfirmTransactionsForCaseUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * listLawfirmBankPayouts
     */
    async listLawfirmBankPayoutsUsingGETRaw(requestParameters: ListLawfirmBankPayoutsUsingGETRequest): Promise<runtime.ApiResponse<ListLawfirmBankPayoutsResponse>> {
        if (requestParameters.includeTransactions === null || requestParameters.includeTransactions === undefined) {
            throw new runtime.RequiredError('includeTransactions','Required parameter requestParameters.includeTransactions was null or undefined when calling listLawfirmBankPayoutsUsingGET.');
        }

        if (requestParameters.index === null || requestParameters.index === undefined) {
            throw new runtime.RequiredError('index','Required parameter requestParameters.index was null or undefined when calling listLawfirmBankPayoutsUsingGET.');
        }

        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling listLawfirmBankPayoutsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.includeTransactions !== undefined) {
            queryParameters['includeTransactions '] = requestParameters.includeTransactions;
        }

        if (requestParameters.index !== undefined) {
            queryParameters['index'] = requestParameters.index;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/lawfirms/{lawfirmId}/bank-payouts`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListLawfirmBankPayoutsResponseFromJSON(jsonValue));
    }

    /**
     * listLawfirmBankPayouts
     */
    async listLawfirmBankPayoutsUsingGET(requestParameters: ListLawfirmBankPayoutsUsingGETRequest): Promise<ListLawfirmBankPayoutsResponse> {
        const response = await this.listLawfirmBankPayoutsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * refundLawfirmFee
     */
    async refundLawfirmFeeUsingPOSTRaw(requestParameters: RefundLawfirmFeeUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.lawfirmFeeId === null || requestParameters.lawfirmFeeId === undefined) {
            throw new runtime.RequiredError('lawfirmFeeId','Required parameter requestParameters.lawfirmFeeId was null or undefined when calling refundLawfirmFeeUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling refundLawfirmFeeUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirm-fee/{lawfirmFeeId}/refund`.replace(`{${"lawfirmFeeId"}}`, encodeURIComponent(String(requestParameters.lawfirmFeeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefundLawfirmFeeRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * refundLawfirmFee
     */
    async refundLawfirmFeeUsingPOST(requestParameters: RefundLawfirmFeeUsingPOSTRequest): Promise<void> {
        await this.refundLawfirmFeeUsingPOSTRaw(requestParameters);
    }

    /**
     * reverseLawfirmPayout
     */
    async reverseLawfirmPayoutUsingPOSTRaw(requestParameters: ReverseLawfirmPayoutUsingPOSTRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.lawfirmPayoutId === null || requestParameters.lawfirmPayoutId === undefined) {
            throw new runtime.RequiredError('lawfirmPayoutId','Required parameter requestParameters.lawfirmPayoutId was null or undefined when calling reverseLawfirmPayoutUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling reverseLawfirmPayoutUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirm-payouts/{lawfirmPayoutId}/reverse`.replace(`{${"lawfirmPayoutId"}}`, encodeURIComponent(String(requestParameters.lawfirmPayoutId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReverseLawfirmPayoutRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * reverseLawfirmPayout
     */
    async reverseLawfirmPayoutUsingPOST(requestParameters: ReverseLawfirmPayoutUsingPOSTRequest): Promise<object> {
        const response = await this.reverseLawfirmPayoutUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * sendPayoutToLawfirm
     */
    async sendPayoutToLawfirmUsingPOSTRaw(requestParameters: SendPayoutToLawfirmUsingPOSTRequest): Promise<runtime.ApiResponse<SendPayoutToLawfirmResponse>> {
        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling sendPayoutToLawfirmUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling sendPayoutToLawfirmUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirms/{lawfirmId}/payouts`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendPayoutToLawfirmRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SendPayoutToLawfirmResponseFromJSON(jsonValue));
    }

    /**
     * sendPayoutToLawfirm
     */
    async sendPayoutToLawfirmUsingPOST(requestParameters: SendPayoutToLawfirmUsingPOSTRequest): Promise<SendPayoutToLawfirmResponse> {
        const response = await this.sendPayoutToLawfirmUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateLawfirmFee
     */
    async updateLawfirmFeeUsingPUTRaw(requestParameters: UpdateLawfirmFeeUsingPUTRequest): Promise<runtime.ApiResponse<UpdateLawfirmFeeResponse>> {
        if (requestParameters.lawfirmFeeId === null || requestParameters.lawfirmFeeId === undefined) {
            throw new runtime.RequiredError('lawfirmFeeId','Required parameter requestParameters.lawfirmFeeId was null or undefined when calling updateLawfirmFeeUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateLawfirmFeeUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirm-fees/{lawfirmFeeId}`.replace(`{${"lawfirmFeeId"}}`, encodeURIComponent(String(requestParameters.lawfirmFeeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateLawfirmFeeRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateLawfirmFeeResponseFromJSON(jsonValue));
    }

    /**
     * updateLawfirmFee
     */
    async updateLawfirmFeeUsingPUT(requestParameters: UpdateLawfirmFeeUsingPUTRequest): Promise<UpdateLawfirmFeeResponse> {
        const response = await this.updateLawfirmFeeUsingPUTRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateLawfirmPayout
     */
    async updateLawfirmPayoutUsingPUTRaw(requestParameters: UpdateLawfirmPayoutUsingPUTRequest): Promise<runtime.ApiResponse<UpdateLawfirmPayoutResponse>> {
        if (requestParameters.lawfirmPayoutId === null || requestParameters.lawfirmPayoutId === undefined) {
            throw new runtime.RequiredError('lawfirmPayoutId','Required parameter requestParameters.lawfirmPayoutId was null or undefined when calling updateLawfirmPayoutUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateLawfirmPayoutUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirm-payouts/{lawfirmPayoutId}`.replace(`{${"lawfirmPayoutId"}}`, encodeURIComponent(String(requestParameters.lawfirmPayoutId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateLawfirmPayoutRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateLawfirmPayoutResponseFromJSON(jsonValue));
    }

    /**
     * updateLawfirmPayout
     */
    async updateLawfirmPayoutUsingPUT(requestParameters: UpdateLawfirmPayoutUsingPUTRequest): Promise<UpdateLawfirmPayoutResponse> {
        const response = await this.updateLawfirmPayoutUsingPUTRaw(requestParameters);
        return await response.value();
    }

}
