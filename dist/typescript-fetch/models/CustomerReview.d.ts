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
import { ReviewCommentModel, ReviewRatingModel, ReviewVoteAggregateModel, Timestamp } from './';
/**
 *
 * @export
 * @interface CustomerReview
 */
export interface CustomerReview {
    /**
     *
     * @type {Array<ReviewCommentModel>}
     * @memberof CustomerReview
     */
    comments?: Array<ReviewCommentModel>;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    copy?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    courtName?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    displayName?: string;
    /**
     *
     * @type {boolean}
     * @memberof CustomerReview
     */
    featured?: boolean;
    /**
     *
     * @type {number}
     * @memberof CustomerReview
     */
    id?: number;
    /**
     *
     * @type {boolean}
     * @memberof CustomerReview
     */
    live?: boolean;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    loggedInUserVote?: CustomerReviewLoggedInUserVoteEnum;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    nameSetting?: CustomerReviewNameSettingEnum;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    profilePictureSignedUrl?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    profilePictureUrl?: string;
    /**
     *
     * @type {ReviewRatingModel}
     * @memberof CustomerReview
     */
    ratingModel?: ReviewRatingModel;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    recommendationType?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    resolutionName?: string;
    /**
     *
     * @type {Timestamp}
     * @memberof CustomerReview
     */
    reviewDateUtc?: Timestamp;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    source?: CustomerReviewSourceEnum;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    starRating?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    stateAbbreviation?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    tagLine?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReview
     */
    ticketLocation?: string;
    /**
     *
     * @type {ReviewVoteAggregateModel}
     * @memberof CustomerReview
     */
    voteModel?: ReviewVoteAggregateModel;
}
export declare function CustomerReviewFromJSON(json: any): CustomerReview;
export declare function CustomerReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReview;
export declare function CustomerReviewToJSON(value?: CustomerReview | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CustomerReviewLoggedInUserVoteEnum {
    HELPFUL = "HELPFUL",
    UNHELPFUL = "UNHELPFUL"
}
/**
* @export
* @enum {string}
*/
export declare enum CustomerReviewNameSettingEnum {
    ANONYMOUS = "ANONYMOUS",
    FIRSTNAMELASTINITIAL = "FIRST_NAME_LAST_INITIAL",
    FULLNAME = "FULL_NAME"
}
/**
* @export
* @enum {string}
*/
export declare enum CustomerReviewSourceEnum {
    ANDROID = "ANDROID",
    APPLE = "APPLE",
    FACEBOOK = "FACEBOOK",
    GOOGLEBUSINESS = "GOOGLE_BUSINESS",
    OTR = "OTR",
    REVIEWSIO = "REVIEWS_IO"
}
