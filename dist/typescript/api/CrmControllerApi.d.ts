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
export declare class CrmControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary generateTemplate
     * @param request request
     */
    generateTemplateUsingPOST(request: models.GenerateTemplateRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetEmailTemplateResponse>;
    /**
     *
     * @summary getOutgoingContacts
     * @param recipientEmailAddress recipientEmailAddress
     */
    getOutgoingContactsUsingGET(recipientEmailAddress: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetOutgoingContactsResponse>;
    /**
     *
     * @summary getTemplates
     * @param category category
     */
    getTemplatesUsingGET(category?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
    /**
     *
     * @summary replyToTicket
     * @param ticketId ticketId
     * @param request request
     */
    replyToTicketUsingPOST(ticketId: number, request: models.ReplyToTicketRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary sendBookingReceipt
     * @param request request
     */
    sendBookingReceiptUsingPOST(request: models.SendBookingReceiptRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary sendConsolidatedEmailToUser
     * @param request request
     */
    sendConsolidatedEmailToUserUsingPOST(request: models.SendConsolidatedEmailToUser, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary sendEmailToUser
     * @param request request
     */
    sendEmailToUserUsingPOST(request: models.SendEmailToUserRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary sendEmailToUsers
     * @param request request
     */
    sendEmailToUsersUsingPOST(request: models.SendEmailToUsersRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
