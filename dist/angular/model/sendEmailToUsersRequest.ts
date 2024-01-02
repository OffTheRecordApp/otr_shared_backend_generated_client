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
import { UserToContact } from './userToContact';


export interface SendEmailToUsersRequest { 
    actionType?: string;
    emailTemplateId?: SendEmailToUsersRequest.EmailTemplateIdEnum;
    fromEmailAddress?: string;
    usersToContact?: Array<UserToContact>;
}
export namespace SendEmailToUsersRequest {
    export type EmailTemplateIdEnum = 'AFTERNOON_HELLO_2' | 'ATTICUS_ATTORNEY_CONTACT_1' | 'CAMERA_TICKET_NMV' | 'CASE_CANCELLED_BY_USER' | 'CASE_CANCELLED_DUPLICATE' | 'CASE_CANCELLED_NMV' | 'CASE_CANCELLED_NON_PAYMENT' | 'CASE_CANCELLED_NO_LAWFIRM' | 'CASE_CANCELLED_OVERDUE' | 'CASE_CANCELLED_TOO_SHORT_NOTICE' | 'CASUAL_FIRST_V1' | 'CASUAL_SECOND_V1' | 'FRIDAY_INTRO' | 'HUBSPOT_GENERIC' | 'INVALID_IMAGE_UPLOAD_1' | 'LAWFIRM_CONTACT_10_V1' | 'LAWFIRM_CONTACT_1_V1' | 'LAWFIRM_CONTACT_2_V1' | 'LAWFIRM_CONTACT_3_V1' | 'LAWFIRM_CONTACT_4_V1' | 'LAWFIRM_CONTACT_5_V1' | 'LAWFIRM_CONTACT_6_V1' | 'LAWFIRM_CONTACT_7_V1' | 'LAWFIRM_CONTACT_8_V1' | 'LAWFIRM_CONTACT_9_V1' | 'LAWYER_POST_COURT_REMINDER' | 'NO_COVERAGE_AVAILABLE' | 'NO_COVERAGE_AVAILABLE_MISSING_COURT' | 'PARKING_TICKET' | 'POST_WIN' | 'POST_WIN_LAST_ASK' | 'POST_WIN_V2' | 'SUNDAY_AFTERNOON_HELLO' | 'TICKET_DUE_WA' | 'TICKET_EVAL_WITH_CITATION' | 'TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP' | 'TICKET_EVAL_WITH_CITATION_CLOSE_OUT';
    export const EmailTemplateIdEnum = {
        AfternoonHello2: 'AFTERNOON_HELLO_2' as EmailTemplateIdEnum,
        AtticusAttorneyContact1: 'ATTICUS_ATTORNEY_CONTACT_1' as EmailTemplateIdEnum,
        CameraTicketNmv: 'CAMERA_TICKET_NMV' as EmailTemplateIdEnum,
        CaseCancelledByUser: 'CASE_CANCELLED_BY_USER' as EmailTemplateIdEnum,
        CaseCancelledDuplicate: 'CASE_CANCELLED_DUPLICATE' as EmailTemplateIdEnum,
        CaseCancelledNmv: 'CASE_CANCELLED_NMV' as EmailTemplateIdEnum,
        CaseCancelledNonPayment: 'CASE_CANCELLED_NON_PAYMENT' as EmailTemplateIdEnum,
        CaseCancelledNoLawfirm: 'CASE_CANCELLED_NO_LAWFIRM' as EmailTemplateIdEnum,
        CaseCancelledOverdue: 'CASE_CANCELLED_OVERDUE' as EmailTemplateIdEnum,
        CaseCancelledTooShortNotice: 'CASE_CANCELLED_TOO_SHORT_NOTICE' as EmailTemplateIdEnum,
        CasualFirstV1: 'CASUAL_FIRST_V1' as EmailTemplateIdEnum,
        CasualSecondV1: 'CASUAL_SECOND_V1' as EmailTemplateIdEnum,
        FridayIntro: 'FRIDAY_INTRO' as EmailTemplateIdEnum,
        HubspotGeneric: 'HUBSPOT_GENERIC' as EmailTemplateIdEnum,
        InvalidImageUpload1: 'INVALID_IMAGE_UPLOAD_1' as EmailTemplateIdEnum,
        LawfirmContact10V1: 'LAWFIRM_CONTACT_10_V1' as EmailTemplateIdEnum,
        LawfirmContact1V1: 'LAWFIRM_CONTACT_1_V1' as EmailTemplateIdEnum,
        LawfirmContact2V1: 'LAWFIRM_CONTACT_2_V1' as EmailTemplateIdEnum,
        LawfirmContact3V1: 'LAWFIRM_CONTACT_3_V1' as EmailTemplateIdEnum,
        LawfirmContact4V1: 'LAWFIRM_CONTACT_4_V1' as EmailTemplateIdEnum,
        LawfirmContact5V1: 'LAWFIRM_CONTACT_5_V1' as EmailTemplateIdEnum,
        LawfirmContact6V1: 'LAWFIRM_CONTACT_6_V1' as EmailTemplateIdEnum,
        LawfirmContact7V1: 'LAWFIRM_CONTACT_7_V1' as EmailTemplateIdEnum,
        LawfirmContact8V1: 'LAWFIRM_CONTACT_8_V1' as EmailTemplateIdEnum,
        LawfirmContact9V1: 'LAWFIRM_CONTACT_9_V1' as EmailTemplateIdEnum,
        LawyerPostCourtReminder: 'LAWYER_POST_COURT_REMINDER' as EmailTemplateIdEnum,
        NoCoverageAvailable: 'NO_COVERAGE_AVAILABLE' as EmailTemplateIdEnum,
        NoCoverageAvailableMissingCourt: 'NO_COVERAGE_AVAILABLE_MISSING_COURT' as EmailTemplateIdEnum,
        ParkingTicket: 'PARKING_TICKET' as EmailTemplateIdEnum,
        PostWin: 'POST_WIN' as EmailTemplateIdEnum,
        PostWinLastAsk: 'POST_WIN_LAST_ASK' as EmailTemplateIdEnum,
        PostWinV2: 'POST_WIN_V2' as EmailTemplateIdEnum,
        SundayAfternoonHello: 'SUNDAY_AFTERNOON_HELLO' as EmailTemplateIdEnum,
        TicketDueWa: 'TICKET_DUE_WA' as EmailTemplateIdEnum,
        TicketEvalWithCitation: 'TICKET_EVAL_WITH_CITATION' as EmailTemplateIdEnum,
        TicketEvalWithCitation2NdFollowUp: 'TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP' as EmailTemplateIdEnum,
        TicketEvalWithCitationCloseOut: 'TICKET_EVAL_WITH_CITATION_CLOSE_OUT' as EmailTemplateIdEnum
    };
}


