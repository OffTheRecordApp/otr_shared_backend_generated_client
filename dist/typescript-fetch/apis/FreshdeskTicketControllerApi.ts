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
    FreshDeskTicketReq,
    FreshDeskTicketReqFromJSON,
    FreshDeskTicketReqToJSON,
    FreshDeskTicketRes,
    FreshDeskTicketResFromJSON,
    FreshDeskTicketResToJSON,
    FreshdeskWebhookRequest,
    FreshdeskWebhookRequestFromJSON,
    FreshdeskWebhookRequestToJSON,
    MergeTicketResponse,
    MergeTicketResponseFromJSON,
    MergeTicketResponseToJSON,
} from '../models';

export interface MergeTicketUsingPOSTRequest {
    ticketId: number;
    request: FreshdeskWebhookRequest;
}

export interface TicketStatusChangeHookUsingPUTRequest {
    ticketId: string;
    request: FreshdeskWebhookRequest;
}

export interface UpdateFreshdeskTicketUsingPUTRequest {
    ticketId: number;
    request: FreshDeskTicketReq;
}

/**
 * 
 */
export class FreshdeskTicketControllerApi extends runtime.BaseAPI {

    /**
     * mergeTicket
     */
    async mergeTicketUsingPOSTRaw(requestParameters: MergeTicketUsingPOSTRequest): Promise<runtime.ApiResponse<MergeTicketResponse>> {
        if (requestParameters.ticketId === null || requestParameters.ticketId === undefined) {
            throw new runtime.RequiredError('ticketId','Required parameter requestParameters.ticketId was null or undefined when calling mergeTicketUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling mergeTicketUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/freshdesk/webhook/ticket/{ticketId}/merge`.replace(`{${"ticketId"}}`, encodeURIComponent(String(requestParameters.ticketId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FreshdeskWebhookRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergeTicketResponseFromJSON(jsonValue));
    }

    /**
     * mergeTicket
     */
    async mergeTicketUsingPOST(requestParameters: MergeTicketUsingPOSTRequest): Promise<MergeTicketResponse> {
        const response = await this.mergeTicketUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * ticketStatusChangeHook
     */
    async ticketStatusChangeHookUsingPUTRaw(requestParameters: TicketStatusChangeHookUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ticketId === null || requestParameters.ticketId === undefined) {
            throw new runtime.RequiredError('ticketId','Required parameter requestParameters.ticketId was null or undefined when calling ticketStatusChangeHookUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling ticketStatusChangeHookUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/freshdesk/ticket/{ticketId}/webhook/status-change`.replace(`{${"ticketId"}}`, encodeURIComponent(String(requestParameters.ticketId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FreshdeskWebhookRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * ticketStatusChangeHook
     */
    async ticketStatusChangeHookUsingPUT(requestParameters: TicketStatusChangeHookUsingPUTRequest): Promise<void> {
        await this.ticketStatusChangeHookUsingPUTRaw(requestParameters);
    }

    /**
     * updateFreshdeskTicket
     */
    async updateFreshdeskTicketUsingPUTRaw(requestParameters: UpdateFreshdeskTicketUsingPUTRequest): Promise<runtime.ApiResponse<FreshDeskTicketRes>> {
        if (requestParameters.ticketId === null || requestParameters.ticketId === undefined) {
            throw new runtime.RequiredError('ticketId','Required parameter requestParameters.ticketId was null or undefined when calling updateFreshdeskTicketUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateFreshdeskTicketUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/freshdesk/ticket/{ticketId}`.replace(`{${"ticketId"}}`, encodeURIComponent(String(requestParameters.ticketId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FreshDeskTicketReqToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FreshDeskTicketResFromJSON(jsonValue));
    }

    /**
     * updateFreshdeskTicket
     */
    async updateFreshdeskTicketUsingPUT(requestParameters: UpdateFreshdeskTicketUsingPUTRequest): Promise<FreshDeskTicketRes> {
        const response = await this.updateFreshdeskTicketUsingPUTRaw(requestParameters);
        return await response.value();
    }

}
