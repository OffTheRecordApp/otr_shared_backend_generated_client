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
 * @interface BillingPriceModel
 */
export interface BillingPriceModel {
    /**
     * 
     * @type {boolean}
     * @memberof BillingPriceModel
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillingPriceModel
     */
    billingScheme?: BillingPriceModelBillingSchemeEnum;
    /**
     * 
     * @type {Date}
     * @memberof BillingPriceModel
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BillingPriceModel
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPriceModel
     */
    interval?: BillingPriceModelIntervalEnum;
    /**
     * 
     * @type {number}
     * @memberof BillingPriceModel
     */
    intervalCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPriceModel
     */
    monthlyUnitAmountInCents?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPriceModel
     */
    priceDescription?: string;
    /**
     * 
     * @type {Date}
     * @memberof BillingPriceModel
     */
    sampleEndDateUtc?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BillingPriceModel
     */
    sampleStartDateUtc?: Date;
    /**
     * 
     * @type {number}
     * @memberof BillingPriceModel
     */
    unitAmountInCents?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPriceModel
     */
    yearlyDiscountInCents?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPriceModel
     */
    yearlyDiscountInPercentage?: number;
}

export function BillingPriceModelFromJSON(json: any): BillingPriceModel {
    return BillingPriceModelFromJSONTyped(json, false);
}

export function BillingPriceModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingPriceModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'billingScheme': !exists(json, 'billingScheme') ? undefined : json['billingScheme'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
        'intervalCount': !exists(json, 'intervalCount') ? undefined : json['intervalCount'],
        'monthlyUnitAmountInCents': !exists(json, 'monthlyUnitAmountInCents') ? undefined : json['monthlyUnitAmountInCents'],
        'priceDescription': !exists(json, 'priceDescription') ? undefined : json['priceDescription'],
        'sampleEndDateUtc': !exists(json, 'sampleEndDateUtc') ? undefined : (new Date(json['sampleEndDateUtc'])),
        'sampleStartDateUtc': !exists(json, 'sampleStartDateUtc') ? undefined : (new Date(json['sampleStartDateUtc'])),
        'unitAmountInCents': !exists(json, 'unitAmountInCents') ? undefined : json['unitAmountInCents'],
        'yearlyDiscountInCents': !exists(json, 'yearlyDiscountInCents') ? undefined : json['yearlyDiscountInCents'],
        'yearlyDiscountInPercentage': !exists(json, 'yearlyDiscountInPercentage') ? undefined : json['yearlyDiscountInPercentage'],
    };
}

export function BillingPriceModelToJSON(value?: BillingPriceModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'billingScheme': value.billingScheme,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'id': value.id,
        'interval': value.interval,
        'intervalCount': value.intervalCount,
        'monthlyUnitAmountInCents': value.monthlyUnitAmountInCents,
        'priceDescription': value.priceDescription,
        'sampleEndDateUtc': value.sampleEndDateUtc === undefined ? undefined : (value.sampleEndDateUtc.toISOString()),
        'sampleStartDateUtc': value.sampleStartDateUtc === undefined ? undefined : (value.sampleStartDateUtc.toISOString()),
        'unitAmountInCents': value.unitAmountInCents,
        'yearlyDiscountInCents': value.yearlyDiscountInCents,
        'yearlyDiscountInPercentage': value.yearlyDiscountInPercentage,
    };
}

/**
* @export
* @enum {string}
*/
export enum BillingPriceModelBillingSchemeEnum {
    PERUNIT = 'PER_UNIT',
    TIERED = 'TIERED',
    UNKNOWN = 'UNKNOWN'
}
/**
* @export
* @enum {string}
*/
export enum BillingPriceModelIntervalEnum {
    DAILY = 'DAILY',
    MONTHLY = 'MONTHLY',
    QUARTERLY = 'QUARTERLY',
    WEEKLY = 'WEEKLY',
    YEARLY = 'YEARLY'
}

