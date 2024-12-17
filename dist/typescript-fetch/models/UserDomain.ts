/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    AddressDomain,
    AddressDomainFromJSON,
    AddressDomainFromJSONTyped,
    AddressDomainToJSON,
    PhoneNumberDomain,
    PhoneNumberDomainFromJSON,
    PhoneNumberDomainFromJSONTyped,
    PhoneNumberDomainToJSON,
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
    UserAccountModel,
    UserAccountModelFromJSON,
    UserAccountModelFromJSONTyped,
    UserAccountModelToJSON,
    UserReferralLinkModel,
    UserReferralLinkModelFromJSON,
    UserReferralLinkModelFromJSONTyped,
    UserReferralLinkModelToJSON,
    UserRoleDomain,
    UserRoleDomainFromJSON,
    UserRoleDomainFromJSONTyped,
    UserRoleDomainToJSON,
    UserSocialProfileModel,
    UserSocialProfileModelFromJSON,
    UserSocialProfileModelFromJSONTyped,
    UserSocialProfileModelToJSON,
    UserSubscriptionPlanModel,
    UserSubscriptionPlanModelFromJSON,
    UserSubscriptionPlanModelFromJSONTyped,
    UserSubscriptionPlanModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserDomain
 */
export interface UserDomain {
    /**
     * 
     * @type {Array<UserAccountModel>}
     * @memberof UserDomain
     */
    accounts?: Array<UserAccountModel>;
    /**
     * 
     * @type {AddressDomain}
     * @memberof UserDomain
     */
    address?: AddressDomain;
    /**
     * 
     * @type {Timestamp}
     * @memberof UserDomain
     */
    creationDateUtc?: Timestamp;
    /**
     * 
     * @type {Date}
     * @memberof UserDomain
     */
    dob?: Date;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    driverLicenseNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserDomain
     */
    eligibleForAppReview?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    gender?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    genderType?: UserDomainGenderTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof UserDomain
     */
    ghostAccountCreationDateUtc?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof UserDomain
     */
    hasLeftReview?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    hubspotContactId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    intercomUserHash?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserDomain
     */
    isEmailConfirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserDomain
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserDomain
     */
    isLawfirmAccessGranted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserDomain
     */
    isPaymentPlansAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserDomain
     */
    isTestUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserDomain
     */
    isUnsubscribed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    lastname?: string;
    /**
     * 
     * @type {number}
     * @memberof UserDomain
     */
    lawfirmId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    lawyerJobTitle?: UserDomainLawyerJobTitleEnum;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    loginProvider?: UserDomainLoginProviderEnum;
    /**
     * 
     * @type {number}
     * @memberof UserDomain
     */
    numBookingCancelations?: number;
    /**
     * 
     * @type {number}
     * @memberof UserDomain
     */
    paidCaseCount?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    passwordEncrypted?: string;
    /**
     * 
     * @type {Array<PhoneNumberDomain>}
     * @memberof UserDomain
     */
    phoneNumbers?: Array<PhoneNumberDomain>;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    privacyMode?: UserDomainPrivacyModeEnum;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    profilePicture?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    race?: UserDomainRaceEnum;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    referralCode?: string;
    /**
     * 
     * @type {number}
     * @memberof UserDomain
     */
    referralCount?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    referralLink?: string;
    /**
     * 
     * @type {Array<UserReferralLinkModel>}
     * @memberof UserDomain
     */
    referralLinks?: Array<UserReferralLinkModel>;
    /**
     * 
     * @type {Array<UserRoleDomain>}
     * @memberof UserDomain
     */
    roles?: Array<UserRoleDomain>;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    signUpCode?: string;
    /**
     * 
     * @type {number}
     * @memberof UserDomain
     */
    signUpCodeUseCount?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    signedProfilePictureUrl?: string;
    /**
     * 
     * @type {Array<UserSocialProfileModel>}
     * @memberof UserDomain
     */
    socialProfiles?: Array<UserSocialProfileModel>;
    /**
     * 
     * @type {Array<UserSubscriptionPlanModel>}
     * @memberof UserDomain
     */
    subscriptionPlans?: Array<UserSubscriptionPlanModel>;
    /**
     * 
     * @type {string}
     * @memberof UserDomain
     */
    userAlias?: string;
    /**
     * 
     * @type {Date}
     * @memberof UserDomain
     */
    userDeletedDateUtc?: Date;
    /**
     * 
     * @type {number}
     * @memberof UserDomain
     */
    userId?: number;
    /**
     * 
     * @type {Date}
     * @memberof UserDomain
     */
    userRegistrationDateUtc?: Date;
}

export function UserDomainFromJSON(json: any): UserDomain {
    return UserDomainFromJSONTyped(json, false);
}

