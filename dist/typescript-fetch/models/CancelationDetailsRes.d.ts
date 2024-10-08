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
 * @interface CancelationDetailsRes
 */
export interface CancelationDetailsRes {
    /**
     *
     * @type {TimestampRes}
     * @memberof CancelationDetailsRes
     */
    cancelationDate?: TimestampRes;
    /**
     *
     * @type {string}
     * @memberof CancelationDetailsRes
     */
    cancelationReason?: string;
    /**
     *
     * @type {number}
     * @memberof CancelationDetailsRes
     */
    canceledByUserId?: number;
    /**
     *
     * @type {string}
     * @memberof CancelationDetailsRes
     */
    canceledByUserName?: string;
}
export declare function CancelationDetailsResFromJSON(json: any): CancelationDetailsRes;
export declare function CancelationDetailsResFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelationDetailsRes;
export declare function CancelationDetailsResToJSON(value?: CancelationDetailsRes | null): any;
