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
export declare namespace CustomerReview {
    enum LoggedInUserVoteEnum {
        HELPFUL,
        UNHELPFUL
    }
    enum NameSettingEnum {
        ANONYMOUS,
        FIRSTNAMELASTINITIAL,
        FULLNAME
    }
    enum SourceEnum {
        ANDROID,
        APPLE,
        FACEBOOK,
        GOOGLEBUSINESS,
        OTR,
        REVIEWSIO
    }
}
