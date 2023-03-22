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
export interface CreateBillingSubscriptionItemModel {
    amount?: number;
    billingScheme?: CreateBillingSubscriptionItemModel.BillingSchemeEnum;
    id?: string;
    interval?: CreateBillingSubscriptionItemModel.IntervalEnum;
    intervalCount?: number;
    priceDescription?: string;
    productId?: string;
    quantity?: number;
    tiersMode?: CreateBillingSubscriptionItemModel.TiersModeEnum;
    usageType?: CreateBillingSubscriptionItemModel.UsageTypeEnum;
}
export declare namespace CreateBillingSubscriptionItemModel {
    type BillingSchemeEnum = 'PER_UNIT' | 'TIERED' | 'UNKNOWN';
    const BillingSchemeEnum: {
        PerUnit: BillingSchemeEnum;
        Tiered: BillingSchemeEnum;
        Unknown: BillingSchemeEnum;
    };
    type IntervalEnum = 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY';
    const IntervalEnum: {
        Daily: IntervalEnum;
        Monthly: IntervalEnum;
        Quarterly: IntervalEnum;
        Weekly: IntervalEnum;
        Yearly: IntervalEnum;
    };
    type TiersModeEnum = 'GRADUATED' | 'VOLUME';
    const TiersModeEnum: {
        Graduated: TiersModeEnum;
        Volume: TiersModeEnum;
    };
    type UsageTypeEnum = 'LICENSED' | 'METERED';
    const UsageTypeEnum: {
        Licensed: UsageTypeEnum;
        Metered: UsageTypeEnum;
    };
}