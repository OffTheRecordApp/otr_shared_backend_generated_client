"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = require("./api/api");
var angular = require("angular");
var apiModule = angular.module('api', [])
    .service('ActionRequiredControllerApi', api.ActionRequiredControllerApi)
    .service('ActivityFeedControllerApi', api.ActivityFeedControllerApi)
    .service('AddressControllerApi', api.AddressControllerApi)
    .service('AlertNotificationControllerApi', api.AlertNotificationControllerApi)
    .service('AppEventsControllerApi', api.AppEventsControllerApi)
    .service('AuditLawfirmEventsControllerApi', api.AuditLawfirmEventsControllerApi)
    .service('AuthenticationControllerApi', api.AuthenticationControllerApi)
    .service('AwsCredentialsControllerApi', api.AwsCredentialsControllerApi)
    .service('BlogWebhookControllerApi', api.BlogWebhookControllerApi)
    .service('BranchLinkControllerApi', api.BranchLinkControllerApi)
    .service('CaseActionsControllerApi', api.CaseActionsControllerApi)
    .service('CaseControllerApi', api.CaseControllerApi)
    .service('CaseCreationControllerApi', api.CaseCreationControllerApi)
    .service('CaseNotesControllerApi', api.CaseNotesControllerApi)
    .service('CasePaymentControllerApi', api.CasePaymentControllerApi)
    .service('CaseReferralCodeControllerApi', api.CaseReferralCodeControllerApi)
    .service('CaseRefundControllerApi', api.CaseRefundControllerApi)
    .service('CaseStatusControllerApi', api.CaseStatusControllerApi)
    .service('CaseTransferControllerApi', api.CaseTransferControllerApi)
    .service('CertificateControllerApi', api.CertificateControllerApi)
    .service('CitationControllerApi', api.CitationControllerApi)
    .service('ConfigurationControllerApi', api.ConfigurationControllerApi)
    .service('ConsoleListControllerApi', api.ConsoleListControllerApi)
    .service('ContactTimelineControllerApi', api.ContactTimelineControllerApi)
    .service('ConversationControllerApi', api.ConversationControllerApi)
    .service('CountyControllerApi', api.CountyControllerApi)
    .service('CourtControllerApi', api.CourtControllerApi)
    .service('CrmControllerApi', api.CrmControllerApi)
    .service('CustomerLeadControllerApi', api.CustomerLeadControllerApi)
    .service('CustomerReviewControllerApi', api.CustomerReviewControllerApi)
    .service('CustomerServiceAgentBookingsControllerApi', api.CustomerServiceAgentBookingsControllerApi)
    .service('CustomerServiceAgentControllerApi', api.CustomerServiceAgentControllerApi)
    .service('DashboardControllerApi', api.DashboardControllerApi)
    .service('DirectMailControllerApi', api.DirectMailControllerApi)
    .service('DripControllerApi', api.DripControllerApi)
    .service('DripWebhooksControllerApi', api.DripWebhooksControllerApi)
    .service('EmailSubscriptionControllerApi', api.EmailSubscriptionControllerApi)
    .service('FeedbackControllerApi', api.FeedbackControllerApi)
    .service('FreshcallerControllerApi', api.FreshcallerControllerApi)
    .service('FreshdeskTicketControllerApi', api.FreshdeskTicketControllerApi)
    .service('GetCaseControllerApi', api.GetCaseControllerApi)
    .service('HouseholdMateControllerApi', api.HouseholdMateControllerApi)
    .service('InsuranceCalculatorControllerApi', api.InsuranceCalculatorControllerApi)
    .service('LawfirmCaseDecisionControllerApi', api.LawfirmCaseDecisionControllerApi)
    .service('LawfirmCasesControllerApi', api.LawfirmCasesControllerApi)
    .service('LawfirmControllerApi', api.LawfirmControllerApi)
    .service('LawfirmDocumentControllerApi', api.LawfirmDocumentControllerApi)
    .service('LawfirmFeeCoverageControllerApi', api.LawfirmFeeCoverageControllerApi)
    .service('LawfirmPaymentModelControllerApi', api.LawfirmPaymentModelControllerApi)
    .service('LawfirmRatesControllerApi', api.LawfirmRatesControllerApi)
    .service('LawfirmStorefrontControllerApi', api.LawfirmStorefrontControllerApi)
    .service('LawfirmSurchargeControllerApi', api.LawfirmSurchargeControllerApi)
    .service('LawfirmTransactionsControllerApi', api.LawfirmTransactionsControllerApi)
    .service('LawyerControllerApi', api.LawyerControllerApi)
    .service('LineItemControllerApi', api.LineItemControllerApi)
    .service('ListCasesControllerApi', api.ListCasesControllerApi)
    .service('MessagesControllerApi', api.MessagesControllerApi)
    .service('NotesControllerApi', api.NotesControllerApi)
    .service('OnDemandRequestControllerApi', api.OnDemandRequestControllerApi)
    .service('OneTimePasswordControllerApi', api.OneTimePasswordControllerApi)
    .service('PhoneLeadsControllerApi', api.PhoneLeadsControllerApi)
    .service('PushNotificationControllerApi', api.PushNotificationControllerApi)
    .service('RecurringBillingControllerApi', api.RecurringBillingControllerApi)
    .service('RefLinkControllerApi', api.RefLinkControllerApi)
    .service('ReferralCodeControllerApi', api.ReferralCodeControllerApi)
    .service('ReferralControllerApi', api.ReferralControllerApi)
    .service('ReferralSourceControllerApi', api.ReferralSourceControllerApi)
    .service('RefundEligibilityControllerApi', api.RefundEligibilityControllerApi)
    .service('RegistrationControllerApi', api.RegistrationControllerApi)
    .service('ReportingControllerApi', api.ReportingControllerApi)
    .service('ScheduledTaskControllerApi', api.ScheduledTaskControllerApi)
    .service('SingleSignOnControllerApi', api.SingleSignOnControllerApi)
    .service('SnsListenerControllerApi', api.SnsListenerControllerApi)
    .service('SocialLoginControllerApi', api.SocialLoginControllerApi)
    .service('StripeCardControllerApi', api.StripeCardControllerApi)
    .service('StripeControllerApi', api.StripeControllerApi)
    .service('StripeSyncControllerApi', api.StripeSyncControllerApi)
    .service('StripeWebhookControllerApi', api.StripeWebhookControllerApi)
    .service('TicketReviewControllerApi', api.TicketReviewControllerApi)
    .service('TrafficViolationControllerApi', api.TrafficViolationControllerApi)
    .service('UrlRedirectControllerApi', api.UrlRedirectControllerApi)
    .service('UserAccountControllerApi', api.UserAccountControllerApi)
    .service('UserAuditControllerApi', api.UserAuditControllerApi)
    .service('UserControllerApi', api.UserControllerApi)
    .service('UserPasswordControllerApi', api.UserPasswordControllerApi)
    .service('UserProfileControllerApi', api.UserProfileControllerApi)
    .service('UserSearchControllerApi', api.UserSearchControllerApi)
    .service('UtilityControllerApi', api.UtilityControllerApi)
    .service('ValidationControllerApi', api.ValidationControllerApi)
    .service('ViolationPenaltyControllerApi', api.ViolationPenaltyControllerApi);
exports.default = apiModule;
