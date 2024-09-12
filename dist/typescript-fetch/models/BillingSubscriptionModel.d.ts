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
import { BillingSubscriptionItemModel, BillingUpcomingInvoiceModel } from './';
/**
 *
 * @export
 * @interface BillingSubscriptionModel
 */
export interface BillingSubscriptionModel {
    /**
     *
     * @type {Date}
     * @memberof BillingSubscriptionModel
     */
    cancelAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof BillingSubscriptionModel
     */
    canceledAt?: Date;
    /**
     *
     * @type {string}
     * @memberof BillingSubscriptionModel
     */
    id?: string;
    /**
     *
     * @type {Array<BillingSubscriptionItemModel>}
     * @memberof BillingSubscriptionModel
     */
    items?: Array<BillingSubscriptionItemModel>;
    /**
     *
     * @type {string}
     * @memberof BillingSubscriptionModel
     */
    productDescription?: string;
    /**
     *
     * @type {string}
     * @memberof BillingSubscriptionModel
     */
    productName?: string;
    /**
     *
     * @type {Date}
     * @memberof BillingSubscriptionModel
     */
    startAt?: Date;
    /**
     *
     * @type {string}
     * @memberof BillingSubscriptionModel
     */
    status?: BillingSubscriptionModelStatusEnum;
    /**
     *
     * @type {BillingUpcomingInvoiceModel}
     * @memberof BillingSubscriptionModel
     */
    upcomingInvoicePreview?: BillingUpcomingInvoiceModel;
}
export declare function BillingSubscriptionModelFromJSON(json: any): BillingSubscriptionModel;
export declare function BillingSubscriptionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingSubscriptionModel;
export declare function BillingSubscriptionModelToJSON(value?: BillingSubscriptionModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum BillingSubscriptionModelStatusEnum {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED",
    INCOMPLETE = "INCOMPLETE",
    INCOMPLETEEXPIRED = "INCOMPLETE_EXPIRED",
    INTRIALPERIOD = "IN_TRIAL_PERIOD",
    PASTDUE = "PAST_DUE",
    UNKNOWN = "UNKNOWN",
    UNPAID = "UNPAID"
}