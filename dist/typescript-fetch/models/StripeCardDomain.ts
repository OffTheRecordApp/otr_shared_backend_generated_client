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
    Timestamp,
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
} from './';

/**
 * 
 * @export
 * @interface StripeCardDomain
 */
export interface StripeCardDomain {
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    addressLine1?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    addressLine1Check?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    addressZip?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    addressZipCheck?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    brand?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    cardId?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    country?: string;
    /**
     * 
     * @type {Timestamp}
     * @memberof StripeCardDomain
     */
    creationDateUtc?: Timestamp;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    cvcCheck?: string;
    /**
     * 
     * @type {number}
     * @memberof StripeCardDomain
     */
    expMonth?: number;
    /**
     * 
     * @type {number}
     * @memberof StripeCardDomain
     */
    expYear?: number;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StripeCardDomain
     */
    isDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StripeCardDomain
     */
    isExpired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    last4?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeCardDomain
     */
    ownerFullName?: string;
}

export function StripeCardDomainFromJSON(json: any): StripeCardDomain {
    return StripeCardDomainFromJSONTyped(json, false);
}

export function StripeCardDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeCardDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'addressLine1Check': !exists(json, 'addressLine1Check') ? undefined : json['addressLine1Check'],
        'addressZip': !exists(json, 'addressZip') ? undefined : json['addressZip'],
        'addressZipCheck': !exists(json, 'addressZipCheck') ? undefined : json['addressZipCheck'],
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'cardId': !exists(json, 'cardId') ? undefined : json['cardId'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : TimestampFromJSON(json['creationDateUtc']),
        'cvcCheck': !exists(json, 'cvcCheck') ? undefined : json['cvcCheck'],
        'expMonth': !exists(json, 'expMonth') ? undefined : json['expMonth'],
        'expYear': !exists(json, 'expYear') ? undefined : json['expYear'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isDefault': !exists(json, 'isDefault') ? undefined : json['isDefault'],
        'isExpired': !exists(json, 'isExpired') ? undefined : json['isExpired'],
        'last4': !exists(json, 'last4') ? undefined : json['last4'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'ownerFullName': !exists(json, 'ownerFullName') ? undefined : json['ownerFullName'],
    };
}

export function StripeCardDomainToJSON(value?: StripeCardDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressLine1': value.addressLine1,
        'addressLine1Check': value.addressLine1Check,
        'addressZip': value.addressZip,
        'addressZipCheck': value.addressZipCheck,
        'brand': value.brand,
        'cardId': value.cardId,
        'country': value.country,
        'creationDateUtc': TimestampToJSON(value.creationDateUtc),
        'cvcCheck': value.cvcCheck,
        'expMonth': value.expMonth,
        'expYear': value.expYear,
        'id': value.id,
        'isDefault': value.isDefault,
        'isExpired': value.isExpired,
        'last4': value.last4,
        'object': value.object,
        'ownerFullName': value.ownerFullName,
    };
}

