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
import { RegisterGhostUserRequest, RegisterGhostUserResponse, RegisterNewUserRequest, RegisterNewUserResponse } from '../models';
export interface RegisterGhostUserUsingPOSTRequest {
    request: RegisterGhostUserRequest;
}
export interface RegisterNewUserUsingPOSTRequest {
    request: RegisterNewUserRequest;
}
/**
 *
 */
export declare class RegistrationControllerApi extends runtime.BaseAPI {
    /**
     * registerGhostUser
     */
    registerGhostUserUsingPOSTRaw(requestParameters: RegisterGhostUserUsingPOSTRequest): Promise<runtime.ApiResponse<RegisterGhostUserResponse>>;
    /**
     * registerGhostUser
     */
    registerGhostUserUsingPOST(requestParameters: RegisterGhostUserUsingPOSTRequest): Promise<RegisterGhostUserResponse>;
    /**
     * registerNewUser
     */
    registerNewUserUsingPOSTRaw(requestParameters: RegisterNewUserUsingPOSTRequest): Promise<runtime.ApiResponse<RegisterNewUserResponse>>;
    /**
     * registerNewUser
     */
    registerNewUserUsingPOST(requestParameters: RegisterNewUserUsingPOSTRequest): Promise<RegisterNewUserResponse>;
}