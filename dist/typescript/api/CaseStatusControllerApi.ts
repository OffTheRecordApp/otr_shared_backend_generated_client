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

export class CaseStatusControllerApi {
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
     * @summary getCaseResolutionStatuses
     * @param stateCode stateCode
     */
    public getCaseResolutionStatusesUsingGET (stateCode?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCaseResolutionStatusesResponse> {
        const localVarPath = this.basePath + '/api/v1/case-statuses/resolution-statuses';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (stateCode !== undefined) {
            queryParameters['stateCode'] = stateCode;
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
     * @summary getCaseStatuses
     * @param categories categories
     */
    public getCaseStatusesUsingGET (categories?: 'ACTIVE' | 'CANCELLED' | 'RESOLVED' | 'UNCONFIRMED', extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.CaseStatusDetailsResponse>> {
        const localVarPath = this.basePath + '/api/v1/case-statuses';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (categories !== undefined) {
            queryParameters['categories'] = categories;
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
}