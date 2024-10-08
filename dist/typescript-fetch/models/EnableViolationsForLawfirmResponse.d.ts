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
import { EnableViolationResponseModel } from './';
/**
 *
 * @export
 * @interface EnableViolationsForLawfirmResponse
 */
export interface EnableViolationsForLawfirmResponse {
    /**
     *
     * @type {Array<EnableViolationResponseModel>}
     * @memberof EnableViolationsForLawfirmResponse
     */
    models?: Array<EnableViolationResponseModel>;
}
export declare function EnableViolationsForLawfirmResponseFromJSON(json: any): EnableViolationsForLawfirmResponse;
export declare function EnableViolationsForLawfirmResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnableViolationsForLawfirmResponse;
export declare function EnableViolationsForLawfirmResponseToJSON(value?: EnableViolationsForLawfirmResponse | null): any;
