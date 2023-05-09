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


export interface UserAuditEventModel { 
    clientType?: UserAuditEventModel.ClientTypeEnum;
    eventDate?: string;
    eventId?: number;
    eventType?: UserAuditEventModel.EventTypeEnum;
    newValue?: string;
    oldValue?: string;
    requesterName?: string;
    requesterUserId?: number;
    userEventId?: number;
}
export namespace UserAuditEventModel {
    export type ClientTypeEnum = 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN';
    export const ClientTypeEnum = {
        Android: 'ANDROID' as ClientTypeEnum,
        DesktopWebapp: 'DESKTOP_WEBAPP' as ClientTypeEnum,
        DmvGo: 'DMV_GO' as ClientTypeEnum,
        DmvOrg: 'DMV_ORG' as ClientTypeEnum,
        FreshDesk: 'FRESH_DESK' as ClientTypeEnum,
        Ios: 'IOS' as ClientTypeEnum,
        MobileWebapp: 'MOBILE_WEBAPP' as ClientTypeEnum,
        OtrAdminConsole: 'OTR_ADMIN_CONSOLE' as ClientTypeEnum,
        OtrAdminConsoleDevo: 'OTR_ADMIN_CONSOLE_DEVO' as ClientTypeEnum,
        OtrAdminConsoleLocalhost: 'OTR_ADMIN_CONSOLE_LOCALHOST' as ClientTypeEnum,
        OtrExplorer: 'OTR_EXPLORER' as ClientTypeEnum,
        OtrLawfirmPortal: 'OTR_LAWFIRM_PORTAL' as ClientTypeEnum,
        OtrLawfirmPortalDevo: 'OTR_LAWFIRM_PORTAL_DEVO' as ClientTypeEnum,
        OtrLawfirmPortalLocalhost: 'OTR_LAWFIRM_PORTAL_LOCALHOST' as ClientTypeEnum,
        OtrWebsite: 'OTR_WEBSITE' as ClientTypeEnum,
        OtrWebsiteDevo: 'OTR_WEBSITE_DEVO' as ClientTypeEnum,
        OtrWebsiteLocalhost: 'OTR_WEBSITE_LOCALHOST' as ClientTypeEnum,
        OtrWidget: 'OTR_WIDGET' as ClientTypeEnum,
        Unknown: 'UNKNOWN' as ClientTypeEnum
    };
    export type EventTypeEnum = 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPLOAD' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL';
    export const EventTypeEnum = {
        CaseAccept: 'CASE_ACCEPT' as EventTypeEnum,
        CaseBooking: 'CASE_BOOKING' as EventTypeEnum,
        CaseCancel: 'CASE_CANCEL' as EventTypeEnum,
        CaseDecline: 'CASE_DECLINE' as EventTypeEnum,
        CaseMatch: 'CASE_MATCH' as EventTypeEnum,
        CaseResolve: 'CASE_RESOLVE' as EventTypeEnum,
        CaseStatus: 'CASE_STATUS' as EventTypeEnum,
        CaseTransfer: 'CASE_TRANSFER' as EventTypeEnum,
        CaseUnserviceableRequest: 'CASE_UNSERVICEABLE_REQUEST' as EventTypeEnum,
        CitationUpload: 'CITATION_UPLOAD' as EventTypeEnum,
        ExternalTicketRequest: 'EXTERNAL_TICKET_REQUEST' as EventTypeEnum,
        GhostAccountCreated: 'GHOST_ACCOUNT_CREATED' as EventTypeEnum,
        LawfirmAccountPriority: 'LAWFIRM_ACCOUNT_PRIORITY' as EventTypeEnum,
        LawfirmAccountStatus: 'LAWFIRM_ACCOUNT_STATUS' as EventTypeEnum,
        LawfirmDailyCapacity: 'LAWFIRM_DAILY_CAPACITY' as EventTypeEnum,
        LawfirmTotalCapacity: 'LAWFIRM_TOTAL_CAPACITY' as EventTypeEnum,
        LineItemAdded: 'LINE_ITEM_ADDED' as EventTypeEnum,
        LineItemDeleted: 'LINE_ITEM_DELETED' as EventTypeEnum,
        PasswordChange: 'PASSWORD_CHANGE' as EventTypeEnum,
        PasswordResetRequested: 'PASSWORD_RESET_REQUESTED' as EventTypeEnum,
        PaymentAuthorized: 'PAYMENT_AUTHORIZED' as EventTypeEnum,
        PaymentCaptured: 'PAYMENT_CAPTURED' as EventTypeEnum,
        PaymentMethodAdd: 'PAYMENT_METHOD_ADD' as EventTypeEnum,
        PaymentMethodDelete: 'PAYMENT_METHOD_DELETE' as EventTypeEnum,
        PaymentRefunded: 'PAYMENT_REFUNDED' as EventTypeEnum,
        PaymentScheduled: 'PAYMENT_SCHEDULED' as EventTypeEnum,
        ReferralCodeApplied: 'REFERRAL_CODE_APPLIED' as EventTypeEnum,
        ReferralCodeAttemptFailed: 'REFERRAL_CODE_ATTEMPT_FAILED' as EventTypeEnum,
        ReferralCodeRemoved: 'REFERRAL_CODE_REMOVED' as EventTypeEnum,
        SaveVacationModeEndDate: 'SAVE_VACATION_MODE_END_DATE' as EventTypeEnum,
        SaveVacationModeReason: 'SAVE_VACATION_MODE_REASON' as EventTypeEnum,
        Unknown: 'UNKNOWN' as EventTypeEnum,
        UserLoginEvent: 'USER_LOGIN_EVENT' as EventTypeEnum,
        UserRegistration: 'USER_REGISTRATION' as EventTypeEnum,
        VacationModeToggle: 'VACATION_MODE_TOGGLE' as EventTypeEnum,
        VacationModeUpdate: 'VACATION_MODE_UPDATE' as EventTypeEnum,
        VerifyEmail: 'VERIFY_EMAIL' as EventTypeEnum
    };
}


