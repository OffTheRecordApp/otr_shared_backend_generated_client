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
 * @interface CustomerPaymentDto
 */
export interface CustomerPaymentDto {
    /**
     *
     * @type {number}
     * @memberof CustomerPaymentDto
     */
    amountDueInCents?: number;
    /**
     *
     * @type {string}
     * @memberof CustomerPaymentDto
     */
    casePaymentId?: string;
    /**
     *
     * @type {Date}
     * @memberof CustomerPaymentDto
     */
    dueDateUtc?: Date;
    /**
     *
     * @type {boolean}
     * @memberof CustomerPaymentDto
     */
    hasFinancialAccess?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CustomerPaymentDto
     */
    overdue?: boolean;
}
export declare function CustomerPaymentDtoFromJSON(json: any): CustomerPaymentDto;
export declare function CustomerPaymentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPaymentDto;
export declare function CustomerPaymentDtoToJSON(value?: CustomerPaymentDto | null): any;
