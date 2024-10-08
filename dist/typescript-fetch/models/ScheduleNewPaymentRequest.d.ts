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
 * @interface ScheduleNewPaymentRequest
 */
export interface ScheduleNewPaymentRequest {
    /**
     *
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    baseFeeInCents?: number;
    /**
     *
     * @type {Date}
     * @memberof ScheduleNewPaymentRequest
     */
    chargeRunAtDate?: Date;
    /**
     *
     * @type {string}
     * @memberof ScheduleNewPaymentRequest
     */
    description?: string;
    /**
     *
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    lawfirmReferralCodeAdjustment?: number;
    /**
     *
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    otrCustomerChargeInCents?: number;
    /**
     *
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    otrMarketingFee?: number;
    /**
     *
     * @type {number}
     * @memberof ScheduleNewPaymentRequest
     */
    otrReferralCodeAdjustment?: number;
    /**
     *
     * @type {string}
     * @memberof ScheduleNewPaymentRequest
     */
    recipient?: ScheduleNewPaymentRequestRecipientEnum;
    /**
     *
     * @type {string}
     * @memberof ScheduleNewPaymentRequest
     */
    transactionMethod?: ScheduleNewPaymentRequestTransactionMethodEnum;
    /**
     *
     * @type {string}
     * @memberof ScheduleNewPaymentRequest
     */
    transactionReference?: string;
}
export declare function ScheduleNewPaymentRequestFromJSON(json: any): ScheduleNewPaymentRequest;
export declare function ScheduleNewPaymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleNewPaymentRequest;
export declare function ScheduleNewPaymentRequestToJSON(value?: ScheduleNewPaymentRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ScheduleNewPaymentRequestRecipientEnum {
    COURT = "COURT",
    LAWFIRM = "LAWFIRM",
    OTR = "OTR"
}
/**
* @export
* @enum {string}
*/
export declare enum ScheduleNewPaymentRequestTransactionMethodEnum {
    CASH = "CASH",
    CHECK = "CHECK",
    DESTINATIONCHARGETRANSFER = "DESTINATION_CHARGE_TRANSFER",
    LOBCHECK = "LOB_CHECK",
    PAYPAL = "PAYPAL",
    STRIPEAPPLICATIONFEE = "STRIPE_APPLICATION_FEE",
    STRIPECHARGE = "STRIPE_CHARGE",
    STRIPECONNECTDEBIT = "STRIPE_CONNECT_DEBIT",
    STRIPETRANSFER = "STRIPE_TRANSFER",
    UNKNOWN = "UNKNOWN",
    VENMO = "VENMO",
    WIRETRANSFER = "WIRE_TRANSFER",
    ZELLE = "ZELLE"
}
