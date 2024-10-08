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
 * @interface SyncStripeChargesRequest
 */
export interface SyncStripeChargesRequest {
    /**
     *
     * @type {boolean}
     * @memberof SyncStripeChargesRequest
     */
    isDryRun?: boolean;
    /**
     *
     * @type {number}
     * @memberof SyncStripeChargesRequest
     */
    numChargesToVerify?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof SyncStripeChargesRequest
     */
    stripeChargeIds?: Array<string>;
}
export declare function SyncStripeChargesRequestFromJSON(json: any): SyncStripeChargesRequest;
export declare function SyncStripeChargesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncStripeChargesRequest;
export declare function SyncStripeChargesRequestToJSON(value?: SyncStripeChargesRequest | null): any;
