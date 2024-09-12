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
 * @interface ExistingAccountDetails
 */
export interface ExistingAccountDetails {
    /**
     *
     * @type {string}
     * @memberof ExistingAccountDetails
     */
    firstName?: string;
    /**
     *
     * @type {boolean}
     * @memberof ExistingAccountDetails
     */
    ghostAccount?: boolean;
    /**
     *
     * @type {string}
     * @memberof ExistingAccountDetails
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof ExistingAccountDetails
     */
    obfuscatedEmailAddress?: string;
    /**
     *
     * @type {boolean}
     * @memberof ExistingAccountDetails
     */
    phoneVerified?: boolean;
    /**
     *
     * @type {number}
     * @memberof ExistingAccountDetails
     */
    userId?: number;
}
export declare function ExistingAccountDetailsFromJSON(json: any): ExistingAccountDetails;
export declare function ExistingAccountDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExistingAccountDetails;
export declare function ExistingAccountDetailsToJSON(value?: ExistingAccountDetails | null): any;