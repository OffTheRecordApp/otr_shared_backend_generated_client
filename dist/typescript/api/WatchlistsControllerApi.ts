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

export class WatchlistsControllerApi {
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
     * @summary listUserWatchlists
     * @param userId userId
     * @param includeArchived includeArchived
     * @param includeDeleted includeDeleted
     * @param watchlistId watchlistId
     */
    public listUserWatchlistsUsingGET (userId: number, includeArchived?: boolean, includeDeleted?: boolean, watchlistId?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListUserWatchlistsResponse> {
        const localVarPath = this.basePath + '/api/v1/watchlists/{userId}/lists'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listUserWatchlistsUsingGET.');
        }

        if (includeArchived !== undefined) {
            queryParameters['includeArchived'] = includeArchived;
        }

        if (includeDeleted !== undefined) {
            queryParameters['includeDeleted'] = includeDeleted;
        }

        if (watchlistId !== undefined) {
            queryParameters['watchlistId'] = watchlistId;
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
     * @summary removeItemFromWatchlist
     * @param itemId itemId
     * @param watchlistId watchlistId
     */
    public removeItemFromWatchlistUsingDELETE (itemId: number, watchlistId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/watchlists/{watchlistId}/items/{itemId}'
            .replace('{' + 'itemId' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'watchlistId' + '}', encodeURIComponent(String(watchlistId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling removeItemFromWatchlistUsingDELETE.');
        }

        // verify required parameter 'watchlistId' is not null or undefined
        if (watchlistId === null || watchlistId === undefined) {
            throw new Error('Required parameter watchlistId was null or undefined when calling removeItemFromWatchlistUsingDELETE.');
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
     * @summary saveItemToWatchlist
     * @param watchlistId watchlistId
     * @param request request
     */
    public saveItemToWatchlistUsingPOST (watchlistId: number, request: models.SaveItemToWatchlistRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/watchlists/{watchlistId}/items'
            .replace('{' + 'watchlistId' + '}', encodeURIComponent(String(watchlistId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'watchlistId' is not null or undefined
        if (watchlistId === null || watchlistId === undefined) {
            throw new Error('Required parameter watchlistId was null or undefined when calling saveItemToWatchlistUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveItemToWatchlistUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
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
     * @summary saveUserWatchlists
     * @param userId userId
     * @param request request
     */
    public saveUserWatchlistsUsingPOST (userId: number, request: models.SaveUserWatchlistsRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/watchlists/{userId}/lists'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling saveUserWatchlistsUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveUserWatchlistsUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
