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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class ListCasesControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary getCasesForUser
     * @param userId userId
     */
    getCasesForUserUsingGET(userId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetClientCasesResponse>;
    /**
     *
     * @summary getUserCases
     * @param userId userId
     */
    getUserCasesUsingGET(userId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetUserCasesResponse>;
    /**
     *
     * @summary listDashboardCases
     * @param userId userId
     * @param limit limit
     * @param previousPageToken previousPageToken
     * @param sortBy sortBy
     * @param statusCategories statusCategories
     */
    listDashboardCasesUsingGET(userId: number, limit?: number, previousPageToken?: string, sortBy?: 'BOOKING_CONFIRMED_DATE' | 'CITATION_ISSUE_DATE', statusCategories?: Array<'ACTIVE' | 'CANCELLED' | 'RESOLVED' | 'UNCONFIRMED'>, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListDashboardCasesResponse>;
}
