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
export interface ValidateEmailAddressUsingGETRequest {
    email: string;
}
/**
 *
 */
export declare class ValidationControllerApi extends runtime.BaseAPI {
    /**
     * validateEmailAddress
     */
    validateEmailAddressUsingGETRaw(requestParameters: ValidateEmailAddressUsingGETRequest): Promise<runtime.ApiResponse<boolean>>;
    /**
     * validateEmailAddress
     */
    validateEmailAddressUsingGET(requestParameters: ValidateEmailAddressUsingGETRequest): Promise<boolean>;
}