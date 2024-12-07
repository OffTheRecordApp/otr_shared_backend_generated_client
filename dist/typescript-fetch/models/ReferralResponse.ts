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
    UserDetails,
    UserDetailsFromJSON,
    UserDetailsFromJSONTyped,
    UserDetailsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReferralResponse
 */
export interface ReferralResponse {
    /**
     * 
     * @type {string}
     * @memberof ReferralResponse
     */
    caseId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReferralResponse
     */
    caseResolved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReferralResponse
     */
    referralCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ReferralResponse
     */
    referralCreditStatus?: ReferralResponseReferralCreditStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ReferralResponse
     */
    referralCreditType?: ReferralResponseReferralCreditTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ReferralResponse
     */
    referralCreditValue?: number;
    /**
     * 
     * @type {Date}
     * @memberof ReferralResponse
     */
    referralDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ReferralResponse
     */
    referralEvent?: ReferralResponseReferralEventEnum;
    /**
     * 
     * @type {Date}
     * @memberof ReferralResponse
     */
    referralExpirationDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof ReferralResponse
     */
    referralId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReferralResponse
     */
    referralPaymentStatus?: ReferralResponseReferralPaymentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ReferralResponse
     */
    referralSourceType?: ReferralResponseReferralSourceTypeEnum;
    /**
     * 
     * @type {UserDetails}
     * @memberof ReferralResponse
     */
    referredUser?: UserDetails;
}

export function ReferralResponseFromJSON(json: any): ReferralResponse {
    return ReferralResponseFromJSONTyped(json, false);
}

export function ReferralResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferralResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'caseResolved': !exists(json, 'caseResolved') ? undefined : json['caseResolved'],
        'referralCode': !exists(json, 'referralCode') ? undefined : json['referralCode'],
        'referralCreditStatus': !exists(json, 'referralCreditStatus') ? undefined : json['referralCreditStatus'],
        'referralCreditType': !exists(json, 'referralCreditType') ? undefined : json['referralCreditType'],
        'referralCreditValue': !exists(json, 'referralCreditValue') ? undefined : json['referralCreditValue'],
        'referralDate': !exists(json, 'referralDate') ? undefined : (new Date(json['referralDate'])),
        'referralEvent': !exists(json, 'referralEvent') ? undefined : json['referralEvent'],
        'referralExpirationDate': !exists(json, 'referralExpirationDate') ? undefined : (new Date(json['referralExpirationDate'])),
        'referralId': !exists(json, 'referralId') ? undefined : json['referralId'],
        'referralPaymentStatus': !exists(json, 'referralPaymentStatus') ? undefined : json['referralPaymentStatus'],
        'referralSourceType': !exists(json, 'referralSourceType') ? undefined : json['referralSourceType'],
        'referredUser': !exists(json, 'referredUser') ? undefined : UserDetailsFromJSON(json['referredUser']),
    };
}

export function ReferralResponseToJSON(value?: ReferralResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseId': value.caseId,
        'caseResolved': value.caseResolved,
        'referralCode': value.referralCode,
        'referralCreditStatus': value.referralCreditStatus,
        'referralCreditType': value.referralCreditType,
        'referralCreditValue': value.referralCreditValue,
        'referralDate': value.referralDate === undefined ? undefined : (value.referralDate.toISOString()),
        'referralEvent': value.referralEvent,
        'referralExpirationDate': value.referralExpirationDate === undefined ? undefined : (value.referralExpirationDate.toISOString()),
        'referralId': value.referralId,
        'referralPaymentStatus': value.referralPaymentStatus,
        'referralSourceType': value.referralSourceType,
        'referredUser': UserDetailsToJSON(value.referredUser),
    };
}

/**
* @export
* @enum {string}
*/
export enum ReferralResponseReferralCreditStatusEnum {
    APPLIED = 'APPLIED',
    CASECANCELLED = 'CASE_CANCELLED',
    CONFIRMED = 'CONFIRMED',
    NOTIFIED = 'NOTIFIED',
    SAVED = 'SAVED',
    SUPERSEDED = 'SUPERSEDED'
}
/**
* @export
* @enum {string}
*/
export enum ReferralResponseReferralCreditTypeEnum {
    CENTSVALUE = 'CENTS_VALUE',
    NOCREDIT = 'NO_CREDIT',
    PERCENTAGEDISCOUNT = 'PERCENTAGE_DISCOUNT'
}
/**
* @export
* @enum {string}
*/
export enum ReferralResponseReferralEventEnum {
    CASEBOOKING = 'CASE_BOOKING',
    CASEMATCH = 'CASE_MATCH',
    INVITE = 'INVITE',
    REGISTRATION = 'REGISTRATION'
}
/**
* @export
* @enum {string}
*/
export enum ReferralResponseReferralPaymentStatusEnum {
    ERROR = 'ERROR',
    NONE = 'NONE',
    PAIDOUT = 'PAID_OUT',
    PENDINGACCOUNTVERIFICATION = 'PENDING_ACCOUNT_VERIFICATION',
    PENDINGCASERESOLUTION = 'PENDING_CASE_RESOLUTION'
}
/**
* @export
* @enum {string}
*/
export enum ReferralResponseReferralSourceTypeEnum {
    ADMIN = 'ADMIN',
    BILLBOARDS = 'BILLBOARDS',
    CHECKOUTCODE = 'CHECKOUT_CODE',
    DMVCOM = 'DMV_COM',
    DMVORG = 'DMV_ORG',
    DWA = 'DWA',
    FACEBOOK = 'FACEBOOK',
    FRIENDORFAMILY = 'FRIEND_OR_FAMILY',
    GOOGLESEARCH = 'GOOGLE_SEARCH',
    INFLUENCERAFFILIATE = 'INFLUENCER_AFFILIATE',
    KICKBACKAPP = 'KICKBACK_APP',
    OTHER = 'OTHER',
    RADIO = 'RADIO',
    REDDIT = 'REDDIT',
    THESMOKINGTIRE = 'THE_SMOKING_TIRE',
    UNKNOWN = 'UNKNOWN',
    VINWIKI = 'VINWIKI',
    YOUTUBEAD = 'YOUTUBE_AD'
}


