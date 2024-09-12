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
import { CaseUserDefendantAttributesFromJSON, CaseUserDefendantAttributesToJSON, CaseUserPermissionAttributesFromJSON, CaseUserPermissionAttributesToJSON, } from './';
export function CaseUserDetailsModelFromJSON(json) {
    return CaseUserDetailsModelFromJSONTyped(json, false);
}
export function CaseUserDetailsModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalNote': !exists(json, 'additionalNote') ? undefined : json['additionalNote'],
        'defendantAttributes': !exists(json, 'defendantAttributes') ? undefined : CaseUserDefendantAttributesFromJSON(json['defendantAttributes']),
        'isBookingAgent': !exists(json, 'isBookingAgent') ? undefined : json['isBookingAgent'],
        'isDefendant': !exists(json, 'isDefendant') ? undefined : json['isDefendant'],
        'isOwner': !exists(json, 'isOwner') ? undefined : json['isOwner'],
        'ownerUserId': !exists(json, 'ownerUserId') ? undefined : json['ownerUserId'],
        'permissionAttributes': !exists(json, 'permissionAttributes') ? undefined : CaseUserPermissionAttributesFromJSON(json['permissionAttributes']),
        'relationshipToClientType': !exists(json, 'relationshipToClientType') ? undefined : json['relationshipToClientType'],
    };
}
export function CaseUserDetailsModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalNote': value.additionalNote,
        'defendantAttributes': CaseUserDefendantAttributesToJSON(value.defendantAttributes),
        'isBookingAgent': value.isBookingAgent,
        'isDefendant': value.isDefendant,
        'isOwner': value.isOwner,
        'ownerUserId': value.ownerUserId,
        'permissionAttributes': CaseUserPermissionAttributesToJSON(value.permissionAttributes),
        'relationshipToClientType': value.relationshipToClientType,
    };
}
/**
* @export
* @enum {string}
*/
export var CaseUserDetailsModelRelationshipToClientTypeEnum;
(function (CaseUserDetailsModelRelationshipToClientTypeEnum) {
    CaseUserDetailsModelRelationshipToClientTypeEnum["EMPLOYER"] = "EMPLOYER";
    CaseUserDetailsModelRelationshipToClientTypeEnum["FAMILYMEMBER"] = "FAMILY_MEMBER";
    CaseUserDetailsModelRelationshipToClientTypeEnum["FRIEND"] = "FRIEND";
    CaseUserDetailsModelRelationshipToClientTypeEnum["LAWYER"] = "LAWYER";
    CaseUserDetailsModelRelationshipToClientTypeEnum["OTHER"] = "OTHER";
    CaseUserDetailsModelRelationshipToClientTypeEnum["SELF"] = "SELF";
    CaseUserDetailsModelRelationshipToClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(CaseUserDetailsModelRelationshipToClientTypeEnum || (CaseUserDetailsModelRelationshipToClientTypeEnum = {}));