"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReviewRequest = void 0;
var AddReviewRequest;
(function (AddReviewRequest) {
    AddReviewRequest.PrivacyModeEnum = {
        Friends: 'FRIENDS',
        Private: 'PRIVATE',
        Public: 'PUBLIC',
        SemiPublic: 'SEMI_PUBLIC'
    };
    AddReviewRequest.SourceEnum = {
        Android: 'ANDROID',
        Apple: 'APPLE',
        Facebook: 'FACEBOOK',
        GoogleBusiness: 'GOOGLE_BUSINESS',
        Otr: 'OTR',
        ReviewsIo: 'REVIEWS_IO'
    };
})(AddReviewRequest = exports.AddReviewRequest || (exports.AddReviewRequest = {}));
