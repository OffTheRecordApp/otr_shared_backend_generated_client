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
import { Timestamp } from './timestamp';


export interface StripeCardDomain { 
    addressLine1?: string;
    addressLine1Check?: string;
    addressZip?: string;
    addressZipCheck?: string;
    brand?: string;
    cardId?: string;
    country?: string;
    creationDateUtc?: Timestamp;
    cvcCheck?: string;
    expMonth?: number;
    expYear?: number;
    id?: string;
    isDefault?: boolean;
    isExpired?: boolean;
    last4?: string;
    object?: string;
    ownerFullName?: string;
}

