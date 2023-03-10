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


export interface PaymentPlanTypeModel { 
    paymentPlanId?: number;
    paymentPlanType?: PaymentPlanTypeModel.PaymentPlanTypeEnum;
}
export namespace PaymentPlanTypeModel {
    export type PaymentPlanTypeEnum = 'ALL_UPFRONT' | 'THREE_PAYMENTS_HALF_FIRST' | 'TWO_PAYMENTS_MONTHLY';
    export const PaymentPlanTypeEnum = {
        AllUpfront: 'ALL_UPFRONT' as PaymentPlanTypeEnum,
        ThreePaymentsHalfFirst: 'THREE_PAYMENTS_HALF_FIRST' as PaymentPlanTypeEnum,
        TwoPaymentsMonthly: 'TWO_PAYMENTS_MONTHLY' as PaymentPlanTypeEnum
    };
}


