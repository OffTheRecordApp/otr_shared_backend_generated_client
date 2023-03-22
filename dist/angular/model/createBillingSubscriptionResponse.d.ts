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
import { CreateBillingSubscriptionItemModel } from './createBillingSubscriptionItemModel';
export interface CreateBillingSubscriptionResponse {
    items?: Array<CreateBillingSubscriptionItemModel>;
    startAt?: string;
    status?: CreateBillingSubscriptionResponse.StatusEnum;
    subscriptionId?: string;
}
export declare namespace CreateBillingSubscriptionResponse {
    type StatusEnum = 'ACTIVE' | 'CANCELED' | 'INCOMPLETE' | 'INCOMPLETE_EXPIRED' | 'IN_TRIAL_PERIOD' | 'PAST_DUE' | 'UNKNOWN' | 'UNPAID';
    const StatusEnum: {
        Active: StatusEnum;
        Canceled: StatusEnum;
        Incomplete: StatusEnum;
        IncompleteExpired: StatusEnum;
        InTrialPeriod: StatusEnum;
        PastDue: StatusEnum;
        Unknown: StatusEnum;
        Unpaid: StatusEnum;
    };
}