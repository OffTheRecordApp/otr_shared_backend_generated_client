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

import * as models from './models';

export interface CustomerReview {
    "comments"?: Array<models.ReviewCommentModel>;
    "copy"?: string;
    "courtName"?: string;
    "displayName"?: string;
    "featured"?: boolean;
    "id"?: number;
    "live"?: boolean;
    "loggedInUserVote"?: CustomerReview.LoggedInUserVoteEnum;
    "nameSetting"?: CustomerReview.NameSettingEnum;
    "profilePictureSignedUrl"?: string;
    "profilePictureUrl"?: string;
    "ratingModel"?: models.ReviewRatingModel;
    "recommendationType"?: string;
    "resolutionName"?: string;
    "reviewDateUtc"?: models.Timestamp;
    "source"?: CustomerReview.SourceEnum;
    "starRating"?: string;
    "stateAbbreviation"?: string;
    "tagLine"?: string;
    "ticketLocation"?: string;
    "voteModel"?: models.ReviewVoteAggregateModel;
}

export namespace CustomerReview {
    export enum LoggedInUserVoteEnum {
        HELPFUL = <any> 'HELPFUL',
        UNHELPFUL = <any> 'UNHELPFUL'
    }
    export enum NameSettingEnum {
        ANONYMOUS = <any> 'ANONYMOUS',
        FIRSTNAMELASTINITIAL = <any> 'FIRST_NAME_LAST_INITIAL',
        FULLNAME = <any> 'FULL_NAME'
    }
    export enum SourceEnum {
        ANDROID = <any> 'ANDROID',
        APPLE = <any> 'APPLE',
        FACEBOOK = <any> 'FACEBOOK',
        GOOGLEBUSINESS = <any> 'GOOGLE_BUSINESS',
        OTR = <any> 'OTR',
        REVIEWSIO = <any> 'REVIEWS_IO'
    }
}
