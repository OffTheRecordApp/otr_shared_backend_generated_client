import * as request from "superagent";
import {
    SuperAgentStatic
}
from "superagent";

type CallbackHandler = (err: any, res ? : request.Response) => void;
type GetCitationsResponse = {
    'citations' ? : Array < CitationDomain > | CitationDomain

};
type PutUserSettingsRequest = {
    'settingName': string

        'settingValue': string

};
type DismissCitationsFromContactListRequest = {
    'citationIdList' ? : Array < number > | number

};
type GetClientCasesResponse = {
    'cases' ? : Array < CaseDomain > | CaseDomain

        'numBookings' ? : number

        'numCases' ? : number

        'numCitationUploads' ? : number

};
type GetReferralCodeResponse = {
    'endDate' ? : string

        'isCodeActive' ? : boolean

        'isCodeApproved' ? : boolean

        'numberOfReferrals' ? : number

        'ownerEmailAddress' ? : string

        'ownerType' ? : "OTR" | "LAWFIRM"

    'refereeCreditType' ? : "CENTS_VALUE" | "PERCENTAGE_DISCOUNT" | "NO_CREDIT"

    'refereeCreditValue' ? : number

        'referralCode' ? : string

        'referralCountLimit' ? : number

        'startDate' ? : string

};
type RescheduleTaskRequest = {
    'runAtDateUtc' ? : string

};
type PushNotificationRegistrationRequest = {
    'deviceToken' ? : string

        'platformType' ? : "IOS" | "WEBAPP" | "ANDROID"

};
type GetCaseFinancialsResponse = {
    'caseFinancialsList' ? : Array < CaseFinancialsDomain > | CaseFinancialsDomain

        'caseFinancialsSummary' ? : CaseFinancialsSummary

};
type GenericAdminListRequest = {
    'trailingDays': number

};
type Map« string, object» = {};
type PenaltyRequest = {
    'penaltyTypeId' ? : number

        'penaltyValue' ? : string

};
type CountyDomain = {
    'countyId' ? : number

        'countyName' ? : string

        'stateCode' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

};
type UpdateViolationRequest = {
    'violationCode' ? : string

        'violationDescription' ? : string

};
type GetCaseActionTimelineResponse = {
    'actionsNotTaken' ? : Array < CaseActionDomain > | CaseActionDomain

        'actionsTaken' ? : Array < CaseActionDomain > | CaseActionDomain

};
type CitationWithMissingCourt = {
    'citationId' ? : number

        'deleted' ? : boolean

        'state' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

};
type GetInvalidCasesWithStripeChargeResponse = {
    'cases' ? : Array < CaseDomain > | CaseDomain

};
type AddressDomain = {
    'addressId' ? : number

        'addressLine1' ? : string

        'addressLine2' ? : string

        'addressedTo' ? : string

        'city' ? : string

        'countryCode' ? : string

        'phoneNumber' ? : string

        'postalCode' ? : string

        'state' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

    'stateCode' ? : string

};
type GetCaseChargesResponse = {
    'charges' ? : Array < CaseChargeDomain > | CaseChargeDomain

};
type HashMap« string, string» = {};
type CaseAlert = {
    'actionType' ? : "ANNOUNCEMENT" | "ENGAGEMENT_LETTER"

    'alertType' ? : "SUCCESS" | "INFO" | "WARNING" | "ERROR"

    'bannerMessage' ? : string

        'caseId' ? : string

        'clickThruUrl' ? : string

        'hexColor' ? : number

        'lawfirmId' ? : string

};
type LineItemRequest = {
    'caseBaseCost' ? : number

        'chargeDescription' ? : string

        'chargeRunAtDate' ? : string

        'lawfirmReferralCodeAdjustmentInCents' ? : number

        'lineItemOwner' ? : "LAWFIRM" | "OTR"

    'otrCommissionCharged' ? : number

        'otrReferralCodeAdjustmentInCents' ? : number

};
type FindMatchingUsersResponse = {
    'users' ? : Array < UserDomain > | UserDomain

};
type PostCustomerLeadRequest = {
    'lead': CustomerLead

};
type LawfirmCaseDomain = {
    'caseDecisionStatus' ? : "CREATED" | "PENDING" | "ACCEPTED" | "DECLINED" | "EXPIRED" | "REMATCHED" | "REMATCHED_REFERRAL"

    'clientDeclineTicket' ? : FreshDeskTicket

        'declineReason' ? : string

        'lawfirmDecisionDateUtc' ? : Timestamp

        'lawfirmDeclineTicket' ? : FreshDeskTicket

        'lawfirmId' ? : number

        'lawfirmName' ? : string

        'lawfirmPrimaryEmail' ? : string

        'lawfirmReceiptDateUtc' ? : Timestamp

        'obfuscatedPictureUrl' ? : string

        'profilePictureUrl' ? : string

        'refundOwner' ? : "OTR" | "LAWFIRM" | "NONE"

};
type LawfirmCourtCoverageDomain = {
    'city': string

        'competitiveFeeMax': number

        'competitiveFeeMin': number

        'county': string

        'courtId': number

        'courtName': string

        'isCompetitive': boolean

        'isDeleted': boolean

        'isRefundOffered': boolean

        'lawfirmFee': number

        'lowestFee': number

        'state': string

        'xtCompetitiveFee': number

        'xtCompetitiveFeeMax': number

        'xtCompetitiveFeeMin': number

};
type ViolationResponse = {
    'penalties' ? : Array < CaseViolationPenalty > | CaseViolationPenalty

        'trafficViolationDesc' ? : string

        'trafficViolationTypeId' ? : number

        'violationClassification' ? : "NON_REPORTABLE" | "NON_MOVING" | "INFRACTION" | "MISDEMEANOR" | "FELONY" | "WOBBLER_TO_MISDEMEANOR" | "WOBBLER_TO_FELONY"

    'violationCode' ? : string

};
type GetCasesWithUncapturedChargesRequest = {};
type PublishReferralRequest = {
    'contacts' ? : Array < ReferralContact > | ReferralContact

        'dryRun' ? : boolean

};
type SSLCertificateResponse = {
    'rawPublicCert' ? : Array < string > | string

};
type ScheduledTaskResponse = {
    'completionDate' ? : string

        'errorMessage' ? : string

        'runAtDateUtc' ? : string

        'taskId' ? : string

        'taskReferenceId' ? : string

        'taskStatus' ? : "QUEUED" | "IN_PROGRESS" | "COMPLETE" | "CANCELLED" | "ERROR"

    'taskType' ? : "TICKET_REVIEW_TASK" | "EMAIL_FOLLOW_UP_TASK" | "PAY_INSTALLMENT_TASK" | "PDF_TO_IMAGE_TASK"

};
type AddActionToCaseRequest = {
    'caseAction' ? : CaseActionDomain

};
type ViolationPenaltyResponse = {
    'penalties' ? : Array < Penalty > | Penalty

        'violationId' ? : string

};
type Timestamp = {
    'date' ? : number

        'day' ? : number

        'hours' ? : number

        'minutes' ? : number

        'month' ? : number

        'nanos' ? : number

        'seconds' ? : number

        'time' ? : number

        'timezoneOffset' ? : number

        'year' ? : number

};
type CaseDomain = {
    'actions' ? : Array < CaseActionDomain > | CaseActionDomain

        'adjustedFineAmount' ? : number

        'adjustedPointCount' ? : number

        'bookingConfirmedDate' ? : Timestamp

        'cancellationExpiryDate' ? : Timestamp

        'caseCancellationDate' ? : Timestamp

        'caseCreationDate' ? : Timestamp

        'caseId' ? : string

        'caseResolutionDate' ? : Timestamp

        'caseStatus' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'caseStatusCategory' ? : "UNCONFIRMED" | "ACTIVE" | "RESOLVED" | "CANCELLED"

    'citation' ? : CitationDomain

        'courtAppointmentDate' ? : Timestamp

        'lawfirmCaseDecision' ? : LawfirmCaseDomain

        'resolutionSummary' ? : string

        'user' ? : UserDomain

        'userId' ? : number

};
type DirectMailContact = {
    'backTemplateUrlSent' ? : string

        'costInCents' ? : number

        'estimatedDeliveryDate' ? : string

        'frontTemplateUrlSent' ? : string

        'lobReferenceId' ? : string

        'mailDimensions' ? : string

        'mailTemplateName' ? : string

        'mailType' ? : "POST_CARD" | "LETTER" | "CHECK"

    'processedForDeliveryDate' ? : string

        'trackingStatus' ? : "CREATED" | "IN_TRANSIT" | "IN_LOCAL_AREA" | "PROCESSED_FOR_DELIVERY" | "RETURNED_TO_SENDER" | "RE_ROUTED"

};
type SendEmailToUserRequest = {
    'actionType' ? : string

        'citationId' ? : number

        'emailTemplateId' ? : "CASUAL_FIRST_V1" | "CASUAL_SECOND_V1" | "TICKET_DUE_WA" | "NO_COVERAGE_AVAILABLE" | "INVALID_IMAGE_UPLOAD_1" | "PARKING_TICKET" | "CAMERA_TICKET_NMV" | "NO_COVERAGE_AVAILABLE_MISSING_COURT" | "TICKET_EVAL_WITH_CITATION" | "TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP" | "TICKET_EVAL_WITH_CITATION_CLOSE_OUT" | "CASE_CANCELLED_NMV" | "CASE_CANCELLED_NO_LAWFIRM" | "CASE_CANCELLED_BY_USER" | "CASE_CANCELLED_OVERDUE" | "CASE_CANCELLED_TOO_SHORT_NOTICE" | "LAWFIRM_CONTACT_1_V1" | "LAWFIRM_CONTACT_2_V1" | "LAWFIRM_CONTACT_3_V1" | "LAWFIRM_CONTACT_4_V1" | "LAWFIRM_CONTACT_5_V1" | "LAWFIRM_CONTACT_6_V1" | "LAWFIRM_CONTACT_7_V1" | "LAWFIRM_CONTACT_8_V1" | "LAWFIRM_CONTACT_9_V1" | "LAWFIRM_CONTACT_10_V1" | "POST_WIN" | "POST_WIN_V2" | "POST_WIN_LAST_ASK" | "ATTICUS_ATTORNEY_CONTACT_1" | "SUNDAY_AFTERNOON_HELLO" | "AFTERNOON_HELLO_2" | "FRIDAY_INTRO" | "LAWYER_POST_COURT_REMINDER"

    'fromEmailAddress' ? : string

        'userIdToContact' ? : number

};
type GetCitationsWithMissingFieldsResponse = {
    'citations' ? : Array < CitationWithMissingFields > | CitationWithMissingFields

};
type LawfirmRatesResponse = {
    'capacityLeft' ? : number

        'handlesAccidents' ? : boolean

        'handlesPastDue' ? : boolean

        'ineligibleMatchReason' ? : string

        'lawfirmId' ? : number

        'lawfirmName' ? : string

        'lineItems' ? : Array < LineItem > | LineItem

        'phoneNumber' ? : string

        'primaryEmailAddress' ? : string

        'profilePictureUrl' ? : string

        'rank' ? : number

        'refundEligible' ? : boolean

        'successRate' ? : number

        'totalLegalFee' ? : number

        'vacationModeOn' ? : boolean

};
type GetOutgoingContactsResponse = {
    'contacts' ? : Array < OutgoingContactDomain > | OutgoingContactDomain

};
type GetCaseCostsAttorneyResponse = {
    'futurePayments' ? : Array < FuturePayment > | FuturePayment

        'lawfirmAssumedCost' ? : number

        'lawfirmEarningsForCase' ? : number

        'lineItems' ? : Array < LineItem > | LineItem

        'otrCommissionChargedToLawfirm' ? : number

        'paymentProcessingFeeChargedToLawfirm' ? : number

};
type AlertNotificationResponse = {
    'alerts' ? : Array < Alert > | Alert

        'caseAlerts' ? : Array < CaseAlert > | CaseAlert

};
type DeleteNotificationEventRequest = {
    'notificationId' ? : number

        'pageType' ? : "CASE_STATUS" | "CASE_MESSAGES" | "CASE_ACTION" | "COURT_DATE_SCHEDULED" | "PROFILE" | "NEW_TICKET"

};
type SendConsolidatedEmailToUser = {
    'bypassDedupe' ? : boolean

        'citationIds' ? : Array < number > | number

        'emailTemplateId' ? : "CASUAL_FIRST_V1" | "CASUAL_SECOND_V1" | "TICKET_DUE_WA" | "NO_COVERAGE_AVAILABLE" | "INVALID_IMAGE_UPLOAD_1" | "PARKING_TICKET" | "CAMERA_TICKET_NMV" | "NO_COVERAGE_AVAILABLE_MISSING_COURT" | "TICKET_EVAL_WITH_CITATION" | "TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP" | "TICKET_EVAL_WITH_CITATION_CLOSE_OUT" | "CASE_CANCELLED_NMV" | "CASE_CANCELLED_NO_LAWFIRM" | "CASE_CANCELLED_BY_USER" | "CASE_CANCELLED_OVERDUE" | "CASE_CANCELLED_TOO_SHORT_NOTICE" | "LAWFIRM_CONTACT_1_V1" | "LAWFIRM_CONTACT_2_V1" | "LAWFIRM_CONTACT_3_V1" | "LAWFIRM_CONTACT_4_V1" | "LAWFIRM_CONTACT_5_V1" | "LAWFIRM_CONTACT_6_V1" | "LAWFIRM_CONTACT_7_V1" | "LAWFIRM_CONTACT_8_V1" | "LAWFIRM_CONTACT_9_V1" | "LAWFIRM_CONTACT_10_V1" | "POST_WIN" | "POST_WIN_V2" | "POST_WIN_LAST_ASK" | "ATTICUS_ATTORNEY_CONTACT_1" | "SUNDAY_AFTERNOON_HELLO" | "AFTERNOON_HELLO_2" | "FRIDAY_INTRO" | "LAWYER_POST_COURT_REMINDER"

    'fromEmailAddress' ? : string

        'userIdToContact' ? : number

};
type DirectMailTemplateToAdd = {
    'fileNamePrefix' ? : string

        'mailDimensions' ? : string

        'mailType' ? : "POST_CARD" | "LETTER" | "CHECK"

    'templateBackHtml' ? : string

        'templateFrontHtml' ? : string

        'templateName' ? : string

};
type GraphRequest = {
    'caseStatues' ? : Array < "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE" > | "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'endDate' ? : string

        'includeDismissedContacts' ? : boolean

        'includeOutgoingContacts' ? : boolean

        'startDate' ? : string

};
type GetDocumentsRequest = {
    'caseId' ? : string

};
type AddViolationsToCitationRequest = {
    'violationTypes' ? : Array < number > | number

};
type GetCaseLineItemsResponse = {
    'clientBaseCostInCents' ? : number

        'clientTotalCostInCents' ? : number

        'futurePayments' ? : Array < CaseFuturePayment > | CaseFuturePayment

        'lineItems' ? : Array < CaseFinancialLineItemResponse > | CaseFinancialLineItemResponse

        'totalRefCodeAdjustmentInCents' ? : number

};
type NewLawyerRequest = {
    'lawfirmId' ? : number

        'userId' ? : number

};
type CasePaymentPlanResponse = {
    'amountDueInCents' ? : number

        'casePaymentPlanId' ? : string

        'dueDate' ? : string

        'lawfirmAdjustmentInCents' ? : number

        'otrAdjustmentInCents' ? : number

        'otrReferralFeeInCents' ? : number

        'paymentOrder' ? : number

        'paymentProcessingFeeActual' ? : number

        'paymentProcessingFeeChargedToLawfirm' ? : number

        'recipient' ? : "LAWFIRM" | "OTR"

    'stripeTransactionId' ? : string

};
type IsRefundEligibleResponse = {
    'refundEligibilityType' ? : "FULL_REFUND" | "PARTIAL_REFUND" | "NO_REFUND"

    'uiReasonMsg' ? : string

};
type GetPendingTicketReviewsRequest = {
    'fromDate': Timestamp

        'maxRecords': number

        'toDate': Timestamp

};
type AuthorizeChargeForCaseResponse = {
    'otre' ? : number

};
type AddCourtRequest = {
    'address' ? : AddressDomain

        'court' ? : CourtDomain

};
type ValidateDirectMailRequest = {
    'mailTemplateType' ? : string

        'toAddress' ? : AddressDomain

};
type UpdateCitationAddressRequest = {
    'address' ? : AddressDomain

};
type MatchCitationResponse = {
    'address' ? : AddressDomain

        'citationId' ? : number

        'citationIssueDateUTC' ? : Timestamp

        'court' ? : CourtDomain

        'fineAmount' ? : number

        'involvesAccident' ? : boolean

        'isDeleted' ? : boolean

        'ticketImageUrl' ? : string

        'ticketNumber' ? : string

        'violations' ? : Array < ViolationResponse > | ViolationResponse

};
type StripePaymentSourceDomain = {
    'country' ? : string

        'id' ? : string

        'isDefault' ? : boolean

        'last4' ? : string

        'object' ? : string

};
type SendEmailToUsersRequest = {
    'actionType': string

        'emailTemplateId': "CASUAL_FIRST_V1" | "CASUAL_SECOND_V1" | "TICKET_DUE_WA" | "NO_COVERAGE_AVAILABLE" | "INVALID_IMAGE_UPLOAD_1" | "PARKING_TICKET" | "CAMERA_TICKET_NMV" | "NO_COVERAGE_AVAILABLE_MISSING_COURT" | "TICKET_EVAL_WITH_CITATION" | "TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP" | "TICKET_EVAL_WITH_CITATION_CLOSE_OUT" | "CASE_CANCELLED_NMV" | "CASE_CANCELLED_NO_LAWFIRM" | "CASE_CANCELLED_BY_USER" | "CASE_CANCELLED_OVERDUE" | "CASE_CANCELLED_TOO_SHORT_NOTICE" | "LAWFIRM_CONTACT_1_V1" | "LAWFIRM_CONTACT_2_V1" | "LAWFIRM_CONTACT_3_V1" | "LAWFIRM_CONTACT_4_V1" | "LAWFIRM_CONTACT_5_V1" | "LAWFIRM_CONTACT_6_V1" | "LAWFIRM_CONTACT_7_V1" | "LAWFIRM_CONTACT_8_V1" | "LAWFIRM_CONTACT_9_V1" | "LAWFIRM_CONTACT_10_V1" | "POST_WIN" | "POST_WIN_V2" | "POST_WIN_LAST_ASK" | "ATTICUS_ATTORNEY_CONTACT_1" | "SUNDAY_AFTERNOON_HELLO" | "AFTERNOON_HELLO_2" | "FRIDAY_INTRO" | "LAWYER_POST_COURT_REMINDER"

        'fromEmailAddress': string

        'usersToContact': Array < UserToContact > | UserToContact

};
type CaseStatusDetailsResponse = {
    'category' ? : "UNCONFIRMED" | "ACTIVE" | "RESOLVED" | "CANCELLED"

    'id' ? : number

        'status' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

};
type GetUserRefLinksResponse = {
    'refLinks' ? : Array < UserRefLinkDomain > | UserRefLinkDomain

};
type LawfirmDocumentTemplateResponse = {
    'documents' ? : Array < LawfirmDocumentTemplate > | LawfirmDocumentTemplate

};
type CreateBranchLinkRequest = {
    'afterClickUrl': string

        'campaign': string

        'channel': string

        'data': {}

        'feature': string

        'linkAlias': string

        'stage': string

        'tags': Array < string > | string

        'type': number

};
type MatchInnerCaseResponse = {
    'caseId' ? : string

        'citation' ? : MatchCitationResponse

        'lawfirmCaseDecision' ? : LawfirmCaseDomain

        'maxPenalties' ? : Array < CaseViolationPenalty > | CaseViolationPenalty

        'refundEligibility' ? : "FULL_REFUND" | "PARTIAL_REFUND" | "NO_REFUND"

    'uiReasonMsg' ? : string

        'userId' ? : number

};
type GetLawfirmCoverageResponse = {
    'coverageList' ? : Array < LawfirmCourtCoverageDomain > | LawfirmCourtCoverageDomain

};
type GetLawfirmCasesResponse = {
    'activeCasesCount' ? : number

        'cases' ? : Array < CaseDomain > | CaseDomain

        'numLostCases' ? : number

        'numResolvedCases' ? : number

        'pendingCasesCount' ? : number

};
type FindChargeDisputesResponse = {
    'disputes' ? : Array < ChargeDisputeDomain > | ChargeDisputeDomain

};
type GetLawfirmSummaryCaseRequest = {
    'caseStatusCategories' ? : Array < "UNCONFIRMED" | "ACTIVE" | "RESOLVED" | "CANCELLED" > | "UNCONFIRMED" | "ACTIVE" | "RESOLVED" | "CANCELLED"

    'caseStatuses' ? : Array < "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE" > | "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'excludedCaseStatuses' ? : Array < "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE" > | "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'order' ? : {}

    'searchValue' ? : string

};
type GetSupportTicketsResponse = {
    'supportTickets' ? : Array < FreshDeskTicket > | FreshDeskTicket

};
type UserRefLinkDomain = {
    'refLink' ? : string

        'userId' ? : number

        'userRefLinkId' ? : number

};
type PriceMatchRequest = {
    'attorneyContactInfo' ? : string

        'attorneyName' ? : string

        'clientEmailAddress' ? : string

        'clientName' ? : string

        'details' ? : string

        'priceToMatch' ? : string

        'website' ? : string

};
type RegisterNewUserResponse = {
    'newAccount' ? : boolean

        'user' ? : UserDomain

        'userAuthenticated' ? : boolean

        'userLoggedIn' ? : boolean

        'userRememberMeAuthenticated' ? : boolean

};
type GetCaseResponse = {
    'chanceOfSuccess' ? : number

        'projectedInsuranceCostInCents' ? : number

        'theCase' ? : CaseDomain

};
type AddACHToStripeAccountRequest = {
    'makeDefault' ? : boolean

        'plaidBankAccountId' ? : string

        'plaidPublicToken' ? : string

};
type SubscriberDomain = {
    'email': string

        'fullName': string

        'postalCode': string

        'roleType': string

        'subscriptionType': "WEB_BROCHURE_LAUNCH_NOTIFICATION"

};
type Map« string, Collection« NotificationEvent»» = {};
type DirectMailContactResponse = {
    'sentMail' ? : Array < DirectMailContact > | DirectMailContact

};
type CaseTransferHistory = {
    'decisionDate' ? : string

        'decisionStatus' ? : "CREATED" | "PENDING" | "ACCEPTED" | "DECLINED" | "EXPIRED" | "REMATCHED" | "REMATCHED_REFERRAL"

    'declineNote' ? : string

        'discountInCents' ? : number

        'lawfirmCaseCreationDate' ? : string

        'lawfirmCaseId' ? : string

        'lawfirmId' ? : string

        'lawfirmName' ? : string

        'refundOwner' ? : "OTR" | "LAWFIRM" | "NONE"

    'totalClientCostInCents' ? : number

};
type GetListOfCitationsWithMissingCourtResponse = {
    'citations' ? : Array < CitationWithMissingCourt > | CitationWithMissingCourt

};
type GetLostCasesWithTransferNotReversedRequest = {
    'fromDate': Timestamp

        'maxRecords': number

        'toDate': Timestamp

};
type ReferralResponse = {
    'caseId' ? : string

        'caseResolved' ? : boolean

        'referralCode' ? : string

        'referralCreditStatus' ? : "NOTIFIED" | "SAVED" | "APPLIED" | "CONFIRMED" | "CASE_CANCELLED" | "SUPERSEDED"

    'referralCreditType' ? : "CENTS_VALUE" | "PERCENTAGE_DISCOUNT" | "NO_CREDIT"

    'referralCreditValue' ? : number

        'referralDate' ? : string

        'referralExpirationDate' ? : string

        'referralPaymentStatus' ? : "NONE" | "PENDING_CASE_RESOLUTION" | "PAID_OUT" | "ERROR"

    'referralSourceType' ? : "UNKNOWN" | "GOOGLE_SEARCH" | "FACEBOOK" | "RADIO" | "FRIEND_OR_FAMILY" | "OTHER" | "CHECKOUT_CODE" | "DMV_ORG" | "REDDIT" | "DWA" | "YOUTUBE_AD" | "DMV_COM" | "VINWIKI"

    'referredUser' ? : UserDetails

};
type GetPenaltyType = {
    'type' ? : "TOTAL_BAIL_AMOUNT" | "INCARCERATION_MAX_DAYS" | "LICENSE_SUSPENSION_MAX_DAYS" | "DEMERIT_POINTS" | "MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY" | "INCARCERATION_MIN_DAYS" | "MANDATORY_COURT_APPEARANCE"

    'typeId' ? : number

};
type GetPotentialCustomersResponse = {
    'numRecords' ? : number

        'potentialCustomers' ? : Array < PotentialCustomerDomain > | PotentialCustomerDomain

};
type KeyValueMapRequest = {
    'keyValueMap': {}

    'notificationMethod': string

        'usage': string

};
type DirectMailSendRequest = {
    'mailTemplateType' ? : string

        'reconcileId' ? : string

        'reconcileType' ? : "OTR_CITATION_ID" | "OTR_LAWFIRM_ID" | "TICKET_REFERENCE_ID"

    'toAddress' ? : AddressDomain

};
type GetLawfirmLeadsRequest = {
    'orderBy': string

};
type Subscriber = {
    'created_at': DateTime

        'custom_fields': {}

        'email': string

        'id': string

        'prospect': boolean

        'status': string

        'tags': Array < string > | string

        'time_zone': string

        'user_id': string

        'utc_offset': number

};
type PushNotificationRequest = {
    'messageBody' ? : string

        'pageType' ? : "CASE_STATUS" | "CASE_MESSAGES" | "CASE_ACTION" | "COURT_DATE_SCHEDULED" | "PROFILE" | "NEW_TICKET"

    'platformType' ? : "IOS" | "WEBAPP" | "ANDROID"

};
type AwsCredentialsRequest = {
    'keyName' ? : "S3_CITATION_IMAGES_RO"

};
type LawfirmCaseDocument = {
    'caseDocId' ? : string

        'clientDocRequirement' ? : "NONE" | "ACK" | "SIGNATURE" | "NOTARY"

    'docDate' ? : string

        'docType' ? : "ENGAGEMENT_LETTER" | "OTHER_IMAGE"

    'docUrl' ? : string

        'hasClientAgreed' ? : boolean

};
type CustomerReview = {
    'copy' ? : string

        'courtName' ? : string

        'displayName' ? : string

        'featured' ? : boolean

        'profilePictureUrl' ? : string

        'resolutionDateUtc' ? : string

        'resolutionName' ? : string

        'source' ? : "APPLE" | "GOOGLE" | "FACEBOOK"

    'starRating' ? : string

        'stateAbbreviation' ? : string

        'tagLine' ? : string

        'ticketLocation' ? : string

};
type LawfirmDocumentTemplate = {
    'clientDocRequirement' ? : "NONE" | "ACK" | "SIGNATURE" | "NOTARY"

    'docDate' ? : string

        'docExt' ? : string

        'docType' ? : "ENGAGEMENT_LETTER" | "OTHER_IMAGE"

    'textProvidedByLawfirm' ? : string

};
type InsertInvoiceLineItemRequest = {
    'lineItem': LineItemRequest

};
type UpdateLawfirmRequest = {
    'lawfirm' ? : LawfirmDomain

};
type RegisterNewUserRequest = {
    'clientType': "UNKNOWN" | "IOS" | "ANDROID" | "MOBILE_WEBAPP" | "DESKTOP_WEBAPP" | "OTR_LAWFIRM_PORTAL" | "OTR_ADMIN_CONSOLE" | "OTR_WEBSITE" | "OTR_EXPLORER" | "FRESH_DESK" | "LOCALHOST" | "DMV_ORG"

        'httpReferrer': string

        'isAutoLogin': boolean

        'otherNote': string

        'referralCode': string

        'referralSourceData': {}

        'roleType': "LAWYER" | "DEFENDANT" | "ADMIN" | "PARTNER" | "UNKNOWN"

        'user': UserDomain

        'userReferralSourceTypeId': number

};
type CaseStatusDomain = {
    'clientFriendlyDescription' ? : string

        'clientFriendlyName' ? : string

        'isDeprecated' ? : boolean

        'lawfirmFriendlyDescription' ? : string

        'lawfirmFriendlyName' ? : string

        'stateCode' ? : string

        'statusCategory' ? : "UNCONFIRMED" | "ACTIVE" | "RESOLVED" | "CANCELLED"

    'statusId' ? : number

        'statusName' ? : string

};
type GetPendingAndRefusedCasesResponse = {
    'cases' ? : Array < CaseDomain > | CaseDomain

};
type GetCaseActionTypesResponse = {
    'caseActionTypes' ? : Array < "CITATION_DATA_EXTRACTED" | "REVIEWED_BY_LAWFIRM" | "TICKET_MAILED_TO_COURT" | "NOTICE_OF_APPEARANCE_FILED" | "DISCOVERY_REQUESTED" | "DISCOVERY_RECEIVED" | "COURT_DATE_SCHEDULED" | "OTHER" > | "CITATION_DATA_EXTRACTED" | "REVIEWED_BY_LAWFIRM" | "TICKET_MAILED_TO_COURT" | "NOTICE_OF_APPEARANCE_FILED" | "DISCOVERY_REQUESTED" | "DISCOVERY_RECEIVED" | "COURT_DATE_SCHEDULED" | "OTHER"

};
type FreshDeskConversation = {
    'created_at' ? : string

        'fromCustomer' ? : boolean

        'from_email' ? : string

        'incoming' ? : boolean

        'private' ? : boolean

        'ticket_id' ? : number

        'user_id' ? : number

};
type EstimateInsuranceSavingsRequest = {
    'monthlyInsurancePremiumInCents': number

        'state': "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

        'ticketFineInCents': number

        'trafficViolationTypeId': number

};
type LawfirmInboxMessageDomain = {
    'caseId' ? : string

        'caseStatus' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'citationIssueDate' ? : Timestamp

        'clientFirstName' ? : string

        'clientLastName' ? : string

        'courtName' ? : string

        'lawfirmCaseDecisionStatus' ? : "CREATED" | "PENDING" | "ACCEPTED" | "DECLINED" | "EXPIRED" | "REMATCHED" | "REMATCHED_REFERRAL"

    'messageBody' ? : string

        'messageSentDateUtc' ? : Timestamp

        'profilePictureUrl' ? : string

};
type SaveCaseNotesRequest = {
    'caseNotes' ? : CaseNotesDomain

};
type TrafficViolationInputRequest = {
    'violationId' ? : number

};
type ScheduledTaskGetResponse = {
    'tasks' ? : Array < ScheduledTaskResponse > | ScheduledTaskResponse

};
type GetPendingTicketReviewsResponse = {
    'requests' ? : Array < TicketReviewRequest > | TicketReviewRequest

};
type PostReferralSourceRequest = {
    'clientType' ? : "UNKNOWN" | "IOS" | "ANDROID" | "MOBILE_WEBAPP" | "DESKTOP_WEBAPP" | "OTR_LAWFIRM_PORTAL" | "OTR_ADMIN_CONSOLE" | "OTR_WEBSITE" | "OTR_EXPLORER" | "FRESH_DESK" | "LOCALHOST" | "DMV_ORG"

    'otherNote' ? : string

        'referralCode' ? : string

        'referralSourceData' ? : {}

    'userId' ? : number

        'userReferralSourceTypeId' ? : number

};
type CreateReferralCodeRequest = {
    'discountOwnerOTR' ? : boolean

        'endDate' ? : string

        'refereeCreditType' ? : "CENTS_VALUE" | "PERCENTAGE_DISCOUNT" | "NO_CREDIT"

    'refereeCreditValue' ? : number

        'referralCodeOverride' ? : string

        'referralCountLimit' ? : number

        'referrerCreditType' ? : "CENTS_VALUE" | "PERCENTAGE_DISCOUNT" | "NO_CREDIT"

    'referrerCreditValue' ? : number

        'referrerUserId' ? : number

        'startDate' ? : string

};
type DocumentDecisionRequest = {
    'acknowledged' ? : boolean

        'caseId' ? : string

};
type UpdateCitationRequest = {
    'citation' ? : CitationInputRequest

};
type UpdateDisputeRequest = {
    'dispute': ChargeDisputeDomain

};
type ReplyToTicketRequest = {
    'htmlReply' ? : string

        'newTicketStatus' ? : "OPEN" | "PENDING" | "RESOLVED" | "CLOSED" | "WAITING_ON_CUSTOMER" | "WAITING_ON_THIRD_PARTY" | "WAITING_ON_ATTORNEY" | "WAITING_ON_OTR" | "QUEUED_FOR_AUTOMATION"

};
type UpdateCitationPictureRequest = {
    'base64ImageData' ? : string

        'imageContentType' ? : string

};
type GetInvalidCasesWithStripeChargeRequest = {};
type AvailablePaymentPlanResponse = {
    'plans' ? : Array < AvailablePaymentPlan > | AvailablePaymentPlan

};
type LawfirmTransactionDomain = {
    'amount' ? : number

        'amountNew' ? : number

        'caseDecisionStatus' ? : "CREATED" | "PENDING" | "ACCEPTED" | "DECLINED" | "EXPIRED" | "REMATCHED" | "REMATCHED_REFERRAL"

    'caseId' ? : string

        'lawfirmServiceCharge' ? : number

        'otrReferralFee' ? : number

        'processingFeeChargedToLawfirm' ? : number

        'stripeTxId' ? : string

        'transactionDateUtc' ? : Timestamp

        'transactionType' ? : "CREDIT" | "DEBIT" | "PAYOUT" | "CHARGEBACK" | "PENDING" | "CANCELLATION" | "REFUND" | "ADJUSTMENT" | "FEE"

    'userFirstName' ? : string

        'userLastName' ? : string

};
type DeleteCitationResponse = {
    'citation' ? : CitationDomain

};
type LawfirmDomain = {
    'aboutUsBlurb': string

        'address': AddressDomain

        'caseAssignmentPriority': number

        'createdBy': number

        'establishedYear': number

        'lawfirmId': number

        'lawfirmName': string

        'lawfirmState': "ONBOARDING" | "IN_TRIAL" | "ESTABLISHED" | "UNDER_REVIEW" | "TERMINATED_FRAUD" | "TERMINATED_POOR_SUCCESS" | "TERMINATED_POOR_SERVICE" | "TEMPORARILY_TURNED_OFF" | "LAWFIRM_LEAD" | "LAWFIRM_NOT_INTERESTED" | "LAWFIRM_INTERESTED" | "FUTURE_LEAD" | "NOT_INTERESTED_REFUND_ETHICS" | "NOT_INTERESTED_FEE_SPLITTING_ETHICS" | "DUPLICATE" | "ACCOUNT_CLOSED"

        'membershipStartDateUtc': string

        'otrNotes': string

        'primaryEmailAddress': string

        'primaryPhoneNumber': string

        'profilePictureUrl': string

        'settings': LawfirmSettingsDomain

        'website': string

};
type GetLawfirmCaseStatsResponse = {
    'caseCountByStatusMap' ? : {}

    'numActiveCases' ? : number

        'numBookedCases' ? : number

        'numResolvedCases' ? : number

};
type ReferralContact = {
    'emailAddress' ? : string

        'firstName' ? : string

        'lastName' ? : string

};
type CaseCreationRequest = {
    'courtDate' ? : string

        'forcePredeterminedLawfirmId' ? : boolean

        'predeterminedLawfirmId' ? : number

};
type CreateNewLawfirmRequest = {
    'defaultTrafficFeeInCents': number

        'lawfirm': LawfirmDomain

        'priority': number

        'referralRate': number

};
type GeoRatesRequest = {
    'courtDate' ? : string

        'courtId' ? : string

        'violationCount' ? : number

        'violations' ? : Array < ViolationInputRequest > | ViolationInputRequest

};
type AddCardToStripeAccountRequest = {
    'makeDefault' ? : boolean

        'sourceToken' ? : string

        'userId' ? : string

};
type ReverseCaseTransferRequest = {
    'refundApplicationFee' ? : boolean

        'stripeChargeId' ? : string

        'stripeTransferId' ? : string

        'transactionType' ? : "CREDIT" | "DEBIT" | "PAYOUT" | "CHARGEBACK" | "PENDING" | "CANCELLATION" | "REFUND" | "ADJUSTMENT" | "FEE"

};
type EstimateInsuranceSavingsResponse = {
    'monthlyExtraInsuranceCostInCents' ? : number

        'totalCostOfTicketInCents' ? : number

        'totalExtraInsuranceCostInCents' ? : number

};
type LobEventRequest = {
    'date_created' ? : string

        'event_type' ? : LobEvent

        'id' ? : string

        'reference_id' ? : string

};
type UserRoleDomain = {
    'roleType' ? : "LAWYER" | "DEFENDANT" | "ADMIN" | "PARTNER" | "UNKNOWN"

};
type FreshDeskTicket = {
    'attachments' ? : Array < {} > | {}

    'cc_emails' ? : Array < string > | string

        'conversation' ? : Array < FreshDeskConversation > | FreshDeskConversation

        'created_at' ? : string

        'custom_fields' ? : {}

    'deleted' ? : boolean

        'description' ? : string

        'description_text' ? : string

        'due_by' ? : string

        'email' ? : string

        'fr_due_by' ? : string

        'fr_escalated' ? : boolean

        'fwd_emails' ? : Array < string > | string

        'group_id' ? : number

        'id' ? : number

        'is_escalated' ? : boolean

        'name' ? : string

        'phone' ? : string

        'priority' ? : number

        'product_id' ? : number

        'reply_cc_emails' ? : Array < string > | string

        'requester' ? : FreshDeskRequester

        'requester_id' ? : string

        'responder_id' ? : number

        'source' ? : number

        'spam' ? : boolean

        'status' ? : number

        'statusType' ? : "OPEN" | "PENDING" | "RESOLVED" | "CLOSED" | "WAITING_ON_CUSTOMER" | "WAITING_ON_THIRD_PARTY" | "WAITING_ON_ATTORNEY" | "WAITING_ON_OTR" | "QUEUED_FOR_AUTOMATION"

    'subject' ? : string

        'tags' ? : Array < string > | string

        'to_emails' ? : Array < string > | string

        'type' ? : string

        'unique_external_id' ? : string

        'updated_at' ? : string

};
type LawfirmDocumentResponse = {
    'documents' ? : Array < LawfirmDocument > | LawfirmDocument

};
type GetLostCasesWithTransferNotReversedResponse = {
    'cases' ? : Array < LostCaseWithTransferNotReversed > | LostCaseWithTransferNotReversed

};
type LawfirmsRatesResponse = {
    'rates' ? : Array < LawfirmRatesResponse > | LawfirmRatesResponse

};
type Penalty = {
    'additionalTip' ? : string

        'penaltyFriendlyDescription' ? : string

        'penaltyType' ? : "TOTAL_BAIL_AMOUNT" | "INCARCERATION_MAX_DAYS" | "LICENSE_SUSPENSION_MAX_DAYS" | "DEMERIT_POINTS" | "MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY" | "INCARCERATION_MIN_DAYS" | "MANDATORY_COURT_APPEARANCE"

    'penaltyTypeId' ? : number

        'penaltyValue' ? : string

        'vectorImageUrl' ? : string

};
type IsUserLoggedInResponse = {
    'isUserLoggedIn' ? : boolean

        'userId' ? : number

};
type CitationWithMissingFields = {
    'citationCreationDateUtc' ? : Timestamp

        'citationId' ? : number

        'clientEmailAddress' ? : string

        'clientFirstName' ? : string

        'courtId' ? : number

        'ticketImageUrl' ? : string

        'userId' ? : number

};
type GetCourtResponse = {
    'court' ? : CourtDomain

};
type UpdateLawfirmSettingsRequest = {
    'settings' ? : LawfirmSettingsDomain

};
type GetReferralsHistoryResponse = {
    'referrals' ? : Array < ReferralResponse > | ReferralResponse

};
type FindDisputesRequest = {
    'disputeStatus': string

};
type Map« string, string» = {};
type GetUserResponse = {
    'user' ? : UserDomain

};
type ViolationInputRequest = {
    'violationId' ? : number

};
type CaseNotesDomain = {
    'lawfirmCaseNotes': string

        'otrCaseNotes': string

};
type NotificationEvents = {
    'events' ? : {}

    'totalUnreadCount' ? : number

};
type Alert = {
    'actionType' ? : "ANNOUNCEMENT" | "ENGAGEMENT_LETTER"

    'alertId' ? : string

        'alertType' ? : "SUCCESS" | "INFO" | "WARNING" | "ERROR"

    'bannerMessage' ? : string

        'clickThruUrl' ? : string

        'hexColor' ? : number

};
type CaseFinancialsSummary = {
    'caseBaseCost' ? : number

        'clientCostBeforeReferrals' ? : number

        'clientTotalCost' ? : number

        'lawfirmAssumedCost' ? : number

        'lawfirmCaseFees' ? : number

        'lawfirmCaseId' ? : number

        'lawfirmEarningsForCase' ? : number

        'lawfirmRefcodeAdjustmentInCents' ? : number

        'lawfirmTotalFee' ? : number

        'otrCommissionChargedToLawfirm' ? : number

        'otrEarnings' ? : number

        'otrRefcodeAdjustmentInCents' ? : number

        'paymentPlans' ? : Array < CasePaymentPlanResponse > | CasePaymentPlanResponse

        'paymentProcessingFeeActual' ? : number

        'paymentProcessingFeeChargedToLawfirm' ? : number

        'platformFee' ? : number

};
type HashMap« string, object» = {};
type UpdateUserDetailsRequest = {
    'user' ? : UserDomain

};
type TicketReviewRequest = {
    'citationId' ? : number

        'citationState' ? : string

        'contactMethod' ? : string

        'freshDeskTicket' ? : FreshDeskTicket

        'freshdeskTicketId' ? : number

        'lastBookingDateUtc' ? : Timestamp

        'source' ? : "OTR_EXIT_POPUP" | "TICKET_REVIEW_PAGE"

    'status' ? : string

        'submissionDateUtc' ? : Timestamp

        'ticketEvaluationRequestId' ? : number

        'userId' ? : number

        'violation' ? : string

        'visitorContactInfo' ? : string

        'visitorName' ? : string

};
type CreateCitationRequest = {
    'clientType': "UNKNOWN" | "IOS" | "ANDROID" | "MOBILE_WEBAPP" | "DESKTOP_WEBAPP" | "OTR_LAWFIRM_PORTAL" | "OTR_ADMIN_CONSOLE" | "OTR_WEBSITE" | "OTR_EXPLORER" | "FRESH_DESK" | "LOCALHOST" | "DMV_ORG"

        'emailAddress': string

        'firstName': string

        'imageContentType': string

        'rawImageData': string

};
type CustomerLead = {
    'caseDescription' ? : string

        'channel' ? : "UNKNOWN" | "DMV_ORG" | "DMV_COM" | "NOLO" | "PHOTO_ENFORCED" | "RIDE_SHARING_DRIVER" | "EDUCATED_DRIVER" | "RIDE_SHARE_GUY"

    'emailAddress' ? : string

        'fineInCents' ? : number

        'firstName' ? : string

        'hasCourtDate' ? : boolean

        'lastName' ? : string

        'licenseType' ? : string

        'phoneNumber' ? : string

        'state' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

    'violation' ? : string

        'zipCode' ? : string

};
type DripWebhookEvent = {
    'data' ? : DripWebhookData

        'event' ? : string

        'occurred_at' ? : DateTime

};
type DateTime = {
    'chronology' ? : Chronology

        'millis' ? : number

};
type SqlResponse = {
    'results' ? : Results

};
type DripWebhookData = {
    'account_id' ? : string

        'properties' ? : {}

    'subscriber' ? : Subscriber

};
type GetCourtsByQueryResponse = {
    'courts' ? : Array < CourtDomain > | CourtDomain

        'numRecords' ? : number

};
type GenerateTemplateRequest = {
    'caseId' ? : string

        'citationId' ? : number

        'citationViolation' ? : string

        'emailTemplateId' ? : "CASUAL_FIRST_V1" | "CASUAL_SECOND_V1" | "TICKET_DUE_WA" | "NO_COVERAGE_AVAILABLE" | "INVALID_IMAGE_UPLOAD_1" | "PARKING_TICKET" | "CAMERA_TICKET_NMV" | "NO_COVERAGE_AVAILABLE_MISSING_COURT" | "TICKET_EVAL_WITH_CITATION" | "TICKET_EVAL_WITH_CITATION_2ND_FOLLOW_UP" | "TICKET_EVAL_WITH_CITATION_CLOSE_OUT" | "CASE_CANCELLED_NMV" | "CASE_CANCELLED_NO_LAWFIRM" | "CASE_CANCELLED_BY_USER" | "CASE_CANCELLED_OVERDUE" | "CASE_CANCELLED_TOO_SHORT_NOTICE" | "LAWFIRM_CONTACT_1_V1" | "LAWFIRM_CONTACT_2_V1" | "LAWFIRM_CONTACT_3_V1" | "LAWFIRM_CONTACT_4_V1" | "LAWFIRM_CONTACT_5_V1" | "LAWFIRM_CONTACT_6_V1" | "LAWFIRM_CONTACT_7_V1" | "LAWFIRM_CONTACT_8_V1" | "LAWFIRM_CONTACT_9_V1" | "LAWFIRM_CONTACT_10_V1" | "POST_WIN" | "POST_WIN_V2" | "POST_WIN_LAST_ASK" | "ATTICUS_ATTORNEY_CONTACT_1" | "SUNDAY_AFTERNOON_HELLO" | "AFTERNOON_HELLO_2" | "FRIDAY_INTRO" | "LAWYER_POST_COURT_REMINDER"

    'recipientUserId' ? : number

};
type CreateReferralCodeResponse = {
    'referralCode' ? : string

};
type CaseChargeDomain = {
    'caseId' ? : string

        'creationDateUtc' ? : Timestamp

        'lawfirmCaseId' ? : number

        'lawfirmServiceCharge' ? : number

        'otrReferralFee' ? : number

        'processingFeeChargedToLawfirm' ? : number

        'stripeCharge' ? : StripeChargeDomain

        'stripeTransactionId' ? : string

};
type MarkCaseAsResolvedRequest = {
    'adjustedFineAmount' ? : number

        'adjustedPointCount' ? : number

        'originalPointCount' ? : number

        'resolutionStatus' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'resolutionSummary' ? : string

};
type LawfirmSettingsDomain = {
    'acceptsAccidents': boolean

        'acceptsPastDue': boolean

        'defaultTrafficTicketFee': number

        'isVacationMode': boolean

        'latestCaseAssignmentDateUtc': Timestamp

        'maxCaseCapacity': number

        'mvsRecipient': string

        'referralFee': number

        'referralFeeType': "PERCENT" | "FLAT_FEE_IN_CENTS"

};
type PostNewCaseMessageRequest = {
    'messageDomain': MessageInputDomain

};
type CitationInputRequest = {
    'address': AddressDomain

        'citationIssueDateUTC': Timestamp

        'clientEmailAddress': string

        'clientFirstName': string

        'court': CourtDomain

        'documentUrlToConvert': string

        'fineAmount': number

        'involvesAccident': boolean

        'isDismissedFromContactList': boolean

        'isPastDue': boolean

        'ticketNumber': string

        'userId': number

        'violationCount': number

        'violations': Array < TrafficViolationInputRequest > | TrafficViolationInputRequest

};
type CaseWithCoverageObtained = {
    'caseCreationDateUtc' ? : Timestamp

        'caseId' ? : string

        'county' ? : string

        'courtName' ? : string

        'fee' ? : number

        'lawfirmId' ? : number

        'lawfirmName' ? : string

        'state' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

};
type UpdateAddressRequest = {
    'address' ? : AddressDomain

};
type GetLawfirmTransactionsResponse = {
    'transactions' ? : Array < LawfirmTransactionDomain > | LawfirmTransactionDomain

};
type Map« string, int» = {};
type UserToContact = {
    'citationId': number

        'userIdToContact': number

};
type AddExtraAccountRequest = {
    'newEmailAddress' ? : string

        'password' ? : string

};
type CustomerReviewResponse = {
    'reviews' ? : Array < CustomerReview > | CustomerReview

};
type UserReferralSourceTypeDomain = {
    'imageUrl' ? : string

        'isDisplayed' ? : boolean

        'sourceDesc' ? : string

        'sourceName' ? : string

        'sourceTypeId' ? : number

        'uiDisplayText' ? : string

};
type CaseFinancialsDomain = {
    'caseBaseCost' ? : number

        'caseFinancialsId' ? : string

        'chargeDescription' ? : string

        'chargeRunAtDate' ? : string

        'clientCostBeforeReferrals' ? : number

        'clientTotalCost' ? : number

        'lawfirmAssumedCost' ? : number

        'lawfirmCaseFees' ? : number

        'lawfirmCaseId' ? : number

        'lawfirmEarningsForCase' ? : number

        'lawfirmReferralCodeAdjustmentInCents' ? : number

        'lineItemOwner' ? : "LAWFIRM" | "OTR"

    'multipleViolationSurcharge' ? : number

        'mvsRecipient' ? : string

        'otrCommissionActual' ? : number

        'otrCommissionCharged' ? : number

        'otrEarnings' ? : number

        'otrReferralCodeAdjustmentInCents' ? : number

        'otrReferralFee' ? : number

        'paymentProcessingFeeActual' ? : number

        'paymentProcessingFeeChargedToLawfirm' ? : number

        'platformFee' ? : number

        'referralRate' ? : number

};
type ResetUserPasswordRequest = {
    'newPasswordPlainText' ? : string

        'userId' ? : number

};
type VerifyPasswordResetTokenResponse = {
    'isTokenValid' ? : boolean

        'userId' ? : number

};
type LawfirmDocument = {
    'clientDocRequirement' ? : "NONE" | "ACK" | "SIGNATURE" | "NOTARY"

    'docDate' ? : string

        'docExt' ? : string

        'docId' ? : string

        'docType' ? : "ENGAGEMENT_LETTER" | "OTHER_IMAGE"

    'docUrl' ? : string

};
type OutgoingContactDomain = {
    'actionType' ? : string

        'caseId' ? : string

        'citationId' ? : number

        'contactSentDateUtc' ? : string

        'emailTemplateId' ? : number

        'emailTemplateName' ? : string

        'outgoingContactId' ? : number

        'recipientEmailAddress' ? : string

        'recipientUserId' ? : number

        'senderFirstName' ? : string

        'senderLastName' ? : string

        'senderUserId' ? : number

};
type AuthorizeChargeForInvoiceLineItemRequest = {
    'cardId': string

};
type AddCaseMessageResponse = {
    'messageAdded' ? : CaseMessageDomain

};
type GetCountiesResponse = {
    'counties' ? : Array < CountyDomain > | CountyDomain

};
type GetStripeConnectedAccountResponse = {
    'stripeConnectedAccount' ? : StripeConnectedAccountDomain

};
type UpdateCaseDeclineTicketsRequest = {
    'clientDeclineTicketId' ? : number

        'lawfirmDeclineTicketId' ? : number

        'lawfirmId' ? : number

};
type SaveLawyerLeadRequest = {
    'city' ? : string

        'email' ? : string

        'firstname' ? : string

        'lastname' ? : string

        'leadProvidedSource' ? : "NMA" | "GOOGLE_AD" | "DIRECT_MAIL" | "EMAIL_AD" | "OTHER" | "UNKNOWN"

    'phoneNumber' ? : string

        'state' ? : string

        'website' ? : string

};
type LobEvent = {
    'enabled_for_test' ? : boolean

        'id' ? : string

        'resource' ? : string

};
type GetLawfirmSummaryCasesResponse = {
    'activeCasesCount' ? : number

        'cases' ? : Array < CaseSummaryDomain > | CaseSummaryDomain

        'numMatchingCases' ? : number

        'pendingCasesCount' ? : number

};
type GetCasesWithCoverageObtainedResponse = {
    'cases' ? : Array < CaseWithCoverageObtained > | CaseWithCoverageObtained

};
type ChangeUserPasswordRequest = {
    'plainTextPasswordNew': string

        'plainTextPasswordOld': string

        'userId': number

};
type UserDomain = {
    'address' ? : AddressDomain

        'creationDateUtc' ? : Timestamp

        'dob' ? : string

        'emailAddress' ? : string

        'firstname' ? : string

        'fullName' ? : string

        'gender' ? : string

        'isEmailConfirmed' ? : boolean

        'isEnabled' ? : boolean

        'isTestUser' ? : boolean

        'isUnsubscribed' ? : boolean

        'lastname' ? : string

        'loginProvider' ? : "FACEBOOK" | "TWITTER"

    'password' ? : string

        'passwordEncrypted' ? : string

        'phoneNumbers' ? : Array < PhoneNumberDomain > | PhoneNumberDomain

        'profilePicture' ? : string

        'protectionPlanMembershipId' ? : string

        'protectionPlanUsername' ? : string

        'roles' ? : Array < UserRoleDomain > | UserRoleDomain

        'userAlias' ? : string

        'userId' ? : number

};
type UpdateCourtRequest = {
    'court' ? : CourtDomain

};
type DripRemoveRequest = {
    'dripAccountId' ? : string

        'dripAction' ? : "DELETE" | "UNSUBSCRIBE"

    'emailAddress' ? : string

        'ticketIssueId' ? : string

};
type FindMatchingUsersRequest = {
    'emailAddress' ? : string

        'firstName' ? : string

        'isTestUser' ? : boolean

        'lastName' ? : string

        'phoneNumber' ? : string

};
type FreshdeskWebhookRequest = {
    'agentEmail' ? : string

        'requesterEmail' ? : string

        'requesterFirstName' ? : string

        'status' ? : string

        'subject' ? : string

        'ticketType' ? : string

};
type TrafficViolationTypeDomain = {
    'insuranceIncreasePercent' ? : number

        'isMovingViolation' ? : boolean

        'trafficViolationDesc' ? : string

        'trafficViolationTypeId' ? : number

        'violationClassification' ? : "NON_REPORTABLE" | "NON_MOVING" | "INFRACTION" | "MISDEMEANOR" | "FELONY" | "WOBBLER_TO_MISDEMEANOR" | "WOBBLER_TO_FELONY"

    'violationCode' ? : string

};
type CreateReferralSourceForCitation = {
    'referralSourceData' ? : {}

};
type PotentialCustomerDomain = {
    'accountEmailAddress' ? : string

        'activeEmailAddress' ? : string

        'caseId' ? : string

        'caseStatus' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'caseStatusId' ? : number

        'caseStatusName' ? : string

        'citationEmailAddress' ? : string

        'citationId' ? : number

        'citationIssueDateUtc' ? : Timestamp

        'citationSubmitDateUtc' ? : Timestamp

        'clientFirstName' ? : string

        'courtCity' ? : string

        'courtCounty' ? : string

        'courtId' ? : number

        'courtName' ? : string

        'courtState' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

    'firstName' ? : string

        'hasDuplicateSubmission' ? : boolean

        'isCitationDismissedFromContactList' ? : boolean

        'isUnwantedDuplicate' ? : boolean

        'lastBookingDateUtc' ? : Timestamp

        'lastName' ? : string

        'lawfirmId' ? : number

        'lawfirmName' ? : string

        'outgoingContacts' ? : Array < OutgoingContactDomain > | OutgoingContactDomain

        'ticketLocationState' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

    'ticketsFought' ? : number

        'userCreationDateUtc' ? : Timestamp

        'userId' ? : number

};
type AddPenaltyRequest = {
    'penaltiesToAdd' ? : Array < PenaltyRequest > | PenaltyRequest

};
type GetEmailTemplateResponse = {
    'templateName' ? : string

        'templateText' ? : string

};
type DirectMailTemplateResponse = {
    'templates' ? : Array < DirectMailTemplate > | DirectMailTemplate

};
type NoLawyerAvailableRequest = {
    'offerPrice' ? : string

        'phoneNumber' ? : string

};
type SocialLoginRequest = {
    'clientType': "UNKNOWN" | "IOS" | "ANDROID" | "MOBILE_WEBAPP" | "DESKTOP_WEBAPP" | "OTR_LAWFIRM_PORTAL" | "OTR_ADMIN_CONSOLE" | "OTR_WEBSITE" | "OTR_EXPLORER" | "FRESH_DESK" | "LOCALHOST" | "DMV_ORG"

        'httpReferrer': string

        'otherNote': string

        'referralCode': string

        'referralSourceData': {}

        'userAccessToken': string

        'userReferralSourceTypeId': number

};
type GetPotentialCustomersRequest = {
    'endDate': string

        'includeDismissedCitations': boolean

        'orderBy': string

        'startDate': string

};
type GetLawfirmPaymentMethodsResponse = {
    'paymentMethods' ? : Array < StripePaymentSourceDomain > | StripePaymentSourceDomain

        'totalRecords' ? : number

};
type GetCountOfMatchingUsersRequest = {
    'emailAddress': string

};
type GetReferralCodesResponse = {
    'referralCodes' ? : Array < GetReferralCodeResponse > | GetReferralCodeResponse

};
type Results = {
    'resultSet' ? : Array < Map« string, object» > | Map« string, object»

};
type FuturePayment = {
    'amountDueInCents' ? : number

        'dueDate' ? : string

        'paymentStatus' ? : "SCHEDULED" | "PAID" | "ERROR" | "CANCELLED" | "UNKNOWN"

};
type ClientActionRequiredRequest = {
    'caseActionItem' ? : "NO_REFUND_OFFERED" | "FEE_ADJUSTMENT" | "REQUEST_COURT_EXTENSION"

    'caseId' ? : string

        'includeDeclineReason' ? : boolean

};
type CaseActionDomain = {
    'actionDate' ? : Timestamp

        'actionNote' ? : string

        'actionType' ? : "CITATION_DATA_EXTRACTED" | "REVIEWED_BY_LAWFIRM" | "TICKET_MAILED_TO_COURT" | "NOTICE_OF_APPEARANCE_FILED" | "DISCOVERY_REQUESTED" | "DISCOVERY_RECEIVED" | "COURT_DATE_SCHEDULED" | "OTHER"

    'caseActionId' ? : number

};
type StripeConnectedAccountDomain = {
    'accessToken' ? : string

        'accountId' ? : string

        'businessName' ? : string

        'email' ? : string

        'publishableKey' ? : string

        'refreshToken' ? : string

        'scope' ? : string

        'tokenType' ? : string

};
type CaseMessageDomain = {
    'authorFirstname' ? : string

        'authorLastname' ? : string

        'authorRoleType' ? : "LAWYER" | "DEFENDANT" | "ADMIN" | "PARTNER" | "UNKNOWN"

    'isDeleted' ? : boolean

        'mediaType' ? : "PDF" | "IMAGE"

    'mediaUrl' ? : string

        'messageBody' ? : string

        'messageId' ? : number

        'messageSentDateUtc' ? : Timestamp

};
type GetLawfirmsResponse = {
    'lawfirms' ? : Array < LawfirmDomain > | LawfirmDomain

        'numRecords' ? : number

};
type GetCaseMessagesResponse = {
    'messages' ? : Array < CaseMessageDomain > | CaseMessageDomain

        'totalRecords' ? : number

};
type SetLawfirmCaseDecisionRequest = {
    'caseDecisionStatus' ? : "CREATED" | "PENDING" | "ACCEPTED" | "DECLINED" | "EXPIRED" | "REMATCHED" | "REMATCHED_REFERRAL"

    'reason' ? : string

};
type DirectMailGetRequest = {
    'toAddress' ? : AddressDomain

        'userId' ? : string

};
type LostCaseWithTransferNotReversed = {
    'caseId' ? : string

        'caseResolutionDateUtc' ? : Timestamp

        'clientCost' ? : number

        'firstName' ? : string

        'lastName' ? : string

        'lawfirmEarnings' ? : number

        'lawfirmId' ? : number

        'lawfirmName' ? : string

        'otrMarketingFee' ? : number

        'refundOwner' ? : "OTR" | "LAWFIRM" | "NONE"

    'stripeFee' ? : number

        'userId' ? : number

};
type GetLawfirmResponse = {
    'lawfirm' ? : LawfirmDomain

};
type UpdateRefundEligibilityForCaseRequest = {
    'refundOwner' ? : "OTR" | "LAWFIRM" | "NONE"

};
type LawfirmLeadDomain = {
    'isLawyerEmailConfirmed' ? : boolean

        'isLawyerEnabled' ? : boolean

        'isTestLawfirm' ? : boolean

        'isTestLawyer' ? : boolean

        'isVacationMode' ? : boolean

        'lawfirmAddressState' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING"

    'lawfirmCity' ? : string

        'lawfirmCreatedByUserId' ? : number

        'lawfirmId' ? : number

        'lawfirmName' ? : string

        'lawfirmPostalCode' ? : string

        'lawfirmState' ? : "ONBOARDING" | "IN_TRIAL" | "ESTABLISHED" | "UNDER_REVIEW" | "TERMINATED_FRAUD" | "TERMINATED_POOR_SUCCESS" | "TERMINATED_POOR_SERVICE" | "TEMPORARILY_TURNED_OFF" | "LAWFIRM_LEAD" | "LAWFIRM_NOT_INTERESTED" | "LAWFIRM_INTERESTED" | "FUTURE_LEAD" | "NOT_INTERESTED_REFUND_ETHICS" | "NOT_INTERESTED_FEE_SPLITTING_ETHICS" | "DUPLICATE" | "ACCOUNT_CLOSED"

    'lawyerEmailAddress' ? : string

        'lawyerFirstName' ? : string

        'lawyerLastName' ? : string

        'lawyerUserId' ? : number

        'leadOwnerFirstName' ? : string

        'leadOwnerLastName' ? : string

        'outgoingContacts' ? : Array < OutgoingContactDomain > | OutgoingContactDomain

};
type PostFeedbackRequest = {
    'feedback': FeedbackDomain

};
type UserDetails = {
    'emailAddress' ? : string

        'firstName' ? : string

        'lastName' ? : string

};
type FreshDeskRequester = {
    'email' ? : string

        'name' ? : string

};
type SubscribeRequest = {
    'subscriber': SubscriberDomain

};
type CreateCitationResponse = {
    'citation' ? : CitationDomain

};
type PhoneNumberDomain = {
    'entityType' ? : "USER" | "LAWYER" | "LAWFIRM" | "CASE" | "CITATION" | "COURT"

    'extension' ? : string

        'phoneNumber' ? : string

        'phoneNumberId' ? : number

        'referenceId' ? : number

        'type' ? : "MOBILE" | "OFFICE" | "HOME"

};
type CitationDomain = {
    'address' ? : AddressDomain

        'citationId' ? : number

        'citationIssueDateUTC' ? : Timestamp

        'clientEmailAddress' ? : string

        'clientFirstName' ? : string

        'clientType' ? : "UNKNOWN" | "IOS" | "ANDROID" | "MOBILE_WEBAPP" | "DESKTOP_WEBAPP" | "OTR_LAWFIRM_PORTAL" | "OTR_ADMIN_CONSOLE" | "OTR_WEBSITE" | "OTR_EXPLORER" | "FRESH_DESK" | "LOCALHOST" | "DMV_ORG"

    'court' ? : CourtDomain

        'documentUrlToConvert' ? : string

        'fineAmount' ? : number

        'involvesAccident' ? : boolean

        'isDeleted' ? : boolean

        'isDismissedFromContactList' ? : boolean

        'isPastDue' ? : boolean

        'originalPointCount' ? : number

        'ticketImageUrl' ? : string

        'ticketLocationState' ? : string

        'ticketLocationTags' ? : string

        'ticketNumber' ? : string

        'userId' ? : number

        'violationCategoryName' ? : string

        'violationCount' ? : number

        'violations' ? : Array < TrafficViolationTypeDomain > | TrafficViolationTypeDomain

};
type StripeCardDomain = {
    'addressLine1' ? : string

        'addressLine1Check' ? : string

        'addressZip' ? : string

        'addressZipCheck' ? : string

        'brand' ? : string

        'cardId' ? : string

        'country' ? : string

        'cvcCheck' ? : string

        'expMonth' ? : number

        'expYear' ? : number

        'id' ? : string

        'isDefault' ? : boolean

        'last4' ? : string

        'object' ? : string

        'ownerFullName' ? : string

};
type MatchCaseResponse = {
    'chanceOfSuccess' ? : number

        'projectedInsuranceCostInCents' ? : number

        'theCase' ? : MatchInnerCaseResponse

};
type GetCitationResponse = {
    'citation' ? : CitationDomain

};
type Collection« NotificationEvent» = {};
type AddCardToStripeAccountResponse = {
    'cardId' ? : string

        'default' ? : boolean

        'id' ? : string

};
type GetUserReferralSourceTypesResponse = {
    'sources' ? : Array < UserReferralSourceTypeDomain > | UserReferralSourceTypeDomain

};
type RefundCaseChargesResponse = {
    'caseId' ? : string

};
type GetCasesWithUncapturedChargesResponse = {
    'cases' ? : Array < CaseDomain > | CaseDomain

};
type GetCurrentUserResponse = {
    'isUserAuthenticated' ? : boolean

        'isUserLoggedIn' ? : boolean

        'isUserRememberMeAuthenticated' ? : boolean

        'user' ? : UserDomain

};
type CaseFinancialLineItemResponse = {
    'feeAmount' ? : number

        'feeDescription' ? : string

};
type ValidateDirectMailResponse = {
    'otrError' ? : "UNAUTHORIZED" | "NOT_AUTHENTICATED" | "EXPECTED_ROLE_MISSING" | "INVALID_STATE" | "DATA_ACCESS_ERROR" | "RESOURCE_NOT_FOUND" | "DUPLICATE_ENTRY" | "AUTHENTICATION_FAILED" | "ACCOUNT_DISABLED" | "BAD_CREDENTIALS" | "AUTHENTICATION_SERVICE_FAILURE" | "AUTHENTICATION_CREDENTIALS_NOT_FOUND" | "ACCESS_DENIED" | "AUTHORIZATION_SERVICE_FAILURE" | "MUST_BE_POSITIVE" | "UNEXPECTED_NULL_INPUT" | "STATE_NOT_SUPPORTED" | "INVALID_API_TOKEN" | "INVALID_PARAMETER_VALUE" | "ROLE_NOT_SUPPORTED" | "UNKNOWN" | "URL_ENTITY_MISMATCH" | "USER_DOES_NOT_MATCH_CITATION" | "CITATION_DOES_NOT_MATCH_USER" | "CITATION_NOT_OWNED_BY_USER" | "CASE_ALREADY_EXISTS" | "CASE_USER_MISMATCH" | "EMAIL_ALREADY_IN_USE" | "CASE_NOT_CONFIRMED" | "CASE_MATCH_FAILED" | "NO_ACCOUNT_WITH_EMAIL" | "LAW_FIRM_NEEDS_ADDRESS" | "CASE_STATUS_NOT_ALLOWED" | "CASE_ID_COLLISION" | "USER_IS_NOT_THE_OWNER" | "COURT_MISSING_ADDRESS" | "NO_CASE_OWNER" | "MISSING_CASE" | "CASE_ALREADY_RESOLVED" | "OWNER_CASE_MESSAGE_MISMATCH" | "DUPLICATE_COURT" | "USER_ALREADY_LOGGED_IN" | "STRIPE_ERROR" | "NO_STRIPE_ACCOUNT" | "CASE_ALREADY_PAID" | "STRIPE_OAUTH_CONNECT_FAILED" | "INVALID_STRIPE_ACCOUNT" | "UNEXPECTED_NUMBER_OF_CHARGES" | "CASE_NOT_ACCEPTED_BY_LAWFIRM" | "INVALID_STRIPE_REQUEST" | "STRIPE_AUTHENTICATION_EXCEPTION" | "STRIPE_API_CONNECTION_EXCEPTION" | "STRIPE_CARD_EXCEPTION" | "STRIPE_API_EXCEPTION" | "MULTIPLE_REFUNDS_ON_CHARGE" | "NO_CHARGES_ON_CASE" | "CHARGE_ALREADY_CAPTURED" | "CHARGE_EXPIRED" | "CHARGE_REFUNDED" | "AUTHORIZED_CHARGES_ON_CASE" | "LINE_ITEM_MISSING_RECIPIENT" | "INVALID_LINE_ITEM" | "FAILED_TO_REVERSE_TRANSFER" | "STRIPE_TRANSFER_NOT_FOUND" | "TRANSFER_ID_DOESNT_MATCH_CHARGE" | "TRANSFER_REVERSAL_NOT_ALLOWED" | "IMAGE_NOT_COMPRESSED_PROPERLY" | "INCORRECT_ENCODING" | "MEDIA_TYPE_INCORRECT" | "IO_ERROR" | "S3_CLIENT_FAILED" | "S3_SERVER_FAILED" | "DRIP_DEPENDENCY_FAILURE" | "FRESHDESK_TICKET_NOT_FOUND" | "NO_LAWFIRM_AVAILABLE" | "DUPLICATE_MESSAGE_ATTEMPT" | "EMAIL_ADDRESS_BLACKLISTED" | "EMAIL_NOT_CONFIRMED" | "CANCELLATION_WINDOW_CLOSED" | "CURRENT_PASSWORD_INCORRECT" | "SOCIAL_PROFILE_MISSING_EMAIL" | "LOB_ADDRESS_CREATION_FAILURE" | "LOB_POSTCARD_CREATION_FAILURE" | "LOB_CANCEL_MAIL_DELIVERY_FAILURE" | "INVALID_CITATION_ID" | "INVALID_CASE_ID" | "INVALID_LAWFIRM" | "INVALID_EMAIL_ADDRESS" | "INVALID_PASSWORD" | "INVALID_ROLE_TYPE" | "INVALID_SUBSCRIPTION_TYPE" | "INVALID_COURT_ID" | "INVALID_CASE_ACTION_ID" | "INVALID_RESOLUTION_STATUS" | "INVALID_USER_ID" | "INVALID_PASSWORD_RESET_TOKEN" | "INVALID_TRAFFIC_VIOLATION" | "INVALID_DATE" | "INVALID_INTERNET_ADDRESS" | "INVALID_LAWYER_ID" | "INVALID_INVOICE_LINE_ITEM_ID" | "INVALID_STRIPE_TRANSACTION_ID" | "INVALID_DOCUMENT_ID" | "INVALID_MESSAGE_ID" | "INVALID_TICKET_ID" | "INVALID_FIRST_NAME" | "INVALID_LAST_NAME" | "INVALID_TICKET_REVIEW_ID" | "INVALID_STRIPE_CHARGE_ID" | "INVALID_ADDRESS_ID" | "INVALID_DISPUTE_ID" | "MISSING_REQUEST_BODY" | "MISSING_COURT_ID" | "MISSING_NUM_VIOLATIONS" | "MISSING_IMAGE_URL" | "MISSING_STRIPE_TOKEN" | "MISSING_FIRSTNAME" | "MISSING_LASTNAME" | "MISSING_PASSWORD" | "MISSING_SUBSCRIBER" | "MISSING_FEEDBACK_CONTENT" | "MISSING_ACTION_TYPE" | "MISSING_RESOLUTION_STATUS" | "MISSING_ADJUSTED_FINE_AMOUNT" | "MISSING_EMAIL_ADDRESS" | "MISSING_TICKET_ISSUE_DATE" | "MISSING_SENDER_PHONE_NUMBER" | "MISSING_SENDER_EMAIL" | "MISSING_LAWFIRM_ID" | "MISSING_LAWYER_ID" | "MISSING_PARAMETER" | "MISSING_CITATION_ID" | "NOTIFICATION_TOO_LONG" | "NOTIFICATION_TO_SELF" | "INVALID_PUSH_TOKEN" | "NOTIFICATION_INCORRECT_ROLE" | "RESET_TOKEN_EXPIRED" | "CODE_ALREADY_EXISTS_FOR_DRIVER" | "CODE_DOES_NOT_EXIST" | "CODE_HAS_EXPIRED" | "CODE_EXCEEDED_MAX_USAGE" | "CODE_REFERRER_BENEFITS_NOT_AUTHORIZED" | "CODE_BENEFIT_TYPE_NOT_SUPPORTED" | "CODE_IS_NOT_ACTIVE" | "CODE_NOT_YET_APPROVED" | "CODE_IS_ALREADY_TAKEN" | "CODE_NOT_SUPPORTED_BY_LAWFIRM" | "USER_CANT_USE_OWN_CODE" | "EMAIL_ADDRESS_ALREADY_SUBSCRIBED" | "INELIGIBLE_STATUS_FOR_TRANSFER" | "TRANSFER_TO_SAME_LAWFIRM" | "TRANSFER_NOT_SAFE" | "COURT_NOT_SUPPORTED_BY_LAWFIRM" | "LAWFIRM_NOT_ELIGIBLE" | "EMAIL_NOT_SENT" | "EMAIL_ALREADY_SENT" | "INVALID_EMAIL_TEMPLATE" | "MISSING_RECIPIENT_EMAIL" | "INVALID_RECIPIENT_LIST" | "TEMPLATE_NOT_SUPPORTED" | "NO_INSURANCE" | "ARAG_NOT_CAPTURED" | "REFUND_NOT_ELIGIBLE" | "DIRECT_MAIL_SENT_ALREADY" | "DIRECT_MAIL_TEMPLATE_NOT_EXIST" | "DIRECT_MAIL_RECONCILATION_ID_NOT_EXIST" | "DIRECT_MAIL_TEMPLATE_DUPLICATE_DETECTED" | "PLAID_ERROR" | "PAYMENT_PLAN_LEGAL_FEE_HAS_CENTS"

};
type GetPaymentMethodsForUserResponse = {
    'paymentMethods' ? : Array < StripePaymentSourceDomain > | StripePaymentSourceDomain

        'totalRecords' ? : number

};
type PreviewDocumentRequest = {
    'clientName' ? : string

        'legalFee' ? : string

        'textProvidedByLawfirm' ? : string

};
type FeedbackDomain = {
    'appVersion': string

        'body': string

        'device': string

};
type GetCitationsWithMissingFieldsRequest = {
    'numberOfDays': number

};
type GetTicketReviewResponse = {
    'ticketReview' ? : TicketReviewRequest

};
type DirectMailTemplate = {
    'mailDimensions' ? : string

        'mailTemplateBackUrl' ? : string

        'mailTemplateFrontUrl' ? : string

        'mailTemplateId' ? : number

        'mailTemplateName' ? : string

        'mailType' ? : "POST_CARD" | "LETTER" | "CHECK"

};
type GetLawfirmLeadsResponse = {
    'lawfirmLeads' ? : Array < LawfirmLeadDomain > | LawfirmLeadDomain

        'numRecords' ? : number

};
type GetPendingAndRefusedCasesRequest = {};
type StripeChargeDomain = {
    'amount' ? : number

        'applicationFeeId' ? : string

        'capturedDateUtc' ? : Timestamp

        'destinationAccountId' ? : string

        'isExpired' ? : boolean

        'isTransferReversed' ? : boolean

        'liveMode' ? : boolean

        'paymentSourceId' ? : string

        'platformFee' ? : number

        'refundDateUtc' ? : Timestamp

        'stripeCustomerId' ? : string

        'stripeTransactionId' ? : string

        'stripeTransferId' ? : string

        'transactionDateUtc' ? : Timestamp

};
type ListRevenueRequest = {
    'caseStatues' ? : Array < "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE" > | "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'endDate' ? : string

        'includeDismissedContacts' ? : boolean

        'includeOutgoingContacts' ? : boolean

        'startDate' ? : string

        'stateCode' ? : string

};
type LawfirmDomainPictureRequest = {
    'profileBase64ImageData': string

};
type SimpleCredentialsResponse = {
    'accessKeyId' ? : string

        'secretKey' ? : string

};
type SetCourtDateForCaseRequest = {
    'courtDate' ? : DateTime

        'sendNotificationEmailToClient' ? : boolean

};
type GetLawfirmInboxMessagesResponse = {
    'messages' ? : Array < LawfirmInboxMessageDomain > | LawfirmInboxMessageDomain

        'numMessages' ? : number

};
type ChargeDisputeDomain = {
    'cardBrand' ? : string

        'cardFunding' ? : string

        'caseId' ? : string

        'caseStatus' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'clientTicket' ? : FreshDeskTicket

        'clientTicketId' ? : number

        'disputeAmount' ? : number

        'disputeDateUtc' ? : Timestamp

        'disputeFee' ? : number

        'dueByDateUtc' ? : Timestamp

        'evidenceSubmittedDateUtc' ? : Timestamp

        'isTransferReversed' ? : boolean

        'lawfirmId' ? : number

        'lawfirmName' ? : string

        'lawfirmTicket' ? : FreshDeskTicket

        'lawfirmTicketId' ? : number

        'reason' ? : string

        'status' ? : string

        'stripeChargeId' ? : string

        'stripeCustomerId' ? : string

        'stripeDisputeId' ? : string

        'userFullName' ? : string

        'userId' ? : number

};
type SNSNotificationRequest = {
    'Message' ? : string

        'SubscribeURL' ? : string

        'Type' ? : string

        'UnsubscribeURL' ? : string

};
type MessageInputDomain = {
    'author': "LAWYER" | "DEFENDANT" | "ADMIN" | "PARTNER" | "UNKNOWN"

        'encodedMediaData': string

        'mediaType': "PDF" | "IMAGE"

        'messageBody': string

};
type Chronology = {};
type GetTrafficViolationTypesResponse = {
    'exclusionPatterns' ? : Array < string > | string

        'violationTypes' ? : Array < TrafficViolationTypeDomain > | TrafficViolationTypeDomain

};
type GetCaseResolutionStatusesResponse = {
    'statuses' ? : Array < CaseStatusDomain > | CaseStatusDomain

};
type SendDirectMailResponse = {
    'sentMail' ? : DirectMailContact

};
type CaseSummaryDomain = {
    'bookingConfirmedDate' ? : string

        'caseDecisionStatus' ? : "CREATED" | "PENDING" | "ACCEPTED" | "DECLINED" | "EXPIRED" | "REMATCHED" | "REMATCHED_REFERRAL"

    'caseId' ? : string

        'caseStatus' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE"

    'citationId' ? : number

        'citationIssueDateUTC' ? : string

        'courtDate' ? : string

        'courtName' ? : string

        'firstName' ? : string

        'involvesAccident' ? : boolean

        'lastName' ? : string

        'ticketImageUrl' ? : string

        'violationCount' ? : number

};
type CourtDomain = {
    'address' ? : AddressDomain

        'county' ? : string

        'countyId' ? : number

        'countyObj' ? : CountyDomain

        'courtCode' ? : string

        'courtId' ? : number

        'courtName' ? : string

        'courtNameAdditional' ? : string

        'courtType' ? : "DISTRICT" | "SUPERIOR" | "PROBATION" | "MUNICIPAL" | "JUVENILE" | "COUNTY_CLERK" | "VIOLATIONS_BUREAU" | "CIRCUIT"

    'otrTargetFee' ? : number

        'website' ? : string

};
type UpdateInvoiceLineItemRequest = {
    'lineItem': CaseFinancialsDomain

};
type GetPenaltyTypesResponse = {
    'penaltyTypes' ? : Array < GetPenaltyType > | GetPenaltyType

};
type LineItem = {
    'feeAmount' ? : number

        'lineItemType' ? : "BASE_LEGAL_FEE" | "MVS_FEE" | "WARRANT_FEE" | "FTA_FEE" | "CDL_FEE" | "OUT_OF_STATE_FEE" | "SHORT_NOTICE_FEE" | "LATE_NOTICE_FEE" | "SPEEDING_100_FEE" | "PAYMENT_PLAN_SERVICE_FEE"

};
type NotificationEvent = {
    'eventDate' ? : string

        'fullName' ? : string

        'message' ? : string

        'notificationId' ? : number

        'referenceId' ? : string

        'unreadCount' ? : number

};
type GetCountOfMatchingUsersResponse = {
    'numMatchingUsers' ? : number

};
type CaseTransferResponse = {
    'transfers' ? : Array < CaseTransferHistory > | CaseTransferHistory

};
type GetCaseDocumentResponse = {
    'documents' ? : Array < LawfirmCaseDocument > | LawfirmCaseDocument

};
type AuthorizeChargeForCaseRequest = {
    'cardId': string

        'casePaymentPlanId': number

};
type PriceMatchResponse = {
    'matchedLawfirm' ? : string

        'matchedPrice' ? : number

        'priceMatchStatus' ? : "PENDING" | "COMPLETE" | "REJECTED"

    'referralCode' ? : string

};
type PutDocumentRequest = {
    'clientDocReq' ? : "NONE" | "ACK" | "SIGNATURE" | "NOTARY"

    'docType' ? : "ENGAGEMENT_LETTER" | "OTHER_IMAGE"

    'textProvidedByLawfirm' ? : string

};
type CaseFuturePayment = {
    'dueDate' ? : string

        'dueNow' ? : boolean

        'feeAmount' ? : number

};
type PostCourtCoverageRequest = {
    'courts': Array < LawfirmCourtCoverageDomain > | LawfirmCourtCoverageDomain

};
type CaseViolationPenalty = {
    'penaltyFriendlyDescription' ? : string

        'penaltyType' ? : "TOTAL_BAIL_AMOUNT" | "INCARCERATION_MAX_DAYS" | "LICENSE_SUSPENSION_MAX_DAYS" | "DEMERIT_POINTS" | "MANDATORY_COURT_APPEARANCE_WITH_ATTORNEY" | "INCARCERATION_MIN_DAYS" | "MANDATORY_COURT_APPEARANCE"

    'penaltyValue' ? : string

};
type AuthorizeChargeLineItemResponse = {
    'stripeTransactionId' ? : string

};
type RefundCaseChargesRequest = {
    'caseId' ? : string

        'chargeTransactionIdList' ? : Array < string > | string

};
type AvailablePaymentPlan = {
    'paymentPlanDisplayName' ? : string

        'paymentPlanId' ? : number

        'paymentPlanType' ? : "ALL_UPFRONT" | "TWO_PAYMENTS_MONTHLY" | "THREE_PAYMENTS_HALF_FIRST"

};

