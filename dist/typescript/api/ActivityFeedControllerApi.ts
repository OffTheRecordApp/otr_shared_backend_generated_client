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

export class ActivityFeedControllerApi {
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
     * @summary listActivityFeed
     * @param limit limit
     * @param nextPageToken nextPageToken
     * @param previousPageToken previousPageToken
     * @param regionCode regionCode
     */
    public listActivityFeedUsingGET (limit: number, nextPageToken?: string, previousPageToken?: string, regionCode?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetActivityFeedResponse> {
        const localVarPath = this.basePath + '/api/v1/activity-feed';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling listActivityFeedUsingGET.');
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (nextPageToken !== undefined) {
            queryParameters['nextPageToken'] = nextPageToken;
        }

        if (previousPageToken !== undefined) {
            queryParameters['previousPageToken'] = previousPageToken;
        }

        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
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
     * @summary listCaseOutcomes
     * @param includeCriminal includeCriminal
     * @param limit limit
     * @param regionCode regionCode
     * @param resolutionStatuses resolutionStatuses
     * @param startDate startDate
     */
    public listCaseOutcomesUsingGET (includeCriminal?: boolean, limit?: number, regionCode?: string, resolutionStatuses?: 'LOST' | 'POINTS_REDUCED' | 'REDUCED_TO_NON_MOVER' | 'TICKET_DISMISSED', startDate?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListCaseOutcomesResponse> {
        const localVarPath = this.basePath + '/api/v1/activity-feed/case-outcomes';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (includeCriminal !== undefined) {
            queryParameters['includeCriminal'] = includeCriminal;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }

        if (resolutionStatuses !== undefined) {
            queryParameters['resolutionStatuses'] = resolutionStatuses;
        }

        if (startDate !== undefined) {
            queryParameters['startDate'] = startDate;
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
