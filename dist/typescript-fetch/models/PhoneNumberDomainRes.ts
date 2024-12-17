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
    TimestampRes,
    TimestampResFromJSON,
    TimestampResFromJSONTyped,
    TimestampResToJSON,
} from './';

/**
 * 
 * @export
 * @interface PhoneNumberDomainRes
 */
export interface PhoneNumberDomainRes {
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainRes
     */
    countryCode?: string;
    /**
     * 
     * @type {TimestampRes}
     * @memberof PhoneNumberDomainRes
     */
    creationDateUtc?: TimestampRes;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainRes
     */
    entityType?: PhoneNumberDomainResEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainRes
     */
    extension?: string;
    /**
     * 
     * @type {TimestampRes}
     * @memberof PhoneNumberDomainRes
     */
    lastUpdatedDateUtc?: TimestampRes;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainRes
     */
    phoneNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof PhoneNumberDomainRes
     */
    phoneNumberId?: number;
    /**
     * 
     * @type {number}
     * @memberof PhoneNumberDomainRes
     */
    referenceId?: number;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainRes
     */
    type?: PhoneNumberDomainResTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof PhoneNumberDomainRes
     */
    verificationDateUtc?: Date;
}

export function PhoneNumberDomainResFromJSON(json: any): PhoneNumberDomainRes {
    return PhoneNumberDomainResFromJSONTyped(json, false);
}

export function PhoneNumberDomainResFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumberDomainRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : TimestampResFromJSON(json['creationDateUtc']),
        'entityType': !exists(json, 'entityType') ? undefined : json['entityType'],
        'extension': !exists(json, 'extension') ? undefined : json['extension'],
        'lastUpdatedDateUtc': !exists(json, 'lastUpdatedDateUtc') ? undefined : TimestampResFromJSON(json['lastUpdatedDateUtc']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneNumberId': !exists(json, 'phoneNumberId') ? undefined : json['phoneNumberId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'verificationDateUtc': !exists(json, 'verificationDateUtc') ? undefined : (new Date(json['verificationDateUtc'])),
    };
}

export function PhoneNumberDomainResToJSON(value?: PhoneNumberDomainRes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countryCode': value.countryCode,
        'creationDateUtc': TimestampResToJSON(value.creationDateUtc),
        'entityType': value.entityType,
        'extension': value.extension,
        'lastUpdatedDateUtc': TimestampResToJSON(value.lastUpdatedDateUtc),
        'phoneNumber': value.phoneNumber,
        'phoneNumberId': value.phoneNumberId,
        'referenceId': value.referenceId,
        'type': value.type,
        'verificationDateUtc': value.verificationDateUtc === undefined ? undefined : (value.verificationDateUtc.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum PhoneNumberDomainResEntityTypeEnum {
    CASE = 'CASE',
    CASEPAYMENT = 'CASE_PAYMENT',
    CITATION = 'CITATION',
    COURT = 'COURT',
    LAWFIRM = 'LAWFIRM',
    LAWFIRMCASE = 'LAWFIRM_CASE',
    LAWYER = 'LAWYER',
    LINEITEM = 'LINE_ITEM',
    STRIPECHARGE = 'STRIPE_CHARGE',
    USER = 'USER'
}
/**
* @export
* @enum {string}
*/
export enum PhoneNumberDomainResTypeEnum {
    HOME = 'HOME',
    MOBILE = 'MOBILE',
    NOTSPECIFIED = 'NOT_SPECIFIED',
    OFFICE = 'OFFICE'
}

