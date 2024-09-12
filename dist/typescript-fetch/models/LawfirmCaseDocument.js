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
export function LawfirmCaseDocumentFromJSON(json) {
    return LawfirmCaseDocumentFromJSONTyped(json, false);
}
export function LawfirmCaseDocumentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseDocId': !exists(json, 'caseDocId') ? undefined : json['caseDocId'],
        'clientDocRequirement': !exists(json, 'clientDocRequirement') ? undefined : json['clientDocRequirement'],
        'docDate': !exists(json, 'docDate') ? undefined : (new Date(json['docDate'])),
        'docType': !exists(json, 'docType') ? undefined : json['docType'],
        'docUrl': !exists(json, 'docUrl') ? undefined : json['docUrl'],
        'hasClientAgreed': !exists(json, 'hasClientAgreed') ? undefined : json['hasClientAgreed'],
    };
}
export function LawfirmCaseDocumentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseDocId': value.caseDocId,
        'clientDocRequirement': value.clientDocRequirement,
        'docDate': value.docDate === undefined ? undefined : (value.docDate.toISOString()),
        'docType': value.docType,
        'docUrl': value.docUrl,
        'hasClientAgreed': value.hasClientAgreed,
    };
}
/**
* @export
* @enum {string}
*/
export var LawfirmCaseDocumentClientDocRequirementEnum;
(function (LawfirmCaseDocumentClientDocRequirementEnum) {
    LawfirmCaseDocumentClientDocRequirementEnum["ACK"] = "ACK";
    LawfirmCaseDocumentClientDocRequirementEnum["NONE"] = "NONE";
    LawfirmCaseDocumentClientDocRequirementEnum["NOTARY"] = "NOTARY";
    LawfirmCaseDocumentClientDocRequirementEnum["SIGNATURE"] = "SIGNATURE";
})(LawfirmCaseDocumentClientDocRequirementEnum || (LawfirmCaseDocumentClientDocRequirementEnum = {}));
/**
* @export
* @enum {string}
*/
export var LawfirmCaseDocumentDocTypeEnum;
(function (LawfirmCaseDocumentDocTypeEnum) {
    LawfirmCaseDocumentDocTypeEnum["ENGAGEMENTLETTER"] = "ENGAGEMENT_LETTER";
    LawfirmCaseDocumentDocTypeEnum["OTHERDOCUMENT"] = "OTHER_DOCUMENT";
    LawfirmCaseDocumentDocTypeEnum["OTHERIMAGE"] = "OTHER_IMAGE";
})(LawfirmCaseDocumentDocTypeEnum || (LawfirmCaseDocumentDocTypeEnum = {}));