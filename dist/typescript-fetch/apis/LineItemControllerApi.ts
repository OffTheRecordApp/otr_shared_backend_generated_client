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
    GetLineItemTypesResponse,
    GetLineItemTypesResponseFromJSON,
    GetLineItemTypesResponseToJSON,
    GetLineItemsResponse,
    GetLineItemsResponseFromJSON,
    GetLineItemsResponseToJSON,
    InsertCaseLineItemResponse,
    InsertCaseLineItemResponseFromJSON,
    InsertCaseLineItemResponseToJSON,
    InsertInvoiceLineItemRequest,
    InsertInvoiceLineItemRequestFromJSON,
    InsertInvoiceLineItemRequestToJSON,
    UpdateInvoiceLineItemRequest,
    UpdateInvoiceLineItemRequestFromJSON,
    UpdateInvoiceLineItemRequestToJSON,
} from '../models';

export interface DeleteCaseLineItemUsingDELETERequest {
    caseId: string;
    lineItemId: string;
}

export interface GetLineItemsUsingGETRequest {
    caseId: string;
}

export interface InsertCaseLineItemUsingPOSTRequest {
    caseId: string;
    request: InsertInvoiceLineItemRequest;
}

export interface UpdateCaseLineItemUsingPUTRequest {
    caseId: string;
    lineItemId: string;
    request: UpdateInvoiceLineItemRequest;
}

/**
 * 
 */
export class LineItemControllerApi extends runtime.BaseAPI {

    /**
     * deleteCaseLineItem
     */
    async deleteCaseLineItemUsingDELETERaw(requestParameters: DeleteCaseLineItemUsingDELETERequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling deleteCaseLineItemUsingDELETE.');
        }

        if (requestParameters.lineItemId === null || requestParameters.lineItemId === undefined) {
            throw new runtime.RequiredError('lineItemId','Required parameter requestParameters.lineItemId was null or undefined when calling deleteCaseLineItemUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/lineitems/{lineItemId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"lineItemId"}}`, encodeURIComponent(String(requestParameters.lineItemId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * deleteCaseLineItem
     */
    async deleteCaseLineItemUsingDELETE(requestParameters: DeleteCaseLineItemUsingDELETERequest): Promise<object> {
        const response = await this.deleteCaseLineItemUsingDELETERaw(requestParameters);
        return await response.value();
    }

    /**
     * getLineItemTypes
     */
    async getLineItemTypesUsingGETRaw(): Promise<runtime.ApiResponse<GetLineItemTypesResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/lineitems`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLineItemTypesResponseFromJSON(jsonValue));
    }

    /**
     * getLineItemTypes
     */
    async getLineItemTypesUsingGET(): Promise<GetLineItemTypesResponse> {
        const response = await this.getLineItemTypesUsingGETRaw();
        return await response.value();
    }

    /**
     * getLineItems
     */
    async getLineItemsUsingGETRaw(requestParameters: GetLineItemsUsingGETRequest): Promise<runtime.ApiResponse<GetLineItemsResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getLineItemsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/line-items`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetLineItemsResponseFromJSON(jsonValue));
    }

    /**
     * getLineItems
     */
    async getLineItemsUsingGET(requestParameters: GetLineItemsUsingGETRequest): Promise<GetLineItemsResponse> {
        const response = await this.getLineItemsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * insertCaseLineItem
     */
    async insertCaseLineItemUsingPOSTRaw(requestParameters: InsertCaseLineItemUsingPOSTRequest): Promise<runtime.ApiResponse<InsertCaseLineItemResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling insertCaseLineItemUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling insertCaseLineItemUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/lineitems`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InsertInvoiceLineItemRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InsertCaseLineItemResponseFromJSON(jsonValue));
    }

    /**
     * insertCaseLineItem
     */
    async insertCaseLineItemUsingPOST(requestParameters: InsertCaseLineItemUsingPOSTRequest): Promise<InsertCaseLineItemResponse> {
        const response = await this.insertCaseLineItemUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * updateCaseLineItem
     */
    async updateCaseLineItemUsingPUTRaw(requestParameters: UpdateCaseLineItemUsingPUTRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling updateCaseLineItemUsingPUT.');
        }

        if (requestParameters.lineItemId === null || requestParameters.lineItemId === undefined) {
            throw new runtime.RequiredError('lineItemId','Required parameter requestParameters.lineItemId was null or undefined when calling updateCaseLineItemUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateCaseLineItemUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/lineitems/{lineItemId}`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"lineItemId"}}`, encodeURIComponent(String(requestParameters.lineItemId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateInvoiceLineItemRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * updateCaseLineItem
     */
    async updateCaseLineItemUsingPUT(requestParameters: UpdateCaseLineItemUsingPUTRequest): Promise<object> {
        const response = await this.updateCaseLineItemUsingPUTRaw(requestParameters);
        return await response.value();
    }

}