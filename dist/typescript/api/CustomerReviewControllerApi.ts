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

export class CustomerReviewControllerApi {
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
     * @summary addCustomerReview
     * @param addReviewRequest addReviewRequest
     */
    public addCustomerReviewUsingPOST (addReviewRequest: models.AddReviewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/reviews';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'addReviewRequest' is not null or undefined
        if (addReviewRequest === null || addReviewRequest === undefined) {
            throw new Error('Required parameter addReviewRequest was null or undefined when calling addCustomerReviewUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: addReviewRequest,
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
     * @summary editCustomerReview
     * @param reviewId reviewId
     * @param editCustomerReviewRequest editCustomerReviewRequest
     */
    public editCustomerReviewUsingPUT (reviewId: number, editCustomerReviewRequest: models.EditCustomerReviewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/reviews/api/v1/reviews/{reviewId}'
            .replace('{' + 'reviewId' + '}', encodeURIComponent(String(reviewId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'reviewId' is not null or undefined
        if (reviewId === null || reviewId === undefined) {
            throw new Error('Required parameter reviewId was null or undefined when calling editCustomerReviewUsingPUT.');
        }

        // verify required parameter 'editCustomerReviewRequest' is not null or undefined
        if (editCustomerReviewRequest === null || editCustomerReviewRequest === undefined) {
            throw new Error('Required parameter editCustomerReviewRequest was null or undefined when calling editCustomerReviewUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: editCustomerReviewRequest,
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
     * @summary listCustomerReviews
     * @param includeAnonymous includeAnonymous
     * @param includeDeleted includeDeleted
     * @param includeRatings includeRatings
     * @param isFeatured isFeatured
     * @param lawfirmId lawfirmId
     * @param limit limit
     * @param nextPageToken nextPageToken
     * @param previousPageToken previousPageToken
     * @param state state
     * @param tags tags
     * @param version version
     */
    public listCustomerReviewsUsingGET (includeAnonymous?: boolean, includeDeleted?: boolean, includeRatings?: boolean, isFeatured?: boolean, lawfirmId?: number, limit?: number, nextPageToken?: string, previousPageToken?: string, state?: 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY', tags?: string, version?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListReviewsResponse> {
        const localVarPath = this.basePath + '/api/v1/reviews';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (includeAnonymous !== undefined) {
            queryParameters['includeAnonymous'] = includeAnonymous;
        }

        if (includeDeleted !== undefined) {
            queryParameters['includeDeleted'] = includeDeleted;
        }

        if (includeRatings !== undefined) {
            queryParameters['includeRatings'] = includeRatings;
        }

        if (isFeatured !== undefined) {
            queryParameters['isFeatured'] = isFeatured;
        }

        if (lawfirmId !== undefined) {
            queryParameters['lawfirmId'] = lawfirmId;
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

        if (state !== undefined) {
            queryParameters['state'] = state;
        }

        if (tags !== undefined) {
            queryParameters['tags'] = tags;
        }

        if (version !== undefined) {
            queryParameters['version'] = version;
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
     * @summary listEligibleStatusesForReview
     */
    public listEligibleStatusesForReviewUsingGET (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListEligibleStatusResponse> {
        const localVarPath = this.basePath + '/api/v1/reviews/eligible-statuses';

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
     * @summary markCommentWithVote
     * @param commentId commentId
     * @param reviewId reviewId
     * @param like like
     */
    public markCommentWithVoteUsingPUT (commentId: number, reviewId: number, like?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/reviews/{reviewId}/comments/{commentId}/vote'
            .replace('{' + 'commentId' + '}', encodeURIComponent(String(commentId)))
            .replace('{' + 'reviewId' + '}', encodeURIComponent(String(reviewId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'commentId' is not null or undefined
        if (commentId === null || commentId === undefined) {
            throw new Error('Required parameter commentId was null or undefined when calling markCommentWithVoteUsingPUT.');
        }

        // verify required parameter 'reviewId' is not null or undefined
        if (reviewId === null || reviewId === undefined) {
            throw new Error('Required parameter reviewId was null or undefined when calling markCommentWithVoteUsingPUT.');
        }

        if (like !== undefined) {
            queryParameters['like'] = like;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
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
     * @summary markReviewWithVote
     * @param reviewId reviewId
     * @param helpful helpful
     */
    public markReviewWithVoteUsingPUT (reviewId: number, helpful?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/reviews/{reviewId}/vote'
            .replace('{' + 'reviewId' + '}', encodeURIComponent(String(reviewId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'reviewId' is not null or undefined
        if (reviewId === null || reviewId === undefined) {
            throw new Error('Required parameter reviewId was null or undefined when calling markReviewWithVoteUsingPUT.');
        }

        if (helpful !== undefined) {
            queryParameters['helpful'] = helpful;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
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
     * @summary replyToCustomerReview
     * @param reviewId reviewId
     * @param request request
     */
    public replyToCustomerReviewUsingPOST (reviewId: number, request: models.ReplyToReviewRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/reviews/{reviewId}/comments'
            .replace('{' + 'reviewId' + '}', encodeURIComponent(String(reviewId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'reviewId' is not null or undefined
        if (reviewId === null || reviewId === undefined) {
            throw new Error('Required parameter reviewId was null or undefined when calling replyToCustomerReviewUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling replyToCustomerReviewUsingPOST.');
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
     * @summary setCustomerReviewStatus
     * @param reviewId reviewId
     * @param setCustomerReviewStatusRequest setCustomerReviewStatusRequest
     */
    public setCustomerReviewStatusUsingPUT (reviewId: number, setCustomerReviewStatusRequest: models.SetCustomerReviewStatusRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/reviews/api/v1/reviews/{reviewId}/status'
            .replace('{' + 'reviewId' + '}', encodeURIComponent(String(reviewId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'reviewId' is not null or undefined
        if (reviewId === null || reviewId === undefined) {
            throw new Error('Required parameter reviewId was null or undefined when calling setCustomerReviewStatusUsingPUT.');
        }

        // verify required parameter 'setCustomerReviewStatusRequest' is not null or undefined
        if (setCustomerReviewStatusRequest === null || setCustomerReviewStatusRequest === undefined) {
            throw new Error('Required parameter setCustomerReviewStatusRequest was null or undefined when calling setCustomerReviewStatusUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: setCustomerReviewStatusRequest,
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
     * @summary updateCommentForCustomerReview
     * @param commentId commentId
     * @param reviewId reviewId
     * @param request request
     */
    public updateCommentForCustomerReviewUsingPOST (commentId: number, reviewId: number, request: models.UpdateReplyForCustomerReview, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/reviews/{reviewId}/comments/{commentId}'
            .replace('{' + 'commentId' + '}', encodeURIComponent(String(commentId)))
            .replace('{' + 'reviewId' + '}', encodeURIComponent(String(reviewId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'commentId' is not null or undefined
        if (commentId === null || commentId === undefined) {
            throw new Error('Required parameter commentId was null or undefined when calling updateCommentForCustomerReviewUsingPOST.');
        }

        // verify required parameter 'reviewId' is not null or undefined
        if (reviewId === null || reviewId === undefined) {
            throw new Error('Required parameter reviewId was null or undefined when calling updateCommentForCustomerReviewUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCommentForCustomerReviewUsingPOST.');
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
