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
import { ResetFeeForLawfirmModel } from './';
/**
 *
 * @export
 * @interface ResetFeesForLawfirmResponse
 */
export interface ResetFeesForLawfirmResponse {
    /**
     *
     * @type {Array<ResetFeeForLawfirmModel>}
     * @memberof ResetFeesForLawfirmResponse
     */
    models?: Array<ResetFeeForLawfirmModel>;
}
export declare function ResetFeesForLawfirmResponseFromJSON(json: any): ResetFeesForLawfirmResponse;
export declare function ResetFeesForLawfirmResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetFeesForLawfirmResponse;
export declare function ResetFeesForLawfirmResponseToJSON(value?: ResetFeesForLawfirmResponse | null): any;
