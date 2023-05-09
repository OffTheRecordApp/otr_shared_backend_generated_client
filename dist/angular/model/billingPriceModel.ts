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


export interface BillingPriceModel { 
    active?: boolean;
    billingScheme?: BillingPriceModel.BillingSchemeEnum;
    createdAt?: string;
    id?: string;
    interval?: BillingPriceModel.IntervalEnum;
    intervalCount?: number;
    monthlyUnitAmountInCents?: number;
    priceDescription?: string;
    unitAmountInCents?: number;
    yearlyDiscountInCents?: number;
    yearlyDiscountInPercentage?: number;
}
export namespace BillingPriceModel {
    export type BillingSchemeEnum = 'PER_UNIT' | 'TIERED' | 'UNKNOWN';
    export const BillingSchemeEnum = {
        PerUnit: 'PER_UNIT' as BillingSchemeEnum,
        Tiered: 'TIERED' as BillingSchemeEnum,
        Unknown: 'UNKNOWN' as BillingSchemeEnum
    };
    export type IntervalEnum = 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY';
    export const IntervalEnum = {
        Daily: 'DAILY' as IntervalEnum,
        Monthly: 'MONTHLY' as IntervalEnum,
        Quarterly: 'QUARTERLY' as IntervalEnum,
        Weekly: 'WEEKLY' as IntervalEnum,
        Yearly: 'YEARLY' as IntervalEnum
    };
}

