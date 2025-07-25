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
export declare class CustomerReviewControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary addCustomerReview
     * @param addReviewRequest addReviewRequest
     */
    addCustomerReviewUsingPOST(addReviewRequest: models.AddReviewRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary editCustomerReview
     * @param reviewId reviewId
     * @param editCustomerReviewRequest editCustomerReviewRequest
     */
    editCustomerReviewUsingPUT(reviewId: number, editCustomerReviewRequest: models.EditCustomerReviewRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
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
    listCustomerReviewsUsingGET(includeAnonymous?: boolean, includeDeleted?: boolean, includeRatings?: boolean, isFeatured?: boolean, lawfirmId?: number, limit?: number, nextPageToken?: string, previousPageToken?: string, state?: 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY', tags?: string, version?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListReviewsResponse>;
    /**
     *
     * @summary listEligibleStatusesForReview
     */
    listEligibleStatusesForReviewUsingGET(extraHttpRequestParams?: any): ng.IHttpPromise<models.ListEligibleStatusResponse>;
    /**
     *
     * @summary markCommentWithVote
     * @param commentId commentId
     * @param reviewId reviewId
     * @param like like
     */
    markCommentWithVoteUsingPUT(commentId: number, reviewId: number, like?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary markReviewWithVote
     * @param reviewId reviewId
     * @param helpful helpful
     */
    markReviewWithVoteUsingPUT(reviewId: number, helpful?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary replyToCustomerReview
     * @param reviewId reviewId
     * @param request request
     */
    replyToCustomerReviewUsingPOST(reviewId: number, request: models.ReplyToReviewRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary setCustomerReviewStatus
     * @param reviewId reviewId
     * @param setCustomerReviewStatusRequest setCustomerReviewStatusRequest
     */
    setCustomerReviewStatusUsingPUT(reviewId: number, setCustomerReviewStatusRequest: models.SetCustomerReviewStatusRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary updateCommentForCustomerReview
     * @param commentId commentId
     * @param reviewId reviewId
     * @param request request
     */
    updateCommentForCustomerReviewUsingPOST(commentId: number, reviewId: number, request: models.UpdateReplyForCustomerReview, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
