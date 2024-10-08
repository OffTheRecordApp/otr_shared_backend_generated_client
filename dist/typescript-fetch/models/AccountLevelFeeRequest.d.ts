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
import { AccountLevelFeeToSave } from './';
/**
 *
 * @export
 * @interface AccountLevelFeeRequest
 */
export interface AccountLevelFeeRequest {
    /**
     *
     * @type {Array<AccountLevelFeeToSave>}
     * @memberof AccountLevelFeeRequest
     */
    fees?: Array<AccountLevelFeeToSave>;
}
export declare function AccountLevelFeeRequestFromJSON(json: any): AccountLevelFeeRequest;
export declare function AccountLevelFeeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLevelFeeRequest;
export declare function AccountLevelFeeRequestToJSON(value?: AccountLevelFeeRequest | null): any;
