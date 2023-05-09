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


export interface UpdateUserModel { 
    dob?: string;
    emailAddress?: string;
    firstname?: string;
    gender?: string;
    hasLeftReview?: boolean;
    isEmailConfirmed?: boolean;
    isLawfirmAccessGranted?: boolean;
    isPaymentPlansAllowed?: boolean;
    isTestUser?: boolean;
    isUnsubscribed?: boolean;
    isUserAccountEnabled?: boolean;
    lastname?: string;
    loginProvider?: UpdateUserModel.LoginProviderEnum;
    privacyMode?: UpdateUserModel.PrivacyModeEnum;
    profilePicture?: string;
    signUpCode?: string;
    signUpCodeUseCount?: number;
    userAlias?: string;
}
export namespace UpdateUserModel {
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
    export type PrivacyModeEnum = 'FRIENDS' | 'PRIVATE' | 'PUBLIC' | 'SEMI_PUBLIC';
    export const PrivacyModeEnum = {
        Friends: 'FRIENDS' as PrivacyModeEnum,
        Private: 'PRIVATE' as PrivacyModeEnum,
        Public: 'PUBLIC' as PrivacyModeEnum,
        SemiPublic: 'SEMI_PUBLIC' as PrivacyModeEnum
    };
}

