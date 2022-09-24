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

import * as models from './models';

export interface ValidateDirectMailResponse {
    "otrError"?: ValidateDirectMailResponse.OtrErrorEnum;
}

export namespace ValidateDirectMailResponse {
    export enum OtrErrorEnum {
        ACCESSDENIED = <any> 'ACCESS_DENIED',
        ACCOUNTDISABLED = <any> 'ACCOUNT_DISABLED',
        ARAGNOTCAPTURED = <any> 'ARAG_NOT_CAPTURED',
        AUTHENTICATIONCREDENTIALSNOTFOUND = <any> 'AUTHENTICATION_CREDENTIALS_NOT_FOUND',
        AUTHENTICATIONFAILED = <any> 'AUTHENTICATION_FAILED',
        AUTHENTICATIONSERVICEFAILURE = <any> 'AUTHENTICATION_SERVICE_FAILURE',
        AUTHORIZATIONSERVICEFAILURE = <any> 'AUTHORIZATION_SERVICE_FAILURE',
        AUTHORIZEDCHARGESONCASE = <any> 'AUTHORIZED_CHARGES_ON_CASE',
        BADCREDENTIALS = <any> 'BAD_CREDENTIALS',
        CANCELLATIONWINDOWCLOSED = <any> 'CANCELLATION_WINDOW_CLOSED',
        CASEALREADYEXISTS = <any> 'CASE_ALREADY_EXISTS',
        CASEALREADYPAID = <any> 'CASE_ALREADY_PAID',
        CASEALREADYRESOLVED = <any> 'CASE_ALREADY_RESOLVED',
        CASEIDCOLLISION = <any> 'CASE_ID_COLLISION',
        CASEISCANCELLED = <any> 'CASE_IS_CANCELLED',
        CASEMATCHFAILED = <any> 'CASE_MATCH_FAILED',
        CASENOTACCEPTEDBYLAWFIRM = <any> 'CASE_NOT_ACCEPTED_BY_LAWFIRM',
        CASENOTCONFIRMED = <any> 'CASE_NOT_CONFIRMED',
        CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMFEES = <any> 'CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_FEES',
        CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMPAYOUTS = <any> 'CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_PAYOUTS',
        CASEPAYMENTHASSTRIPECHARGE = <any> 'CASE_PAYMENT_HAS_STRIPE_CHARGE',
        CASESTATUSNOTALLOWED = <any> 'CASE_STATUS_NOT_ALLOWED',
        CASEUSERMISMATCH = <any> 'CASE_USER_MISMATCH',
        CCWILLEXPIREBEFOREPAYMENTPLAN = <any> 'CC_WILL_EXPIRE_BEFORE_PAYMENT_PLAN',
        CHARGEALREADYCAPTURED = <any> 'CHARGE_ALREADY_CAPTURED',
        CHARGEEXPIRED = <any> 'CHARGE_EXPIRED',
        CHARGENOTALLOWED = <any> 'CHARGE_NOT_ALLOWED',
        CHARGENOTCAPTURED = <any> 'CHARGE_NOT_CAPTURED',
        CHARGENOLONGERAUTHORIZED = <any> 'CHARGE_NO_LONGER_AUTHORIZED',
        CHARGEREFUNDED = <any> 'CHARGE_REFUNDED',
        CITATIONALREADYDELETED = <any> 'CITATION_ALREADY_DELETED',
        CITATIONDOESNOTMATCHUSER = <any> 'CITATION_DOES_NOT_MATCH_USER',
        CITATIONNOTOWNEDBYUSER = <any> 'CITATION_NOT_OWNED_BY_USER',
        CODEALREADYEXISTSFORDRIVER = <any> 'CODE_ALREADY_EXISTS_FOR_DRIVER',
        CODEBENEFITTYPENOTSUPPORTED = <any> 'CODE_BENEFIT_TYPE_NOT_SUPPORTED',
        CODEDOESNOTEXIST = <any> 'CODE_DOES_NOT_EXIST',
        CODEEXCEEDEDMAXUSAGE = <any> 'CODE_EXCEEDED_MAX_USAGE',
        CODEHASEXPIRED = <any> 'CODE_HAS_EXPIRED',
        CODEISALREADYTAKEN = <any> 'CODE_IS_ALREADY_TAKEN',
        CODEISNOTACTIVE = <any> 'CODE_IS_NOT_ACTIVE',
        CODENOTALLOWEDDUETOCREDIT = <any> 'CODE_NOT_ALLOWED_DUE_TO_CREDIT',
        CODENOTSUPPORTEDBYLAWFIRM = <any> 'CODE_NOT_SUPPORTED_BY_LAWFIRM',
        CODENOTYETAPPROVED = <any> 'CODE_NOT_YET_APPROVED',
        CODEREFERRERBENEFITSNOTAUTHORIZED = <any> 'CODE_REFERRER_BENEFITS_NOT_AUTHORIZED',
        COMMENTALREADYEXISTS = <any> 'COMMENT_ALREADY_EXISTS',
        COURTMISSINGADDRESS = <any> 'COURT_MISSING_ADDRESS',
        COURTNOTINSUPPORTEDREGION = <any> 'COURT_NOT_IN_SUPPORTED_REGION',
        COURTNOTSUPPORTEDBYLAWFIRM = <any> 'COURT_NOT_SUPPORTED_BY_LAWFIRM',
        CURRENTPASSWORDINCORRECT = <any> 'CURRENT_PASSWORD_INCORRECT',
        DATABASERECORDLOCKED = <any> 'DATABASE_RECORD_LOCKED',
        DATAACCESSERROR = <any> 'DATA_ACCESS_ERROR',
        DIRECTMAILRECONCILATIONIDNOTEXIST = <any> 'DIRECT_MAIL_RECONCILATION_ID_NOT_EXIST',
        DIRECTMAILSENTALREADY = <any> 'DIRECT_MAIL_SENT_ALREADY',
        DIRECTMAILTEMPLATEDUPLICATEDETECTED = <any> 'DIRECT_MAIL_TEMPLATE_DUPLICATE_DETECTED',
        DIRECTMAILTEMPLATENOTEXIST = <any> 'DIRECT_MAIL_TEMPLATE_NOT_EXIST',
        DRIPDEPENDENCYFAILURE = <any> 'DRIP_DEPENDENCY_FAILURE',
        DUPLICATECOURT = <any> 'DUPLICATE_COURT',
        DUPLICATEEMAIL = <any> 'DUPLICATE_EMAIL',
        DUPLICATEENTRY = <any> 'DUPLICATE_ENTRY',
        DUPLICATELANDINGPAGEURL = <any> 'DUPLICATE_LANDING_PAGE_URL',
        DUPLICATEMESSAGEATTEMPT = <any> 'DUPLICATE_MESSAGE_ATTEMPT',
        EMAILADDRESSALREADYSUBSCRIBED = <any> 'EMAIL_ADDRESS_ALREADY_SUBSCRIBED',
        EMAILADDRESSBLACKLISTED = <any> 'EMAIL_ADDRESS_BLACKLISTED',
        EMAILALREADYINUSE = <any> 'EMAIL_ALREADY_IN_USE',
        EMAILALREADYSENT = <any> 'EMAIL_ALREADY_SENT',
        EMAILNOTCONFIRMED = <any> 'EMAIL_NOT_CONFIRMED',
        EMAILNOTSENT = <any> 'EMAIL_NOT_SENT',
        EXPECTEDNULLINPUT = <any> 'EXPECTED_NULL_INPUT',
        EXPECTEDROLEMISSING = <any> 'EXPECTED_ROLE_MISSING',
        FAILEDTOREVERSETRANSFER = <any> 'FAILED_TO_REVERSE_TRANSFER',
        FRESHDESKTICKETNOTFOUND = <any> 'FRESHDESK_TICKET_NOT_FOUND',
        FRESHDESKUNEXPECTEDNUMBEROFRESULTS = <any> 'FRESHDESK_UNEXPECTED_NUMBER_OF_RESULTS',
        IMAGENOTCOMPRESSEDPROPERLY = <any> 'IMAGE_NOT_COMPRESSED_PROPERLY',
        INCORRECTDIMENSIONS = <any> 'INCORRECT_DIMENSIONS',
        INCORRECTENCODING = <any> 'INCORRECT_ENCODING',
        INELIGIBLESTATUSFORTRANSFER = <any> 'INELIGIBLE_STATUS_FOR_TRANSFER',
        INVALIDADDRESSID = <any> 'INVALID_ADDRESS_ID',
        INVALIDAMOUNT = <any> 'INVALID_AMOUNT',
        INVALIDAPITOKEN = <any> 'INVALID_API_TOKEN',
        INVALIDAPIUSAGE = <any> 'INVALID_API_USAGE',
        INVALIDCASEACTIONID = <any> 'INVALID_CASE_ACTION_ID',
        INVALIDCASEID = <any> 'INVALID_CASE_ID',
        INVALIDCASEPAYMENTID = <any> 'INVALID_CASE_PAYMENT_ID',
        INVALIDCITATIONID = <any> 'INVALID_CITATION_ID',
        INVALIDCOURTID = <any> 'INVALID_COURT_ID',
        INVALIDDATE = <any> 'INVALID_DATE',
        INVALIDDISPUTEID = <any> 'INVALID_DISPUTE_ID',
        INVALIDDOCUMENTID = <any> 'INVALID_DOCUMENT_ID',
        INVALIDEMAILADDRESS = <any> 'INVALID_EMAIL_ADDRESS',
        INVALIDEMAILTEMPLATE = <any> 'INVALID_EMAIL_TEMPLATE',
        INVALIDENDDATE = <any> 'INVALID_END_DATE',
        INVALIDENUMVALUE = <any> 'INVALID_ENUM_VALUE',
        INVALIDFEEPERCENTAGE = <any> 'INVALID_FEE_PERCENTAGE',
        INVALIDFIRSTNAME = <any> 'INVALID_FIRST_NAME',
        INVALIDINTERNETADDRESS = <any> 'INVALID_INTERNET_ADDRESS',
        INVALIDINVITATIONTOKEN = <any> 'INVALID_INVITATION_TOKEN',
        INVALIDINVOICELINEITEMID = <any> 'INVALID_INVOICE_LINE_ITEM_ID',
        INVALIDLASTNAME = <any> 'INVALID_LAST_NAME',
        INVALIDLAWFIRM = <any> 'INVALID_LAWFIRM',
        INVALIDLAWYERID = <any> 'INVALID_LAWYER_ID',
        INVALIDLINEITEM = <any> 'INVALID_LINE_ITEM',
        INVALIDMESSAGEID = <any> 'INVALID_MESSAGE_ID',
        INVALIDPAGINATIONTOKEN = <any> 'INVALID_PAGINATION_TOKEN',
        INVALIDPARAMETERVALUE = <any> 'INVALID_PARAMETER_VALUE',
        INVALIDPASSWORD = <any> 'INVALID_PASSWORD',
        INVALIDPASSWORDRESETTOKEN = <any> 'INVALID_PASSWORD_RESET_TOKEN',
        INVALIDPUSHTOKEN = <any> 'INVALID_PUSH_TOKEN',
        INVALIDRECIPIENTLIST = <any> 'INVALID_RECIPIENT_LIST',
        INVALIDREQUEST = <any> 'INVALID_REQUEST',
        INVALIDREQUESTBODY = <any> 'INVALID_REQUEST_BODY',
        INVALIDRESOLUTIONSTATUS = <any> 'INVALID_RESOLUTION_STATUS',
        INVALIDREVIEWCOPY = <any> 'INVALID_REVIEW_COPY',
        INVALIDROLETYPE = <any> 'INVALID_ROLE_TYPE',
        INVALIDSTATE = <any> 'INVALID_STATE',
        INVALIDSTRIPEACCOUNT = <any> 'INVALID_STRIPE_ACCOUNT',
        INVALIDSTRIPECHARGEID = <any> 'INVALID_STRIPE_CHARGE_ID',
        INVALIDSTRIPEREQUEST = <any> 'INVALID_STRIPE_REQUEST',
        INVALIDSTRIPETRANSACTIONID = <any> 'INVALID_STRIPE_TRANSACTION_ID',
        INVALIDSUBSCRIPTIONTYPE = <any> 'INVALID_SUBSCRIPTION_TYPE',
        INVALIDTASKID = <any> 'INVALID_TASK_ID',
        INVALIDTICKETID = <any> 'INVALID_TICKET_ID',
        INVALIDTICKETREVIEWID = <any> 'INVALID_TICKET_REVIEW_ID',
        INVALIDTRAFFICVIOLATION = <any> 'INVALID_TRAFFIC_VIOLATION',
        INVALIDUSERID = <any> 'INVALID_USER_ID',
        INVALIDUSERNAME = <any> 'INVALID_USER_NAME',
        INVITATIONALREADYSENT = <any> 'INVITATION_ALREADY_SENT',
        INVITATIONALREADYVERIFIED = <any> 'INVITATION_ALREADY_VERIFIED',
        INVITATIONCANCELLED = <any> 'INVITATION_CANCELLED',
        INVITATIONHASEXPIRED = <any> 'INVITATION_HAS_EXPIRED',
        INVITATIONRECIPIENTNOACCOUNT = <any> 'INVITATION_RECIPIENT_NO_ACCOUNT',
        IOERROR = <any> 'IO_ERROR',
        LAWFIRMCASECAPACITYREACHED = <any> 'LAWFIRM_CASE_CAPACITY_REACHED',
        LAWFIRMCASENOTACTIVE = <any> 'LAWFIRM_CASE_NOT_ACTIVE',
        LAWFIRMDOESNOTHANDLEACCIDENTS = <any> 'LAWFIRM_DOES_NOT_HANDLE_ACCIDENTS',
        LAWFIRMDOESNOTHANDLEPASTDUE = <any> 'LAWFIRM_DOES_NOT_HANDLE_PAST_DUE',
        LAWFIRMFEEHASSTRIPEREFERENCE = <any> 'LAWFIRM_FEE_HAS_STRIPE_REFERENCE',
        LAWFIRMMISSINGACCOUNTFEE = <any> 'LAWFIRM_MISSING_ACCOUNT_FEE',
        LAWFIRMNOTELIGIBLE = <any> 'LAWFIRM_NOT_ELIGIBLE',
        LAWFIRMONVACATIONMODE = <any> 'LAWFIRM_ON_VACATION_MODE',
        LAWFIRMPAYOUTHASSTRIPEREFERENCE = <any> 'LAWFIRM_PAYOUT_HAS_STRIPE_REFERENCE',
        LAWFIRMNEEDSADDRESS = <any> 'LAW_FIRM_NEEDS_ADDRESS',
        LINEITEMMISSINGRECIPIENT = <any> 'LINE_ITEM_MISSING_RECIPIENT',
        LINKSNOTALLOWED = <any> 'LINKS_NOT_ALLOWED',
        LOBADDRESSCREATIONFAILURE = <any> 'LOB_ADDRESS_CREATION_FAILURE',
        LOBADDRESSVALIDATIONFAILURE = <any> 'LOB_ADDRESS_VALIDATION_FAILURE',
        LOBCANCELCHECKDELIVERYFAILURE = <any> 'LOB_CANCEL_CHECK_DELIVERY_FAILURE',
        LOBCANCELMAILDELIVERYFAILURE = <any> 'LOB_CANCEL_MAIL_DELIVERY_FAILURE',
        LOBCHECKMAILDELIVERYFAILURE = <any> 'LOB_CHECK_MAIL_DELIVERY_FAILURE',
        LOBPOSTCARDCREATIONFAILURE = <any> 'LOB_POSTCARD_CREATION_FAILURE',
        MEDIATYPEINCORRECT = <any> 'MEDIA_TYPE_INCORRECT',
        MERGEROLLBACKNOTALLOWED = <any> 'MERGE_ROLLBACK_NOT_ALLOWED',
        MISSINGACTIONTYPE = <any> 'MISSING_ACTION_TYPE',
        MISSINGADJUSTEDFINEAMOUNT = <any> 'MISSING_ADJUSTED_FINE_AMOUNT',
        MISSINGCASE = <any> 'MISSING_CASE',
        MISSINGCITATIONID = <any> 'MISSING_CITATION_ID',
        MISSINGCOURTID = <any> 'MISSING_COURT_ID',
        MISSINGEMAILADDRESS = <any> 'MISSING_EMAIL_ADDRESS',
        MISSINGFEEDBACKCONTENT = <any> 'MISSING_FEEDBACK_CONTENT',
        MISSINGFIRSTNAME = <any> 'MISSING_FIRSTNAME',
        MISSINGIMAGEURL = <any> 'MISSING_IMAGE_URL',
        MISSINGLASTNAME = <any> 'MISSING_LASTNAME',
        MISSINGLAWFIRMID = <any> 'MISSING_LAWFIRM_ID',
        MISSINGLAWYERID = <any> 'MISSING_LAWYER_ID',
        MISSINGMEDIADATA = <any> 'MISSING_MEDIA_DATA',
        MISSINGNUMVIOLATIONS = <any> 'MISSING_NUM_VIOLATIONS',
        MISSINGPARAMETER = <any> 'MISSING_PARAMETER',
        MISSINGPASSWORD = <any> 'MISSING_PASSWORD',
        MISSINGRECIPIENTEMAIL = <any> 'MISSING_RECIPIENT_EMAIL',
        MISSINGREQUESTBODY = <any> 'MISSING_REQUEST_BODY',
        MISSINGRESOLUTIONSTATUS = <any> 'MISSING_RESOLUTION_STATUS',
        MISSINGSENDEREMAIL = <any> 'MISSING_SENDER_EMAIL',
        MISSINGSENDERPHONENUMBER = <any> 'MISSING_SENDER_PHONE_NUMBER',
        MISSINGSEOURL = <any> 'MISSING_SEO_URL',
        MISSINGSTRIPETOKEN = <any> 'MISSING_STRIPE_TOKEN',
        MISSINGSUBSCRIBER = <any> 'MISSING_SUBSCRIBER',
        MISSINGTICKETISSUEDATE = <any> 'MISSING_TICKET_ISSUE_DATE',
        MISSINGUSERNAME = <any> 'MISSING_USER_NAME',
        MULTIPLELAWFIRMFEES = <any> 'MULTIPLE_LAWFIRM_FEES',
        MULTIPLELAWFIRMPAYOUTS = <any> 'MULTIPLE_LAWFIRM_PAYOUTS',
        MULTIPLEREFUNDSONCHARGE = <any> 'MULTIPLE_REFUNDS_ON_CHARGE',
        MULTIPLESTRIPECUSTOMERACCOUNTSFOUND = <any> 'MULTIPLE_STRIPE_CUSTOMER_ACCOUNTS_FOUND',
        MULTIPLESTRIPETRANSFERSFOUND = <any> 'MULTIPLE_STRIPE_TRANSFERS_FOUND',
        MUSTBEPOSITIVE = <any> 'MUST_BE_POSITIVE',
        NOTIFICATIONERROR = <any> 'NOTIFICATION_ERROR',
        NOTIFICATIONINCORRECTROLE = <any> 'NOTIFICATION_INCORRECT_ROLE',
        NOTIFICATIONTOOLONG = <any> 'NOTIFICATION_TOO_LONG',
        NOTIFICATIONTOSELF = <any> 'NOTIFICATION_TO_SELF',
        NOTAUTHENTICATED = <any> 'NOT_AUTHENTICATED',
        NOACCOUNTWITHEMAIL = <any> 'NO_ACCOUNT_WITH_EMAIL',
        NOCASEOWNER = <any> 'NO_CASE_OWNER',
        NOCHARGESONCASE = <any> 'NO_CHARGES_ON_CASE',
        NOINSURANCE = <any> 'NO_INSURANCE',
        NOLAWFIRMAVAILABLE = <any> 'NO_LAWFIRM_AVAILABLE',
        NOSTRIPEACCOUNT = <any> 'NO_STRIPE_ACCOUNT',
        OWNERCASEMESSAGEMISMATCH = <any> 'OWNER_CASE_MESSAGE_MISMATCH',
        PAYMENTPLANSDENIED = <any> 'PAYMENT_PLANS_DENIED',
        PAYMENTPLANLEGALFEEHASCENTS = <any> 'PAYMENT_PLAN_LEGAL_FEE_HAS_CENTS',
        PAYMENTPLANNOTSUPPORTEDWITHPREPAIDCARD = <any> 'PAYMENT_PLAN_NOT_SUPPORTED_WITH_PREPAID_CARD',
        PDFPASSWORDPROTECTED = <any> 'PDF_PASSWORD_PROTECTED',
        PLAIDERROR = <any> 'PLAID_ERROR',
        QBOBILLCREATIONFAILURE = <any> 'QBO_BILL_CREATION_FAILURE',
        QBOVENDORCREATIONFAILURE = <any> 'QBO_VENDOR_CREATION_FAILURE',
        REFERRALSNOTALLOWEDTOBEREDEEMED = <any> 'REFERRALS_NOT_ALLOWED_TO_BE_REDEEMED',
        REFUNDNOTALLOWED = <any> 'REFUND_NOT_ALLOWED',
        REFUNDNOTELIGIBLE = <any> 'REFUND_NOT_ELIGIBLE',
        REFUNDNOTELIGIBLECRIMINAL = <any> 'REFUND_NOT_ELIGIBLE_CRIMINAL',
        REQUESTNOTWELLFORMATTED = <any> 'REQUEST_NOT_WELL_FORMATTED',
        RESETTOKENEXPIRED = <any> 'RESET_TOKEN_EXPIRED',
        RESOURCENOTFOUND = <any> 'RESOURCE_NOT_FOUND',
        REVIEWALREADYEXISTS = <any> 'REVIEW_ALREADY_EXISTS',
        ROLENOTSUPPORTED = <any> 'ROLE_NOT_SUPPORTED',
        S3CLIENTFAILED = <any> 'S3_CLIENT_FAILED',
        S3SERVERFAILED = <any> 'S3_SERVER_FAILED',
        SAMEUSERCANNOTBEMERGED = <any> 'SAME_USER_CANNOT_BE_MERGED',
        SEOURLALREADYEXISTS = <any> 'SEO_URL_ALREADY_EXISTS',
        SIMILARCOURT = <any> 'SIMILAR_COURT',
        SOCIALPROFILEMISSINGEMAIL = <any> 'SOCIAL_PROFILE_MISSING_EMAIL',
        STATENOTSUPPORTED = <any> 'STATE_NOT_SUPPORTED',
        STRIPEAPICONNECTIONEXCEPTION = <any> 'STRIPE_API_CONNECTION_EXCEPTION',
        STRIPEAPIEXCEPTION = <any> 'STRIPE_API_EXCEPTION',
        STRIPEAPPLICATIONFEEALREADYREFUNDED = <any> 'STRIPE_APPLICATION_FEE_ALREADY_REFUNDED',
        STRIPEAPPLICATIONFEENOTFOUND = <any> 'STRIPE_APPLICATION_FEE_NOT_FOUND',
        STRIPEAUTHENTICATIONEXCEPTION = <any> 'STRIPE_AUTHENTICATION_EXCEPTION',
        STRIPECARDEXCEPTION = <any> 'STRIPE_CARD_EXCEPTION',
        STRIPECONNECTACCOUNTNOTFOUND = <any> 'STRIPE_CONNECT_ACCOUNT_NOT_FOUND',
        STRIPEERROR = <any> 'STRIPE_ERROR',
        STRIPEFAILEDCHARGE = <any> 'STRIPE_FAILED_CHARGE',
        STRIPEOAUTHCONNECTFAILED = <any> 'STRIPE_OAUTH_CONNECT_FAILED',
        STRIPEOBJECTMISSINGMETADATA = <any> 'STRIPE_OBJECT_MISSING_METADATA',
        STRIPERESOURCENOTFOUND = <any> 'STRIPE_RESOURCE_NOT_FOUND',
        STRIPETRANSFEREXISTS = <any> 'STRIPE_TRANSFER_EXISTS',
        STRIPETRANSFERNOTFOUND = <any> 'STRIPE_TRANSFER_NOT_FOUND',
        SUBSCRIPTIONNOTOWNEDBYUSER = <any> 'SUBSCRIPTION_NOT_OWNED_BY_USER',
        TEMPLATENOTSUPPORTED = <any> 'TEMPLATE_NOT_SUPPORTED',
        TRANSFERALREADYREVERSED = <any> 'TRANSFER_ALREADY_REVERSED',
        TRANSFERIDDOESNTMATCHCHARGE = <any> 'TRANSFER_ID_DOESNT_MATCH_CHARGE',
        TRANSFERNOTSAFE = <any> 'TRANSFER_NOT_SAFE',
        TRANSFERREVERSALNOTALLOWED = <any> 'TRANSFER_REVERSAL_NOT_ALLOWED',
        TRANSFERTOSAMELAWFIRM = <any> 'TRANSFER_TO_SAME_LAWFIRM',
        UNAUTHORIZED = <any> 'UNAUTHORIZED',
        UNEXPECTEDCASESTATUS = <any> 'UNEXPECTED_CASE_STATUS',
        UNEXPECTEDNULLINPUT = <any> 'UNEXPECTED_NULL_INPUT',
        UNEXPECTEDNUMBEROFCHARGES = <any> 'UNEXPECTED_NUMBER_OF_CHARGES',
        UNKNOWN = <any> 'UNKNOWN',
        URLENTITYMISMATCH = <any> 'URL_ENTITY_MISMATCH',
        USERALREADYHASSECONDARYACCOUNT = <any> 'USER_ALREADY_HAS_SECONDARY_ACCOUNT',
        USERALREADYLOGGEDIN = <any> 'USER_ALREADY_LOGGED_IN',
        USERALREADYMERGED = <any> 'USER_ALREADY_MERGED',
        USERCANTUSEOWNCODE = <any> 'USER_CANT_USE_OWN_CODE',
        USERDOESNOTMATCHCITATION = <any> 'USER_DOES_NOT_MATCH_CITATION',
        USERISNOTTHEOWNER = <any> 'USER_IS_NOT_THE_OWNER',
        USERNOTFOUND = <any> 'USER_NOT_FOUND',
        VERIFICATIONLINKNOTVALID = <any> 'VERIFICATION_LINK_NOT_VALID'
    }
}
