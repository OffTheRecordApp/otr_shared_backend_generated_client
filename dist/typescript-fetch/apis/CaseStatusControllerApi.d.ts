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
import { CaseStatusDetailsResponse, GetCaseResolutionStatusesResponse } from '../models';
export interface GetCaseResolutionStatusesUsingGETRequest {
    stateCode?: string;
}
export interface GetCaseStatusesUsingGETRequest {
    categories?: GetCaseStatusesUsingGETCategoriesEnum;
}
/**
 *
 */
export declare class CaseStatusControllerApi extends runtime.BaseAPI {
    /**
     * getCaseResolutionStatuses
     */
    getCaseResolutionStatusesUsingGETRaw(requestParameters: GetCaseResolutionStatusesUsingGETRequest): Promise<runtime.ApiResponse<GetCaseResolutionStatusesResponse>>;
    /**
     * getCaseResolutionStatuses
     */
    getCaseResolutionStatusesUsingGET(requestParameters: GetCaseResolutionStatusesUsingGETRequest): Promise<GetCaseResolutionStatusesResponse>;
    /**
     * getCaseStatuses
     */
    getCaseStatusesUsingGETRaw(requestParameters: GetCaseStatusesUsingGETRequest): Promise<runtime.ApiResponse<Array<CaseStatusDetailsResponse>>>;
    /**
     * getCaseStatuses
     */
    getCaseStatusesUsingGET(requestParameters: GetCaseStatusesUsingGETRequest): Promise<Array<CaseStatusDetailsResponse>>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetCaseStatusesUsingGETCategoriesEnum {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    RESOLVED = "RESOLVED",
    UNCONFIRMED = "UNCONFIRMED"
}