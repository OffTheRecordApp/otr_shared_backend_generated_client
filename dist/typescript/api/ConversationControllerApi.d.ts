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
export declare class ConversationControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary addMessageToConversation
     * @param caseId caseId
     * @param request request
     */
    addMessageToConversationUsingPOST(caseId: string, request: models.AddNewCaseMessageRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.AddCaseMessageResponse>;
    /**
     *
     * @summary editMessage
     * @param caseId caseId
     * @param messageId messageId
     * @param request request
     */
    editMessageUsingPUT(caseId: string, messageId: number, request: models.EditConversationMessageRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary getConversation
     * @param caseId caseId
     * @param length length
     * @param page page
     */
    getConversationUsingGET(caseId: string, length?: number, page?: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCaseMessagesResponse>;
    /**
     *
     * @summary getMessage
     * @param caseId caseId
     * @param messageId messageId
     */
    getMessageUsingGET(caseId: string, messageId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCaseMessagesResponse>;
    /**
     *
     * @summary markMessageAsDeleted
     * @param caseId caseId
     * @param isDeleted isDeleted
     * @param messageId messageId
     */
    markMessageAsDeletedUsingPUT(caseId: string, isDeleted: boolean, messageId: number, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary setFlagOnMessages
     * @param request request
     */
    setFlagOnMessagesUsingPUT(request: models.SetFlagOnMessagesRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary setStarOnMessages
     * @param request request
     */
    setStarOnMessagesUsingPUT(request: models.SetStarOnMessagesRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
