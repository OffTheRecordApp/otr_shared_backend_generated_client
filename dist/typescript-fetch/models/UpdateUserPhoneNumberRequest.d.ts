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
import { UpdatePhoneNumber } from './';
/**
 *
 * @export
 * @interface UpdateUserPhoneNumberRequest
 */
export interface UpdateUserPhoneNumberRequest {
    /**
     *
     * @type {UpdatePhoneNumber}
     * @memberof UpdateUserPhoneNumberRequest
     */
    phoneNumber?: UpdatePhoneNumber;
    /**
     *
     * @type {boolean}
     * @memberof UpdateUserPhoneNumberRequest
     */
    shouldVerifyPhoneNumber?: boolean;
}
export declare function UpdateUserPhoneNumberRequestFromJSON(json: any): UpdateUserPhoneNumberRequest;
export declare function UpdateUserPhoneNumberRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserPhoneNumberRequest;
export declare function UpdateUserPhoneNumberRequestToJSON(value?: UpdateUserPhoneNumberRequest | null): any;