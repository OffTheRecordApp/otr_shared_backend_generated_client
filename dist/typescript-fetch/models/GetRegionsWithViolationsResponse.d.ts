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
import { AvailableRegion } from './';
/**
 *
 * @export
 * @interface GetRegionsWithViolationsResponse
 */
export interface GetRegionsWithViolationsResponse {
    /**
     *
     * @type {Array<AvailableRegion>}
     * @memberof GetRegionsWithViolationsResponse
     */
    regions?: Array<AvailableRegion>;
}
export declare function GetRegionsWithViolationsResponseFromJSON(json: any): GetRegionsWithViolationsResponse;
export declare function GetRegionsWithViolationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRegionsWithViolationsResponse;
export declare function GetRegionsWithViolationsResponseToJSON(value?: GetRegionsWithViolationsResponse | null): any;