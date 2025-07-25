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
export declare class CaseActionsControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary addActionToCaseV2
     * @param caseId caseId
     * @param request request
     */
    addActionToCaseV2UsingPOST(caseId: string, request: models.AddActionToCaseRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.AddActionToCaseResponse>;
    /**
     *
     * @summary getActionTimeline
     * @param caseId caseId
     */
    getActionTimelineUsingGET(caseId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCaseActionTimelineResponse>;
    /**
     *
     * @summary getAllActions
     */
    getAllActionsUsingGET(extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCaseActionTypesResponse>;
    /**
     *
     * @summary getCaseActions
     * @param caseId caseId
     * @param showDeleted showDeleted
     */
    getCaseActionsUsingGET(caseId: string, showDeleted?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCaseActionResponse>;
    /**
     *
     * @summary markActionAsDeleted
     * @param caseActionId caseActionId
     * @param caseId caseId
     * @param isDeleted isDeleted
     */
    markActionAsDeletedUsingDELETE(caseActionId: number, caseId: string, isDeleted: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<models.MarkActionAsDeletedResponse>;
    /**
     *
     * @summary updateCaseAction
     * @param caseActionId caseActionId
     * @param caseId caseId
     * @param request request
     */
    updateCaseActionUsingPUT(caseActionId: number, caseId: string, request: models.UpdateCaseActionRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.UpdateCaseActionResponse>;
}
