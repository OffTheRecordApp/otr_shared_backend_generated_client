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
    "actionType"?: string;
    "agentId"?: number;
    "citationId"?: number;
    "emailTemplateId"?: SendEmailToUserRequest.EmailTemplateIdEnum;
    "fromEmailAddress"?: string;
    "reviewPlatform"?: SendEmailToUserRequest.ReviewPlatformEnum;
    "userIdToContact"?: number;
}
export declare namespace SendEmailToUserRequest {
    enum EmailTemplateIdEnum {
        AFTERNOONHELLO2,
        ATTICUSATTORNEYCONTACT1,
        CAMERATICKETNMV,
        CASECANCELLEDBYUSER,
        CASECANCELLEDDUPLICATE,
        CASECANCELLEDNMV,
        CASECANCELLEDNONPAYMENT,
        CASECANCELLEDNOLAWFIRM,
        CASECANCELLEDOVERDUE,
        CASECANCELLEDTOOSHORTNOTICE,
        CASUALFIRSTV1,
        CASUALSECONDV1,
        FRIDAYINTRO,
        HUBSPOTGENERIC,
        INVALIDIMAGEUPLOAD1,
        LAWFIRMCONTACT10V1,
        LAWFIRMCONTACT1V1,
        LAWFIRMCONTACT2V1,
        LAWFIRMCONTACT3V1,
        LAWFIRMCONTACT4V1,
        LAWFIRMCONTACT5V1,
        LAWFIRMCONTACT6V1,
        LAWFIRMCONTACT7V1,
        LAWFIRMCONTACT8V1,
        LAWFIRMCONTACT9V1,
        LAWYERPOSTCOURTREMINDER,
        NOCOVERAGEAVAILABLE,
        NOCOVERAGEAVAILABLEMISSINGCOURT,
        PARKINGTICKET,
        POSTWIN,
        POSTWINLASTASK,
        POSTWINV2,
        SUNDAYAFTERNOONHELLO,
        TICKETDUEWA,
        TICKETEVALWITHCITATION,
        TICKETEVALWITHCITATION2NDFOLLOWUP,
        TICKETEVALWITHCITATIONCLOSEOUT
    }
    enum ReviewPlatformEnum {
        FACEBOOK,
        GOOGLEMYBUSINESS,
        GOOGLEPLAYSTORE,
        HIGHYA,
        IOSAPPSTORE,
        REVIEWSIO,
        TRUSTPILOT
    }
}
