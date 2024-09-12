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
import { GetAddressInnerResponse } from './';
/**
 *
 * @export
 * @interface GetCourtsInnerResponse
 */
export interface GetCourtsInnerResponse {
    /**
     *
     * @type {GetAddressInnerResponse}
     * @memberof GetCourtsInnerResponse
     */
    address?: GetAddressInnerResponse;
    /**
     *
     * @type {string}
     * @memberof GetCourtsInnerResponse
     */
    courtCode?: string;
    /**
     *
     * @type {number}
     * @memberof GetCourtsInnerResponse
     */
    courtId?: number;
    /**
     *
     * @type {string}
     * @memberof GetCourtsInnerResponse
     */
    courtName?: string;
    /**
     *
     * @type {string}
     * @memberof GetCourtsInnerResponse
     */
    courtNameAdditional?: string;
}
export declare function GetCourtsInnerResponseFromJSON(json: any): GetCourtsInnerResponse;
export declare function GetCourtsInnerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCourtsInnerResponse;
export declare function GetCourtsInnerResponseToJSON(value?: GetCourtsInnerResponse | null): any;