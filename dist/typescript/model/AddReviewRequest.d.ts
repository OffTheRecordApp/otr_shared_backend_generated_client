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
export interface AddReviewRequest {
    "caseId"?: string;
    "copy"?: string;
    "isRecommended"?: boolean;
    "privacyMode"?: AddReviewRequest.PrivacyModeEnum;
    "ratingModel"?: models.ReviewRatingModel;
    "source"?: AddReviewRequest.SourceEnum;
    "userId"?: number;
}
export declare namespace AddReviewRequest {
    enum PrivacyModeEnum {
        FRIENDS,
        PRIVATE,
        PUBLIC,
        SEMIPUBLIC
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
