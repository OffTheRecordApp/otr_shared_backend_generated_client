"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralResponse = void 0;
var ReferralResponse;
(function (ReferralResponse) {
    ReferralResponse.ReferralCreditStatusEnum = {
        Applied: 'APPLIED',
        CaseCancelled: 'CASE_CANCELLED',
        Confirmed: 'CONFIRMED',
        Notified: 'NOTIFIED',
        Saved: 'SAVED',
        Superseded: 'SUPERSEDED'
    };
    ReferralResponse.ReferralCreditTypeEnum = {
        CentsValue: 'CENTS_VALUE',
        NoCredit: 'NO_CREDIT',
        PercentageDiscount: 'PERCENTAGE_DISCOUNT'
    };
    ReferralResponse.ReferralEventEnum = {
        CaseBooking: 'CASE_BOOKING',
        CaseMatch: 'CASE_MATCH',
        Invite: 'INVITE',
        Registration: 'REGISTRATION'
    };
    ReferralResponse.ReferralPaymentStatusEnum = {
        Error: 'ERROR',
        None: 'NONE',
        PaidOut: 'PAID_OUT',
        PendingAccountVerification: 'PENDING_ACCOUNT_VERIFICATION',
        PendingCaseResolution: 'PENDING_CASE_RESOLUTION'
    };
    ReferralResponse.ReferralSourceTypeEnum = {
        Billboards: 'BILLBOARDS',
        CheckoutCode: 'CHECKOUT_CODE',
        DmvCom: 'DMV_COM',
        DmvOrg: 'DMV_ORG',
        Dwa: 'DWA',
        Facebook: 'FACEBOOK',
        FriendOrFamily: 'FRIEND_OR_FAMILY',
        GoogleSearch: 'GOOGLE_SEARCH',
        InfluencerAffiliate: 'INFLUENCER_AFFILIATE',
        KickbackApp: 'KICKBACK_APP',
        Other: 'OTHER',
        Radio: 'RADIO',
        Reddit: 'REDDIT',
        TheSmokingTire: 'THE_SMOKING_TIRE',
        Unknown: 'UNKNOWN',
        Vinwiki: 'VINWIKI',
        YoutubeAd: 'YOUTUBE_AD'
    };
})(ReferralResponse = exports.ReferralResponse || (exports.ReferralResponse = {}));
