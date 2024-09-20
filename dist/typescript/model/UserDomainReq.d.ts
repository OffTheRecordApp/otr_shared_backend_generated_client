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
export interface UserDomainReq {
    "accounts"?: Array<models.UserAccountModel>;
    "address"?: models.AddressDomainReq;
    "creationDateUtc"?: models.TimestampReq;
    "dob"?: string;
    "driverLicenseNumber"?: string;
    "eligibleForAppReview"?: boolean;
    "emailAddress"?: string;
    "firstname"?: string;
    "gender"?: string;
    "genderType"?: UserDomainReq.GenderTypeEnum;
    "ghostAccountCreationDateUtc"?: string;
    "hasLeftReview"?: boolean;
    "hubspotContactId"?: string;
    "intercomUserHash"?: string;
    "isEmailConfirmed"?: boolean;
    "isEnabled"?: boolean;
    "isLawfirmAccessGranted"?: boolean;
    "isPaymentPlansAllowed"?: boolean;
    "isTestUser"?: boolean;
    "isUnsubscribed"?: boolean;
    "lastname"?: string;
    "lawfirmId"?: number;
    "lawyerJobTitle"?: UserDomainReq.LawyerJobTitleEnum;
    "loginProvider"?: UserDomainReq.LoginProviderEnum;
    "numBookingCancelations"?: number;
    "paidCaseCount"?: number;
    "password"?: string;
    "passwordEncrypted"?: string;
    "phoneNumbers"?: Array<models.PhoneNumberDomainReq>;
    "privacyMode"?: UserDomainReq.PrivacyModeEnum;
    "profilePicture"?: string;
    "race"?: UserDomainReq.RaceEnum;
    "referralCode"?: string;
    "referralCount"?: number;
    "referralLink"?: string;
    "referralLinks"?: Array<models.UserReferralLinkModelReq>;
    "roles"?: Array<models.UserRoleDomain>;
    "signUpCode"?: string;
    "signUpCodeUseCount"?: number;
    "signedProfilePictureUrl"?: string;
    "socialProfiles"?: Array<models.UserSocialProfileModelReq>;
    "subscriptionPlans"?: Array<models.UserSubscriptionPlanModelReq>;
    "userAlias"?: string;
    "userDeletedDateUtc"?: string;
    "userId"?: number;
    "userRegistrationDateUtc"?: string;
}
export declare namespace UserDomainReq {
    enum GenderTypeEnum {
        FEMALE,
        MALE,
        NOTAVAILABLE,
        NOTLISTED,
        UNVERIFIED
    }
    enum LawyerJobTitleEnum {
        ACCOUNTANT,
        ATTORNEY,
        ATTORNEYASSOCIATE,
        ATTORNEYCOUNSEL,
        ATTORNEYMANAGINGPARTNER,
        ATTORNEYPARTNER,
        ATTORNEYSTAFF,
        CUSTOMERSERVICEREP,
        LEGALASSISTANT,
        LEGALINTERN,
        LEGALSECRETARY,
        OTHER,
        PARALEGAL
    }
    enum LoginProviderEnum {
        APPLE,
        EMAIL,
        FACEBOOK,
        GOOGLE,
        PHONE,
        TWITTER,
        UNKNOWN
    }
    enum PrivacyModeEnum {
        FRIENDS,
        PRIVATE,
        PUBLIC,
        SEMIPUBLIC
    }
    enum RaceEnum {
        ASIAN,
        BLACK,
        HISPANIC,
        MIDDLEEASTERN,
        NATIVE,
        NOTAVAILABLE,
        PACIFICISLANDER,
        TWOORMORE,
        UNKNOWN,
        UNVERIFIED,
        WHITE
    }
}
