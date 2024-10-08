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
import { CaseTransferResponse, TransferCaseRequest } from '../models';
export interface GetTransferHistoryUsingGETRequest {
    caseId: string;
}
export interface TransferCaseUsingPUTRequest {
    caseId: string;
    request: TransferCaseRequest;
}
/**
 *
 */
export declare class CaseTransferControllerApi extends runtime.BaseAPI {
    /**
     * getTransferHistory
     */
    getTransferHistoryUsingGETRaw(requestParameters: GetTransferHistoryUsingGETRequest): Promise<runtime.ApiResponse<CaseTransferResponse>>;
    /**
     * getTransferHistory
     */
    getTransferHistoryUsingGET(requestParameters: GetTransferHistoryUsingGETRequest): Promise<CaseTransferResponse>;
    /**
     * transferCase
     */
    transferCaseUsingPUTRaw(requestParameters: TransferCaseUsingPUTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * transferCase
     */
    transferCaseUsingPUT(requestParameters: TransferCaseUsingPUTRequest): Promise<object>;
}
