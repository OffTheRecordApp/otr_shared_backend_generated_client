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
import { exists } from '../runtime';
import { AddressDomainReqFromJSON, AddressDomainReqToJSON, PhoneNumberDomainReqFromJSON, PhoneNumberDomainReqToJSON, TimestampReqFromJSON, TimestampReqToJSON, UserAccountModelFromJSON, UserAccountModelToJSON, UserRoleDomainFromJSON, UserRoleDomainToJSON, UserSubscriptionPlanModelReqFromJSON, UserSubscriptionPlanModelReqToJSON, } from './';
export function UserDomainReqFromJSON(json) {
    return UserDomainReqFromJSONTyped(json, false);
}
export function UserDomainReqFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accounts': !exists(json, 'accounts') ? undefined : (json['accounts'].map(UserAccountModelFromJSON)),
        'address': !exists(json, 'address') ? undefined : AddressDomainReqFromJSON(json['address']),
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : TimestampReqFromJSON(json['creationDateUtc']),
        'dob': !exists(json, 'dob') ? undefined : (new Date(json['dob'])),
        'driverLicenseNumber': !exists(json, 'driverLicenseNumber') ? undefined : json['driverLicenseNumber'],
        'eligibleForAppReview': !exists(json, 'eligibleForAppReview') ? undefined : json['eligibleForAppReview'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'genderType': !exists(json, 'genderType') ? undefined : json['genderType'],
        'ghostAccountCreationDateUtc': !exists(json, 'ghostAccountCreationDateUtc') ? undefined : (new Date(json['ghostAccountCreationDateUtc'])),
        'hasLeftReview': !exists(json, 'hasLeftReview') ? undefined : json['hasLeftReview'],
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
        'phoneNumbers': !exists(json, 'phoneNumbers') ? undefined : (json['phoneNumbers'].map(PhoneNumberDomainReqFromJSON)),
        'privacyMode': !exists(json, 'privacyMode') ? undefined : json['privacyMode'],
        'profilePicture': !exists(json, 'profilePicture') ? undefined : json['profilePicture'],
        'race': !exists(json, 'race') ? undefined : json['race'],
        'referralCode': !exists(json, 'referralCode') ? undefined : json['referralCode'],
        'referralCount': !exists(json, 'referralCount') ? undefined : json['referralCount'],
        'roles': !exists(json, 'roles') ? undefined : (json['roles'].map(UserRoleDomainFromJSON)),
        'signUpCode': !exists(json, 'signUpCode') ? undefined : json['signUpCode'],
        'signUpCodeUseCount': !exists(json, 'signUpCodeUseCount') ? undefined : json['signUpCodeUseCount'],
        'subscriptionPlans': !exists(json, 'subscriptionPlans') ? undefined : (json['subscriptionPlans'].map(UserSubscriptionPlanModelReqFromJSON)),
        'userAlias': !exists(json, 'userAlias') ? undefined : json['userAlias'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userRegistrationDateUtc': !exists(json, 'userRegistrationDateUtc') ? undefined : (new Date(json['userRegistrationDateUtc'])),
    };
}
export function UserDomainReqToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accounts': value.accounts === undefined ? undefined : (value.accounts.map(UserAccountModelToJSON)),
        'address': AddressDomainReqToJSON(value.address),
        'creationDateUtc': TimestampReqToJSON(value.creationDateUtc),
        'dob': value.dob === undefined ? undefined : (value.dob.toISOString()),
        'driverLicenseNumber': value.driverLicenseNumber,
        'eligibleForAppReview': value.eligibleForAppReview,
        'emailAddress': value.emailAddress,
        'firstname': value.firstname,
        'gender': value.gender,
        'genderType': value.genderType,
        'ghostAccountCreationDateUtc': value.ghostAccountCreationDateUtc === undefined ? undefined : (value.ghostAccountCreationDateUtc.toISOString()),
        'hasLeftReview': value.hasLeftReview,
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
        'phoneNumbers': value.phoneNumbers === undefined ? undefined : (value.phoneNumbers.map(PhoneNumberDomainReqToJSON)),
        'privacyMode': value.privacyMode,
        'profilePicture': value.profilePicture,
        'race': value.race,
        'referralCode': value.referralCode,
        'referralCount': value.referralCount,
        'roles': value.roles === undefined ? undefined : (value.roles.map(UserRoleDomainToJSON)),
        'signUpCode': value.signUpCode,
        'signUpCodeUseCount': value.signUpCodeUseCount,
        'subscriptionPlans': value.subscriptionPlans === undefined ? undefined : (value.subscriptionPlans.map(UserSubscriptionPlanModelReqToJSON)),
        'userAlias': value.userAlias,
        'userId': value.userId,
        'userRegistrationDateUtc': value.userRegistrationDateUtc === undefined ? undefined : (value.userRegistrationDateUtc.toISOString()),
    };
}
/**
* @export
* @enum {string}
*/
export var UserDomainReqGenderTypeEnum;
(function (UserDomainReqGenderTypeEnum) {
    UserDomainReqGenderTypeEnum["FEMALE"] = "FEMALE";
    UserDomainReqGenderTypeEnum["MALE"] = "MALE";
    UserDomainReqGenderTypeEnum["NOTAVAILABLE"] = "NOT_AVAILABLE";
    UserDomainReqGenderTypeEnum["NOTLISTED"] = "NOT_LISTED";
    UserDomainReqGenderTypeEnum["UNVERIFIED"] = "UNVERIFIED";
})(UserDomainReqGenderTypeEnum || (UserDomainReqGenderTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var UserDomainReqLawyerJobTitleEnum;
(function (UserDomainReqLawyerJobTitleEnum) {
    UserDomainReqLawyerJobTitleEnum["ACCOUNTANT"] = "ACCOUNTANT";
    UserDomainReqLawyerJobTitleEnum["ATTORNEY"] = "ATTORNEY";
    UserDomainReqLawyerJobTitleEnum["ATTORNEYASSOCIATE"] = "ATTORNEY_ASSOCIATE";
    UserDomainReqLawyerJobTitleEnum["ATTORNEYCOUNSEL"] = "ATTORNEY_COUNSEL";
    UserDomainReqLawyerJobTitleEnum["ATTORNEYMANAGINGPARTNER"] = "ATTORNEY_MANAGING_PARTNER";
    UserDomainReqLawyerJobTitleEnum["ATTORNEYPARTNER"] = "ATTORNEY_PARTNER";
    UserDomainReqLawyerJobTitleEnum["ATTORNEYSTAFF"] = "ATTORNEY_STAFF";
    UserDomainReqLawyerJobTitleEnum["CUSTOMERSERVICEREP"] = "CUSTOMER_SERVICE_REP";
    UserDomainReqLawyerJobTitleEnum["LEGALASSISTANT"] = "LEGAL_ASSISTANT";
    UserDomainReqLawyerJobTitleEnum["LEGALINTERN"] = "LEGAL_INTERN";
    UserDomainReqLawyerJobTitleEnum["LEGALSECRETARY"] = "LEGAL_SECRETARY";
    UserDomainReqLawyerJobTitleEnum["OTHER"] = "OTHER";
    UserDomainReqLawyerJobTitleEnum["PARALEGAL"] = "PARALEGAL";
})(UserDomainReqLawyerJobTitleEnum || (UserDomainReqLawyerJobTitleEnum = {}));
/**
* @export
* @enum {string}
*/
export var UserDomainReqLoginProviderEnum;
(function (UserDomainReqLoginProviderEnum) {
    UserDomainReqLoginProviderEnum["APPLE"] = "APPLE";
    UserDomainReqLoginProviderEnum["EMAIL"] = "EMAIL";
    UserDomainReqLoginProviderEnum["FACEBOOK"] = "FACEBOOK";
    UserDomainReqLoginProviderEnum["GOOGLE"] = "GOOGLE";
    UserDomainReqLoginProviderEnum["PHONE"] = "PHONE";
    UserDomainReqLoginProviderEnum["TWITTER"] = "TWITTER";
    UserDomainReqLoginProviderEnum["UNKNOWN"] = "UNKNOWN";
})(UserDomainReqLoginProviderEnum || (UserDomainReqLoginProviderEnum = {}));
/**
* @export
* @enum {string}
*/
export var UserDomainReqPrivacyModeEnum;
(function (UserDomainReqPrivacyModeEnum) {
    UserDomainReqPrivacyModeEnum["FRIENDS"] = "FRIENDS";
    UserDomainReqPrivacyModeEnum["PRIVATE"] = "PRIVATE";
    UserDomainReqPrivacyModeEnum["PUBLIC"] = "PUBLIC";
    UserDomainReqPrivacyModeEnum["SEMIPUBLIC"] = "SEMI_PUBLIC";
})(UserDomainReqPrivacyModeEnum || (UserDomainReqPrivacyModeEnum = {}));
/**
* @export
* @enum {string}
*/
export var UserDomainReqRaceEnum;
(function (UserDomainReqRaceEnum) {
    UserDomainReqRaceEnum["ASIAN"] = "ASIAN";
    UserDomainReqRaceEnum["BLACK"] = "BLACK";
    UserDomainReqRaceEnum["HISPANIC"] = "HISPANIC";
    UserDomainReqRaceEnum["MIDDLEEASTERN"] = "MIDDLE_EASTERN";
    UserDomainReqRaceEnum["NATIVE"] = "NATIVE";
    UserDomainReqRaceEnum["NOTAVAILABLE"] = "NOT_AVAILABLE";
    UserDomainReqRaceEnum["PACIFICISLANDER"] = "PACIFIC_ISLANDER";
    UserDomainReqRaceEnum["TWOORMORE"] = "TWO_OR_MORE";
    UserDomainReqRaceEnum["UNKNOWN"] = "UNKNOWN";
    UserDomainReqRaceEnum["UNVERIFIED"] = "UNVERIFIED";
    UserDomainReqRaceEnum["WHITE"] = "WHITE";
})(UserDomainReqRaceEnum || (UserDomainReqRaceEnum = {}));
