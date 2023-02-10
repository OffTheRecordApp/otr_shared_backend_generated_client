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
export interface InitiateCaseAndChargeCustomerRequest {
    cardId?: string;
    paymentPlanType?: InitiateCaseAndChargeCustomerRequest.PaymentPlanTypeEnum;
}
export declare namespace InitiateCaseAndChargeCustomerRequest {
    type PaymentPlanTypeEnum = 'ALL_UPFRONT' | 'THREE_PAYMENTS_HALF_FIRST' | 'TWO_PAYMENTS_MONTHLY';
    const PaymentPlanTypeEnum: {
        AllUpfront: PaymentPlanTypeEnum;
        ThreePaymentsHalfFirst: PaymentPlanTypeEnum;
        TwoPaymentsMonthly: PaymentPlanTypeEnum;
    };
}
