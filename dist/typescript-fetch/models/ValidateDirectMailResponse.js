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
export function ValidateDirectMailResponseFromJSON(json) {
    return ValidateDirectMailResponseFromJSONTyped(json, false);
}
export function ValidateDirectMailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'otrError': !exists(json, 'otrError') ? undefined : json['otrError'],
    };
}
export function ValidateDirectMailResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'otrError': value.otrError,
    };
}
/**
* @export
* @enum {string}
*/
export var ValidateDirectMailResponseOtrErrorEnum;
(function (ValidateDirectMailResponseOtrErrorEnum) {
    ValidateDirectMailResponseOtrErrorEnum["ACCESSDENIED"] = "ACCESS_DENIED";
    ValidateDirectMailResponseOtrErrorEnum["ACCOUNTDISABLED"] = "ACCOUNT_DISABLED";
    ValidateDirectMailResponseOtrErrorEnum["ARAGNOTCAPTURED"] = "ARAG_NOT_CAPTURED";
    ValidateDirectMailResponseOtrErrorEnum["AUTHENTICATIONCREDENTIALSNOTFOUND"] = "AUTHENTICATION_CREDENTIALS_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["AUTHENTICATIONFAILED"] = "AUTHENTICATION_FAILED";
    ValidateDirectMailResponseOtrErrorEnum["AUTHENTICATIONSERVICEFAILURE"] = "AUTHENTICATION_SERVICE_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["AUTHORIZATIONSERVICEFAILURE"] = "AUTHORIZATION_SERVICE_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["AUTHORIZEDCHARGESONCASE"] = "AUTHORIZED_CHARGES_ON_CASE";
    ValidateDirectMailResponseOtrErrorEnum["BADCREDENTIALS"] = "BAD_CREDENTIALS";
    ValidateDirectMailResponseOtrErrorEnum["BLOCKEDFROMBOOKING"] = "BLOCKED_FROM_BOOKING";
    ValidateDirectMailResponseOtrErrorEnum["CANCELLATIONWINDOWCLOSED"] = "CANCELLATION_WINDOW_CLOSED";
    ValidateDirectMailResponseOtrErrorEnum["CASEALREADYEXISTS"] = "CASE_ALREADY_EXISTS";
    ValidateDirectMailResponseOtrErrorEnum["CASEALREADYPAID"] = "CASE_ALREADY_PAID";
    ValidateDirectMailResponseOtrErrorEnum["CASEALREADYRESOLVED"] = "CASE_ALREADY_RESOLVED";
    ValidateDirectMailResponseOtrErrorEnum["CASEIDCOLLISION"] = "CASE_ID_COLLISION";
    ValidateDirectMailResponseOtrErrorEnum["CASEISCANCELLED"] = "CASE_IS_CANCELLED";
    ValidateDirectMailResponseOtrErrorEnum["CASEMATCHFAILED"] = "CASE_MATCH_FAILED";
    ValidateDirectMailResponseOtrErrorEnum["CASEMISSINGLAWFIRM"] = "CASE_MISSING_LAWFIRM";
    ValidateDirectMailResponseOtrErrorEnum["CASENOTACCEPTEDBYLAWFIRM"] = "CASE_NOT_ACCEPTED_BY_LAWFIRM";
    ValidateDirectMailResponseOtrErrorEnum["CASENOTCONFIRMED"] = "CASE_NOT_CONFIRMED";
    ValidateDirectMailResponseOtrErrorEnum["CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMFEES"] = "CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_FEES";
    ValidateDirectMailResponseOtrErrorEnum["CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMPAYOUTS"] = "CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_PAYOUTS";
    ValidateDirectMailResponseOtrErrorEnum["CASEPAYMENTHASSTRIPECHARGE"] = "CASE_PAYMENT_HAS_STRIPE_CHARGE";
    ValidateDirectMailResponseOtrErrorEnum["CASESTATUSNOTALLOWED"] = "CASE_STATUS_NOT_ALLOWED";
    ValidateDirectMailResponseOtrErrorEnum["CASEUSERMISMATCH"] = "CASE_USER_MISMATCH";
    ValidateDirectMailResponseOtrErrorEnum["CCWILLEXPIREBEFOREPAYMENTPLAN"] = "CC_WILL_EXPIRE_BEFORE_PAYMENT_PLAN";
    ValidateDirectMailResponseOtrErrorEnum["CHARGEALREADYCAPTURED"] = "CHARGE_ALREADY_CAPTURED";
    ValidateDirectMailResponseOtrErrorEnum["CHARGEEXPIRED"] = "CHARGE_EXPIRED";
    ValidateDirectMailResponseOtrErrorEnum["CHARGENOTALLOWED"] = "CHARGE_NOT_ALLOWED";
    ValidateDirectMailResponseOtrErrorEnum["CHARGENOTCAPTURED"] = "CHARGE_NOT_CAPTURED";
    ValidateDirectMailResponseOtrErrorEnum["CHARGENOLONGERAUTHORIZED"] = "CHARGE_NO_LONGER_AUTHORIZED";
    ValidateDirectMailResponseOtrErrorEnum["CHARGEREFUNDED"] = "CHARGE_REFUNDED";
    ValidateDirectMailResponseOtrErrorEnum["CITATIONALREADYDELETED"] = "CITATION_ALREADY_DELETED";
    ValidateDirectMailResponseOtrErrorEnum["CITATIONDOESNOTMATCHUSER"] = "CITATION_DOES_NOT_MATCH_USER";
    ValidateDirectMailResponseOtrErrorEnum["CITATIONNOTOWNEDBYUSER"] = "CITATION_NOT_OWNED_BY_USER";
    ValidateDirectMailResponseOtrErrorEnum["CODEALREADYEXISTSFORDRIVER"] = "CODE_ALREADY_EXISTS_FOR_DRIVER";
    ValidateDirectMailResponseOtrErrorEnum["CODEBENEFITTYPENOTSUPPORTED"] = "CODE_BENEFIT_TYPE_NOT_SUPPORTED";
    ValidateDirectMailResponseOtrErrorEnum["CODEDOESNOTEXIST"] = "CODE_DOES_NOT_EXIST";
    ValidateDirectMailResponseOtrErrorEnum["CODEEXCEEDEDMAXUSAGE"] = "CODE_EXCEEDED_MAX_USAGE";
    ValidateDirectMailResponseOtrErrorEnum["CODEHASEXPIRED"] = "CODE_HAS_EXPIRED";
    ValidateDirectMailResponseOtrErrorEnum["CODEISALREADYTAKEN"] = "CODE_IS_ALREADY_TAKEN";
    ValidateDirectMailResponseOtrErrorEnum["CODEISNOTACTIVE"] = "CODE_IS_NOT_ACTIVE";
    ValidateDirectMailResponseOtrErrorEnum["CODENOTALLOWEDDUETOCREDIT"] = "CODE_NOT_ALLOWED_DUE_TO_CREDIT";
    ValidateDirectMailResponseOtrErrorEnum["CODENOTSUPPORTEDBYLAWFIRM"] = "CODE_NOT_SUPPORTED_BY_LAWFIRM";
    ValidateDirectMailResponseOtrErrorEnum["CODENOTVALIDFORLEGALSERVICE"] = "CODE_NOT_VALID_FOR_LEGAL_SERVICE";
    ValidateDirectMailResponseOtrErrorEnum["CODENOTYETAPPROVED"] = "CODE_NOT_YET_APPROVED";
    ValidateDirectMailResponseOtrErrorEnum["CODEREFERRERBENEFITSNOTAUTHORIZED"] = "CODE_REFERRER_BENEFITS_NOT_AUTHORIZED";
    ValidateDirectMailResponseOtrErrorEnum["COMMENTALREADYEXISTS"] = "COMMENT_ALREADY_EXISTS";
    ValidateDirectMailResponseOtrErrorEnum["COURTMISSINGADDRESS"] = "COURT_MISSING_ADDRESS";
    ValidateDirectMailResponseOtrErrorEnum["COURTNOTINSUPPORTEDREGION"] = "COURT_NOT_IN_SUPPORTED_REGION";
    ValidateDirectMailResponseOtrErrorEnum["COURTNOTSUPPORTEDBYLAWFIRM"] = "COURT_NOT_SUPPORTED_BY_LAWFIRM";
    ValidateDirectMailResponseOtrErrorEnum["CURRENTPASSWORDINCORRECT"] = "CURRENT_PASSWORD_INCORRECT";
    ValidateDirectMailResponseOtrErrorEnum["DATABASERECORDLOCKED"] = "DATABASE_RECORD_LOCKED";
    ValidateDirectMailResponseOtrErrorEnum["DATAACCESSERROR"] = "DATA_ACCESS_ERROR";
    ValidateDirectMailResponseOtrErrorEnum["DIRECTMAILRECONCILATIONIDNOTEXIST"] = "DIRECT_MAIL_RECONCILATION_ID_NOT_EXIST";
    ValidateDirectMailResponseOtrErrorEnum["DIRECTMAILSENTALREADY"] = "DIRECT_MAIL_SENT_ALREADY";
    ValidateDirectMailResponseOtrErrorEnum["DIRECTMAILTEMPLATEDUPLICATEDETECTED"] = "DIRECT_MAIL_TEMPLATE_DUPLICATE_DETECTED";
    ValidateDirectMailResponseOtrErrorEnum["DIRECTMAILTEMPLATENOTEXIST"] = "DIRECT_MAIL_TEMPLATE_NOT_EXIST";
    ValidateDirectMailResponseOtrErrorEnum["DRIPDEPENDENCYFAILURE"] = "DRIP_DEPENDENCY_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["DUPLICATECOURT"] = "DUPLICATE_COURT";
    ValidateDirectMailResponseOtrErrorEnum["DUPLICATEEMAIL"] = "DUPLICATE_EMAIL";
    ValidateDirectMailResponseOtrErrorEnum["DUPLICATEENTRY"] = "DUPLICATE_ENTRY";
    ValidateDirectMailResponseOtrErrorEnum["DUPLICATELANDINGPAGEURL"] = "DUPLICATE_LANDING_PAGE_URL";
    ValidateDirectMailResponseOtrErrorEnum["DUPLICATEMESSAGEATTEMPT"] = "DUPLICATE_MESSAGE_ATTEMPT";
    ValidateDirectMailResponseOtrErrorEnum["EMAILADDRESSALREADYSUBSCRIBED"] = "EMAIL_ADDRESS_ALREADY_SUBSCRIBED";
    ValidateDirectMailResponseOtrErrorEnum["EMAILADDRESSBLACKLISTED"] = "EMAIL_ADDRESS_BLACKLISTED";
    ValidateDirectMailResponseOtrErrorEnum["EMAILALREADYEXISTS"] = "EMAIL_ALREADY_EXISTS";
    ValidateDirectMailResponseOtrErrorEnum["EMAILALREADYINUSE"] = "EMAIL_ALREADY_IN_USE";
    ValidateDirectMailResponseOtrErrorEnum["EMAILALREADYSENT"] = "EMAIL_ALREADY_SENT";
    ValidateDirectMailResponseOtrErrorEnum["EMAILNOTCONFIRMED"] = "EMAIL_NOT_CONFIRMED";
    ValidateDirectMailResponseOtrErrorEnum["EMAILNOTSENT"] = "EMAIL_NOT_SENT";
    ValidateDirectMailResponseOtrErrorEnum["EXPECTEDNULLINPUT"] = "EXPECTED_NULL_INPUT";
    ValidateDirectMailResponseOtrErrorEnum["EXPECTEDROLEMISSING"] = "EXPECTED_ROLE_MISSING";
    ValidateDirectMailResponseOtrErrorEnum["FAILEDTOREVERSETRANSFER"] = "FAILED_TO_REVERSE_TRANSFER";
    ValidateDirectMailResponseOtrErrorEnum["FRESHDESKTICKETNOTFOUND"] = "FRESHDESK_TICKET_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["FRESHDESKUNEXPECTEDNUMBEROFRESULTS"] = "FRESHDESK_UNEXPECTED_NUMBER_OF_RESULTS";
    ValidateDirectMailResponseOtrErrorEnum["GHOSTUSERNOTALLOWED"] = "GHOST_USER_NOT_ALLOWED";
    ValidateDirectMailResponseOtrErrorEnum["HTTPREQUESTERROR"] = "HTTP_REQUEST_ERROR";
    ValidateDirectMailResponseOtrErrorEnum["IMAGENOTCOMPRESSEDPROPERLY"] = "IMAGE_NOT_COMPRESSED_PROPERLY";
    ValidateDirectMailResponseOtrErrorEnum["INACTIVESTOREFRONT"] = "INACTIVE_STOREFRONT";
    ValidateDirectMailResponseOtrErrorEnum["INCORRECTDIMENSIONS"] = "INCORRECT_DIMENSIONS";
    ValidateDirectMailResponseOtrErrorEnum["INCORRECTENCODING"] = "INCORRECT_ENCODING";
    ValidateDirectMailResponseOtrErrorEnum["INELIGIBLESTATUSFORTRANSFER"] = "INELIGIBLE_STATUS_FOR_TRANSFER";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDADDRESSID"] = "INVALID_ADDRESS_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDAMOUNT"] = "INVALID_AMOUNT";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDAPITOKEN"] = "INVALID_API_TOKEN";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDAPIUSAGE"] = "INVALID_API_USAGE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCASEACTIONID"] = "INVALID_CASE_ACTION_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCASECOUNTERID"] = "INVALID_CASE_COUNTER_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCASECOUNTERSTATUS"] = "INVALID_CASE_COUNTER_STATUS";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCASEID"] = "INVALID_CASE_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCASEPAYMENTID"] = "INVALID_CASE_PAYMENT_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCASESTATUSFORCASERESOLVE"] = "INVALID_CASE_STATUS_FOR_CASE_RESOLVE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCITATIONID"] = "INVALID_CITATION_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCODE"] = "INVALID_CODE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDCOURTID"] = "INVALID_COURT_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDDATE"] = "INVALID_DATE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDDECLINECATEGORYID"] = "INVALID_DECLINE_CATEGORY_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDDECLINEREASONTYPEID"] = "INVALID_DECLINE_REASON_TYPE_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDDISPUTEID"] = "INVALID_DISPUTE_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDDOCUMENTID"] = "INVALID_DOCUMENT_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDEMAILADDRESS"] = "INVALID_EMAIL_ADDRESS";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDEMAILTEMPLATE"] = "INVALID_EMAIL_TEMPLATE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDENDDATE"] = "INVALID_END_DATE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDENUMVALUE"] = "INVALID_ENUM_VALUE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDFEEPERCENTAGE"] = "INVALID_FEE_PERCENTAGE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDFIRSTNAME"] = "INVALID_FIRST_NAME";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDINTERNETADDRESS"] = "INVALID_INTERNET_ADDRESS";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDINVITATIONTOKEN"] = "INVALID_INVITATION_TOKEN";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDINVOICELINEITEMID"] = "INVALID_INVOICE_LINE_ITEM_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDLASTNAME"] = "INVALID_LAST_NAME";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDLAWFIRM"] = "INVALID_LAWFIRM";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDLAWYERID"] = "INVALID_LAWYER_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDLEADINCONTACTLOOP"] = "INVALID_LEAD_IN_CONTACT_LOOP";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDLEGALSERVICE"] = "INVALID_LEGAL_SERVICE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDLINEITEM"] = "INVALID_LINE_ITEM";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDMESSAGEID"] = "INVALID_MESSAGE_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDPAGINATIONTOKEN"] = "INVALID_PAGINATION_TOKEN";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDPARAMETERVALUE"] = "INVALID_PARAMETER_VALUE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDPASSWORD"] = "INVALID_PASSWORD";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDPASSWORDRESETTOKEN"] = "INVALID_PASSWORD_RESET_TOKEN";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDPUSHTOKEN"] = "INVALID_PUSH_TOKEN";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDRECIPIENTLIST"] = "INVALID_RECIPIENT_LIST";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDREQUEST"] = "INVALID_REQUEST";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDREQUESTBODY"] = "INVALID_REQUEST_BODY";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDRESOLUTIONSTATUS"] = "INVALID_RESOLUTION_STATUS";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDREVIEWCOPY"] = "INVALID_REVIEW_COPY";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDROLETYPE"] = "INVALID_ROLE_TYPE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDSTATE"] = "INVALID_STATE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDSTRIPEACCOUNT"] = "INVALID_STRIPE_ACCOUNT";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDSTRIPECHARGEID"] = "INVALID_STRIPE_CHARGE_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDSTRIPEREQUEST"] = "INVALID_STRIPE_REQUEST";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDSTRIPETRANSACTIONID"] = "INVALID_STRIPE_TRANSACTION_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDSUBSCRIPTIONTYPE"] = "INVALID_SUBSCRIPTION_TYPE";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDTASKID"] = "INVALID_TASK_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDTICKETID"] = "INVALID_TICKET_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDTICKETREVIEWID"] = "INVALID_TICKET_REVIEW_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDTRAFFICVIOLATION"] = "INVALID_TRAFFIC_VIOLATION";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDUSERID"] = "INVALID_USER_ID";
    ValidateDirectMailResponseOtrErrorEnum["INVALIDUSERNAME"] = "INVALID_USER_NAME";
    ValidateDirectMailResponseOtrErrorEnum["INVITATIONALREADYSENT"] = "INVITATION_ALREADY_SENT";
    ValidateDirectMailResponseOtrErrorEnum["INVITATIONALREADYVERIFIED"] = "INVITATION_ALREADY_VERIFIED";
    ValidateDirectMailResponseOtrErrorEnum["INVITATIONCANCELLED"] = "INVITATION_CANCELLED";
    ValidateDirectMailResponseOtrErrorEnum["INVITATIONHASEXPIRED"] = "INVITATION_HAS_EXPIRED";
    ValidateDirectMailResponseOtrErrorEnum["INVITATIONRECIPIENTNOACCOUNT"] = "INVITATION_RECIPIENT_NO_ACCOUNT";
    ValidateDirectMailResponseOtrErrorEnum["IOERROR"] = "IO_ERROR";
    ValidateDirectMailResponseOtrErrorEnum["LAMBDAURLINVOKEFAILURE"] = "LAMBDA_URL_INVOKE_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMCASECAPACITYREACHED"] = "LAWFIRM_CASE_CAPACITY_REACHED";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMCASENOTACTIVE"] = "LAWFIRM_CASE_NOT_ACTIVE";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMDOESNOTHANDLEACCIDENTS"] = "LAWFIRM_DOES_NOT_HANDLE_ACCIDENTS";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMDOESNOTHANDLEPASTDUE"] = "LAWFIRM_DOES_NOT_HANDLE_PAST_DUE";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMFEEHASSTRIPEREFERENCE"] = "LAWFIRM_FEE_HAS_STRIPE_REFERENCE";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMMISSINGACCOUNTFEE"] = "LAWFIRM_MISSING_ACCOUNT_FEE";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMNOTELIGIBLE"] = "LAWFIRM_NOT_ELIGIBLE";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMONVACATIONMODE"] = "LAWFIRM_ON_VACATION_MODE";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMPAYOUTHASSTRIPEREFERENCE"] = "LAWFIRM_PAYOUT_HAS_STRIPE_REFERENCE";
    ValidateDirectMailResponseOtrErrorEnum["LAWFIRMNEEDSADDRESS"] = "LAW_FIRM_NEEDS_ADDRESS";
    ValidateDirectMailResponseOtrErrorEnum["LEGALSERVICENOTSUPPORTED"] = "LEGAL_SERVICE_NOT_SUPPORTED";
    ValidateDirectMailResponseOtrErrorEnum["LEGALSERVICEQUOTEEXPIRED"] = "LEGAL_SERVICE_QUOTE_EXPIRED";
    ValidateDirectMailResponseOtrErrorEnum["LINEITEMMISSINGRECIPIENT"] = "LINE_ITEM_MISSING_RECIPIENT";
    ValidateDirectMailResponseOtrErrorEnum["LINKSNOTALLOWED"] = "LINKS_NOT_ALLOWED";
    ValidateDirectMailResponseOtrErrorEnum["LOBADDRESSCREATIONFAILURE"] = "LOB_ADDRESS_CREATION_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["LOBADDRESSVALIDATIONFAILURE"] = "LOB_ADDRESS_VALIDATION_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["LOBCANCELCHECKDELIVERYFAILURE"] = "LOB_CANCEL_CHECK_DELIVERY_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["LOBCANCELMAILDELIVERYFAILURE"] = "LOB_CANCEL_MAIL_DELIVERY_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["LOBCHECKMAILDELIVERYFAILURE"] = "LOB_CHECK_MAIL_DELIVERY_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["LOBPOSTCARDCREATIONFAILURE"] = "LOB_POSTCARD_CREATION_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["MEDIATYPEINCORRECT"] = "MEDIA_TYPE_INCORRECT";
    ValidateDirectMailResponseOtrErrorEnum["MERGEROLLBACKNOTALLOWED"] = "MERGE_ROLLBACK_NOT_ALLOWED";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGACTIONTYPE"] = "MISSING_ACTION_TYPE";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGADJUSTEDFINEAMOUNT"] = "MISSING_ADJUSTED_FINE_AMOUNT";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGBIRTHDAY"] = "MISSING_BIRTHDAY";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGCASE"] = "MISSING_CASE";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGCITATIONID"] = "MISSING_CITATION_ID";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGCOURTFEE"] = "MISSING_COURT_FEE";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGCOURTID"] = "MISSING_COURT_ID";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGDECLINECATEGORY"] = "MISSING_DECLINE_CATEGORY";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGDECLINEREASONTYPE"] = "MISSING_DECLINE_REASON_TYPE";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGEMAILADDRESS"] = "MISSING_EMAIL_ADDRESS";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGFEEDBACKCONTENT"] = "MISSING_FEEDBACK_CONTENT";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGFIRSTNAME"] = "MISSING_FIRSTNAME";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGIMAGEURL"] = "MISSING_IMAGE_URL";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGLASTNAME"] = "MISSING_LASTNAME";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGLAWFIRMID"] = "MISSING_LAWFIRM_ID";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGLAWYERID"] = "MISSING_LAWYER_ID";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGMEDIADATA"] = "MISSING_MEDIA_DATA";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGNUMVIOLATIONS"] = "MISSING_NUM_VIOLATIONS";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGPARAMETER"] = "MISSING_PARAMETER";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGPASSWORD"] = "MISSING_PASSWORD";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGRECIPIENTEMAIL"] = "MISSING_RECIPIENT_EMAIL";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGREQUESTBODY"] = "MISSING_REQUEST_BODY";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGRESOLUTIONSTATUS"] = "MISSING_RESOLUTION_STATUS";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGSENDEREMAIL"] = "MISSING_SENDER_EMAIL";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGSENDERPHONENUMBER"] = "MISSING_SENDER_PHONE_NUMBER";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGSEOURL"] = "MISSING_SEO_URL";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGSTRIPETOKEN"] = "MISSING_STRIPE_TOKEN";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGSUBSCRIBER"] = "MISSING_SUBSCRIBER";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGTICKETISSUEDATE"] = "MISSING_TICKET_ISSUE_DATE";
    ValidateDirectMailResponseOtrErrorEnum["MISSINGUSERNAME"] = "MISSING_USER_NAME";
    ValidateDirectMailResponseOtrErrorEnum["MULTIPLELAWFIRMFEES"] = "MULTIPLE_LAWFIRM_FEES";
    ValidateDirectMailResponseOtrErrorEnum["MULTIPLELAWFIRMPAYOUTS"] = "MULTIPLE_LAWFIRM_PAYOUTS";
    ValidateDirectMailResponseOtrErrorEnum["MULTIPLEREFUNDSONCHARGE"] = "MULTIPLE_REFUNDS_ON_CHARGE";
    ValidateDirectMailResponseOtrErrorEnum["MULTIPLESTRIPECUSTOMERACCOUNTSFOUND"] = "MULTIPLE_STRIPE_CUSTOMER_ACCOUNTS_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["MULTIPLESTRIPETRANSFERSFOUND"] = "MULTIPLE_STRIPE_TRANSFERS_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["MUSTBEPOSITIVE"] = "MUST_BE_POSITIVE";
    ValidateDirectMailResponseOtrErrorEnum["NOTIFICATIONERROR"] = "NOTIFICATION_ERROR";
    ValidateDirectMailResponseOtrErrorEnum["NOTIFICATIONINCORRECTROLE"] = "NOTIFICATION_INCORRECT_ROLE";
    ValidateDirectMailResponseOtrErrorEnum["NOTIFICATIONTOOLONG"] = "NOTIFICATION_TOO_LONG";
    ValidateDirectMailResponseOtrErrorEnum["NOTIFICATIONTOSELF"] = "NOTIFICATION_TO_SELF";
    ValidateDirectMailResponseOtrErrorEnum["NOTAUTHENTICATED"] = "NOT_AUTHENTICATED";
    ValidateDirectMailResponseOtrErrorEnum["NOACCOUNTWITHEMAIL"] = "NO_ACCOUNT_WITH_EMAIL";
    ValidateDirectMailResponseOtrErrorEnum["NOCASEOWNER"] = "NO_CASE_OWNER";
    ValidateDirectMailResponseOtrErrorEnum["NOCHARGESONCASE"] = "NO_CHARGES_ON_CASE";
    ValidateDirectMailResponseOtrErrorEnum["NOINSURANCE"] = "NO_INSURANCE";
    ValidateDirectMailResponseOtrErrorEnum["NOLAWFIRMAVAILABLE"] = "NO_LAWFIRM_AVAILABLE";
    ValidateDirectMailResponseOtrErrorEnum["NOLEGALSERVICESINREGION"] = "NO_LEGAL_SERVICES_IN_REGION";
    ValidateDirectMailResponseOtrErrorEnum["NOSTRIPEACCOUNT"] = "NO_STRIPE_ACCOUNT";
    ValidateDirectMailResponseOtrErrorEnum["OWNERCASEMESSAGEMISMATCH"] = "OWNER_CASE_MESSAGE_MISMATCH";
    ValidateDirectMailResponseOtrErrorEnum["PAYMENTPLANSDENIED"] = "PAYMENT_PLANS_DENIED";
    ValidateDirectMailResponseOtrErrorEnum["PAYMENTPLANLEGALFEEHASCENTS"] = "PAYMENT_PLAN_LEGAL_FEE_HAS_CENTS";
    ValidateDirectMailResponseOtrErrorEnum["PAYMENTPLANNOTSUPPORTEDWITHPREPAIDCARD"] = "PAYMENT_PLAN_NOT_SUPPORTED_WITH_PREPAID_CARD";
    ValidateDirectMailResponseOtrErrorEnum["PDFPASSWORDPROTECTED"] = "PDF_PASSWORD_PROTECTED";
    ValidateDirectMailResponseOtrErrorEnum["PLAIDERROR"] = "PLAID_ERROR";
    ValidateDirectMailResponseOtrErrorEnum["QBOBILLCREATIONFAILURE"] = "QBO_BILL_CREATION_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["QBOVENDORCREATIONFAILURE"] = "QBO_VENDOR_CREATION_FAILURE";
    ValidateDirectMailResponseOtrErrorEnum["RATETHROTTLELIMITEXCEEDED"] = "RATE_THROTTLE_LIMIT_EXCEEDED";
    ValidateDirectMailResponseOtrErrorEnum["REFERRALSNOTALLOWEDTOBEREDEEMED"] = "REFERRALS_NOT_ALLOWED_TO_BE_REDEEMED";
    ValidateDirectMailResponseOtrErrorEnum["REFUNDNOTALLOWED"] = "REFUND_NOT_ALLOWED";
    ValidateDirectMailResponseOtrErrorEnum["REFUNDNOTELIGIBLE"] = "REFUND_NOT_ELIGIBLE";
    ValidateDirectMailResponseOtrErrorEnum["REFUNDNOTELIGIBLECRIMINAL"] = "REFUND_NOT_ELIGIBLE_CRIMINAL";
    ValidateDirectMailResponseOtrErrorEnum["REQUESTNOTWELLFORMATTED"] = "REQUEST_NOT_WELL_FORMATTED";
    ValidateDirectMailResponseOtrErrorEnum["RESETTOKENEXPIRED"] = "RESET_TOKEN_EXPIRED";
    ValidateDirectMailResponseOtrErrorEnum["RESOURCENOTFOUND"] = "RESOURCE_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["REVIEWALREADYEXISTS"] = "REVIEW_ALREADY_EXISTS";
    ValidateDirectMailResponseOtrErrorEnum["REVIEWNOTFOUND"] = "REVIEW_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["ROLENOTSUPPORTED"] = "ROLE_NOT_SUPPORTED";
    ValidateDirectMailResponseOtrErrorEnum["S3CLIENTFAILED"] = "S3_CLIENT_FAILED";
    ValidateDirectMailResponseOtrErrorEnum["S3SERVERFAILED"] = "S3_SERVER_FAILED";
    ValidateDirectMailResponseOtrErrorEnum["SAMEUSERCANNOTBEMERGED"] = "SAME_USER_CANNOT_BE_MERGED";
    ValidateDirectMailResponseOtrErrorEnum["SEOURLALREADYEXISTS"] = "SEO_URL_ALREADY_EXISTS";
    ValidateDirectMailResponseOtrErrorEnum["SERVICERATENOTFOUND"] = "SERVICE_RATE_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["SIMILARCOURT"] = "SIMILAR_COURT";
    ValidateDirectMailResponseOtrErrorEnum["SOCIALPROFILEMISSINGEMAIL"] = "SOCIAL_PROFILE_MISSING_EMAIL";
    ValidateDirectMailResponseOtrErrorEnum["SSOSERVICEPROVIDERIDNOTFOUND"] = "SSO_SERVICE_PROVIDER_ID_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["STATENOTSUPPORTED"] = "STATE_NOT_SUPPORTED";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEAPICONNECTIONEXCEPTION"] = "STRIPE_API_CONNECTION_EXCEPTION";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEAPIEXCEPTION"] = "STRIPE_API_EXCEPTION";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEAPPLICATIONFEEALREADYREFUNDED"] = "STRIPE_APPLICATION_FEE_ALREADY_REFUNDED";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEAPPLICATIONFEENOTFOUND"] = "STRIPE_APPLICATION_FEE_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEAUTHENTICATIONEXCEPTION"] = "STRIPE_AUTHENTICATION_EXCEPTION";
    ValidateDirectMailResponseOtrErrorEnum["STRIPECARDEXCEPTION"] = "STRIPE_CARD_EXCEPTION";
    ValidateDirectMailResponseOtrErrorEnum["STRIPECONNECTACCOUNTNOTFOUND"] = "STRIPE_CONNECT_ACCOUNT_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEERROR"] = "STRIPE_ERROR";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEFAILEDCHARGE"] = "STRIPE_FAILED_CHARGE";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEOAUTHCONNECTFAILED"] = "STRIPE_OAUTH_CONNECT_FAILED";
    ValidateDirectMailResponseOtrErrorEnum["STRIPEOBJECTMISSINGMETADATA"] = "STRIPE_OBJECT_MISSING_METADATA";
    ValidateDirectMailResponseOtrErrorEnum["STRIPERESOURCENOTFOUND"] = "STRIPE_RESOURCE_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["STRIPETRANSFEREXISTS"] = "STRIPE_TRANSFER_EXISTS";
    ValidateDirectMailResponseOtrErrorEnum["STRIPETRANSFERNOTFOUND"] = "STRIPE_TRANSFER_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["SUBSCRIPTIONNOTOWNEDBYUSER"] = "SUBSCRIPTION_NOT_OWNED_BY_USER";
    ValidateDirectMailResponseOtrErrorEnum["SUBSCRIPTIONTEENAGERAGEOUT"] = "SUBSCRIPTION_TEENAGER_AGE_OUT";
    ValidateDirectMailResponseOtrErrorEnum["TEMPLATENOTSUPPORTED"] = "TEMPLATE_NOT_SUPPORTED";
    ValidateDirectMailResponseOtrErrorEnum["TRANSFERALREADYREVERSED"] = "TRANSFER_ALREADY_REVERSED";
    ValidateDirectMailResponseOtrErrorEnum["TRANSFERIDDOESNTMATCHCHARGE"] = "TRANSFER_ID_DOESNT_MATCH_CHARGE";
    ValidateDirectMailResponseOtrErrorEnum["TRANSFERNOTSAFE"] = "TRANSFER_NOT_SAFE";
    ValidateDirectMailResponseOtrErrorEnum["TRANSFERREVERSALNOTALLOWED"] = "TRANSFER_REVERSAL_NOT_ALLOWED";
    ValidateDirectMailResponseOtrErrorEnum["TRANSFERTOSAMELAWFIRM"] = "TRANSFER_TO_SAME_LAWFIRM";
    ValidateDirectMailResponseOtrErrorEnum["UNABLETOVERIFYREQUEST"] = "UNABLE_TO_VERIFY_REQUEST";
    ValidateDirectMailResponseOtrErrorEnum["UNAUTHORIZED"] = "UNAUTHORIZED";
    ValidateDirectMailResponseOtrErrorEnum["UNEXPECTEDCASESTATUS"] = "UNEXPECTED_CASE_STATUS";
    ValidateDirectMailResponseOtrErrorEnum["UNEXPECTEDNULLINPUT"] = "UNEXPECTED_NULL_INPUT";
    ValidateDirectMailResponseOtrErrorEnum["UNEXPECTEDNUMBEROFCHARGES"] = "UNEXPECTED_NUMBER_OF_CHARGES";
    ValidateDirectMailResponseOtrErrorEnum["UNKNOWN"] = "UNKNOWN";
    ValidateDirectMailResponseOtrErrorEnum["UNKNOWNCRMERROR"] = "UNKNOWN_CRM_ERROR";
    ValidateDirectMailResponseOtrErrorEnum["URLENTITYMISMATCH"] = "URL_ENTITY_MISMATCH";
    ValidateDirectMailResponseOtrErrorEnum["USERALREADYHASSECONDARYACCOUNT"] = "USER_ALREADY_HAS_SECONDARY_ACCOUNT";
    ValidateDirectMailResponseOtrErrorEnum["USERALREADYLOGGEDIN"] = "USER_ALREADY_LOGGED_IN";
    ValidateDirectMailResponseOtrErrorEnum["USERALREADYMERGED"] = "USER_ALREADY_MERGED";
    ValidateDirectMailResponseOtrErrorEnum["USERCANTUSEOWNCODE"] = "USER_CANT_USE_OWN_CODE";
    ValidateDirectMailResponseOtrErrorEnum["USERDOESNOTMATCHCITATION"] = "USER_DOES_NOT_MATCH_CITATION";
    ValidateDirectMailResponseOtrErrorEnum["USERISNOTTHEOWNER"] = "USER_IS_NOT_THE_OWNER";
    ValidateDirectMailResponseOtrErrorEnum["USERNOTFOUND"] = "USER_NOT_FOUND";
    ValidateDirectMailResponseOtrErrorEnum["USERNOTFOUNDINLAWFIRM"] = "USER_NOT_FOUND_IN_LAWFIRM";
    ValidateDirectMailResponseOtrErrorEnum["VERIFICATIONCODENOTVALID"] = "VERIFICATION_CODE_NOT_VALID";
    ValidateDirectMailResponseOtrErrorEnum["VERIFICATIONLINKNOTVALID"] = "VERIFICATION_LINK_NOT_VALID";
})(ValidateDirectMailResponseOtrErrorEnum || (ValidateDirectMailResponseOtrErrorEnum = {}));
