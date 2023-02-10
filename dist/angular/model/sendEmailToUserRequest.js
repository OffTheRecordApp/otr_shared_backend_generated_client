"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailToUserRequest = void 0;
var SendEmailToUserRequest;
(function (SendEmailToUserRequest) {
    SendEmailToUserRequest.EmailTemplateIdEnum = {
        AfternoonHello2: 'AFTERNOON_HELLO_2',
        AtticusAttorneyContact1: 'ATTICUS_ATTORNEY_CONTACT_1',
        CameraTicketNmv: 'CAMERA_TICKET_NMV',
        CaseCancelledByUser: 'CASE_CANCELLED_BY_USER',
        CaseCancelledDuplicate: 'CASE_CANCELLED_DUPLICATE',
        CaseCancelledNmv: 'CASE_CANCELLED_NMV',
        CaseCancelledNonPayment: 'CASE_CANCELLED_NON_PAYMENT',
        CaseCancelledNoLawfirm: 'CASE_CANCELLED_NO_LAWFIRM',
        CaseCancelledOverdue: 'CASE_CANCELLED_OVERDUE',
        CaseCancelledTooShortNotice: 'CASE_CANCELLED_TOO_SHORT_NOTICE',
        CasualFirstV1: 'CASUAL_FIRST_V1',
        CasualSecondV1: 'CASUAL_SECOND_V1',
        FridayIntro: 'FRIDAY_INTRO',
        InvalidImageUpload1: 'INVALID_IMAGE_UPLOAD_1',
        LawfirmContact10V1: 'LAWFIRM_CONTACT_10_V1',
        LawfirmContact1V1: 'LAWFIRM_CONTACT_1_V1',
        LawfirmContact2V1: 'LAWFIRM_CONTACT_2_V1',
        LawfirmContact3V1: 'LAWFIRM_CONTACT_3_V1',
        LawfirmContact4V1: 'LAWFIRM_CONTACT_4_V1',
        LawfirmContact5V1: 'LAWFIRM_CONTACT_5_V1',
        LawfirmContact6V1: 'LAWFIRM_CONTACT_6_V1',
        LawfirmContact7V1: 'LAWFIRM_CONTACT_7_V1',
        LawfirmContact8V1: 'LAWFIRM_CONTACT_8_V1',
        LawfirmContact9V1: 'LAWFIRM_CONTACT_9_V1',
        LawyerPostCourtReminder: 'LAWYER_POST_COURT_REMINDER',
        NoCoverageAvailable: 'NO_COVERAGE_AVAILABLE',
        NoCoverageAvailableMissingCourt: 'NO_COVERAGE_AVAILABLE_MISSING_COURT',
        ParkingTicket: 'PARKING_TICKET',
        PostWin: 'POST_WIN',
        PostWinLastAsk: 'POST_WIN_LAST_ASK',
        PostWinV2: 'POST_WIN_V2',
        SundayAfternoonHello: 'SUNDAY_AFTERNOON_HELLO',
        TicketDueWa: 'TICKET_DUE_WA',
        TicketEvalWithCitation: 'TICKET_EVAL_WITH_CITATION',
        TicketEvalWithCitation2NdFollowUp: 'TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP',
        TicketEvalWithCitationCloseOut: 'TICKET_EVAL_WITH_CITATION_CLOSE_OUT'
    };
    SendEmailToUserRequest.ReviewPlatformEnum = {
        Facebook: 'FACEBOOK',
        GoogleMyBusiness: 'GOOGLE_MY_BUSINESS',
        GooglePlayStore: 'GOOGLE_PLAY_STORE',
        Highya: 'HIGHYA',
        IosAppStore: 'IOS_APP_STORE',
        ReviewsIo: 'REVIEWS_IO',
        TrustPilot: 'TRUST_PILOT'
    };
})(SendEmailToUserRequest = exports.SendEmailToUserRequest || (exports.SendEmailToUserRequest = {}));
