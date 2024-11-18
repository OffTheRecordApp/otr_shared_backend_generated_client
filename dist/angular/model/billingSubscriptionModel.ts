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
import { BillingSubscriptionItemModel } from './billingSubscriptionItemModel';
import { BillingUpcomingInvoiceModel } from './billingUpcomingInvoiceModel';


export interface BillingSubscriptionModel { 
    cancelAt?: string;
    canceledAt?: string;
    id?: string;
    items?: Array<BillingSubscriptionItemModel>;
    productDescription?: string;
    productName?: string;
    startAt?: string;
    status?: BillingSubscriptionModel.StatusEnum;
    trialEndAt?: string;
    upcomingInvoicePreview?: BillingUpcomingInvoiceModel;
}
export namespace BillingSubscriptionModel {
    export type StatusEnum = 'ACTIVE' | 'CANCELED' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'IN_TRIAL_PERIOD' | 'PAST_DUE' | 'UNKNOWN' | 'UNPAID';
    export const StatusEnum = {
        Active: 'ACTIVE' as StatusEnum,
        Canceled: 'CANCELED' as StatusEnum,
        Incomplete: 'INCOMPLETE' as StatusEnum,
        IncompleteExpired: 'INCOMPLETE_EXPIRED' as StatusEnum,
        InTrialPeriod: 'IN_TRIAL_PERIOD' as StatusEnum,
        PastDue: 'PAST_DUE' as StatusEnum,
        Unknown: 'UNKNOWN' as StatusEnum,
        Unpaid: 'UNPAID' as StatusEnum
    };
}


