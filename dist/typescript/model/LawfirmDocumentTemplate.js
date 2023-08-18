"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawfirmDocumentTemplate = void 0;
var LawfirmDocumentTemplate;
(function (LawfirmDocumentTemplate) {
    var ClientDocRequirementEnum;
    (function (ClientDocRequirementEnum) {
        ClientDocRequirementEnum[ClientDocRequirementEnum["ACK"] = 'ACK'] = "ACK";
        ClientDocRequirementEnum[ClientDocRequirementEnum["NONE"] = 'NONE'] = "NONE";
        ClientDocRequirementEnum[ClientDocRequirementEnum["NOTARY"] = 'NOTARY'] = "NOTARY";
        ClientDocRequirementEnum[ClientDocRequirementEnum["SIGNATURE"] = 'SIGNATURE'] = "SIGNATURE";
    })(ClientDocRequirementEnum = LawfirmDocumentTemplate.ClientDocRequirementEnum || (LawfirmDocumentTemplate.ClientDocRequirementEnum = {}));
    var DocTypeEnum;
    (function (DocTypeEnum) {
        DocTypeEnum[DocTypeEnum["ENGAGEMENTLETTER"] = 'ENGAGEMENT_LETTER'] = "ENGAGEMENTLETTER";
        DocTypeEnum[DocTypeEnum["OTHERDOCUMENT"] = 'OTHER_DOCUMENT'] = "OTHERDOCUMENT";
        DocTypeEnum[DocTypeEnum["OTHERIMAGE"] = 'OTHER_IMAGE'] = "OTHERIMAGE";
    })(DocTypeEnum = LawfirmDocumentTemplate.DocTypeEnum || (LawfirmDocumentTemplate.DocTypeEnum = {}));
})(LawfirmDocumentTemplate = exports.LawfirmDocumentTemplate || (exports.LawfirmDocumentTemplate = {}));