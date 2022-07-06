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

import * as models from './models';

export interface CreateBillingSubscriptionItemModel {
    "amount"?: number;
    "billingScheme"?: CreateBillingSubscriptionItemModel.BillingSchemeEnum;
    "id"?: string;
    "interval"?: CreateBillingSubscriptionItemModel.IntervalEnum;
    "intervalCount"?: number;
    "priceDescription"?: string;
    "productId"?: string;
    "quantity"?: number;
    "tiersMode"?: CreateBillingSubscriptionItemModel.TiersModeEnum;
    "usageType"?: CreateBillingSubscriptionItemModel.UsageTypeEnum;
}

export namespace CreateBillingSubscriptionItemModel {
    export enum BillingSchemeEnum {
        PERUNIT = <any> 'PER_UNIT',
        TIERED = <any> 'TIERED',
        UNKNOWN = <any> 'UNKNOWN'
    }
    export enum IntervalEnum {
        DAILY = <any> 'DAILY',
        MONTHLY = <any> 'MONTHLY',
        QUARTERLY = <any> 'QUARTERLY',
        WEEKLY = <any> 'WEEKLY',
        YEARLY = <any> 'YEARLY'
    }
    export enum TiersModeEnum {
        GRADUATED = <any> 'GRADUATED',
        VOLUME = <any> 'VOLUME'
    }
    export enum UsageTypeEnum {
        LICENSED = <any> 'LICENSED',
        METERED = <any> 'METERED'
    }
}
