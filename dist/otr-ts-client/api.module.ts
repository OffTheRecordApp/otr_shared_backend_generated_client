import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ActionRequiredControllerService } from './api/actionRequiredController.service';
import { AddressControllerService } from './api/addressController.service';
import { AlertNotificationControllerService } from './api/alertNotificationController.service';
import { AuthenticationControllerService } from './api/authenticationController.service';
import { AwsCredentialsControllerService } from './api/awsCredentialsController.service';
import { BranchLinkControllerService } from './api/branchLinkController.service';
import { CaseActionTimelineControllerService } from './api/caseActionTimelineController.service';
import { CaseActionsControllerService } from './api/caseActionsController.service';
import { CaseControllerService } from './api/caseController.service';
import { CaseCreationControllerService } from './api/caseCreationController.service';
import { CaseFinancialsControllerService } from './api/caseFinancialsController.service';
import { CasePaymentControllerService } from './api/casePaymentController.service';
import { CasePaymentPlanControllerService } from './api/casePaymentPlanController.service';
import { CaseStatusControllerService } from './api/caseStatusController.service';
import { CaseTransferControllerService } from './api/caseTransferController.service';
import { CertificateControllerService } from './api/certificateController.service';
import { CitationControllerService } from './api/citationController.service';
import { ConfigurationControllerService } from './api/configurationController.service';
import { ConsoleListControllerService } from './api/consoleListController.service';
import { ConversationControllerService } from './api/conversationController.service';
import { CountyControllerService } from './api/countyController.service';
import { CourtControllerService } from './api/courtController.service';
import { CrmControllerService } from './api/crmController.service';
import { CustomerLeadControllerService } from './api/customerLeadController.service';
import { CustomerReviewControllerService } from './api/customerReviewController.service';
import { DashboardControllerService } from './api/dashboardController.service';
import { DirectMailControllerService } from './api/directMailController.service';
import { DisputeControllerService } from './api/disputeController.service';
import { DripControllerService } from './api/dripController.service';
import { DripWebhooksControllerService } from './api/dripWebhooksController.service';
import { EmailSubscriptionControllerService } from './api/emailSubscriptionController.service';
import { FeedbackControllerService } from './api/feedbackController.service';
import { FreshdeskTicketControllerService } from './api/freshdeskTicketController.service';
import { InsuranceCalculatorControllerService } from './api/insuranceCalculatorController.service';
import { InternalNotificationControllerService } from './api/internalNotificationController.service';
import { LawfirmCaseDecisionControllerService } from './api/lawfirmCaseDecisionController.service';
import { LawfirmCasesControllerService } from './api/lawfirmCasesController.service';
import { LawfirmControllerService } from './api/lawfirmController.service';
import { LawfirmDocumentControllerService } from './api/lawfirmDocumentController.service';
import { LawfirmRatesControllerService } from './api/lawfirmRatesController.service';
import { LawfirmTransactionsControllerService } from './api/lawfirmTransactionsController.service';
import { LawyerControllerService } from './api/lawyerController.service';
import { OnDemandRequestControllerService } from './api/onDemandRequestController.service';
import { PushNotificationControllerService } from './api/pushNotificationController.service';
import { RefLinkControllerService } from './api/refLinkController.service';
import { ReferralControllerService } from './api/referralController.service';
import { RefundEligibilityControllerService } from './api/refundEligibilityController.service';
import { RegistrationControllerService } from './api/registrationController.service';
import { ScheduledTaskControllerService } from './api/scheduledTaskController.service';
import { SnsListenerControllerService } from './api/snsListenerController.service';
import { SocialLoginControllerService } from './api/socialLoginController.service';
import { StripeCardControllerService } from './api/stripeCardController.service';
import { StripeControllerService } from './api/stripeController.service';
import { TicketReviewControllerService } from './api/ticketReviewController.service';
import { TrafficViolationControllerService } from './api/trafficViolationController.service';
import { UserControllerService } from './api/userController.service';
import { UserReferralControllerService } from './api/userReferralController.service';
import { UserSettingsControllerService } from './api/userSettingsController.service';
import { ValidationControllerService } from './api/validationController.service';
import { ViolationPenaltyControllerService } from './api/violationPenaltyController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ActionRequiredControllerService,
    AddressControllerService,
    AlertNotificationControllerService,
    AuthenticationControllerService,
    AwsCredentialsControllerService,
    BranchLinkControllerService,
    CaseActionTimelineControllerService,
    CaseActionsControllerService,
    CaseControllerService,
    CaseCreationControllerService,
    CaseFinancialsControllerService,
    CasePaymentControllerService,
    CasePaymentPlanControllerService,
    CaseStatusControllerService,
    CaseTransferControllerService,
    CertificateControllerService,
    CitationControllerService,
    ConfigurationControllerService,
    ConsoleListControllerService,
    ConversationControllerService,
    CountyControllerService,
    CourtControllerService,
    CrmControllerService,
    CustomerLeadControllerService,
    CustomerReviewControllerService,
    DashboardControllerService,
    DirectMailControllerService,
    DisputeControllerService,
    DripControllerService,
    DripWebhooksControllerService,
    EmailSubscriptionControllerService,
    FeedbackControllerService,
    FreshdeskTicketControllerService,
    InsuranceCalculatorControllerService,
    InternalNotificationControllerService,
    LawfirmCaseDecisionControllerService,
    LawfirmCasesControllerService,
    LawfirmControllerService,
    LawfirmDocumentControllerService,
    LawfirmRatesControllerService,
    LawfirmTransactionsControllerService,
    LawyerControllerService,
    OnDemandRequestControllerService,
    PushNotificationControllerService,
    RefLinkControllerService,
    ReferralControllerService,
    RefundEligibilityControllerService,
    RegistrationControllerService,
    ScheduledTaskControllerService,
    SnsListenerControllerService,
    SocialLoginControllerService,
    StripeCardControllerService,
    StripeControllerService,
    TicketReviewControllerService,
    TrafficViolationControllerService,
    UserControllerService,
    UserReferralControllerService,
    UserSettingsControllerService,
    ValidationControllerService,
    ViolationPenaltyControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
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
