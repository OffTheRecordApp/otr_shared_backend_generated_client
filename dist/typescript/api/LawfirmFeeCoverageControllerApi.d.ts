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
export declare class LawfirmFeeCoverageControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary addCourtToCoverage
     * @param lawfirmIdString lawfirmIdString
     * @param request request
     */
    addCourtToCoverageUsingPOST(lawfirmIdString: string, request: models.PostCourtCoverageRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
    /**
     *
     * @summary enableViolationsForLawfirm
     * @param lawfirmId lawfirmId
     * @param request request
     */
    enableViolationsForLawfirmUsingPOST(lawfirmId: string, request: models.EnableViolationsForLawfirmRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.EnableViolationsForLawfirmResponse>;
    /**
     *
     * @summary getAccountFees
     * @param lawfirmId lawfirmId
     * @param enabledFeesOnly enabledFeesOnly
     */
    getAccountFeesUsingGET(lawfirmId: string, enabledFeesOnly?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<models.AccountLevelFeeResponse>;
    /**
     *
     * @summary getLawfirmCoverage
     * @param lawfirmIdString lawfirmIdString
     */
    getLawfirmCoverageUsingGET(lawfirmIdString: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetLawfirmCoverageResponse>;
    /**
     *
     * @summary getLawfirmFeeCoverage
     * @param lawfirmId lawfirmId
     * @param legalServiceType legalServiceType
     */
    getLawfirmFeeCoverageUsingGET(lawfirmId: string, legalServiceType?: 'DEFER' | 'FIGHT', extraHttpRequestParams?: any): ng.IHttpPromise<models.GetLawfirmFeeCoverageResponse>;
    /**
     *
     * @summary removeAccountFees
     * @param lawfirmId lawfirmId
     * @param classification classification
     * @param isPermitted isPermitted
     * @param regionCode regionCode
     * @param violationId violationId
     */
    removeAccountFeesUsingDELETE(lawfirmId: string, classification?: 'CLASS_1_FELONY' | 'CLASS_1_MISDEMEANOR' | 'CLASS_2_FELONY' | 'CLASS_2_MISDEMEANOR' | 'CLASS_3_FELONY' | 'CLASS_3_MISDEMEANOR' | 'CLASS_4_FELONY' | 'CLASS_4_MISDEMEANOR' | 'CLASS_5_FELONY' | 'CLASS_6_FELONY' | 'CLASS_A1_MISDEMEANOR' | 'CLASS_A_FELONY' | 'CLASS_A_INFRACTION' | 'CLASS_A_MISDEMEANOR' | 'CLASS_A_VIOLATION' | 'CLASS_B_FELONY' | 'CLASS_B_INFRACTION' | 'CLASS_B_MISDEMEANOR' | 'CLASS_B_VIOLATION' | 'CLASS_C_FELONY' | 'CLASS_C_INFRACTION' | 'CLASS_C_MISDEMEANOR' | 'CLASS_C_VIOLATION' | 'CLASS_D_FELONY' | 'CLASS_D_MISDEMEANOR' | 'CLASS_D_VIOLATION' | 'CLASS_E_FELONY' | 'CLASS_F_FELONY' | 'CLASS_H_FELONY' | 'DISORDERLY_PERSONS_OFFENSE' | 'FELONY' | 'FELONY_1ST_DEGREE' | 'FELONY_2ND_DEGREE' | 'FELONY_3RD_DEGREE' | 'FELONY_4TH_DEGREE' | 'FELONY_5TH_DEGREE' | 'GROSS_MISDEMEANOR' | 'HIGH_AND_AGGRAVATED_MISDEMEANOR' | 'INFRACTION' | 'LEVEL_4_FELONY' | 'LEVEL_5_FELONY' | 'LEVEL_6_FELONY' | 'MINOR_MISDEMEANOR' | 'MISDEMEANOR' | 'MISDEMEANOR_1ST_DEGREE' | 'MISDEMEANOR_2ND_DEGREE' | 'MISDEMEANOR_3RD_DEGREE' | 'MISDEMEANOR_4TH_DEGREE' | 'MISDEMEANOR_WITH_REFUND' | 'NON_MOVING' | 'NON_REPORTABLE' | 'PETTY_MISDEMEANOR' | 'QUASI_CRIMINAL' | 'SUMMARY_OFFENSE' | 'SUMMARY_OFFENSE_NO_REFUND' | 'WOBBLER_TO_FELONY' | 'WOBBLER_TO_MISDEMEANOR', isPermitted?: boolean, regionCode?: string, violationId?: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary removeCourts
     * @param courtsToRemove courtsToRemove
     * @param lawfirmId lawfirmId
     */
    removeCourtsUsingDELETE(courtsToRemove: number, lawfirmId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary removeCoverage
     * @param lawfirmId lawfirmId
     * @param courtsToRemove courtsToRemove
     */
    removeCoverageUsingDELETE(lawfirmId: string, courtsToRemove: models.RemoveCoverageRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary resetFeesForLawfirm
     * @param lawfirmId lawfirmId
     * @param request request
     */
    resetFeesForLawfirmUsingPOST(lawfirmId: string, request: models.ResetFeesForLawfirmRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.ResetFeesForLawfirmResponse>;
    /**
     *
     * @summary saveAccountFees
     * @param lawfirmId lawfirmId
     * @param request request
     */
    saveAccountFeesUsingPOST(lawfirmId: string, request: models.AccountLevelFeeRequest, extraHttpRequestParams?: any): ng.IHttpPromise<object>;
}