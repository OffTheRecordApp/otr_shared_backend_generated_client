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


export interface ValidateDirectMailResponse { 
    otrError?: ValidateDirectMailResponse.OtrErrorEnum;
}
export namespace ValidateDirectMailResponse {
    export type OtrErrorEnum = 'ACCESS_DENIED' | 'ACCOUNT_DISABLED' | 'ARAG_NOT_CAPTURED' | 'AUTHENTICATION_CREDENTIALS_NOT_FOUND' | 'AUTHENTICATION_FAILED' | 'AUTHENTICATION_SERVICE_FAILURE' | 'AUTHORIZATION_SERVICE_FAILURE' | 'AUTHORIZED_CHARGES_ON_CASE' | 'BAD_CREDENTIALS' | 'BLOCKED_FROM_BOOKING' | 'CANCELLATION_WINDOW_CLOSED' | 'CASE_ALREADY_EXISTS' | 'CASE_ALREADY_PAID' | 'CASE_ALREADY_RESOLVED' | 'CASE_ID_COLLISION' | 'CASE_IS_CANCELLED' | 'CASE_MATCH_FAILED' | 'CASE_MISSING_LAWFIRM' | 'CASE_NOT_ACCEPTED_BY_LAWFIRM' | 'CASE_NOT_CONFIRMED' | 'CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_FEES' | 'CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_PAYOUTS' | 'CASE_PAYMENT_HAS_STRIPE_CHARGE' | 'CASE_STATUS_NOT_ALLOWED' | 'CASE_USER_MISMATCH' | 'CC_WILL_EXPIRE_BEFORE_PAYMENT_PLAN' | 'CHARGE_ALREADY_CAPTURED' | 'CHARGE_EXPIRED' | 'CHARGE_NOT_ALLOWED' | 'CHARGE_NOT_CAPTURED' | 'CHARGE_NO_LONGER_AUTHORIZED' | 'CHARGE_REFUNDED' | 'CITATION_ALREADY_DELETED' | 'CITATION_DOES_NOT_MATCH_USER' | 'CITATION_NOT_OWNED_BY_USER' | 'CODE_ALREADY_EXISTS_FOR_DRIVER' | 'CODE_BENEFIT_TYPE_NOT_SUPPORTED' | 'CODE_DOES_NOT_EXIST' | 'CODE_EXCEEDED_MAX_USAGE' | 'CODE_HAS_EXPIRED' | 'CODE_IS_ALREADY_TAKEN' | 'CODE_IS_NOT_ACTIVE' | 'CODE_NOT_ALLOWED_DUE_TO_CREDIT' | 'CODE_NOT_SUPPORTED_BY_LAWFIRM' | 'CODE_NOT_VALID_FOR_LEGAL_SERVICE' | 'CODE_NOT_YET_APPROVED' | 'CODE_REFERRER_BENEFITS_NOT_AUTHORIZED' | 'COMMENT_ALREADY_EXISTS' | 'COURT_MISSING_ADDRESS' | 'COURT_NOT_IN_SUPPORTED_REGION' | 'COURT_NOT_SUPPORTED_BY_LAWFIRM' | 'CURRENT_PASSWORD_INCORRECT' | 'DATABASE_RECORD_LOCKED' | 'DATA_ACCESS_ERROR' | 'DIRECT_MAIL_RECONCILATION_ID_NOT_EXIST' | 'DIRECT_MAIL_SENT_ALREADY' | 'DIRECT_MAIL_TEMPLATE_DUPLICATE_DETECTED' | 'DIRECT_MAIL_TEMPLATE_NOT_EXIST' | 'DRIP_DEPENDENCY_FAILURE' | 'DUPLICATE_COURT' | 'DUPLICATE_EMAIL' | 'DUPLICATE_ENTRY' | 'DUPLICATE_LANDING_PAGE_URL' | 'DUPLICATE_MESSAGE_ATTEMPT' | 'EMAIL_ADDRESS_ALREADY_SUBSCRIBED' | 'EMAIL_ADDRESS_BLACKLISTED' | 'EMAIL_ALREADY_EXISTS' | 'EMAIL_ALREADY_IN_USE' | 'EMAIL_ALREADY_SENT' | 'EMAIL_NOT_CONFIRMED' | 'EMAIL_NOT_SENT' | 'EXPECTED_NULL_INPUT' | 'EXPECTED_ROLE_MISSING' | 'FAILED_TO_REVERSE_TRANSFER' | 'FRESHDESK_TICKET_NOT_FOUND' | 'FRESHDESK_UNEXPECTED_NUMBER_OF_RESULTS' | 'GHOST_USER_NOT_ALLOWED' | 'HTTP_REQUEST_ERROR' | 'IMAGE_NOT_COMPRESSED_PROPERLY' | 'INACTIVE_STOREFRONT' | 'INCORRECT_DIMENSIONS' | 'INCORRECT_ENCODING' | 'INELIGIBLE_STATUS_FOR_TRANSFER' | 'INVALID_ADDRESS_ID' | 'INVALID_AMOUNT' | 'INVALID_API_TOKEN' | 'INVALID_API_USAGE' | 'INVALID_CASE_ACTION_ID' | 'INVALID_CASE_COUNTER_ID' | 'INVALID_CASE_COUNTER_STATUS' | 'INVALID_CASE_ID' | 'INVALID_CASE_PAYMENT_ID' | 'INVALID_CASE_STATUS_FOR_CASE_RESOLVE' | 'INVALID_CITATION_ID' | 'INVALID_CODE' | 'INVALID_COURT_ID' | 'INVALID_DATE' | 'INVALID_DECLINE_CATEGORY_ID' | 'INVALID_DECLINE_REASON_TYPE_ID' | 'INVALID_DISPUTE_ID' | 'INVALID_DOCUMENT_ID' | 'INVALID_EMAIL_ADDRESS' | 'INVALID_EMAIL_TEMPLATE' | 'INVALID_END_DATE' | 'INVALID_ENUM_VALUE' | 'INVALID_FEE_PERCENTAGE' | 'INVALID_FIRST_NAME' | 'INVALID_INTERNET_ADDRESS' | 'INVALID_INVITATION_TOKEN' | 'INVALID_INVOICE_LINE_ITEM_ID' | 'INVALID_LAST_NAME' | 'INVALID_LAWFIRM' | 'INVALID_LAWYER_ID' | 'INVALID_LEGAL_SERVICE' | 'INVALID_LINE_ITEM' | 'INVALID_MESSAGE_ID' | 'INVALID_PAGINATION_TOKEN' | 'INVALID_PARAMETER_VALUE' | 'INVALID_PASSWORD' | 'INVALID_PASSWORD_RESET_TOKEN' | 'INVALID_PUSH_TOKEN' | 'INVALID_RECIPIENT_LIST' | 'INVALID_REQUEST' | 'INVALID_REQUEST_BODY' | 'INVALID_RESOLUTION_STATUS' | 'INVALID_REVIEW_COPY' | 'INVALID_ROLE_TYPE' | 'INVALID_STATE' | 'INVALID_STRIPE_ACCOUNT' | 'INVALID_STRIPE_CHARGE_ID' | 'INVALID_STRIPE_REQUEST' | 'INVALID_STRIPE_TRANSACTION_ID' | 'INVALID_SUBSCRIPTION_TYPE' | 'INVALID_TASK_ID' | 'INVALID_TICKET_ID' | 'INVALID_TICKET_REVIEW_ID' | 'INVALID_TRAFFIC_VIOLATION' | 'INVALID_USER_ID' | 'INVALID_USER_NAME' | 'INVITATION_ALREADY_SENT' | 'INVITATION_ALREADY_VERIFIED' | 'INVITATION_CANCELLED' | 'INVITATION_HAS_EXPIRED' | 'INVITATION_RECIPIENT_NO_ACCOUNT' | 'IO_ERROR' | 'LAMBDA_URL_INVOKE_FAILURE' | 'LAWFIRM_CASE_CAPACITY_REACHED' | 'LAWFIRM_CASE_NOT_ACTIVE' | 'LAWFIRM_DOES_NOT_HANDLE_ACCIDENTS' | 'LAWFIRM_DOES_NOT_HANDLE_PAST_DUE' | 'LAWFIRM_FEE_HAS_STRIPE_REFERENCE' | 'LAWFIRM_MISSING_ACCOUNT_FEE' | 'LAWFIRM_NOT_ELIGIBLE' | 'LAWFIRM_ON_VACATION_MODE' | 'LAWFIRM_PAYOUT_HAS_STRIPE_REFERENCE' | 'LAW_FIRM_NEEDS_ADDRESS' | 'LEGAL_SERVICE_NOT_SUPPORTED' | 'LEGAL_SERVICE_QUOTE_EXPIRED' | 'LINE_ITEM_MISSING_RECIPIENT' | 'LINKS_NOT_ALLOWED' | 'LOB_ADDRESS_CREATION_FAILURE' | 'LOB_ADDRESS_VALIDATION_FAILURE' | 'LOB_CANCEL_CHECK_DELIVERY_FAILURE' | 'LOB_CANCEL_MAIL_DELIVERY_FAILURE' | 'LOB_CHECK_MAIL_DELIVERY_FAILURE' | 'LOB_POSTCARD_CREATION_FAILURE' | 'MEDIA_TYPE_INCORRECT' | 'MERGE_ROLLBACK_NOT_ALLOWED' | 'MISSING_ACTION_TYPE' | 'MISSING_ADJUSTED_FINE_AMOUNT' | 'MISSING_BIRTHDAY' | 'MISSING_CASE' | 'MISSING_CITATION_ID' | 'MISSING_COURT_FEE' | 'MISSING_COURT_ID' | 'MISSING_DECLINE_CATEGORY' | 'MISSING_DECLINE_REASON_TYPE' | 'MISSING_EMAIL_ADDRESS' | 'MISSING_FEEDBACK_CONTENT' | 'MISSING_FIRSTNAME' | 'MISSING_IMAGE_URL' | 'MISSING_LASTNAME' | 'MISSING_LAWFIRM_ID' | 'MISSING_LAWYER_ID' | 'MISSING_MEDIA_DATA' | 'MISSING_NUM_VIOLATIONS' | 'MISSING_PARAMETER' | 'MISSING_PASSWORD' | 'MISSING_RECIPIENT_EMAIL' | 'MISSING_REQUEST_BODY' | 'MISSING_RESOLUTION_STATUS' | 'MISSING_SENDER_EMAIL' | 'MISSING_SENDER_PHONE_NUMBER' | 'MISSING_SEO_URL' | 'MISSING_STRIPE_TOKEN' | 'MISSING_SUBSCRIBER' | 'MISSING_TICKET_ISSUE_DATE' | 'MISSING_USER_NAME' | 'MULTIPLE_LAWFIRM_FEES' | 'MULTIPLE_LAWFIRM_PAYOUTS' | 'MULTIPLE_REFUNDS_ON_CHARGE' | 'MULTIPLE_STRIPE_CUSTOMER_ACCOUNTS_FOUND' | 'MULTIPLE_STRIPE_TRANSFERS_FOUND' | 'MUST_BE_POSITIVE' | 'NOTIFICATION_ERROR' | 'NOTIFICATION_INCORRECT_ROLE' | 'NOTIFICATION_TOO_LONG' | 'NOTIFICATION_TO_SELF' | 'NOT_AUTHENTICATED' | 'NO_ACCOUNT_WITH_EMAIL' | 'NO_CASE_OWNER' | 'NO_CHARGES_ON_CASE' | 'NO_INSURANCE' | 'NO_LAWFIRM_AVAILABLE' | 'NO_LEGAL_SERVICES_IN_REGION' | 'NO_STRIPE_ACCOUNT' | 'OWNER_CASE_MESSAGE_MISMATCH' | 'PAYMENT_PLANS_DENIED' | 'PAYMENT_PLAN_LEGAL_FEE_HAS_CENTS' | 'PAYMENT_PLAN_NOT_SUPPORTED_WITH_PREPAID_CARD' | 'PDF_PASSWORD_PROTECTED' | 'PLAID_ERROR' | 'QBO_BILL_CREATION_FAILURE' | 'QBO_VENDOR_CREATION_FAILURE' | 'RATE_THROTTLE_LIMIT_EXCEEDED' | 'REFERRALS_NOT_ALLOWED_TO_BE_REDEEMED' | 'REFUND_NOT_ALLOWED' | 'REFUND_NOT_ELIGIBLE' | 'REFUND_NOT_ELIGIBLE_CRIMINAL' | 'REQUEST_NOT_WELL_FORMATTED' | 'RESET_TOKEN_EXPIRED' | 'RESOURCE_NOT_FOUND' | 'REVIEW_ALREADY_EXISTS' | 'REVIEW_NOT_FOUND' | 'ROLE_NOT_SUPPORTED' | 'S3_CLIENT_FAILED' | 'S3_SERVER_FAILED' | 'SAME_USER_CANNOT_BE_MERGED' | 'SEO_URL_ALREADY_EXISTS' | 'SERVICE_RATE_NOT_FOUND' | 'SIMILAR_COURT' | 'SOCIAL_PROFILE_MISSING_EMAIL' | 'SSO_SERVICE_PROVIDER_ID_NOT_FOUND' | 'STATE_NOT_SUPPORTED' | 'STRIPE_API_CONNECTION_EXCEPTION' | 'STRIPE_API_EXCEPTION' | 'STRIPE_APPLICATION_FEE_ALREADY_REFUNDED' | 'STRIPE_APPLICATION_FEE_NOT_FOUND' | 'STRIPE_AUTHENTICATION_EXCEPTION' | 'STRIPE_CARD_EXCEPTION' | 'STRIPE_CONNECT_ACCOUNT_NOT_FOUND' | 'STRIPE_ERROR' | 'STRIPE_FAILED_CHARGE' | 'STRIPE_OAUTH_CONNECT_FAILED' | 'STRIPE_OBJECT_MISSING_METADATA' | 'STRIPE_RESOURCE_NOT_FOUND' | 'STRIPE_TRANSFER_EXISTS' | 'STRIPE_TRANSFER_NOT_FOUND' | 'SUBSCRIPTION_NOT_OWNED_BY_USER' | 'SUBSCRIPTION_TEENAGER_AGE_OUT' | 'TEMPLATE_NOT_SUPPORTED' | 'TRANSFER_ALREADY_REVERSED' | 'TRANSFER_ID_DOESNT_MATCH_CHARGE' | 'TRANSFER_NOT_SAFE' | 'TRANSFER_REVERSAL_NOT_ALLOWED' | 'TRANSFER_TO_SAME_LAWFIRM' | 'UNABLE_TO_VERIFY_REQUEST' | 'UNAUTHORIZED' | 'UNEXPECTED_CASE_STATUS' | 'UNEXPECTED_NULL_INPUT' | 'UNEXPECTED_NUMBER_OF_CHARGES' | 'UNKNOWN' | 'UNKNOWN_CRM_ERROR' | 'URL_ENTITY_MISMATCH' | 'USER_ALREADY_HAS_SECONDARY_ACCOUNT' | 'USER_ALREADY_LOGGED_IN' | 'USER_ALREADY_MERGED' | 'USER_CANT_USE_OWN_CODE' | 'USER_DOES_NOT_MATCH_CITATION' | 'USER_IS_NOT_THE_OWNER' | 'USER_NOT_FOUND' | 'USER_NOT_FOUND_IN_LAWFIRM' | 'VERIFICATION_CODE_NOT_VALID' | 'VERIFICATION_LINK_NOT_VALID';
    export const OtrErrorEnum = {
        AccessDenied: 'ACCESS_DENIED' as OtrErrorEnum,
        AccountDisabled: 'ACCOUNT_DISABLED' as OtrErrorEnum,
        AragNotCaptured: 'ARAG_NOT_CAPTURED' as OtrErrorEnum,
        AuthenticationCredentialsNotFound: 'AUTHENTICATION_CREDENTIALS_NOT_FOUND' as OtrErrorEnum,
        AuthenticationFailed: 'AUTHENTICATION_FAILED' as OtrErrorEnum,
        AuthenticationServiceFailure: 'AUTHENTICATION_SERVICE_FAILURE' as OtrErrorEnum,
        AuthorizationServiceFailure: 'AUTHORIZATION_SERVICE_FAILURE' as OtrErrorEnum,
        AuthorizedChargesOnCase: 'AUTHORIZED_CHARGES_ON_CASE' as OtrErrorEnum,
        BadCredentials: 'BAD_CREDENTIALS' as OtrErrorEnum,
        BlockedFromBooking: 'BLOCKED_FROM_BOOKING' as OtrErrorEnum,
        CancellationWindowClosed: 'CANCELLATION_WINDOW_CLOSED' as OtrErrorEnum,
        CaseAlreadyExists: 'CASE_ALREADY_EXISTS' as OtrErrorEnum,
        CaseAlreadyPaid: 'CASE_ALREADY_PAID' as OtrErrorEnum,
        CaseAlreadyResolved: 'CASE_ALREADY_RESOLVED' as OtrErrorEnum,
        CaseIdCollision: 'CASE_ID_COLLISION' as OtrErrorEnum,
        CaseIsCancelled: 'CASE_IS_CANCELLED' as OtrErrorEnum,
        CaseMatchFailed: 'CASE_MATCH_FAILED' as OtrErrorEnum,
        CaseMissingLawfirm: 'CASE_MISSING_LAWFIRM' as OtrErrorEnum,
        CaseNotAcceptedByLawfirm: 'CASE_NOT_ACCEPTED_BY_LAWFIRM' as OtrErrorEnum,
        CaseNotConfirmed: 'CASE_NOT_CONFIRMED' as OtrErrorEnum,
        CasePaymentAssociatedWithMultipleLawfirmFees: 'CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_FEES' as OtrErrorEnum,
        CasePaymentAssociatedWithMultipleLawfirmPayouts: 'CASE_PAYMENT_ASSOCIATED_WITH_MULTIPLE_LAWFIRM_PAYOUTS' as OtrErrorEnum,
        CasePaymentHasStripeCharge: 'CASE_PAYMENT_HAS_STRIPE_CHARGE' as OtrErrorEnum,
        CaseStatusNotAllowed: 'CASE_STATUS_NOT_ALLOWED' as OtrErrorEnum,
        CaseUserMismatch: 'CASE_USER_MISMATCH' as OtrErrorEnum,
        CcWillExpireBeforePaymentPlan: 'CC_WILL_EXPIRE_BEFORE_PAYMENT_PLAN' as OtrErrorEnum,
        ChargeAlreadyCaptured: 'CHARGE_ALREADY_CAPTURED' as OtrErrorEnum,
        ChargeExpired: 'CHARGE_EXPIRED' as OtrErrorEnum,
        ChargeNotAllowed: 'CHARGE_NOT_ALLOWED' as OtrErrorEnum,
        ChargeNotCaptured: 'CHARGE_NOT_CAPTURED' as OtrErrorEnum,
        ChargeNoLongerAuthorized: 'CHARGE_NO_LONGER_AUTHORIZED' as OtrErrorEnum,
        ChargeRefunded: 'CHARGE_REFUNDED' as OtrErrorEnum,
        CitationAlreadyDeleted: 'CITATION_ALREADY_DELETED' as OtrErrorEnum,
        CitationDoesNotMatchUser: 'CITATION_DOES_NOT_MATCH_USER' as OtrErrorEnum,
        CitationNotOwnedByUser: 'CITATION_NOT_OWNED_BY_USER' as OtrErrorEnum,
        CodeAlreadyExistsForDriver: 'CODE_ALREADY_EXISTS_FOR_DRIVER' as OtrErrorEnum,
        CodeBenefitTypeNotSupported: 'CODE_BENEFIT_TYPE_NOT_SUPPORTED' as OtrErrorEnum,
        CodeDoesNotExist: 'CODE_DOES_NOT_EXIST' as OtrErrorEnum,
        CodeExceededMaxUsage: 'CODE_EXCEEDED_MAX_USAGE' as OtrErrorEnum,
        CodeHasExpired: 'CODE_HAS_EXPIRED' as OtrErrorEnum,
        CodeIsAlreadyTaken: 'CODE_IS_ALREADY_TAKEN' as OtrErrorEnum,
        CodeIsNotActive: 'CODE_IS_NOT_ACTIVE' as OtrErrorEnum,
        CodeNotAllowedDueToCredit: 'CODE_NOT_ALLOWED_DUE_TO_CREDIT' as OtrErrorEnum,
        CodeNotSupportedByLawfirm: 'CODE_NOT_SUPPORTED_BY_LAWFIRM' as OtrErrorEnum,
        CodeNotValidForLegalService: 'CODE_NOT_VALID_FOR_LEGAL_SERVICE' as OtrErrorEnum,
        CodeNotYetApproved: 'CODE_NOT_YET_APPROVED' as OtrErrorEnum,
        CodeReferrerBenefitsNotAuthorized: 'CODE_REFERRER_BENEFITS_NOT_AUTHORIZED' as OtrErrorEnum,
        CommentAlreadyExists: 'COMMENT_ALREADY_EXISTS' as OtrErrorEnum,
        CourtMissingAddress: 'COURT_MISSING_ADDRESS' as OtrErrorEnum,
        CourtNotInSupportedRegion: 'COURT_NOT_IN_SUPPORTED_REGION' as OtrErrorEnum,
        CourtNotSupportedByLawfirm: 'COURT_NOT_SUPPORTED_BY_LAWFIRM' as OtrErrorEnum,
        CurrentPasswordIncorrect: 'CURRENT_PASSWORD_INCORRECT' as OtrErrorEnum,
        DatabaseRecordLocked: 'DATABASE_RECORD_LOCKED' as OtrErrorEnum,
        DataAccessError: 'DATA_ACCESS_ERROR' as OtrErrorEnum,
        DirectMailReconcilationIdNotExist: 'DIRECT_MAIL_RECONCILATION_ID_NOT_EXIST' as OtrErrorEnum,
        DirectMailSentAlready: 'DIRECT_MAIL_SENT_ALREADY' as OtrErrorEnum,
        DirectMailTemplateDuplicateDetected: 'DIRECT_MAIL_TEMPLATE_DUPLICATE_DETECTED' as OtrErrorEnum,
        DirectMailTemplateNotExist: 'DIRECT_MAIL_TEMPLATE_NOT_EXIST' as OtrErrorEnum,
        DripDependencyFailure: 'DRIP_DEPENDENCY_FAILURE' as OtrErrorEnum,
        DuplicateCourt: 'DUPLICATE_COURT' as OtrErrorEnum,
        DuplicateEmail: 'DUPLICATE_EMAIL' as OtrErrorEnum,
        DuplicateEntry: 'DUPLICATE_ENTRY' as OtrErrorEnum,
        DuplicateLandingPageUrl: 'DUPLICATE_LANDING_PAGE_URL' as OtrErrorEnum,
        DuplicateMessageAttempt: 'DUPLICATE_MESSAGE_ATTEMPT' as OtrErrorEnum,
        EmailAddressAlreadySubscribed: 'EMAIL_ADDRESS_ALREADY_SUBSCRIBED' as OtrErrorEnum,
        EmailAddressBlacklisted: 'EMAIL_ADDRESS_BLACKLISTED' as OtrErrorEnum,
        EmailAlreadyExists: 'EMAIL_ALREADY_EXISTS' as OtrErrorEnum,
        EmailAlreadyInUse: 'EMAIL_ALREADY_IN_USE' as OtrErrorEnum,
        EmailAlreadySent: 'EMAIL_ALREADY_SENT' as OtrErrorEnum,
        EmailNotConfirmed: 'EMAIL_NOT_CONFIRMED' as OtrErrorEnum,
        EmailNotSent: 'EMAIL_NOT_SENT' as OtrErrorEnum,
        ExpectedNullInput: 'EXPECTED_NULL_INPUT' as OtrErrorEnum,
        ExpectedRoleMissing: 'EXPECTED_ROLE_MISSING' as OtrErrorEnum,
        FailedToReverseTransfer: 'FAILED_TO_REVERSE_TRANSFER' as OtrErrorEnum,
        FreshdeskTicketNotFound: 'FRESHDESK_TICKET_NOT_FOUND' as OtrErrorEnum,
        FreshdeskUnexpectedNumberOfResults: 'FRESHDESK_UNEXPECTED_NUMBER_OF_RESULTS' as OtrErrorEnum,
        GhostUserNotAllowed: 'GHOST_USER_NOT_ALLOWED' as OtrErrorEnum,
        HttpRequestError: 'HTTP_REQUEST_ERROR' as OtrErrorEnum,
        ImageNotCompressedProperly: 'IMAGE_NOT_COMPRESSED_PROPERLY' as OtrErrorEnum,
        InactiveStorefront: 'INACTIVE_STOREFRONT' as OtrErrorEnum,
        IncorrectDimensions: 'INCORRECT_DIMENSIONS' as OtrErrorEnum,
        IncorrectEncoding: 'INCORRECT_ENCODING' as OtrErrorEnum,
        IneligibleStatusForTransfer: 'INELIGIBLE_STATUS_FOR_TRANSFER' as OtrErrorEnum,
        InvalidAddressId: 'INVALID_ADDRESS_ID' as OtrErrorEnum,
        InvalidAmount: 'INVALID_AMOUNT' as OtrErrorEnum,
        InvalidApiToken: 'INVALID_API_TOKEN' as OtrErrorEnum,
        InvalidApiUsage: 'INVALID_API_USAGE' as OtrErrorEnum,
        InvalidCaseActionId: 'INVALID_CASE_ACTION_ID' as OtrErrorEnum,
        InvalidCaseCounterId: 'INVALID_CASE_COUNTER_ID' as OtrErrorEnum,
        InvalidCaseCounterStatus: 'INVALID_CASE_COUNTER_STATUS' as OtrErrorEnum,
        InvalidCaseId: 'INVALID_CASE_ID' as OtrErrorEnum,
        InvalidCasePaymentId: 'INVALID_CASE_PAYMENT_ID' as OtrErrorEnum,
        InvalidCaseStatusForCaseResolve: 'INVALID_CASE_STATUS_FOR_CASE_RESOLVE' as OtrErrorEnum,
        InvalidCitationId: 'INVALID_CITATION_ID' as OtrErrorEnum,
        InvalidCode: 'INVALID_CODE' as OtrErrorEnum,
        InvalidCourtId: 'INVALID_COURT_ID' as OtrErrorEnum,
        InvalidDate: 'INVALID_DATE' as OtrErrorEnum,
        InvalidDeclineCategoryId: 'INVALID_DECLINE_CATEGORY_ID' as OtrErrorEnum,
        InvalidDeclineReasonTypeId: 'INVALID_DECLINE_REASON_TYPE_ID' as OtrErrorEnum,
        InvalidDisputeId: 'INVALID_DISPUTE_ID' as OtrErrorEnum,
        InvalidDocumentId: 'INVALID_DOCUMENT_ID' as OtrErrorEnum,
        InvalidEmailAddress: 'INVALID_EMAIL_ADDRESS' as OtrErrorEnum,
        InvalidEmailTemplate: 'INVALID_EMAIL_TEMPLATE' as OtrErrorEnum,
        InvalidEndDate: 'INVALID_END_DATE' as OtrErrorEnum,
        InvalidEnumValue: 'INVALID_ENUM_VALUE' as OtrErrorEnum,
        InvalidFeePercentage: 'INVALID_FEE_PERCENTAGE' as OtrErrorEnum,
        InvalidFirstName: 'INVALID_FIRST_NAME' as OtrErrorEnum,
        InvalidInternetAddress: 'INVALID_INTERNET_ADDRESS' as OtrErrorEnum,
        InvalidInvitationToken: 'INVALID_INVITATION_TOKEN' as OtrErrorEnum,
        InvalidInvoiceLineItemId: 'INVALID_INVOICE_LINE_ITEM_ID' as OtrErrorEnum,
        InvalidLastName: 'INVALID_LAST_NAME' as OtrErrorEnum,
        InvalidLawfirm: 'INVALID_LAWFIRM' as OtrErrorEnum,
        InvalidLawyerId: 'INVALID_LAWYER_ID' as OtrErrorEnum,
        InvalidLegalService: 'INVALID_LEGAL_SERVICE' as OtrErrorEnum,
        InvalidLineItem: 'INVALID_LINE_ITEM' as OtrErrorEnum,
        InvalidMessageId: 'INVALID_MESSAGE_ID' as OtrErrorEnum,
        InvalidPaginationToken: 'INVALID_PAGINATION_TOKEN' as OtrErrorEnum,
        InvalidParameterValue: 'INVALID_PARAMETER_VALUE' as OtrErrorEnum,
        InvalidPassword: 'INVALID_PASSWORD' as OtrErrorEnum,
        InvalidPasswordResetToken: 'INVALID_PASSWORD_RESET_TOKEN' as OtrErrorEnum,
        InvalidPushToken: 'INVALID_PUSH_TOKEN' as OtrErrorEnum,
        InvalidRecipientList: 'INVALID_RECIPIENT_LIST' as OtrErrorEnum,
        InvalidRequest: 'INVALID_REQUEST' as OtrErrorEnum,
        InvalidRequestBody: 'INVALID_REQUEST_BODY' as OtrErrorEnum,
        InvalidResolutionStatus: 'INVALID_RESOLUTION_STATUS' as OtrErrorEnum,
        InvalidReviewCopy: 'INVALID_REVIEW_COPY' as OtrErrorEnum,
        InvalidRoleType: 'INVALID_ROLE_TYPE' as OtrErrorEnum,
        InvalidState: 'INVALID_STATE' as OtrErrorEnum,
        InvalidStripeAccount: 'INVALID_STRIPE_ACCOUNT' as OtrErrorEnum,
        InvalidStripeChargeId: 'INVALID_STRIPE_CHARGE_ID' as OtrErrorEnum,
        InvalidStripeRequest: 'INVALID_STRIPE_REQUEST' as OtrErrorEnum,
        InvalidStripeTransactionId: 'INVALID_STRIPE_TRANSACTION_ID' as OtrErrorEnum,
        InvalidSubscriptionType: 'INVALID_SUBSCRIPTION_TYPE' as OtrErrorEnum,
        InvalidTaskId: 'INVALID_TASK_ID' as OtrErrorEnum,
        InvalidTicketId: 'INVALID_TICKET_ID' as OtrErrorEnum,
        InvalidTicketReviewId: 'INVALID_TICKET_REVIEW_ID' as OtrErrorEnum,
        InvalidTrafficViolation: 'INVALID_TRAFFIC_VIOLATION' as OtrErrorEnum,
        InvalidUserId: 'INVALID_USER_ID' as OtrErrorEnum,
        InvalidUserName: 'INVALID_USER_NAME' as OtrErrorEnum,
        InvitationAlreadySent: 'INVITATION_ALREADY_SENT' as OtrErrorEnum,
        InvitationAlreadyVerified: 'INVITATION_ALREADY_VERIFIED' as OtrErrorEnum,
        InvitationCancelled: 'INVITATION_CANCELLED' as OtrErrorEnum,
        InvitationHasExpired: 'INVITATION_HAS_EXPIRED' as OtrErrorEnum,
        InvitationRecipientNoAccount: 'INVITATION_RECIPIENT_NO_ACCOUNT' as OtrErrorEnum,
        IoError: 'IO_ERROR' as OtrErrorEnum,
        LambdaUrlInvokeFailure: 'LAMBDA_URL_INVOKE_FAILURE' as OtrErrorEnum,
        LawfirmCaseCapacityReached: 'LAWFIRM_CASE_CAPACITY_REACHED' as OtrErrorEnum,
        LawfirmCaseNotActive: 'LAWFIRM_CASE_NOT_ACTIVE' as OtrErrorEnum,
        LawfirmDoesNotHandleAccidents: 'LAWFIRM_DOES_NOT_HANDLE_ACCIDENTS' as OtrErrorEnum,
        LawfirmDoesNotHandlePastDue: 'LAWFIRM_DOES_NOT_HANDLE_PAST_DUE' as OtrErrorEnum,
        LawfirmFeeHasStripeReference: 'LAWFIRM_FEE_HAS_STRIPE_REFERENCE' as OtrErrorEnum,
        LawfirmMissingAccountFee: 'LAWFIRM_MISSING_ACCOUNT_FEE' as OtrErrorEnum,
        LawfirmNotEligible: 'LAWFIRM_NOT_ELIGIBLE' as OtrErrorEnum,
        LawfirmOnVacationMode: 'LAWFIRM_ON_VACATION_MODE' as OtrErrorEnum,
        LawfirmPayoutHasStripeReference: 'LAWFIRM_PAYOUT_HAS_STRIPE_REFERENCE' as OtrErrorEnum,
        LawFirmNeedsAddress: 'LAW_FIRM_NEEDS_ADDRESS' as OtrErrorEnum,
        LegalServiceNotSupported: 'LEGAL_SERVICE_NOT_SUPPORTED' as OtrErrorEnum,
        LegalServiceQuoteExpired: 'LEGAL_SERVICE_QUOTE_EXPIRED' as OtrErrorEnum,
        LineItemMissingRecipient: 'LINE_ITEM_MISSING_RECIPIENT' as OtrErrorEnum,
        LinksNotAllowed: 'LINKS_NOT_ALLOWED' as OtrErrorEnum,
        LobAddressCreationFailure: 'LOB_ADDRESS_CREATION_FAILURE' as OtrErrorEnum,
        LobAddressValidationFailure: 'LOB_ADDRESS_VALIDATION_FAILURE' as OtrErrorEnum,
        LobCancelCheckDeliveryFailure: 'LOB_CANCEL_CHECK_DELIVERY_FAILURE' as OtrErrorEnum,
        LobCancelMailDeliveryFailure: 'LOB_CANCEL_MAIL_DELIVERY_FAILURE' as OtrErrorEnum,
        LobCheckMailDeliveryFailure: 'LOB_CHECK_MAIL_DELIVERY_FAILURE' as OtrErrorEnum,
        LobPostcardCreationFailure: 'LOB_POSTCARD_CREATION_FAILURE' as OtrErrorEnum,
        MediaTypeIncorrect: 'MEDIA_TYPE_INCORRECT' as OtrErrorEnum,
        MergeRollbackNotAllowed: 'MERGE_ROLLBACK_NOT_ALLOWED' as OtrErrorEnum,
        MissingActionType: 'MISSING_ACTION_TYPE' as OtrErrorEnum,
        MissingAdjustedFineAmount: 'MISSING_ADJUSTED_FINE_AMOUNT' as OtrErrorEnum,
        MissingBirthday: 'MISSING_BIRTHDAY' as OtrErrorEnum,
        MissingCase: 'MISSING_CASE' as OtrErrorEnum,
        MissingCitationId: 'MISSING_CITATION_ID' as OtrErrorEnum,
        MissingCourtFee: 'MISSING_COURT_FEE' as OtrErrorEnum,
        MissingCourtId: 'MISSING_COURT_ID' as OtrErrorEnum,
        MissingDeclineCategory: 'MISSING_DECLINE_CATEGORY' as OtrErrorEnum,
        MissingDeclineReasonType: 'MISSING_DECLINE_REASON_TYPE' as OtrErrorEnum,
        MissingEmailAddress: 'MISSING_EMAIL_ADDRESS' as OtrErrorEnum,
        MissingFeedbackContent: 'MISSING_FEEDBACK_CONTENT' as OtrErrorEnum,
        MissingFirstname: 'MISSING_FIRSTNAME' as OtrErrorEnum,
        MissingImageUrl: 'MISSING_IMAGE_URL' as OtrErrorEnum,
        MissingLastname: 'MISSING_LASTNAME' as OtrErrorEnum,
        MissingLawfirmId: 'MISSING_LAWFIRM_ID' as OtrErrorEnum,
        MissingLawyerId: 'MISSING_LAWYER_ID' as OtrErrorEnum,
        MissingMediaData: 'MISSING_MEDIA_DATA' as OtrErrorEnum,
        MissingNumViolations: 'MISSING_NUM_VIOLATIONS' as OtrErrorEnum,
        MissingParameter: 'MISSING_PARAMETER' as OtrErrorEnum,
        MissingPassword: 'MISSING_PASSWORD' as OtrErrorEnum,
        MissingRecipientEmail: 'MISSING_RECIPIENT_EMAIL' as OtrErrorEnum,
        MissingRequestBody: 'MISSING_REQUEST_BODY' as OtrErrorEnum,
        MissingResolutionStatus: 'MISSING_RESOLUTION_STATUS' as OtrErrorEnum,
        MissingSenderEmail: 'MISSING_SENDER_EMAIL' as OtrErrorEnum,
        MissingSenderPhoneNumber: 'MISSING_SENDER_PHONE_NUMBER' as OtrErrorEnum,
        MissingSeoUrl: 'MISSING_SEO_URL' as OtrErrorEnum,
        MissingStripeToken: 'MISSING_STRIPE_TOKEN' as OtrErrorEnum,
        MissingSubscriber: 'MISSING_SUBSCRIBER' as OtrErrorEnum,
        MissingTicketIssueDate: 'MISSING_TICKET_ISSUE_DATE' as OtrErrorEnum,
        MissingUserName: 'MISSING_USER_NAME' as OtrErrorEnum,
        MultipleLawfirmFees: 'MULTIPLE_LAWFIRM_FEES' as OtrErrorEnum,
        MultipleLawfirmPayouts: 'MULTIPLE_LAWFIRM_PAYOUTS' as OtrErrorEnum,
        MultipleRefundsOnCharge: 'MULTIPLE_REFUNDS_ON_CHARGE' as OtrErrorEnum,
        MultipleStripeCustomerAccountsFound: 'MULTIPLE_STRIPE_CUSTOMER_ACCOUNTS_FOUND' as OtrErrorEnum,
        MultipleStripeTransfersFound: 'MULTIPLE_STRIPE_TRANSFERS_FOUND' as OtrErrorEnum,
        MustBePositive: 'MUST_BE_POSITIVE' as OtrErrorEnum,
        NotificationError: 'NOTIFICATION_ERROR' as OtrErrorEnum,
        NotificationIncorrectRole: 'NOTIFICATION_INCORRECT_ROLE' as OtrErrorEnum,
        NotificationTooLong: 'NOTIFICATION_TOO_LONG' as OtrErrorEnum,
        NotificationToSelf: 'NOTIFICATION_TO_SELF' as OtrErrorEnum,
        NotAuthenticated: 'NOT_AUTHENTICATED' as OtrErrorEnum,
        NoAccountWithEmail: 'NO_ACCOUNT_WITH_EMAIL' as OtrErrorEnum,
        NoCaseOwner: 'NO_CASE_OWNER' as OtrErrorEnum,
        NoChargesOnCase: 'NO_CHARGES_ON_CASE' as OtrErrorEnum,
        NoInsurance: 'NO_INSURANCE' as OtrErrorEnum,
        NoLawfirmAvailable: 'NO_LAWFIRM_AVAILABLE' as OtrErrorEnum,
        NoLegalServicesInRegion: 'NO_LEGAL_SERVICES_IN_REGION' as OtrErrorEnum,
        NoStripeAccount: 'NO_STRIPE_ACCOUNT' as OtrErrorEnum,
        OwnerCaseMessageMismatch: 'OWNER_CASE_MESSAGE_MISMATCH' as OtrErrorEnum,
        PaymentPlansDenied: 'PAYMENT_PLANS_DENIED' as OtrErrorEnum,
        PaymentPlanLegalFeeHasCents: 'PAYMENT_PLAN_LEGAL_FEE_HAS_CENTS' as OtrErrorEnum,
        PaymentPlanNotSupportedWithPrepaidCard: 'PAYMENT_PLAN_NOT_SUPPORTED_WITH_PREPAID_CARD' as OtrErrorEnum,
        PdfPasswordProtected: 'PDF_PASSWORD_PROTECTED' as OtrErrorEnum,
        PlaidError: 'PLAID_ERROR' as OtrErrorEnum,
        QboBillCreationFailure: 'QBO_BILL_CREATION_FAILURE' as OtrErrorEnum,
        QboVendorCreationFailure: 'QBO_VENDOR_CREATION_FAILURE' as OtrErrorEnum,
        RateThrottleLimitExceeded: 'RATE_THROTTLE_LIMIT_EXCEEDED' as OtrErrorEnum,
        ReferralsNotAllowedToBeRedeemed: 'REFERRALS_NOT_ALLOWED_TO_BE_REDEEMED' as OtrErrorEnum,
        RefundNotAllowed: 'REFUND_NOT_ALLOWED' as OtrErrorEnum,
        RefundNotEligible: 'REFUND_NOT_ELIGIBLE' as OtrErrorEnum,
        RefundNotEligibleCriminal: 'REFUND_NOT_ELIGIBLE_CRIMINAL' as OtrErrorEnum,
        RequestNotWellFormatted: 'REQUEST_NOT_WELL_FORMATTED' as OtrErrorEnum,
        ResetTokenExpired: 'RESET_TOKEN_EXPIRED' as OtrErrorEnum,
        ResourceNotFound: 'RESOURCE_NOT_FOUND' as OtrErrorEnum,
        ReviewAlreadyExists: 'REVIEW_ALREADY_EXISTS' as OtrErrorEnum,
        ReviewNotFound: 'REVIEW_NOT_FOUND' as OtrErrorEnum,
        RoleNotSupported: 'ROLE_NOT_SUPPORTED' as OtrErrorEnum,
        S3ClientFailed: 'S3_CLIENT_FAILED' as OtrErrorEnum,
        S3ServerFailed: 'S3_SERVER_FAILED' as OtrErrorEnum,
        SameUserCannotBeMerged: 'SAME_USER_CANNOT_BE_MERGED' as OtrErrorEnum,
        SeoUrlAlreadyExists: 'SEO_URL_ALREADY_EXISTS' as OtrErrorEnum,
        ServiceRateNotFound: 'SERVICE_RATE_NOT_FOUND' as OtrErrorEnum,
        SimilarCourt: 'SIMILAR_COURT' as OtrErrorEnum,
        SocialProfileMissingEmail: 'SOCIAL_PROFILE_MISSING_EMAIL' as OtrErrorEnum,
        SsoServiceProviderIdNotFound: 'SSO_SERVICE_PROVIDER_ID_NOT_FOUND' as OtrErrorEnum,
        StateNotSupported: 'STATE_NOT_SUPPORTED' as OtrErrorEnum,
        StripeApiConnectionException: 'STRIPE_API_CONNECTION_EXCEPTION' as OtrErrorEnum,
        StripeApiException: 'STRIPE_API_EXCEPTION' as OtrErrorEnum,
        StripeApplicationFeeAlreadyRefunded: 'STRIPE_APPLICATION_FEE_ALREADY_REFUNDED' as OtrErrorEnum,
        StripeApplicationFeeNotFound: 'STRIPE_APPLICATION_FEE_NOT_FOUND' as OtrErrorEnum,
        StripeAuthenticationException: 'STRIPE_AUTHENTICATION_EXCEPTION' as OtrErrorEnum,
        StripeCardException: 'STRIPE_CARD_EXCEPTION' as OtrErrorEnum,
        StripeConnectAccountNotFound: 'STRIPE_CONNECT_ACCOUNT_NOT_FOUND' as OtrErrorEnum,
        StripeError: 'STRIPE_ERROR' as OtrErrorEnum,
        StripeFailedCharge: 'STRIPE_FAILED_CHARGE' as OtrErrorEnum,
        StripeOauthConnectFailed: 'STRIPE_OAUTH_CONNECT_FAILED' as OtrErrorEnum,
        StripeObjectMissingMetadata: 'STRIPE_OBJECT_MISSING_METADATA' as OtrErrorEnum,
        StripeResourceNotFound: 'STRIPE_RESOURCE_NOT_FOUND' as OtrErrorEnum,
        StripeTransferExists: 'STRIPE_TRANSFER_EXISTS' as OtrErrorEnum,
        StripeTransferNotFound: 'STRIPE_TRANSFER_NOT_FOUND' as OtrErrorEnum,
        SubscriptionNotOwnedByUser: 'SUBSCRIPTION_NOT_OWNED_BY_USER' as OtrErrorEnum,
        SubscriptionTeenagerAgeOut: 'SUBSCRIPTION_TEENAGER_AGE_OUT' as OtrErrorEnum,
        TemplateNotSupported: 'TEMPLATE_NOT_SUPPORTED' as OtrErrorEnum,
        TransferAlreadyReversed: 'TRANSFER_ALREADY_REVERSED' as OtrErrorEnum,
        TransferIdDoesntMatchCharge: 'TRANSFER_ID_DOESNT_MATCH_CHARGE' as OtrErrorEnum,
        TransferNotSafe: 'TRANSFER_NOT_SAFE' as OtrErrorEnum,
        TransferReversalNotAllowed: 'TRANSFER_REVERSAL_NOT_ALLOWED' as OtrErrorEnum,
        TransferToSameLawfirm: 'TRANSFER_TO_SAME_LAWFIRM' as OtrErrorEnum,
        UnableToVerifyRequest: 'UNABLE_TO_VERIFY_REQUEST' as OtrErrorEnum,
        Unauthorized: 'UNAUTHORIZED' as OtrErrorEnum,
        UnexpectedCaseStatus: 'UNEXPECTED_CASE_STATUS' as OtrErrorEnum,
        UnexpectedNullInput: 'UNEXPECTED_NULL_INPUT' as OtrErrorEnum,
        UnexpectedNumberOfCharges: 'UNEXPECTED_NUMBER_OF_CHARGES' as OtrErrorEnum,
        Unknown: 'UNKNOWN' as OtrErrorEnum,
        UnknownCrmError: 'UNKNOWN_CRM_ERROR' as OtrErrorEnum,
        UrlEntityMismatch: 'URL_ENTITY_MISMATCH' as OtrErrorEnum,
        UserAlreadyHasSecondaryAccount: 'USER_ALREADY_HAS_SECONDARY_ACCOUNT' as OtrErrorEnum,
        UserAlreadyLoggedIn: 'USER_ALREADY_LOGGED_IN' as OtrErrorEnum,
        UserAlreadyMerged: 'USER_ALREADY_MERGED' as OtrErrorEnum,
        UserCantUseOwnCode: 'USER_CANT_USE_OWN_CODE' as OtrErrorEnum,
        UserDoesNotMatchCitation: 'USER_DOES_NOT_MATCH_CITATION' as OtrErrorEnum,
        UserIsNotTheOwner: 'USER_IS_NOT_THE_OWNER' as OtrErrorEnum,
        UserNotFound: 'USER_NOT_FOUND' as OtrErrorEnum,
        UserNotFoundInLawfirm: 'USER_NOT_FOUND_IN_LAWFIRM' as OtrErrorEnum,
        VerificationCodeNotValid: 'VERIFICATION_CODE_NOT_VALID' as OtrErrorEnum,
        VerificationLinkNotValid: 'VERIFICATION_LINK_NOT_VALID' as OtrErrorEnum
    };
}


