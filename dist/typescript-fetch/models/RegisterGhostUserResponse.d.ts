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
import { GhostUserResponse } from './';
/**
 *
 * @export
 * @interface RegisterGhostUserResponse
 */
export interface RegisterGhostUserResponse {
    /**
     *
     * @type {GhostUserResponse}
     * @memberof RegisterGhostUserResponse
     */
    ghostUser?: GhostUserResponse;
}
export declare function RegisterGhostUserResponseFromJSON(json: any): RegisterGhostUserResponse;
export declare function RegisterGhostUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterGhostUserResponse;
export declare function RegisterGhostUserResponseToJSON(value?: RegisterGhostUserResponse | null): any;