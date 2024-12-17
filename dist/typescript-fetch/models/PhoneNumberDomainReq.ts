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
    TimestampReq,
    TimestampReqFromJSON,
    TimestampReqFromJSONTyped,
    TimestampReqToJSON,
} from './';

/**
 * 
 * @export
 * @interface PhoneNumberDomainReq
 */
export interface PhoneNumberDomainReq {
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainReq
     */
    countryCode?: string;
    /**
     * 
     * @type {TimestampReq}
     * @memberof PhoneNumberDomainReq
     */
    creationDateUtc?: TimestampReq;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainReq
     */
    entityType?: PhoneNumberDomainReqEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainReq
     */
    extension?: string;
    /**
     * 
     * @type {TimestampReq}
     * @memberof PhoneNumberDomainReq
     */
    lastUpdatedDateUtc?: TimestampReq;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainReq
     */
    phoneNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof PhoneNumberDomainReq
     */
    phoneNumberId?: number;
    /**
     * 
     * @type {number}
     * @memberof PhoneNumberDomainReq
     */
    referenceId?: number;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumberDomainReq
     */
    type?: PhoneNumberDomainReqTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof PhoneNumberDomainReq
     */
    verificationDateUtc?: Date;
}

export function PhoneNumberDomainReqFromJSON(json: any): PhoneNumberDomainReq {
    return PhoneNumberDomainReqFromJSONTyped(json, false);
}

export function PhoneNumberDomainReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumberDomainReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : TimestampReqFromJSON(json['creationDateUtc']),
        'entityType': !exists(json, 'entityType') ? undefined : json['entityType'],
        'extension': !exists(json, 'extension') ? undefined : json['extension'],
        'lastUpdatedDateUtc': !exists(json, 'lastUpdatedDateUtc') ? undefined : TimestampReqFromJSON(json['lastUpdatedDateUtc']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneNumberId': !exists(json, 'phoneNumberId') ? undefined : json['phoneNumberId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'verificationDateUtc': !exists(json, 'verificationDateUtc') ? undefined : (new Date(json['verificationDateUtc'])),
    };
}

export function PhoneNumberDomainReqToJSON(value?: PhoneNumberDomainReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countryCode': value.countryCode,
        'creationDateUtc': TimestampReqToJSON(value.creationDateUtc),
        'entityType': value.entityType,
        'extension': value.extension,
        'lastUpdatedDateUtc': TimestampReqToJSON(value.lastUpdatedDateUtc),
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
export enum PhoneNumberDomainReqEntityTypeEnum {
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
export enum PhoneNumberDomainReqTypeEnum {
    HOME = 'HOME',
    MOBILE = 'MOBILE',
    NOTSPECIFIED = 'NOT_SPECIFIED',
    OFFICE = 'OFFICE'
}

