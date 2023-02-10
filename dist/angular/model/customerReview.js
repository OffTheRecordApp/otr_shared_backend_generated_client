"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerReview = void 0;
var CustomerReview;
(function (CustomerReview) {
    CustomerReview.LoggedInUserVoteEnum = {
        Helpful: 'HELPFUL',
        Unhelpful: 'UNHELPFUL'
    };
    CustomerReview.NameSettingEnum = {
        Anonymous: 'ANONYMOUS',
        FirstNameLastInitial: 'FIRST_NAME_LAST_INITIAL',
        FullName: 'FULL_NAME'
    };
    CustomerReview.SourceEnum = {
        Android: 'ANDROID',
        Apple: 'APPLE',
        Facebook: 'FACEBOOK',
        GoogleBusiness: 'GOOGLE_BUSINESS',
        Otr: 'OTR',
        ReviewsIo: 'REVIEWS_IO'
    };
})(CustomerReview = exports.CustomerReview || (exports.CustomerReview = {}));
