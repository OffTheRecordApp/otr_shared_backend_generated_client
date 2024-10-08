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
import { GetCitationAuditLogsResponse } from '../models';
export interface GetAuditLogsUsingGETRequest {
    citationId: number;
    logLevel?: GetAuditLogsUsingGETLogLevelEnum;
    logType?: GetAuditLogsUsingGETLogTypeEnum;
    showActiveOnly?: boolean;
}
/**
 *
 */
export declare class AuditLogControllerApi extends runtime.BaseAPI {
    /**
     * getAuditLogs
     */
    getAuditLogsUsingGETRaw(requestParameters: GetAuditLogsUsingGETRequest): Promise<runtime.ApiResponse<GetCitationAuditLogsResponse>>;
    /**
     * getAuditLogs
     */
    getAuditLogsUsingGET(requestParameters: GetAuditLogsUsingGETRequest): Promise<GetCitationAuditLogsResponse>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetAuditLogsUsingGETLogLevelEnum {
    NONTECHNICAL = "NON_TECHNICAL",
    TECHNICAL = "TECHNICAL"
}
/**
    * @export
    * @enum {string}
    */
export declare enum GetAuditLogsUsingGETLogTypeEnum {
    APPLYREFERRALCODE = "APPLY_REFERRAL_CODE",
    CREATELEGALSERVICES = "CREATE_LEGAL_SERVICES",
    INITIATECASE = "INITIATE_CASE",
    MATCHCASE = "MATCH_CASE",
    OTHER = "OTHER",
    TRANSFERCASE = "TRANSFER_CASE"
}
