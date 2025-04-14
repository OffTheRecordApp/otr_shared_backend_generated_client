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


export interface SaveBillingProductOptionRequest { 
    interval?: SaveBillingProductOptionRequest.IntervalEnum;
}
export namespace SaveBillingProductOptionRequest {
    export type IntervalEnum = 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY';
    export const IntervalEnum = {
        Daily: 'DAILY' as IntervalEnum,
        Monthly: 'MONTHLY' as IntervalEnum,
        Quarterly: 'QUARTERLY' as IntervalEnum,
        Weekly: 'WEEKLY' as IntervalEnum,
        Yearly: 'YEARLY' as IntervalEnum
    };
}


