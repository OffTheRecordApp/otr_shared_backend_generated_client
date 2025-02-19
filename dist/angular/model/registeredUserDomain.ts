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


export interface RegisteredUserDomain { 
    campaign?: string;
    channel?: string;
    clientType?: RegisteredUserDomain.ClientTypeEnum;
    dob?: string;
    firstname?: string;
    fullName?: string;
    genderType?: RegisteredUserDomain.GenderTypeEnum;
    lastname?: string;
    loginProvider?: RegisteredUserDomain.LoginProviderEnum;
    numBookingCancelations?: number;
    paidCaseCount?: number;
    profilePicture?: string;
    race?: RegisteredUserDomain.RaceEnum;
    signUpCode?: string;
    userId?: number;
    userRegistrationDateUtc?: string;
}
export namespace RegisteredUserDomain {
    export type ClientTypeEnum = 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'EMAIL' | 'FRESH_DESK' | 'IOS' | 'LOCALHOST' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_JOB_SCHEDULER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN';
    export const ClientTypeEnum = {
        Android: 'ANDROID' as ClientTypeEnum,
        DesktopWebapp: 'DESKTOP_WEBAPP' as ClientTypeEnum,
        DmvGo: 'DMV_GO' as ClientTypeEnum,
        DmvOrg: 'DMV_ORG' as ClientTypeEnum,
        Email: 'EMAIL' as ClientTypeEnum,
        FreshDesk: 'FRESH_DESK' as ClientTypeEnum,
        Ios: 'IOS' as ClientTypeEnum,
        Localhost: 'LOCALHOST' as ClientTypeEnum,
        MobileWebapp: 'MOBILE_WEBAPP' as ClientTypeEnum,
        OtrAdminConsole: 'OTR_ADMIN_CONSOLE' as ClientTypeEnum,
        OtrAdminConsoleDevo: 'OTR_ADMIN_CONSOLE_DEVO' as ClientTypeEnum,
        OtrAdminConsoleLocalhost: 'OTR_ADMIN_CONSOLE_LOCALHOST' as ClientTypeEnum,
        OtrExplorer: 'OTR_EXPLORER' as ClientTypeEnum,
        OtrJobScheduler: 'OTR_JOB_SCHEDULER' as ClientTypeEnum,
        OtrLawfirmPortal: 'OTR_LAWFIRM_PORTAL' as ClientTypeEnum,
        OtrLawfirmPortalDevo: 'OTR_LAWFIRM_PORTAL_DEVO' as ClientTypeEnum,
        OtrLawfirmPortalLocalhost: 'OTR_LAWFIRM_PORTAL_LOCALHOST' as ClientTypeEnum,
        OtrWebsite: 'OTR_WEBSITE' as ClientTypeEnum,
        OtrWebsiteDevo: 'OTR_WEBSITE_DEVO' as ClientTypeEnum,
        OtrWebsiteLocalhost: 'OTR_WEBSITE_LOCALHOST' as ClientTypeEnum,
        OtrWidget: 'OTR_WIDGET' as ClientTypeEnum,
        Unknown: 'UNKNOWN' as ClientTypeEnum
    };
    export type GenderTypeEnum = 'FEMALE' | 'MALE' | 'NOT_AVAILABLE' | 'NOT_LISTED' | 'UNVERIFIED' | 'X';
    export const GenderTypeEnum = {
        Female: 'FEMALE' as GenderTypeEnum,
        Male: 'MALE' as GenderTypeEnum,
        NotAvailable: 'NOT_AVAILABLE' as GenderTypeEnum,
        NotListed: 'NOT_LISTED' as GenderTypeEnum,
        Unverified: 'UNVERIFIED' as GenderTypeEnum,
        X: 'X' as GenderTypeEnum
    };
    export type LoginProviderEnum = 'APPLE' | 'EMAIL' | 'FACEBOOK' | 'GOOGLE' | 'PHONE' | 'TWITTER' | 'UNKNOWN';
    export const LoginProviderEnum = {
        Apple: 'APPLE' as LoginProviderEnum,
        Email: 'EMAIL' as LoginProviderEnum,
        Facebook: 'FACEBOOK' as LoginProviderEnum,
        Google: 'GOOGLE' as LoginProviderEnum,
        Phone: 'PHONE' as LoginProviderEnum,
        Twitter: 'TWITTER' as LoginProviderEnum,
        Unknown: 'UNKNOWN' as LoginProviderEnum
    };
    export type RaceEnum = 'ASIAN' | 'BLACK' | 'HISPANIC' | 'MIDDLE_EASTERN' | 'NATIVE' | 'NOT_AVAILABLE' | 'PACIFIC_ISLANDER' | 'TWO_OR_MORE' | 'UNKNOWN' | 'UNVERIFIED' | 'WHITE';
    export const RaceEnum = {
        Asian: 'ASIAN' as RaceEnum,
        Black: 'BLACK' as RaceEnum,
        Hispanic: 'HISPANIC' as RaceEnum,
        MiddleEastern: 'MIDDLE_EASTERN' as RaceEnum,
        Native: 'NATIVE' as RaceEnum,
        NotAvailable: 'NOT_AVAILABLE' as RaceEnum,
        PacificIslander: 'PACIFIC_ISLANDER' as RaceEnum,
        TwoOrMore: 'TWO_OR_MORE' as RaceEnum,
        Unknown: 'UNKNOWN' as RaceEnum,
        Unverified: 'UNVERIFIED' as RaceEnum,
        White: 'WHITE' as RaceEnum
    };
}


