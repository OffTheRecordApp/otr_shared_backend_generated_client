import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ActionRequiredControllerService } from './api/actionRequiredController.service';
import { ActivityFeedControllerService } from './api/activityFeedController.service';
import { AddressControllerService } from './api/addressController.service';
import { AlertNotificationControllerService } from './api/alertNotificationController.service';
import { AppEventsControllerService } from './api/appEventsController.service';
import { AuditLawfirmEventsControllerService } from './api/auditLawfirmEventsController.service';
import { AuditLogControllerService } from './api/auditLogController.service';
import { AuthenticationControllerService } from './api/authenticationController.service';
import { AwsCredentialsControllerService } from './api/awsCredentialsController.service';
import { BlogWebhookControllerService } from './api/blogWebhookController.service';
import { BranchLinkControllerService } from './api/branchLinkController.service';
import { CaptchaControllerService } from './api/captchaController.service';
import { CaseActionsControllerService } from './api/caseActionsController.service';
import { CaseControllerService } from './api/caseController.service';
import { CaseCounterOfferControllerService } from './api/caseCounterOfferController.service';
import { CaseCreationControllerService } from './api/caseCreationController.service';
import { CaseDeclineControllerService } from './api/caseDeclineController.service';
import { CaseNotesControllerService } from './api/caseNotesController.service';
import { CasePaymentControllerService } from './api/casePaymentController.service';
import { CaseReferralCodeControllerService } from './api/caseReferralCodeController.service';
import { CaseRefundControllerService } from './api/caseRefundController.service';
import { CaseResolutionControllerService } from './api/caseResolutionController.service';
import { CaseStatusControllerService } from './api/caseStatusController.service';
import { CaseTransferControllerService } from './api/caseTransferController.service';
import { CaseUserControllerService } from './api/caseUserController.service';
import { CertificateControllerService } from './api/certificateController.service';
import { CitationAuditControllerService } from './api/citationAuditController.service';
import { CitationControllerService } from './api/citationController.service';
import { CoachingCardsControllerService } from './api/coachingCardsController.service';
import { ConfigurationControllerService } from './api/configurationController.service';
import { ConsoleListControllerService } from './api/consoleListController.service';
import { ContactTimelineControllerService } from './api/contactTimelineController.service';
import { ConversationControllerService } from './api/conversationController.service';
import { CountyControllerService } from './api/countyController.service';
import { CourtControllerService } from './api/courtController.service';
import { CrmControllerService } from './api/crmController.service';
import { CustomerLeadControllerService } from './api/customerLeadController.service';
import { CustomerReviewControllerService } from './api/customerReviewController.service';
import { CustomerServiceAgentBookingsControllerService } from './api/customerServiceAgentBookingsController.service';
import { CustomerServiceAgentControllerService } from './api/customerServiceAgentController.service';
import { DashboardControllerService } from './api/dashboardController.service';
import { DirectMailControllerService } from './api/directMailController.service';
import { DripControllerService } from './api/dripController.service';
import { DripWebhooksControllerService } from './api/dripWebhooksController.service';
import { DriverLicenseControllerService } from './api/driverLicenseController.service';
import { EmailSubscriptionControllerService } from './api/emailSubscriptionController.service';
import { ExternalContentVoteControllerService } from './api/externalContentVoteController.service';
import { ExternalTicketLookupControllerService } from './api/externalTicketLookupController.service';
import { FeedbackControllerService } from './api/feedbackController.service';
import { FreshcallerControllerService } from './api/freshcallerController.service';
import { FreshdeskTicketControllerService } from './api/freshdeskTicketController.service';
import { GetCaseControllerService } from './api/getCaseController.service';
import { HouseholdMateControllerService } from './api/householdMateController.service';
import { HubspotWebhookControllerService } from './api/hubspotWebhookController.service';
import { InsuranceCalculatorControllerService } from './api/insuranceCalculatorController.service';
import { LawfirmCaseDecisionControllerService } from './api/lawfirmCaseDecisionController.service';
import { LawfirmCasesControllerService } from './api/lawfirmCasesController.service';
import { LawfirmControllerService } from './api/lawfirmController.service';
import { LawfirmDocumentControllerService } from './api/lawfirmDocumentController.service';
import { LawfirmFeeCoverageControllerService } from './api/lawfirmFeeCoverageController.service';
import { LawfirmPaymentModelControllerService } from './api/lawfirmPaymentModelController.service';
import { LawfirmRatesControllerService } from './api/lawfirmRatesController.service';
import { LawfirmSettingsControllerService } from './api/lawfirmSettingsController.service';
import { LawfirmStorefrontControllerService } from './api/lawfirmStorefrontController.service';
import { LawfirmSurchargeControllerService } from './api/lawfirmSurchargeController.service';
import { LawfirmTransactionsControllerService } from './api/lawfirmTransactionsController.service';
import { LawyerControllerService } from './api/lawyerController.service';
import { LegalServicesControllerService } from './api/legalServicesController.service';
import { LineItemControllerService } from './api/lineItemController.service';
import { ListCasesControllerService } from './api/listCasesController.service';
import { MediaCreationControllerService } from './api/mediaCreationController.service';
import { MessagesControllerService } from './api/messagesController.service';
import { NotesControllerService } from './api/notesController.service';
import { OcrPredictionControllerService } from './api/ocrPredictionController.service';
import { OnDemandRequestControllerService } from './api/onDemandRequestController.service';
import { OneTimePasswordControllerService } from './api/oneTimePasswordController.service';
import { PhoneLeadsControllerService } from './api/phoneLeadsController.service';
import { PushNotificationControllerService } from './api/pushNotificationController.service';
import { RecurringBillingControllerService } from './api/recurringBillingController.service';
import { RefLinkControllerService } from './api/refLinkController.service';
import { ReferralCodeControllerService } from './api/referralCodeController.service';
import { ReferralControllerService } from './api/referralController.service';
import { ReferralSourceControllerService } from './api/referralSourceController.service';
import { RefundEligibilityControllerService } from './api/refundEligibilityController.service';
import { RegistrationControllerService } from './api/registrationController.service';
import { ReportingControllerService } from './api/reportingController.service';
import { ScheduledTaskControllerService } from './api/scheduledTaskController.service';
import { SingleSignOnControllerService } from './api/singleSignOnController.service';
import { SnsListenerControllerService } from './api/snsListenerController.service';
import { SocialLoginControllerService } from './api/socialLoginController.service';
import { StripeCardControllerService } from './api/stripeCardController.service';
import { StripeControllerService } from './api/stripeController.service';
import { StripeSyncControllerService } from './api/stripeSyncController.service';
import { StripeWebhookControllerService } from './api/stripeWebhookController.service';
import { TicketReviewControllerService } from './api/ticketReviewController.service';
import { UrlRedirectControllerService } from './api/urlRedirectController.service';
import { UserAccountControllerService } from './api/userAccountController.service';
import { UserAuditControllerService } from './api/userAuditController.service';
import { UserControllerService } from './api/userController.service';
import { UserPasswordControllerService } from './api/userPasswordController.service';
import { UserProfileControllerService } from './api/userProfileController.service';
import { UserSearchControllerService } from './api/userSearchController.service';
import { UserSettingsControllerService } from './api/userSettingsController.service';
import { UtilityControllerService } from './api/utilityController.service';
import { ValidationControllerService } from './api/validationController.service';
import { VerificationControllerService } from './api/verificationController.service';
import { ViolationControllerService } from './api/violationController.service';
import { ViolationPenaltyControllerService } from './api/violationPenaltyController.service';
import { WatchlistsControllerService } from './api/watchlistsController.service';
import { WebsocketMessageControllerService } from './api/websocketMessageController.service';
import { WorkflowStateControllerService } from './api/workflowStateController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
