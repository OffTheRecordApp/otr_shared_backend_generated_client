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
import * as runtime from '../runtime';
import { DocumentDecisionRequest, GetCaseDocumentResponse, GetDocumentsRequest, LawfirmDocumentResponse, LawfirmDocumentTemplateResponse, PreviewDocumentRequest, PutDocumentRequest } from '../models';
export interface GenerateDocUsingPOSTRequest {
    docType: GenerateDocUsingPOSTDocTypeEnum;
    lawfirmId: string;
    request?: GetDocumentsRequest;
}
export interface GetDocumentUsingGETRequest {
    docType: GetDocumentUsingGETDocTypeEnum;
    lawfirmId: string;
}
export interface GetLawfirmCaseDocumentsUsingGETRequest {
    caseId: string;
}
export interface MarkDocumentWithDecisionUsingPOSTRequest {
    docId: string;
    decisionRequest: DocumentDecisionRequest;
}
export interface PreviewDocUsingPOSTRequest {
    docType: PreviewDocUsingPOSTDocTypeEnum;
    lawfirmId: string;
    request: PreviewDocumentRequest;
}
export interface UploadCopyUsingPUTRequest {
    lawfirmId: string;
    request: PutDocumentRequest;
}
/**
 *
 */
export declare class LawfirmDocumentControllerApi extends runtime.BaseAPI {
    /**
     * generateDoc
     */
    generateDocUsingPOSTRaw(requestParameters: GenerateDocUsingPOSTRequest): Promise<runtime.ApiResponse<LawfirmDocumentResponse>>;
    /**
     * generateDoc
     */
    generateDocUsingPOST(requestParameters: GenerateDocUsingPOSTRequest): Promise<LawfirmDocumentResponse>;
    /**
     * getDocument
     */
    getDocumentUsingGETRaw(requestParameters: GetDocumentUsingGETRequest): Promise<runtime.ApiResponse<LawfirmDocumentTemplateResponse>>;
    /**
     * getDocument
     */
    getDocumentUsingGET(requestParameters: GetDocumentUsingGETRequest): Promise<LawfirmDocumentTemplateResponse>;
    /**
     * getLawfirmCaseDocuments
     */
    getLawfirmCaseDocumentsUsingGETRaw(requestParameters: GetLawfirmCaseDocumentsUsingGETRequest): Promise<runtime.ApiResponse<GetCaseDocumentResponse>>;
    /**
     * getLawfirmCaseDocuments
     */
    getLawfirmCaseDocumentsUsingGET(requestParameters: GetLawfirmCaseDocumentsUsingGETRequest): Promise<GetCaseDocumentResponse>;
    /**
     * markDocumentWithDecision
     */
    markDocumentWithDecisionUsingPOSTRaw(requestParameters: MarkDocumentWithDecisionUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * markDocumentWithDecision
     */
    markDocumentWithDecisionUsingPOST(requestParameters: MarkDocumentWithDecisionUsingPOSTRequest): Promise<void>;
    /**
     * previewDoc
     */
    previewDocUsingPOSTRaw(requestParameters: PreviewDocUsingPOSTRequest): Promise<runtime.ApiResponse<LawfirmDocumentResponse>>;
    /**
     * previewDoc
     */
    previewDocUsingPOST(requestParameters: PreviewDocUsingPOSTRequest): Promise<LawfirmDocumentResponse>;
    /**
     * uploadCopy
     */
    uploadCopyUsingPUTRaw(requestParameters: UploadCopyUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * uploadCopy
     */
    uploadCopyUsingPUT(requestParameters: UploadCopyUsingPUTRequest): Promise<void>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum GenerateDocUsingPOSTDocTypeEnum {
    ENGAGEMENTLETTER = "ENGAGEMENT_LETTER",
    OTHERDOCUMENT = "OTHER_DOCUMENT",
    OTHERIMAGE = "OTHER_IMAGE"
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetDocumentUsingGETDocTypeEnum {
    ENGAGEMENTLETTER = "ENGAGEMENT_LETTER",
    OTHERDOCUMENT = "OTHER_DOCUMENT",
    OTHERIMAGE = "OTHER_IMAGE"
}
/**
    * @export
    * @enum {string}
    */
export declare enum PreviewDocUsingPOSTDocTypeEnum {
    ENGAGEMENTLETTER = "ENGAGEMENT_LETTER",
    OTHERDOCUMENT = "OTHER_DOCUMENT",
    OTHERIMAGE = "OTHER_IMAGE"
}
