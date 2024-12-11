/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BillingSubscriptionItemModel
 */
export interface BillingSubscriptionItemModel {
    /**
     * 
     * @type {number}
     * @memberof BillingSubscriptionItemModel
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingSubscriptionItemModel
     */
    billingScheme?: BillingSubscriptionItemModelBillingSchemeEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingSubscriptionItemModel
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingSubscriptionItemModel
     */
    interval?: BillingSubscriptionItemModelIntervalEnum;
    /**
     * 
     * @type {number}
     * @memberof BillingSubscriptionItemModel
     */
    intervalCount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingSubscriptionItemModel
     */
    priceDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingSubscriptionItemModel
     */
    productId?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingSubscriptionItemModel
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingSubscriptionItemModel
     */
    tiersMode?: BillingSubscriptionItemModelTiersModeEnum;
    /**
     * 
     * @type {string}
     * @memberof BillingSubscriptionItemModel
     */
    usageType?: BillingSubscriptionItemModelUsageTypeEnum;
}

export function BillingSubscriptionItemModelFromJSON(json: any): BillingSubscriptionItemModel {
    return BillingSubscriptionItemModelFromJSONTyped(json, false);
}

export function BillingSubscriptionItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingSubscriptionItemModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'billingScheme': !exists(json, 'billingScheme') ? undefined : json['billingScheme'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
        'intervalCount': !exists(json, 'intervalCount') ? undefined : json['intervalCount'],
        'priceDescription': !exists(json, 'priceDescription') ? undefined : json['priceDescription'],
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'tiersMode': !exists(json, 'tiersMode') ? undefined : json['tiersMode'],
        'usageType': !exists(json, 'usageType') ? undefined : json['usageType'],
    };
}

export function BillingSubscriptionItemModelToJSON(value?: BillingSubscriptionItemModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'billingScheme': value.billingScheme,
        'id': value.id,
        'interval': value.interval,
        'intervalCount': value.intervalCount,
        'priceDescription': value.priceDescription,
        'productId': value.productId,
        'quantity': value.quantity,
        'tiersMode': value.tiersMode,
        'usageType': value.usageType,
    };
}

/**
* @export
* @enum {string}
*/
export enum BillingSubscriptionItemModelBillingSchemeEnum {
    PERUNIT = 'PER_UNIT',
    TIERED = 'TIERED',
    UNKNOWN = 'UNKNOWN'
}
/**
* @export
* @enum {string}
*/
export enum BillingSubscriptionItemModelIntervalEnum {
    DAILY = 'DAILY',
    MONTHLY = 'MONTHLY',
    QUARTERLY = 'QUARTERLY',
    WEEKLY = 'WEEKLY',
    YEARLY = 'YEARLY'
}
/**
* @export
* @enum {string}
*/
export enum BillingSubscriptionItemModelTiersModeEnum {
    GRADUATED = 'GRADUATED',
    VOLUME = 'VOLUME'
}
/**
* @export
* @enum {string}
*/
export enum BillingSubscriptionItemModelUsageTypeEnum {
    LICENSED = 'LICENSED',
    METERED = 'METERED'
}


