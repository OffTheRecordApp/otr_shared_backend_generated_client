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
import { LawfirmPayoutDomain } from './';
/**
 *
 * @export
 * @interface GetLawfirmPayoutReversalsResponse
 */
export interface GetLawfirmPayoutReversalsResponse {
    /**
     *
     * @type {Array<LawfirmPayoutDomain>}
     * @memberof GetLawfirmPayoutReversalsResponse
     */
    reversals?: Array<LawfirmPayoutDomain>;
}
export declare function GetLawfirmPayoutReversalsResponseFromJSON(json: any): GetLawfirmPayoutReversalsResponse;
export declare function GetLawfirmPayoutReversalsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmPayoutReversalsResponse;
export declare function GetLawfirmPayoutReversalsResponseToJSON(value?: GetLawfirmPayoutReversalsResponse | null): any;
