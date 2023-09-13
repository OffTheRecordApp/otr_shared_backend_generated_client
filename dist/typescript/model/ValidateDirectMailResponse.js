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
exports.ValidateDirectMailResponse = void 0;
var ValidateDirectMailResponse;
(function (ValidateDirectMailResponse) {
    var OtrErrorEnum;
    (function (OtrErrorEnum) {
        OtrErrorEnum[OtrErrorEnum["ACCESSDENIED"] = 'ACCESS_DENIED'] = "ACCESSDENIED";
        OtrErrorEnum[OtrErrorEnum["ACCOUNTDISABLED"] = 'ACCOUNT_DISABLED'] = "ACCOUNTDISABLED";
        OtrErrorEnum[OtrErrorEnum["ARAGNOTCAPTURED"] = 'ARAG_NOT_CAPTURED'] = "ARAGNOTCAPTURED";
        OtrErrorEnum[OtrErrorEnum["AUTHENTICATIONCREDENTIALSNOTFOUND"] = 'AUTHENTICATION_CREDENTIALS_NOT_FOUND'] = "AUTHENTICATIONCREDENTIALSNOTFOUND";
        OtrErrorEnum[OtrErrorEnum["AUTHENTICATIONFAILED"] = 'AUTHENTICATION_FAILED'] = "AUTHENTICATIONFAILED";
        OtrErrorEnum[OtrErrorEnum["AUTHENTICATIONSERVICEFAILURE"] = 'AUTHENTICATION_SERVICE_FAILURE'] = "AUTHENTICATIONSERVICEFAILURE";
        OtrErrorEnum[OtrErrorEnum["AUTHORIZATIONSERVICEFAILURE"] = 'AUTHORIZATION_SERVICE_FAILURE'] = "AUTHORIZATIONSERVICEFAILURE";
        OtrErrorEnum[OtrErrorEnum["AUTHORIZEDCHARGESONCASE"] = 'AUTHORIZED_CHARGES_ON_CASE'] = "AUTHORIZEDCHARGESONCASE";
        OtrErrorEnum[OtrErrorEnum["BADCREDENTIALS"] = 'BAD_CREDENTIALS'] = "BADCREDENTIALS";
        OtrErrorEnum[OtrErrorEnum["CANCELLATIONWINDOWCLOSED"] = 'CANCELLATION_WINDOW_CLOSED'] = "CANCELLATIONWINDOWCLOSED";
        OtrErrorEnum[OtrErrorEnum["CASEALREADYEXISTS"] = 'CASE_ALREADY_EXISTS'] = "CASEALREADYEXISTS";
        OtrErrorEnum[OtrErrorEnum["CASEALREADYPAID"] = 'CASE_ALREADY_PAID'] = "CASEALREADYPAID";
        OtrErrorEnum[OtrErrorEnum["CASEALREADYRESOLVED"] = 'CASE_ALREADY_RESOLVED'] = "CASEALREADYRESOLVED";
        OtrErrorEnum[OtrErrorEnum["CASEIDCOLLISION"] = 'CASE_ID_COLLISION'] = "CASEIDCOLLISION";
        OtrErrorEnum[OtrErrorEnum["CASEISCANCELLED"] = 'CASE_IS_CANCELLED'] = "CASEISCANCELLED";
        OtrErrorEnum[OtrErrorEnum["CASEMATCHFAILED"] = 'CASE_MATCH_FAILED'] = "CASEMATCHFAILED";
        OtrErrorEnum[OtrErrorEnum["CASEMISSINGLAWFIRM"] = 'CASE_MISSING_LAWFIRM'] = "CASEMISSINGLAWFIRM";
        OtrErrorEnum[OtrErrorEnum["CASENOTACCEPTEDBYLAWFIRM"] = 'CASE_NOT_ACCEPTED_BY_LAWFIRM'] = "CASENOTACCEPTEDBYLAWFIRM";
        OtrErrorEnum[OtrErrorEnum["CASENOTCONFIRMED"] = 'CASE_NOT_CONFIRMED'] = "CASENOTCONFIRMED";
        OtrErrorEnum[OtrErrorEnum["CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMFEES"] = 'CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_FEES'] = "CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMFEES";
        OtrErrorEnum[OtrErrorEnum["CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMPAYOUTS"] = 'CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_PAYOUTS'] = "CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMPAYOUTS";
        OtrErrorEnum[OtrErrorEnum["CASEPAYMENTHASSTRIPECHARGE"] = 'CASE_PAYMENT_HAS_STRIPE_CHARGE'] = "CASEPAYMENTHASSTRIPECHARGE";
        OtrErrorEnum[OtrErrorEnum["CASESTATUSNOTALLOWED"] = 'CASE_STATUS_NOT_ALLOWED'] = "CASESTATUSNOTALLOWED";
        OtrErrorEnum[OtrErrorEnum["CASEUSERMISMATCH"] = 'CASE_USER_MISMATCH'] = "CASEUSERMISMATCH";
        OtrErrorEnum[OtrErrorEnum["CCWILLEXPIREBEFOREPAYMENTPLAN"] = 'CC_WILL_EXPIRE_BEFORE_PAYMENT_PLAN'] = "CCWILLEXPIREBEFOREPAYMENTPLAN";
        OtrErrorEnum[OtrErrorEnum["CHARGEALREADYCAPTURED"] = 'CHARGE_ALREADY_CAPTURED'] = "CHARGEALREADYCAPTURED";
        OtrErrorEnum[OtrErrorEnum["CHARGEEXPIRED"] = 'CHARGE_EXPIRED'] = "CHARGEEXPIRED";
        OtrErrorEnum[OtrErrorEnum["CHARGENOTALLOWED"] = 'CHARGE_NOT_ALLOWED'] = "CHARGENOTALLOWED";
        OtrErrorEnum[OtrErrorEnum["CHARGENOTCAPTURED"] = 'CHARGE_NOT_CAPTURED'] = "CHARGENOTCAPTURED";
        OtrErrorEnum[OtrErrorEnum["CHARGENOLONGERAUTHORIZED"] = 'CHARGE_NO_LONGER_AUTHORIZED'] = "CHARGENOLONGERAUTHORIZED";
        OtrErrorEnum[OtrErrorEnum["CHARGEREFUNDED"] = 'CHARGE_REFUNDED'] = "CHARGEREFUNDED";
        OtrErrorEnum[OtrErrorEnum["CITATIONALREADYDELETED"] = 'CITATION_ALREADY_DELETED'] = "CITATIONALREADYDELETED";
        OtrErrorEnum[OtrErrorEnum["CITATIONDOESNOTMATCHUSER"] = 'CITATION_DOES_NOT_MATCH_USER'] = "CITATIONDOESNOTMATCHUSER";
        OtrErrorEnum[OtrErrorEnum["CITATIONNOTOWNEDBYUSER"] = 'CITATION_NOT_OWNED_BY_USER'] = "CITATIONNOTOWNEDBYUSER";
        OtrErrorEnum[OtrErrorEnum["CODEALREADYEXISTSFORDRIVER"] = 'CODE_ALREADY_EXISTS_FOR_DRIVER'] = "CODEALREADYEXISTSFORDRIVER";
        OtrErrorEnum[OtrErrorEnum["CODEBENEFITTYPENOTSUPPORTED"] = 'CODE_BENEFIT_TYPE_NOT_SUPPORTED'] = "CODEBENEFITTYPENOTSUPPORTED";
        OtrErrorEnum[OtrErrorEnum["CODEDOESNOTEXIST"] = 'CODE_DOES_NOT_EXIST'] = "CODEDOESNOTEXIST";
        OtrErrorEnum[OtrErrorEnum["CODEEXCEEDEDMAXUSAGE"] = 'CODE_EXCEEDED_MAX_USAGE'] = "CODEEXCEEDEDMAXUSAGE";
        OtrErrorEnum[OtrErrorEnum["CODEHASEXPIRED"] = 'CODE_HAS_EXPIRED'] = "CODEHASEXPIRED";
        OtrErrorEnum[OtrErrorEnum["CODEISALREADYTAKEN"] = 'CODE_IS_ALREADY_TAKEN'] = "CODEISALREADYTAKEN";
        OtrErrorEnum[OtrErrorEnum["CODEISNOTACTIVE"] = 'CODE_IS_NOT_ACTIVE'] = "CODEISNOTACTIVE";
        OtrErrorEnum[OtrErrorEnum["CODENOTALLOWEDDUETOCREDIT"] = 'CODE_NOT_ALLOWED_DUE_TO_CREDIT'] = "CODENOTALLOWEDDUETOCREDIT";
        OtrErrorEnum[OtrErrorEnum["CODENOTSUPPORTEDBYLAWFIRM"] = 'CODE_NOT_SUPPORTED_BY_LAWFIRM'] = "CODENOTSUPPORTEDBYLAWFIRM";
        OtrErrorEnum[OtrErrorEnum["CODENOTVALIDFORLEGALSERVICE"] = 'CODE_NOT_VALID_FOR_LEGAL_SERVICE'] = "CODENOTVALIDFORLEGALSERVICE";
        OtrErrorEnum[OtrErrorEnum["CODENOTYETAPPROVED"] = 'CODE_NOT_YET_APPROVED'] = "CODENOTYETAPPROVED";
        OtrErrorEnum[OtrErrorEnum["CODEREFERRERBENEFITSNOTAUTHORIZED"] = 'CODE_REFERRER_BENEFITS_NOT_AUTHORIZED'] = "CODEREFERRERBENEFITSNOTAUTHORIZED";
        OtrErrorEnum[OtrErrorEnum["COMMENTALREADYEXISTS"] = 'COMMENT_ALREADY_EXISTS'] = "COMMENTALREADYEXISTS";
        OtrErrorEnum[OtrErrorEnum["COURTMISSINGADDRESS"] = 'COURT_MISSING_ADDRESS'] = "COURTMISSINGADDRESS";
        OtrErrorEnum[OtrErrorEnum["COURTNOTINSUPPORTEDREGION"] = 'COURT_NOT_IN_SUPPORTED_REGION'] = "COURTNOTINSUPPORTEDREGION";
        OtrErrorEnum[OtrErrorEnum["COURTNOTSUPPORTEDBYLAWFIRM"] = 'COURT_NOT_SUPPORTED_BY_LAWFIRM'] = "COURTNOTSUPPORTEDBYLAWFIRM";
        OtrErrorEnum[OtrErrorEnum["CURRENTPASSWORDINCORRECT"] = 'CURRENT_PASSWORD_INCORRECT'] = "CURRENTPASSWORDINCORRECT";
        OtrErrorEnum[OtrErrorEnum["DATABASERECORDLOCKED"] = 'DATABASE_RECORD_LOCKED'] = "DATABASERECORDLOCKED";
        OtrErrorEnum[OtrErrorEnum["DATAACCESSERROR"] = 'DATA_ACCESS_ERROR'] = "DATAACCESSERROR";
        OtrErrorEnum[OtrErrorEnum["DIRECTMAILRECONCILATIONIDNOTEXIST"] = 'DIRECT_MAIL_RECONCILATION_ID_NOT_EXIST'] = "DIRECTMAILRECONCILATIONIDNOTEXIST";
        OtrErrorEnum[OtrErrorEnum["DIRECTMAILSENTALREADY"] = 'DIRECT_MAIL_SENT_ALREADY'] = "DIRECTMAILSENTALREADY";
        OtrErrorEnum[OtrErrorEnum["DIRECTMAILTEMPLATEDUPLICATEDETECTED"] = 'DIRECT_MAIL_TEMPLATE_DUPLICATE_DETECTED'] = "DIRECTMAILTEMPLATEDUPLICATEDETECTED";
        OtrErrorEnum[OtrErrorEnum["DIRECTMAILTEMPLATENOTEXIST"] = 'DIRECT_MAIL_TEMPLATE_NOT_EXIST'] = "DIRECTMAILTEMPLATENOTEXIST";
        OtrErrorEnum[OtrErrorEnum["DRIPDEPENDENCYFAILURE"] = 'DRIP_DEPENDENCY_FAILURE'] = "DRIPDEPENDENCYFAILURE";
        OtrErrorEnum[OtrErrorEnum["DUPLICATECOURT"] = 'DUPLICATE_COURT'] = "DUPLICATECOURT";
        OtrErrorEnum[OtrErrorEnum["DUPLICATEEMAIL"] = 'DUPLICATE_EMAIL'] = "DUPLICATEEMAIL";
        OtrErrorEnum[OtrErrorEnum["DUPLICATEENTRY"] = 'DUPLICATE_ENTRY'] = "DUPLICATEENTRY";
        OtrErrorEnum[OtrErrorEnum["DUPLICATELANDINGPAGEURL"] = 'DUPLICATE_LANDING_PAGE_URL'] = "DUPLICATELANDINGPAGEURL";
        OtrErrorEnum[OtrErrorEnum["DUPLICATEMESSAGEATTEMPT"] = 'DUPLICATE_MESSAGE_ATTEMPT'] = "DUPLICATEMESSAGEATTEMPT";
        OtrErrorEnum[OtrErrorEnum["EMAILADDRESSALREADYSUBSCRIBED"] = 'EMAIL_ADDRESS_ALREADY_SUBSCRIBED'] = "EMAILADDRESSALREADYSUBSCRIBED";
        OtrErrorEnum[OtrErrorEnum["EMAILADDRESSBLACKLISTED"] = 'EMAIL_ADDRESS_BLACKLISTED'] = "EMAILADDRESSBLACKLISTED";
        OtrErrorEnum[OtrErrorEnum["EMAILALREADYEXISTS"] = 'EMAIL_ALREADY_EXISTS'] = "EMAILALREADYEXISTS";
        OtrErrorEnum[OtrErrorEnum["EMAILALREADYINUSE"] = 'EMAIL_ALREADY_IN_USE'] = "EMAILALREADYINUSE";
        OtrErrorEnum[OtrErrorEnum["EMAILALREADYSENT"] = 'EMAIL_ALREADY_SENT'] = "EMAILALREADYSENT";
        OtrErrorEnum[OtrErrorEnum["EMAILNOTCONFIRMED"] = 'EMAIL_NOT_CONFIRMED'] = "EMAILNOTCONFIRMED";
        OtrErrorEnum[OtrErrorEnum["EMAILNOTSENT"] = 'EMAIL_NOT_SENT'] = "EMAILNOTSENT";
        OtrErrorEnum[OtrErrorEnum["EXPECTEDNULLINPUT"] = 'EXPECTED_NULL_INPUT'] = "EXPECTEDNULLINPUT";
        OtrErrorEnum[OtrErrorEnum["EXPECTEDROLEMISSING"] = 'EXPECTED_ROLE_MISSING'] = "EXPECTEDROLEMISSING";
        OtrErrorEnum[OtrErrorEnum["FAILEDTOREVERSETRANSFER"] = 'FAILED_TO_REVERSE_TRANSFER'] = "FAILEDTOREVERSETRANSFER";
        OtrErrorEnum[OtrErrorEnum["FRESHDESKTICKETNOTFOUND"] = 'FRESHDESK_TICKET_NOT_FOUND'] = "FRESHDESKTICKETNOTFOUND";
        OtrErrorEnum[OtrErrorEnum["FRESHDESKUNEXPECTEDNUMBEROFRESULTS"] = 'FRESHDESK_UNEXPECTED_NUMBER_OF_RESULTS'] = "FRESHDESKUNEXPECTEDNUMBEROFRESULTS";
        OtrErrorEnum[OtrErrorEnum["GHOSTUSERNOTALLOWED"] = 'GHOST_USER_NOT_ALLOWED'] = "GHOSTUSERNOTALLOWED";
        OtrErrorEnum[OtrErrorEnum["HTTPREQUESTERROR"] = 'HTTP_REQUEST_ERROR'] = "HTTPREQUESTERROR";
        OtrErrorEnum[OtrErrorEnum["IMAGENOTCOMPRESSEDPROPERLY"] = 'IMAGE_NOT_COMPRESSED_PROPERLY'] = "IMAGENOTCOMPRESSEDPROPERLY";
        OtrErrorEnum[OtrErrorEnum["INACTIVESTOREFRONT"] = 'INACTIVE_STOREFRONT'] = "INACTIVESTOREFRONT";
        OtrErrorEnum[OtrErrorEnum["INCORRECTDIMENSIONS"] = 'INCORRECT_DIMENSIONS'] = "INCORRECTDIMENSIONS";
        OtrErrorEnum[OtrErrorEnum["INCORRECTENCODING"] = 'INCORRECT_ENCODING'] = "INCORRECTENCODING";
        OtrErrorEnum[OtrErrorEnum["INELIGIBLESTATUSFORTRANSFER"] = 'INELIGIBLE_STATUS_FOR_TRANSFER'] = "INELIGIBLESTATUSFORTRANSFER";
        OtrErrorEnum[OtrErrorEnum["INVALIDADDRESSID"] = 'INVALID_ADDRESS_ID'] = "INVALIDADDRESSID";
        OtrErrorEnum[OtrErrorEnum["INVALIDAMOUNT"] = 'INVALID_AMOUNT'] = "INVALIDAMOUNT";
        OtrErrorEnum[OtrErrorEnum["INVALIDAPITOKEN"] = 'INVALID_API_TOKEN'] = "INVALIDAPITOKEN";
        OtrErrorEnum[OtrErrorEnum["INVALIDAPIUSAGE"] = 'INVALID_API_USAGE'] = "INVALIDAPIUSAGE";
        OtrErrorEnum[OtrErrorEnum["INVALIDCASEACTIONID"] = 'INVALID_CASE_ACTION_ID'] = "INVALIDCASEACTIONID";
        OtrErrorEnum[OtrErrorEnum["INVALIDCASEID"] = 'INVALID_CASE_ID'] = "INVALIDCASEID";
        OtrErrorEnum[OtrErrorEnum["INVALIDCASEPAYMENTID"] = 'INVALID_CASE_PAYMENT_ID'] = "INVALIDCASEPAYMENTID";
        OtrErrorEnum[OtrErrorEnum["INVALIDCITATIONID"] = 'INVALID_CITATION_ID'] = "INVALIDCITATIONID";
        OtrErrorEnum[OtrErrorEnum["INVALIDCODE"] = 'INVALID_CODE'] = "INVALIDCODE";
        OtrErrorEnum[OtrErrorEnum["INVALIDCOURTID"] = 'INVALID_COURT_ID'] = "INVALIDCOURTID";
        OtrErrorEnum[OtrErrorEnum["INVALIDDATE"] = 'INVALID_DATE'] = "INVALIDDATE";
        OtrErrorEnum[OtrErrorEnum["INVALIDDISPUTEID"] = 'INVALID_DISPUTE_ID'] = "INVALIDDISPUTEID";
        OtrErrorEnum[OtrErrorEnum["INVALIDDOCUMENTID"] = 'INVALID_DOCUMENT_ID'] = "INVALIDDOCUMENTID";
        OtrErrorEnum[OtrErrorEnum["INVALIDEMAILADDRESS"] = 'INVALID_EMAIL_ADDRESS'] = "INVALIDEMAILADDRESS";
        OtrErrorEnum[OtrErrorEnum["INVALIDEMAILTEMPLATE"] = 'INVALID_EMAIL_TEMPLATE'] = "INVALIDEMAILTEMPLATE";
        OtrErrorEnum[OtrErrorEnum["INVALIDENDDATE"] = 'INVALID_END_DATE'] = "INVALIDENDDATE";
        OtrErrorEnum[OtrErrorEnum["INVALIDENUMVALUE"] = 'INVALID_ENUM_VALUE'] = "INVALIDENUMVALUE";
        OtrErrorEnum[OtrErrorEnum["INVALIDFEEPERCENTAGE"] = 'INVALID_FEE_PERCENTAGE'] = "INVALIDFEEPERCENTAGE";
        OtrErrorEnum[OtrErrorEnum["INVALIDFIRSTNAME"] = 'INVALID_FIRST_NAME'] = "INVALIDFIRSTNAME";
        OtrErrorEnum[OtrErrorEnum["INVALIDINTERNETADDRESS"] = 'INVALID_INTERNET_ADDRESS'] = "INVALIDINTERNETADDRESS";
        OtrErrorEnum[OtrErrorEnum["INVALIDINVITATIONTOKEN"] = 'INVALID_INVITATION_TOKEN'] = "INVALIDINVITATIONTOKEN";
        OtrErrorEnum[OtrErrorEnum["INVALIDINVOICELINEITEMID"] = 'INVALID_INVOICE_LINE_ITEM_ID'] = "INVALIDINVOICELINEITEMID";
        OtrErrorEnum[OtrErrorEnum["INVALIDLASTNAME"] = 'INVALID_LAST_NAME'] = "INVALIDLASTNAME";
        OtrErrorEnum[OtrErrorEnum["INVALIDLAWFIRM"] = 'INVALID_LAWFIRM'] = "INVALIDLAWFIRM";
        OtrErrorEnum[OtrErrorEnum["INVALIDLAWYERID"] = 'INVALID_LAWYER_ID'] = "INVALIDLAWYERID";
        OtrErrorEnum[OtrErrorEnum["INVALIDLEGALSERVICE"] = 'INVALID_LEGAL_SERVICE'] = "INVALIDLEGALSERVICE";
        OtrErrorEnum[OtrErrorEnum["INVALIDLINEITEM"] = 'INVALID_LINE_ITEM'] = "INVALIDLINEITEM";
        OtrErrorEnum[OtrErrorEnum["INVALIDMESSAGEID"] = 'INVALID_MESSAGE_ID'] = "INVALIDMESSAGEID";
        OtrErrorEnum[OtrErrorEnum["INVALIDPAGINATIONTOKEN"] = 'INVALID_PAGINATION_TOKEN'] = "INVALIDPAGINATIONTOKEN";
        OtrErrorEnum[OtrErrorEnum["INVALIDPARAMETERVALUE"] = 'INVALID_PARAMETER_VALUE'] = "INVALIDPARAMETERVALUE";
        OtrErrorEnum[OtrErrorEnum["INVALIDPASSWORD"] = 'INVALID_PASSWORD'] = "INVALIDPASSWORD";
        OtrErrorEnum[OtrErrorEnum["INVALIDPASSWORDRESETTOKEN"] = 'INVALID_PASSWORD_RESET_TOKEN'] = "INVALIDPASSWORDRESETTOKEN";
        OtrErrorEnum[OtrErrorEnum["INVALIDPUSHTOKEN"] = 'INVALID_PUSH_TOKEN'] = "INVALIDPUSHTOKEN";
        OtrErrorEnum[OtrErrorEnum["INVALIDRECIPIENTLIST"] = 'INVALID_RECIPIENT_LIST'] = "INVALIDRECIPIENTLIST";
        OtrErrorEnum[OtrErrorEnum["INVALIDREQUEST"] = 'INVALID_REQUEST'] = "INVALIDREQUEST";
        OtrErrorEnum[OtrErrorEnum["INVALIDREQUESTBODY"] = 'INVALID_REQUEST_BODY'] = "INVALIDREQUESTBODY";
        OtrErrorEnum[OtrErrorEnum["INVALIDRESOLUTIONSTATUS"] = 'INVALID_RESOLUTION_STATUS'] = "INVALIDRESOLUTIONSTATUS";
        OtrErrorEnum[OtrErrorEnum["INVALIDREVIEWCOPY"] = 'INVALID_REVIEW_COPY'] = "INVALIDREVIEWCOPY";
        OtrErrorEnum[OtrErrorEnum["INVALIDROLETYPE"] = 'INVALID_ROLE_TYPE'] = "INVALIDROLETYPE";
        OtrErrorEnum[OtrErrorEnum["INVALIDSTATE"] = 'INVALID_STATE'] = "INVALIDSTATE";
        OtrErrorEnum[OtrErrorEnum["INVALIDSTRIPEACCOUNT"] = 'INVALID_STRIPE_ACCOUNT'] = "INVALIDSTRIPEACCOUNT";
        OtrErrorEnum[OtrErrorEnum["INVALIDSTRIPECHARGEID"] = 'INVALID_STRIPE_CHARGE_ID'] = "INVALIDSTRIPECHARGEID";
        OtrErrorEnum[OtrErrorEnum["INVALIDSTRIPEREQUEST"] = 'INVALID_STRIPE_REQUEST'] = "INVALIDSTRIPEREQUEST";
        OtrErrorEnum[OtrErrorEnum["INVALIDSTRIPETRANSACTIONID"] = 'INVALID_STRIPE_TRANSACTION_ID'] = "INVALIDSTRIPETRANSACTIONID";
        OtrErrorEnum[OtrErrorEnum["INVALIDSUBSCRIPTIONTYPE"] = 'INVALID_SUBSCRIPTION_TYPE'] = "INVALIDSUBSCRIPTIONTYPE";
        OtrErrorEnum[OtrErrorEnum["INVALIDTASKID"] = 'INVALID_TASK_ID'] = "INVALIDTASKID";
        OtrErrorEnum[OtrErrorEnum["INVALIDTICKETID"] = 'INVALID_TICKET_ID'] = "INVALIDTICKETID";
        OtrErrorEnum[OtrErrorEnum["INVALIDTICKETREVIEWID"] = 'INVALID_TICKET_REVIEW_ID'] = "INVALIDTICKETREVIEWID";
        OtrErrorEnum[OtrErrorEnum["INVALIDTRAFFICVIOLATION"] = 'INVALID_TRAFFIC_VIOLATION'] = "INVALIDTRAFFICVIOLATION";
        OtrErrorEnum[OtrErrorEnum["INVALIDUSERID"] = 'INVALID_USER_ID'] = "INVALIDUSERID";
        OtrErrorEnum[OtrErrorEnum["INVALIDUSERNAME"] = 'INVALID_USER_NAME'] = "INVALIDUSERNAME";
        OtrErrorEnum[OtrErrorEnum["INVITATIONALREADYSENT"] = 'INVITATION_ALREADY_SENT'] = "INVITATIONALREADYSENT";
        OtrErrorEnum[OtrErrorEnum["INVITATIONALREADYVERIFIED"] = 'INVITATION_ALREADY_VERIFIED'] = "INVITATIONALREADYVERIFIED";
        OtrErrorEnum[OtrErrorEnum["INVITATIONCANCELLED"] = 'INVITATION_CANCELLED'] = "INVITATIONCANCELLED";
        OtrErrorEnum[OtrErrorEnum["INVITATIONHASEXPIRED"] = 'INVITATION_HAS_EXPIRED'] = "INVITATIONHASEXPIRED";
        OtrErrorEnum[OtrErrorEnum["INVITATIONRECIPIENTNOACCOUNT"] = 'INVITATION_RECIPIENT_NO_ACCOUNT'] = "INVITATIONRECIPIENTNOACCOUNT";
        OtrErrorEnum[OtrErrorEnum["IOERROR"] = 'IO_ERROR'] = "IOERROR";
        OtrErrorEnum[OtrErrorEnum["LAMBDAURLINVOKEFAILURE"] = 'LAMBDA_URL_INVOKE_FAILURE'] = "LAMBDAURLINVOKEFAILURE";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMCASECAPACITYREACHED"] = 'LAWFIRM_CASE_CAPACITY_REACHED'] = "LAWFIRMCASECAPACITYREACHED";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMCASENOTACTIVE"] = 'LAWFIRM_CASE_NOT_ACTIVE'] = "LAWFIRMCASENOTACTIVE";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMDOESNOTHANDLEACCIDENTS"] = 'LAWFIRM_DOES_NOT_HANDLE_ACCIDENTS'] = "LAWFIRMDOESNOTHANDLEACCIDENTS";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMDOESNOTHANDLEPASTDUE"] = 'LAWFIRM_DOES_NOT_HANDLE_PAST_DUE'] = "LAWFIRMDOESNOTHANDLEPASTDUE";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMFEEHASSTRIPEREFERENCE"] = 'LAWFIRM_FEE_HAS_STRIPE_REFERENCE'] = "LAWFIRMFEEHASSTRIPEREFERENCE";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMMISSINGACCOUNTFEE"] = 'LAWFIRM_MISSING_ACCOUNT_FEE'] = "LAWFIRMMISSINGACCOUNTFEE";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMNOTELIGIBLE"] = 'LAWFIRM_NOT_ELIGIBLE'] = "LAWFIRMNOTELIGIBLE";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMONVACATIONMODE"] = 'LAWFIRM_ON_VACATION_MODE'] = "LAWFIRMONVACATIONMODE";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMPAYOUTHASSTRIPEREFERENCE"] = 'LAWFIRM_PAYOUT_HAS_STRIPE_REFERENCE'] = "LAWFIRMPAYOUTHASSTRIPEREFERENCE";
        OtrErrorEnum[OtrErrorEnum["LAWFIRMNEEDSADDRESS"] = 'LAW_FIRM_NEEDS_ADDRESS'] = "LAWFIRMNEEDSADDRESS";
        OtrErrorEnum[OtrErrorEnum["LEGALSERVICENOTSUPPORTED"] = 'LEGAL_SERVICE_NOT_SUPPORTED'] = "LEGALSERVICENOTSUPPORTED";
        OtrErrorEnum[OtrErrorEnum["LEGALSERVICEQUOTEEXPIRED"] = 'LEGAL_SERVICE_QUOTE_EXPIRED'] = "LEGALSERVICEQUOTEEXPIRED";
        OtrErrorEnum[OtrErrorEnum["LINEITEMMISSINGRECIPIENT"] = 'LINE_ITEM_MISSING_RECIPIENT'] = "LINEITEMMISSINGRECIPIENT";
        OtrErrorEnum[OtrErrorEnum["LINKSNOTALLOWED"] = 'LINKS_NOT_ALLOWED'] = "LINKSNOTALLOWED";
        OtrErrorEnum[OtrErrorEnum["LOBADDRESSCREATIONFAILURE"] = 'LOB_ADDRESS_CREATION_FAILURE'] = "LOBADDRESSCREATIONFAILURE";
        OtrErrorEnum[OtrErrorEnum["LOBADDRESSVALIDATIONFAILURE"] = 'LOB_ADDRESS_VALIDATION_FAILURE'] = "LOBADDRESSVALIDATIONFAILURE";
        OtrErrorEnum[OtrErrorEnum["LOBCANCELCHECKDELIVERYFAILURE"] = 'LOB_CANCEL_CHECK_DELIVERY_FAILURE'] = "LOBCANCELCHECKDELIVERYFAILURE";
        OtrErrorEnum[OtrErrorEnum["LOBCANCELMAILDELIVERYFAILURE"] = 'LOB_CANCEL_MAIL_DELIVERY_FAILURE'] = "LOBCANCELMAILDELIVERYFAILURE";
        OtrErrorEnum[OtrErrorEnum["LOBCHECKMAILDELIVERYFAILURE"] = 'LOB_CHECK_MAIL_DELIVERY_FAILURE'] = "LOBCHECKMAILDELIVERYFAILURE";
        OtrErrorEnum[OtrErrorEnum["LOBPOSTCARDCREATIONFAILURE"] = 'LOB_POSTCARD_CREATION_FAILURE'] = "LOBPOSTCARDCREATIONFAILURE";
        OtrErrorEnum[OtrErrorEnum["MEDIATYPEINCORRECT"] = 'MEDIA_TYPE_INCORRECT'] = "MEDIATYPEINCORRECT";
        OtrErrorEnum[OtrErrorEnum["MERGEROLLBACKNOTALLOWED"] = 'MERGE_ROLLBACK_NOT_ALLOWED'] = "MERGEROLLBACKNOTALLOWED";
        OtrErrorEnum[OtrErrorEnum["MISSINGACTIONTYPE"] = 'MISSING_ACTION_TYPE'] = "MISSINGACTIONTYPE";
        OtrErrorEnum[OtrErrorEnum["MISSINGADJUSTEDFINEAMOUNT"] = 'MISSING_ADJUSTED_FINE_AMOUNT'] = "MISSINGADJUSTEDFINEAMOUNT";
        OtrErrorEnum[OtrErrorEnum["MISSINGCASE"] = 'MISSING_CASE'] = "MISSINGCASE";
        OtrErrorEnum[OtrErrorEnum["MISSINGCITATIONID"] = 'MISSING_CITATION_ID'] = "MISSINGCITATIONID";
        OtrErrorEnum[OtrErrorEnum["MISSINGCOURTFEE"] = 'MISSING_COURT_FEE'] = "MISSINGCOURTFEE";
        OtrErrorEnum[OtrErrorEnum["MISSINGCOURTID"] = 'MISSING_COURT_ID'] = "MISSINGCOURTID";
        OtrErrorEnum[OtrErrorEnum["MISSINGEMAILADDRESS"] = 'MISSING_EMAIL_ADDRESS'] = "MISSINGEMAILADDRESS";
        OtrErrorEnum[OtrErrorEnum["MISSINGFEEDBACKCONTENT"] = 'MISSING_FEEDBACK_CONTENT'] = "MISSINGFEEDBACKCONTENT";
        OtrErrorEnum[OtrErrorEnum["MISSINGFIRSTNAME"] = 'MISSING_FIRSTNAME'] = "MISSINGFIRSTNAME";
        OtrErrorEnum[OtrErrorEnum["MISSINGIMAGEURL"] = 'MISSING_IMAGE_URL'] = "MISSINGIMAGEURL";
        OtrErrorEnum[OtrErrorEnum["MISSINGLASTNAME"] = 'MISSING_LASTNAME'] = "MISSINGLASTNAME";
        OtrErrorEnum[OtrErrorEnum["MISSINGLAWFIRMID"] = 'MISSING_LAWFIRM_ID'] = "MISSINGLAWFIRMID";
        OtrErrorEnum[OtrErrorEnum["MISSINGLAWYERID"] = 'MISSING_LAWYER_ID'] = "MISSINGLAWYERID";
        OtrErrorEnum[OtrErrorEnum["MISSINGMEDIADATA"] = 'MISSING_MEDIA_DATA'] = "MISSINGMEDIADATA";
        OtrErrorEnum[OtrErrorEnum["MISSINGNUMVIOLATIONS"] = 'MISSING_NUM_VIOLATIONS'] = "MISSINGNUMVIOLATIONS";
        OtrErrorEnum[OtrErrorEnum["MISSINGPARAMETER"] = 'MISSING_PARAMETER'] = "MISSINGPARAMETER";
        OtrErrorEnum[OtrErrorEnum["MISSINGPASSWORD"] = 'MISSING_PASSWORD'] = "MISSINGPASSWORD";
        OtrErrorEnum[OtrErrorEnum["MISSINGRECIPIENTEMAIL"] = 'MISSING_RECIPIENT_EMAIL'] = "MISSINGRECIPIENTEMAIL";
        OtrErrorEnum[OtrErrorEnum["MISSINGREQUESTBODY"] = 'MISSING_REQUEST_BODY'] = "MISSINGREQUESTBODY";
        OtrErrorEnum[OtrErrorEnum["MISSINGRESOLUTIONSTATUS"] = 'MISSING_RESOLUTION_STATUS'] = "MISSINGRESOLUTIONSTATUS";
        OtrErrorEnum[OtrErrorEnum["MISSINGSENDEREMAIL"] = 'MISSING_SENDER_EMAIL'] = "MISSINGSENDEREMAIL";
        OtrErrorEnum[OtrErrorEnum["MISSINGSENDERPHONENUMBER"] = 'MISSING_SENDER_PHONE_NUMBER'] = "MISSINGSENDERPHONENUMBER";
        OtrErrorEnum[OtrErrorEnum["MISSINGSEOURL"] = 'MISSING_SEO_URL'] = "MISSINGSEOURL";
        OtrErrorEnum[OtrErrorEnum["MISSINGSTRIPETOKEN"] = 'MISSING_STRIPE_TOKEN'] = "MISSINGSTRIPETOKEN";
        OtrErrorEnum[OtrErrorEnum["MISSINGSUBSCRIBER"] = 'MISSING_SUBSCRIBER'] = "MISSINGSUBSCRIBER";
        OtrErrorEnum[OtrErrorEnum["MISSINGTICKETISSUEDATE"] = 'MISSING_TICKET_ISSUE_DATE'] = "MISSINGTICKETISSUEDATE";
        OtrErrorEnum[OtrErrorEnum["MISSINGUSERNAME"] = 'MISSING_USER_NAME'] = "MISSINGUSERNAME";
        OtrErrorEnum[OtrErrorEnum["MULTIPLELAWFIRMFEES"] = 'MULTIPLE_LAWFIRM_FEES'] = "MULTIPLELAWFIRMFEES";
        OtrErrorEnum[OtrErrorEnum["MULTIPLELAWFIRMPAYOUTS"] = 'MULTIPLE_LAWFIRM_PAYOUTS'] = "MULTIPLELAWFIRMPAYOUTS";
        OtrErrorEnum[OtrErrorEnum["MULTIPLEREFUNDSONCHARGE"] = 'MULTIPLE_REFUNDS_ON_CHARGE'] = "MULTIPLEREFUNDSONCHARGE";
        OtrErrorEnum[OtrErrorEnum["MULTIPLESTRIPECUSTOMERACCOUNTSFOUND"] = 'MULTIPLE_STRIPE_CUSTOMER_ACCOUNTS_FOUND'] = "MULTIPLESTRIPECUSTOMERACCOUNTSFOUND";
        OtrErrorEnum[OtrErrorEnum["MULTIPLESTRIPETRANSFERSFOUND"] = 'MULTIPLE_STRIPE_TRANSFERS_FOUND'] = "MULTIPLESTRIPETRANSFERSFOUND";
        OtrErrorEnum[OtrErrorEnum["MUSTBEPOSITIVE"] = 'MUST_BE_POSITIVE'] = "MUSTBEPOSITIVE";
        OtrErrorEnum[OtrErrorEnum["NOTIFICATIONERROR"] = 'NOTIFICATION_ERROR'] = "NOTIFICATIONERROR";
        OtrErrorEnum[OtrErrorEnum["NOTIFICATIONINCORRECTROLE"] = 'NOTIFICATION_INCORRECT_ROLE'] = "NOTIFICATIONINCORRECTROLE";
        OtrErrorEnum[OtrErrorEnum["NOTIFICATIONTOOLONG"] = 'NOTIFICATION_TOO_LONG'] = "NOTIFICATIONTOOLONG";
        OtrErrorEnum[OtrErrorEnum["NOTIFICATIONTOSELF"] = 'NOTIFICATION_TO_SELF'] = "NOTIFICATIONTOSELF";
        OtrErrorEnum[OtrErrorEnum["NOTAUTHENTICATED"] = 'NOT_AUTHENTICATED'] = "NOTAUTHENTICATED";
        OtrErrorEnum[OtrErrorEnum["NOACCOUNTWITHEMAIL"] = 'NO_ACCOUNT_WITH_EMAIL'] = "NOACCOUNTWITHEMAIL";
        OtrErrorEnum[OtrErrorEnum["NOCASEOWNER"] = 'NO_CASE_OWNER'] = "NOCASEOWNER";
        OtrErrorEnum[OtrErrorEnum["NOCHARGESONCASE"] = 'NO_CHARGES_ON_CASE'] = "NOCHARGESONCASE";
        OtrErrorEnum[OtrErrorEnum["NOINSURANCE"] = 'NO_INSURANCE'] = "NOINSURANCE";
        OtrErrorEnum[OtrErrorEnum["NOLAWFIRMAVAILABLE"] = 'NO_LAWFIRM_AVAILABLE'] = "NOLAWFIRMAVAILABLE";
        OtrErrorEnum[OtrErrorEnum["NOLEGALSERVICESINREGION"] = 'NO_LEGAL_SERVICES_IN_REGION'] = "NOLEGALSERVICESINREGION";
        OtrErrorEnum[OtrErrorEnum["NOSTRIPEACCOUNT"] = 'NO_STRIPE_ACCOUNT'] = "NOSTRIPEACCOUNT";
        OtrErrorEnum[OtrErrorEnum["OWNERCASEMESSAGEMISMATCH"] = 'OWNER_CASE_MESSAGE_MISMATCH'] = "OWNERCASEMESSAGEMISMATCH";
        OtrErrorEnum[OtrErrorEnum["PAYMENTPLANSDENIED"] = 'PAYMENT_PLANS_DENIED'] = "PAYMENTPLANSDENIED";
        OtrErrorEnum[OtrErrorEnum["PAYMENTPLANLEGALFEEHASCENTS"] = 'PAYMENT_PLAN_LEGAL_FEE_HAS_CENTS'] = "PAYMENTPLANLEGALFEEHASCENTS";
        OtrErrorEnum[OtrErrorEnum["PAYMENTPLANNOTSUPPORTEDWITHPREPAIDCARD"] = 'PAYMENT_PLAN_NOT_SUPPORTED_WITH_PREPAID_CARD'] = "PAYMENTPLANNOTSUPPORTEDWITHPREPAIDCARD";
        OtrErrorEnum[OtrErrorEnum["PDFPASSWORDPROTECTED"] = 'PDF_PASSWORD_PROTECTED'] = "PDFPASSWORDPROTECTED";
        OtrErrorEnum[OtrErrorEnum["PLAIDERROR"] = 'PLAID_ERROR'] = "PLAIDERROR";
        OtrErrorEnum[OtrErrorEnum["QBOBILLCREATIONFAILURE"] = 'QBO_BILL_CREATION_FAILURE'] = "QBOBILLCREATIONFAILURE";
        OtrErrorEnum[OtrErrorEnum["QBOVENDORCREATIONFAILURE"] = 'QBO_VENDOR_CREATION_FAILURE'] = "QBOVENDORCREATIONFAILURE";
        OtrErrorEnum[OtrErrorEnum["REFERRALSNOTALLOWEDTOBEREDEEMED"] = 'REFERRALS_NOT_ALLOWED_TO_BE_REDEEMED'] = "REFERRALSNOTALLOWEDTOBEREDEEMED";
        OtrErrorEnum[OtrErrorEnum["REFUNDNOTALLOWED"] = 'REFUND_NOT_ALLOWED'] = "REFUNDNOTALLOWED";
        OtrErrorEnum[OtrErrorEnum["REFUNDNOTELIGIBLE"] = 'REFUND_NOT_ELIGIBLE'] = "REFUNDNOTELIGIBLE";
        OtrErrorEnum[OtrErrorEnum["REFUNDNOTELIGIBLECRIMINAL"] = 'REFUND_NOT_ELIGIBLE_CRIMINAL'] = "REFUNDNOTELIGIBLECRIMINAL";
        OtrErrorEnum[OtrErrorEnum["REQUESTNOTWELLFORMATTED"] = 'REQUEST_NOT_WELL_FORMATTED'] = "REQUESTNOTWELLFORMATTED";
        OtrErrorEnum[OtrErrorEnum["RESETTOKENEXPIRED"] = 'RESET_TOKEN_EXPIRED'] = "RESETTOKENEXPIRED";
        OtrErrorEnum[OtrErrorEnum["RESOURCENOTFOUND"] = 'RESOURCE_NOT_FOUND'] = "RESOURCENOTFOUND";
        OtrErrorEnum[OtrErrorEnum["REVIEWALREADYEXISTS"] = 'REVIEW_ALREADY_EXISTS'] = "REVIEWALREADYEXISTS";
        OtrErrorEnum[OtrErrorEnum["ROLENOTSUPPORTED"] = 'ROLE_NOT_SUPPORTED'] = "ROLENOTSUPPORTED";
        OtrErrorEnum[OtrErrorEnum["S3CLIENTFAILED"] = 'S3_CLIENT_FAILED'] = "S3CLIENTFAILED";
        OtrErrorEnum[OtrErrorEnum["S3SERVERFAILED"] = 'S3_SERVER_FAILED'] = "S3SERVERFAILED";
        OtrErrorEnum[OtrErrorEnum["SAMEUSERCANNOTBEMERGED"] = 'SAME_USER_CANNOT_BE_MERGED'] = "SAMEUSERCANNOTBEMERGED";
        OtrErrorEnum[OtrErrorEnum["SEOURLALREADYEXISTS"] = 'SEO_URL_ALREADY_EXISTS'] = "SEOURLALREADYEXISTS";
        OtrErrorEnum[OtrErrorEnum["SERVICERATENOTFOUND"] = 'SERVICE_RATE_NOT_FOUND'] = "SERVICERATENOTFOUND";
        OtrErrorEnum[OtrErrorEnum["SIMILARCOURT"] = 'SIMILAR_COURT'] = "SIMILARCOURT";
        OtrErrorEnum[OtrErrorEnum["SOCIALPROFILEMISSINGEMAIL"] = 'SOCIAL_PROFILE_MISSING_EMAIL'] = "SOCIALPROFILEMISSINGEMAIL";
        OtrErrorEnum[OtrErrorEnum["SSOSERVICEPROVIDERIDNOTFOUND"] = 'SSO_SERVICE_PROVIDER_ID_NOT_FOUND'] = "SSOSERVICEPROVIDERIDNOTFOUND";
        OtrErrorEnum[OtrErrorEnum["STATENOTSUPPORTED"] = 'STATE_NOT_SUPPORTED'] = "STATENOTSUPPORTED";
        OtrErrorEnum[OtrErrorEnum["STRIPEAPICONNECTIONEXCEPTION"] = 'STRIPE_API_CONNECTION_EXCEPTION'] = "STRIPEAPICONNECTIONEXCEPTION";
        OtrErrorEnum[OtrErrorEnum["STRIPEAPIEXCEPTION"] = 'STRIPE_API_EXCEPTION'] = "STRIPEAPIEXCEPTION";
        OtrErrorEnum[OtrErrorEnum["STRIPEAPPLICATIONFEEALREADYREFUNDED"] = 'STRIPE_APPLICATION_FEE_ALREADY_REFUNDED'] = "STRIPEAPPLICATIONFEEALREADYREFUNDED";
        OtrErrorEnum[OtrErrorEnum["STRIPEAPPLICATIONFEENOTFOUND"] = 'STRIPE_APPLICATION_FEE_NOT_FOUND'] = "STRIPEAPPLICATIONFEENOTFOUND";
        OtrErrorEnum[OtrErrorEnum["STRIPEAUTHENTICATIONEXCEPTION"] = 'STRIPE_AUTHENTICATION_EXCEPTION'] = "STRIPEAUTHENTICATIONEXCEPTION";
        OtrErrorEnum[OtrErrorEnum["STRIPECARDEXCEPTION"] = 'STRIPE_CARD_EXCEPTION'] = "STRIPECARDEXCEPTION";
        OtrErrorEnum[OtrErrorEnum["STRIPECONNECTACCOUNTNOTFOUND"] = 'STRIPE_CONNECT_ACCOUNT_NOT_FOUND'] = "STRIPECONNECTACCOUNTNOTFOUND";
        OtrErrorEnum[OtrErrorEnum["STRIPEERROR"] = 'STRIPE_ERROR'] = "STRIPEERROR";
        OtrErrorEnum[OtrErrorEnum["STRIPEFAILEDCHARGE"] = 'STRIPE_FAILED_CHARGE'] = "STRIPEFAILEDCHARGE";
        OtrErrorEnum[OtrErrorEnum["STRIPEOAUTHCONNECTFAILED"] = 'STRIPE_OAUTH_CONNECT_FAILED'] = "STRIPEOAUTHCONNECTFAILED";
        OtrErrorEnum[OtrErrorEnum["STRIPEOBJECTMISSINGMETADATA"] = 'STRIPE_OBJECT_MISSING_METADATA'] = "STRIPEOBJECTMISSINGMETADATA";
        OtrErrorEnum[OtrErrorEnum["STRIPERESOURCENOTFOUND"] = 'STRIPE_RESOURCE_NOT_FOUND'] = "STRIPERESOURCENOTFOUND";
        OtrErrorEnum[OtrErrorEnum["STRIPETRANSFEREXISTS"] = 'STRIPE_TRANSFER_EXISTS'] = "STRIPETRANSFEREXISTS";
        OtrErrorEnum[OtrErrorEnum["STRIPETRANSFERNOTFOUND"] = 'STRIPE_TRANSFER_NOT_FOUND'] = "STRIPETRANSFERNOTFOUND";
        OtrErrorEnum[OtrErrorEnum["SUBSCRIPTIONNOTOWNEDBYUSER"] = 'SUBSCRIPTION_NOT_OWNED_BY_USER'] = "SUBSCRIPTIONNOTOWNEDBYUSER";
        OtrErrorEnum[OtrErrorEnum["TEMPLATENOTSUPPORTED"] = 'TEMPLATE_NOT_SUPPORTED'] = "TEMPLATENOTSUPPORTED";
        OtrErrorEnum[OtrErrorEnum["TRANSFERALREADYREVERSED"] = 'TRANSFER_ALREADY_REVERSED'] = "TRANSFERALREADYREVERSED";
        OtrErrorEnum[OtrErrorEnum["TRANSFERIDDOESNTMATCHCHARGE"] = 'TRANSFER_ID_DOESNT_MATCH_CHARGE'] = "TRANSFERIDDOESNTMATCHCHARGE";
        OtrErrorEnum[OtrErrorEnum["TRANSFERNOTSAFE"] = 'TRANSFER_NOT_SAFE'] = "TRANSFERNOTSAFE";
        OtrErrorEnum[OtrErrorEnum["TRANSFERREVERSALNOTALLOWED"] = 'TRANSFER_REVERSAL_NOT_ALLOWED'] = "TRANSFERREVERSALNOTALLOWED";
        OtrErrorEnum[OtrErrorEnum["TRANSFERTOSAMELAWFIRM"] = 'TRANSFER_TO_SAME_LAWFIRM'] = "TRANSFERTOSAMELAWFIRM";
        OtrErrorEnum[OtrErrorEnum["UNAUTHORIZED"] = 'UNAUTHORIZED'] = "UNAUTHORIZED";
        OtrErrorEnum[OtrErrorEnum["UNEXPECTEDCASESTATUS"] = 'UNEXPECTED_CASE_STATUS'] = "UNEXPECTEDCASESTATUS";
        OtrErrorEnum[OtrErrorEnum["UNEXPECTEDNULLINPUT"] = 'UNEXPECTED_NULL_INPUT'] = "UNEXPECTEDNULLINPUT";
        OtrErrorEnum[OtrErrorEnum["UNEXPECTEDNUMBEROFCHARGES"] = 'UNEXPECTED_NUMBER_OF_CHARGES'] = "UNEXPECTEDNUMBEROFCHARGES";
        OtrErrorEnum[OtrErrorEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        OtrErrorEnum[OtrErrorEnum["UNKNOWNCRMERROR"] = 'UNKNOWN_CRM_ERROR'] = "UNKNOWNCRMERROR";
        OtrErrorEnum[OtrErrorEnum["URLENTITYMISMATCH"] = 'URL_ENTITY_MISMATCH'] = "URLENTITYMISMATCH";
        OtrErrorEnum[OtrErrorEnum["USERALREADYHASSECONDARYACCOUNT"] = 'USER_ALREADY_HAS_SECONDARY_ACCOUNT'] = "USERALREADYHASSECONDARYACCOUNT";
        OtrErrorEnum[OtrErrorEnum["USERALREADYLOGGEDIN"] = 'USER_ALREADY_LOGGED_IN'] = "USERALREADYLOGGEDIN";
        OtrErrorEnum[OtrErrorEnum["USERALREADYMERGED"] = 'USER_ALREADY_MERGED'] = "USERALREADYMERGED";
        OtrErrorEnum[OtrErrorEnum["USERCANTUSEOWNCODE"] = 'USER_CANT_USE_OWN_CODE'] = "USERCANTUSEOWNCODE";
        OtrErrorEnum[OtrErrorEnum["USERDOESNOTMATCHCITATION"] = 'USER_DOES_NOT_MATCH_CITATION'] = "USERDOESNOTMATCHCITATION";
        OtrErrorEnum[OtrErrorEnum["USERISNOTTHEOWNER"] = 'USER_IS_NOT_THE_OWNER'] = "USERISNOTTHEOWNER";
        OtrErrorEnum[OtrErrorEnum["USERNOTFOUND"] = 'USER_NOT_FOUND'] = "USERNOTFOUND";
        OtrErrorEnum[OtrErrorEnum["USERNOTFOUNDINLAWFIRM"] = 'USER_NOT_FOUND_IN_LAWFIRM'] = "USERNOTFOUNDINLAWFIRM";
        OtrErrorEnum[OtrErrorEnum["VERIFICATIONLINKNOTVALID"] = 'VERIFICATION_LINK_NOT_VALID'] = "VERIFICATIONLINKNOTVALID";
    })(OtrErrorEnum = ValidateDirectMailResponse.OtrErrorEnum || (ValidateDirectMailResponse.OtrErrorEnum = {}));
})(ValidateDirectMailResponse = exports.ValidateDirectMailResponse || (exports.ValidateDirectMailResponse = {}));
