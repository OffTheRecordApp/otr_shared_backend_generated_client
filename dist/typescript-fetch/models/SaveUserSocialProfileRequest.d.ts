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
import { SaveUserSocialProfileModel } from './';
/**
 *
 * @export
 * @interface SaveUserSocialProfileRequest
 */
export interface SaveUserSocialProfileRequest {
    /**
     *
     * @type {Array<SaveUserSocialProfileModel>}
     * @memberof SaveUserSocialProfileRequest
     */
    profiles?: Array<SaveUserSocialProfileModel>;
}
export declare function SaveUserSocialProfileRequestFromJSON(json: any): SaveUserSocialProfileRequest;
export declare function SaveUserSocialProfileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveUserSocialProfileRequest;
export declare function SaveUserSocialProfileRequestToJSON(value?: SaveUserSocialProfileRequest | null): any;