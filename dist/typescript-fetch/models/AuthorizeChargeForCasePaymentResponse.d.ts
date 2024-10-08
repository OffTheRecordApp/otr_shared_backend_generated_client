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
import { CaseChargeResponsePojo } from './';
/**
 *
 * @export
 * @interface AuthorizeChargeForCasePaymentResponse
 */
export interface AuthorizeChargeForCasePaymentResponse {
    /**
     *
     * @type {Array<CaseChargeResponsePojo>}
     * @memberof AuthorizeChargeForCasePaymentResponse
     */
    charges?: Array<CaseChargeResponsePojo>;
}
export declare function AuthorizeChargeForCasePaymentResponseFromJSON(json: any): AuthorizeChargeForCasePaymentResponse;
export declare function AuthorizeChargeForCasePaymentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizeChargeForCasePaymentResponse;
export declare function AuthorizeChargeForCasePaymentResponseToJSON(value?: AuthorizeChargeForCasePaymentResponse | null): any;
