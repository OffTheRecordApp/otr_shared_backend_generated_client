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
 * @interface BillingInvoiceModel
 */
export interface BillingInvoiceModel {
    /**
     *
     * @type {number}
     * @memberof BillingInvoiceModel
     */
    amountDueInCents?: number;
    /**
     *
     * @type {number}
     * @memberof BillingInvoiceModel
     */
    amountPaidInCents?: number;
    /**
     *
     * @type {string}
     * @memberof BillingInvoiceModel
     */
    invoicePdfUrl?: string;
    /**
     *
     * @type {Date}
     * @memberof BillingInvoiceModel
     */
    periodEndDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof BillingInvoiceModel
     */
    periodStartDate?: Date;
    /**
     *
     * @type {string}
     * @memberof BillingInvoiceModel
     */
    status?: BillingInvoiceModelStatusEnum;
}
export declare function BillingInvoiceModelFromJSON(json: any): BillingInvoiceModel;
export declare function BillingInvoiceModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingInvoiceModel;
export declare function BillingInvoiceModelToJSON(value?: BillingInvoiceModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum BillingInvoiceModelStatusEnum {
    DRAFT = "DRAFT",
    OPEN = "OPEN",
    PAID = "PAID",
    UNCOLLECTIBLE = "UNCOLLECTIBLE",
    VOID = "VOID"
}