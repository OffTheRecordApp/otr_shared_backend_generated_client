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
export interface SendEmailToUserRequest {
    actionType?: string;
    agentId?: number;
    citationId?: number;
    emailTemplateId?: SendEmailToUserRequest.EmailTemplateIdEnum;
    fromEmailAddress?: string;
    reviewPlatform?: SendEmailToUserRequest.ReviewPlatformEnum;
    userIdToContact?: number;
}
export declare namespace SendEmailToUserRequest {
    type EmailTemplateIdEnum = 'AFTERNOON_HELLO_2' | 'ATTICUS_ATTORNEY_CONTACT_1' | 'CAMERA_TICKET_NMV' | 'CASE_CANCELLED_BY_USER' | 'CASE_CANCELLED_DUPLICATE' | 'CASE_CANCELLED_NMV' | 'CASE_CANCELLED_NON_PAYMENT' | 'CASE_CANCELLED_NO_LAWFIRM' | 'CASE_CANCELLED_OVERDUE' | 'CASE_CANCELLED_TOO_SHORT_NOTICE' | 'CASUAL_FIRST_V1' | 'CASUAL_SECOND_V1' | 'FRIDAY_INTRO' | 'INVALID_IMAGE_UPLOAD_1' | 'LAWFIRM_CONTACT_10_V1' | 'LAWFIRM_CONTACT_1_V1' | 'LAWFIRM_CONTACT_2_V1' | 'LAWFIRM_CONTACT_3_V1' | 'LAWFIRM_CONTACT_4_V1' | 'LAWFIRM_CONTACT_5_V1' | 'LAWFIRM_CONTACT_6_V1' | 'LAWFIRM_CONTACT_7_V1' | 'LAWFIRM_CONTACT_8_V1' | 'LAWFIRM_CONTACT_9_V1' | 'LAWYER_POST_COURT_REMINDER' | 'NO_COVERAGE_AVAILABLE' | 'NO_COVERAGE_AVAILABLE_MISSING_COURT' | 'PARKING_TICKET' | 'POST_WIN' | 'POST_WIN_LAST_ASK' | 'POST_WIN_V2' | 'SUNDAY_AFTERNOON_HELLO' | 'TICKET_DUE_WA' | 'TICKET_EVAL_WITH_CITATION' | 'TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP' | 'TICKET_EVAL_WITH_CITATION_CLOSE_OUT';
    const EmailTemplateIdEnum: {
        AfternoonHello2: EmailTemplateIdEnum;
        AtticusAttorneyContact1: EmailTemplateIdEnum;
        CameraTicketNmv: EmailTemplateIdEnum;
        CaseCancelledByUser: EmailTemplateIdEnum;
        CaseCancelledDuplicate: EmailTemplateIdEnum;
        CaseCancelledNmv: EmailTemplateIdEnum;
        CaseCancelledNonPayment: EmailTemplateIdEnum;
        CaseCancelledNoLawfirm: EmailTemplateIdEnum;
        CaseCancelledOverdue: EmailTemplateIdEnum;
        CaseCancelledTooShortNotice: EmailTemplateIdEnum;
        CasualFirstV1: EmailTemplateIdEnum;
        CasualSecondV1: EmailTemplateIdEnum;
        FridayIntro: EmailTemplateIdEnum;
        InvalidImageUpload1: EmailTemplateIdEnum;
        LawfirmContact10V1: EmailTemplateIdEnum;
        LawfirmContact1V1: EmailTemplateIdEnum;
        LawfirmContact2V1: EmailTemplateIdEnum;
        LawfirmContact3V1: EmailTemplateIdEnum;
        LawfirmContact4V1: EmailTemplateIdEnum;
        LawfirmContact5V1: EmailTemplateIdEnum;
        LawfirmContact6V1: EmailTemplateIdEnum;
        LawfirmContact7V1: EmailTemplateIdEnum;
        LawfirmContact8V1: EmailTemplateIdEnum;
        LawfirmContact9V1: EmailTemplateIdEnum;
        LawyerPostCourtReminder: EmailTemplateIdEnum;
        NoCoverageAvailable: EmailTemplateIdEnum;
        NoCoverageAvailableMissingCourt: EmailTemplateIdEnum;
        ParkingTicket: EmailTemplateIdEnum;
        PostWin: EmailTemplateIdEnum;
        PostWinLastAsk: EmailTemplateIdEnum;
        PostWinV2: EmailTemplateIdEnum;
        SundayAfternoonHello: EmailTemplateIdEnum;
        TicketDueWa: EmailTemplateIdEnum;
        TicketEvalWithCitation: EmailTemplateIdEnum;
        TicketEvalWithCitation2NdFollowUp: EmailTemplateIdEnum;
        TicketEvalWithCitationCloseOut: EmailTemplateIdEnum;
    };
    type ReviewPlatformEnum = 'FACEBOOK' | 'GOOGLE_MY_BUSINESS' | 'GOOGLE_PLAY_STORE' | 'HIGHYA' | 'IOS_APP_STORE' | 'REVIEWS_IO' | 'TRUST_PILOT';
    const ReviewPlatformEnum: {
        Facebook: ReviewPlatformEnum;
        GoogleMyBusiness: ReviewPlatformEnum;
        GooglePlayStore: ReviewPlatformEnum;
        Highya: ReviewPlatformEnum;
        IosAppStore: ReviewPlatformEnum;
        ReviewsIo: ReviewPlatformEnum;
        TrustPilot: ReviewPlatformEnum;
    };
}