export function UserDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounts': !exists(json, 'accounts') ? undefined : ((json['accounts'] as Array<any>).map(UserAccountModelFromJSON)),
        'address': !exists(json, 'address') ? undefined : AddressDomainFromJSON(json['address']),
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : TimestampFromJSON(json['creationDateUtc']),
        'dob': !exists(json, 'dob') ? undefined : (new Date(json['dob'])),
        'driverLicenseNumber': !exists(json, 'driverLicenseNumber') ? undefined : json['driverLicenseNumber'],
        'eligibleForAppReview': !exists(json, 'eligibleForAppReview') ? undefined : json['eligibleForAppReview'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'genderType': !exists(json, 'genderType') ? undefined : json['genderType'],
        'ghostAccountCreationDateUtc': !exists(json, 'ghostAccountCreationDateUtc') ? undefined : (new Date(json['ghostAccountCreationDateUtc'])),
        'hasLeftReview': !exists(json, 'hasLeftReview') ? undefined : json['hasLeftReview'],
        'hubspotContactId': !exists(json, 'hubspotContactId') ? undefined : json['hubspotContactId'],
        'intercomUserHash': !exists(json, 'intercomUserHash') ? undefined : json['intercomUserHash'],
        'isEmailConfirmed': !exists(json, 'isEmailConfirmed') ? undefined : json['isEmailConfirmed'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'isLawfirmAccessGranted': !exists(json, 'isLawfirmAccessGranted') ? undefined : json['isLawfirmAccessGranted'],
        'isPaymentPlansAllowed': !exists(json, 'isPaymentPlansAllowed') ? undefined : json['isPaymentPlansAllowed'],
        'isTestUser': !exists(json, 'isTestUser') ? undefined : json['isTestUser'],
        'isUnsubscribed': !exists(json, 'isUnsubscribed') ? undefined : json['isUnsubscribed'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'lawfirmId': !exists(json, 'lawfirmId') ? undefined : json['lawfirmId'],
        'lawyerJobTitle': !exists(json, 'lawyerJobTitle') ? undefined : json['lawyerJobTitle'],
        'loginProvider': !exists(json, 'loginProvider') ? undefined : json['loginProvider'],
        'numBookingCancelations': !exists(json, 'numBookingCancelations') ? undefined : json['numBookingCancelations'],
        'paidCaseCount': !exists(json, 'paidCaseCount') ? undefined : json['paidCaseCount'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'passwordEncrypted': !exists(json, 'passwordEncrypted') ? undefined : json['passwordEncrypted'],
        'phoneNumbers': !exists(json, 'phoneNumbers') ? undefined : ((json['phoneNumbers'] as Array<any>).map(PhoneNumberDomainFromJSON)),
        'privacyMode': !exists(json, 'privacyMode') ? undefined : json['privacyMode'],
        'profilePicture': !exists(json, 'profilePicture') ? undefined : json['profilePicture'],
        'race': !exists(json, 'race') ? undefined : json['race'],
        'referralCode': !exists(json, 'referralCode') ? undefined : json['referralCode'],
        'referralCount': !exists(json, 'referralCount') ? undefined : json['referralCount'],
        'referralLink': !exists(json, 'referralLink') ? undefined : json['referralLink'],
        'referralLinks': !exists(json, 'referralLinks') ? undefined : ((json['referralLinks'] as Array<any>).map(UserReferralLinkModelFromJSON)),
        'roles': !exists(json, 'roles') ? undefined : ((json['roles'] as Array<any>).map(UserRoleDomainFromJSON)),
        'signUpCode': !exists(json, 'signUpCode') ? undefined : json['signUpCode'],
        'signUpCodeUseCount': !exists(json, 'signUpCodeUseCount') ? undefined : json['signUpCodeUseCount'],
        'signedProfilePictureUrl': !exists(json, 'signedProfilePictureUrl') ? undefined : json['signedProfilePictureUrl'],
        'socialProfiles': !exists(json, 'socialProfiles') ? undefined : ((json['socialProfiles'] as Array<any>).map(UserSocialProfileModelFromJSON)),
        'subscriptionPlans': !exists(json, 'subscriptionPlans') ? undefined : ((json['subscriptionPlans'] as Array<any>).map(UserSubscriptionPlanModelFromJSON)),
        'userAlias': !exists(json, 'userAlias') ? undefined : json['userAlias'],
        'userDeletedDateUtc': !exists(json, 'userDeletedDateUtc') ? undefined : (new Date(json['userDeletedDateUtc'])),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userRegistrationDateUtc': !exists(json, 'userRegistrationDateUtc') ? undefined : (new Date(json['userRegistrationDateUtc'])),
    };
}

export function UserDomainToJSON(value?: UserDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounts': value.accounts === undefined ? undefined : ((value.accounts as Array<any>).map(UserAccountModelToJSON)),
        'address': AddressDomainToJSON(value.address),
        'creationDateUtc': TimestampToJSON(value.creationDateUtc),
        'dob': value.dob === undefined ? undefined : (value.dob.toISOString()),
        'driverLicenseNumber': value.driverLicenseNumber,
        'eligibleForAppReview': value.eligibleForAppReview,
        'emailAddress': value.emailAddress,
        'firstname': value.firstname,
        'fullName': value.fullName,
        'gender': value.gender,
        'genderType': value.genderType,
        'ghostAccountCreationDateUtc': value.ghostAccountCreationDateUtc === undefined ? undefined : (value.ghostAccountCreationDateUtc.toISOString()),
        'hasLeftReview': value.hasLeftReview,
        'hubspotContactId': value.hubspotContactId,
        'intercomUserHash': value.intercomUserHash,
        'isEmailConfirmed': value.isEmailConfirmed,
        'isEnabled': value.isEnabled,
        'isLawfirmAccessGranted': value.isLawfirmAccessGranted,
        'isPaymentPlansAllowed': value.isPaymentPlansAllowed,
        'isTestUser': value.isTestUser,
        'isUnsubscribed': value.isUnsubscribed,
        'lastname': value.lastname,
        'lawfirmId': value.lawfirmId,
        'lawyerJobTitle': value.lawyerJobTitle,
        'loginProvider': value.loginProvider,
        'numBookingCancelations': value.numBookingCancelations,
        'paidCaseCount': value.paidCaseCount,
        'password': value.password,
        'passwordEncrypted': value.passwordEncrypted,
        'phoneNumbers': value.phoneNumbers === undefined ? undefined : ((value.phoneNumbers as Array<any>).map(PhoneNumberDomainToJSON)),
        'privacyMode': value.privacyMode,
        'profilePicture': value.profilePicture,
        'race': value.race,
        'referralCode': value.referralCode,
        'referralCount': value.referralCount,
        'referralLink': value.referralLink,
        'referralLinks': value.referralLinks === undefined ? undefined : ((value.referralLinks as Array<any>).map(UserReferralLinkModelToJSON)),
        'roles': value.roles === undefined ? undefined : ((value.roles as Array<any>).map(UserRoleDomainToJSON)),
        'signUpCode': value.signUpCode,
        'signUpCodeUseCount': value.signUpCodeUseCount,
        'signedProfilePictureUrl': value.signedProfilePictureUrl,
        'socialProfiles': value.socialProfiles === undefined ? undefined : ((value.socialProfiles as Array<any>).map(UserSocialProfileModelToJSON)),
        'subscriptionPlans': value.subscriptionPlans === undefined ? undefined : ((value.subscriptionPlans as Array<any>).map(UserSubscriptionPlanModelToJSON)),
        'userAlias': value.userAlias,
        'userDeletedDateUtc': value.userDeletedDateUtc === undefined ? undefined : (value.userDeletedDateUtc.toISOString()),
        'userId': value.userId,
        'userRegistrationDateUtc': value.userRegistrationDateUtc === undefined ? undefined : (value.userRegistrationDateUtc.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum UserDomainGenderTypeEnum {
    FEMALE = 'FEMALE',
    MALE = 'MALE',
    NOTAVAILABLE = 'NOT_AVAILABLE',
    NOTLISTED = 'NOT_LISTED',
    UNVERIFIED = 'UNVERIFIED',
    X = 'X'
}
/**
* @export
* @enum {string}
*/
export enum UserDomainLawyerJobTitleEnum {
    ACCOUNTANT = 'ACCOUNTANT',
    ATTORNEY = 'ATTORNEY',
    ATTORNEYASSOCIATE = 'ATTORNEY_ASSOCIATE',
    ATTORNEYCOUNSEL = 'ATTORNEY_COUNSEL',
    ATTORNEYMANAGINGPARTNER = 'ATTORNEY_MANAGING_PARTNER',
    ATTORNEYPARTNER = 'ATTORNEY_PARTNER',
    ATTORNEYSTAFF = 'ATTORNEY_STAFF',
    CUSTOMERSERVICEREP = 'CUSTOMER_SERVICE_REP',
    LEGALASSISTANT = 'LEGAL_ASSISTANT',
    LEGALINTERN = 'LEGAL_INTERN',
    LEGALSECRETARY = 'LEGAL_SECRETARY',
    OTHER = 'OTHER',
    PARALEGAL = 'PARALEGAL'
}
/**
* @export
* @enum {string}
*/
export enum UserDomainLoginProviderEnum {
    APPLE = 'APPLE',
    EMAIL = 'EMAIL',
    FACEBOOK = 'FACEBOOK',
    GOOGLE = 'GOOGLE',
    PHONE = 'PHONE',
    TWITTER = 'TWITTER',
    UNKNOWN = 'UNKNOWN'
}
/**
* @export
* @enum {string}
*/
export enum UserDomainPrivacyModeEnum {
    FRIENDS = 'FRIENDS',
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC',
    SEMIPUBLIC = 'SEMI_PUBLIC'
}
/**
* @export
* @enum {string}
*/
export enum UserDomainRaceEnum {
    ASIAN = 'ASIAN',
    BLACK = 'BLACK',
    HISPANIC = 'HISPANIC',
    MIDDLEEASTERN = 'MIDDLE_EASTERN',
    NATIVE = 'NATIVE',
    NOTAVAILABLE = 'NOT_AVAILABLE',
    PACIFICISLANDER = 'PACIFIC_ISLANDER',
    TWOORMORE = 'TWO_OR_MORE',
    UNKNOWN = 'UNKNOWN',
    UNVERIFIED = 'UNVERIFIED',
    WHITE = 'WHITE'
}

