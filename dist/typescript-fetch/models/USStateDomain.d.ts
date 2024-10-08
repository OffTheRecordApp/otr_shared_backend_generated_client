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
 * @interface USStateDomain
 */
export interface USStateDomain {
    /**
     *
     * @type {string}
     * @memberof USStateDomain
     */
    stateCode?: string;
    /**
     *
     * @type {string}
     * @memberof USStateDomain
     */
    stateName?: string;
}
export declare function USStateDomainFromJSON(json: any): USStateDomain;
export declare function USStateDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): USStateDomain;
export declare function USStateDomainToJSON(value?: USStateDomain | null): any;
