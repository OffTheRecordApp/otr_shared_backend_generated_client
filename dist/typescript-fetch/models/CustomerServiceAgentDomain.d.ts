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
 * @interface CustomerServiceAgentDomain
 */
export interface CustomerServiceAgentDomain {
    /**
     *
     * @type {string}
     * @memberof CustomerServiceAgentDomain
     */
    firstName?: string;
    /**
     *
     * @type {number}
     * @memberof CustomerServiceAgentDomain
     */
    freshcallerAgentId?: number;
    /**
     *
     * @type {number}
     * @memberof CustomerServiceAgentDomain
     */
    freshdeskAgentId?: number;
    /**
     *
     * @type {string}
     * @memberof CustomerServiceAgentDomain
     */
    freshdeskApiToken?: string;
    /**
     *
     * @type {boolean}
     * @memberof CustomerServiceAgentDomain
     */
    isActive?: boolean;
    /**
     *
     * @type {string}
     * @memberof CustomerServiceAgentDomain
     */
    lastName?: string;
    /**
     *
     * @type {number}
     * @memberof CustomerServiceAgentDomain
     */
    userId?: number;
}
export declare function CustomerServiceAgentDomainFromJSON(json: any): CustomerServiceAgentDomain;
export declare function CustomerServiceAgentDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerServiceAgentDomain;
export declare function CustomerServiceAgentDomainToJSON(value?: CustomerServiceAgentDomain | null): any;