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
import { MissingLawfirmPayoutResult } from './';
/**
 *
 * @export
 * @interface GetCasesWithMissingLawfirmPayoutsResponse
 */
export interface GetCasesWithMissingLawfirmPayoutsResponse {
    /**
     *
     * @type {number}
     * @memberof GetCasesWithMissingLawfirmPayoutsResponse
     */
    resultCount?: number;
    /**
     *
     * @type {Array<MissingLawfirmPayoutResult>}
     * @memberof GetCasesWithMissingLawfirmPayoutsResponse
     */
    results?: Array<MissingLawfirmPayoutResult>;
}
export declare function GetCasesWithMissingLawfirmPayoutsResponseFromJSON(json: any): GetCasesWithMissingLawfirmPayoutsResponse;
export declare function GetCasesWithMissingLawfirmPayoutsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCasesWithMissingLawfirmPayoutsResponse;
export declare function GetCasesWithMissingLawfirmPayoutsResponseToJSON(value?: GetCasesWithMissingLawfirmPayoutsResponse | null): any;