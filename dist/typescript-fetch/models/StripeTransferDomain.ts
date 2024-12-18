/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    StripeTransferReversalDomain,
    StripeTransferReversalDomainFromJSON,
    StripeTransferReversalDomainFromJSONTyped,
    StripeTransferReversalDomainToJSON,
    TimestampRes,
    TimestampResFromJSON,
    TimestampResFromJSONTyped,
    TimestampResToJSON,
} from './';

/**
 * 
 * @export
 * @interface StripeTransferDomain
 */
export interface StripeTransferDomain {
    /**
     * 
     * @type {number}
     * @memberof StripeTransferDomain
     */
    amountReversed?: number;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferDomain
     */
    currencyCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StripeTransferDomain
     */
    isFullyReversed?: boolean;
    /**
     * 
     * @type {TimestampRes}
     * @memberof StripeTransferDomain
     */
    lastVerifiedDateUtc?: TimestampRes;
    /**
     * 
     * @type {number}
     * @memberof StripeTransferDomain
     */
    reversalCount?: number;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferDomain
     */
    stripeChargeId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferDomain
     */
    stripeDestinationAccountId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferDomain
     */
    stripePaymentId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferDomain
     */
    stripePlatformAccountId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferDomain
     */
    stripeTransferGroupId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeTransferDomain
     */
    stripeTransferId?: string;
    /**
     * 
     * @type {number}
     * @memberof StripeTransferDomain
     */
    transferAmount?: number;
    /**
     * 
     * @type {TimestampRes}
     * @memberof StripeTransferDomain
     */
    transferDateUtc?: TimestampRes;
    /**
     * 
     * @type {Array<StripeTransferReversalDomain>}
     * @memberof StripeTransferDomain
     */
    transferReversals?: Array<StripeTransferReversalDomain>;
}

export function StripeTransferDomainFromJSON(json: any): StripeTransferDomain {
    return StripeTransferDomainFromJSONTyped(json, false);
}

export function StripeTransferDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeTransferDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountReversed': !exists(json, 'amountReversed') ? undefined : json['amountReversed'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'isFullyReversed': !exists(json, 'isFullyReversed') ? undefined : json['isFullyReversed'],
        'lastVerifiedDateUtc': !exists(json, 'lastVerifiedDateUtc') ? undefined : TimestampResFromJSON(json['lastVerifiedDateUtc']),
        'reversalCount': !exists(json, 'reversalCount') ? undefined : json['reversalCount'],
        'stripeChargeId': !exists(json, 'stripeChargeId') ? undefined : json['stripeChargeId'],
        'stripeDestinationAccountId': !exists(json, 'stripeDestinationAccountId') ? undefined : json['stripeDestinationAccountId'],
        'stripePaymentId': !exists(json, 'stripePaymentId') ? undefined : json['stripePaymentId'],
        'stripePlatformAccountId': !exists(json, 'stripePlatformAccountId') ? undefined : json['stripePlatformAccountId'],
        'stripeTransferGroupId': !exists(json, 'stripeTransferGroupId') ? undefined : json['stripeTransferGroupId'],
        'stripeTransferId': !exists(json, 'stripeTransferId') ? undefined : json['stripeTransferId'],
        'transferAmount': !exists(json, 'transferAmount') ? undefined : json['transferAmount'],
        'transferDateUtc': !exists(json, 'transferDateUtc') ? undefined : TimestampResFromJSON(json['transferDateUtc']),
        'transferReversals': !exists(json, 'transferReversals') ? undefined : ((json['transferReversals'] as Array<any>).map(StripeTransferReversalDomainFromJSON)),
    };
}

export function StripeTransferDomainToJSON(value?: StripeTransferDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountReversed': value.amountReversed,
        'currencyCode': value.currencyCode,
        'isFullyReversed': value.isFullyReversed,
        'lastVerifiedDateUtc': TimestampResToJSON(value.lastVerifiedDateUtc),
        'reversalCount': value.reversalCount,
        'stripeChargeId': value.stripeChargeId,
        'stripeDestinationAccountId': value.stripeDestinationAccountId,
        'stripePaymentId': value.stripePaymentId,
        'stripePlatformAccountId': value.stripePlatformAccountId,
        'stripeTransferGroupId': value.stripeTransferGroupId,
        'stripeTransferId': value.stripeTransferId,
        'transferAmount': value.transferAmount,
        'transferDateUtc': TimestampResToJSON(value.transferDateUtc),
        'transferReversals': value.transferReversals === undefined ? undefined : ((value.transferReversals as Array<any>).map(StripeTransferReversalDomainToJSON)),
    };
}


