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
import { StripeChargeDomain } from './';
/**
 *
 * @export
 * @interface GetStripeChargeResponse
 */
export interface GetStripeChargeResponse {
    /**
     *
     * @type {StripeChargeDomain}
     * @memberof GetStripeChargeResponse
     */
    stripeCharge?: StripeChargeDomain;
}
export declare function GetStripeChargeResponseFromJSON(json: any): GetStripeChargeResponse;
export declare function GetStripeChargeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStripeChargeResponse;
export declare function GetStripeChargeResponseToJSON(value?: GetStripeChargeResponse | null): any;
