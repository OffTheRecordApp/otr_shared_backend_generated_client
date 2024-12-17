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
/**
 * 
 * @export
 * @interface CancelBillingSubscriptionResponse
 */
export interface CancelBillingSubscriptionResponse {
    /**
     * 
     * @type {boolean}
     * @memberof CancelBillingSubscriptionResponse
     */
    cancelAtPeriodEnd?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof CancelBillingSubscriptionResponse
     */
    cancelledAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CancelBillingSubscriptionResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CancelBillingSubscriptionResponse
     */
    status?: CancelBillingSubscriptionResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof CancelBillingSubscriptionResponse
     */
    stripeCustomerId?: string;
}

export function CancelBillingSubscriptionResponseFromJSON(json: any): CancelBillingSubscriptionResponse {
    return CancelBillingSubscriptionResponseFromJSONTyped(json, false);
}

export function CancelBillingSubscriptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelBillingSubscriptionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cancelAtPeriodEnd': !exists(json, 'cancelAtPeriodEnd') ? undefined : json['cancelAtPeriodEnd'],
        'cancelledAt': !exists(json, 'cancelledAt') ? undefined : (new Date(json['cancelledAt'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'stripeCustomerId': !exists(json, 'stripeCustomerId') ? undefined : json['stripeCustomerId'],
    };
}

export function CancelBillingSubscriptionResponseToJSON(value?: CancelBillingSubscriptionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cancelAtPeriodEnd': value.cancelAtPeriodEnd,
        'cancelledAt': value.cancelledAt === undefined ? undefined : (value.cancelledAt.toISOString()),
        'id': value.id,
        'status': value.status,
        'stripeCustomerId': value.stripeCustomerId,
    };
}

/**
* @export
* @enum {string}
*/
export enum CancelBillingSubscriptionResponseStatusEnum {
    ACTIVE = 'ACTIVE',
    CANCELED = 'CANCELED',
    INCOMPLETE = 'INCOMPLETE',
    INCOMPLETEEXPIRED = 'INCOMPLETE_EXPIRED',
    INTRIALPERIOD = 'IN_TRIAL_PERIOD',
    PASTDUE = 'PAST_DUE',
    UNKNOWN = 'UNKNOWN',
    UNPAID = 'UNPAID'
}

