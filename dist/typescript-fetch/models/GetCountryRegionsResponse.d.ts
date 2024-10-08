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
import { CountryRegion } from './';
/**
 *
 * @export
 * @interface GetCountryRegionsResponse
 */
export interface GetCountryRegionsResponse {
    /**
     *
     * @type {Array<CountryRegion>}
     * @memberof GetCountryRegionsResponse
     */
    regions?: Array<CountryRegion>;
}
export declare function GetCountryRegionsResponseFromJSON(json: any): GetCountryRegionsResponse;
export declare function GetCountryRegionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCountryRegionsResponse;
export declare function GetCountryRegionsResponseToJSON(value?: GetCountryRegionsResponse | null): any;
