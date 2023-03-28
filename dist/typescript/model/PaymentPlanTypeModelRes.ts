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

export interface PaymentPlanTypeModelRes {
    "paymentPlanId"?: number;
    "paymentPlanType"?: PaymentPlanTypeModelRes.PaymentPlanTypeEnum;
}

export namespace PaymentPlanTypeModelRes {
    export enum PaymentPlanTypeEnum {
        ALLUPFRONT = <any> 'ALL_UPFRONT',
        THREEPAYMENTSHALFFIRST = <any> 'THREE_PAYMENTS_HALF_FIRST',
        TWOPAYMENTSMONTHLY = <any> 'TWO_PAYMENTS_MONTHLY'
    }
}