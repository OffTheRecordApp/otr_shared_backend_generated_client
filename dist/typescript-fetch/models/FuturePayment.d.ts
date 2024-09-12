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
 * @interface FuturePayment
 */
export interface FuturePayment {
    /**
     *
     * @type {number}
     * @memberof FuturePayment
     */
    amountDueInCents?: number;
    /**
     *
     * @type {Date}
     * @memberof FuturePayment
     */
    dueDate?: Date;
    /**
     *
     * @type {string}
     * @memberof FuturePayment
     */
    paymentStatus?: FuturePaymentPaymentStatusEnum;
    /**
     *
     * @type {Date}
     * @memberof FuturePayment
     */
    updatedDueDate?: Date;
}
export declare function FuturePaymentFromJSON(json: any): FuturePayment;
export declare function FuturePaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): FuturePayment;
export declare function FuturePaymentToJSON(value?: FuturePayment | null): any;
/**
* @export
* @enum {string}
*/
export declare enum FuturePaymentPaymentStatusEnum {
    AUTHORIZED = "AUTHORIZED",
    CANCELLED = "CANCELLED",
    ERROR = "ERROR",
    EXPIRED = "EXPIRED",
    PAID = "PAID",
    PENDINGLAWFIRMACCEPTANCE = "PENDING_LAWFIRM_ACCEPTANCE",
    REFUNDED = "REFUNDED",
    SCHEDULED = "SCHEDULED",
    UNKNOWN = "UNKNOWN"
}