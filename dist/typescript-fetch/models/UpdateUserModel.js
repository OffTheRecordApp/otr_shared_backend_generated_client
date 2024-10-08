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
export function UpdateUserModelFromJSON(json) {
    return UpdateUserModelFromJSONTyped(json, false);
}
export function UpdateUserModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dob': !exists(json, 'dob') ? undefined : (new Date(json['dob'])),
        'driverLicenseNumber': !exists(json, 'driverLicenseNumber') ? undefined : json['driverLicenseNumber'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'hasLeftReview': !exists(json, 'hasLeftReview') ? undefined : json['hasLeftReview'],
        'isEmailConfirmed': !exists(json, 'isEmailConfirmed') ? undefined : json['isEmailConfirmed'],
        'isLawfirmAccessGranted': !exists(json, 'isLawfirmAccessGranted') ? undefined : json['isLawfirmAccessGranted'],
        'isPaymentPlansAllowed': !exists(json, 'isPaymentPlansAllowed') ? undefined : json['isPaymentPlansAllowed'],
        'isTestUser': !exists(json, 'isTestUser') ? undefined : json['isTestUser'],
        'isUnsubscribed': !exists(json, 'isUnsubscribed') ? undefined : json['isUnsubscribed'],
        'isUserAccountEnabled': !exists(json, 'isUserAccountEnabled') ? undefined : json['isUserAccountEnabled'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'loginProvider': !exists(json, 'loginProvider') ? undefined : json['loginProvider'],
        'privacyMode': !exists(json, 'privacyMode') ? undefined : json['privacyMode'],
        'profilePicture': !exists(json, 'profilePicture') ? undefined : json['profilePicture'],
        'race': !exists(json, 'race') ? undefined : json['race'],
        'signUpCode': !exists(json, 'signUpCode') ? undefined : json['signUpCode'],
        'signUpCodeUseCount': !exists(json, 'signUpCodeUseCount') ? undefined : json['signUpCodeUseCount'],
        'userAlias': !exists(json, 'userAlias') ? undefined : json['userAlias'],
    };
}
export function UpdateUserModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dob': value.dob === undefined ? undefined : (value.dob.toISOString()),
        'driverLicenseNumber': value.driverLicenseNumber,
        'emailAddress': value.emailAddress,
        'firstname': value.firstname,
        'gender': value.gender,
        'hasLeftReview': value.hasLeftReview,
        'isEmailConfirmed': value.isEmailConfirmed,
        'isLawfirmAccessGranted': value.isLawfirmAccessGranted,
        'isPaymentPlansAllowed': value.isPaymentPlansAllowed,
        'isTestUser': value.isTestUser,
        'isUnsubscribed': value.isUnsubscribed,
        'isUserAccountEnabled': value.isUserAccountEnabled,
        'lastname': value.lastname,
        'loginProvider': value.loginProvider,
        'privacyMode': value.privacyMode,
        'profilePicture': value.profilePicture,
        'race': value.race,
        'signUpCode': value.signUpCode,
        'signUpCodeUseCount': value.signUpCodeUseCount,
        'userAlias': value.userAlias,
    };
}
/**
* @export
* @enum {string}
*/
export var UpdateUserModelLoginProviderEnum;
(function (UpdateUserModelLoginProviderEnum) {
    UpdateUserModelLoginProviderEnum["APPLE"] = "APPLE";
    UpdateUserModelLoginProviderEnum["EMAIL"] = "EMAIL";
    UpdateUserModelLoginProviderEnum["FACEBOOK"] = "FACEBOOK";
    UpdateUserModelLoginProviderEnum["GOOGLE"] = "GOOGLE";
    UpdateUserModelLoginProviderEnum["PHONE"] = "PHONE";
    UpdateUserModelLoginProviderEnum["TWITTER"] = "TWITTER";
    UpdateUserModelLoginProviderEnum["UNKNOWN"] = "UNKNOWN";
})(UpdateUserModelLoginProviderEnum || (UpdateUserModelLoginProviderEnum = {}));
/**
* @export
* @enum {string}
*/
export var UpdateUserModelPrivacyModeEnum;
(function (UpdateUserModelPrivacyModeEnum) {
    UpdateUserModelPrivacyModeEnum["FRIENDS"] = "FRIENDS";
    UpdateUserModelPrivacyModeEnum["PRIVATE"] = "PRIVATE";
    UpdateUserModelPrivacyModeEnum["PUBLIC"] = "PUBLIC";
    UpdateUserModelPrivacyModeEnum["SEMIPUBLIC"] = "SEMI_PUBLIC";
})(UpdateUserModelPrivacyModeEnum || (UpdateUserModelPrivacyModeEnum = {}));
/**
* @export
* @enum {string}
*/
export var UpdateUserModelRaceEnum;
(function (UpdateUserModelRaceEnum) {
    UpdateUserModelRaceEnum["ASIAN"] = "ASIAN";
    UpdateUserModelRaceEnum["BLACK"] = "BLACK";
    UpdateUserModelRaceEnum["HISPANIC"] = "HISPANIC";
    UpdateUserModelRaceEnum["MIDDLEEASTERN"] = "MIDDLE_EASTERN";
    UpdateUserModelRaceEnum["NATIVE"] = "NATIVE";
    UpdateUserModelRaceEnum["NOTAVAILABLE"] = "NOT_AVAILABLE";
    UpdateUserModelRaceEnum["PACIFICISLANDER"] = "PACIFIC_ISLANDER";
    UpdateUserModelRaceEnum["TWOORMORE"] = "TWO_OR_MORE";
    UpdateUserModelRaceEnum["UNKNOWN"] = "UNKNOWN";
    UpdateUserModelRaceEnum["UNVERIFIED"] = "UNVERIFIED";
    UpdateUserModelRaceEnum["WHITE"] = "WHITE";
})(UpdateUserModelRaceEnum || (UpdateUserModelRaceEnum = {}));
