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
 * @interface AssociateOAuthAccountResponse
 */
export interface AssociateOAuthAccountResponse {
    /**
     *
     * @type {string}
     * @memberof AssociateOAuthAccountResponse
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof AssociateOAuthAccountResponse
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof AssociateOAuthAccountResponse
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof AssociateOAuthAccountResponse
     */
    signedProfilePictureUrl?: string;
}
export declare function AssociateOAuthAccountResponseFromJSON(json: any): AssociateOAuthAccountResponse;
export declare function AssociateOAuthAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociateOAuthAccountResponse;
export declare function AssociateOAuthAccountResponseToJSON(value?: AssociateOAuthAccountResponse | null): any;
