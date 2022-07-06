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

export class AuditLawfirmEventsControllerApi {
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
     * @summary listLawfirmAuditEventsByCursor
     * @param lawfirmId lawfirmId
     * @param excludeTypes excludeTypes
     * @param includeTypes includeTypes
     * @param limit limit
     * @param nextPageToken nextPageToken
     */
    public listLawfirmAuditEventsByCursorUsingGET (lawfirmId: number, excludeTypes?: Array<'CASE_BOOKING' | 'CASE_MATCH' | 'CITATION_UPLOAD' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'VACATION_MODE_TOGGLE'>, includeTypes?: Array<'CASE_BOOKING' | 'CASE_MATCH' | 'CITATION_UPLOAD' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'VACATION_MODE_TOGGLE'>, limit?: number, nextPageToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListLawfirmAuditEventsByCursorResponse> {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/audit-events'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling listLawfirmAuditEventsByCursorUsingGET.');
        }

        if (excludeTypes !== undefined) {
            queryParameters['excludeTypes'] = excludeTypes;
        }

        if (includeTypes !== undefined) {
            queryParameters['includeTypes'] = includeTypes;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (nextPageToken !== undefined) {
            queryParameters['nextPageToken'] = nextPageToken;
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
