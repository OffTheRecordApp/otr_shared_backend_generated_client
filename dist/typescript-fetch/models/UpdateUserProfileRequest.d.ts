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
import { UpdateUserModel } from './';
/**
 *
 * @export
 * @interface UpdateUserProfileRequest
 */
export interface UpdateUserProfileRequest {
    /**
     *
     * @type {UpdateUserModel}
     * @memberof UpdateUserProfileRequest
     */
    user?: UpdateUserModel;
}
export declare function UpdateUserProfileRequestFromJSON(json: any): UpdateUserProfileRequest;
export declare function UpdateUserProfileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserProfileRequest;
export declare function UpdateUserProfileRequestToJSON(value?: UpdateUserProfileRequest | null): any;