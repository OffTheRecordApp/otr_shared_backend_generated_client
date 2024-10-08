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
 * @interface AddACHToStripeAccountRequest
 */
export interface AddACHToStripeAccountRequest {
    /**
     *
     * @type {boolean}
     * @memberof AddACHToStripeAccountRequest
     */
    makeDefault?: boolean;
    /**
     *
     * @type {string}
     * @memberof AddACHToStripeAccountRequest
     */
    plaidBankAccountId?: string;
    /**
     *
     * @type {string}
     * @memberof AddACHToStripeAccountRequest
     */
    plaidPublicToken?: string;
}
export declare function AddACHToStripeAccountRequestFromJSON(json: any): AddACHToStripeAccountRequest;
export declare function AddACHToStripeAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddACHToStripeAccountRequest;
export declare function AddACHToStripeAccountRequestToJSON(value?: AddACHToStripeAccountRequest | null): any;
