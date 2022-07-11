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

export interface UserSubscriptionPlanModelReq {
    "id"?: string;
    "subscriptionStatus"?: UserSubscriptionPlanModelReq.SubscriptionStatusEnum;
}

export namespace UserSubscriptionPlanModelReq {
    export enum SubscriptionStatusEnum {
        ACTIVE = <any> 'ACTIVE',
        CANCELED = <any> 'CANCELED',
        INCOMPLETE = <any> 'INCOMPLETE',
        INCOMPLETEEXPIRED = <any> 'INCOMPLETE_EXPIRED',
        INTRIALPERIOD = <any> 'IN_TRIAL_PERIOD',
        PASTDUE = <any> 'PAST_DUE',
        UNKNOWN = <any> 'UNKNOWN',
        UNPAID = <any> 'UNPAID'
    }
}