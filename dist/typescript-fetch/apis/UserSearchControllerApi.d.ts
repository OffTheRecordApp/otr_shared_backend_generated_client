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
import { FindMatchingUsersRequest, FindMatchingUsersResponse, GetCountOfMatchingUsersRequest, GetCountOfMatchingUsersResponse } from '../models';
export interface FindMatchingUsersUsingPOSTRequest {
    request: FindMatchingUsersRequest;
}
export interface GetCountOfMatchingUsersUsingPOSTRequest {
    request: GetCountOfMatchingUsersRequest;
}
/**
 *
 */
export declare class UserSearchControllerApi extends runtime.BaseAPI {
    /**
     * findMatchingUsers
     */
    findMatchingUsersUsingPOSTRaw(requestParameters: FindMatchingUsersUsingPOSTRequest): Promise<runtime.ApiResponse<FindMatchingUsersResponse>>;
    /**
     * findMatchingUsers
     */
    findMatchingUsersUsingPOST(requestParameters: FindMatchingUsersUsingPOSTRequest): Promise<FindMatchingUsersResponse>;
    /**
     * getCountOfMatchingUsers
     */
    getCountOfMatchingUsersUsingPOSTRaw(requestParameters: GetCountOfMatchingUsersUsingPOSTRequest): Promise<runtime.ApiResponse<GetCountOfMatchingUsersResponse>>;
    /**
     * getCountOfMatchingUsers
     */
    getCountOfMatchingUsersUsingPOST(requestParameters: GetCountOfMatchingUsersUsingPOSTRequest): Promise<GetCountOfMatchingUsersResponse>;
}
