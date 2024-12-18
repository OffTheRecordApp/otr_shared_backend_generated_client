/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    ReviewCommentModel,
    ReviewCommentModelFromJSON,
    ReviewCommentModelFromJSONTyped,
    ReviewCommentModelToJSON,
    ReviewRatingModel,
    ReviewRatingModelFromJSON,
    ReviewRatingModelFromJSONTyped,
    ReviewRatingModelToJSON,
    ReviewVoteAggregateModel,
    ReviewVoteAggregateModelFromJSON,
    ReviewVoteAggregateModelFromJSONTyped,
    ReviewVoteAggregateModelToJSON,
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
} from './';

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

export function CustomerReviewFromJSON(json: any): CustomerReview {
    return CustomerReviewFromJSONTyped(json, false);
}

export function CustomerReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comments': !exists(json, 'comments') ? undefined : ((json['comments'] as Array<any>).map(ReviewCommentModelFromJSON)),
        'copy': !exists(json, 'copy') ? undefined : json['copy'],
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'featured': !exists(json, 'featured') ? undefined : json['featured'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'live': !exists(json, 'live') ? undefined : json['live'],
        'loggedInUserVote': !exists(json, 'loggedInUserVote') ? undefined : json['loggedInUserVote'],
        'nameSetting': !exists(json, 'nameSetting') ? undefined : json['nameSetting'],
        'profilePictureSignedUrl': !exists(json, 'profilePictureSignedUrl') ? undefined : json['profilePictureSignedUrl'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'ratingModel': !exists(json, 'ratingModel') ? undefined : ReviewRatingModelFromJSON(json['ratingModel']),
        'recommendationType': !exists(json, 'recommendationType') ? undefined : json['recommendationType'],
        'resolutionName': !exists(json, 'resolutionName') ? undefined : json['resolutionName'],
        'reviewDateUtc': !exists(json, 'reviewDateUtc') ? undefined : TimestampFromJSON(json['reviewDateUtc']),
        'source': !exists(json, 'source') ? undefined : json['source'],
        'starRating': !exists(json, 'starRating') ? undefined : json['starRating'],
        'stateAbbreviation': !exists(json, 'stateAbbreviation') ? undefined : json['stateAbbreviation'],
        'tagLine': !exists(json, 'tagLine') ? undefined : json['tagLine'],
        'ticketLocation': !exists(json, 'ticketLocation') ? undefined : json['ticketLocation'],
        'voteModel': !exists(json, 'voteModel') ? undefined : ReviewVoteAggregateModelFromJSON(json['voteModel']),
    };
}

export function CustomerReviewToJSON(value?: CustomerReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comments': value.comments === undefined ? undefined : ((value.comments as Array<any>).map(ReviewCommentModelToJSON)),
        'copy': value.copy,
        'courtName': value.courtName,
        'displayName': value.displayName,
        'featured': value.featured,
        'id': value.id,
        'live': value.live,
        'loggedInUserVote': value.loggedInUserVote,
        'nameSetting': value.nameSetting,
        'profilePictureSignedUrl': value.profilePictureSignedUrl,
        'profilePictureUrl': value.profilePictureUrl,
        'ratingModel': ReviewRatingModelToJSON(value.ratingModel),
        'recommendationType': value.recommendationType,
        'resolutionName': value.resolutionName,
        'reviewDateUtc': TimestampToJSON(value.reviewDateUtc),
        'source': value.source,
        'starRating': value.starRating,
        'stateAbbreviation': value.stateAbbreviation,
        'tagLine': value.tagLine,
        'ticketLocation': value.ticketLocation,
        'voteModel': ReviewVoteAggregateModelToJSON(value.voteModel),
    };
}

/**
* @export
* @enum {string}
*/
export enum CustomerReviewLoggedInUserVoteEnum {
    HELPFUL = 'HELPFUL',
    UNHELPFUL = 'UNHELPFUL'
}
/**
* @export
* @enum {string}
*/
export enum CustomerReviewNameSettingEnum {
    ANONYMOUS = 'ANONYMOUS',
    FIRSTNAMELASTINITIAL = 'FIRST_NAME_LAST_INITIAL',
    FULLNAME = 'FULL_NAME'
}
/**
* @export
* @enum {string}
*/
export enum CustomerReviewSourceEnum {
    ANDROID = 'ANDROID',
    APPLE = 'APPLE',
    FACEBOOK = 'FACEBOOK',
    GOOGLEBUSINESS = 'GOOGLE_BUSINESS',
    OTR = 'OTR',
    REVIEWSIO = 'REVIEWS_IO'
}


