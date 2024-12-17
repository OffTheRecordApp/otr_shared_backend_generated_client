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

/* tslint:disable:no-unused-variable member-ordering */

export class ViolationPenaltyControllerApi {
    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary getPenaltiesByViolation
     * @param violationId violationId
     * @param flavor flavor
     */
    public getPenaltiesByViolationUsingGET (violationId: string, flavor?: 'ALL' | 'SHORT', extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ViolationPenaltyResponse> {
        const localVarPath = this.basePath + '/api/v1/violations/{violationId}/penalties'
            .replace('{' + 'violationId' + '}', encodeURIComponent(String(violationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'violationId' is not null or undefined
        if (violationId === null || violationId === undefined) {
            throw new Error('Required parameter violationId was null or undefined when calling getPenaltiesByViolationUsingGET.');
        }

        if (flavor !== undefined) {
            queryParameters['flavor'] = flavor;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getPenaltyTypes
     */
    public getPenaltyTypesUsingGET (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetPenaltyTypesResponse> {
        const localVarPath = this.basePath + '/api/v1/violations/penalties';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary removePenalty
     * @param penaltyTypeId penaltyTypeId
     * @param violationId violationId
     */
    public removePenaltyUsingDELETE (penaltyTypeId: string, violationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/violations/{violationId}/penalties/{penaltyTypeId}'
            .replace('{' + 'penaltyTypeId' + '}', encodeURIComponent(String(penaltyTypeId)))
            .replace('{' + 'violationId' + '}', encodeURIComponent(String(violationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'penaltyTypeId' is not null or undefined
        if (penaltyTypeId === null || penaltyTypeId === undefined) {
            throw new Error('Required parameter penaltyTypeId was null or undefined when calling removePenaltyUsingDELETE.');
        }

        // verify required parameter 'violationId' is not null or undefined
        if (violationId === null || violationId === undefined) {
            throw new Error('Required parameter violationId was null or undefined when calling removePenaltyUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary upsertPenalty
     * @param violationId violationId
     * @param penaltyToAdd penaltyToAdd
     */
    public upsertPenaltyUsingPOST (violationId: string, penaltyToAdd: models.AddPenaltyRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/violations/{violationId}/penalties'
            .replace('{' + 'violationId' + '}', encodeURIComponent(String(violationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'violationId' is not null or undefined
        if (violationId === null || violationId === undefined) {
            throw new Error('Required parameter violationId was null or undefined when calling upsertPenaltyUsingPOST.');
        }

        // verify required parameter 'penaltyToAdd' is not null or undefined
        if (penaltyToAdd === null || penaltyToAdd === undefined) {
            throw new Error('Required parameter penaltyToAdd was null or undefined when calling upsertPenaltyUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: penaltyToAdd,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}