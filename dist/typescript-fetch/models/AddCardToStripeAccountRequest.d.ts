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
 * @interface AddCardToStripeAccountRequest
 */
export interface AddCardToStripeAccountRequest {
    /**
     *
     * @type {string}
     * @memberof AddCardToStripeAccountRequest
     */
    caseId?: string;
    /**
     *
     * @type {boolean}
     * @memberof AddCardToStripeAccountRequest
     */
    makeDefault?: boolean;
    /**
     *
     * @type {string}
     * @memberof AddCardToStripeAccountRequest
     */
    sourceToken?: string;
    /**
     *
     * @type {string}
     * @memberof AddCardToStripeAccountRequest
     */
    userId?: string;
}
export declare function AddCardToStripeAccountRequestFromJSON(json: any): AddCardToStripeAccountRequest;
export declare function AddCardToStripeAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddCardToStripeAccountRequest;
export declare function AddCardToStripeAccountRequestToJSON(value?: AddCardToStripeAccountRequest | null): any;