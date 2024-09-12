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
 * @interface UpdateLawfirmPayoutResponse
 */
export interface UpdateLawfirmPayoutResponse {
    /**
     *
     * @type {LawfirmPayoutDomain}
     * @memberof UpdateLawfirmPayoutResponse
     */
    lawfirmPayout?: LawfirmPayoutDomain;
}
export declare function UpdateLawfirmPayoutResponseFromJSON(json: any): UpdateLawfirmPayoutResponse;
export declare function UpdateLawfirmPayoutResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLawfirmPayoutResponse;
export declare function UpdateLawfirmPayoutResponseToJSON(value?: UpdateLawfirmPayoutResponse | null): any;