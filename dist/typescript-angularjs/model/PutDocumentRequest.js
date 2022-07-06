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
exports.PutDocumentRequest = void 0;
var PutDocumentRequest;
(function (PutDocumentRequest) {
    var ClientDocReqEnum;
    (function (ClientDocReqEnum) {
        ClientDocReqEnum[ClientDocReqEnum["ACK"] = 'ACK'] = "ACK";
        ClientDocReqEnum[ClientDocReqEnum["NONE"] = 'NONE'] = "NONE";
        ClientDocReqEnum[ClientDocReqEnum["NOTARY"] = 'NOTARY'] = "NOTARY";
        ClientDocReqEnum[ClientDocReqEnum["SIGNATURE"] = 'SIGNATURE'] = "SIGNATURE";
    })(ClientDocReqEnum = PutDocumentRequest.ClientDocReqEnum || (PutDocumentRequest.ClientDocReqEnum = {}));
    var DocTypeEnum;
    (function (DocTypeEnum) {
        DocTypeEnum[DocTypeEnum["ENGAGEMENTLETTER"] = 'ENGAGEMENT_LETTER'] = "ENGAGEMENTLETTER";
        DocTypeEnum[DocTypeEnum["OTHERDOCUMENT"] = 'OTHER_DOCUMENT'] = "OTHERDOCUMENT";
        DocTypeEnum[DocTypeEnum["OTHERIMAGE"] = 'OTHER_IMAGE'] = "OTHERIMAGE";
    })(DocTypeEnum = PutDocumentRequest.DocTypeEnum || (PutDocumentRequest.DocTypeEnum = {}));
})(PutDocumentRequest = exports.PutDocumentRequest || (exports.PutDocumentRequest = {}));
