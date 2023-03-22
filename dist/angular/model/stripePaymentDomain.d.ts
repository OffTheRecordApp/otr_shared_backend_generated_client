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
import { TimestampRes } from './timestampRes';
import { StripePaymentRefundDomain } from './stripePaymentRefundDomain';
export interface StripePaymentDomain {
    amountRefunded?: number;
    createdByUserId?: number;
    currencyCode?: string;
    isFullyRefunded?: boolean;
    paymentAmount?: number;
    paymentDateUtc?: TimestampRes;
    processingFee?: number;
    refundCount?: number;
    refunds?: Array<StripePaymentRefundDomain>;
    sourceAccountId?: string;
    sourceTransfer?: string;
    stripeApplicationId?: string;
    stripePaymentId?: string;
    stripePlatformAccountId?: string;
}