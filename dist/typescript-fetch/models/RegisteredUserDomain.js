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
export function RegisteredUserDomainFromJSON(json) {
    return RegisteredUserDomainFromJSONTyped(json, false);
}
export function RegisteredUserDomainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'campaign': !exists(json, 'campaign') ? undefined : json['campaign'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'dob': !exists(json, 'dob') ? undefined : (new Date(json['dob'])),
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'genderType': !exists(json, 'genderType') ? undefined : json['genderType'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'loginProvider': !exists(json, 'loginProvider') ? undefined : json['loginProvider'],
        'numBookingCancelations': !exists(json, 'numBookingCancelations') ? undefined : json['numBookingCancelations'],
        'paidCaseCount': !exists(json, 'paidCaseCount') ? undefined : json['paidCaseCount'],
        'profilePicture': !exists(json, 'profilePicture') ? undefined : json['profilePicture'],
        'race': !exists(json, 'race') ? undefined : json['race'],
        'signUpCode': !exists(json, 'signUpCode') ? undefined : json['signUpCode'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userRegistrationDateUtc': !exists(json, 'userRegistrationDateUtc') ? undefined : (new Date(json['userRegistrationDateUtc'])),
    };
}
export function RegisteredUserDomainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'campaign': value.campaign,
        'channel': value.channel,
        'clientType': value.clientType,
        'dob': value.dob === undefined ? undefined : (value.dob.toISOString()),
        'firstname': value.firstname,
        'fullName': value.fullName,
        'genderType': value.genderType,
        'lastname': value.lastname,
        'loginProvider': value.loginProvider,
        'numBookingCancelations': value.numBookingCancelations,
        'paidCaseCount': value.paidCaseCount,
        'profilePicture': value.profilePicture,
        'race': value.race,
        'signUpCode': value.signUpCode,
        'userId': value.userId,
        'userRegistrationDateUtc': value.userRegistrationDateUtc === undefined ? undefined : (value.userRegistrationDateUtc.toISOString()),
    };
}
/**
* @export
* @enum {string}
*/
export var RegisteredUserDomainClientTypeEnum;
(function (RegisteredUserDomainClientTypeEnum) {
    RegisteredUserDomainClientTypeEnum["ANDROID"] = "ANDROID";
    RegisteredUserDomainClientTypeEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    RegisteredUserDomainClientTypeEnum["DMVGO"] = "DMV_GO";
    RegisteredUserDomainClientTypeEnum["DMVORG"] = "DMV_ORG";
    RegisteredUserDomainClientTypeEnum["EMAIL"] = "EMAIL";
    RegisteredUserDomainClientTypeEnum["FRESHDESK"] = "FRESH_DESK";
    RegisteredUserDomainClientTypeEnum["IOS"] = "IOS";
    RegisteredUserDomainClientTypeEnum["LOCALHOST"] = "LOCALHOST";
    RegisteredUserDomainClientTypeEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    RegisteredUserDomainClientTypeEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    RegisteredUserDomainClientTypeEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    RegisteredUserDomainClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    RegisteredUserDomainClientTypeEnum["OTREXPLORER"] = "OTR_EXPLORER";
    RegisteredUserDomainClientTypeEnum["OTRJOBSCHEDULER"] = "OTR_JOB_SCHEDULER";
    RegisteredUserDomainClientTypeEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    RegisteredUserDomainClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    RegisteredUserDomainClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    RegisteredUserDomainClientTypeEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    RegisteredUserDomainClientTypeEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    RegisteredUserDomainClientTypeEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    RegisteredUserDomainClientTypeEnum["OTRWIDGET"] = "OTR_WIDGET";
    RegisteredUserDomainClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(RegisteredUserDomainClientTypeEnum || (RegisteredUserDomainClientTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var RegisteredUserDomainGenderTypeEnum;
(function (RegisteredUserDomainGenderTypeEnum) {
    RegisteredUserDomainGenderTypeEnum["FEMALE"] = "FEMALE";
    RegisteredUserDomainGenderTypeEnum["MALE"] = "MALE";
    RegisteredUserDomainGenderTypeEnum["NOTAVAILABLE"] = "NOT_AVAILABLE";
    RegisteredUserDomainGenderTypeEnum["NOTLISTED"] = "NOT_LISTED";
    RegisteredUserDomainGenderTypeEnum["UNVERIFIED"] = "UNVERIFIED";
    RegisteredUserDomainGenderTypeEnum["X"] = "X";
})(RegisteredUserDomainGenderTypeEnum || (RegisteredUserDomainGenderTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var RegisteredUserDomainLoginProviderEnum;
(function (RegisteredUserDomainLoginProviderEnum) {
    RegisteredUserDomainLoginProviderEnum["APPLE"] = "APPLE";
    RegisteredUserDomainLoginProviderEnum["EMAIL"] = "EMAIL";
    RegisteredUserDomainLoginProviderEnum["FACEBOOK"] = "FACEBOOK";
    RegisteredUserDomainLoginProviderEnum["GOOGLE"] = "GOOGLE";
    RegisteredUserDomainLoginProviderEnum["PHONE"] = "PHONE";
    RegisteredUserDomainLoginProviderEnum["TWITTER"] = "TWITTER";
    RegisteredUserDomainLoginProviderEnum["UNKNOWN"] = "UNKNOWN";
})(RegisteredUserDomainLoginProviderEnum || (RegisteredUserDomainLoginProviderEnum = {}));
/**
* @export
* @enum {string}
*/
export var RegisteredUserDomainRaceEnum;
(function (RegisteredUserDomainRaceEnum) {
    RegisteredUserDomainRaceEnum["ASIAN"] = "ASIAN";
    RegisteredUserDomainRaceEnum["BLACK"] = "BLACK";
    RegisteredUserDomainRaceEnum["HISPANIC"] = "HISPANIC";
    RegisteredUserDomainRaceEnum["MIDDLEEASTERN"] = "MIDDLE_EASTERN";
    RegisteredUserDomainRaceEnum["NATIVE"] = "NATIVE";
    RegisteredUserDomainRaceEnum["NOTAVAILABLE"] = "NOT_AVAILABLE";
    RegisteredUserDomainRaceEnum["PACIFICISLANDER"] = "PACIFIC_ISLANDER";
    RegisteredUserDomainRaceEnum["TWOORMORE"] = "TWO_OR_MORE";
    RegisteredUserDomainRaceEnum["UNKNOWN"] = "UNKNOWN";
    RegisteredUserDomainRaceEnum["UNVERIFIED"] = "UNVERIFIED";
    RegisteredUserDomainRaceEnum["WHITE"] = "WHITE";
})(RegisteredUserDomainRaceEnum || (RegisteredUserDomainRaceEnum = {}));
