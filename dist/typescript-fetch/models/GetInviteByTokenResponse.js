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
import { LawyerInviteByTokenModelFromJSON, LawyerInviteByTokenModelToJSON, } from './';
export function GetInviteByTokenResponseFromJSON(json) {
    return GetInviteByTokenResponseFromJSONTyped(json, false);
}
export function GetInviteByTokenResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'hasAccount': !exists(json, 'hasAccount') ? undefined : json['hasAccount'],
        'inviteeFirstName': !exists(json, 'inviteeFirstName') ? undefined : json['inviteeFirstName'],
        'inviteeLastName': !exists(json, 'inviteeLastName') ? undefined : json['inviteeLastName'],
        'inviteeRoleType': !exists(json, 'inviteeRoleType') ? undefined : json['inviteeRoleType'],
        'inviteeUserId': !exists(json, 'inviteeUserId') ? undefined : json['inviteeUserId'],
        'lawyerInvite': !exists(json, 'lawyerInvite') ? undefined : LawyerInviteByTokenModelFromJSON(json['lawyerInvite']),
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'verificationStatus': !exists(json, 'verificationStatus') ? undefined : json['verificationStatus'],
    };
}
export function GetInviteByTokenResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emailAddress': value.emailAddress,
        'fullName': value.fullName,
        'hasAccount': value.hasAccount,
        'inviteeFirstName': value.inviteeFirstName,
        'inviteeLastName': value.inviteeLastName,
        'inviteeRoleType': value.inviteeRoleType,
        'inviteeUserId': value.inviteeUserId,
        'lawyerInvite': LawyerInviteByTokenModelToJSON(value.lawyerInvite),
        'profilePictureUrl': value.profilePictureUrl,
        'userId': value.userId,
        'verificationStatus': value.verificationStatus,
    };
}
/**
* @export
* @enum {string}
*/
export var GetInviteByTokenResponseInviteeRoleTypeEnum;
(function (GetInviteByTokenResponseInviteeRoleTypeEnum) {
    GetInviteByTokenResponseInviteeRoleTypeEnum["ADMIN"] = "ADMIN";
    GetInviteByTokenResponseInviteeRoleTypeEnum["DEFENDANT"] = "DEFENDANT";
    GetInviteByTokenResponseInviteeRoleTypeEnum["LAWFIRMADMIN"] = "LAWFIRM_ADMIN";
    GetInviteByTokenResponseInviteeRoleTypeEnum["LAWYER"] = "LAWYER";
    GetInviteByTokenResponseInviteeRoleTypeEnum["PARTNER"] = "PARTNER";
    GetInviteByTokenResponseInviteeRoleTypeEnum["UNKNOWN"] = "UNKNOWN";
})(GetInviteByTokenResponseInviteeRoleTypeEnum || (GetInviteByTokenResponseInviteeRoleTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var GetInviteByTokenResponseVerificationStatusEnum;
(function (GetInviteByTokenResponseVerificationStatusEnum) {
    GetInviteByTokenResponseVerificationStatusEnum["CANCELLED"] = "CANCELLED";
    GetInviteByTokenResponseVerificationStatusEnum["PENDING"] = "PENDING";
    GetInviteByTokenResponseVerificationStatusEnum["VERIFIED"] = "VERIFIED";
})(GetInviteByTokenResponseVerificationStatusEnum || (GetInviteByTokenResponseVerificationStatusEnum = {}));