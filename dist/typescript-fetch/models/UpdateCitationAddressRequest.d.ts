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
import { AddressDomainReq } from './';
/**
 *
 * @export
 * @interface UpdateCitationAddressRequest
 */
export interface UpdateCitationAddressRequest {
    /**
     *
     * @type {AddressDomainReq}
     * @memberof UpdateCitationAddressRequest
     */
    address?: AddressDomainReq;
}
export declare function UpdateCitationAddressRequestFromJSON(json: any): UpdateCitationAddressRequest;
export declare function UpdateCitationAddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCitationAddressRequest;
export declare function UpdateCitationAddressRequestToJSON(value?: UpdateCitationAddressRequest | null): any;
