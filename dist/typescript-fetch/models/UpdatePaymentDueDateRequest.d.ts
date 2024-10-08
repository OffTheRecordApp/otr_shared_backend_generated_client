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
 * @interface UpdatePaymentDueDateRequest
 */
export interface UpdatePaymentDueDateRequest {
    /**
     *
     * @type {Date}
     * @memberof UpdatePaymentDueDateRequest
     */
    paymentDueDate?: Date;
    /**
     *
     * @type {string}
     * @memberof UpdatePaymentDueDateRequest
     */
    timeZoneId?: string;
}
export declare function UpdatePaymentDueDateRequestFromJSON(json: any): UpdatePaymentDueDateRequest;
export declare function UpdatePaymentDueDateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePaymentDueDateRequest;
export declare function UpdatePaymentDueDateRequestToJSON(value?: UpdatePaymentDueDateRequest | null): any;
