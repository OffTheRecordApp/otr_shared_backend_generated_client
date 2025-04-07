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
export declare class CaseReferralCodeControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     * Apply referral code to a case to adjust the estimated cost and/or to assign the rightful lawfirm. This operation is idempotent
     * @summary applyReferralCode
     * @param caseId caseId
     * @param codeId codeId
     */
    applyReferralCodeUsingPOST(caseId: string, codeId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.MatchCaseResponse>;
    /**
     *
     * @summary removeReferralCodeFromCase
     * @param caseId caseId
     * @param codeId codeId
     */
    removeReferralCodeFromCaseUsingDELETE(caseId: string, codeId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary removeReferralCodeFromCaseV2
     * @param caseId caseId
     * @param codeId codeId
     */
    removeReferralCodeFromCaseV2UsingDELETE(caseId: string, codeId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
