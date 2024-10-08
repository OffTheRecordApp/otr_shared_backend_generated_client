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
import { TimestampRes } from './';
/**
 *
 * @export
 * @interface StripeConnectedAccountDomain
 */
export interface StripeConnectedAccountDomain {
    /**
     *
     * @type {string}
     * @memberof StripeConnectedAccountDomain
     */
    accountId?: string;
    /**
     *
     * @type {string}
     * @memberof StripeConnectedAccountDomain
     */
    accountType?: StripeConnectedAccountDomainAccountTypeEnum;
    /**
     *
     * @type {string}
     * @memberof StripeConnectedAccountDomain
     */
    businessName?: string;
    /**
     *
     * @type {boolean}
     * @memberof StripeConnectedAccountDomain
     */
    chargesEnabled?: boolean;
    /**
     *
     * @type {TimestampRes}
     * @memberof StripeConnectedAccountDomain
     */
    connectedDateUtc?: TimestampRes;
    /**
     *
     * @type {TimestampRes}
     * @memberof StripeConnectedAccountDomain
     */
    creationDateUtc?: TimestampRes;
    /**
     *
     * @type {boolean}
     * @memberof StripeConnectedAccountDomain
     */
    detailsSubmitted?: boolean;
    /**
     *
     * @type {string}
     * @memberof StripeConnectedAccountDomain
     */
    email?: string;
    /**
     *
     * @type {number}
     * @memberof StripeConnectedAccountDomain
     */
    id?: number;
    /**
     *
     * @type {boolean}
     * @memberof StripeConnectedAccountDomain
     */
    isDeprecated?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof StripeConnectedAccountDomain
     */
    payoutsEnabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof StripeConnectedAccountDomain
     */
    stripePlatformAccountId?: string;
    /**
     *
     * @type {string}
     * @memberof StripeConnectedAccountDomain
     */
    stripePlatformName?: string;
}
export declare function StripeConnectedAccountDomainFromJSON(json: any): StripeConnectedAccountDomain;
export declare function StripeConnectedAccountDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeConnectedAccountDomain;
export declare function StripeConnectedAccountDomainToJSON(value?: StripeConnectedAccountDomain | null): any;
/**
* @export
* @enum {string}
*/
export declare enum StripeConnectedAccountDomainAccountTypeEnum {
    EXPRESS = "EXPRESS",
    STANDARD = "STANDARD"
}
