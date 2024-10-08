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
 * @interface CreateBillingSubscriptionItemModel
 */
export interface CreateBillingSubscriptionItemModel {
    /**
     *
     * @type {number}
     * @memberof CreateBillingSubscriptionItemModel
     */
    amount?: number;
    /**
     *
     * @type {string}
     * @memberof CreateBillingSubscriptionItemModel
     */
    billingScheme?: CreateBillingSubscriptionItemModelBillingSchemeEnum;
    /**
     *
     * @type {string}
     * @memberof CreateBillingSubscriptionItemModel
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof CreateBillingSubscriptionItemModel
     */
    interval?: CreateBillingSubscriptionItemModelIntervalEnum;
    /**
     *
     * @type {number}
     * @memberof CreateBillingSubscriptionItemModel
     */
    intervalCount?: number;
    /**
     *
     * @type {string}
     * @memberof CreateBillingSubscriptionItemModel
     */
    priceDescription?: string;
    /**
     *
     * @type {string}
     * @memberof CreateBillingSubscriptionItemModel
     */
    productId?: string;
    /**
     *
     * @type {number}
     * @memberof CreateBillingSubscriptionItemModel
     */
    quantity?: number;
    /**
     *
     * @type {string}
     * @memberof CreateBillingSubscriptionItemModel
     */
    tiersMode?: CreateBillingSubscriptionItemModelTiersModeEnum;
    /**
     *
     * @type {string}
     * @memberof CreateBillingSubscriptionItemModel
     */
    usageType?: CreateBillingSubscriptionItemModelUsageTypeEnum;
}
export declare function CreateBillingSubscriptionItemModelFromJSON(json: any): CreateBillingSubscriptionItemModel;
export declare function CreateBillingSubscriptionItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBillingSubscriptionItemModel;
export declare function CreateBillingSubscriptionItemModelToJSON(value?: CreateBillingSubscriptionItemModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CreateBillingSubscriptionItemModelBillingSchemeEnum {
    PERUNIT = "PER_UNIT",
    TIERED = "TIERED",
    UNKNOWN = "UNKNOWN"
}
/**
* @export
* @enum {string}
*/
export declare enum CreateBillingSubscriptionItemModelIntervalEnum {
    DAILY = "DAILY",
    MONTHLY = "MONTHLY",
    QUARTERLY = "QUARTERLY",
    WEEKLY = "WEEKLY",
    YEARLY = "YEARLY"
}
/**
* @export
* @enum {string}
*/
export declare enum CreateBillingSubscriptionItemModelTiersModeEnum {
    GRADUATED = "GRADUATED",
    VOLUME = "VOLUME"
}
/**
* @export
* @enum {string}
*/
export declare enum CreateBillingSubscriptionItemModelUsageTypeEnum {
    LICENSED = "LICENSED",
    METERED = "METERED"
}
