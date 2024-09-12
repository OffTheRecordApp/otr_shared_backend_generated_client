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
 * @interface ValidateUserEmailResponse
 */
export interface ValidateUserEmailResponse {
    /**
     *
     * @type {string}
     * @memberof ValidateUserEmailResponse
     */
    invalidEmailReason?: string;
    /**
     *
     * @type {boolean}
     * @memberof ValidateUserEmailResponse
     */
    isEmailAvailable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ValidateUserEmailResponse
     */
    isEmailValid?: boolean;
}
export declare function ValidateUserEmailResponseFromJSON(json: any): ValidateUserEmailResponse;
export declare function ValidateUserEmailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateUserEmailResponse;
export declare function ValidateUserEmailResponseToJSON(value?: ValidateUserEmailResponse | null): any;