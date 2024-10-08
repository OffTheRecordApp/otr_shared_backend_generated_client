/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime';
export function SendEmailToUserRequestFromJSON(json) {
    return SendEmailToUserRequestFromJSONTyped(json, false);
}
export function SendEmailToUserRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionType': !exists(json, 'actionType') ? undefined : json['actionType'],
        'agentId': !exists(json, 'agentId') ? undefined : json['agentId'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'emailTemplateId': !exists(json, 'emailTemplateId') ? undefined : json['emailTemplateId'],
        'fromEmailAddress': !exists(json, 'fromEmailAddress') ? undefined : json['fromEmailAddress'],
        'reviewPlatform': !exists(json, 'reviewPlatform') ? undefined : json['reviewPlatform'],
        'userIdToContact': !exists(json, 'userIdToContact') ? undefined : json['userIdToContact'],
    };
}
export function SendEmailToUserRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionType': value.actionType,
        'agentId': value.agentId,
        'citationId': value.citationId,
        'emailTemplateId': value.emailTemplateId,
        'fromEmailAddress': value.fromEmailAddress,
        'reviewPlatform': value.reviewPlatform,
        'userIdToContact': value.userIdToContact,
    };
}
/**
* @export
* @enum {string}
*/
export var SendEmailToUserRequestEmailTemplateIdEnum;
(function (SendEmailToUserRequestEmailTemplateIdEnum) {
    SendEmailToUserRequestEmailTemplateIdEnum["AFTERNOONHELLO2"] = "AFTERNOON_HELLO_2";
    SendEmailToUserRequestEmailTemplateIdEnum["ATTICUSATTORNEYCONTACT1"] = "ATTICUS_ATTORNEY_CONTACT_1";
    SendEmailToUserRequestEmailTemplateIdEnum["CAMERATICKETNMV"] = "CAMERA_TICKET_NMV";
    SendEmailToUserRequestEmailTemplateIdEnum["CASECANCELLEDBYUSER"] = "CASE_CANCELLED_BY_USER";
    SendEmailToUserRequestEmailTemplateIdEnum["CASECANCELLEDDUPLICATE"] = "CASE_CANCELLED_DUPLICATE";
    SendEmailToUserRequestEmailTemplateIdEnum["CASECANCELLEDNMV"] = "CASE_CANCELLED_NMV";
    SendEmailToUserRequestEmailTemplateIdEnum["CASECANCELLEDNONPAYMENT"] = "CASE_CANCELLED_NON_PAYMENT";
    SendEmailToUserRequestEmailTemplateIdEnum["CASECANCELLEDNOLAWFIRM"] = "CASE_CANCELLED_NO_LAWFIRM";
    SendEmailToUserRequestEmailTemplateIdEnum["CASECANCELLEDOVERDUE"] = "CASE_CANCELLED_OVERDUE";
    SendEmailToUserRequestEmailTemplateIdEnum["CASECANCELLEDTOOSHORTNOTICE"] = "CASE_CANCELLED_TOO_SHORT_NOTICE";
    SendEmailToUserRequestEmailTemplateIdEnum["CASUALFIRSTV1"] = "CASUAL_FIRST_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["CASUALSECONDV1"] = "CASUAL_SECOND_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["FRIDAYINTRO"] = "FRIDAY_INTRO";
    SendEmailToUserRequestEmailTemplateIdEnum["HUBSPOTGENERIC"] = "HUBSPOT_GENERIC";
    SendEmailToUserRequestEmailTemplateIdEnum["INVALIDIMAGEUPLOAD1"] = "INVALID_IMAGE_UPLOAD_1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT10V1"] = "LAWFIRM_CONTACT_10_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT1V1"] = "LAWFIRM_CONTACT_1_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT2V1"] = "LAWFIRM_CONTACT_2_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT3V1"] = "LAWFIRM_CONTACT_3_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT4V1"] = "LAWFIRM_CONTACT_4_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT5V1"] = "LAWFIRM_CONTACT_5_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT6V1"] = "LAWFIRM_CONTACT_6_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT7V1"] = "LAWFIRM_CONTACT_7_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT8V1"] = "LAWFIRM_CONTACT_8_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWFIRMCONTACT9V1"] = "LAWFIRM_CONTACT_9_V1";
    SendEmailToUserRequestEmailTemplateIdEnum["LAWYERPOSTCOURTREMINDER"] = "LAWYER_POST_COURT_REMINDER";
    SendEmailToUserRequestEmailTemplateIdEnum["NOCOVERAGEAVAILABLE"] = "NO_COVERAGE_AVAILABLE";
    SendEmailToUserRequestEmailTemplateIdEnum["NOCOVERAGEAVAILABLEMISSINGCOURT"] = "NO_COVERAGE_AVAILABLE_MISSING_COURT";
    SendEmailToUserRequestEmailTemplateIdEnum["PARKINGTICKET"] = "PARKING_TICKET";
    SendEmailToUserRequestEmailTemplateIdEnum["POSTWIN"] = "POST_WIN";
    SendEmailToUserRequestEmailTemplateIdEnum["POSTWINLASTASK"] = "POST_WIN_LAST_ASK";
    SendEmailToUserRequestEmailTemplateIdEnum["POSTWINV2"] = "POST_WIN_V2";
    SendEmailToUserRequestEmailTemplateIdEnum["SUNDAYAFTERNOONHELLO"] = "SUNDAY_AFTERNOON_HELLO";
    SendEmailToUserRequestEmailTemplateIdEnum["TICKETDUEWA"] = "TICKET_DUE_WA";
    SendEmailToUserRequestEmailTemplateIdEnum["TICKETEVALWITHCITATION"] = "TICKET_EVAL_WITH_CITATION";
    SendEmailToUserRequestEmailTemplateIdEnum["TICKETEVALWITHCITATION2NDFOLLOWUP"] = "TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP";
    SendEmailToUserRequestEmailTemplateIdEnum["TICKETEVALWITHCITATIONCLOSEOUT"] = "TICKET_EVAL_WITH_CITATION_CLOSE_OUT";
})(SendEmailToUserRequestEmailTemplateIdEnum || (SendEmailToUserRequestEmailTemplateIdEnum = {}));
/**
* @export
* @enum {string}
*/
export var SendEmailToUserRequestReviewPlatformEnum;
(function (SendEmailToUserRequestReviewPlatformEnum) {
    SendEmailToUserRequestReviewPlatformEnum["FACEBOOK"] = "FACEBOOK";
    SendEmailToUserRequestReviewPlatformEnum["GOOGLEMYBUSINESS"] = "GOOGLE_MY_BUSINESS";
    SendEmailToUserRequestReviewPlatformEnum["GOOGLEPLAYSTORE"] = "GOOGLE_PLAY_STORE";
    SendEmailToUserRequestReviewPlatformEnum["HIGHYA"] = "HIGHYA";
    SendEmailToUserRequestReviewPlatformEnum["IOSAPPSTORE"] = "IOS_APP_STORE";
    SendEmailToUserRequestReviewPlatformEnum["REVIEWSIO"] = "REVIEWS_IO";
    SendEmailToUserRequestReviewPlatformEnum["TRUSTPILOT"] = "TRUST_PILOT";
})(SendEmailToUserRequestReviewPlatformEnum || (SendEmailToUserRequestReviewPlatformEnum = {}));
