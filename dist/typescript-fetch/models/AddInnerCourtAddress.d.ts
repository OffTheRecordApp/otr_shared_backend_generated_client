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
 * @interface AddInnerCourtAddress
 */
export interface AddInnerCourtAddress {
    /**
     *
     * @type {string}
     * @memberof AddInnerCourtAddress
     */
    addressLine1?: string;
    /**
     *
     * @type {string}
     * @memberof AddInnerCourtAddress
     */
    addressLine2?: string;
    /**
     *
     * @type {string}
     * @memberof AddInnerCourtAddress
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof AddInnerCourtAddress
     */
    countryCode?: string;
    /**
     *
     * @type {string}
     * @memberof AddInnerCourtAddress
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof AddInnerCourtAddress
     */
    postalCode?: string;
    /**
     *
     * @type {CountryRegion}
     * @memberof AddInnerCourtAddress
     */
    region?: CountryRegion;
}
export declare function AddInnerCourtAddressFromJSON(json: any): AddInnerCourtAddress;
export declare function AddInnerCourtAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddInnerCourtAddress;
export declare function AddInnerCourtAddressToJSON(value?: AddInnerCourtAddress | null): any;
