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
import { LawfirmRatesResponse } from './';
/**
 *
 * @export
 * @interface LawfirmsRatesResponse
 */
export interface LawfirmsRatesResponse {
    /**
     *
     * @type {Array<LawfirmRatesResponse>}
     * @memberof LawfirmsRatesResponse
     */
    rates?: Array<LawfirmRatesResponse>;
}
export declare function LawfirmsRatesResponseFromJSON(json: any): LawfirmsRatesResponse;
export declare function LawfirmsRatesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawfirmsRatesResponse;
export declare function LawfirmsRatesResponseToJSON(value?: LawfirmsRatesResponse | null): any;