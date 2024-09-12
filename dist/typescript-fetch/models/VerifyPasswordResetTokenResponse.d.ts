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
 * @interface VerifyPasswordResetTokenResponse
 */
export interface VerifyPasswordResetTokenResponse {
    /**
     *
     * @type {boolean}
     * @memberof VerifyPasswordResetTokenResponse
     */
    isTokenValid?: boolean;
    /**
     *
     * @type {number}
     * @memberof VerifyPasswordResetTokenResponse
     */
    userId?: number;
}
export declare function VerifyPasswordResetTokenResponseFromJSON(json: any): VerifyPasswordResetTokenResponse;
export declare function VerifyPasswordResetTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyPasswordResetTokenResponse;
export declare function VerifyPasswordResetTokenResponseToJSON(value?: VerifyPasswordResetTokenResponse | null): any;