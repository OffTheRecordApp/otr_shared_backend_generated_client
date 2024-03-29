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


export interface StripeTransferReversalDomain { 
    amount?: number;
    currencyCode?: string;
    destinationPaymentRefund?: string;
    lastVerifiedDateUtc?: TimestampRes;
    reversalDateUtc?: TimestampRes;
    stripePlatformAccountId?: string;
    stripeRefundId?: string;
    stripeTransferId?: string;
    stripeTransferReversalId?: string;
}

