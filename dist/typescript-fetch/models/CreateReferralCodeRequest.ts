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
 * @interface CreateReferralCodeRequest
 */
export interface CreateReferralCodeRequest {
    /**
     * 
     * @type {boolean}
     * @memberof CreateReferralCodeRequest
     */
    discountOwnerOTR?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof CreateReferralCodeRequest
     */
    endDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateReferralCodeRequest
     */
    refereeCreditType?: CreateReferralCodeRequestRefereeCreditTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof CreateReferralCodeRequest
     */
    refereeCreditValue?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateReferralCodeRequest
     */
    referralCodeOverride?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateReferralCodeRequest
     */
    referralCountLimit?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateReferralCodeRequest
     */
    referrerCreditType?: CreateReferralCodeRequestReferrerCreditTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof CreateReferralCodeRequest
     */
    referrerCreditValue?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateReferralCodeRequest
     */
    referrerUserId?: number;
    /**
     * 
     * @type {Date}
     * @memberof CreateReferralCodeRequest
     */
    startDate?: Date;
}

export function CreateReferralCodeRequestFromJSON(json: any): CreateReferralCodeRequest {
    return CreateReferralCodeRequestFromJSONTyped(json, false);
}

export function CreateReferralCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateReferralCodeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discountOwnerOTR': !exists(json, 'discountOwnerOTR') ? undefined : json['discountOwnerOTR'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'refereeCreditType': !exists(json, 'refereeCreditType') ? undefined : json['refereeCreditType'],
        'refereeCreditValue': !exists(json, 'refereeCreditValue') ? undefined : json['refereeCreditValue'],
        'referralCodeOverride': !exists(json, 'referralCodeOverride') ? undefined : json['referralCodeOverride'],
        'referralCountLimit': !exists(json, 'referralCountLimit') ? undefined : json['referralCountLimit'],
        'referrerCreditType': !exists(json, 'referrerCreditType') ? undefined : json['referrerCreditType'],
        'referrerCreditValue': !exists(json, 'referrerCreditValue') ? undefined : json['referrerCreditValue'],
        'referrerUserId': !exists(json, 'referrerUserId') ? undefined : json['referrerUserId'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function CreateReferralCodeRequestToJSON(value?: CreateReferralCodeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discountOwnerOTR': value.discountOwnerOTR,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'refereeCreditType': value.refereeCreditType,
        'refereeCreditValue': value.refereeCreditValue,
        'referralCodeOverride': value.referralCodeOverride,
        'referralCountLimit': value.referralCountLimit,
        'referrerCreditType': value.referrerCreditType,
        'referrerCreditValue': value.referrerCreditValue,
        'referrerUserId': value.referrerUserId,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum CreateReferralCodeRequestRefereeCreditTypeEnum {
    CENTSVALUE = 'CENTS_VALUE',
    NOCREDIT = 'NO_CREDIT',
    PERCENTAGEDISCOUNT = 'PERCENTAGE_DISCOUNT'
}
/**
* @export
* @enum {string}
*/
export enum CreateReferralCodeRequestReferrerCreditTypeEnum {
    CENTSVALUE = 'CENTS_VALUE',
    NOCREDIT = 'NO_CREDIT',
    PERCENTAGEDISCOUNT = 'PERCENTAGE_DISCOUNT'
}


