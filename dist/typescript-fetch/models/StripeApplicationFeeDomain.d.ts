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
import { StripeApplicationFeeRefundDomain, TimestampRes } from './';
/**
 *
 * @export
 * @interface StripeApplicationFeeDomain
 */
export interface StripeApplicationFeeDomain {
    /**
     *
     * @type {number}
     * @memberof StripeApplicationFeeDomain
     */
    amountRefunded?: number;
    /**
     *
     * @type {TimestampRes}
     * @memberof StripeApplicationFeeDomain
     */
    applicationFeeDateUtc?: TimestampRes;
    /**
     *
     * @type {Array<StripeApplicationFeeRefundDomain>}
     * @memberof StripeApplicationFeeDomain
     */
    applicationFeeRefunds?: Array<StripeApplicationFeeRefundDomain>;
    /**
     *
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    currencyCode?: string;
    /**
     *
     * @type {number}
     * @memberof StripeApplicationFeeDomain
     */
    feeAmount?: number;
    /**
     *
     * @type {boolean}
     * @memberof StripeApplicationFeeDomain
     */
    isFullyRefunded?: boolean;
    /**
     *
     * @type {TimestampRes}
     * @memberof StripeApplicationFeeDomain
     */
    lastVerifiedDateUtc?: TimestampRes;
    /**
     *
     * @type {number}
     * @memberof StripeApplicationFeeDomain
     */
    refundCount?: number;
    /**
     *
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripeApplicationFeeId?: string;
    /**
     *
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripeChargeId?: string;
    /**
     *
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripeDestinationAccountId?: string;
    /**
     *
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripePaymentId?: string;
    /**
     *
     * @type {string}
     * @memberof StripeApplicationFeeDomain
     */
    stripePlatformAccountId?: string;
}
export declare function StripeApplicationFeeDomainFromJSON(json: any): StripeApplicationFeeDomain;
export declare function StripeApplicationFeeDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeApplicationFeeDomain;
export declare function StripeApplicationFeeDomainToJSON(value?: StripeApplicationFeeDomain | null): any;