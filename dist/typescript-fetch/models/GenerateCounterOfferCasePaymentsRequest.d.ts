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
/**
 *
 * @export
 * @interface GenerateCounterOfferCasePaymentsRequest
 */
export interface GenerateCounterOfferCasePaymentsRequest {
    /**
     *
     * @type {string}
     * @memberof GenerateCounterOfferCasePaymentsRequest
     */
    paymentPlanTypeId?: string;
}
export declare function GenerateCounterOfferCasePaymentsRequestFromJSON(json: any): GenerateCounterOfferCasePaymentsRequest;
export declare function GenerateCounterOfferCasePaymentsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateCounterOfferCasePaymentsRequest;
export declare function GenerateCounterOfferCasePaymentsRequestToJSON(value?: GenerateCounterOfferCasePaymentsRequest | null): any;
