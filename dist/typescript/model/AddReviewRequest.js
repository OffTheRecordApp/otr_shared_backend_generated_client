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
export var AddReviewRequest;
(function (AddReviewRequest) {
    let PrivacyModeEnum;
    (function (PrivacyModeEnum) {
        PrivacyModeEnum[PrivacyModeEnum["FRIENDS"] = 'FRIENDS'] = "FRIENDS";
        PrivacyModeEnum[PrivacyModeEnum["PRIVATE"] = 'PRIVATE'] = "PRIVATE";
        PrivacyModeEnum[PrivacyModeEnum["PUBLIC"] = 'PUBLIC'] = "PUBLIC";
        PrivacyModeEnum[PrivacyModeEnum["SEMIPUBLIC"] = 'SEMI_PUBLIC'] = "SEMIPUBLIC";
    })(PrivacyModeEnum = AddReviewRequest.PrivacyModeEnum || (AddReviewRequest.PrivacyModeEnum = {}));
    let SourceEnum;
    (function (SourceEnum) {
        SourceEnum[SourceEnum["ANDROID"] = 'ANDROID'] = "ANDROID";
        SourceEnum[SourceEnum["APPLE"] = 'APPLE'] = "APPLE";
        SourceEnum[SourceEnum["FACEBOOK"] = 'FACEBOOK'] = "FACEBOOK";
        SourceEnum[SourceEnum["GOOGLEBUSINESS"] = 'GOOGLE_BUSINESS'] = "GOOGLEBUSINESS";
        SourceEnum[SourceEnum["OTR"] = 'OTR'] = "OTR";
        SourceEnum[SourceEnum["REVIEWSIO"] = 'REVIEWS_IO'] = "REVIEWSIO";
    })(SourceEnum = AddReviewRequest.SourceEnum || (AddReviewRequest.SourceEnum = {}));
})(AddReviewRequest || (AddReviewRequest = {}));
