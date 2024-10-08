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
 * @interface CountryDomain
 */
export interface CountryDomain {
    /**
     *
     * @type {string}
     * @memberof CountryDomain
     */
    countryCode?: string;
    /**
     *
     * @type {string}
     * @memberof CountryDomain
     */
    countryName?: string;
}
export declare function CountryDomainFromJSON(json: any): CountryDomain;
export declare function CountryDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountryDomain;
export declare function CountryDomainToJSON(value?: CountryDomain | null): any;
