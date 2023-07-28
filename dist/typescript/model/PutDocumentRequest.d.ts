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
export interface PutDocumentRequest {
    "clientDocReq"?: PutDocumentRequest.ClientDocReqEnum;
    "docType"?: PutDocumentRequest.DocTypeEnum;
    "textProvidedByLawfirm"?: string;
}
export declare namespace PutDocumentRequest {
    enum ClientDocReqEnum {
        ACK,
        NONE,
        NOTARY,
        SIGNATURE
    }
    enum DocTypeEnum {
        ENGAGEMENTLETTER,
        OTHERDOCUMENT,
        OTHERIMAGE
    }
}
