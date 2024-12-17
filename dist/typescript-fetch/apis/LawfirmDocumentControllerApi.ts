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


import * as runtime from '../runtime';
import {
    DocumentDecisionRequest,
    DocumentDecisionRequestFromJSON,
    DocumentDecisionRequestToJSON,
    GetCaseDocumentResponse,
    GetCaseDocumentResponseFromJSON,
    GetCaseDocumentResponseToJSON,
    GetDocumentsRequest,
    GetDocumentsRequestFromJSON,
    GetDocumentsRequestToJSON,
    LawfirmDocumentResponse,
    LawfirmDocumentResponseFromJSON,
    LawfirmDocumentResponseToJSON,
    LawfirmDocumentTemplateResponse,
    LawfirmDocumentTemplateResponseFromJSON,
    LawfirmDocumentTemplateResponseToJSON,
    PreviewDocumentRequest,
    PreviewDocumentRequestFromJSON,
    PreviewDocumentRequestToJSON,
    PutDocumentRequest,
    PutDocumentRequestFromJSON,
    PutDocumentRequestToJSON,
} from '../models';

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
export class LawfirmDocumentControllerApi extends runtime.BaseAPI {

    /**
     * generateDoc
     */
    async generateDocUsingPOSTRaw(requestParameters: GenerateDocUsingPOSTRequest): Promise<runtime.ApiResponse<LawfirmDocumentResponse>> {
        if (requestParameters.docType === null || requestParameters.docType === undefined) {
            throw new runtime.RequiredError('docType','Required parameter requestParameters.docType was null or undefined when calling generateDocUsingPOST.');
        }

        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling generateDocUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.docType !== undefined) {
            queryParameters['doc_type'] = requestParameters.docType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirms/{lawfirmId}/documents`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetDocumentsRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LawfirmDocumentResponseFromJSON(jsonValue));
    }

    /**
     * generateDoc
     */
    async generateDocUsingPOST(requestParameters: GenerateDocUsingPOSTRequest): Promise<LawfirmDocumentResponse> {
        const response = await this.generateDocUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * getDocument
     */
    async getDocumentUsingGETRaw(requestParameters: GetDocumentUsingGETRequest): Promise<runtime.ApiResponse<LawfirmDocumentTemplateResponse>> {
        if (requestParameters.docType === null || requestParameters.docType === undefined) {
            throw new runtime.RequiredError('docType','Required parameter requestParameters.docType was null or undefined when calling getDocumentUsingGET.');
        }

        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling getDocumentUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.docType !== undefined) {
            queryParameters['doc_type'] = requestParameters.docType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/lawfirms/{lawfirmId}/documents`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LawfirmDocumentTemplateResponseFromJSON(jsonValue));
    }

    /**
     * getDocument
     */
    async getDocumentUsingGET(requestParameters: GetDocumentUsingGETRequest): Promise<LawfirmDocumentTemplateResponse> {
        const response = await this.getDocumentUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * getLawfirmCaseDocuments
     */
    async getLawfirmCaseDocumentsUsingGETRaw(requestParameters: GetLawfirmCaseDocumentsUsingGETRequest): Promise<runtime.ApiResponse<GetCaseDocumentResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling getLawfirmCaseDocumentsUsingGET.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/documents`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseDocumentResponseFromJSON(jsonValue));
    }

    /**
     * getLawfirmCaseDocuments
     */
    async getLawfirmCaseDocumentsUsingGET(requestParameters: GetLawfirmCaseDocumentsUsingGETRequest): Promise<GetCaseDocumentResponse> {
        const response = await this.getLawfirmCaseDocumentsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * markDocumentWithDecision
     */
    async markDocumentWithDecisionUsingPOSTRaw(requestParameters: MarkDocumentWithDecisionUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.docId === null || requestParameters.docId === undefined) {
            throw new runtime.RequiredError('docId','Required parameter requestParameters.docId was null or undefined when calling markDocumentWithDecisionUsingPOST.');
        }

        if (requestParameters.decisionRequest === null || requestParameters.decisionRequest === undefined) {
            throw new runtime.RequiredError('decisionRequest','Required parameter requestParameters.decisionRequest was null or undefined when calling markDocumentWithDecisionUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/documents/{docId}/decision`.replace(`{${"docId"}}`, encodeURIComponent(String(requestParameters.docId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DocumentDecisionRequestToJSON(requestParameters.decisionRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * markDocumentWithDecision
     */
    async markDocumentWithDecisionUsingPOST(requestParameters: MarkDocumentWithDecisionUsingPOSTRequest): Promise<void> {
        await this.markDocumentWithDecisionUsingPOSTRaw(requestParameters);
    }

    /**
     * previewDoc
     */
    async previewDocUsingPOSTRaw(requestParameters: PreviewDocUsingPOSTRequest): Promise<runtime.ApiResponse<LawfirmDocumentResponse>> {
        if (requestParameters.docType === null || requestParameters.docType === undefined) {
            throw new runtime.RequiredError('docType','Required parameter requestParameters.docType was null or undefined when calling previewDocUsingPOST.');
        }

        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling previewDocUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling previewDocUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.docType !== undefined) {
            queryParameters['doc_type'] = requestParameters.docType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirms/{lawfirmId}/documents/preview`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PreviewDocumentRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LawfirmDocumentResponseFromJSON(jsonValue));
    }

    /**
     * previewDoc
     */
    async previewDocUsingPOST(requestParameters: PreviewDocUsingPOSTRequest): Promise<LawfirmDocumentResponse> {
        const response = await this.previewDocUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * uploadCopy
     */
    async uploadCopyUsingPUTRaw(requestParameters: UploadCopyUsingPUTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.lawfirmId === null || requestParameters.lawfirmId === undefined) {
            throw new runtime.RequiredError('lawfirmId','Required parameter requestParameters.lawfirmId was null or undefined when calling uploadCopyUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling uploadCopyUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/lawfirms/{lawfirmId}/documents`.replace(`{${"lawfirmId"}}`, encodeURIComponent(String(requestParameters.lawfirmId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutDocumentRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * uploadCopy
     */
    async uploadCopyUsingPUT(requestParameters: UploadCopyUsingPUTRequest): Promise<void> {
        await this.uploadCopyUsingPUTRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GenerateDocUsingPOSTDocTypeEnum {
    ENGAGEMENTLETTER = 'ENGAGEMENT_LETTER',
    OTHERDOCUMENT = 'OTHER_DOCUMENT',
    OTHERIMAGE = 'OTHER_IMAGE'
}
/**
    * @export
    * @enum {string}
    */
export enum GetDocumentUsingGETDocTypeEnum {
    ENGAGEMENTLETTER = 'ENGAGEMENT_LETTER',
    OTHERDOCUMENT = 'OTHER_DOCUMENT',
    OTHERIMAGE = 'OTHER_IMAGE'
}
/**
    * @export
    * @enum {string}
    */
export enum PreviewDocUsingPOSTDocTypeEnum {
    ENGAGEMENTLETTER = 'ENGAGEMENT_LETTER',
    OTHERDOCUMENT = 'OTHER_DOCUMENT',
    OTHERIMAGE = 'OTHER_IMAGE'
}