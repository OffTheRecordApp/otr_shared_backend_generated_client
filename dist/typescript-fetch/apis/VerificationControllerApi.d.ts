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
import { GetInviteByTokenResponse } from '../models';
export interface GetInviteByTokenUsingGETRequest {
    token: string;
}
/**
 *
 */
export declare class VerificationControllerApi extends runtime.BaseAPI {
    /**
     * getInviteByToken
     */
    getInviteByTokenUsingGETRaw(requestParameters: GetInviteByTokenUsingGETRequest): Promise<runtime.ApiResponse<GetInviteByTokenResponse>>;
    /**
     * getInviteByToken
     */
    getInviteByTokenUsingGET(requestParameters: GetInviteByTokenUsingGETRequest): Promise<GetInviteByTokenResponse>;
}