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
import { CaseUserPermissionAttributesFromJSON, CaseUserPermissionAttributesToJSON, } from './';
export function GetCaseUserModelFromJSON(json) {
    return GetCaseUserModelFromJSONTyped(json, false);
}
export function GetCaseUserModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalNote': !exists(json, 'additionalNote') ? undefined : json['additionalNote'],
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : (new Date(json['creationDateUtc'])),
        'dateOfBirth': !exists(json, 'dateOfBirth') ? undefined : (new Date(json['dateOfBirth'])),
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'isBookingAgent': !exists(json, 'isBookingAgent') ? undefined : json['isBookingAgent'],
        'isDefendant': !exists(json, 'isDefendant') ? undefined : json['isDefendant'],
        'isGhostUser': !exists(json, 'isGhostUser') ? undefined : json['isGhostUser'],
        'isOwner': !exists(json, 'isOwner') ? undefined : json['isOwner'],
        'isRemoved': !exists(json, 'isRemoved') ? undefined : json['isRemoved'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'lastUpdatedDateUtc': !exists(json, 'lastUpdatedDateUtc') ? undefined : (new Date(json['lastUpdatedDateUtc'])),
        'licenseNumber': !exists(json, 'licenseNumber') ? undefined : json['licenseNumber'],
        'licenseState': !exists(json, 'licenseState') ? undefined : json['licenseState'],
        'permissionAttributes': !exists(json, 'permissionAttributes') ? undefined : CaseUserPermissionAttributesFromJSON(json['permissionAttributes']),
        'relationshipToClient': !exists(json, 'relationshipToClient') ? undefined : json['relationshipToClient'],
        'signedProfilePictureUrl': !exists(json, 'signedProfilePictureUrl') ? undefined : json['signedProfilePictureUrl'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function GetCaseUserModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalNote': value.additionalNote,
        'caseId': value.caseId,
        'creationDateUtc': value.creationDateUtc === undefined ? undefined : (value.creationDateUtc.toISOString()),
        'dateOfBirth': value.dateOfBirth === undefined ? undefined : (value.dateOfBirth.toISOString()),
        'emailAddress': value.emailAddress,
        'firstName': value.firstName,
        'isBookingAgent': value.isBookingAgent,
        'isDefendant': value.isDefendant,
        'isGhostUser': value.isGhostUser,
        'isOwner': value.isOwner,
        'isRemoved': value.isRemoved,
        'lastName': value.lastName,
        'lastUpdatedDateUtc': value.lastUpdatedDateUtc === undefined ? undefined : (value.lastUpdatedDateUtc.toISOString()),
        'licenseNumber': value.licenseNumber,
        'licenseState': value.licenseState,
        'permissionAttributes': CaseUserPermissionAttributesToJSON(value.permissionAttributes),
        'relationshipToClient': value.relationshipToClient,
        'signedProfilePictureUrl': value.signedProfilePictureUrl,
        'userId': value.userId,
    };
}
/**
* @export
* @enum {string}
*/
export var GetCaseUserModelRelationshipToClientEnum;
(function (GetCaseUserModelRelationshipToClientEnum) {
    GetCaseUserModelRelationshipToClientEnum["EMPLOYER"] = "EMPLOYER";
    GetCaseUserModelRelationshipToClientEnum["FAMILYMEMBER"] = "FAMILY_MEMBER";
    GetCaseUserModelRelationshipToClientEnum["FRIEND"] = "FRIEND";
    GetCaseUserModelRelationshipToClientEnum["LAWYER"] = "LAWYER";
    GetCaseUserModelRelationshipToClientEnum["OTHER"] = "OTHER";
    GetCaseUserModelRelationshipToClientEnum["SELF"] = "SELF";
    GetCaseUserModelRelationshipToClientEnum["UNKNOWN"] = "UNKNOWN";
})(GetCaseUserModelRelationshipToClientEnum || (GetCaseUserModelRelationshipToClientEnum = {}));