type Logger = {
    log: (line: string) => any
};

/**
 * A service to handle your traffic tickets
 * @class OtrService
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export default class OtrService {

    private domain: string = "";
    private errorHandlers: CallbackHandler[] = [];

    constructor(domain ? : string, private logger ? : Logger) {
        if (domain) {
            this.domain = domain;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: CallbackHandler) {
        this.errorHandlers.push(handler);
    }

    private request(method: string, url: string, body: any, headers: any, queryParameters: any, form: any, reject: CallbackHandler, resolve: CallbackHandler) {
        if (this.logger) {
            this.logger.log(`Call ${method} ${url}`);
        }

        let req = (request as SuperAgentStatic)(method, url).query(queryParameters);

        Object.keys(headers).forEach(key => {
            req.set(key, headers[key]);
        });

        if (body) {
            req.send(body);
        }

        if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
            req.set('Content-Type', 'application/json');
        }

        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }

        req.end((error, response) => {
            if (error || !response.ok) {
                reject(error);
                this.errorHandlers.forEach(handler => handler(error));
            } else {
                resolve(response);
            }
        });
    }

    updateAddressUsingPUTURL(parameters: {
        'addressId': number,
        'request': UpdateAddressRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/addresses/{addressId}';

        path = path.replace('{addressId}', `${parameters['addressId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateAddress
     * @method
     * @name OtrService#updateAddressUsingPUT
     * @param {integer} addressId - addressId
     * @param {} request - request
     */
    updateAddressUsingPUT(parameters: {
        'addressId': number,
        'request': UpdateAddressRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/addresses/{addressId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{addressId}', `${parameters['addressId']}`);

            if (parameters['addressId'] === undefined) {
                reject(new Error('Missing required  parameter: addressId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    markAlertAsReadUsingDELETEURL(parameters: {
        'alertId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/alerts/{alertId}';

        path = path.replace('{alertId}', `${parameters['alertId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * markAlertAsRead
     * @method
     * @name OtrService#markAlertAsReadUsingDELETE
     * @param {string} alertId - userId
     */
    markAlertAsReadUsingDELETE(parameters: {
        'alertId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/alerts/{alertId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{alertId}', `${parameters['alertId']}`);

            if (parameters['alertId'] === undefined) {
                reject(new Error('Missing required  parameter: alertId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getAlertsUsingGETURL(parameters: {
        'userId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/alerts/{userId}';

        path = path.replace('{userId}', `${parameters['userId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getAlerts
     * @method
     * @name OtrService#getAlertsUsingGET
     * @param {string} userId - userId
     */
    getAlertsUsingGET(parameters: {
        'userId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/alerts/{userId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getUserInfoUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/authentication/user';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getUserInfo
     * @method
     * @name OtrService#getUserInfoUsingGET
     */
    getUserInfoUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/authentication/user';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    handleBounceComplaintEmailsUsingPOSTURL(parameters: {
        'request': SNSNotificationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/blacklists/ses/emails/';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * handleBounceComplaintEmails
     * @method
     * @name OtrService#handleBounceComplaintEmailsUsingPOST
     * @param {} request - request
     */
    handleBounceComplaintEmailsUsingPOST(parameters: {
        'request': SNSNotificationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/blacklists/ses/emails/';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json,text/plain';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    createBranchLinkUsingPOSTURL(parameters: {
        'request': CreateBranchLinkRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/branch/link';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * createBranchLink
     * @method
     * @name OtrService#createBranchLinkUsingPOST
     * @param {} request - request
     */
    createBranchLinkUsingPOST(parameters: {
        'request': CreateBranchLinkRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/branch/link';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCaseResolutionStatusesUsingGETURL(parameters: {
        'stateCode' ? : string,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/case-statuses/resolution-statuses';
        if (parameters['stateCode'] !== undefined) {
            queryParameters['stateCode'] = parameters['stateCode'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCaseResolutionStatuses
     * @method
     * @name OtrService#getCaseResolutionStatusesUsingGET
     * @param {string} stateCode - stateCode
     */
    getCaseResolutionStatusesUsingGET(parameters: {
        'stateCode' ? : string,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/case-statuses/resolution-statuses';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['stateCode'] !== undefined) {
                queryParameters['stateCode'] = parameters['stateCode'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCasesForClientUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCasesForClient
     * @method
     * @name OtrService#getCasesForClientUsingGET
     */
    getCasesForClientUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getAllActionsUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/actions';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getAllActions
     * @method
     * @name OtrService#getAllActionsUsingGET
     */
    getAllActionsUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/actions';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCaseStatusesUsingGETURL(parameters: {
        'categories' ? : Array < string > | string

        ,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/statuses';
        if (parameters['categories'] !== undefined) {
            queryParameters['categories'] = parameters['categories'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCaseStatuses
     * @method
     * @name OtrService#getCaseStatusesUsingGET
     * @param {array} categories - categories
     */
    getCaseStatusesUsingGET(parameters: {
        'categories' ? : Array < string > | string

        ,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/statuses';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['categories'] !== undefined) {
                queryParameters['categories'] = parameters['categories'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCaseUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCase
     * @method
     * @name OtrService#getCaseUsingGET
     * @param {string} caseId - caseId
     */
    getCaseUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    confirmBookingUsingPOSTURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * confirmBooking
     * @method
     * @name OtrService#confirmBookingUsingPOST
     * @param {string} caseId - caseId
     */
    confirmBookingUsingPOST(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateCaseUsingPUTURL(parameters: {
        'caseId': string,
        'caseFromRequest': CaseDomain,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateCase
     * @method
     * @name OtrService#updateCaseUsingPUT
     * @param {string} caseId - caseId
     * @param {} caseFromRequest - caseFromRequest
     */
    updateCaseUsingPUT(parameters: {
        'caseId': string,
        'caseFromRequest': CaseDomain,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['caseFromRequest'] !== undefined) {
                body = parameters['caseFromRequest'];
            }

            if (parameters['caseFromRequest'] === undefined) {
                reject(new Error('Missing required  parameter: caseFromRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    cancelCaseForClientUsingDELETEURL(parameters: {
        'caseId': string,
        'cancellationStatus' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE",
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);
        if (parameters['cancellationStatus'] !== undefined) {
            queryParameters['cancellationStatus'] = parameters['cancellationStatus'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * cancelCaseForClient
     * @method
     * @name OtrService#cancelCaseForClientUsingDELETE
     * @param {string} caseId - caseId
     * @param {string} cancellationStatus - cancellationStatus
     */
    cancelCaseForClientUsingDELETE(parameters: {
        'caseId': string,
        'cancellationStatus' ? : "UNCONFIRMED" | "CLIENT_CONFIRMED_UNPAID" | "STALE" | "NO_LAWFIRM_AVAILABLE" | "CLIENT_CONFIRMED" | "CASE_IN_PROGRESS" | "REFUSED_BY_LAWFIRM" | "DISMISSED" | "LOST" | "AMENDED_NO_FINE" | "AMENDED_FULL_FINE" | "AMENDED_REDUCED_FINE" | "AMENDED_INCREASED_FINE" | "DEFERRED" | "POINT_REDUCTION" | "DIVERSION" | "TRAFFIC_SCHOOL" | "AMENDED_TO_NMV" | "AMENDED_TO_INFRACTION" | "AMENDED_DOWN_WITHIN_CLASS" | "CANCELLED_BY_USER" | "CANCELLED_BY_LAWFIRM" | "CANCELLED_NO_LAWFIRM" | "CANCELLED_NMV" | "CANCELLED_ATTORNEY_AT_FAULT" | "CANCELLED_OVERDUE" | "CANCELLED_TOO_SHORT_NOTICE",
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['cancellationStatus'] !== undefined) {
                queryParameters['cancellationStatus'] = parameters['cancellationStatus'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addActionToCaseUsingPOSTURL(parameters: {
        'caseId': string,
        'request': AddActionToCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/actions';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addActionToCase
     * @method
     * @name OtrService#addActionToCaseUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    addActionToCaseUsingPOST(parameters: {
        'caseId': string,
        'request': AddActionToCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/actions';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getActionTimelineUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/actions/timeline';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getActionTimeline
     * @method
     * @name OtrService#getActionTimelineUsingGET
     * @param {string} caseId - caseId
     */
    getActionTimelineUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/actions/timeline';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listCostItemsForAttorneyUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/attorney/cost';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listCostItemsForAttorney
     * @method
     * @name OtrService#listCostItemsForAttorneyUsingGET
     * @param {string} caseId - caseId
     */
    listCostItemsForAttorneyUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/attorney/cost';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCaseChargesUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCaseCharges
     * @method
     * @name OtrService#getCaseChargesUsingGET
     * @param {string} caseId - caseId
     */
    getCaseChargesUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    captureAllCaseChargesUsingPOSTURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges/capture';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * captureAllCaseCharges
     * @method
     * @name OtrService#captureAllCaseChargesUsingPOST
     * @param {string} caseId - caseId
     */
    captureAllCaseChargesUsingPOST(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges/capture';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    refundChargesUsingPOSTURL(parameters: {
        'caseId': string,
        'request': RefundCaseChargesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges/refund';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * refundCharges
     * @method
     * @name OtrService#refundChargesUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    refundChargesUsingPOST(parameters: {
        'caseId': string,
        'request': RefundCaseChargesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges/refund';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    captureCaseChargeUsingPOSTURL(parameters: {
        'caseId': string,
        'stripeTransactionId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/capture';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{stripeTransactionId}', `${parameters['stripeTransactionId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * captureCaseCharge
     * @method
     * @name OtrService#captureCaseChargeUsingPOST
     * @param {string} caseId - caseId
     * @param {string} stripeTransactionId - stripeTransactionId
     */
    captureCaseChargeUsingPOST(parameters: {
        'caseId': string,
        'stripeTransactionId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/capture';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{stripeTransactionId}', `${parameters['stripeTransactionId']}`);

            if (parameters['stripeTransactionId'] === undefined) {
                reject(new Error('Missing required  parameter: stripeTransactionId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    refundCaseChargeUsingPOSTURL(parameters: {
        'caseId': string,
        'stripeTransactionId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/refund';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{stripeTransactionId}', `${parameters['stripeTransactionId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * refundCaseCharge
     * @method
     * @name OtrService#refundCaseChargeUsingPOST
     * @param {string} caseId - caseId
     * @param {string} stripeTransactionId - stripeTransactionId
     */
    refundCaseChargeUsingPOST(parameters: {
        'caseId': string,
        'stripeTransactionId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/charges/{stripeTransactionId}/refund';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{stripeTransactionId}', `${parameters['stripeTransactionId']}`);

            if (parameters['stripeTransactionId'] === undefined) {
                reject(new Error('Missing required  parameter: stripeTransactionId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addViolationsToCitationUsingPOSTURL(parameters: {
        'caseId': string,
        'request': AddViolationsToCitationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/citation/violations';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addViolationsToCitation
     * @method
     * @name OtrService#addViolationsToCitationUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    addViolationsToCitationUsingPOST(parameters: {
        'caseId': string,
        'request': AddViolationsToCitationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/citation/violations';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    removeViolationsFromCitationUsingDELETEURL(parameters: {
        'caseId': string,
        'violationTypes': Array < number > | number

        ,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/citation/violations/{violationTypes}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{violationTypes}', `${parameters['violationTypes']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * removeViolationsFromCitation
     * @method
     * @name OtrService#removeViolationsFromCitationUsingDELETE
     * @param {string} caseId - caseId
     * @param {array} violationTypes - violationTypes
     */
    removeViolationsFromCitationUsingDELETE(parameters: {
        'caseId': string,
        'violationTypes': Array < number > | number

        ,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/citation/violations/{violationTypes}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{violationTypes}', `${parameters['violationTypes']}`);

            if (parameters['violationTypes'] === undefined) {
                reject(new Error('Missing required  parameter: violationTypes'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCaseClientUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/client';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCaseClient
     * @method
     * @name OtrService#getCaseClientUsingGET
     * @param {string} caseId - caseId
     */
    getCaseClientUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/client';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getConversationUsingGETURL(parameters: {
        'caseId': string,
        'page' ? : number,
        'length' ? : number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/conversation';

        path = path.replace('{caseId}', `${parameters['caseId']}`);
        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['length'] !== undefined) {
            queryParameters['length'] = parameters['length'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getConversation
     * @method
     * @name OtrService#getConversationUsingGET
     * @param {string} caseId - caseId
     * @param {integer} page - page
     * @param {integer} length - length
     */
    getConversationUsingGET(parameters: {
        'caseId': string,
        'page' ? : number,
        'length' ? : number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/conversation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['page'] !== undefined) {
                queryParameters['page'] = parameters['page'];
            }

            if (parameters['length'] !== undefined) {
                queryParameters['length'] = parameters['length'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addMessageToConversationUsingPOSTURL(parameters: {
        'caseId': string,
        'request': PostNewCaseMessageRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/conversation';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addMessageToConversation
     * @method
     * @name OtrService#addMessageToConversationUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    addMessageToConversationUsingPOST(parameters: {
        'caseId': string,
        'request': PostNewCaseMessageRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/conversation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getMessageUsingGETURL(parameters: {
        'caseId': string,
        'messageId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/conversation/{messageId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{messageId}', `${parameters['messageId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getMessage
     * @method
     * @name OtrService#getMessageUsingGET
     * @param {string} caseId - caseId
     * @param {string} messageId - messageId
     */
    getMessageUsingGET(parameters: {
        'caseId': string,
        'messageId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/conversation/{messageId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{messageId}', `${parameters['messageId']}`);

            if (parameters['messageId'] === undefined) {
                reject(new Error('Missing required  parameter: messageId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteMessageUsingDELETEURL(parameters: {
        'caseId': string,
        'messageId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/conversation/{messageId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{messageId}', `${parameters['messageId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * deleteMessage
     * @method
     * @name OtrService#deleteMessageUsingDELETE
     * @param {string} caseId - caseId
     * @param {string} messageId - messageId
     */
    deleteMessageUsingDELETE(parameters: {
        'caseId': string,
        'messageId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/conversation/{messageId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{messageId}', `${parameters['messageId']}`);

            if (parameters['messageId'] === undefined) {
                reject(new Error('Missing required  parameter: messageId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    setCourtDateForCaseUsingPOSTURL(parameters: {
        'caseId': string,
        'request': SetCourtDateForCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/courtdate';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * setCourtDateForCase
     * @method
     * @name OtrService#setCourtDateForCaseUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    setCourtDateForCaseUsingPOST(parameters: {
        'caseId': string,
        'request': SetCourtDateForCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/courtdate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listCostItemsForCustomerUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/customer/cost';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listCostItemsForCustomer
     * @method
     * @name OtrService#listCostItemsForCustomerUsingGET
     * @param {string} caseId - caseId
     */
    listCostItemsForCustomerUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/customer/cost';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateDeclineTicketsUsingPUTURL(parameters: {
        'caseId': string,
        'request': UpdateCaseDeclineTicketsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/decline-tickets';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateDeclineTickets
     * @method
     * @name OtrService#updateDeclineTicketsUsingPUT
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    updateDeclineTicketsUsingPUT(parameters: {
        'caseId': string,
        'request': UpdateCaseDeclineTicketsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/decline-tickets';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    findChargeDisputesByCaseIdUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/disputes';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * findChargeDisputesByCaseId
     * @method
     * @name OtrService#findChargeDisputesByCaseIdUsingGET
     * @param {string} caseId - caseId
     */
    findChargeDisputesByCaseIdUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/disputes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmCaseDocumentsUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/documents';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmCaseDocuments
     * @method
     * @name OtrService#getLawfirmCaseDocumentsUsingGET
     * @param {string} caseId - caseId
     */
    getLawfirmCaseDocumentsUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/documents';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCaseFinancialsUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/financials';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCaseFinancials
     * @method
     * @name OtrService#getCaseFinancialsUsingGET
     * @param {string} caseId - caseId
     */
    getCaseFinancialsUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/financials';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    authorizeChargeForInvoiceLineItemUsingPOSTURL(parameters: {
        'caseId': string,
        'invoiceLineItemId': string,
        'request' ? : AuthorizeChargeForInvoiceLineItemRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/invoicelineitem/{invoiceLineItemId}/authorize';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{invoiceLineItemId}', `${parameters['invoiceLineItemId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * authorizeChargeForInvoiceLineItem
     * @method
     * @name OtrService#authorizeChargeForInvoiceLineItemUsingPOST
     * @param {string} caseId - caseId
     * @param {string} invoiceLineItemId - invoiceLineItemId
     * @param {} request - request
     */
    authorizeChargeForInvoiceLineItemUsingPOST(parameters: {
        'caseId': string,
        'invoiceLineItemId': string,
        'request' ? : AuthorizeChargeForInvoiceLineItemRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/invoicelineitem/{invoiceLineItemId}/authorize';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{invoiceLineItemId}', `${parameters['invoiceLineItemId']}`);

            if (parameters['invoiceLineItemId'] === undefined) {
                reject(new Error('Missing required  parameter: invoiceLineItemId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    insertCaseLineItemUsingPOSTURL(parameters: {
        'caseId': string,
        'request': InsertInvoiceLineItemRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/lineitems';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * insertCaseLineItem
     * @method
     * @name OtrService#insertCaseLineItemUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    insertCaseLineItemUsingPOST(parameters: {
        'caseId': string,
        'request': InsertInvoiceLineItemRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/lineitems';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateCaseLineItemUsingPUTURL(parameters: {
        'caseId': string,
        'lineItemId': string,
        'request': UpdateInvoiceLineItemRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{lineItemId}', `${parameters['lineItemId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateCaseLineItem
     * @method
     * @name OtrService#updateCaseLineItemUsingPUT
     * @param {string} caseId - caseId
     * @param {string} lineItemId - lineItemId
     * @param {} request - request
     */
    updateCaseLineItemUsingPUT(parameters: {
        'caseId': string,
        'lineItemId': string,
        'request': UpdateInvoiceLineItemRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{lineItemId}', `${parameters['lineItemId']}`);

            if (parameters['lineItemId'] === undefined) {
                reject(new Error('Missing required  parameter: lineItemId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteCaseLineItemUsingDELETEURL(parameters: {
        'caseId': string,
        'lineItemId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{lineItemId}', `${parameters['lineItemId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * deleteCaseLineItem
     * @method
     * @name OtrService#deleteCaseLineItemUsingDELETE
     * @param {string} caseId - caseId
     * @param {string} lineItemId - lineItemId
     */
    deleteCaseLineItemUsingDELETE(parameters: {
        'caseId': string,
        'lineItemId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/lineitems/{lineItemId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{lineItemId}', `${parameters['lineItemId']}`);

            if (parameters['lineItemId'] === undefined) {
                reject(new Error('Missing required  parameter: lineItemId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCaseNotesUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/notes';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCaseNotes
     * @method
     * @name OtrService#getCaseNotesUsingGET
     * @param {string} caseId - caseId
     */
    getCaseNotesUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/notes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    saveCaseNotesUsingPOSTURL(parameters: {
        'caseId': string,
        'request': SaveCaseNotesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/notes';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * saveCaseNotes
     * @method
     * @name OtrService#saveCaseNotesUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    saveCaseNotesUsingPOST(parameters: {
        'caseId': string,
        'request': SaveCaseNotesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/notes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    assignOwnerUsingPOSTURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/owner';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * assignOwner
     * @method
     * @name OtrService#assignOwnerUsingPOST
     * @param {string} caseId - caseId
     */
    assignOwnerUsingPOST(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/owner';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    assignCaseToUserUsingPOSTURL(parameters: {
        'caseId': string,
        'userId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/owner/{userId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{userId}', `${parameters['userId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * assignCaseToUser
     * @method
     * @name OtrService#assignCaseToUserUsingPOST
     * @param {string} caseId - caseId
     * @param {string} userId - userId
     */
    assignCaseToUserUsingPOST(parameters: {
        'caseId': string,
        'userId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/owner/{userId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    authorizeChargeForCaseUsingPOSTURL(parameters: {
        'caseId': string,
        'request' ? : AuthorizeChargeForCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/payment';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * authorizeChargeForCase
     * @method
     * @name OtrService#authorizeChargeForCaseUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    authorizeChargeForCaseUsingPOST(parameters: {
        'caseId': string,
        'request' ? : AuthorizeChargeForCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/payment';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    generateCasePaymentPlanUsingGETURL(parameters: {
        'caseId': string,
        'paymentPlanId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/payment-plans/{paymentPlanId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{paymentPlanId}', `${parameters['paymentPlanId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * generateCasePaymentPlan
     * @method
     * @name OtrService#generateCasePaymentPlanUsingGET
     * @param {string} caseId - caseId
     * @param {string} paymentPlanId - paymentPlanId
     */
    generateCasePaymentPlanUsingGET(parameters: {
        'caseId': string,
        'paymentPlanId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/payment-plans/{paymentPlanId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{paymentPlanId}', `${parameters['paymentPlanId']}`);

            if (parameters['paymentPlanId'] === undefined) {
                reject(new Error('Missing required  parameter: paymentPlanId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    captureChargeForCaseUsingPOSTURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/payment/capture';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * captureChargeForCase
     * @method
     * @name OtrService#captureChargeForCaseUsingPOST
     * @param {string} caseId - caseId
     */
    captureChargeForCaseUsingPOST(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/payment/capture';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    submitRequestForPriceMatchUsingPOSTURL(parameters: {
        'caseId': string,
        'priceMatchRequest': PriceMatchRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/price-match';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * submitRequestForPriceMatch
     * @method
     * @name OtrService#submitRequestForPriceMatchUsingPOST
     * @param {string} caseId - caseId
     * @param {} priceMatchRequest - priceMatchRequest
     */
    submitRequestForPriceMatchUsingPOST(parameters: {
        'caseId': string,
        'priceMatchRequest': PriceMatchRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/price-match';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['priceMatchRequest'] !== undefined) {
                body = parameters['priceMatchRequest'];
            }

            if (parameters['priceMatchRequest'] === undefined) {
                reject(new Error('Missing required  parameter: priceMatchRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    applyReferralCodeUsingPOSTURL(parameters: {
        'caseId': string,
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/referralcode/{codeId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{codeId}', `${parameters['codeId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Apply referral code to a case to adjust the estimated cost and/or to assign the rightful lawfirm. This operation is idempotent
     * @method
     * @name OtrService#applyReferralCodeUsingPOST
     * @param {string} caseId - caseId
     * @param {string} codeId - codeId
     */
    applyReferralCodeUsingPOST(parameters: {
        'caseId': string,
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/referralcode/{codeId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{codeId}', `${parameters['codeId']}`);

            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    refundCaseChargesUsingPOSTURL(parameters: {
        'caseId': string,
        'request': RefundCaseChargesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/refund';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * refundCaseCharges
     * @method
     * @name OtrService#refundCaseChargesUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    refundCaseChargesUsingPOST(parameters: {
        'caseId': string,
        'request': RefundCaseChargesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/refund';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateRefundEligibilityForCaseUsingPUTURL(parameters: {
        'caseId': string,
        'request': UpdateRefundEligibilityForCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/refund-eligibility';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateRefundEligibilityForCase
     * @method
     * @name OtrService#updateRefundEligibilityForCaseUsingPUT
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    updateRefundEligibilityForCaseUsingPUT(parameters: {
        'caseId': string,
        'request': UpdateRefundEligibilityForCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/refund-eligibility';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    isRefundEligibleUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/refund/eligibility';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * isRefundEligible
     * @method
     * @name OtrService#isRefundEligibleUsingGET
     * @param {string} caseId - caseId
     */
    isRefundEligibleUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/refund/eligibility';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    reopenCaseUsingPUTURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/reopen';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * reopenCase
     * @method
     * @name OtrService#reopenCaseUsingPUT
     * @param {string} caseId - caseId
     */
    reopenCaseUsingPUT(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/reopen';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    requestLawyerUsingPOSTURL(parameters: {
        'caseId': string,
        'lawyerRequest': NoLawyerAvailableRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/request';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * requestLawyer
     * @method
     * @name OtrService#requestLawyerUsingPOST
     * @param {string} caseId - caseId
     * @param {} lawyerRequest - lawyerRequest
     */
    requestLawyerUsingPOST(parameters: {
        'caseId': string,
        'lawyerRequest': NoLawyerAvailableRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/request';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['lawyerRequest'] !== undefined) {
                body = parameters['lawyerRequest'];
            }

            if (parameters['lawyerRequest'] === undefined) {
                reject(new Error('Missing required  parameter: lawyerRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    markCaseAsResolvedUsingPOSTURL(parameters: {
        'caseId': string,
        'request': MarkCaseAsResolvedRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/resolution';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * markCaseAsResolved
     * @method
     * @name OtrService#markCaseAsResolvedUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    markCaseAsResolvedUsingPOST(parameters: {
        'caseId': string,
        'request': MarkCaseAsResolvedRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/resolution';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getSupportTicketsForCaseUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/support-tickets';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getSupportTicketsForCase
     * @method
     * @name OtrService#getSupportTicketsForCaseUsingGET
     * @param {string} caseId - caseId
     */
    getSupportTicketsForCaseUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/support-tickets';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getTransferHistoryUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/transfer';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getTransferHistory
     * @method
     * @name OtrService#getTransferHistoryUsingGET
     * @param {string} caseId - caseId
     */
    getTransferHistoryUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/transfer';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    reverseCaseTransferUsingPOSTURL(parameters: {
        'caseId': string,
        'request': ReverseCaseTransferRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/transfer/reverse';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * reverseCaseTransfer
     * @method
     * @name OtrService#reverseCaseTransferUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    reverseCaseTransferUsingPOST(parameters: {
        'caseId': string,
        'request': ReverseCaseTransferRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/transfer/reverse';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    transferCaseUsingPUTURL(parameters: {
        'caseId': string,
        'lawfirmId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/transfer/{lawfirmId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * transferCase
     * @method
     * @name OtrService#transferCaseUsingPUT
     * @param {string} caseId - caseId
     * @param {string} lawfirmId - lawfirmId
     */
    transferCaseUsingPUT(parameters: {
        'caseId': string,
        'lawfirmId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/cases/{caseId}/transfer/{lawfirmId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getSSLPublicCertFileUsingGETURL(parameters: {
        'encoding': "DER" | "PEM",
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/certificates/ssl';
        if (parameters['encoding'] !== undefined) {
            queryParameters['encoding'] = parameters['encoding'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getSSLPublicCertFile
     * @method
     * @name OtrService#getSSLPublicCertFileUsingGET
     * @param {string} encoding - certEncoding
     */
    getSSLPublicCertFileUsingGET(parameters: {
        'encoding': "DER" | "PEM",
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/certificates/ssl';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['encoding'] !== undefined) {
                queryParameters['encoding'] = parameters['encoding'];
            }

            if (parameters['encoding'] === undefined) {
                reject(new Error('Missing required  parameter: encoding'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    createNewCitationUsingPOSTURL(parameters: {
        'request': CreateCitationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * createNewCitation
     * @method
     * @name OtrService#createNewCitationUsingPOST
     * @param {} request - request
     */
    createNewCitationUsingPOST(parameters: {
        'request': CreateCitationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getListOfCitationsWithMissingCourtUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/courts/missing';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getListOfCitationsWithMissingCourt
     * @method
     * @name OtrService#getListOfCitationsWithMissingCourtUsingGET
     */
    getListOfCitationsWithMissingCourtUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/courts/missing';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    dismissCitationsFromContactListUsingPOSTURL(parameters: {
        'request': DismissCitationsFromContactListRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/dismiss';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * dismissCitationsFromContactList
     * @method
     * @name OtrService#dismissCitationsFromContactListUsingPOST
     * @param {} request - request
     */
    dismissCitationsFromContactListUsingPOST(parameters: {
        'request': DismissCitationsFromContactListRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/dismiss';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCitationUsingGETURL(parameters: {
        'citationIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}';

        path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCitation
     * @method
     * @name OtrService#getCitationUsingGET
     * @param {string} citationIdString - citationIdString
     */
    getCitationUsingGET(parameters: {
        'citationIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateCitationUsingPUTURL(parameters: {
        'citationIdString': string,
        'updateCitationRequest': UpdateCitationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}';

        path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateCitation
     * @method
     * @name OtrService#updateCitationUsingPUT
     * @param {string} citationIdString - citationIdString
     * @param {} updateCitationRequest - updateCitationRequest
     */
    updateCitationUsingPUT(parameters: {
        'citationIdString': string,
        'updateCitationRequest': UpdateCitationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }

            if (parameters['updateCitationRequest'] !== undefined) {
                body = parameters['updateCitationRequest'];
            }

            if (parameters['updateCitationRequest'] === undefined) {
                reject(new Error('Missing required  parameter: updateCitationRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteCitationUsingDELETEURL(parameters: {
        'citationIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}';

        path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * deleteCitation
     * @method
     * @name OtrService#deleteCitationUsingDELETE
     * @param {string} citationIdString - citationIdString
     */
    deleteCitationUsingDELETE(parameters: {
        'citationIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    matchCaseUsingPOSTURL(parameters: {
        'citationIdString': string,
        'request' ? : CaseCreationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}/case';

        path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * matchCase
     * @method
     * @name OtrService#matchCaseUsingPOST
     * @param {string} citationIdString - citationIdString
     * @param {} request - request
     */
    matchCaseUsingPOST(parameters: {
        'citationIdString': string,
        'request' ? : CaseCreationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}/case';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    setCitationContactListFlagUsingPOSTURL(parameters: {
        'citationIdString': string,
        'isDismissed': boolean,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}/dismiss';

        path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);
        if (parameters['isDismissed'] !== undefined) {
            queryParameters['isDismissed'] = parameters['isDismissed'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * setCitationContactListFlag
     * @method
     * @name OtrService#setCitationContactListFlagUsingPOST
     * @param {string} citationIdString - citationIdString
     * @param {boolean} isDismissed - isDismissed
     */
    setCitationContactListFlagUsingPOST(parameters: {
        'citationIdString': string,
        'isDismissed': boolean,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationIdString}/dismiss';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationIdString}', `${parameters['citationIdString']}`);

            if (parameters['citationIdString'] === undefined) {
                reject(new Error('Missing required  parameter: citationIdString'));
                return;
            }

            if (parameters['isDismissed'] !== undefined) {
                queryParameters['isDismissed'] = parameters['isDismissed'];
            }

            if (parameters['isDismissed'] === undefined) {
                reject(new Error('Missing required  parameter: isDismissed'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateCitationAddressUsingPOSTURL(parameters: {
        'citationId': string,
        'request': UpdateCitationAddressRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/address';

        path = path.replace('{citationId}', `${parameters['citationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateCitationAddress
     * @method
     * @name OtrService#updateCitationAddressUsingPOST
     * @param {string} citationId - citationId
     * @param {} request - request
     */
    updateCitationAddressUsingPOST(parameters: {
        'citationId': string,
        'request': UpdateCitationAddressRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/address';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationId}', `${parameters['citationId']}`);

            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCaseFromCitationUsingGETURL(parameters: {
        'citationId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/case';

        path = path.replace('{citationId}', `${parameters['citationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCaseFromCitation
     * @method
     * @name OtrService#getCaseFromCitationUsingGET
     * @param {string} citationId - citationId
     */
    getCaseFromCitationUsingGET(parameters: {
        'citationId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/case';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationId}', `${parameters['citationId']}`);

            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    postMissingCourtForCitationUsingPOSTURL(parameters: {
        'citationId': string,
        'state': "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING",
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/court/missing';

        path = path.replace('{citationId}', `${parameters['citationId']}`);
        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * postMissingCourtForCitation
     * @method
     * @name OtrService#postMissingCourtForCitationUsingPOST
     * @param {string} citationId - citationId
     * @param {string} state - state
     */
    postMissingCourtForCitationUsingPOST(parameters: {
        'citationId': string,
        'state': "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING",
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/court/missing';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationId}', `${parameters['citationId']}`);

            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }

            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
            }

            if (parameters['state'] === undefined) {
                reject(new Error('Missing required  parameter: state'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteMissingCourtRecordUsingDELETEURL(parameters: {
        'citationId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/courts/missing';

        path = path.replace('{citationId}', `${parameters['citationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * deleteMissingCourtRecord
     * @method
     * @name OtrService#deleteMissingCourtRecordUsingDELETE
     * @param {integer} citationId - citationId
     */
    deleteMissingCourtRecordUsingDELETE(parameters: {
        'citationId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/courts/missing';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationId}', `${parameters['citationId']}`);

            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    assignCitationOwnerUsingPOSTURL(parameters: {
        'citationId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/owner';

        path = path.replace('{citationId}', `${parameters['citationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * assignCitationOwner
     * @method
     * @name OtrService#assignCitationOwnerUsingPOST
     * @param {integer} citationId - citationId
     */
    assignCitationOwnerUsingPOST(parameters: {
        'citationId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/owner';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationId}', `${parameters['citationId']}`);

            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateCitationPictureUsingPUTURL(parameters: {
        'citationId': string,
        'request': UpdateCitationPictureRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/picture';

        path = path.replace('{citationId}', `${parameters['citationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateCitationPicture
     * @method
     * @name OtrService#updateCitationPictureUsingPUT
     * @param {string} citationId - citationId
     * @param {} request - request
     */
    updateCitationPictureUsingPUT(parameters: {
        'citationId': string,
        'request': UpdateCitationPictureRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/picture';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationId}', `${parameters['citationId']}`);

            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    createReferralSourceForCitationUsingPOSTURL(parameters: {
        'citationId': string,
        'request': CreateReferralSourceForCitation,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/referral-source';

        path = path.replace('{citationId}', `${parameters['citationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * createReferralSourceForCitation
     * @method
     * @name OtrService#createReferralSourceForCitationUsingPOST
     * @param {string} citationId - citationId
     * @param {} request - request
     */
    createReferralSourceForCitationUsingPOST(parameters: {
        'citationId': string,
        'request': CreateReferralSourceForCitation,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/referral-source';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationId}', `${parameters['citationId']}`);

            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getTicketReviewInfoUsingGETURL(parameters: {
        'citationId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/ticket-review';

        path = path.replace('{citationId}', `${parameters['citationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getTicketReviewInfo
     * @method
     * @name OtrService#getTicketReviewInfoUsingGET
     * @param {string} citationId - citationId
     */
    getTicketReviewInfoUsingGET(parameters: {
        'citationId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{citationId}/ticket-review';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{citationId}', `${parameters['citationId']}`);

            if (parameters['citationId'] === undefined) {
                reject(new Error('Missing required  parameter: citationId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getAnonymousTicketUploadsUsingGETURL(parameters: {
        'emailAddress': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{emailAddress}/anonymous-tickets';

        path = path.replace('{emailAddress}', `${parameters['emailAddress']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getAnonymousTicketUploads
     * @method
     * @name OtrService#getAnonymousTicketUploadsUsingGET
     * @param {string} emailAddress - emailAddress
     */
    getAnonymousTicketUploadsUsingGET(parameters: {
        'emailAddress': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/citations/{emailAddress}/anonymous-tickets';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{emailAddress}', `${parameters['emailAddress']}`);

            if (parameters['emailAddress'] === undefined) {
                reject(new Error('Missing required  parameter: emailAddress'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getAppConfigurationUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/config/app';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getAppConfiguration
     * @method
     * @name OtrService#getAppConfigurationUsingGET
     */
    getAppConfigurationUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/config/app';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    facebookConnectUsingPOSTURL(parameters: {
        'providerId': string,
        'request': SocialLoginRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/connect/{providerId}';

        path = path.replace('{providerId}', `${parameters['providerId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * facebookConnect
     * @method
     * @name OtrService#facebookConnectUsingPOST
     * @param {string} providerId - providerId
     * @param {} request - request
     */
    facebookConnectUsingPOST(parameters: {
        'providerId': string,
        'request': SocialLoginRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/connect/{providerId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{providerId}', `${parameters['providerId']}`);

            if (parameters['providerId'] === undefined) {
                reject(new Error('Missing required  parameter: providerId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCasesWithCoverageObtainedUsingPOSTURL(parameters: {
        'request': GenericAdminListRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases-with-coverage-obtained';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCasesWithCoverageObtained
     * @method
     * @name OtrService#getCasesWithCoverageObtainedUsingPOST
     * @param {} request - request
     */
    getCasesWithCoverageObtainedUsingPOST(parameters: {
        'request': GenericAdminListRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases-with-coverage-obtained';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getInvalidCasesWithStripeChargeUsingPOSTURL(parameters: {
        'request': GetInvalidCasesWithStripeChargeRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/invalid-with-charge';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getInvalidCasesWithStripeCharge
     * @method
     * @name OtrService#getInvalidCasesWithStripeChargeUsingPOST
     * @param {} request - request
     */
    getInvalidCasesWithStripeChargeUsingPOST(parameters: {
        'request': GetInvalidCasesWithStripeChargeRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/invalid-with-charge';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLostCasesWithTransferNotReversedUsingPOSTURL(parameters: {
        'request': GetLostCasesWithTransferNotReversedRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/lost/not-reversed';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLostCasesWithTransferNotReversed
     * @method
     * @name OtrService#getLostCasesWithTransferNotReversedUsingPOST
     * @param {} request - request
     */
    getLostCasesWithTransferNotReversedUsingPOST(parameters: {
        'request': GetLostCasesWithTransferNotReversedRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/lost/not-reversed';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listCasesByStatusUsingPOSTURL(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/status';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listCasesByStatus
     * @method
     * @name OtrService#listCasesByStatusUsingPOST
     * @param {} graphRequest - graphRequest
     */
    listCasesByStatusUsingPOST(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/status';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getPendingAndRefusedCasesUsingPOSTURL(parameters: {
        'request': GetPendingAndRefusedCasesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/unaccepted';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getPendingAndRefusedCases
     * @method
     * @name OtrService#getPendingAndRefusedCasesUsingPOST
     * @param {} request - request
     */
    getPendingAndRefusedCasesUsingPOST(parameters: {
        'request': GetPendingAndRefusedCasesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/unaccepted';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCasesWithUncapturedChargesUsingPOSTURL(parameters: {
        'request': GetCasesWithUncapturedChargesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/unpaid';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCasesWithUncapturedCharges
     * @method
     * @name OtrService#getCasesWithUncapturedChargesUsingPOST
     * @param {} request - request
     */
    getCasesWithUncapturedChargesUsingPOST(parameters: {
        'request': GetCasesWithUncapturedChargesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/cases/unpaid';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listCitationsAndCasesUsingPOSTURL(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/citations';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listCitationsAndCases
     * @method
     * @name OtrService#listCitationsAndCasesUsingPOST
     * @param {} graphRequest - graphRequest
     */
    listCitationsAndCasesUsingPOST(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/citations';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCitationsWithMissingFieldsUsingPOSTURL(parameters: {
        'request': GetCitationsWithMissingFieldsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/citations-with-missing-fields';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCitationsWithMissingFields
     * @method
     * @name OtrService#getCitationsWithMissingFieldsUsingPOST
     * @param {} request - request
     */
    getCitationsWithMissingFieldsUsingPOST(parameters: {
        'request': GetCitationsWithMissingFieldsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/citations-with-missing-fields';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listCustomersUsingPOSTURL(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/customers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listCustomers
     * @method
     * @name OtrService#listCustomersUsingPOST
     * @param {} graphRequest - graphRequest
     */
    listCustomersUsingPOST(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/customers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    findDisputesUsingPOSTURL(parameters: {
        'request': FindDisputesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/disputes';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * findDisputes
     * @method
     * @name OtrService#findDisputesUsingPOST
     * @param {} request - request
     */
    findDisputesUsingPOST(parameters: {
        'request': FindDisputesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/disputes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listDropoffsUsingPOSTURL(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/dropoff';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listDropoffs
     * @method
     * @name OtrService#listDropoffsUsingPOST
     * @param {} graphRequest - graphRequest
     */
    listDropoffsUsingPOST(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/dropoff';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listExpensesUsingPOSTURL(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/expenses';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listExpenses
     * @method
     * @name OtrService#listExpensesUsingPOST
     * @param {} graphRequest - graphRequest
     */
    listExpensesUsingPOST(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/expenses';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listLawfirmLeadsUsingPOSTURL(parameters: {
        'request': GetLawfirmLeadsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/lawfirms/leads';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listLawfirmLeads
     * @method
     * @name OtrService#listLawfirmLeadsUsingPOST
     * @param {} request - request
     */
    listLawfirmLeadsUsingPOST(parameters: {
        'request': GetLawfirmLeadsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/lawfirms/leads';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listLawyerLeadsUsingPOSTURL(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/lawyer-leads';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listLawyerLeads
     * @method
     * @name OtrService#listLawyerLeadsUsingPOST
     * @param {} graphRequest - graphRequest
     */
    listLawyerLeadsUsingPOST(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/lawyer-leads';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listPotentialCustomersUsingPOSTURL(parameters: {
        'request': GetPotentialCustomersRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/potential-customers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listPotentialCustomers
     * @method
     * @name OtrService#listPotentialCustomersUsingPOST
     * @param {} request - request
     */
    listPotentialCustomersUsingPOST(parameters: {
        'request': GetPotentialCustomersRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/potential-customers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listRevenueUsingPOSTURL(parameters: {
        'graphRequest': ListRevenueRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/revenue';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listRevenue
     * @method
     * @name OtrService#listRevenueUsingPOST
     * @param {} graphRequest - graphRequest
     */
    listRevenueUsingPOST(parameters: {
        'graphRequest': ListRevenueRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/revenue';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listSubscribersUsingPOSTURL(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/subscribers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listSubscribers
     * @method
     * @name OtrService#listSubscribersUsingPOST
     * @param {} graphRequest - graphRequest
     */
    listSubscribersUsingPOST(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/subscribers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getPendingTicketReviewsUsingPOSTURL(parameters: {
        'request': GetPendingTicketReviewsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/ticket-review-requests/pending';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getPendingTicketReviews
     * @method
     * @name OtrService#getPendingTicketReviewsUsingPOST
     * @param {} request - request
     */
    getPendingTicketReviewsUsingPOST(parameters: {
        'request': GetPendingTicketReviewsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/ticket-review-requests/pending';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getRegisteredUsersUsingPOSTURL(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/users';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getRegisteredUsers
     * @method
     * @name OtrService#getRegisteredUsersUsingPOST
     * @param {} graphRequest - graphRequest
     */
    getRegisteredUsersUsingPOST(parameters: {
        'graphRequest': GraphRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/console/users';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['graphRequest'] !== undefined) {
                body = parameters['graphRequest'];
            }

            if (parameters['graphRequest'] === undefined) {
                reject(new Error('Missing required  parameter: graphRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCountiesUsingGETURL(parameters: {
        'state': "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING",
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/counties';
        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCounties
     * @method
     * @name OtrService#getCountiesUsingGET
     * @param {string} state - state
     */
    getCountiesUsingGET(parameters: {
        'state': "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING",
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/counties';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
            }

            if (parameters['state'] === undefined) {
                reject(new Error('Missing required  parameter: state'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addCourtUsingPOSTURL(parameters: {
        'request': AddCourtRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/courts';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addCourt
     * @method
     * @name OtrService#addCourtUsingPOST
     * @param {} request - request
     */
    addCourtUsingPOST(parameters: {
        'request': AddCourtRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/courts';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    searchCourtsUsingGETURL(parameters: {
        'q' ? : string,
        'state' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING",
        'city' ? : string,
        'county' ? : string,
        'offset' ? : number,
        'length' ? : number,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/courts/traffic';
        if (parameters['q'] !== undefined) {
            queryParameters['q'] = parameters['q'];
        }

        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }

        if (parameters['city'] !== undefined) {
            queryParameters['city'] = parameters['city'];
        }

        if (parameters['county'] !== undefined) {
            queryParameters['county'] = parameters['county'];
        }

        if (parameters['offset'] !== undefined) {
            queryParameters['offset'] = parameters['offset'];
        }

        if (parameters['length'] !== undefined) {
            queryParameters['length'] = parameters['length'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * searchCourts
     * @method
     * @name OtrService#searchCourtsUsingGET
     * @param {string} q - q
     * @param {string} state - state
     * @param {string} city - city
     * @param {string} county - county
     * @param {integer} offset - offset
     * @param {integer} length - length
     */
    searchCourtsUsingGET(parameters: {
        'q' ? : string,
        'state' ? : "ALABAMA" | "ALASKA" | "ARIZONA" | "ARKANSAS" | "CALIFORNIA" | "COLORADO" | "CONNECTICUT" | "DELAWARE" | "DISTRICT OF COLUMBIA" | "FLORIDA" | "GEORGIA" | "HAWAII" | "IDAHO" | "ILLINOIS" | "INDIANA" | "IOWA" | "KANSAS" | "KENTUCKY" | "LOUISIANA" | "MAINE" | "MARYLAND" | "MASSACHUSETTS" | "MICHIGAN" | "MINNESOTA" | "MISSISSIPPI" | "MISSOURI" | "MONTANA" | "NEBRASKA" | "NEVADA" | "NEW HAMPSHIRE" | "NEW JERSEY" | "NEW MEXICO" | "NEW YORK" | "NORTH CAROLINA" | "NORTH DAKOTA" | "OHIO" | "OKLAHOMA" | "OREGON" | "PENNSYLVANIA" | "RHODE ISLAND" | "SOUTH CAROLINA" | "SOUTH DAKOTA" | "TENNESSEE" | "TEXAS" | "UTAH" | "VERMONT" | "VIRGINIA" | "WASHINGTON" | "WEST VIRGINIA" | "WISCONSIN" | "WYOMING",
        'city' ? : string,
        'county' ? : string,
        'offset' ? : number,
        'length' ? : number,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/courts/traffic';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['q'] !== undefined) {
                queryParameters['q'] = parameters['q'];
            }

            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
            }

            if (parameters['city'] !== undefined) {
                queryParameters['city'] = parameters['city'];
            }

            if (parameters['county'] !== undefined) {
                queryParameters['county'] = parameters['county'];
            }

            if (parameters['offset'] !== undefined) {
                queryParameters['offset'] = parameters['offset'];
            }

            if (parameters['length'] !== undefined) {
                queryParameters['length'] = parameters['length'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCourtUsingGETURL(parameters: {
        'courtId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/courts/{courtId}';

        path = path.replace('{courtId}', `${parameters['courtId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCourt
     * @method
     * @name OtrService#getCourtUsingGET
     * @param {integer} courtId - courtId
     */
    getCourtUsingGET(parameters: {
        'courtId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/courts/{courtId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{courtId}', `${parameters['courtId']}`);

            if (parameters['courtId'] === undefined) {
                reject(new Error('Missing required  parameter: courtId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateCourtUsingPUTURL(parameters: {
        'courtId': number,
        'request': UpdateCourtRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/courts/{courtId}';

        path = path.replace('{courtId}', `${parameters['courtId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateCourt
     * @method
     * @name OtrService#updateCourtUsingPUT
     * @param {integer} courtId - courtId
     * @param {} request - request
     */
    updateCourtUsingPUT(parameters: {
        'courtId': number,
        'request': UpdateCourtRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/courts/{courtId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{courtId}', `${parameters['courtId']}`);

            if (parameters['courtId'] === undefined) {
                reject(new Error('Missing required  parameter: courtId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getAwsCredentialsUsingPOSTURL(parameters: {
        'request': AwsCredentialsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/credentials/aws';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getAwsCredentials
     * @method
     * @name OtrService#getAwsCredentialsUsingPOST
     * @param {} request - request
     */
    getAwsCredentialsUsingPOST(parameters: {
        'request': AwsCredentialsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/credentials/aws';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getOutgoingContactsUsingGETURL(parameters: {
        'recipientEmailAddress': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/contacts';
        if (parameters['recipientEmailAddress'] !== undefined) {
            queryParameters['recipientEmailAddress'] = parameters['recipientEmailAddress'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getOutgoingContacts
     * @method
     * @name OtrService#getOutgoingContactsUsingGET
     * @param {string} recipientEmailAddress - recipientEmailAddress
     */
    getOutgoingContactsUsingGET(parameters: {
        'recipientEmailAddress': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/contacts';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['recipientEmailAddress'] !== undefined) {
                queryParameters['recipientEmailAddress'] = parameters['recipientEmailAddress'];
            }

            if (parameters['recipientEmailAddress'] === undefined) {
                reject(new Error('Missing required  parameter: recipientEmailAddress'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    generateTemplateUsingPOSTURL(parameters: {
        'request': GenerateTemplateRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/generate-template';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * generateTemplate
     * @method
     * @name OtrService#generateTemplateUsingPOST
     * @param {} request - request
     */
    generateTemplateUsingPOST(parameters: {
        'request': GenerateTemplateRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/generate-template';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getTemplatesUsingGETURL(parameters: {
        'category' ? : Array < string > | string

        ,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/templates';
        if (parameters['category'] !== undefined) {
            queryParameters['category'] = parameters['category'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getTemplates
     * @method
     * @name OtrService#getTemplatesUsingGET
     * @param {array} category - category
     */
    getTemplatesUsingGET(parameters: {
        'category' ? : Array < string > | string

        ,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/templates';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['category'] !== undefined) {
                queryParameters['category'] = parameters['category'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    replyToTicketUsingPOSTURL(parameters: {
        'ticketId': string,
        'request': ReplyToTicketRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/ticket/{ticketId}/reply';

        path = path.replace('{ticketId}', `${parameters['ticketId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * replyToTicket
     * @method
     * @name OtrService#replyToTicketUsingPOST
     * @param {string} ticketId - ticketId
     * @param {} request - request
     */
    replyToTicketUsingPOST(parameters: {
        'ticketId': string,
        'request': ReplyToTicketRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/ticket/{ticketId}/reply';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{ticketId}', `${parameters['ticketId']}`);

            if (parameters['ticketId'] === undefined) {
                reject(new Error('Missing required  parameter: ticketId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    sendConsolidatedEmailToUserUsingPOSTURL(parameters: {
        'request': SendConsolidatedEmailToUser,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/user/consolidate-email';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * sendConsolidatedEmailToUser
     * @method
     * @name OtrService#sendConsolidatedEmailToUserUsingPOST
     * @param {} request - request
     */
    sendConsolidatedEmailToUserUsingPOST(parameters: {
        'request': SendConsolidatedEmailToUser,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/user/consolidate-email';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    sendEmailToUserUsingPOSTURL(parameters: {
        'request': SendEmailToUserRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/user/email';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * sendEmailToUser
     * @method
     * @name OtrService#sendEmailToUserUsingPOST
     * @param {} request - request
     */
    sendEmailToUserUsingPOST(parameters: {
        'request': SendEmailToUserRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/user/email';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    sendEmailToUsersUsingPOSTURL(parameters: {
        'request': SendEmailToUsersRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/users/email';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * sendEmailToUsers
     * @method
     * @name OtrService#sendEmailToUsersUsingPOST
     * @param {} request - request
     */
    sendEmailToUsersUsingPOST(parameters: {
        'request': SendEmailToUsersRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/crm/users/email';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    postCustomerLeadUsingPOSTURL(parameters: {
        'request': PostCustomerLeadRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/customer-leads';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * postCustomerLead
     * @method
     * @name OtrService#postCustomerLeadUsingPOST
     * @param {} request - request
     */
    postCustomerLeadUsingPOST(parameters: {
        'request': PostCustomerLeadRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/customer-leads';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    sendDirectMailUsingPOSTURL(parameters: {
        'request': DirectMailSendRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * sendDirectMail
     * @method
     * @name OtrService#sendDirectMailUsingPOST
     * @param {} request - request
     */
    sendDirectMailUsingPOST(parameters: {
        'request': DirectMailSendRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getSentMailUsingPOSTURL(parameters: {
        'request': DirectMailGetRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/fetch-sent-mail';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getSentMail
     * @method
     * @name OtrService#getSentMailUsingPOST
     * @param {} request - request
     */
    getSentMailUsingPOST(parameters: {
        'request': DirectMailGetRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/fetch-sent-mail';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    handleLobEventUsingPOSTURL(parameters: {
        'request': LobEventRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/lob-events';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * handleLobEvent
     * @method
     * @name OtrService#handleLobEventUsingPOST
     * @param {} request - request
     */
    handleLobEventUsingPOST(parameters: {
        'request': LobEventRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/lob-events';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getDirectMailTemplatesUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/templates';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getDirectMailTemplates
     * @method
     * @name OtrService#getDirectMailTemplatesUsingGET
     */
    getDirectMailTemplatesUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/templates';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addDirectMailTemplateUsingPOSTURL(parameters: {
        'request': DirectMailTemplateToAdd,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/templates';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addDirectMailTemplate
     * @method
     * @name OtrService#addDirectMailTemplateUsingPOST
     * @param {} request - request
     */
    addDirectMailTemplateUsingPOST(parameters: {
        'request': DirectMailTemplateToAdd,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/templates';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    validateDirectMailRequestForSendUsingPOSTURL(parameters: {
        'request': ValidateDirectMailRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/validate';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * validateDirectMailRequestForSend
     * @method
     * @name OtrService#validateDirectMailRequestForSendUsingPOST
     * @param {} request - request
     */
    validateDirectMailRequestForSendUsingPOST(parameters: {
        'request': ValidateDirectMailRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/direct-mail/validate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateDisputeUsingPUTURL(parameters: {
        'disputeId': string,
        'request': UpdateDisputeRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/disputes/{disputeId}';

        path = path.replace('{disputeId}', `${parameters['disputeId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateDispute
     * @method
     * @name OtrService#updateDisputeUsingPUT
     * @param {string} disputeId - disputeId
     * @param {} request - request
     */
    updateDisputeUsingPUT(parameters: {
        'disputeId': string,
        'request': UpdateDisputeRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/disputes/{disputeId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{disputeId}', `${parameters['disputeId']}`);

            if (parameters['disputeId'] === undefined) {
                reject(new Error('Missing required  parameter: disputeId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    markDocumentWithDecisionUsingPOSTURL(parameters: {
        'docId': string,
        'decisionRequest': DocumentDecisionRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/documents/{docId}/decision';

        path = path.replace('{docId}', `${parameters['docId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * markDocumentWithDecision
     * @method
     * @name OtrService#markDocumentWithDecisionUsingPOST
     * @param {string} docId - docId
     * @param {} decisionRequest - decisionRequest
     */
    markDocumentWithDecisionUsingPOST(parameters: {
        'docId': string,
        'decisionRequest': DocumentDecisionRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/documents/{docId}/decision';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{docId}', `${parameters['docId']}`);

            if (parameters['docId'] === undefined) {
                reject(new Error('Missing required  parameter: docId'));
                return;
            }

            if (parameters['decisionRequest'] !== undefined) {
                body = parameters['decisionRequest'];
            }

            if (parameters['decisionRequest'] === undefined) {
                reject(new Error('Missing required  parameter: decisionRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    removeFromDripUsingDELETEURL(parameters: {
        'request': DripRemoveRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/drip';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * removeFromDrip
     * @method
     * @name OtrService#removeFromDripUsingDELETE
     * @param {} request - request
     */
    removeFromDripUsingDELETE(parameters: {
        'request': DripRemoveRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/drip';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    postFeedbackUsingPOSTURL(parameters: {
        'request': PostFeedbackRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/feedback';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * postFeedback
     * @method
     * @name OtrService#postFeedbackUsingPOST
     * @param {} request - request
     */
    postFeedbackUsingPOST(parameters: {
        'request': PostFeedbackRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/feedback';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateFreshdeskTicketUsingPUTURL(parameters: {
        'ticketId': number,
        'request': FreshDeskTicket,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/freshdesk/ticket/{ticketId}';

        path = path.replace('{ticketId}', `${parameters['ticketId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateFreshdeskTicket
     * @method
     * @name OtrService#updateFreshdeskTicketUsingPUT
     * @param {integer} ticketId - ticketId
     * @param {} request - request
     */
    updateFreshdeskTicketUsingPUT(parameters: {
        'ticketId': number,
        'request': FreshDeskTicket,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/freshdesk/ticket/{ticketId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{ticketId}', `${parameters['ticketId']}`);

            if (parameters['ticketId'] === undefined) {
                reject(new Error('Missing required  parameter: ticketId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ticketStatusChangeHookUsingPUTURL(parameters: {
        'ticketId': string,
        'request': FreshdeskWebhookRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/freshdesk/ticket/{ticketId}/webhook/status-change';

        path = path.replace('{ticketId}', `${parameters['ticketId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * ticketStatusChangeHook
     * @method
     * @name OtrService#ticketStatusChangeHookUsingPUT
     * @param {string} ticketId - ticketId
     * @param {} request - request
     */
    ticketStatusChangeHookUsingPUT(parameters: {
        'ticketId': string,
        'request': FreshdeskWebhookRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/freshdesk/ticket/{ticketId}/webhook/status-change';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{ticketId}', `${parameters['ticketId']}`);

            if (parameters['ticketId'] === undefined) {
                reject(new Error('Missing required  parameter: ticketId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    calculateTicketSavingsUsingPOSTURL(parameters: {
        'request': EstimateInsuranceSavingsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/insurance/ticket/savings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * calculateTicketSavings
     * @method
     * @name OtrService#calculateTicketSavingsUsingPOST
     * @param {} request - request
     */
    calculateTicketSavingsUsingPOST(parameters: {
        'request': EstimateInsuranceSavingsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/insurance/ticket/savings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    submitInternalNotificationUsingPOSTURL(parameters: {
        'request': KeyValueMapRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/internal-notifications';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * submitInternalNotification
     * @method
     * @name OtrService#submitInternalNotificationUsingPOST
     * @param {} request - request
     */
    submitInternalNotificationUsingPOST(parameters: {
        'request': KeyValueMapRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/internal-notifications';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    setLawfirmCaseDecisionUsingPOSTURL(parameters: {
        'caseId': string,
        'request': SetLawfirmCaseDecisionRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirm/cases/{caseId}/decision';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * setLawfirmCaseDecision
     * @method
     * @name OtrService#setLawfirmCaseDecisionUsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    setLawfirmCaseDecisionUsingPOST(parameters: {
        'caseId': string,
        'request': SetLawfirmCaseDecisionRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirm/cases/{caseId}/decision';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmCasesUsingGETURL(parameters: {
        'lawfirmIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirm/{lawfirmIdString}/cases';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmCases
     * @method
     * @name OtrService#getLawfirmCasesUsingGET
     * @param {string} lawfirmIdString - lawfirmIdString
     */
    getLawfirmCasesUsingGET(parameters: {
        'lawfirmIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirm/{lawfirmIdString}/cases';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmsUsingGETURL(parameters: {
        'q' ? : string,
        'states' ? : Array < string > | string

        ,
        'statuses' ? : Array < string > | string

        ,
        'includeTestLawfirms' ? : boolean,
        'includeVacationMode' ? : boolean,
        'acceptsAccidentTickets' ? : boolean,
        'acceptsPastDueTickets' ? : boolean,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms';
        if (parameters['q'] !== undefined) {
            queryParameters['q'] = parameters['q'];
        }

        if (parameters['states'] !== undefined) {
            queryParameters['states'] = parameters['states'];
        }

        if (parameters['statuses'] !== undefined) {
            queryParameters['statuses'] = parameters['statuses'];
        }

        if (parameters['includeTestLawfirms'] !== undefined) {
            queryParameters['includeTestLawfirms'] = parameters['includeTestLawfirms'];
        }

        if (parameters['includeVacationMode'] !== undefined) {
            queryParameters['includeVacationMode'] = parameters['includeVacationMode'];
        }

        if (parameters['acceptsAccidentTickets'] !== undefined) {
            queryParameters['acceptsAccidentTickets'] = parameters['acceptsAccidentTickets'];
        }

        if (parameters['acceptsPastDueTickets'] !== undefined) {
            queryParameters['acceptsPastDueTickets'] = parameters['acceptsPastDueTickets'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirms
     * @method
     * @name OtrService#getLawfirmsUsingGET
     * @param {string} q - q
     * @param {array} states - states
     * @param {array} statuses - statuses
     * @param {boolean} includeTestLawfirms - includeTestLawfirms
     * @param {boolean} includeVacationMode - includeVacationMode
     * @param {boolean} acceptsAccidentTickets - acceptsAccidentTickets
     * @param {boolean} acceptsPastDueTickets - acceptsPastDueTickets
     */
    getLawfirmsUsingGET(parameters: {
        'q' ? : string,
        'states' ? : Array < string > | string

        ,
        'statuses' ? : Array < string > | string

        ,
        'includeTestLawfirms' ? : boolean,
        'includeVacationMode' ? : boolean,
        'acceptsAccidentTickets' ? : boolean,
        'acceptsPastDueTickets' ? : boolean,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['q'] !== undefined) {
                queryParameters['q'] = parameters['q'];
            }

            if (parameters['states'] !== undefined) {
                queryParameters['states'] = parameters['states'];
            }

            if (parameters['statuses'] !== undefined) {
                queryParameters['statuses'] = parameters['statuses'];
            }

            if (parameters['includeTestLawfirms'] !== undefined) {
                queryParameters['includeTestLawfirms'] = parameters['includeTestLawfirms'];
            }

            if (parameters['includeVacationMode'] !== undefined) {
                queryParameters['includeVacationMode'] = parameters['includeVacationMode'];
            }

            if (parameters['acceptsAccidentTickets'] !== undefined) {
                queryParameters['acceptsAccidentTickets'] = parameters['acceptsAccidentTickets'];
            }

            if (parameters['acceptsPastDueTickets'] !== undefined) {
                queryParameters['acceptsPastDueTickets'] = parameters['acceptsPastDueTickets'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    createLawfirmUsingPOSTURL(parameters: {
        'request': CreateNewLawfirmRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * createLawfirm
     * @method
     * @name OtrService#createLawfirmUsingPOST
     * @param {} request - request
     */
    createLawfirmUsingPOST(parameters: {
        'request': CreateNewLawfirmRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmStatusesUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/statuses';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmStatuses
     * @method
     * @name OtrService#getLawfirmStatusesUsingGET
     */
    getLawfirmStatusesUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/statuses';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmUsingGETURL(parameters: {
        'lawfirmIdString': string,
        'isDetailsRequired' ? : boolean,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);
        if (parameters['isDetailsRequired'] !== undefined) {
            queryParameters['isDetailsRequired'] = parameters['isDetailsRequired'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirm
     * @method
     * @name OtrService#getLawfirmUsingGET
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {boolean} isDetailsRequired - isDetailsRequired
     */
    getLawfirmUsingGET(parameters: {
        'lawfirmIdString': string,
        'isDetailsRequired' ? : boolean,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters['isDetailsRequired'] !== undefined) {
                queryParameters['isDetailsRequired'] = parameters['isDetailsRequired'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateLawfirmUsingPUTURL(parameters: {
        'lawfirmIdString': string,
        'request': UpdateLawfirmRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateLawfirm
     * @method
     * @name OtrService#updateLawfirmUsingPUT
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {} request - request
     */
    updateLawfirmUsingPUT(parameters: {
        'lawfirmIdString': string,
        'request': UpdateLawfirmRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addCourtToCoverageUsingPOSTURL(parameters: {
        'lawfirmIdString': string,
        'request': PostCourtCoverageRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/courts';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addCourtToCoverage
     * @method
     * @name OtrService#addCourtToCoverageUsingPOST
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {} request - request
     */
    addCourtToCoverageUsingPOST(parameters: {
        'lawfirmIdString': string,
        'request': PostCourtCoverageRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/courts';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmCoverageUsingGETURL(parameters: {
        'lawfirmIdString': number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/coverage';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmCoverage
     * @method
     * @name OtrService#getLawfirmCoverageUsingGET
     * @param {integer} lawfirmIdString - lawfirmIdString
     */
    getLawfirmCoverageUsingGET(parameters: {
        'lawfirmIdString': number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/coverage';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmLawyersUsingGETURL(parameters: {
        'lawfirmIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/lawyers';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmLawyers
     * @method
     * @name OtrService#getLawfirmLawyersUsingGET
     * @param {string} lawfirmIdString - lawfirmIdString
     */
    getLawfirmLawyersUsingGET(parameters: {
        'lawfirmIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/lawyers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateLawfirmSettingsUsingPOSTURL(parameters: {
        'lawfirmIdString': string,
        'request': UpdateLawfirmSettingsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/settings';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateLawfirmSettings
     * @method
     * @name OtrService#updateLawfirmSettingsUsingPOST
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {} request - request
     */
    updateLawfirmSettingsUsingPOST(parameters: {
        'lawfirmIdString': string,
        'request': UpdateLawfirmSettingsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/settings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getStripeConnectedAccountUsingGETURL(parameters: {
        'lawfirmIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/stripe';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getStripeConnectedAccount
     * @method
     * @name OtrService#getStripeConnectedAccountUsingGET
     * @param {string} lawfirmIdString - lawfirmIdString
     */
    getStripeConnectedAccountUsingGET(parameters: {
        'lawfirmIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmIdString}/stripe';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmCaseStatsUsingGETURL(parameters: {
        'lawfirmId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/cases/stats';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmCaseStats
     * @method
     * @name OtrService#getLawfirmCaseStatsUsingGET
     * @param {integer} lawfirmId - lawfirmId
     */
    getLawfirmCaseStatsUsingGET(parameters: {
        'lawfirmId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/cases/stats';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    removeCourtsUsingDELETEURL(parameters: {
        'lawfirmId': number,
        'courtsToRemove': Array < number > | number

        ,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/courts';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);
        if (parameters['courtsToRemove'] !== undefined) {
            queryParameters['courtsToRemove'] = parameters['courtsToRemove'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * removeCourts
     * @method
     * @name OtrService#removeCourtsUsingDELETE
     * @param {integer} lawfirmId - lawfirmId
     * @param {array} courtsToRemove - courtsToRemove
     */
    removeCourtsUsingDELETE(parameters: {
        'lawfirmId': number,
        'courtsToRemove': Array < number > | number

        ,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/courts';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['courtsToRemove'] !== undefined) {
                queryParameters['courtsToRemove'] = parameters['courtsToRemove'];
            }

            if (parameters['courtsToRemove'] === undefined) {
                reject(new Error('Missing required  parameter: courtsToRemove'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getDocumentUsingGETURL(parameters: {
        'lawfirmId': string,
        'docType': "ENGAGEMENT_LETTER" | "OTHER_IMAGE",
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/documents';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);
        if (parameters['docType'] !== undefined) {
            queryParameters['doc_type'] = parameters['docType'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getDocument
     * @method
     * @name OtrService#getDocumentUsingGET
     * @param {string} lawfirmId - lawfirmId
     * @param {string} docType - docType
     */
    getDocumentUsingGET(parameters: {
        'lawfirmId': string,
        'docType': "ENGAGEMENT_LETTER" | "OTHER_IMAGE",
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/documents';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['docType'] !== undefined) {
                queryParameters['doc_type'] = parameters['docType'];
            }

            if (parameters['docType'] === undefined) {
                reject(new Error('Missing required  parameter: docType'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    generateDocUsingPOSTURL(parameters: {
        'lawfirmId': string,
        'docType': "ENGAGEMENT_LETTER" | "OTHER_IMAGE",
        'request' ? : GetDocumentsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/documents';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);
        if (parameters['docType'] !== undefined) {
            queryParameters['doc_type'] = parameters['docType'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * generateDoc
     * @method
     * @name OtrService#generateDocUsingPOST
     * @param {string} lawfirmId - lawfirmId
     * @param {string} docType - docType
     * @param {} request - request
     */
    generateDocUsingPOST(parameters: {
        'lawfirmId': string,
        'docType': "ENGAGEMENT_LETTER" | "OTHER_IMAGE",
        'request' ? : GetDocumentsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/documents';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['docType'] !== undefined) {
                queryParameters['doc_type'] = parameters['docType'];
            }

            if (parameters['docType'] === undefined) {
                reject(new Error('Missing required  parameter: docType'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    uploadCopyUsingPUTURL(parameters: {
        'lawfirmId': string,
        'request': PutDocumentRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/documents';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * uploadCopy
     * @method
     * @name OtrService#uploadCopyUsingPUT
     * @param {string} lawfirmId - lawfirmId
     * @param {} request - request
     */
    uploadCopyUsingPUT(parameters: {
        'lawfirmId': string,
        'request': PutDocumentRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/documents';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    previewDocUsingPOSTURL(parameters: {
        'lawfirmId': string,
        'docType': "ENGAGEMENT_LETTER" | "OTHER_IMAGE",
        'request': PreviewDocumentRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/documents/preview';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);
        if (parameters['docType'] !== undefined) {
            queryParameters['doc_type'] = parameters['docType'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * previewDoc
     * @method
     * @name OtrService#previewDocUsingPOST
     * @param {string} lawfirmId - lawfirmId
     * @param {string} docType - docType
     * @param {} request - request
     */
    previewDocUsingPOST(parameters: {
        'lawfirmId': string,
        'docType': "ENGAGEMENT_LETTER" | "OTHER_IMAGE",
        'request': PreviewDocumentRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/documents/preview';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['docType'] !== undefined) {
                queryParameters['doc_type'] = parameters['docType'];
            }

            if (parameters['docType'] === undefined) {
                reject(new Error('Missing required  parameter: docType'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmInboxMessagesUsingGETURL(parameters: {
        'lawfirmId': number,
        'page' ? : number,
        'length' ? : number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/messages';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);
        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['length'] !== undefined) {
            queryParameters['length'] = parameters['length'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmInboxMessages
     * @method
     * @name OtrService#getLawfirmInboxMessagesUsingGET
     * @param {integer} lawfirmId - lawfirmId
     * @param {integer} page - page
     * @param {integer} length - length
     */
    getLawfirmInboxMessagesUsingGET(parameters: {
        'lawfirmId': number,
        'page' ? : number,
        'length' ? : number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/messages';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['page'] !== undefined) {
                queryParameters['page'] = parameters['page'];
            }

            if (parameters['length'] !== undefined) {
                queryParameters['length'] = parameters['length'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getOtrLawfirmNotesUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/otr-notes';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getOtrLawfirmNotes
     * @method
     * @name OtrService#getOtrLawfirmNotesUsingGET
     */
    getOtrLawfirmNotesUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/otr-notes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmPaymentMethodsUsingGETURL(parameters: {
        'lawfirmId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/paymentmethods';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Retrieves all the payment methods available on the lawfirm's Stripe account.
     * @method
     * @name OtrService#getLawfirmPaymentMethodsUsingGET
     * @param {integer} lawfirmId - lawfirmId
     */
    getLawfirmPaymentMethodsUsingGET(parameters: {
        'lawfirmId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/paymentmethods';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateLawfirmWithPictureUsingPUTURL(parameters: {
        'lawfirmId': string,
        'lawfirmPictureRequest': LawfirmDomainPictureRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/picture';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateLawfirmWithPicture
     * @method
     * @name OtrService#updateLawfirmWithPictureUsingPUT
     * @param {string} lawfirmId - lawfirmId
     * @param {} lawfirmPictureRequest - lawfirmPictureRequest
     */
    updateLawfirmWithPictureUsingPUT(parameters: {
        'lawfirmId': string,
        'lawfirmPictureRequest': LawfirmDomainPictureRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/picture';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['lawfirmPictureRequest'] !== undefined) {
                body = parameters['lawfirmPictureRequest'];
            }

            if (parameters['lawfirmPictureRequest'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmPictureRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addACHToLawfirmStripeAccountUsingPOSTURL(parameters: {
        'lawfirmId': string,
        'request': AddACHToStripeAccountRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/stripe/ach';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addACHToLawfirmStripeAccount
     * @method
     * @name OtrService#addACHToLawfirmStripeAccountUsingPOST
     * @param {string} lawfirmId - lawfirmId
     * @param {} request - request
     */
    addACHToLawfirmStripeAccountUsingPOST(parameters: {
        'lawfirmId': string,
        'request': AddACHToStripeAccountRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/stripe/ach';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteBankAccountFromLawfirmStripeAccountUsingDELETEURL(parameters: {
        'lawfirmId': number,
        'bankAccountId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/stripe/bank-accounts/{bankAccountId}';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

        path = path.replace('{bankAccountId}', `${parameters['bankAccountId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * deleteBankAccountFromLawfirmStripeAccount
     * @method
     * @name OtrService#deleteBankAccountFromLawfirmStripeAccountUsingDELETE
     * @param {integer} lawfirmId - lawfirmId
     * @param {string} bankAccountId - bankAccountId
     */
    deleteBankAccountFromLawfirmStripeAccountUsingDELETE(parameters: {
        'lawfirmId': number,
        'bankAccountId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/stripe/bank-accounts/{bankAccountId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            path = path.replace('{bankAccountId}', `${parameters['bankAccountId']}`);

            if (parameters['bankAccountId'] === undefined) {
                reject(new Error('Missing required  parameter: bankAccountId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    setDefaultPaymentMethodForLawfirmUsingPUTURL(parameters: {
        'lawfirmId': number,
        'stripePaymentSourceId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/stripe/payment-methods/default';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);
        if (parameters['stripePaymentSourceId'] !== undefined) {
            queryParameters['stripePaymentSourceId'] = parameters['stripePaymentSourceId'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * setDefaultPaymentMethodForLawfirm
     * @method
     * @name OtrService#setDefaultPaymentMethodForLawfirmUsingPUT
     * @param {integer} lawfirmId - lawfirmId
     * @param {string} stripePaymentSourceId - stripePaymentSourceId
     */
    setDefaultPaymentMethodForLawfirmUsingPUT(parameters: {
        'lawfirmId': number,
        'stripePaymentSourceId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/stripe/payment-methods/default';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['stripePaymentSourceId'] !== undefined) {
                queryParameters['stripePaymentSourceId'] = parameters['stripePaymentSourceId'];
            }

            if (parameters['stripePaymentSourceId'] === undefined) {
                reject(new Error('Missing required  parameter: stripePaymentSourceId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmTransactionsUsingGETURL(parameters: {
        'lawfirmId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/transactions';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmTransactions
     * @method
     * @name OtrService#getLawfirmTransactionsUsingGET
     * @param {string} lawfirmId - lawfirmId
     */
    getLawfirmTransactionsUsingGET(parameters: {
        'lawfirmId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawfirms/{lawfirmId}/transactions';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    upsertLawyerUsingPOSTURL(parameters: {
        'request': NewLawyerRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawyers';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * upsertLawyer
     * @method
     * @name OtrService#upsertLawyerUsingPOST
     * @param {} request - request
     */
    upsertLawyerUsingPOST(parameters: {
        'request': NewLawyerRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawyers';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    saveLawyerLeadUsingPOSTURL(parameters: {
        'request': SaveLawyerLeadRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawyers/lead';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * saveLawyerLead
     * @method
     * @name OtrService#saveLawyerLeadUsingPOST
     * @param {} request - request
     */
    saveLawyerLeadUsingPOST(parameters: {
        'request': SaveLawyerLeadRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawyers/lead';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawyerEmailGuessesUsingGETURL(parameters: {
        'lawyerId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawyers/{lawyerId}/email-guesses';

        path = path.replace('{lawyerId}', `${parameters['lawyerId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawyerEmailGuesses
     * @method
     * @name OtrService#getLawyerEmailGuessesUsingGET
     * @param {integer} lawyerId - lawyerId
     */
    getLawyerEmailGuessesUsingGET(parameters: {
        'lawyerId': number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/lawyers/{lawyerId}/email-guesses';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawyerId}', `${parameters['lawyerId']}`);

            if (parameters['lawyerId'] === undefined) {
                reject(new Error('Missing required  parameter: lawyerId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    notifyClientActionRequirementUsingPOSTURL(parameters: {
        'request': ClientActionRequiredRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/action-required';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * notifyClientActionRequirement
     * @method
     * @name OtrService#notifyClientActionRequirementUsingPOST
     * @param {} request - request
     */
    notifyClientActionRequirementUsingPOST(parameters: {
        'request': ClientActionRequiredRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/action-required';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    pushCaseMessageUsingPOSTURL(parameters: {
        'caseId': string,
        'pushRequest': PushNotificationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/cases/{caseId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * pushCaseMessage
     * @method
     * @name OtrService#pushCaseMessageUsingPOST
     * @param {string} caseId - caseId
     * @param {} pushRequest - pushRequest
     */
    pushCaseMessageUsingPOST(parameters: {
        'caseId': string,
        'pushRequest': PushNotificationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/cases/{caseId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['pushRequest'] !== undefined) {
                body = parameters['pushRequest'];
            }

            if (parameters['pushRequest'] === undefined) {
                reject(new Error('Missing required  parameter: pushRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    registerUsingPOSTURL(parameters: {
        'request': PushNotificationRegistrationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/register';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * register
     * @method
     * @name OtrService#registerUsingPOST
     * @param {} request - request
     */
    registerUsingPOST(parameters: {
        'request': PushNotificationRegistrationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/register';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getUnreadCountsUsingGETURL(parameters: {
        'includeMessage' ? : boolean,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/unread';
        if (parameters['includeMessage'] !== undefined) {
            queryParameters['includeMessage'] = parameters['includeMessage'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getUnreadCounts
     * @method
     * @name OtrService#getUnreadCountsUsingGET
     * @param {boolean} includeMessage - includeMessage
     */
    getUnreadCountsUsingGET(parameters: {
        'includeMessage' ? : boolean,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/unread';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['includeMessage'] !== undefined) {
                queryParameters['includeMessage'] = parameters['includeMessage'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    markReadUsingDELETEURL(parameters: {
        'caseId': string,
        'request': DeleteNotificationEventRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/unread/{caseId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * markRead
     * @method
     * @name OtrService#markReadUsingDELETE
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    markReadUsingDELETE(parameters: {
        'caseId': string,
        'request': DeleteNotificationEventRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/unread/{caseId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    pushNotificationToUserUsingPOSTURL(parameters: {
        'recipientId': string,
        'pushRequest': PushNotificationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/users/{recipientId}';

        path = path.replace('{recipientId}', `${parameters['recipientId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * pushNotificationToUser
     * @method
     * @name OtrService#pushNotificationToUserUsingPOST
     * @param {string} recipientId - recipientId
     * @param {} pushRequest - pushRequest
     */
    pushNotificationToUserUsingPOST(parameters: {
        'recipientId': string,
        'pushRequest': PushNotificationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/notifications/users/{recipientId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{recipientId}', `${parameters['recipientId']}`);

            if (parameters['recipientId'] === undefined) {
                reject(new Error('Missing required  parameter: recipientId'));
                return;
            }

            if (parameters['pushRequest'] !== undefined) {
                body = parameters['pushRequest'];
            }

            if (parameters['pushRequest'] === undefined) {
                reject(new Error('Missing required  parameter: pushRequest'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getAvailablePaymentPlansUsingPOSTURL(parameters: {
        'lawfirmId': string,
        'legalFeeInCents': string,
        'state': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/payment-plans/{lawfirmId}/case-payment';

        path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);
        if (parameters['legalFeeInCents'] !== undefined) {
            queryParameters['legalFeeInCents'] = parameters['legalFeeInCents'];
        }

        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getAvailablePaymentPlans
     * @method
     * @name OtrService#getAvailablePaymentPlansUsingPOST
     * @param {string} lawfirmId - lawfirmId
     * @param {string} legalFeeInCents - legalFeeInCents
     * @param {string} state - state
     */
    getAvailablePaymentPlansUsingPOST(parameters: {
        'lawfirmId': string,
        'legalFeeInCents': string,
        'state': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/payment-plans/{lawfirmId}/case-payment';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmId}', `${parameters['lawfirmId']}`);

            if (parameters['lawfirmId'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmId'));
                return;
            }

            if (parameters['legalFeeInCents'] !== undefined) {
                queryParameters['legalFeeInCents'] = parameters['legalFeeInCents'];
            }

            if (parameters['legalFeeInCents'] === undefined) {
                reject(new Error('Missing required  parameter: legalFeeInCents'));
                return;
            }

            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
            }

            if (parameters['state'] === undefined) {
                reject(new Error('Missing required  parameter: state'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getActiveRatesByAreaUsingPOSTURL(parameters: {
        'request': GeoRatesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/rates';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getActiveRatesByArea
     * @method
     * @name OtrService#getActiveRatesByAreaUsingPOST
     * @param {} request - request
     */
    getActiveRatesByAreaUsingPOST(parameters: {
        'request': GeoRatesRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/rates';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getReferralHistoryUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getReferralHistory
     * @method
     * @name OtrService#getReferralHistoryUsingGET
     */
    getReferralHistoryUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getReferralCodesUsingGETURL(parameters: {
        'isActive' ? : boolean,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes';
        if (parameters['isActive'] !== undefined) {
            queryParameters['isActive'] = parameters['isActive'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getReferralCodes
     * @method
     * @name OtrService#getReferralCodesUsingGET
     * @param {boolean} isActive - isActive
     */
    getReferralCodesUsingGET(parameters: {
        'isActive' ? : boolean,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['isActive'] !== undefined) {
                queryParameters['isActive'] = parameters['isActive'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    generateReferralCodeUsingPOSTURL(parameters: {
        'request': CreateReferralCodeRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Referral codes are currently immutable. Meaning, once a referral code is created then no modification is allowed. In urgent scenarios, we can update the values via SQL. If you want to apply a discount to the referee then enter a negative value (applies both for percentage_discount and cents_value types), and enter a positive value if you want to increase the price.
     * @method
     * @name OtrService#generateReferralCodeUsingPOST
     * @param {} request - request
     */
    generateReferralCodeUsingPOST(parameters: {
        'request': CreateReferralCodeRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getReferralCodeUsingGETURL(parameters: {
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes/{codeId}';

        path = path.replace('{codeId}', `${parameters['codeId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getReferralCode
     * @method
     * @name OtrService#getReferralCodeUsingGET
     * @param {string} codeId - codeId
     */
    getReferralCodeUsingGET(parameters: {
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes/{codeId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{codeId}', `${parameters['codeId']}`);

            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    markCodeAsInactiveUsingDELETEURL(parameters: {
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes/{codeId}';

        path = path.replace('{codeId}', `${parameters['codeId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * markCodeAsInactive
     * @method
     * @name OtrService#markCodeAsInactiveUsingDELETE
     * @param {string} codeId - codeId
     */
    markCodeAsInactiveUsingDELETE(parameters: {
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes/{codeId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{codeId}', `${parameters['codeId']}`);

            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    approveReferralCodeUsingPUTURL(parameters: {
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes/{codeId}/approve';

        path = path.replace('{codeId}', `${parameters['codeId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Only for admins. This will approve and activate a given referral code
     * @method
     * @name OtrService#approveReferralCodeUsingPUT
     * @param {string} codeId - codeId
     */
    approveReferralCodeUsingPUT(parameters: {
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes/{codeId}/approve';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{codeId}', `${parameters['codeId']}`);

            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    validateReferralCodeUsingGETURL(parameters: {
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes/{codeId}/validate';

        path = path.replace('{codeId}', `${parameters['codeId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Validates and returns the referral code. Validation includes: Are we passed the expiration date? Has the code exceeded it's max use count?
     * @method
     * @name OtrService#validateReferralCodeUsingGET
     * @param {string} codeId - codeId
     */
    validateReferralCodeUsingGET(parameters: {
        'codeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/codes/{codeId}/validate';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{codeId}', `${parameters['codeId']}`);

            if (parameters['codeId'] === undefined) {
                reject(new Error('Missing required  parameter: codeId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    publishReferralContactsUsingPOSTURL(parameters: {
        'request': PublishReferralRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/contacts';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * publishReferralContacts
     * @method
     * @name OtrService#publishReferralContactsUsingPOST
     * @param {} request - request
     */
    publishReferralContactsUsingPOST(parameters: {
        'request': PublishReferralRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/contacts';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getUserReferralSourceTypesUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/sources';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getUserReferralSourceTypes
     * @method
     * @name OtrService#getUserReferralSourceTypesUsingGET
     */
    getUserReferralSourceTypesUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/sources';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    setReferralSourceUsingPOSTURL(parameters: {
        'request': PostReferralSourceRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/sources';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * setReferralSource
     * @method
     * @name OtrService#setReferralSourceUsingPOST
     * @param {} request - request
     */
    setReferralSourceUsingPOST(parameters: {
        'request': PostReferralSourceRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/referrals/sources';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getRefLinksForUserUsingGETURL(parameters: {
        'userIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/reflinks/{userIdString}';

        path = path.replace('{userIdString}', `${parameters['userIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getRefLinksForUser
     * @method
     * @name OtrService#getRefLinksForUserUsingGET
     * @param {string} userIdString - userIdString
     */
    getRefLinksForUserUsingGET(parameters: {
        'userIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/reflinks/{userIdString}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userIdString}', `${parameters['userIdString']}`);

            if (parameters['userIdString'] === undefined) {
                reject(new Error('Missing required  parameter: userIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    listCustomerReviewsUsingGETURL(parameters: {
        'page' ? : number,
        'size' ? : number,
        'isFeatured' ? : boolean,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/reviews';
        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['size'] !== undefined) {
            queryParameters['size'] = parameters['size'];
        }

        if (parameters['isFeatured'] !== undefined) {
            queryParameters['isFeatured'] = parameters['isFeatured'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * listCustomerReviews
     * @method
     * @name OtrService#listCustomerReviewsUsingGET
     * @param {integer} page - page
     * @param {integer} size - size
     * @param {boolean} isFeatured - isFeatured
     */
    listCustomerReviewsUsingGET(parameters: {
        'page' ? : number,
        'size' ? : number,
        'isFeatured' ? : boolean,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/reviews';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['page'] !== undefined) {
                queryParameters['page'] = parameters['page'];
            }

            if (parameters['size'] !== undefined) {
                queryParameters['size'] = parameters['size'];
            }

            if (parameters['isFeatured'] !== undefined) {
                queryParameters['isFeatured'] = parameters['isFeatured'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getScheduledTasksUsingGETURL(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/scheduled-tasks/{caseId}';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getScheduledTasks
     * @method
     * @name OtrService#getScheduledTasksUsingGET
     * @param {string} caseId - caseId
     */
    getScheduledTasksUsingGET(parameters: {
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/scheduled-tasks/{caseId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    rescheduleTaskUsingPUTURL(parameters: {
        'taskId': string,
        'request': RescheduleTaskRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/scheduled-tasks/{taskId}/reschedule';

        path = path.replace('{taskId}', `${parameters['taskId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * rescheduleTask
     * @method
     * @name OtrService#rescheduleTaskUsingPUT
     * @param {string} taskId - taskId
     * @param {} request - request
     */
    rescheduleTaskUsingPUT(parameters: {
        'taskId': string,
        'request': RescheduleTaskRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/scheduled-tasks/{taskId}/reschedule';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{taskId}', `${parameters['taskId']}`);

            if (parameters['taskId'] === undefined) {
                reject(new Error('Missing required  parameter: taskId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    handleIncomingEmailsUsingPOSTURL(parameters: {
        'request': SNSNotificationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/ses/inbound-emails';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * handleIncomingEmails
     * @method
     * @name OtrService#handleIncomingEmailsUsingPOST
     * @param {} request - request
     */
    handleIncomingEmailsUsingPOST(parameters: {
        'request': SNSNotificationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/ses/inbound-emails';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json,text/plain';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    putSettingUsingPOSTURL(parameters: {
        'request': PutUserSettingsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/settings';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * putSetting
     * @method
     * @name OtrService#putSettingUsingPOST
     * @param {} request - request
     */
    putSettingUsingPOST(parameters: {
        'request': PutUserSettingsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/settings';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    registerNewUserUsingPOSTURL(parameters: {
        'request': RegisterNewUserRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/signup';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * registerNewUser
     * @method
     * @name OtrService#registerNewUserUsingPOST
     * @param {} request - request
     */
    registerNewUserUsingPOST(parameters: {
        'request': RegisterNewUserRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/signup';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    connectStripeAccountUsingPOSTURL(parameters: {
        'code': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/stripe/connect';
        if (parameters['code'] !== undefined) {
            queryParameters['code'] = parameters['code'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * connectStripeAccount
     * @method
     * @name OtrService#connectStripeAccountUsingPOST
     * @param {string} code - authorizationCode
     */
    connectStripeAccountUsingPOST(parameters: {
        'code': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/stripe/connect';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['code'] !== undefined) {
                queryParameters['code'] = parameters['code'];
            }

            if (parameters['code'] === undefined) {
                reject(new Error('Missing required  parameter: code'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    handleStripeWebhookUsingPOSTURL(parameters: {
        'request' ? : string,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/stripe/webhook';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * handleStripeWebhook
     * @method
     * @name OtrService#handleStripeWebhookUsingPOST
     * @param {} request - request
     */
    handleStripeWebhookUsingPOST(parameters: {
        'request' ? : string,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/stripe/webhook';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    handleStripeWebhookOnDemandUsingPOSTURL(parameters: {
        'request' ? : string,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/stripe/webhook/manual';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * handleStripeWebhookOnDemand
     * @method
     * @name OtrService#handleStripeWebhookOnDemandUsingPOST
     * @param {} request - request
     */
    handleStripeWebhookOnDemandUsingPOST(parameters: {
        'request' ? : string,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/stripe/webhook/manual';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    retrieveConnectedAccountDetailsUsingGETURL(parameters: {
        'accountId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/stripe/{accountId}';

        path = path.replace('{accountId}', `${parameters['accountId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * retrieveConnectedAccountDetails
     * @method
     * @name OtrService#retrieveConnectedAccountDetailsUsingGET
     * @param {string} accountId - accountId
     */
    retrieveConnectedAccountDetailsUsingGET(parameters: {
        'accountId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/stripe/{accountId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{accountId}', `${parameters['accountId']}`);

            if (parameters['accountId'] === undefined) {
                reject(new Error('Missing required  parameter: accountId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    subscribeUsingPOSTURL(parameters: {
        'request': SubscribeRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/subscribe';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * subscribe
     * @method
     * @name OtrService#subscribeUsingPOST
     * @param {} request - request
     */
    subscribeUsingPOST(parameters: {
        'request': SubscribeRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/subscribe';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    persistTicketEvaluationRequestUsingPOSTURL(parameters: {
        'request': TicketReviewRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/ticket-evaluation';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * persistTicketEvaluationRequest
     * @method
     * @name OtrService#persistTicketEvaluationRequestUsingPOST
     * @param {} request - request
     */
    persistTicketEvaluationRequestUsingPOST(parameters: {
        'request': TicketReviewRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/ticket-evaluation';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateTicketEvaluationRequestUsingPUTURL(parameters: {
        'ticketEvaluationRequestId': number,
        'request': TicketReviewRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/ticket-evaluation/{ticketEvaluationRequestId}';

        path = path.replace('{ticketEvaluationRequestId}', `${parameters['ticketEvaluationRequestId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateTicketEvaluationRequest
     * @method
     * @name OtrService#updateTicketEvaluationRequestUsingPUT
     * @param {integer} ticketEvaluationRequestId - ticketEvaluationRequestId
     * @param {} request - request
     */
    updateTicketEvaluationRequestUsingPUT(parameters: {
        'ticketEvaluationRequestId': number,
        'request': TicketReviewRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/ticket-evaluation/{ticketEvaluationRequestId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{ticketEvaluationRequestId}', `${parameters['ticketEvaluationRequestId']}`);

            if (parameters['ticketEvaluationRequestId'] === undefined) {
                reject(new Error('Missing required  parameter: ticketEvaluationRequestId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCurrentUserInfoUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCurrentUserInfo
     * @method
     * @name OtrService#getCurrentUserInfoUsingGET
     */
    getCurrentUserInfoUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateUserDetailsUsingPUTURL(parameters: {
        'request': UpdateUserDetailsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateUserDetails
     * @method
     * @name OtrService#updateUserDetailsUsingPUT
     * @param {} request - request
     */
    updateUserDetailsUsingPUT(parameters: {
        'request': UpdateUserDetailsRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    changeUserPasswordUsingPUTURL(parameters: {
        'request': ChangeUserPasswordRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user/p';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * changeUserPassword
     * @method
     * @name OtrService#changeUserPasswordUsingPUT
     * @param {} request - request
     */
    changeUserPasswordUsingPUT(parameters: {
        'request': ChangeUserPasswordRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user/p';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    resetUserPasswordUsingPOSTURL(parameters: {
        'request': ResetUserPasswordRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user/p/reset';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * resetUserPassword
     * @method
     * @name OtrService#resetUserPasswordUsingPOST
     * @param {} request - request
     */
    resetUserPasswordUsingPOST(parameters: {
        'request': ResetUserPasswordRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user/p/reset';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    verifyPwdResetTokenUsingGETURL(parameters: {
        'token': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user/password/token';
        if (parameters['token'] !== undefined) {
            queryParameters['token'] = parameters['token'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * verifyPwdResetToken
     * @method
     * @name OtrService#verifyPwdResetTokenUsingGET
     * @param {string} token - token
     */
    verifyPwdResetTokenUsingGET(parameters: {
        'token': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user/password/token';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['token'] !== undefined) {
                queryParameters['token'] = parameters['token'];
            }

            if (parameters['token'] === undefined) {
                reject(new Error('Missing required  parameter: token'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    sendResetPasswordTokenUsingPOSTURL(parameters: {
        'email': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user/password/token';
        if (parameters['email'] !== undefined) {
            queryParameters['email'] = parameters['email'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * sendResetPasswordToken
     * @method
     * @name OtrService#sendResetPasswordTokenUsingPOST
     * @param {string} email - userEmail
     */
    sendResetPasswordTokenUsingPOST(parameters: {
        'email': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/user/password/token';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['email'] !== undefined) {
                queryParameters['email'] = parameters['email'];
            }

            if (parameters['email'] === undefined) {
                reject(new Error('Missing required  parameter: email'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    isUserLoggedInUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/authentication/status';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * isUserLoggedIn
     * @method
     * @name OtrService#isUserLoggedInUsingGET
     */
    isUserLoggedInUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/authentication/status';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCountOfMatchingUsersUsingPOSTURL(parameters: {
        'request': GetCountOfMatchingUsersRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/matches';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCountOfMatchingUsers
     * @method
     * @name OtrService#getCountOfMatchingUsersUsingPOST
     * @param {} request - request
     */
    getCountOfMatchingUsersUsingPOST(parameters: {
        'request': GetCountOfMatchingUsersRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/matches';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    findMatchingUsersUsingPOSTURL(parameters: {
        'request': FindMatchingUsersRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/search';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * findMatchingUsers
     * @method
     * @name OtrService#findMatchingUsersUsingPOST
     * @param {} request - request
     */
    findMatchingUsersUsingPOST(parameters: {
        'request': FindMatchingUsersRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/search';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addCardToStripeAccountUsingPOSTURL(parameters: {
        'request': AddCardToStripeAccountRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/stripe/account/cards';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addCardToStripeAccount
     * @method
     * @name OtrService#addCardToStripeAccountUsingPOST
     * @param {} request - request
     */
    addCardToStripeAccountUsingPOST(parameters: {
        'request': AddCardToStripeAccountRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/stripe/account/cards';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCardUsingGETURL(parameters: {
        'cardId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/stripe/account/cards/{cardId}';

        path = path.replace('{cardId}', `${parameters['cardId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCard
     * @method
     * @name OtrService#getCardUsingGET
     * @param {string} cardId - cardId
     */
    getCardUsingGET(parameters: {
        'cardId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/stripe/account/cards/{cardId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{cardId}', `${parameters['cardId']}`);

            if (parameters['cardId'] === undefined) {
                reject(new Error('Missing required  parameter: cardId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteCardUsingDELETEURL(parameters: {
        'cardId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/stripe/account/cards/{cardId}';

        path = path.replace('{cardId}', `${parameters['cardId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * deleteCard
     * @method
     * @name OtrService#deleteCardUsingDELETE
     * @param {string} cardId - cardId
     */
    deleteCardUsingDELETE(parameters: {
        'cardId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/stripe/account/cards/{cardId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{cardId}', `${parameters['cardId']}`);

            if (parameters['cardId'] === undefined) {
                reject(new Error('Missing required  parameter: cardId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getSupportTicketsForUserUsingGETURL(parameters: {
        'email': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{email}/support-tickets';

        path = path.replace('{email}', `${parameters['email']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getSupportTicketsForUser
     * @method
     * @name OtrService#getSupportTicketsForUserUsingGET
     * @param {string} email - email
     */
    getSupportTicketsForUserUsingGET(parameters: {
        'email': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{email}/support-tickets';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{email}', `${parameters['email']}`);

            if (parameters['email'] === undefined) {
                reject(new Error('Missing required  parameter: email'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getUserDetailsUsingGETURL(parameters: {
        'userIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userIdString}';

        path = path.replace('{userIdString}', `${parameters['userIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getUserDetails
     * @method
     * @name OtrService#getUserDetailsUsingGET
     * @param {string} userIdString - userIdString
     */
    getUserDetailsUsingGET(parameters: {
        'userIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userIdString}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userIdString}', `${parameters['userIdString']}`);

            if (parameters['userIdString'] === undefined) {
                reject(new Error('Missing required  parameter: userIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getPaymentMethodsForUserUsingGETURL(parameters: {
        'userIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userIdString}/paymentmethods';

        path = path.replace('{userIdString}', `${parameters['userIdString']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Retrieves all the payment methods available on the user's Stripe account.
     * @method
     * @name OtrService#getPaymentMethodsForUserUsingGET
     * @param {string} userIdString - userIdString
     */
    getPaymentMethodsForUserUsingGET(parameters: {
        'userIdString': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userIdString}/paymentmethods';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userIdString}', `${parameters['userIdString']}`);

            if (parameters['userIdString'] === undefined) {
                reject(new Error('Missing required  parameter: userIdString'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addExtraAccountUsingPOSTURL(parameters: {
        'userId': string,
        'request': AddExtraAccountRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/account';

        path = path.replace('{userId}', `${parameters['userId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addExtraAccount
     * @method
     * @name OtrService#addExtraAccountUsingPOST
     * @param {string} userId - userId
     * @param {} request - request
     */
    addExtraAccountUsingPOST(parameters: {
        'userId': string,
        'request': AddExtraAccountRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/account';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    setCardAsPrimaryUsingPUTURL(parameters: {
        'userId': string,
        'cardId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/account/cards/{cardId}/primary';

        path = path.replace('{userId}', `${parameters['userId']}`);

        path = path.replace('{cardId}', `${parameters['cardId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * setCardAsPrimary
     * @method
     * @name OtrService#setCardAsPrimaryUsingPUT
     * @param {string} userId - userId
     * @param {string} cardId - cardId
     */
    setCardAsPrimaryUsingPUT(parameters: {
        'userId': string,
        'cardId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/account/cards/{cardId}/primary';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            path = path.replace('{cardId}', `${parameters['cardId']}`);

            if (parameters['cardId'] === undefined) {
                reject(new Error('Missing required  parameter: cardId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getCasesForUserUsingGETURL(parameters: {
        'userId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/cases';

        path = path.replace('{userId}', `${parameters['userId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getCasesForUser
     * @method
     * @name OtrService#getCasesForUserUsingGET
     * @param {string} userId - userId
     */
    getCasesForUserUsingGET(parameters: {
        'userId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/cases';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    findChargeDisputesByUserIdUsingGETURL(parameters: {
        'userId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/disputes';

        path = path.replace('{userId}', `${parameters['userId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * findChargeDisputesByUserId
     * @method
     * @name OtrService#findChargeDisputesByUserIdUsingGET
     * @param {string} userId - userId
     */
    findChargeDisputesByUserIdUsingGET(parameters: {
        'userId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/disputes';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    resetUserPasswordByAdminUsingPUTURL(parameters: {
        'userId': number,
        'request': ResetUserPasswordRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/password';

        path = path.replace('{userId}', `${parameters['userId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * resetUserPasswordByAdmin
     * @method
     * @name OtrService#resetUserPasswordByAdminUsingPUT
     * @param {integer} userId - userId
     * @param {} request - request
     */
    resetUserPasswordByAdminUsingPUT(parameters: {
        'userId': number,
        'request': ResetUserPasswordRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/password';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteCardForUserUsingDELETEURL(parameters: {
        'userId': string,
        'cardId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/stripe/account/cards/{cardId}';

        path = path.replace('{userId}', `${parameters['userId']}`);

        path = path.replace('{cardId}', `${parameters['cardId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * deleteCardForUser
     * @method
     * @name OtrService#deleteCardForUserUsingDELETE
     * @param {string} userId - userId
     * @param {string} cardId - cardId
     */
    deleteCardForUserUsingDELETE(parameters: {
        'userId': string,
        'cardId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/stripe/account/cards/{cardId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            path = path.replace('{cardId}', `${parameters['cardId']}`);

            if (parameters['cardId'] === undefined) {
                reject(new Error('Missing required  parameter: cardId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addACHToUserStripeAccountUsingPOSTURL(parameters: {
        'userId': string,
        'request': AddACHToStripeAccountRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/stripe/ach';

        path = path.replace('{userId}', `${parameters['userId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addACHToUserStripeAccount
     * @method
     * @name OtrService#addACHToUserStripeAccountUsingPOST
     * @param {string} userId - userId
     * @param {} request - request
     */
    addACHToUserStripeAccountUsingPOST(parameters: {
        'userId': string,
        'request': AddACHToStripeAccountRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/users/{userId}/stripe/ach';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{userId}', `${parameters['userId']}`);

            if (parameters['userId'] === undefined) {
                reject(new Error('Missing required  parameter: userId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    validateEmailAddressUsingGETURL(parameters: {
        'email': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/validate/email';
        if (parameters['email'] !== undefined) {
            queryParameters['email'] = parameters['email'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * validateEmailAddress
     * @method
     * @name OtrService#validateEmailAddressUsingGET
     * @param {string} email - email
     */
    validateEmailAddressUsingGET(parameters: {
        'email': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/validate/email';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['email'] !== undefined) {
                queryParameters['email'] = parameters['email'];
            }

            if (parameters['email'] === undefined) {
                reject(new Error('Missing required  parameter: email'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getTrafficViolationTypesUsingGETURL(parameters: {
        'state' ? : string,
        'audience' ? : string,
        'flavor' ? : string,
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations';
        if (parameters['state'] !== undefined) {
            queryParameters['state'] = parameters['state'];
        }

        if (parameters['audience'] !== undefined) {
            queryParameters['audience'] = parameters['audience'];
        }

        if (parameters['flavor'] !== undefined) {
            queryParameters['flavor'] = parameters['flavor'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getTrafficViolationTypes
     * @method
     * @name OtrService#getTrafficViolationTypesUsingGET
     * @param {string} state - stateAbbreviation
     * @param {string} audience - audience
     * @param {string} flavor - flavor
     */
    getTrafficViolationTypesUsingGET(parameters: {
        'state' ? : string,
        'audience' ? : string,
        'flavor' ? : string,
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['state'] !== undefined) {
                queryParameters['state'] = parameters['state'];
            }

            if (parameters['audience'] !== undefined) {
                queryParameters['audience'] = parameters['audience'];
            }

            if (parameters['flavor'] !== undefined) {
                queryParameters['flavor'] = parameters['flavor'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getPenaltyTypesUsingGETURL(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/penalties';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getPenaltyTypes
     * @method
     * @name OtrService#getPenaltyTypesUsingGET
     */
    getPenaltyTypesUsingGET(parameters: {
        $queryParameters ? : any,
            $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/penalties';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    updateViolationUsingPUTURL(parameters: {
        'violationId': string,
        'request': UpdateViolationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/{violationId}';

        path = path.replace('{violationId}', `${parameters['violationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * updateViolation
     * @method
     * @name OtrService#updateViolationUsingPUT
     * @param {string} violationId - violationId
     * @param {} request - request
     */
    updateViolationUsingPUT(parameters: {
        'violationId': string,
        'request': UpdateViolationRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/{violationId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{violationId}', `${parameters['violationId']}`);

            if (parameters['violationId'] === undefined) {
                reject(new Error('Missing required  parameter: violationId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getPenaltiesByViolationUsingGETURL(parameters: {
        'violationId': string,
        'flavor' ? : "SHORT" | "ALL",
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/{violationId}/penalties';

        path = path.replace('{violationId}', `${parameters['violationId']}`);
        if (parameters['flavor'] !== undefined) {
            queryParameters['flavor'] = parameters['flavor'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getPenaltiesByViolation
     * @method
     * @name OtrService#getPenaltiesByViolationUsingGET
     * @param {string} violationId - violationId
     * @param {string} flavor - flavor
     */
    getPenaltiesByViolationUsingGET(parameters: {
        'violationId': string,
        'flavor' ? : "SHORT" | "ALL",
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/{violationId}/penalties';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{violationId}', `${parameters['violationId']}`);

            if (parameters['violationId'] === undefined) {
                reject(new Error('Missing required  parameter: violationId'));
                return;
            }

            if (parameters['flavor'] !== undefined) {
                queryParameters['flavor'] = parameters['flavor'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    upsertPenaltyUsingPOSTURL(parameters: {
        'violationId': string,
        'penaltyToAdd': AddPenaltyRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/{violationId}/penalties';

        path = path.replace('{violationId}', `${parameters['violationId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * upsertPenalty
     * @method
     * @name OtrService#upsertPenaltyUsingPOST
     * @param {string} violationId - violationId
     * @param {} penaltyToAdd - penaltyToAdd
     */
    upsertPenaltyUsingPOST(parameters: {
        'violationId': string,
        'penaltyToAdd': AddPenaltyRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/{violationId}/penalties';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{violationId}', `${parameters['violationId']}`);

            if (parameters['violationId'] === undefined) {
                reject(new Error('Missing required  parameter: violationId'));
                return;
            }

            if (parameters['penaltyToAdd'] !== undefined) {
                body = parameters['penaltyToAdd'];
            }

            if (parameters['penaltyToAdd'] === undefined) {
                reject(new Error('Missing required  parameter: penaltyToAdd'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    removePenaltyUsingDELETEURL(parameters: {
        'violationId': string,
        'penaltyTypeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/{violationId}/penalties/{penaltyTypeId}';

        path = path.replace('{violationId}', `${parameters['violationId']}`);

        path = path.replace('{penaltyTypeId}', `${parameters['penaltyTypeId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * removePenalty
     * @method
     * @name OtrService#removePenaltyUsingDELETE
     * @param {string} violationId - violationId
     * @param {string} penaltyTypeId - penaltyTypeId
     */
    removePenaltyUsingDELETE(parameters: {
        'violationId': string,
        'penaltyTypeId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/violations/{violationId}/penalties/{penaltyTypeId}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{violationId}', `${parameters['violationId']}`);

            if (parameters['violationId'] === undefined) {
                reject(new Error('Missing required  parameter: violationId'));
                return;
            }

            path = path.replace('{penaltyTypeId}', `${parameters['penaltyTypeId']}`);

            if (parameters['penaltyTypeId'] === undefined) {
                reject(new Error('Missing required  parameter: penaltyTypeId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    handleBounceOrComplaintEventUsingPOSTURL(parameters: {
        'request': DripWebhookEvent,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/webhooks/drip/bounce-or-complaint';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * handleBounceOrComplaintEvent
     * @method
     * @name OtrService#handleBounceOrComplaintEventUsingPOST
     * @param {} request - request
     */
    handleBounceOrComplaintEventUsingPOST(parameters: {
        'request': DripWebhookEvent,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/webhooks/drip/bounce-or-complaint';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    handleReceivedEmailUsingPOSTURL(parameters: {
        'request': DripWebhookEvent,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/webhooks/drip/received-email';

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * handleReceivedEmail
     * @method
     * @name OtrService#handleReceivedEmailUsingPOST
     * @param {} request - request
     */
    handleReceivedEmailUsingPOST(parameters: {
        'request': DripWebhookEvent,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/webhooks/drip/received-email';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    addActionToCaseV2UsingPOSTURL(parameters: {
        'caseId': string,
        'request': AddActionToCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v2/cases/{caseId}/actions';

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * addActionToCaseV2
     * @method
     * @name OtrService#addActionToCaseV2UsingPOST
     * @param {string} caseId - caseId
     * @param {} request - request
     */
    addActionToCaseV2UsingPOST(parameters: {
        'caseId': string,
        'request': AddActionToCaseRequest,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v2/cases/{caseId}/actions';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    getLawfirmCasesByPageUsingPOSTURL(parameters: {
        'lawfirmIdString': string,
        'request': GetLawfirmSummaryCaseRequest,
        'page' ? : number,
        'length' ? : number,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v2/lawfirm/{lawfirmIdString}/cases';

        path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        if (parameters['length'] !== undefined) {
            queryParameters['length'] = parameters['length'];
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * getLawfirmCasesByPage
     * @method
     * @name OtrService#getLawfirmCasesByPageUsingPOST
     * @param {string} lawfirmIdString - lawfirmIdString
     * @param {} request - request
     * @param {integer} page - page
     * @param {integer} length - length
     */
    getLawfirmCasesByPageUsingPOST(parameters: {
        'lawfirmIdString': string,
        'request': GetLawfirmSummaryCaseRequest,
        'page' ? : number,
        'length' ? : number,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v2/lawfirm/{lawfirmIdString}/cases';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{lawfirmIdString}', `${parameters['lawfirmIdString']}`);

            if (parameters['lawfirmIdString'] === undefined) {
                reject(new Error('Missing required  parameter: lawfirmIdString'));
                return;
            }

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters['request'] === undefined) {
                reject(new Error('Missing required  parameter: request'));
                return;
            }

            if (parameters['page'] !== undefined) {
                queryParameters['page'] = parameters['page'];
            }

            if (parameters['length'] !== undefined) {
                queryParameters['length'] = parameters['length'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    deleteActionFromCaseUsingDELETEURL(parameters: {
        'caseActionIdString': string,
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/{caseId}/actions/{caseActionIdString}';

        path = path.replace('{caseActionIdString}', `${parameters['caseActionIdString']}`);

        path = path.replace('{caseId}', `${parameters['caseId']}`);

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                queryParameters[parameterName] = parameters.$queryParameters[parameterName];
            });
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * deleteActionFromCase
     * @method
     * @name OtrService#deleteActionFromCaseUsingDELETE
     * @param {string} caseActionIdString - caseActionIdString
     * @param {string} caseId - caseId
     */
    deleteActionFromCaseUsingDELETE(parameters: {
        'caseActionIdString': string,
        'caseId': string,
        $queryParameters ? : any,
        $domain ? : string
    }): Promise < request.Response > {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/{caseId}/actions/{caseActionIdString}';
        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '*/*';
            headers['Content-Type'] = 'application/json';

            path = path.replace('{caseActionIdString}', `${parameters['caseActionIdString']}`);

            if (parameters['caseActionIdString'] === undefined) {
                reject(new Error('Missing required  parameter: caseActionIdString'));
                return;
            }

            path = path.replace('{caseId}', `${parameters['caseId']}`);

            if (parameters['caseId'] === undefined) {
                reject(new Error('Missing required  parameter: caseId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

}