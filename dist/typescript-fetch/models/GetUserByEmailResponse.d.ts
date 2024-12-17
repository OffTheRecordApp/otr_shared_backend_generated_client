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
/**
 *
 * @export
 * @interface GetUserByEmailResponse
 */
export interface GetUserByEmailResponse {
    /**
     *
     * @type {string}
     * @memberof GetUserByEmailResponse
     */
    firstName?: string;
    /**
     *
     * @type {number}
     * @memberof GetUserByEmailResponse
     */
    numMatchingUsers?: number;
}
export declare function GetUserByEmailResponseFromJSON(json: any): GetUserByEmailResponse;
export declare function GetUserByEmailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserByEmailResponse;
export declare function GetUserByEmailResponseToJSON(value?: GetUserByEmailResponse | null): any;