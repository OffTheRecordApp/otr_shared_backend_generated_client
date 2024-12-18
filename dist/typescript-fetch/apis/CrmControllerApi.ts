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
    GenerateTemplateRequest,
    GenerateTemplateRequestFromJSON,
    GenerateTemplateRequestToJSON,
    GetEmailTemplateResponse,
    GetEmailTemplateResponseFromJSON,
    GetEmailTemplateResponseToJSON,
    GetOutgoingContactsResponse,
    GetOutgoingContactsResponseFromJSON,
    GetOutgoingContactsResponseToJSON,
    ReplyToTicketRequest,
    ReplyToTicketRequestFromJSON,
    ReplyToTicketRequestToJSON,
    SendBookingReceiptRequest,
    SendBookingReceiptRequestFromJSON,
    SendBookingReceiptRequestToJSON,
    SendConsolidatedEmailToUser,
    SendConsolidatedEmailToUserFromJSON,
    SendConsolidatedEmailToUserToJSON,
    SendEmailToUserRequest,
    SendEmailToUserRequestFromJSON,
    SendEmailToUserRequestToJSON,
    SendEmailToUsersRequest,
    SendEmailToUsersRequestFromJSON,
    SendEmailToUsersRequestToJSON,
} from '../models';

export interface GenerateTemplateUsingPOSTRequest {
    request: GenerateTemplateRequest;
}

export interface GetOutgoingContactsUsingGETRequest {
    recipientEmailAddress: string;
}

export interface GetTemplatesUsingGETRequest {
    category?: string;
}

export interface ReplyToTicketUsingPOSTRequest {
    ticketId: number;
    request: ReplyToTicketRequest;
}

export interface SendBookingReceiptUsingPOSTRequest {
    request: SendBookingReceiptRequest;
}

export interface SendConsolidatedEmailToUserUsingPOSTRequest {
    request: SendConsolidatedEmailToUser;
}

export interface SendEmailToUserUsingPOSTRequest {
    request: SendEmailToUserRequest;
}

export interface SendEmailToUsersUsingPOSTRequest {
    request: SendEmailToUsersRequest;
}

/**
 * 
 */
export class CrmControllerApi extends runtime.BaseAPI {

    /**
     * generateTemplate
     */
    async generateTemplateUsingPOSTRaw(requestParameters: GenerateTemplateUsingPOSTRequest): Promise<runtime.ApiResponse<GetEmailTemplateResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling generateTemplateUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/crm/generate-template`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GenerateTemplateRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEmailTemplateResponseFromJSON(jsonValue));
    }

    /**
     * generateTemplate
     */
    async generateTemplateUsingPOST(requestParameters: GenerateTemplateUsingPOSTRequest): Promise<GetEmailTemplateResponse> {
        const response = await this.generateTemplateUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * getOutgoingContacts
     */
    async getOutgoingContactsUsingGETRaw(requestParameters: GetOutgoingContactsUsingGETRequest): Promise<runtime.ApiResponse<GetOutgoingContactsResponse>> {
        if (requestParameters.recipientEmailAddress === null || requestParameters.recipientEmailAddress === undefined) {
            throw new runtime.RequiredError('recipientEmailAddress','Required parameter requestParameters.recipientEmailAddress was null or undefined when calling getOutgoingContactsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.recipientEmailAddress !== undefined) {
            queryParameters['recipientEmailAddress'] = requestParameters.recipientEmailAddress;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/crm/contacts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetOutgoingContactsResponseFromJSON(jsonValue));
    }

    /**
     * getOutgoingContacts
     */
    async getOutgoingContactsUsingGET(requestParameters: GetOutgoingContactsUsingGETRequest): Promise<GetOutgoingContactsResponse> {
        const response = await this.getOutgoingContactsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getTemplates
     */
    async getTemplatesUsingGETRaw(requestParameters: GetTemplatesUsingGETRequest): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.category !== undefined) {
            queryParameters['category'] = requestParameters.category;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/crm/templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * getTemplates
     */
    async getTemplatesUsingGET(requestParameters: GetTemplatesUsingGETRequest): Promise<Array<string>> {
        const response = await this.getTemplatesUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * replyToTicket
     */
    async replyToTicketUsingPOSTRaw(requestParameters: ReplyToTicketUsingPOSTRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.ticketId === null || requestParameters.ticketId === undefined) {
            throw new runtime.RequiredError('ticketId','Required parameter requestParameters.ticketId was null or undefined when calling replyToTicketUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling replyToTicketUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/crm/ticket/{ticketId}/reply`.replace(`{${"ticketId"}}`, encodeURIComponent(String(requestParameters.ticketId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReplyToTicketRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * replyToTicket
     */
    async replyToTicketUsingPOST(requestParameters: ReplyToTicketUsingPOSTRequest): Promise<object> {
        const response = await this.replyToTicketUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * sendBookingReceipt
     */
    async sendBookingReceiptUsingPOSTRaw(requestParameters: SendBookingReceiptUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling sendBookingReceiptUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/crm/booking-receipt`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendBookingReceiptRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * sendBookingReceipt
     */
    async sendBookingReceiptUsingPOST(requestParameters: SendBookingReceiptUsingPOSTRequest): Promise<void> {
        await this.sendBookingReceiptUsingPOSTRaw(requestParameters);
    }

    /**
     * sendConsolidatedEmailToUser
     */
    async sendConsolidatedEmailToUserUsingPOSTRaw(requestParameters: SendConsolidatedEmailToUserUsingPOSTRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling sendConsolidatedEmailToUserUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/crm/user/consolidate-email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendConsolidatedEmailToUserToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * sendConsolidatedEmailToUser
     */
    async sendConsolidatedEmailToUserUsingPOST(requestParameters: SendConsolidatedEmailToUserUsingPOSTRequest): Promise<object> {
        const response = await this.sendConsolidatedEmailToUserUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * sendEmailToUser
     */
    async sendEmailToUserUsingPOSTRaw(requestParameters: SendEmailToUserUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling sendEmailToUserUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/crm/user/email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendEmailToUserRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * sendEmailToUser
     */
    async sendEmailToUserUsingPOST(requestParameters: SendEmailToUserUsingPOSTRequest): Promise<void> {
        await this.sendEmailToUserUsingPOSTRaw(requestParameters);
    }

    /**
     * sendEmailToUsers
     */
    async sendEmailToUsersUsingPOSTRaw(requestParameters: SendEmailToUsersUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling sendEmailToUsersUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/crm/users/email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendEmailToUsersRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * sendEmailToUsers
     */
    async sendEmailToUsersUsingPOST(requestParameters: SendEmailToUsersUsingPOSTRequest): Promise<void> {
        await this.sendEmailToUsersUsingPOSTRaw(requestParameters);
    }

}
