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
import { UserAccountModel } from './userAccountModel';
import { AddressDomain } from './addressDomain';
import { PhoneNumberDomain } from './phoneNumberDomain';
import { UserRoleDomain } from './userRoleDomain';
import { UserSubscriptionPlanModel } from './userSubscriptionPlanModel';
import { Timestamp } from './timestamp';
export interface UserDomain {
    accounts?: Array<UserAccountModel>;
    address?: AddressDomain;
    creationDateUtc?: Timestamp;
    dob?: string;
    eligibleForAppReview?: boolean;
    emailAddress?: string;
    firstname?: string;
    fullName?: string;
    gender?: string;
    hasLeftReview?: boolean;
    isEmailConfirmed?: boolean;
    isEnabled?: boolean;
    isLawfirmAccessGranted?: boolean;
    isPaymentPlansAllowed?: boolean;
    isTestUser?: boolean;
    isUnsubscribed?: boolean;
    lastname?: string;
    lawfirmId?: number;
    lawyerJobTitle?: UserDomain.LawyerJobTitleEnum;
    loginProvider?: UserDomain.LoginProviderEnum;
    numBookingCancelations?: number;
    paidCaseCount?: number;
    password?: string;
    passwordEncrypted?: string;
    phoneNumbers?: Set<PhoneNumberDomain>;
    privacyMode?: UserDomain.PrivacyModeEnum;
    profilePicture?: string;
    referralCount?: number;
    roles?: Set<UserRoleDomain>;
    signUpCode?: string;
    signUpCodeUseCount?: number;
    subscriptionPlans?: Array<UserSubscriptionPlanModel>;
    userAlias?: string;
    userId?: number;
}
export declare namespace UserDomain {
    type LawyerJobTitleEnum = 'ACCOUNTANT' | 'ATTORNEY' | 'ATTORNEY_ASSOCIATE' | 'ATTORNEY_COUNSEL' | 'ATTORNEY_MANAGING_PARTNER' | 'ATTORNEY_PARTNER' | 'ATTORNEY_STAFF' | 'CUSTOMER_SERVICE_REP' | 'LEGAL_ASSISTANT' | 'LEGAL_INTERN' | 'LEGAL_SECRETARY' | 'OTHER' | 'PARALEGAL';
    const LawyerJobTitleEnum: {
        Accountant: LawyerJobTitleEnum;
        Attorney: LawyerJobTitleEnum;
        AttorneyAssociate: LawyerJobTitleEnum;
        AttorneyCounsel: LawyerJobTitleEnum;
        AttorneyManagingPartner: LawyerJobTitleEnum;
        AttorneyPartner: LawyerJobTitleEnum;
        AttorneyStaff: LawyerJobTitleEnum;
        CustomerServiceRep: LawyerJobTitleEnum;
        LegalAssistant: LawyerJobTitleEnum;
        LegalIntern: LawyerJobTitleEnum;
        LegalSecretary: LawyerJobTitleEnum;
        Other: LawyerJobTitleEnum;
        Paralegal: LawyerJobTitleEnum;
    };
    type LoginProviderEnum = 'APPLE' | 'EMAIL' | 'FACEBOOK' | 'GOOGLE' | 'PHONE' | 'TWITTER';
    const LoginProviderEnum: {
        Apple: LoginProviderEnum;
        Email: LoginProviderEnum;
        Facebook: LoginProviderEnum;
        Google: LoginProviderEnum;
        Phone: LoginProviderEnum;
        Twitter: LoginProviderEnum;
    };
    type PrivacyModeEnum = 'FRIENDS' | 'PRIVATE' | 'PUBLIC' | 'SEMI_PUBLIC';
    const PrivacyModeEnum: {
        Friends: PrivacyModeEnum;
        Private: PrivacyModeEnum;
        Public: PrivacyModeEnum;
        SemiPublic: PrivacyModeEnum;
    };
}
